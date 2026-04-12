import type { SectionTranslations } from './types';

// Import all specific category data modules
import { defaultData } from './categories/defaultData';
import { businessData } from './categories/businessData';
import { vipData } from './categories/vipData';
import { menuData } from './categories/menuData';
import { interiorData } from './categories/interiorData';
import { contactData } from './categories/contactData';

// Map them into the main data structure used by the app layout
export const INFO_CONTENT: Record<string, SectionTranslations> = {
  default: defaultData,
  business: businessData,
  vip: vipData,
  menu: menuData,
  interior: interiorData,
  contact: contactData
};

export const SIDEBAR_BUTTONS = ['vip', 'menu', 'interior', 'contact'];

export * from './types';
