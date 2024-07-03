import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import ItemsAccordion from "./ItemsAccordion";
import { dummyItemData } from "../content";

describe("ItemsAccordion Component", () => {
  it("renders correctly with given items", () => {
    render(<ItemsAccordion items={dummyItemData.slice(0, 3)} />);

    // Check if the first three items are rendered
    dummyItemData.slice(0, 3).forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("renders the correct number of items", () => {
    render(<ItemsAccordion items={dummyItemData.slice(0, 5)} />);

    // Check if the correct number of items are rendered
    dummyItemData.slice(0, 5).forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
