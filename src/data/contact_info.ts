
        
export interface ContactInfoModel {
  whatsappNumber: string;
  email: string;
  phoneNumber: string;
  addressLine1_ar: string;
  addressLine1_en: string;
  googleMapsUrl: string;
  workingHours_ar: string;
  workingHours_en: string;
  socialMedia: SocialMediaModel[];
  baseMessage_productInquiry_ar: string;
  baseMessage_productInquiry_en: string;
  baseMessage_b2bQuote_ar: string;
  baseMessage_b2bQuote_en: string;
  catalogDownloadUrl: string;
}

export interface SocialMediaModel {
  platform: string;
  iconName: string;
  url: string;
}

export const CONTACT_INFO: ContactInfoModel = {
  whatsappNumber: "+96650XXXXXXX", // KSA mock number
  email: "inquiry@nafha-oud.com",
  phoneNumber: "+96611XXXXXXX",
  addressLine1_ar: "الرياض، المملكة العربية السعودية",
  addressLine1_en: "Riyadh, Kingdom of Saudi Arabia",
  googleMapsUrl: "https://maps.app.goo.gl/XXXXXXX", // Placeholder
  workingHours_ar: "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً (بتوقيت الرياض)",
  workingHours_en: "Sun - Thurs: 9:00 AM - 6:00 PM (Riyadh Time)",
  socialMedia: [
    { platform: "Instagram", iconName: "Instagram", url: "https://instagram.com/nafha_oud" },
    { platform: "Twitter", iconName: "Twitter", url: "https://twitter.com/nafha_oud" },
    { platform: "Tiktok", iconName: "Music", url: "https://tiktok.com/@nafha_oud" },
    { platform: "LinkedIn", iconName: "Linkedin", url: "https://linkedin.com/company/nafha-oud" },
  ],
  baseMessage_productInquiry_ar: "مرحباً NAFHA، أود الاستفسار عن المنتج [PRODUCT_NAME].",
  baseMessage_productInquiry_en: "Hello NAFHA, I would like to inquire about the product [PRODUCT_NAME].",
  baseMessage_b2bQuote_ar: "مرحباً NAFHA، أود طلب الكتالوج وعرض سعر لخدمات B2B.",
  baseMessage_b2bQuote_en: "Hello NAFHA, I would like to request the catalog and quotation for B2B services.",
  catalogDownloadUrl: "http://example.com/NAFHA_Catalog_2026.pdf" // 目录下载链接
};

/**
 * Generates a WhatsApp URL with prefilled message.
 * NOTE: For prototype realism, we export the function signature, 
 * but the actual implementation detail (like encoding) would be runtime logic.
 * The core data (constants) are above.
 */
export function getWhatsAppInquiryUrl(productName: string, lang: 'ar' | 'en'): string {
  const baseMessage = lang === 'ar' 
    ? CONTACT_INFO.baseMessage_productInquiry_ar.replace("[PRODUCT_NAME]", productName)
    : CONTACT_INFO.baseMessage_productInquiry_en.replace("[PRODUCT_NAME]", productName);
    
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
}
        
      