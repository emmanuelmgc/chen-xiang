
        
import { getWhatsAppInquiryUrl } from './contact_info';

// --- Global Models ---

export type ProductType = 'incense_stick' | 'bakhoor' | 'mabkhara_accessory' | 'gift_set';

export interface BadgeModel {
  id: 'low_smoke' | 'gifting' | 'new_arrival' | 'best_seller';
  label_ar: string;
  label_en: string;
  iconName: string;
  color: string;
}

export interface ProductSummaryModel {
  id: string;
  name_ar: string;
  name_en: string;
  category: ProductType;
  imageUrl: string;
  badges: BadgeModel['id'][];
  priceRange_ar: string; // e.g., "79 - 129 SAR" or "السعر عند الطلب"
  priceRange_en: string; // e.g., "79 - 129 SAR" or "Price on request"
  detailUrl: string;
  whatsappInquiryUrl_ar: string;
  whatsappInquiryUrl_en: string;
}

export interface ProductSourcingModel {
  origin_ar: string; // 产区
  origin_en: string;
  batch_number: string; // 批次
  year_ar: string; // 年份
  year_en: string;
  grade_ar: string; // 等级
  grade_en: string;
}

export interface ProductSpecModel {
  weight_ar: string; // 例如: "30 عصا / 15 جم"
  weight_en: string; // e.g., "30 Sticks / 15g"
  burnTime_ar: string; // 例如: "30-40 دقيقة (للعصا)"
  burnTime_en: string; // e.g., "30-40 Min (per stick)"
  smokeLevel_ar: string; // 例如: "منخفض جداً"
  smokeLevel_en: string; // e.g., "Very Low"
  applicableSpace_ar: string; // 例如: "10-25 متر مربع"
  applicableSpace_en: string; // e.g., "10-25 Sqm"
  material_ar: string; // 原材料
  material_en: string;
}

export interface CertificateModel {
  id: string;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  imageUrl: string;
}

export interface HowToUseStepModel {
  step: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  iconName: string;
}

export interface ProductFullModel extends ProductSummaryModel {
  description_ar: string;
  description_en: string;
  galleryUrls: string[];
  specs: ProductSpecModel;
  sourcing: ProductSourcingModel;
  certificates: CertificateModel[];
  howToUse: HowToUseStepModel[];
  safetyNotice_ar: string;
  safetyNotice_en: string;
  relatedProductsIds: string[];
}


// --- Constants / Mock Data ---

// Badges
export const PRODUCT_BADGES: Record<BadgeModel['id'], BadgeModel> = {
  low_smoke: { id: 'low_smoke', label_ar: "دخان منخفض", label_en: "Low Smoke", iconName: "CloudOff", color: "#0F6B54" }, // Accent Green
  gifting: { id: 'gifting', label_ar: "مثالي للإهداء", label_en: "Gifting Essential", iconName: "Gift", color: "#C4A464" }, // Primary Gold
  new_arrival: { id: 'new_arrival', label_ar: "وصول جديد", label_en: "New Arrival", iconName: "Sparkles", color: "#2B2B2B" },
  best_seller: { id: 'best_seller', label_ar: "الأكثر مبيعاً", label_en: "Best Seller", iconName: "Star", color: "#C4A464" },
};

