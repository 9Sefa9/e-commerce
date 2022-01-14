import { screen } from "@testing-library/react";
import NavigationBar from "../NavigationBar/NavigationBar";

describe('<NavigationBar/> testing logo',()=>{
    test("does logo show up",()=>{

        render(<NavigationBar/>);

        expect(screen.getByAltText(/logo/)).toBeVisible();
        expect(screen.getByAltText(/logo/)).toBeInTheDocument();
    });
});