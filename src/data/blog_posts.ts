export interface BlogPost {
  id: string;
  title_ar: string;
  title_en: string;
  excerpt_ar: string;
  excerpt_en: string;
  date: string;
  coverImage: string;
  author_ar: string;
  author_en: string;
  readTime_ar: string;
  readTime_en: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'the-art-of-oud',
    title_ar: 'فن العود: تاريخ عطر ملكي',
    title_en: 'The Art of Oud: History of a Royal Fragrance',
    excerpt_ar: 'اكتشف التاريخ الغني للعود، من الغابات القديمة إلى قصور الخليج الحديثة. رحلة عبر الزمن مع أفخر أنواع العطور.',
    excerpt_en: 'Discover the rich history of Oud, from ancient forests to modern Gulf palaces. A journey through time with the finest fragrances.',
    date: '2026-01-15',
    coverImage: '/images/blog/placeholder-1.svg',
    author_ar: 'فريق نفحة',
    author_en: 'Nafha Team',
    readTime_ar: '5 دقائق',
    readTime_en: '5 min read'
  },
  {
    id: 'modern-rituals',
    title_ar: 'طقوس عصرية: كيفية استخدام البخور في المنزل',
    title_en: 'Modern Rituals: How to Use Incense at Home',
    excerpt_ar: 'دليلك الشامل لدمج البخور في روتينك اليومي. نصائح وتقنيات لخلق أجواء هادئة ومريحة في منزلك.',
    excerpt_en: 'Your comprehensive guide to incorporating incense into your daily routine. Tips and techniques for creating calm and cozy atmospheres at home.',
    date: '2026-02-01',
    coverImage: '/images/blog/placeholder-2.svg',
    author_ar: 'فريق نفحة',
    author_en: 'Nafha Team',
    readTime_ar: '7 دقائق',
    readTime_en: '7 min read'
  },
  {
    id: 'sourcing-sustainability',
    title_ar: 'المصدر المستدام: رحلة مسؤولة',
    title_en: 'Sustainable Sourcing: A Responsible Journey',
    excerpt_ar: 'كيف نضمن أن كل قطعة عود تصل إليك هي نتيجة ممارسات مستدامة تحترم الطبيعة والمجتمعات المحلية.',
    excerpt_en: 'How we ensure every piece of Oud that reaches you is the result of sustainable practices that respect nature and local communities.',
    date: '2026-02-20',
    coverImage: '/images/blog/placeholder-3.svg',
    author_ar: 'فريق نفحة',
    author_en: 'Nafha Team',
    readTime_ar: '6 دقائق',
    readTime_en: '6 min read'
  },
  {
    id: 'gift-guide-2026',
    title_ar: 'دليل الهدايا 2026: اختيارات مثالية',
    title_en: 'Gift Guide 2026: Perfect Choices',
    excerpt_ar: 'ابحث عن الهدية المثالية؟ اكتشف مجموعتنا المختارة بعناية من عطور العود الفاخرة التي تناسب كل مناسبة.',
    excerpt_en: 'Looking for the perfect gift? Discover our carefully curated collection of luxury Oud fragrances for every occasion.',
    date: '2026-03-10',
    coverImage: '/images/blog/placeholder-4.svg',
    author_ar: 'فريق نفحة',
    author_en: 'Nafha Team',
    readTime_ar: '4 دقائق',
    readTime_en: '4 min read'
  },
  {
    id: 'science-of-scent',
    title_ar: 'علم الرائحة: كيف يؤثر العطر على المزاج',
    title_en: 'The Science of Scent: How Fragrance Affects Mood',
    excerpt_ar: 'استكشف الرابط العلمي بين الروائح والمشاعر. كيف يمكن للعود أن يحسن مزاجك ورفاهيتك.',
    excerpt_en: 'Explore the scientific link between scents and emotions. How Oud can enhance your mood and well-being.',
    date: '2026-03-25',
    coverImage: '/images/blog/placeholder-5.svg',
    author_ar: 'فريق نفحة',
    author_en: 'Nafha Team',
    readTime_ar: '8 دقائق',
    readTime_en: '8 min read'
  },
  {
    id: 'ramadan-special',
    title_ar: 'رمضان الخاص: عطور رمضانية تقليدية',
    title_en: 'Ramadan Special: Traditional Ramadan Fragrances',
    excerpt_ar: 'احتفل برمضان مع مجموعتنا المختارة من العطور التقليدية التي تجسد روح هذا الشهر الفضيل.',
    excerpt_en: 'Celebrate Ramadan with our curated collection of traditional fragrances that embody the spirit of this holy month.',
    date: '2026-04-01',
    coverImage: '/images/blog/placeholder-6.svg',
    author_ar: 'فريق نفحة',
    author_en: 'Nafha Team',
    readTime_ar: '6 دقائق',
    readTime_en: '6 min read'
  }
];
