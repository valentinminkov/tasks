import { expect, test, vi } from "vitest";
import StickyHeaderButton from "./StickyHeaderButton";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("StickyHeaderButton Component", () => {
  const mockOnHeaderBtnClick = vi.fn();

  const defaultProps = {
    label: "FAQ",
    labelAppendix: "(5 / 10)",
    btnLabel: "Load More",
    onHeaderBtnClick: mockOnHeaderBtnClick,
    headerBtnDisabled: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the label and labelAppendix", () => {
    render(<StickyHeaderButton {...defaultProps} />);

    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("(5 / 10)")).toBeInTheDocument();
  });

  test("renders the button with correct label", () => {
    render(<StickyHeaderButton {...defaultProps} />);

    expect(screen.getByText("Load More")).toBeInTheDocument();
  });

  test("calls onHeaderBtnClick when button is clicked", () => {
    render(<StickyHeaderButton {...defaultProps} />);

    const button = screen.getByText("Load More");
    fireEvent.click(button);

    expect(mockOnHeaderBtnClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onHeaderBtnClick when button is disabled", () => {
    render(<StickyHeaderButton {...defaultProps} headerBtnDisabled={true} />);

    const button = screen.getByText("Load More");
    fireEvent.click(button);

    expect(mockOnHeaderBtnClick).not.toHaveBeenCalled();
  });

  test("button is disabled when headerBtnDisabled is true", () => {
    render(<StickyHeaderButton {...defaultProps} headerBtnDisabled={true} />);

    const button = screen.getByText("Load More");
    expect(button).toBeDisabled();
  });
});
