import { useMemo, useState } from 'react';
import { Check, Cloud, Copy, ImagePlus, KeyRound, RotateCcw, Save, Upload } from 'lucide-react';
import {
  defaultImageSlots,
  getDefaultImage,
  readSiteContent,
  writeSiteContent
} from '../data/siteContent';

const cloudinaryConfigKey = 'pihu-logistics-cloudinary-config';

const readCloudinaryConfig = () => {
  try {
    const savedConfig = JSON.parse(window.localStorage.getItem(cloudinaryConfigKey) || '{}');
    return {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
      uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
      folder: import.meta.env.VITE_CLOUDINARY_FOLDER || '',
      ...savedConfig
    };
  } catch {
    return {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
      uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
      folder: import.meta.env.VITE_CLOUDINARY_FOLDER || ''
    };
  }
};

const Admin = () => {
  const [isUnlocked, setIsUnlocked] = useState(() => !import.meta.env.VITE_ADMIN_PASSWORD);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [content, setContent] = useState(() => readSiteContent());
  const [config, setConfig] = useState(() => readCloudinaryConfig());
  const [uploadingSlot, setUploadingSlot] = useState('');
  const [notice, setNotice] = useState('');

  const images = content.images || {};
  const groupedSlots = useMemo(() => {
    return defaultImageSlots.reduce((groups, slot) => {
      groups[slot.section] = groups[slot.section] || [];
      groups[slot.section].push(slot);
      return groups;
    }, {});
  }, []);

  const saveContent = (nextContent, message = 'Website content saved') => {
    setContent(nextContent);
    writeSiteContent(nextContent);
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2600);
  };

  const handleUnlock = (event) => {
    event.preventDefault();
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsUnlocked(true);
      setAuthError('');
      return;
    }

    setAuthError('Incorrect admin password');
  };

  const saveCloudinaryConfig = (nextConfig) => {
    setConfig(nextConfig);
    window.localStorage.setItem(cloudinaryConfigKey, JSON.stringify(nextConfig));
  };

  const setImageUrl = (slotId, url) => {
    saveContent({
      ...content,
      images: {
        ...images,
        [slotId]: url
      }
    });
  };

  const resetImage = (slotId) => {
    const nextImages = { ...images };
    delete nextImages[slotId];
    saveContent({ ...content, images: nextImages }, 'Image reset to default');
  };

  const uploadToCloudinary = async (slotId, file) => {
    if (!file) {
      return;
    }

    if (!config.cloudName || !config.uploadPreset) {
      setNotice('Add Cloudinary cloud name and unsigned preset first');
      return;
    }

    setUploadingSlot(slotId);
    setNotice('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', config.uploadPreset);
      if (config.folder) {
        formData.append('folder', config.folder);
      }

      const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error?.message || 'Cloudinary upload failed');
      }

      setImageUrl(slotId, result.secure_url);
      setNotice('Uploaded to Cloudinary and published');
    } catch (error) {
      setNotice(error.message);
    } finally {
      setUploadingSlot('');
    }
  };

  const copyContentJson = async () => {
    await navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    setNotice('Content JSON copied');
  };

  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-brand-light px-6 py-24">
        <form onSubmit={handleUnlock} className="mx-auto max-w-md bg-white p-8 shadow-premium border border-slate-100 rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
            <KeyRound size={22} />
          </div>
          <h1 className="text-3xl font-bold text-brand-dark mb-3">Admin Login</h1>
          <p className="text-sm text-slate-500 mb-8">Enter your secure administrator password to continue.</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none"
            placeholder="Admin password"
          />
          {authError && <p className="mt-3 text-sm font-semibold text-red-600">{authError}</p>}
          <button className="mt-6 w-full bg-brand-dark text-white rounded-xl py-4 font-bold hover:bg-brand-blue transition-colors">
            Unlock Panel
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-light pt-28 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <div className="text-brand-blue font-bold tracking-widest text-[10px] uppercase mb-3">Pihu Logistics</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">Admin Panel</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={copyContentJson} className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm font-bold text-brand-dark hover:border-brand-blue/40 transition-colors">
              <Copy size={16} />
              Copy JSON
            </button>
            <a href="/" className="inline-flex items-center gap-2 bg-brand-dark text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-brand-blue transition-colors">
              <Check size={16} />
              View Website
            </a>
          </div>
        </div>

        {notice && (
          <div className="mb-8 rounded-xl border border-brand-blue/20 bg-white px-5 py-4 text-sm font-semibold text-brand-dark shadow-sm">
            {notice}
          </div>
        )}

        <section className="bg-white border border-slate-100 shadow-premium rounded-2xl p-6 lg:p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <Cloud size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-dark">Cloudinary Connection</h2>
              <p className="text-sm text-slate-500">Use an unsigned upload preset for browser uploads.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={config.cloudName || ''}
              onChange={(event) => saveCloudinaryConfig({ ...config, cloudName: event.target.value.trim() })}
              className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue/20"
              placeholder="Cloud name"
            />
            <input
              value={config.uploadPreset || ''}
              onChange={(event) => saveCloudinaryConfig({ ...config, uploadPreset: event.target.value.trim() })}
              className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue/20"
              placeholder="Unsigned upload preset"
            />
            <input
              value={config.folder || ''}
              onChange={(event) => saveCloudinaryConfig({ ...config, folder: event.target.value.trim() })}
              className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue/20"
              placeholder="Folder, optional"
            />
          </div>
        </section>

        <div className="space-y-10">
          {Object.entries(groupedSlots).map(([section, slots]) => (
            <section key={section}>
              <h2 className="text-2xl font-bold text-brand-dark mb-5">{section}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {slots.map((slot) => {
                  const currentSrc = images[slot.id] || getDefaultImage(slot.id);
                  const isUploading = uploadingSlot === slot.id;

                  return (
                    <div key={slot.id} className="bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
                      <div className="aspect-[16/9] bg-slate-100">
                        <img src={currentSrc} alt={slot.label} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="font-bold text-brand-dark">{slot.label}</h3>
                            <p className="text-xs text-slate-500 mt-1">{slot.id}</p>
                          </div>
                          <button onClick={() => resetImage(slot.id)} title="Reset image" className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 flex items-center justify-center hover:text-brand-blue hover:border-brand-blue/40 transition-colors">
                            <RotateCcw size={16} />
                          </button>
                        </div>
                        <input
                          value={images[slot.id] || ''}
                          onChange={(event) => setImageUrl(slot.id, event.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue/20 text-sm"
                          placeholder="Paste Cloudinary image URL"
                        />
                        <div className="mt-4 flex flex-wrap gap-3">
                          <label className="inline-flex cursor-pointer items-center gap-2 bg-brand-dark text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-brand-blue transition-colors">
                            {isUploading ? <Upload size={16} className="animate-pulse" /> : <ImagePlus size={16} />}
                            {isUploading ? 'Uploading...' : 'Upload Image'}
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              disabled={isUploading}
                              onChange={(event) => uploadToCloudinary(slot.id, event.target.files?.[0])}
                            />
                          </label>
                          <button onClick={() => setImageUrl(slot.id, currentSrc)} className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm font-bold text-brand-dark hover:border-brand-blue/40 transition-colors">
                            <Save size={16} />
                            Save URL
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Admin;
