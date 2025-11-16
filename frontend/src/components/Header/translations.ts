// 다국어 번역 데이터
export interface Translations {
  language: string;
  login: string;
  menu: {
    product: string;
    customer: string;
    news: string;
    support: string;
    productItems: {
      ide: string;
      template: string;
      admin: string;
      pricing: string;
      sdk: string;
    };
    customerItems: {
      reviews: string;
      partners: string;
      caseStudy: string;
    };
    newsItems: {
      blog: string;
      event: string;
      article: string;
      newsletter: string;
      release: string;
    };
    supportItems: {
      channel: string;
      faq: string;
      docs: string;
      contact: string;
    };
  };
}

export const translations: Record<string, Translations> = {
  ko: {
    language: "한국어",
    login: "로그인",
    menu: {
      product: "제품",
      customer: "고객",
      news: "소식",
      support: "지원",
      productItems: {
        ide: "IDE",
        template: "템플릿",
        admin: "관리자",
        pricing: "가격",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "사용자 리뷰",
        partners: "파트너",
        caseStudy: "케이스 스터디",
      },
      newsItems: {
        blog: "블로그",
        event: "이벤트",
        article: "기사",
        newsletter: "뉴스레터",
        release: "릴리즈 노트",
      },
      supportItems: {
        channel: "채널",
        faq: "FAQ",
        docs: "문서",
        contact: "문의하기",
      },
    },
  },
  en: {
    language: "English",
    login: "Login",
    menu: {
      product: "Product",
      customer: "Customer",
      news: "News",
      support: "Support",
      productItems: {
        ide: "IDE",
        template: "Template",
        admin: "Admin",
        pricing: "Pricing",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "User Reviews",
        partners: "Partners",
        caseStudy: "Case Study",
      },
      newsItems: {
        blog: "Blog",
        event: "Event",
        article: "Article",
        newsletter: "Newsletter",
        release: "Release Notes",
      },
      supportItems: {
        channel: "Channel",
        faq: "FAQ",
        docs: "Documentation",
        contact: "Contact",
      },
    },
  },
  ja: {
    language: "日本語",
    login: "ログイン",
    menu: {
      product: "製品",
      customer: "お客様",
      news: "ニュース",
      support: "サポート",
      productItems: {
        ide: "IDE",
        template: "テンプレート",
        admin: "管理者",
        pricing: "価格",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "ユーザーレビュー",
        partners: "パートナー",
        caseStudy: "ケーススタディ",
      },
      newsItems: {
        blog: "ブログ",
        event: "イベント",
        article: "記事",
        newsletter: "ニュースレター",
        release: "リリースノート",
      },
      supportItems: {
        channel: "チャンネル",
        faq: "FAQ",
        docs: "ドキュメント",
        contact: "お問い合わせ",
      },
    },
  },
  "zh-CN": {
    language: "中文",
    login: "登录",
    menu: {
      product: "产品",
      customer: "客户",
      news: "新闻",
      support: "支持",
      productItems: {
        ide: "IDE",
        template: "模板",
        admin: "管理",
        pricing: "价格",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "用户评价",
        partners: "合作伙伴",
        caseStudy: "案例研究",
      },
      newsItems: {
        blog: "博客",
        event: "活动",
        article: "文章",
        newsletter: "新闻通讯",
        release: "发布说明",
      },
      supportItems: {
        channel: "渠道",
        faq: "常见问题",
        docs: "文档",
        contact: "联系我们",
      },
    },
  },
  "zh-TW": {
    language: "繁體中文",
    login: "登入",
    menu: {
      product: "產品",
      customer: "客戶",
      news: "新聞",
      support: "支援",
      productItems: {
        ide: "IDE",
        template: "範本",
        admin: "管理",
        pricing: "價格",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "用戶評價",
        partners: "合作夥伴",
        caseStudy: "案例研究",
      },
      newsItems: {
        blog: "部落格",
        event: "活動",
        article: "文章",
        newsletter: "電子報",
        release: "版本說明",
      },
      supportItems: {
        channel: "頻道",
        faq: "常見問題",
        docs: "文件",
        contact: "聯絡我們",
      },
    },
  },
  es: {
    language: "Español",
    login: "Iniciar sesión",
    menu: {
      product: "Producto",
      customer: "Cliente",
      news: "Noticias",
      support: "Soporte",
      productItems: {
        ide: "IDE",
        template: "Plantilla",
        admin: "Administrador",
        pricing: "Precios",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Reseñas de usuarios",
        partners: "Socios",
        caseStudy: "Caso de estudio",
      },
      newsItems: {
        blog: "Blog",
        event: "Evento",
        article: "Artículo",
        newsletter: "Boletín",
        release: "Notas de versión",
      },
      supportItems: {
        channel: "Canal",
        faq: "Preguntas frecuentes",
        docs: "Documentación",
        contact: "Contacto",
      },
    },
  },
  fr: {
    language: "Français",
    login: "Connexion",
    menu: {
      product: "Produit",
      customer: "Client",
      news: "Actualités",
      support: "Support",
      productItems: {
        ide: "IDE",
        template: "Modèle",
        admin: "Administrateur",
        pricing: "Tarification",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Avis utilisateurs",
        partners: "Partenaires",
        caseStudy: "Étude de cas",
      },
      newsItems: {
        blog: "Blog",
        event: "Événement",
        article: "Article",
        newsletter: "Newsletter",
        release: "Notes de version",
      },
      supportItems: {
        channel: "Canal",
        faq: "FAQ",
        docs: "Documentation",
        contact: "Contact",
      },
    },
  },
  de: {
    language: "Deutsch",
    login: "Anmelden",
    menu: {
      product: "Produkt",
      customer: "Kunde",
      news: "Neuigkeiten",
      support: "Support",
      productItems: {
        ide: "IDE",
        template: "Vorlage",
        admin: "Administrator",
        pricing: "Preise",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Benutzerbewertungen",
        partners: "Partner",
        caseStudy: "Fallstudie",
      },
      newsItems: {
        blog: "Blog",
        event: "Veranstaltung",
        article: "Artikel",
        newsletter: "Newsletter",
        release: "Versionshinweise",
      },
      supportItems: {
        channel: "Kanal",
        faq: "FAQ",
        docs: "Dokumentation",
        contact: "Kontakt",
      },
    },
  },
  it: {
    language: "Italiano",
    login: "Accedi",
    menu: {
      product: "Prodotto",
      customer: "Cliente",
      news: "Notizie",
      support: "Supporto",
      productItems: {
        ide: "IDE",
        template: "Modello",
        admin: "Amministratore",
        pricing: "Prezzi",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Recensioni utenti",
        partners: "Partner",
        caseStudy: "Caso di studio",
      },
      newsItems: {
        blog: "Blog",
        event: "Evento",
        article: "Articolo",
        newsletter: "Newsletter",
        release: "Note di versione",
      },
      supportItems: {
        channel: "Canale",
        faq: "FAQ",
        docs: "Documentazione",
        contact: "Contatto",
      },
    },
  },
  pt: {
    language: "Português",
    login: "Entrar",
    menu: {
      product: "Produto",
      customer: "Cliente",
      news: "Notícias",
      support: "Suporte",
      productItems: {
        ide: "IDE",
        template: "Modelo",
        admin: "Administrador",
        pricing: "Preços",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Avaliações de usuários",
        partners: "Parceiros",
        caseStudy: "Estudo de caso",
      },
      newsItems: {
        blog: "Blog",
        event: "Evento",
        article: "Artigo",
        newsletter: "Newsletter",
        release: "Notas de versão",
      },
      supportItems: {
        channel: "Canal",
        faq: "Perguntas frequentes",
        docs: "Documentação",
        contact: "Contato",
      },
    },
  },
  ru: {
    language: "Русский",
    login: "Войти",
    menu: {
      product: "Продукт",
      customer: "Клиент",
      news: "Новости",
      support: "Поддержка",
      productItems: {
        ide: "IDE",
        template: "Шаблон",
        admin: "Администратор",
        pricing: "Цены",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Отзывы пользователей",
        partners: "Партнеры",
        caseStudy: "Кейс-стади",
      },
      newsItems: {
        blog: "Блог",
        event: "Событие",
        article: "Статья",
        newsletter: "Рассылка",
        release: "Заметки о выпуске",
      },
      supportItems: {
        channel: "Канал",
        faq: "Часто задаваемые вопросы",
        docs: "Документация",
        contact: "Контакты",
      },
    },
  },
  ar: {
    language: "العربية",
    login: "تسجيل الدخول",
    menu: {
      product: "المنتج",
      customer: "العميل",
      news: "الأخبار",
      support: "الدعم",
      productItems: {
        ide: "بيئة التطوير",
        template: "قالب",
        admin: "المسؤول",
        pricing: "الأسعار",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "آراء المستخدمين",
        partners: "الشركاء",
        caseStudy: "دراسة حالة",
      },
      newsItems: {
        blog: "المدونة",
        event: "الفعالية",
        article: "المقال",
        newsletter: "النشرة الإخبارية",
        release: "ملاحظات الإصدار",
      },
      supportItems: {
        channel: "القناة",
        faq: "الأسئلة الشائعة",
        docs: "التوثيق",
        contact: "اتصل بنا",
      },
    },
  },
  hi: {
    language: "हिन्दी",
    login: "लॉग इन",
    menu: {
      product: "उत्पाद",
      customer: "ग्राहक",
      news: "समाचार",
      support: "सहायता",
      productItems: {
        ide: "IDE",
        template: "टेम्प्लेट",
        admin: "व्यवस्थापक",
        pricing: "मूल्य निर्धारण",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "उपयोगकर्ता समीक्षा",
        partners: "साझेदार",
        caseStudy: "केस स्टडी",
      },
      newsItems: {
        blog: "ब्लॉग",
        event: "इवेंट",
        article: "लेख",
        newsletter: "न्यूज़लेटर",
        release: "रिलीज़ नोट्स",
      },
      supportItems: {
        channel: "चैनल",
        faq: "सामान्य प्रश्न",
        docs: "दस्तावेज़",
        contact: "संपर्क करें",
      },
    },
  },
  tr: {
    language: "Türkçe",
    login: "Giriş yap",
    menu: {
      product: "Ürün",
      customer: "Müşteri",
      news: "Haberler",
      support: "Destek",
      productItems: {
        ide: "IDE",
        template: "Şablon",
        admin: "Yönetici",
        pricing: "Fiyatlandırma",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Kullanıcı yorumları",
        partners: "Ortaklar",
        caseStudy: "Vaka çalışması",
      },
      newsItems: {
        blog: "Blog",
        event: "Etkinlik",
        article: "Makale",
        newsletter: "Bülten",
        release: "Sürüm notları",
      },
      supportItems: {
        channel: "Kanal",
        faq: "SSS",
        docs: "Dokümantasyon",
        contact: "İletişim",
      },
    },
  },
  vi: {
    language: "Tiếng Việt",
    login: "Đăng nhập",
    menu: {
      product: "Sản phẩm",
      customer: "Khách hàng",
      news: "Tin tức",
      support: "Hỗ trợ",
      productItems: {
        ide: "IDE",
        template: "Mẫu",
        admin: "Quản trị viên",
        pricing: "Giá",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Đánh giá người dùng",
        partners: "Đối tác",
        caseStudy: "Nghiên cứu điển hình",
      },
      newsItems: {
        blog: "Blog",
        event: "Sự kiện",
        article: "Bài viết",
        newsletter: "Bản tin",
        release: "Ghi chú phát hành",
      },
      supportItems: {
        channel: "Kênh",
        faq: "Câu hỏi thường gặp",
        docs: "Tài liệu",
        contact: "Liên hệ",
      },
    },
  },
  th: {
    language: "ไทย",
    login: "เข้าสู่ระบบ",
    menu: {
      product: "ผลิตภัณฑ์",
      customer: "ลูกค้า",
      news: "ข่าวสาร",
      support: "สนับสนุน",
      productItems: {
        ide: "IDE",
        template: "เทมเพลต",
        admin: "ผู้ดูแลระบบ",
        pricing: "ราคา",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "รีวิวผู้ใช้",
        partners: "พาร์ทเนอร์",
        caseStudy: "กรณีศึกษา",
      },
      newsItems: {
        blog: "บล็อก",
        event: "กิจกรรม",
        article: "บทความ",
        newsletter: "จดหมายข่าว",
        release: "บันทึกการเปิดตัว",
      },
      supportItems: {
        channel: "ช่องทาง",
        faq: "คำถามที่พบบ่อย",
        docs: "เอกสาร",
        contact: "ติดต่อ",
      },
    },
  },
  id: {
    language: "Bahasa Indonesia",
    login: "Masuk",
    menu: {
      product: "Produk",
      customer: "Pelanggan",
      news: "Berita",
      support: "Dukungan",
      productItems: {
        ide: "IDE",
        template: "Template",
        admin: "Admin",
        pricing: "Harga",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Ulasan pengguna",
        partners: "Mitra",
        caseStudy: "Studi kasus",
      },
      newsItems: {
        blog: "Blog",
        event: "Acara",
        article: "Artikel",
        newsletter: "Buletin",
        release: "Catatan rilis",
      },
      supportItems: {
        channel: "Saluran",
        faq: "FAQ",
        docs: "Dokumentasi",
        contact: "Hubungi",
      },
    },
  },
  pl: {
    language: "Polski",
    login: "Zaloguj się",
    menu: {
      product: "Produkt",
      customer: "Klient",
      news: "Aktualności",
      support: "Wsparcie",
      productItems: {
        ide: "IDE",
        template: "Szablon",
        admin: "Administrator",
        pricing: "Cennik",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Opinie użytkowników",
        partners: "Partnerzy",
        caseStudy: "Studium przypadku",
      },
      newsItems: {
        blog: "Blog",
        event: "Wydarzenie",
        article: "Artykuł",
        newsletter: "Newsletter",
        release: "Informacje o wydaniu",
      },
      supportItems: {
        channel: "Kanał",
        faq: "FAQ",
        docs: "Dokumentacja",
        contact: "Kontakt",
      },
    },
  },
  nl: {
    language: "Nederlands",
    login: "Inloggen",
    menu: {
      product: "Product",
      customer: "Klant",
      news: "Nieuws",
      support: "Ondersteuning",
      productItems: {
        ide: "IDE",
        template: "Sjabloon",
        admin: "Beheerder",
        pricing: "Prijzen",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Gebruikersrecensies",
        partners: "Partners",
        caseStudy: "Casestudy",
      },
      newsItems: {
        blog: "Blog",
        event: "Evenement",
        article: "Artikel",
        newsletter: "Nieuwsbrief",
        release: "Release-opmerkingen",
      },
      supportItems: {
        channel: "Kanaal",
        faq: "Veelgestelde vragen",
        docs: "Documentatie",
        contact: "Contact",
      },
    },
  },
  sv: {
    language: "Svenska",
    login: "Logga in",
    menu: {
      product: "Produkt",
      customer: "Kund",
      news: "Nyheter",
      support: "Support",
      productItems: {
        ide: "IDE",
        template: "Mall",
        admin: "Administratör",
        pricing: "Priser",
        sdk: "SDK",
      },
      customerItems: {
        reviews: "Användarrecensioner",
        partners: "Partners",
        caseStudy: "Fallstudie",
      },
      newsItems: {
        blog: "Blogg",
        event: "Evenemang",
        article: "Artikel",
        newsletter: "Nyhetsbrev",
        release: "Versionsanteckningar",
      },
      supportItems: {
        channel: "Kanal",
        faq: "Vanliga frågor",
        docs: "Dokumentation",
        contact: "Kontakt",
      },
    },
  },
};

// 언어 목록 (20개)
export const languageList = [
  { key: "ko", label: "한국어" },
  { key: "en", label: "English" },
  { key: "ja", label: "日本語" },
  { key: "zh-CN", label: "中文" },
  { key: "zh-TW", label: "繁體中文" },
  { key: "es", label: "Español" },
  { key: "fr", label: "Français" },
  { key: "de", label: "Deutsch" },
  { key: "it", label: "Italiano" },
  { key: "pt", label: "Português" },
  { key: "ru", label: "Русский" },
  { key: "ar", label: "العربية" },
  { key: "hi", label: "हिन्दी" },
  { key: "tr", label: "Türkçe" },
  { key: "vi", label: "Tiếng Việt" },
  { key: "th", label: "ไทย" },
  { key: "id", label: "Bahasa Indonesia" },
  { key: "pl", label: "Polski" },
  { key: "nl", label: "Nederlands" },
  { key: "sv", label: "Svenska" },
];

