// 網站設定檔
export const siteConfig = {
  // 基本資訊
  name: '媽咪小編',
  title: '媽咪小編 | 科技是為了讓我們有更多時間去愛',
  description: '幫助媽媽們用科技與團購，把時間留給愛與陪伴。',
  url: 'https://mommystartup.com',
  language: 'zh-TW',
  
  // 品牌色彩（shop 粉色系）
  colors: {
    primary: '#D4A5A5',
    primaryDark: '#C48B8B',
    primaryLight: '#E8C4C4',
    secondary: '#E8B86D',
    background: '#FDFBF9',
    text: '#4A4A4A',
    textLight: '#777777'
  },
  
  // Logo
  logo: 'https://mommystartup.com/wp-content/uploads/2023/02/2-removebg-preview-e1676949771313.png',
  favicon: 'https://mommystartup.com/wp-content/uploads/2026/01/媽咪小編-logo-沒去背.png',
  
  // 導航
  nav: [
    { name: '首頁', href: '/' },
    { name: '關於我們', href: '/about/' },
    { name: '部落格', href: '/blog/' },
    { name: '媽咪精選好物', href: '/shop/' },
    { name: '團媽募集', href: '/contact/' }
  ],
  
  // 文章分類（精簡為 3 個）
  categories: [
    { slug: '行銷', name: '行銷', description: 'SEO、社群、短影音、品牌經營' },
    { slug: '團購', name: '團購', description: '團購經營技巧與實戰分享' },
    { slug: '育兒', name: '育兒', description: '親子教養、媽媽生活' },
  ],
  
  // 社群連結
  social: {
    facebook: 'https://www.facebook.com/mommy.startup22',
    instagram: 'https://www.instagram.com/mommystartup',
    line: 'https://lin.ee/hD9U4uFg'
  },
  
  // 生態系連結
  ecosystem: [
    {
      name: '智慧媽咪',
      description: '行銷 × AI × 系統整合',
      url: 'https://aimommywisdom.com',
      logo: 'https://mommystartup.com/wp-content/uploads/2025/12/智慧媽咪logo-300x300.png'
    },
    {
      name: 'Vega 行銷教室',
      description: '實戰、系統、成長紀錄',
      url: 'https://vegamarketroom.net',
      logo: 'https://mommystartup.com/wp-content/uploads/2025/12/薇佳-1-150x150.png'
    },
    {
      name: '媽媽喘息空間',
      description: '陪你慢慢長大',
      url: 'https://chparenting.com',
      logo: 'https://mommystartup.com/wp-content/uploads/2025/12/586089133_1325168209623436_1995080409380657151_n-150x150.jpg'
    }
  ],
  
  // AdSense
  adsense: {
    client: 'ca-pub-3493526929407874',
    slots: {
      header: '',
      sidebar: '',
      inArticle: '',
      footer: ''
    }
  },
  
  // Google Analytics
  analytics: {
    ga4: 'G-XXXXXXXXXX' // 需要更新
  },
  
  // GTM
  gtm: 'GTM-59GFZ9HL'
};

export default siteConfig;
