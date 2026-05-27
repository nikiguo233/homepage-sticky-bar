import { createTheme } from "@mui/material/styles";

/** Matches Occam / homepage tokens — Figma floating buttons (node 25:3984) */
export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#0d4ac3",
    },
  },
  shape: {
    borderRadius: 100,
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "var(--shadow-fab)",
          "&:hover": {
            boxShadow: "var(--shadow-fab)",
          },
        },
        primary: {
          backgroundColor: "var(--color-blue-500)",
          "&:hover": {
            backgroundColor: "var(--color-blue-500)",
          },
          "&:active": {
            backgroundColor: "var(--color-blue-500)",
          },
        },
      },
    },
  },
});
