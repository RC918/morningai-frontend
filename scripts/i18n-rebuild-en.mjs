// scripts/i18n-rebuild-en.mjs
import fs from 'node:fs';
import path from 'node:path';

function translateToEnglish(zhValue, key) {
  // 基本翻譯對照表
  const translations = {
    // 基本詞彙
    '繁中 OK': 'EN OK',
    '繁體中文': 'Traditional Chinese',
    '首頁': 'Home',
    '功能': 'Features',
    '定價': 'Pricing',
    '演示': 'Demo',
    '常見問題': 'FAQ',
    '聯絡我們': 'Contact Us',
    '隱私政策': 'Privacy Policy',
    '服務條款': 'Terms of Service',
    
    // Hero 區塊
    '強大功能，無限可能': 'Powerful Features, Unlimited Possibilities',
    '探索 Morning AI 的完整功能套件，從智能設計系統到企業級解決方案。我們提供您成功所需的所有工具。': 'Explore Morning AI\'s complete feature suite, from intelligent design systems to enterprise-grade solutions. We provide all the tools you need for success.',
    '立即開始': 'Get Started',
    '查看演示': 'View Demo',
    
    // Features
    'AI 智能設計': 'AI Smart Design',
    '組件庫': 'Component Library',
    '工作流程優化': 'Workflow Optimization',
    '企業級準備': 'Enterprise Ready',
    '開發者體驗': 'Developer Experience',
    
    // Pricing
    '選擇適合您的方案': 'Choose the Right Plan for You',
    '從個人開發者到大型企業，我們提供靈活的定價方案以滿足不同規模的需求。': 'From individual developers to large enterprises, we offer flexible pricing plans to meet different scale requirements.',
    '最受歡迎': 'Most Popular',
    '入門版': 'Starter',
    '專業版': 'Professional',
    '企業版': 'Enterprise',
    '免費': 'Free',
    '永久免費': 'Forever Free',
    '每月': 'per month',
    '定制化': 'Custom',
    '開始使用': 'Get Started',
    '聯絡銷售': 'Contact Sales',
    
    // Contact
    '聯絡我們': 'Contact Us',
    '發送消息': 'Send Message',
    '姓名': 'Name',
    '郵箱': 'Email',
    '主題': 'Subject',
    '消息': 'Message',
    '發送消息': 'Send Message',
    '聯絡信息': 'Contact Information',
    '電話': 'Phone',
    '地址': 'Address',
    '營業時間': 'Business Hours',
    '週一至週五': 'Monday to Friday',
    '週末': 'Weekend',
    
    // FAQ
    '一般問題': 'General Questions',
    '定價問題': 'Pricing Questions',
    '技術問題': 'Technical Questions',
    '支援問題': 'Support Questions',
    '搜尋問題': 'Search Questions',
    '搜尋問題...': 'Search questions...',
    '還有其他問題？': 'Have other questions?',
    '如果您沒有找到答案，請隨時聯絡我們的支援團隊。': 'If you haven\'t found the answer, please feel free to contact our support team.',
    '聯絡支援': 'Contact Support',
    
    // Privacy & Terms
    '隱私政策': 'Privacy Policy',
    '服務條款': 'Terms of Service',
    '最後更新': 'Last Updated',
    '2025年1月1日': 'January 1, 2025',
    
    // Language
    '切換語言': 'Switch Language',
    
    // CTA
    '查看定價': 'View Pricing',
    '了解更多': 'Learn More',
    '免費試用': 'Try Free',
    '開始試用': 'Start Trial',
    '預約演示': 'Schedule Demo',
    '準備開始了嗎？': 'Ready to Get Started?',
    
    // Demo
    '體驗 Morning AI': 'Experience Morning AI',
    '互動演示': 'Interactive Demo',
    '體驗我們的平台功能': 'Experience our platform features',
    
    // Common
    'Morning AI - 智能設計系統': 'Morning AI - Intelligent Design System'
  };
  
  // 如果有直接翻譯，使用它
  if (translations[zhValue]) {
    return translations[zhValue];
  }
  
  // 根據鍵值推測翻譯
  if (key.includes('title')) {
    if (zhValue.includes('Morning AI')) return zhValue.replace('智能設計系統', 'Intelligent Design System');
    if (zhValue.includes('強大功能')) return 'Powerful Features, Unlimited Possibilities';
    if (zhValue.includes('選擇適合')) return 'Choose the Right Plan for You';
    if (zhValue.includes('常見問題')) return 'Frequently Asked Questions';
    if (zhValue.includes('聯絡我們')) return 'Contact Us';
    if (zhValue.includes('隱私政策')) return 'Privacy Policy';
    if (zhValue.includes('服務條款')) return 'Terms of Service';
  }
  
  if (key.includes('description')) {
    if (zhValue.includes('探索 Morning AI')) return 'Explore Morning AI\'s complete feature suite, from intelligent design systems to enterprise-grade solutions. We provide all the tools you need for success.';
    if (zhValue.includes('從個人開發者')) return 'From individual developers to large enterprises, we offer flexible pricing plans to meet different scale requirements.';
  }
  
  // 如果沒有翻譯，返回原文作為 placeholder
  return zhValue;
}

function translateObject(obj, keyPath = '') {
  if (typeof obj === 'string') {
    return translateToEnglish(obj, keyPath);
  }
  
  if (Array.isArray(obj)) {
    return obj.map((item, index) => translateObject(item, `${keyPath}[${index}]`));
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      const newKeyPath = keyPath ? `${keyPath}.${key}` : key;
      result[key] = translateObject(value, newKeyPath);
    }
    return result;
  }
  
  return obj;
}

console.log('🔧 Rebuilding complete en.json from zh-TW...\n');

// 載入 zh-TW 作為基準
const zhTWPath = 'src/i18n/messages/zh-TW.json';
const enPath = 'src/i18n/messages/en.json';

if (!fs.existsSync(zhTWPath)) {
  console.error(`❌ File not found: ${zhTWPath}`);
  process.exit(1);
}

const zhTW = JSON.parse(fs.readFileSync(zhTWPath, 'utf8'));

// 備份現有的 en.json
if (fs.existsSync(enPath)) {
  const backup = `${enPath}.backup-${Date.now()}`;
  fs.copyFileSync(enPath, backup);
  console.log(`📦 Backup created: ${backup}`);
}

// 翻譯整個結構
const en = translateObject(zhTW);

// 確保 LANG_CHECK 正確
en.LANG_CHECK = 'EN OK';
en.Locale = 'en';

// 寫入新的 en.json
fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n');
console.log(`✅ Rebuilt: ${enPath}`);

console.log('\n🎉 English translation file rebuilt!');
console.log('');
console.log('📋 Next steps:');
console.log('1. Review and improve the auto-generated translations');
console.log('2. Run `npm run i18n:diff` to check consistency');
console.log('3. Run `npm run build` to test compilation');