// 5 Main Product Mockups
const MOCK_PRODUCTS_DATA: ProductFullModel[] = [
  {
    id: "stick_sandal_classic",
    name_ar: "أعواد صندل كلاسيكية مدخنة منخفضة",
    name_en: "Classic Sandal Low-Smoke Incense Sticks",
    category: 'incense_stick',
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/26dbf31b-e8e9-450e-b04f-22ddaf27a466.png",
    badges: ['low_smoke', 'best_seller'],
    priceRange_ar: "99 - 179 SAR",
    priceRange_en: "99 - 179 SAR",
    detailUrl: "./product-detail.html?id=stick_sandal_classic",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("أعواد صندل كلاسيكية", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Classic Sandal Incense Sticks", 'en'),
    description_ar: "مصممة للبيئات الحضرية. توفر رائحة الصندل الكلاسيكية دون دخان ثقيل أو رماد متطاير، مثالية للمساحات الصغيرة والمكاتب.",
    description_en: "Designed for urban environments. Offers a classic sandalwood scent without heavy smoke or flying ash. Ideal for small spaces and offices.",
    galleryUrls: [
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/198305a9-eacd-4b3b-8255-6a2d1ba6f663.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/63b134f5-81c5-4db4-8308-eafc9ec20e4b.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/d0e416bd-4f12-4212-b05b-865322ed0ced.png",
    ],
    specs: {
      weight_ar: "30 عصا / 15 جم", weight_en: "30 Sticks / 15g",
      burnTime_ar: "40 دقيقة (للعصا)", burnTime_en: "40 Min (per stick)",
      smokeLevel_ar: "منخفض جداً", smokeLevel_en: "Very Low",
      applicableSpace_ar: "15-20 متر مربع", applicableSpace_en: "15-20 Sqm",
      material_ar: "خشب صندل مع لاصق نباتي", material_en: "Sandalwood with Vegetable Binder",
    },
    sourcing: {
      origin_ar: "قوائم بالي، اندونيسيا", origin_en: "Gowyem Bali, Indonesia",
      batch_number: "NAF2025Q4-001", year_ar: "2023 تجميع", year_en: "2023 Harvest",
      grade_ar: "A+", grade_en: "A+",
    },
    certificates: [
      { id: "safety", title_ar: "شهادة السلامة للمواد", title_en: "Material Safety Certificate", summary_ar: "يؤكد خلوه من الملوثات الشائعة والملحقات الكيميائية", summary_en: "Confirms absence of common pollutants and chemical additives", imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/f4c494b6-0de8-461c-8c33-7055e99b8f93.png" },
    ],
    howToUse: [
      { step: 1, title_ar: "أشعل الطرف", title_en: "Light the Tip", description_ar: "أشعل طرف العود ثم اتركه ليحترق لمدة 5 ثواني.", description_en: "Light the tip of the stick and allow it to burn for 5 seconds.", iconName: "Flame" },
      { step: 2, title_ar: "أطفئ الشعلة", title_en: "Blow out the Flame", description_ar: "أطفئ الشعلة بلطف، واترك العود يدخن فقط.", description_en: "Gently blow out the flame, allowing the stick to only smolder.", iconName: "Sunrise" },
      { step: 3, title_ar: "ثبته في المبخرة", title_en: "Place in Mabkhara", description_ar: "ثبت العود في مبخرة مناسبة وتأكد من وجود تهوية جيدة.", description_en: "Place the stick securely in a suitable mabkhara, ensuring good ventilation.", iconName: "Fan" }
    ],
    safetyNotice_ar: "للاستخدام الخارجي فقط. أبقِ المنتج بعيداً عن متناول الأطفال والحيوانات الأليفة والمواد القابلة للاشتعال. لا تترك العود المشتعل دون مراقبة. تأكد من تهوية الغرفة بشكل جيد.",
    safetyNotice_en: "For external use only. Keep away from children, pets, and flammable materials. Never leave burning incense unattended. Ensure the room is well-ventilated.",
    relatedProductsIds: ["bakhoor_oud_patchouli", "mabkhara_electric_gold"]
  },
  {
    id: "bakhoor_oud_patchouli",
    name_ar: "بخور رقائق العود والباتشولي النبيلة",
    name_en: "Noble Oud & Patchouli Bakhoor Chips",
    category: 'bakhoor',
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/0199edac-861f-4d22-b63b-f374102ecb78.png",
    badges: ['gifting', 'new_arrival'],
    priceRange_ar: "249 - 399 SAR",
    priceRange_en: "249 - 399 SAR",
    detailUrl: "./product-detail.html?id=bakhoor_oud_patchouli",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("بخور العود والباتشولي النبيلة", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Noble Oud & Patchouli Bakhoor", 'en'),
    description_ar: "مزيج فاخر من العود الهندي القديم ونفحات الباتشولي الترابية. مثالي لاستقبال الضيوف والمناسبات الرسمية، يوفر انتشاراً غنياً ودافئاً في المساحات الكبيرة.",
    description_en: "A luxurious blend of aged Indian Oud and earthy patchouli notes. Ideal for welcoming guests and formal occasions, providing a rich, warm throw in large spaces.",
    galleryUrls: [
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/049e975b-db69-4cbc-86b2-57d0f500f98f.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/5310c1b2-5a92-42e7-8382-48d79c98d5f8.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/a0435707-2295-4994-bc57-c0c918473b7e.png",
    ],
    specs: {
      weight_ar: "50 جرام", weight_en: "50 Grams",
      burnTime_ar: "3 ساعات إجمالي (للاستخدام المتقطع)", burnTime_en: "3 Hrs Total (Intermittent Use)",
      smokeLevel_ar: "تقليدي", smokeLevel_en: "Traditional",
      applicableSpace_ar: "50+ متر مربع", applicableSpace_en: "50+ Sqm",
      material_ar: "رقائق عود هندي، زيوت عطرية طبيعية، راتنجات", material_en: "Indian Oud Chips, Natural Oil, Resins",
    },
    sourcing: {
      origin_ar: "آسام (الهند)، غابات باتشولي (اندونيسيا)", origin_en: "Assam (India), Patchouli Forests (Indonesia)",
      batch_number: "BAK2025Q3-005", year_ar: "2024 تحضير", year_en: "2024 Prepared",
      grade_ar: "ممتاز", grade_en: "Excellent",
    },
    certificates: [
      { id: "traceability", title_ar: "شهادة مصدر العود", title_en: "Oud Source Traceability", summary_ar: "توثيق مصدر العود وجودته بناءً على الدفعة", summary_en: "Documentation of Oud source and quality based on batch" , imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/68d2f37e-326b-4e03-bff6-fba5328fa463.png"}
    ],
    howToUse: [
      { step: 1, title_ar: "سخن المبخرة", title_en: "Heat the Mabkhara", description_ar: "استخدم مبخرة كهربائية أو أشعل فحم بخور طبيعي.", description_en: "Use an electric mabkhara or light natural bakhoor charcoal.", iconName: "Sparkles" },
      { step: 2, title_ar: "ضع الرقائق", title_en: "Place the Chips", description_ar: "ضع قطعة صغيرة من البخور مباشرة على مصدر الحرارة (أو فوق رقاقة عازلة).", description_en: "Place a small piece of bakhoor directly on the heat source (or on an insulator shim).", iconName: "Tongs" },
      { step: 3, title_ar: "استمتع بالرائحة", title_en: "Enjoy the Aroma", description_ar: "اترك البخور ينتشر في أرجاء المكان لتعزيز الضيافة.", description_en: "Allow the bakhoor to spread throughout the space to enhance hospitality.", iconName: "Feather" }
    ],
    safetyNotice_ar: "يستخدم مع المبخرة فقط. لا تلمس الرقائق الساخنة. يُحفظ في مكان بارد وجاف لمنع التلف. تأكد من إطفاء المصدر بعد الانتهاء.",
    safetyNotice_en: "Use with mabkhara only. Do not touch hot chips. Store in a cool, dry place to prevent damage. Ensure the source is extinguished after use.",
    relatedProductsIds: ["stick_sandal_classic", "gift_eid_deluxe"]
  },
  {
    id: "mabkhara_electric_gold",
    name_ar: "مبخرة كهربائية بتصميم ذهبي حديث",
    name_en: "Modern Gold Electric Mabkhara",
    category: 'mabkhara_accessory',
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/e0112abf-ce4c-4257-a91e-a53216c64547.png",
    badges: ['best_seller'],
    priceRange_ar: "199 - 499 SAR",
    priceRange_en: "199 - 499 SAR",
    detailUrl: "./product-detail.html?id=mabkhara_electric_gold",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("مبخرة كهربائية بتصميم ذهبي", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Modern Gold Electric Mabkhara", 'en'),
    description_ar: "مبخرة كهربائية آمنة وفعالة، مثالية لحرق البخور ورقائق العود عند درجة حرارة مثالية تضمن ثبات الرائحة ونظافة التجربة.",
    description_en: "Safe and efficient electric mabkhara, ideal for burning bakhoor and oud chips at an optimal temperature, ensuring consistent aroma and a clean experience.",
    galleryUrls: [
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/b04277ba-df52-4f33-a9be-7d7c124642cb.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/84b75bb3-4f0c-49ca-9cc9-348cfa4c856c.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/c610c2f8-1641-4c53-bbdc-9b1bc7823e7b.png",
    ],
    specs: {
      weight_ar: "800 جرام", weight_en: "800 Grams",
      burnTime_ar: "تسخين مستمر حتى 3 ساعات", burnTime_en: "Continuous heating up to 3 hours",
      smokeLevel_ar: "بدون دخان إضافي (يعتمد على البخور)", smokeLevel_en: "No added smoke (Bakhoor dependent)",
      applicableSpace_ar: "أي مساحة داخلية", applicableSpace_en: "Any indoor space",
      material_ar: "قاعدة من النحاس المطلي بالذهب", material_en: "Gold-plated brass base",
    },
    sourcing: {
      origin_ar: "شنجن، الصين (بتصميم NAFHA)", origin_en: "Shenzhen, China (NAFHA Design)",
      batch_number: "MAB2025Q1-022", year_ar: "2025 إنتاج", year_en: "2025 Production",
      grade_ar: "الكترونيات قياسية", grade_en: "Standard Electronics",
    },
    certificates: [
      { id: "ce", title_ar: "شهادة المطابقة الأوروبية (CE)", title_en: "European Conformity Certificate (CE)", summary_ar: "يؤكد استيفاء معايير السلامة والأداء في الاتحاد الأوروبي", summary_en: "Confirms compliance with EU safety and performance standards", imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/a0c9607c-61a2-431e-ba20-3173a206847b.png" }
    ],
    howToUse: [
      { step: 1, title_ar: "وصل المبخرة بالكهرباء", title_en: "Plug it in", description_ar: "وصلها بمصدر مناسب واضغط زر التشغيل.", description_en: "Connect to a suitable source and press the power button.", iconName: "Plug" },
      { step: 2, title_ar: "انتظر التسخين", title_en: "Wait for Heat", description_ar: "انتظر حتى تصل إلى درجة الحرارة المثالية (قد يستغرق 5 دقائق).", description_en: "Wait until it reaches optimal temperature (may take 5 minutes).", iconName: "Clock" },
      { step: 3, title_ar: "تنظيفها", title_en: "Cleaning", description_ar: "بعد التبريد، امسح بقايا البخور بقطعة قماش ناعمة وجافة.", description_en: "After cooling, wipe any bakhoor residue with a soft, dry cloth.", iconName: "WashingMachine" }
    ],
    safetyNotice_ar: "لا تغمر المبخرة بالماء. استخدمها فقط على سطح مقاوم للحرارة وبعيداً عن المواد القابلة للاشتعال. احتفظ بها بعيداً عن الرطوبة.",
    safetyNotice_en: "Do not immerse in water. Use only on a heat-resistant surface away from flammable materials. Keep away from moisture.",
    relatedProductsIds: ["bakhoor_oud_patchouli", "stick_sandal_classic"]
  },
  {
    id: "gift_eid_deluxe",
    name_ar: "طقم هدايا العيد الفاخر (عود و مبخرة)",
    name_en: "Deluxe Eid Gift Set (Oud & Mabkhara)",
    category: 'gift_set',
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/88d85477-1c2c-4e21-b06d-3da8e197be1a.png",
    badges: ['gifting', 'new_arrival'],
    priceRange_ar: "499 - 799 SAR",
    priceRange_en: "499 - 799 SAR",
    detailUrl: "./product-detail.html?id=gift_eid_deluxe",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("طقم هدايا العيد الفاخر", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Deluxe Eid Gift Set", 'en'),
    description_ar: "هدية فاخرة ومصممة خصيصاً للاحتفال بالعيد. يحتوي على أعواد بخور منخفضة الدخان، رقائق عود مختارة، ومبخرة صغيرة محمولة. مثالي لتقديم إهداء لا يُنسى.",
    description_en: "A premium, specially designed gift for Eid celebrations. Contains low-smoke incense sticks, selected oud chips, and a portable mini mabkhara. Perfect for an unforgettable gift.",
    galleryUrls: [
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/bc499de1-4255-4961-ba18-05515021a9b5.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/8f18309d-0247-4d08-bcff-71ed492649b2.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/81fbe9b9-b2a6-469c-a7bf-3f4546fe25c1.png",
    ],
    specs: {
      weight_ar: "مجموعة منوعة", weight_en: "Assorted Collection",
      burnTime_ar: "متنوع حسب المنتج", burnTime_en: "Varies by product",
      smokeLevel_ar: "منخفض ومتوسط", smokeLevel_en: "Low and Medium",
      applicableSpace_ar: "للأفراد والعائلة", applicableSpace_en: "Personal and Family Use",
      material_ar: "مزيج من العود، الراتنجات، والمعدن", material_en: "Mix of Oud, Resins, and Metal",
    },
    sourcing: {
      origin_ar: "مكونات مختارة من مصادر NAFHA", origin_en: "Curated components from NAFHA sources",
      batch_number: "GFT2025EID-C01", year_ar: "2025 تجميع", year_en: "2025 Assembly",
      grade_ar: "هدايا فاخرة", grade_en: "Premium Gifting",
    },
    certificates: [
      { id: "gifting_quality", title_ar: "ضمان جودة الاهداء", title_en: "Gifting Quality Assurance", summary_ar: "ضمان وصول المجموعة في حالة ممتازة مع تغليف إضافي", summary_en: "Guarantee the set arrives in excellent condition with extra packaging", imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/53793d3b-3de9-49d6-9a3e-b41c6445d23a.png" }
    ],
    howToUse: [
      { step: 1, title_ar: "اختر المنتج", title_en: "Select Product", description_ar: "اختر ما بين الأعواد والبخور حسب المناسبة والمكان.", description_en: "Choose between sticks and bakhoor based on the occasion and location.", iconName: "ListStart" },
      { step: 2, title_ar: "استخدم المبخرة", title_en: "Use the Mabkhara", description_ar: "اتبع تعليمات استخدام المبخرة المرفقة لتجربة مثالية.", description_en: "Follow the included mabkhara instructions for an optimal experience.", iconName: "Cylinder" },
      { step: 3, title_ar: "شارك الهدية", title_en: "Share the Gift", description_ar: "قدمها في اللحظات الاحتفالية لترك انطباع مميز.", description_en: "Present it during celebratory moments to leave a distinctive impression.", iconName: "HeartHandshake" }
    ],
    safetyNotice_ar: "يجب قراءة تعليمات السلامة لكل منتج على حدة قبل الاستخدام. تخزين بعيداً عن الرطوبة والحرارة العالية.",
    safetyNotice_en: "Safety instructions for each product must be read separately before use. Store away from moisture and high heat.",
    relatedProductsIds: ["stick_sandal_classic", "mabkhara_electric_gold"]
  },
  {
    id: "stick_arabian_nights",
    name_ar: "أعواد ليالي العربية (عود حار)",
    name_en: "Arabian Nights Incense Sticks (Spicy Oud)",
    category: 'incense_stick',
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/4a0afabd-fa97-4b64-b6bd-970525868ac6.png",
    badges: ['low_smoke', 'new_arrival'],
    priceRange_ar: "129 - 229 SAR",
    priceRange_en: "129 - 229 SAR",
    detailUrl: "./product-detail.html?id=stick_arabian_nights",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("أعواد ليالي العربية", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Arabian Nights Incense Sticks", 'en'),
    description_ar: "عود حار مع نفحات من التوابل الشرقية. يوفر تجربة دافئة وغامضة، مع الحفاظ على مستوى الدخان منخفضاً ليناسب الاستخدام المسائي والهادئ.",
    description_en: "Spicy oud with oriental spice notes. Provides a warm and mysterious experience while maintaining a low smoke level, suitable for quiet, evening use.",
    galleryUrls: [
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/8170bddf-43b4-4548-8a27-ae04d786803b.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/9bcdfae7-fb09-4703-9e2c-31d1eef492a7.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/b0645c2d-c8cb-4e74-8e27-538586b5da40.png",
    ],
    specs: {
      weight_ar: "40 عصا / 20 جم", weight_en: "40 Sticks / 20g",
      burnTime_ar: "50-60 دقيقة (للعصا)", burnTime_en: "50-60 Min (per stick)",
      smokeLevel_ar: "منخفض", smokeLevel_en: "Low",
      applicableSpace_ar: "20-30 متر مربع", applicableSpace_en: "20-30 Sqm",
      material_ar: "عود، مزيج التوابل، راتنج", material_en: "Oud, Spice Blend, Resin",
    },
    sourcing: {
      origin_ar: "غابات فيتنام، خلط في الرياض", origin_en: "Vietnam forests, Blended in Riyadh",
      batch_number: "NAF2026Q1-010", year_ar: "2025 تجميع", year_en: "2025 Harvest",
      grade_ar: "B++", grade_en: "B++",
    },
    certificates: [
      { id: "safety", title_ar: "شهادة السلامة للمواد", title_en: "Material Safety Certificate", summary_ar: "يؤكد خلوه من الملوثات الشائعة والملحقات الكيميائية", summary_en: "Confirms absence of common pollutants and chemical additives", imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/b5a894af-0366-450e-8b74-7eeead86cf7d.png" }
    ],
    howToUse: [
      { step: 1, title_ar: "أشعل الطرف", title_en: "Light the Tip", description_ar: "أشعل طرف العود ثم اتركه ليحترق لمدة 5 ثواني.", description_en: "Light the tip of the stick and allow it to burn for 5 seconds.", iconName: "Flame" },
      { step: 2, title_ar: "أطفئ الشعلة", title_en: "Blow out the Flame", description_ar: "أطفئ الشعلة بلطف، واترك العود يدخن فقط.", description_en: "Gently blow out the flame, allowing the stick to only smolder.", iconName: "Sunrise" },
      { step: 3, title_ar: "خصص مكان الإشعال", title_en: "Designate the Spot", description_ar: "خصص مكاناً مخصصاً للإشعال في نهاية اليوم لضمان الراحة.", description_en: "Set aside a specific spot for burning at the end of the day for relaxation.", iconName: "Moon" }
    ],
    safetyNotice_ar: "للاستخدام الخارجي فقط. أبقِ المنتج بعيداً عن متناول الأطفال والحيوانات الأليفة والمواد القابلة للاشتعال. لا تترك العود المشتعل دون مراقبة. تأكد من تهوية الغرفة بشكل جيد.",
    safetyNotice_en: "For external use only. Keep away from children, pets, and flammable materials. Never leave burning incense unattended. Ensure the room is well-ventilated.",
    relatedProductsIds: ["bakhoor_oud_patchouli", "mabkhara_electric_gold"]
  },
  {
    id: "mabkhara_ceramic_tray",
    name_ar: "صينية سيراميك فاخرة لجمع الرماد",
    name_en: "Deluxe Ceramic Ash Tray and Holder",
    category: 'mabkhara_accessory',
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/2b01b861-a9bb-47ea-95bc-77cb601cbffa.png",
    badges: ['best_seller'],
    priceRange_ar: "79 - 149 SAR",
    priceRange_en: "79 - 149 SAR",
    detailUrl: "./product-detail.html?id=mabkhara_ceramic_tray",
    whatsappInquiryUrl_ar: getWhatsAppInquiryUrl("صينية سيراميك لجمع الرماد", 'ar'),
    whatsappInquiryUrl_en: getWhatsAppInquiryUrl("Ceramic Ash Tray and Holder", 'en'),
    description_ar: "صينية سيراميك يدوية الصنع بلون الرمال الدافئ، مثالية لتثبيت أعواد البخور وجمع الرماد المتساقط بأناقة ونظافة.",
    description_en: "Handcrafted ceramic tray in a warm sand tone, perfect for holding incense sticks and elegantly catching fallen ash, ensuring cleanliness.",
    galleryUrls: [
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/3d2d5c20-5720-4591-87a9-926c287b99e2.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/0093c57f-bfc2-4abd-a8d2-8af8e28b9afc.png",
      "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/ce2a0768-91d3-4962-95c2-e645bee23021.png",
    ],
    specs: {
      weight_ar: "300 جرام", weight_en: "300 Grams",
      burnTime_ar: "لا ينطبق", burnTime_en: "N/A",
      smokeLevel_ar: "لا ينطبق", smokeLevel_en: "N/A",
      applicableSpace_ar: "المساحات الداخلية/المكتب", applicableSpace_en: "Indoor spaces / Office",
      material_ar: "سيراميك معاد حرقه (لون الرمال)", material_en: "Refired Ceramic (Sand color)",
    },
    sourcing: {
      origin_ar: "ورشة فنية في جدة، السعودية", origin_en: "Art workshop in Jeddah, Saudi Arabia",
      batch_number: "ACC2025Q2-101", year_ar: "2025 إنتاج", year_en: "2025 Production",
      grade_ar: "حرفي", grade_en: "Artisanal",
    },
    certificates: [
      { id: "ceramic_safety", title_ar: "شهادة سلامة السيراميك", title_en: "Ceramic Safety Certificate", summary_ar: "مطابقة لمعايير خلو المواد من الرصاص والكادميوم", summary_en: "Conforming to lead and cadmium-free standards", imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/298c29c5-95f4-4387-8bc4-04c5a97d58cc.png" }
    ],
    howToUse: [
      { step: 1, title_ar: "ثبت العود", title_en: "Secure the Stick", description_ar: "أدخل طرف العود غير المشتعل في الفتحة المخصصة.", description_en: "Insert the unlit end of the stick into the designated slot.", iconName: "Hand" },
      { step: 2, title_ar: "أشعل واستمتع", title_en: "Light and Enjoy", description_ar: "أشعل العود واتركه ليسقط الرماد داخل الصينية.", description_en: "Light the stick and allow the ash to fall cleanly onto the tray.", iconName: "Sunrise" },
      { step: 3, title_ar: "تخلص من الرماد", title_en: "Dispose of Ash", description_ar: "بمجرد أن يبرد الرماد، تخلص منه وامسح الصينية.", description_en: "Once cooled, dispose of the ash and wipe the tray clean.", iconName: "Trash2" }
    ],
    safetyNotice_ar: "تأكد من إطفاء كافة أعواد البخور قبل التخلص من الرماد. لا تترك الصينية قريبة من حافة الطاولة.",
    safetyNotice_en: "Ensure all incense sticks are extinguished before disposing of ash. Do not leave the tray near a table edge.",
    relatedProductsIds: ["stick_sandal_classic", "stick_arabian_nights"]
  },
];

export const PRODUCTS_LIST: ProductSummaryModel[] = MOCK_PRODUCTS_DATA.map(p => ({
  id: p.id,
  name_ar: p.name_ar,
  name_en: p.name_en,
  category: p.category,
  imageUrl: p.imageUrl,
  badges: p.badges,
  priceRange_ar: p.priceRange_ar,
  priceRange_en: p.priceRange_en,
  detailUrl: p.detailUrl,
  whatsappInquiryUrl_ar: p.whatsappInquiryUrl_ar,
  whatsappInquiryUrl_en: p.whatsappInquiryUrl_en,
}));

export const getProductById = (id: string): ProductFullModel | undefined => {
  return MOCK_PRODUCTS_DATA.find(p => p.id === id);
}

export const getProductsByCategory = (category: ProductType): ProductSummaryModel[] => {
  return PRODUCTS_LIST.filter(p => p.category === category);
}

// --- Category Data ---

export interface EducationalCardModel {
  title_ar: string;
  title_en: string;
  content_ar: string;
  content_en: string;
  linkText_ar: string;
  linkText_en: string;
  linkUrl: string;
}

export interface CategoryPageModel {
  id: ProductType;
  title_ar: string;
  title_en: string;
  heroImage: string;
  heroSubtitle_ar: string;
  heroSubtitle_en: string;
  usps: { iconName: string; title_ar: string; title_en: string; }[];
  educationalCard: EducationalCardModel;
}

export const PRODUCT_CATEGORIES: Record<ProductType, CategoryPageModel> = {
  incense_stick: {
    id: 'incense_stick',
    title_ar: "أعواد البخور (دخان منخفض)",
    title_en: "Incense Sticks (Low Smoke)",
    heroImage: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/e7292b9a-7e08-4548-b1ea-3aa71717c914.png",
    heroSubtitle_ar: "لتجربة يومية أنظف وأكثر تناغماً، دون الروائح الحادة.",
    heroSubtitle_en: "For a cleaner, more harmonious daily experience, without harsh odors.",
    usps: [
      { iconName: "CloudOff", title_ar: "دخان أقل 60%", title_en: "60% Less Smoke" },
      { iconName: "Timer", title_ar: "حرق موحد", title_en: "Consistent Burn Time" },
      { iconName: "Sprout", title_ar: "مواد نباتية لاصقة", title_en: "Vegetable Binders" },
    ],
    educationalCard: {
      title_ar: "لماذا نفضل الأعواد منخفضة الدخان؟",
      title_en: "Why Choose Low-Smoke Sticks?",
      content_ar: "الأعواد التقليدية قد تكون كثيفة الدخان وغير مناسبة للمساحات الصغيرة أو للمكاتب. أعوادنا مصممة بالتقنية الباردة لضمان رائحة نقية دون تهيج.",
      content_en: "Traditional sticks can be smoke-heavy and unsuitable for small spaces or offices. Our sticks use cold processing technology for a pure scent without irritation.",
      linkText_ar: "تعرّف على استخدامها الآمن",
      linkText_en: "Learn Safe Usage",
      linkUrl: "./help-center.html#how-to-use-incense", 
    }
  },
  bakhoor: {
    id: 'bakhoor',
    title_ar: "البخور ورقائق العود (ضيافة تقليدية)",
    title_en: "Bakhoor & Oud Chips (Traditional Hospitality)",
    heroImage: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/1b45bf0b-1174-46d0-8489-e871ddf312ed.png",
    heroSubtitle_ar: "إثراء المجلس بنفحات العود الأصيلة، لضيافة لا تُنسى.",
    heroSubtitle_en: "Enriching the Majlis with authentic Oud scents for unforgettable hospitality.",
    usps: [
      { iconName: "Cylinder", title_ar: "أفضل للخلق الكهربائي", title_en: "Optimized for Electric Burners" },
      { iconName: "GripHorizontal", title_ar: "أصناف فاخرة", title_en: "Premium Grades Available" },
      { iconName: "Layers3", title_ar: "رائحة غنية مركبة", title_en: "Rich Layered Aroma" },
    ],
    educationalCard: {
      title_ar: "تاريخ البخور في الضيافة الخليجية",
      title_en: "The History of Bakhoor in Gulf Hospitality",
      content_ar: "البخور جزء لا يتجزأ من ثقافة الاستقبال في الخليج. يستخدم لإكرام الضيف وختام المجلس، معبراً عن الاحترام والتقدير.",
      content_en: "Bakhoor is an integral part of Gulf hospitality culture. It is used to honor guests and conclude gatherings, symbolizing respect and appreciation.",
      linkText_ar: "استكشف طقوس الضيافة",
      linkText_en: "Explore Hospitality Rituals",
      linkUrl: "./journal.html#hospitality-rituals", 
    }
  },
  mabkhara_accessory: {
    id: 'mabkhara_accessory',
    title_ar: "المباخر والملحقات",
    title_en: "Mabkhara & Accessories",
    heroImage: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/1f173cf5-73ab-48b8-8191-fa5b30de5b98.png",
    heroSubtitle_ar: "أدوات مصممة بأناقة لرفع مستوى تجربة التبخير.",
    heroSubtitle_en: "Elegantly designed tools to elevate your incense burning experience.",
    usps: [
      { iconName: "HandPlatter", title_ar: "سهولة التنظيف", title_en: "Easy to Clean" },
      { iconName: "Bolt", title_ar: "كهربائية وآمنة", title_en: "Electric & Safe Options" },
      { iconName: "PaintRoller", title_ar: "تصميم عصري", title_en: "Contemporary Design" },
    ],
    educationalCard: {
      title_ar: "اختيار المبخرة المناسبة",
      title_en: "Choosing the Right Mabkhara",
      content_ar: "يجب اختيار المبخرة بناءً على نوع البخور: الكهربائية لرقائق العود، والسيراميك أو المعدنية للأعواد.",
      content_en: "You should choose the mabkhara based on the type of incense: Electric for oud chips, and ceramic or metal for sticks.",
      linkText_ar: "شاهد دليل الأدوات",
      linkText_en: "View our Tool Guide",
      linkUrl: "./help-center.html#accessory-guide",
    }
  },
  gift_set: {
    id: 'gift_set',
    title_ar: "مجموعات الهدايا",
    title_en: "Gift Sets",
    heroImage: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/d0aaad69-0f25-4c37-8025-68b2469a5bd8.png",
    heroSubtitle_ar: "إهداءات مختارة بعناية تعبر عن الذوق الرفيع والاحتفاء.",
    heroSubtitle_en: "Carefully curated gifts expressing refined taste and celebration.",
    usps: [
      { iconName: "Package", title_ar: "تغليف مخصص", title_en: "Custom Packaging" },
      { iconName: "ReceiptText", title_ar: "بطاقة تهنئة مجانية", title_en: "Free Greeting Card" },
      { iconName: "CalendarCheck", title_ar: "للمناسبات السنوية", title_en: "Suitable for Annual Events" },
    ],
    educationalCard: {
      title_ar: "كيفية تخصيص الهدية المثالية",
      title_en: "How to Personalize the Perfect Gift",
      content_ar: "يمكنك تخصيص مجموعات الهدايا الخاصة بنا بما يناسب ذوق المستلم والمناسبة، بدءاً من اختيار الرائحة وصولاً إلى خط البطاقة.",
      content_en: "You can customize our gift sets to suit the recipient's taste and occasion, from selecting the aroma to the card font.",
      linkText_ar: "للاستفسارات الخاصة بالهدايا",
      linkText_en: "Gifting Inquiry",
      linkUrl: "./gift-landing.html", 
    }
  }
};
        
      