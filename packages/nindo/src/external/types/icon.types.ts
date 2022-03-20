export type TPluginIcon = 
  'product-blobs' | 
  'brackets' | 
  'testimonials' | 
  'compare-tables' | 
  'before-after' | 
  'automatic-stories' | 
  'numbers-counter' | 
  'image-hotspot' | 
  'charts' | 
  'announcements' | 
  'whatsapp-button' | 
  'faq' | 
  'timeline' | 
  'telegram-button' | 
  'audio-player' | 
  'pricing-tables' | 
  'messenger-button' | 
  'countdown-bar' | 
  'pdf-gallery' | 
  'social-feeds' | 
  'business-hours' | 
  'logo-showcase';

export const iconToNumberOfPaths: { [key: string]: number } = {
  'product-blobs': 1,
  'brackets': 2,
  'testimonials': 7,
  'compare-tables': 8,
  'before-after': 6,
  'automatic-stories': 4,
  'numbers-counter': 1,
  'image-hotspot': 5,
  'charts': 2,
  'announcements': 5,
  'whatsapp-button': 3,
  'faq': 7,
  'timeline': 1,
  'telegram-button': 3,
  'audio-player': 3,
  'pricing-tables': 6,
  'messenger-button': 4,
  'countdown-bar': 6,
  'pdf-gallery': 8,
  'social-feeds': 9,
  'business-hours': 13,
  'logo-showcase': 7
};