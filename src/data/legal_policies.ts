
        
import { CONTACT_INFO } from './contact_info';

export interface PolicyLinkModel {
  id: string;
  title_ar: string;
  title_en: string;
  url: string;
}

export interface PolicyContentModel {
  title_ar: string;
  title_en: string;
  content_ar: string;
  content_en: string;
}

export interface CompanyIdentityModel {
  registeredName_ar: string;
  registeredName_en: string;
  registeredAddress_ar: string;
  registeredAddress_en: string;
  vatTrn: string; // VAT or TRN number
  contactEmail: string;
  contactPhone: string;
}

export const COMPANY_IDENTITY: CompanyIdentityModel = {
  registeredName_ar: "شركة نفحة الأولى للعود للتجارة (NAFHA Oud)",
  registeredName_en: "NAFHA Oud Trading Company",
  registeredAddress_ar: CONTACT_INFO.addressLine1_ar,
  registeredAddress_en: CONTACT_INFO.addressLine1_en,
  vatTrn: "KSA-VAT-30005XXX", // Mock VAT number
  contactEmail: CONTACT_INFO.email,
  contactPhone: CONTACT_INFO.phoneNumber,
};

export const LEGAL_POLICIES_LINKS: PolicyLinkModel[] = [
  { id: "privacy", title_ar: "سياسة الخصوصية وملفات تعريف الارتباط", title_en: "Privacy & Cookie Policy", url: "./privacy-cookie-policy.html" },
  { id: "terms", title_ar: "شروط الخدمة", title_en: "Terms of Service", url: "./terms-of-service.html" },
  { id: "shipping", title_ar: "سياسة الشحن والتسليم", title_en: "Shipping & Delivery Policy (Placeholder)", url: "./help-center.html#shipping-delivery" },
  { id: "returns", title_ar: "سياسة الإرجاع والاستبدال", title_en: "Returns & Exchanges Policy (Placeholder)", url: "./help-center.html#returns-exchanges" },
  { id: "safety", title_ar: "إشعار سلامة المنتج", title_en: "Product Safety Notice", url: "./product-safety-notice.html" },
];

export const POLICY_CONTENTS: Record<string, PolicyContentModel> = {
  privacy: {
    title_ar: "سياسة الخصوصية وملفات تعريف الارتباط",
    title_en: "Privacy & Cookie Policy",
    content_ar: `
      <h2>1. جمع المعلومات</h2>
      <p>نقوم بجمع معلومات الاتصال الأساسية التي تقدمونها عبر نماذج الاستفسار (الاسم، البريد الإلكتروني، رقم الواتساب) فقط لغرض الرد على استفساراتكم وتوفير الكتالوجات وعروض الأسعار.</p>
      <h2>2. ملفات تعريف الارتباط (Cookies)</h2>
      <p>نستخدم ملفات تعريف الارتباط الأساسية والتحليلية (مثل Google Analytics) لتحسين تجربة تصفحكم وفهم تدفق المستخدمين داخل الموقع. لا يتم استخدامها لأغراض تتبع الشراء أو الإعلانات المخصصة.</p>
    `,
    content_en: `
      <h2>1. Information Collection</h2>
      <p>We collect essential contact information provided through inquiry forms (Name, Email, WhatsApp number) solely for the purpose of responding to your queries and providing catalogs and quotations.</p>
      <h2>2. Cookies</h2>
      <p>We use essential and analytical cookies (like Google Analytics) to enhance your browsing experience and understand user flow within the site. They are not used for purchase tracking or personalized advertising.</p>
    `,
  },
  terms: {
    title_ar: "شروط الخدمة",
    title_en: "Terms of Service",
    content_ar: `
      <h2>1. نطاق الخدمة</h2>
      <p>هذا الموقع هو منصة عرض معلوماتي ومنصة استفسارات. لا يمثل الموقع منصة للتجارة الإلكترونية أو معالجة المدفوعات. تتم جميع المعاملات التجارية والمالية خارج هذا النطاق وعبر قنوات التواصل المباشرة (واتساب أو البريد الإلكتروني).</p>
      <h2>2. القوانين السارية</h2>
      <p>تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية.</p>
    `,
    content_en: `
      <h2>1. Scope of Service</h2>
      <p>This website is an informational display and inquiry platform. The site does not function as an e-commerce platform or payment processor. All commercial and financial transactions are conducted outside this scope via direct communication channels (WhatsApp or email).</p>
      <h2>2. Governing Law</h2>
      <p>These terms are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.</p>
    `,
  },
  safety: {
    title_ar: "إشعار سلامة المنتج (Product Safety Notice)",
    title_en: "Product Safety Notice",
    content_ar: `
      <h2>مهم: إخلاء المسؤولية الطبية</h2>
      <p>منتجات NAFHA مخصصة لغرض إثراء الأجواء وخلق تجربة عطرية لا تُنسى. ليس المقصود منها تشخيص، علاج، شفاء، أو منع أي مرض. لا ينبغي أن يحل محتوى موقعنا محل المشورة أو العلاج الطبي المختص.</p>
      <h2>إرشادات الاستخدام الآمن</h2>
      <ol>
        <li><span class="font-bold">التهوية الجيدة:</span> تأكد دائماً من تهوية المكان جيداً عند استخدام البخور أو الأعواد.</li>
        <li><span class="font-bold">الإشراف:</span> لا تترك البخور المشتعل أو المبخرة الكهربائية دون مراقبة.</li>
        <li><span class="font-bold">التخزين:</span> يُحفظ بعيداً عن متناول الأطفال والحيوانات الأليفة والمواد القابلة للاشتعال.</li>
        <li><span class="font-bold">الرماد:</span> تخلص من الرماد فقط بعد التأكد من أنه بارد تماماً.</li>
      </ol>
      <p class="mt-4">الامتثال لهذه الإرشادات هو مسؤولية المستخدم لضمان تجربة آمنة وممتعة.</p>
    `,
    content_en: `
      <h2>Important: Medical Disclaimer</h2>
      <p>NAFHA products are intended for enhancing ambiance and creating a memorable aromatic experience. They are not intended to diagnose, treat, cure, or prevent any disease. The content of our site should not replace professional medical advice or treatment.</p>
      <h2>Safe Usage Guidelines</h2>
      <ol>
        <li><span class="font-bold">Good Ventilation:</span> Always ensure the area is well-ventilated when burning incense or bakhoor.</li>
        <li><span class="font-bold">Supervision:</span> Never leave burning incense or an electric mabkhara unattended.</li>
        <li><span class="font-bold">Storage:</span> Keep away from children, pets, and flammable materials.</li>
        <li><span class="font-bold">Ash:</span> Dispose of ash only after ensuring it is completely cool.</li>
      </ol>
      <p class="mt-4">Compliance with these guidelines is the user's responsibility to ensure a safe and enjoyable experience.</p>
    `,
  },
};
        
      