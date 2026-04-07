import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import TampilanProduct from "@/pages/product";

// @ts-ignore
jest.mock('next/router', () => ({
  useRouter() {
    return {
        route: "/product",
        pathname: "",
        query: {},
        asPath: "",
        push: () => {}, 
        events: {
            on: () => {},
            off: () => {}
        },
        isReady: true,
    }
  },
}));

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<TampilanProduct />);
    // expect(screen.getByTestId("title").textContent).toBe("Product Page");
    expect(page).toMatchSnapshot();
  });
});