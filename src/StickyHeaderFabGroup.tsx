import Fab from "@mui/material/Fab";

const configureIconSrc = "/assets/configure-homepage.svg";
const addIconSrc = "/assets/add-icon.svg";

export function StickyHeaderFabGroup() {
  return (
    <>
      <Fab
        size="small"
        className="sticky-header-fab sticky-header-fab--ghost"
        aria-label="Configure homepage"
      >
        <img
          className="sticky-header-fab__glyph"
          src={configureIconSrc}
          alt=""
          width={20}
          height={20}
        />
      </Fab>
      <Fab
        size="small"
        color="primary"
        className="sticky-header-fab sticky-header-fab--solid"
        aria-label="Add"
      >
        <img
          className="sticky-header-fab__glyph sticky-header-fab__glyph--add"
          src={addIconSrc}
          alt=""
          width={14}
          height={14}
        />
      </Fab>
    </>
  );
}
