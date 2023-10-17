const { render, screen } = require("@testing-library/react");
import { GifItem } from "../../src/components";

describe("Tests on <GifItem/>", () => {
  const title = "Saitama";
  const url = "https://one.punch.com/saitama.png";

  test("should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("should show the image with the URL and ALT indicated", () => {
    render(<GifItem title={title} url={url} />);
    //  screen.debug();

    const {src, alt} = screen.getByRole("img");
    expect(src).toEqual(url);
    expect(alt).toEqual(title);
  });

  test('should show the title in the component', () => { 
    render(<GifItem title={title} url={url} />);

    const titleComponent = screen.getByText(title);
    expect(titleComponent).toBeTruthy();
   })
});
