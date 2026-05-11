import warehouseHero from '../assets/warehouse_hero.png';
import containerYard from '../assets/container_yard.png';

export const SITE_CONTENT_STORAGE_KEY = 'pihu-logistics-site-content';
export const SITE_CONTENT_EVENT = 'pihu-logistics-site-content-updated';

export const defaultImageSlots = [
  {
    id: 'siteLogo',
    label: 'Website Logo',
    section: 'Brand',
    defaultSrc: '/pihu-logo.png'
  },
  {
    id: 'heroImage',
    label: 'Home Hero Image',
    section: 'Home',
    defaultSrc: warehouseHero
  },
  {
    id: 'servicesOverviewImage',
    label: 'Services Overview Image',
    section: 'Home',
    defaultSrc: containerYard
  },
  {
    id: 'homeAboutImage',
    label: 'Home About Image',
    section: 'Home',
    defaultSrc: containerYard
  },
  {
    id: 'serviceWarehousingImage',
    label: 'Warehousing Service Image',
    section: 'Services',
    defaultSrc: warehouseHero
  },
  {
    id: 'serviceTransportImage',
    label: 'Transport Service Image',
    section: 'Services',
    defaultSrc: containerYard
  },
  {
    id: 'serviceCustomizedImage',
    label: 'Customized Logistics Image',
    section: 'Services',
    defaultSrc: warehouseHero
  },
  {
    id: 'serviceDigitalImage',
    label: 'Digital Integrations Image',
    section: 'Services',
    defaultSrc: containerYard
  },
  {
    id: 'aboutHistoryImage',
    label: 'About History Image',
    section: 'About',
    defaultSrc: warehouseHero
  }
];

export const getDefaultImage = (slotId) => {
  return defaultImageSlots.find((slot) => slot.id === slotId)?.defaultSrc || '';
};

export const readSiteContent = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    return JSON.parse(window.localStorage.getItem(SITE_CONTENT_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};

export const writeSiteContent = (content) => {
  window.localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event(SITE_CONTENT_EVENT));
};

export const getImageSrc = (slotId) => {
  const content = readSiteContent();
  return content.images?.[slotId] || getDefaultImage(slotId);
};
