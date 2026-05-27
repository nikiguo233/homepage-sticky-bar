import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { StickyHeaderFabGroup } from "./StickyHeaderFabGroup";
import { initStickyHeaderScroll } from "./sticky-header-scroll";
import { appTheme } from "./theme";
import "../styles.css";

const fabMount = document.getElementById("sticky-header-fabs");
if (fabMount) {
  createRoot(fabMount).render(
    <StrictMode>
      <ThemeProvider theme={appTheme}>
        <StickyHeaderFabGroup />
      </ThemeProvider>
    </StrictMode>,
  );
}

initStickyHeaderScroll();
