import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Test on <GifExpertApp/>", () => {
  
    test("should render correctly", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

});
