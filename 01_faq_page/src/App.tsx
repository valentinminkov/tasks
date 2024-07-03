import React, { useState, useEffect } from "react";
import axios from "axios";
import type { IItem } from "./types";
import { ITEMS_API_URL } from "./config";
import ExpandableAccordion from "./components/ExpandableAccordion";

export default function App() {
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(ITEMS_API_URL);
      setItems(response.data);
    };
    fetchItems();
  }, []);

  return <ExpandableAccordion items={items} />;
}
