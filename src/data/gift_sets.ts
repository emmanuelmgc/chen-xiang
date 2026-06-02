
/**
 * Gift Sets Data File
 * Contains placeholder data for 6 gift sets
 */

import { getWhatsAppInquiryUrl } from './contact_info';

export interface GiftSetModel {
  id: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  priceRange_ar: string;
  priceRange_en: string;
  image: string;
  whatsappInquiryUrl_ar: string;
  whatsappInquiryUrl_en: string;
}

export const GIFT_SETS: GiftSetModel[] = [
  {
    id: "gift_set_1",
    name_ar: "طقم هدايا العيد الفاخر",
    name_en: "Deluxe Eid Gift Set",
    description_ar: "مجموعة فاخرة تحتوي على أعواد بخور منخفضة الدخان، رقائق عود مختارة، ومبخرة صغيرة محمولة. مثالية لتقديم إهداء لا يُنسى.",
    description_en: "A premium collection containing low-smoke incense sticks, selected oud chips, and a portable mini mabkhara. Perfect for an unforgettable gift.",
    priceRange_ar: "499 - 799 SAR",
    priceRange_en: "499 - 799 SAR",
    image: "/images/gifts/placeholder-1.jpg",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("طقم هدايا العيد الفاخر", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Deluxe Eid Gift Set", 'en'),
  },
  {
    id: "gift_set_2",
    name_ar: "مجموعة العود الكلاسيكية",
    name_en: "Classic Oud Collection",
    description_ar: "باقة كلاسيكية من أجود أنواع العود، تشمل أعواد صندل مدخنة منخفضة ومبخرة تقليدية. هدية راقية تناسب جميع المناسبات.",
    description_en: "A classic collection of premium oud, including low-smoke sandalwood sticks and a traditional mabkhara. An elegant gift for all occasions.",
    priceRange_ar: "349 - 549 SAR",
    priceRange_en: "349 - 549 SAR",
    image: "/images/gifts/placeholder-2.jpg",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("مجموعة العود الكلاسيكية", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Classic Oud Collection", 'en'),
  },
  {
    id: "gift_set_3",
    name_ar: "طقم هدايا الأعمال",
    name_en: "Corporate Gift Set",
    description_ar: "مجموعة فاخرة مصممة خصيصاً للأعمال والمناسبات الرسمية. تحتوي على عود متميز وتغليف أنيق يعكس الاحترافية والذوق الرفيع.",
    description_en: "A premium set designed specifically for corporate and formal occasions. Contains distinguished oud with elegant packaging reflecting professionalism and refined taste.",
    priceRange_ar: "799 - 1299 SAR",
    priceRange_en: "799 - 1299 SAR",
    image: "/images/gifts/placeholder-3.jpg",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("طقم هدايا الأعمال", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Corporate Gift Set", 'en'),
  },
  {
    id: "gift_set_4",
    name_ar: "مجموعة رمضان المبارك",
    name_en: "Blessed Ramadan Collection",
    description_ar: "طقم مميز للاحتفال بشهر رمضان المبارك. يحتوي على بخور رمضاني خاص ومبخرة كهربائية حديثة، مثالي لأجواء الشهر الفضيل.",
    description_en: "A special set for celebrating the blessed month of Ramadan. Contains special Ramadan bakhoor and a modern electric mabkhara, perfect for the holy month atmosphere.",
    priceRange_ar: "599 - 899 SAR",
    priceRange_en: "599 - 899 SAR",
    image: "/images/gifts/placeholder-4.jpg",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("مجموعة رمضان المبارك", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Blessed Ramadan Collection", 'en'),
  },
  {
    id: "gift_set_5",
    name_ar: "طقم هدايا العرس",
    name_en: "Wedding Gift Set",
    description_ar: "مجموعة فاخرة للأعراس والمناسبات السعيدة. تشمل عود نقي بتركيز عالي وتغليف فخم، هدية تخلد في الذاكرة.",
    description_en: "A luxury collection for weddings and joyous occasions. Includes pure high-concentration oud with luxurious packaging, a gift to be remembered.",
    priceRange_ar: "999 - 1499 SAR",
    priceRange_en: "999 - 1499 SAR",
    image: "/images/gifts/placeholder-5.jpg",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("طقم هدايا العرس", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Wedding Gift Set", 'en'),
  },
  {
    id: "gift_set_6",
    name_ar: "مجموعة الضيافة المنزلية",
    name_en: "Home Hospitality Collection",
    description_ar: "طقم شامل للضيافة المنزلية، يحتوي على تشكيلة متنوعة من البخور والمباخر. يضفي دفئاً وترحيباً لكل بيت.",
    description_en: "A comprehensive set for home hospitality, containing a diverse selection of bakhoor and mabkharas. Adds warmth and welcome to every home.",
    priceRange_ar: "399 - 699 SAR",
    priceRange_en: "399 - 699 SAR",
    image: "/images/gifts/placeholder-6.jpg",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("مجموعة الضيافة المنزلية", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Home Hospitality Collection", 'en'),
  },
];
