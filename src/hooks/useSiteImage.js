import { useEffect, useState } from 'react';
import { getImageSrc, SITE_CONTENT_EVENT } from '../data/siteContent';

export const useSiteImage = (slotId) => {
  const [src, setSrc] = useState(() => getImageSrc(slotId));

  useEffect(() => {
    const syncImage = () => setSrc(getImageSrc(slotId));

    window.addEventListener('storage', syncImage);
    window.addEventListener(SITE_CONTENT_EVENT, syncImage);

    return () => {
      window.removeEventListener('storage', syncImage);
      window.removeEventListener(SITE_CONTENT_EVENT, syncImage);
    };
  }, [slotId]);

  return src;
};
