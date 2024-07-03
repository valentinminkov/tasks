import { expect, test, vi } from "vitest";
import StickyHeaderButton from "./Item";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Item Component", () => {
  const mockOnHeaderBtnClick = vi.fn();

  const defaultProps = {
    title: "FAQ Item",
    body: "Lorem Ipsum",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the title and body", () => {
    render(<StickyHeaderButton {...defaultProps} />);

    expect(screen.getByText("FAQ Item")).toBeInTheDocument();
    expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
  });
});
