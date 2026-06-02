// 将数字转换为阿拉伯-印度数字 (٠١٢٣٤٥٦٧٨٩)
export function toArabicNumerals(num: string | number): string {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(num).replace(/[0-9]/g, (digit) => arabicDigits[parseInt(digit)]);
}

// 将阿拉伯-印度数字转换为西阿拉伯数字
export function fromArabicNumerals(str: string): string {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  let result = str;
  arabicDigits.forEach((digit, index) => {
    result = result.replace(new RegExp(digit, 'g'), String(index));
  });
  return result;
}

// 格式化价格显示
export function formatPrice(priceStr: string, locale: 'ar' | 'en'): string {
  if (locale === 'ar') {
    // 将价格中的数字转换为阿拉伯-印度数字
    const arabicPrice = toArabicNumerals(priceStr);
    // 在阿拉伯语中，货币通常放在数字后面或前面
    // 将 "99 - 179 SAR" 转换为 "٩٩ - ١٧٩ ريال"
    return arabicPrice.replace('SAR', 'ريال');
  }
  return priceStr;
}

// 格式化重量/规格中的数字
export function formatNumber(numStr: string, locale: 'ar' | 'en'): string {
  if (locale === 'ar') {
    return toArabicNumerals(numStr);
  }
  return numStr;
}

// 格式化日期 (DD/MM/YYYY for Arabic, MM/DD/YYYY for English)
export function formatDate(date: Date, locale: 'ar' | 'en'): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  
  if (locale === 'ar') {
    // 阿拉伯语: DD/MM/YYYY，使用阿拉伯-印度数字
    return `${toArabicNumerals(day)}/${toArabicNumerals(month)}/${toArabicNumerals(year)}`;
  }
  // 英语: MM/DD/YYYY
  return `${month}/${day}/${year}`;
}
