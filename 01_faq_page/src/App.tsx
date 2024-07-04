import React, { useState, useEffect } from "react";
import axios from "axios";
import type { IItem } from "./types";
import { ITEMS_API_URL } from "./config";
import ExpandableAccordion from "./components/ExpandableAccordion";

export default function App() {
  const [items, setItems] = useState<IItem[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(ITEMS_API_URL);
        setItems(response.data);
      } catch (error) {
        console.log("Couldn't fetch dummy data", error);
        setError("Couldn't fetch data");
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      {error && (
        <p className=" lg:px-16 py-8 p-2 text-red-500 animate-pulse text-xl">
          {error}
        </p>
      )}
      <ExpandableAccordion items={items} />
    </div>
  );
}
