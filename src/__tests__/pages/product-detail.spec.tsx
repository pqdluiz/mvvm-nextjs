import { render } from "@testing-library/react";

import { ProductDetail } from "../../presentation";

describe("Product Detail", () => {
  it("Verify attributes", () => {
    render(<ProductDetail />);
  });
});
