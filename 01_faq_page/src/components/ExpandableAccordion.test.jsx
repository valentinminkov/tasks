import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import ExpandableAccordion from "./ExpandableAccordion";
import { dummyItemData } from "../content";

describe("ExpandableAccordion Component", () => {
  it("renders the component", () => {
    render(<ExpandableAccordion items={dummyItemData} />);
    // Check if items are rendered
    dummyItemData.slice(0, 1).forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("loads more items when StickyHeaderButton is clicked", () => {
    render(<ExpandableAccordion items={dummyItemData} />);

    const loadMoreButton = screen.getByTestId("sticky-header-button");

    // Check initial state
    expect(screen.getAllByText(dummyItemData[0].title)).toHaveLength(1);

    // Click load more button
    fireEvent.click(loadMoreButton);

    // Check if more items are loaded
    expect(screen.getAllByText(dummyItemData[11].title)).toHaveLength(1);

    // Click load more button again
    fireEvent.click(loadMoreButton);

    // Check if more items are loaded
    expect(screen.getAllByText(dummyItemData[22].title)).toHaveLength(1);
  });
});
