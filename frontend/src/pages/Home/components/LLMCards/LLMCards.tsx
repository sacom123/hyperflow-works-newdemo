import "./LLMCards.css";
import { useLanguage } from "../../../../contexts/LanguageContext";

interface LLMCardsProps {
  isMobile: boolean;
  isTablet: boolean;
}

interface LLMModel {
  name: string;
  color: string;
  imageRef: string;
}

const LLMCards = ({ isMobile, isTablet }: LLMCardsProps) => {
  const { t } = useLanguage();
  const llmModels: LLMModel[] = [
    {
      name: "gemini",
      color: "#4285F4",
      imageRef: "f9b08f0c0f397ee7b1f25f8b435b90f986305876",
    },
    {
      name: "gpt",
      color: "#10A37F",
      imageRef: "60469ce4cd722292ea63f59139a0ef68e7479716",
    },
    {
      name: "deepseek",
      color: "#1E1E1E",
      imageRef: "8fe59b25b862f54210c653c7ba1728610ca2bf6b",
    },
    {
      name: "claude-sonnet",
      color: "#D97757",
      imageRef: "c126c2caf187a779870335a4702c583396755ff6",
    },
    {
      name: "gpt-mini",
      color: "#10A37F",
      imageRef: "8b826bb87865c606f752d62c27b7c215c76a1861",
    },
    {
      name: "gemini-Flash",
      color: "#4285F4",
      imageRef: "76bafca0bc926b1d9b5329a4c56f0dc5dd1ddd0f",
    },
    {
      name: "gpt-nano",
      color: "#10A37F",
      imageRef: "b91a5179f0187d6d11f89e906599b6a18608d80a",
    },
    {
      name: "gemini-Flash-2",
      color: "#4285F4",
      imageRef: "1098870123aa6ff2a5634c08f867077cd543cc9d",
    },
  ];

  return (
    <section
      className={`llm-cards ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      <div className="llm-cards-container">
        <div className="llm-cards-header">
          <p className="llm-cards-description">{t.llmCards.description}</p>
          <div className="llm-cards-background">
            <div className="llm-cards-grid">
              {llmModels.map((model, index) => (
                <div key={index} className="llm-card">
                  <div
                    className="llm-card-image"
                    style={{ backgroundColor: model.color }}
                  >
                    <img
                      src={`/${model.name}.avif`}
                      alt={model.name}
                      className="llm-card-icon"
                      onError={(e) => {
                        // 이미지가 없으면 폴백으로 텍스트 표시
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement)
                          .parentElement;
                        if (
                          parent &&
                          !parent.querySelector(".llm-card-icon-fallback")
                        ) {
                          const fallback = document.createElement("div");
                          fallback.className = "llm-card-icon-fallback";
                          fallback.textContent = model.name
                            .charAt(0)
                            .toUpperCase();
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <span className="llm-card-name">{model.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLMCards;
