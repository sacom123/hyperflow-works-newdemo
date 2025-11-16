// 다국어 번역 데이터
import koTranslations from "./locales/ko.json";
import enTranslations from "./locales/en.json";
import jaTranslations from "./locales/ja.json";
import zhCNTranslations from "./locales/zh-CN.json";
import zhTWTranslations from "./locales/zh-TW.json";
import esTranslations from "./locales/es.json";
import frTranslations from "./locales/fr.json";
import deTranslations from "./locales/de.json";
import itTranslations from "./locales/it.json";
import ptTranslations from "./locales/pt.json";
import ruTranslations from "./locales/ru.json";
import arTranslations from "./locales/ar.json";
import hiTranslations from "./locales/hi.json";
import trTranslations from "./locales/tr.json";
import viTranslations from "./locales/vi.json";
import thTranslations from "./locales/th.json";

export interface Translations {
  language: string;
  login: string;
  menu: {
    product: string;
    customer: string;
    news: string;
    pricing: string;
    docs: string;
    support: string;
    company: string;
    productItems: {
      overview: string;
      ide: string;
      node: string;
      dashboard: string;
      quickStart: string;
      devKit: string;
    };
    customerItems: {
      caseStudy: string;
      reviews: string;
    };
    newsItems: {
      blog: string;
      newsletter: string;
      press: string;
      event: string;
    };
    supportItems: {
      channel: string;
      contact: string;
      faq: string;
    };
    companyItems: {
      about: string;
      distribution: string;
      team: string;
    };
  };
  hero: {
    title: string;
    description: string;
    button: string;
  };
  llmCards: {
    description: string;
  };
  aiSolution: {
    title: string;
    subtitle: string;
    solutions: {
      customerService: {
        title: string;
        description: string;
        features: string[];
      };
      recommendation: {
        title: string;
        description: string;
        features: string[];
      };
      contentGeneration: {
        title: string;
        description: string;
        features: string[];
      };
      documentSearch: {
        title: string;
        description: string;
        features: string[];
      };
    };
    featuresLabel: string;
    viewTemplate: string;
  };
  strengths: {
    title: string;
    items: {
      circularFlow: {
        title: string;
        description: string;
      };
      superNode: {
        title: string;
        description: string;
      };
      integration: {
        title: string;
        description: string;
      };
      dualEngine: {
        title: string;
        description: string;
      };
      assetStore: {
        title: string;
        description: string;
      };
    };
  };
  hyperAiStart: {
    title: string;
    subtitle: string;
    steps: {
      dataConnection: {
        title: string;
        description: string;
      };
      workflowDesign: {
        title: string;
        description: string;
      };
      deployManage: {
        title: string;
        description: string;
      };
    };
  };
  superNode: {
    title: string;
    cardTitle: string;
    cardDescription: string;
    button: string;
  };
  auto: {
    title: string;
    subtitle: string;
    cards: {
      dragDrop: {
        title: string;
        description: string;
      };
      ragChatbot: {
        title: string;
        description: string;
      };
      multimodal: {
        title: string;
        description: string;
      };
      oneClickDeploy: {
        title: string;
        description: string;
      };
      extensible: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
    };
  };
  review: {
    title: string;
    position: string;
    reviewText: string;
  };
  lowContent: {
    title: string;
    description: string;
    button: string;
  };
  overview: {
    title: string;
    description: string;
    nodesTitle: string;
    nodesDescription: string;
  };
  dashboard: {
    title: string;
    description: string;
    projectManagement: {
      title: string;
      content: string;
    };
    memberManagement: {
      title: string;
      content: string;
    };
    usageQuotas: {
      title: string;
      content: string;
    };
    apiManagement: {
      title: string;
      content: string;
    };
  };
  caseStudy: {
    title: string;
    button: string;
    searchPlaceholder: string;
    viewButton: string;
    cards: Array<{
      imageName: string;
      title: string;
      link: string;
    }>;
    footerCta: {
      title: string;
      button: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    enterpriseQuestion: string;
    contactButton: string;
  };
  ide: {
    title: string;
    description: string;
    serviceExample: {
      title: string;
    };
    workflowSteps: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
      step5: string;
    };
    featureButtons: {
      temperature: string;
      instruction: string;
      imageModel: string;
    };
    featureDescriptions: {
      temperature: string;
      superNode: string;
      instruction: string;
    };
    nodeWorkflow: {
      node1: string;
      node2: string;
      node3: string;
      node4: string;
    };
    workflowLabels: {
      step1: string;
      step2: string;
      step3: string;
    };
    features: {
      realTime: {
        title: string;
        description: string;
      };
      executionHistory: {
        title: string;
        description: string;
      };
      assetManagement: {
        title: string;
        description: string;
      };
      debugging: {
        title: string;
        description: string;
      };
      chatbotMode: {
        title: string;
        description: string;
      };
      deployment: {
        title: string;
        description: string;
      };
    };
    footerCta: {
      title: string;
      button: string;
    };
  };
  node: {
    hero: {
      title: string;
      description: string;
    };
    superNode: {
      title: string;
      description: string;
    };
    superMode: {
      title: string;
      features: {
        consistentInterface: {
          title: string;
          description: string;
        };
        flexibleExperiment: {
          title: string;
          description: string;
        };
        futureScalability: {
          title: string;
          description: string;
        };
      };
    };
    types: {
      chatting: {
        title: string;
        description: string;
      };
      content: {
        title: string;
        description: string;
      };
      dataFlow: {
        title: string;
        description: string;
      };
      flowControl: {
        title: string;
        description: string;
      };
      knowledgeBase: {
        title: string;
        description: string;
      };
      llm: {
        title: string;
        description: string;
      };
      tool: {
        title: string;
        description: string;
      };
    };
    footerCta: {
      title: string;
      button: string;
    };
  };
  customerReviews: {
    mainTitle: string;
    partnerReview: {
      title: string;
    };
    userReview: {
      title: string;
    };
    footerCta: {
      title: string;
      button: string;
    };
  };
  footer: {
    address: {
      line1: string;
      line2: string;
    };
    copyright: string;
    sections: {
      product: {
        title: string;
        links: {
          hyperflow: string;
          ide: string;
          templates: string;
          admin: string;
          pricing: string;
          sdk: string;
        };
      };
      news: {
        title: string;
        links: {
          blog: string;
          events: string;
          articles: string;
          newsletter: string;
          releaseNotes: string;
        };
      };
      support: {
        title: string;
        links: {
          channel: string;
          faq: string;
          docs: string;
          contact: string;
        };
      };
      customer: {
        title: string;
        links: {
          reviews: string;
          partners: string;
          caseStudies: string;
        };
      };
      company: {
        title: string;
        links: {
          about: string;
          partners: string;
          channels: string;
        };
      };
      legal: {
        title: string;
        links: {
          terms: string;
          privacy: string;
        };
      };
    };
  };
}

// JSON 파일에서 번역 데이터 import
export const translations: Record<string, Translations> = {
  ko: koTranslations as Translations,
  en: enTranslations as Translations,
  ja: jaTranslations as Translations,
  "zh-CN": zhCNTranslations as Translations,
  "zh-TW": zhTWTranslations as Translations,
  es: esTranslations as Translations,
  fr: frTranslations as Translations,
  de: deTranslations as Translations,
  it: itTranslations as Translations,
  pt: ptTranslations as Translations,
  ru: ruTranslations as Translations,
  ar: arTranslations as Translations,
  hi: hiTranslations as Translations,
  tr: trTranslations as Translations,
  vi: viTranslations as Translations,
  th: thTranslations as Translations,
};

// 언어 목록 (JSON 파일이 있는 언어만 포함)
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
];
