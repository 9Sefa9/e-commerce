import { useReducer } from "react";
import {
  Button,
  ButtonContainer,
  SidebarContainer,
} from "./CatalogSidebarStyledComponents.js";
import catalogSidebarSlice, { toggle } from "./CatalogSidebarSlice";

function CatalogSidebar() {
  const [state, dispatch] = useReducer(catalogSidebarSlice, {
    toggleSidebar: null,
  });

  return (
    <div>
      <ButtonContainer>
        <Button
          onClick={() => {
            dispatch(toggle());
          }}
        >
          Filter Catalog
        </Button>
      </ButtonContainer>

      <SidebarContainer sidebarStatus={state.toggleSidebar}>
      {console.log(state.toggleSidebar)}
        <p>t</p>
      </SidebarContainer>
    </div>
  );
}
export default CatalogSidebar;
