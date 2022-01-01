import { useReducer } from "react";
import {
  NavButton,
  ButtonToggle,
  ButtonContainer,
  SidebarContainer,
} from "./CatalogSidebarStyledComponents.js";

import catalogSidebarSlice, { toggle } from "./CatalogSidebarSlice.js";

function CatalogSidebar() {
  const [state, dispatch] = useReducer(catalogSidebarSlice, {
    toggleSidebar: null,
  });

  return (
    <div>
      <ButtonContainer>
        <ButtonToggle
          onClick={() => {
            dispatch(toggle());
          }}
        >
          Filter Catalog
        </ButtonToggle>
      </ButtonContainer>
      <SidebarContainer sidebarStatus={state.toggleSidebar}>
        <NavButton>Brand</NavButton>
        <NavButton>Size</NavButton>
        <NavButton>Sort</NavButton>
        <NavButton>Price Range</NavButton>
      </SidebarContainer>
    </div>
  );
}
export default CatalogSidebar;
