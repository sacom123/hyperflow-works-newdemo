// App bootstrap entry / 앱 부트스트랩 진입점
// Mounts React root with StrictMode for highlighting potential issues
// 잠재적 이슈 탐지를 위해 StrictMode로 React 루트를 마운트합니다.
import "@ant-design/v5-patch-for-react-19";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
