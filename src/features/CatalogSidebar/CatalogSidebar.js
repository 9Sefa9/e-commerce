import { useReducer } from "react";
import {
  Button,
  ButtonContainer,
  SidebarContainer,
} from "./CatalogSidebarStyledComponents.js";
import catalogSidebarSlice, { toggle } from "./CatalogSidebarSlice";

function CatalogSidebar() {
  const [state, dispatch] = useReducer(catalogSidebarSlice, {
    toggleSidebar: false,
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
      
      {state.toggleSidebar === true ? (
        <div>
          <SidebarContainer on>
            <p>hi</p>
          </SidebarContainer>
        </div>
      ) : (
        <SidebarContainer off>
            <p>hi</p>
          </SidebarContainer>
      )}
    </div>
  );
}
export default CatalogSidebar;
