import React, { useState, useEffect } from "react";
import axios from "axios";
import FAQItem from "./components/FAQItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Button } from "./components/ui/button";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const DEFAULT_VISIBLE_COUNT = 10;
const DEFAULT_COUNT_INCREASE = 10;

export default function App() {
  const [faqs, setFaqs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNT);

  useEffect(() => {
    const fetchFaqs = async () => {
      const response = await axios.get(API_URL);
      setFaqs(response.data);
    };
    fetchFaqs();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + DEFAULT_COUNT_INCREASE);
  };

  return (
    <div className="p-14 bg-zinc-300 flex flex-col gap-2">
      <h1 className="pb-6 text-3xl text-red-500 font-bold">FAQ</h1>
      <Accordion type="single" collapsible className="w-full ">
        {faqs.slice(0, visibleCount).map((faq: any) => (
          <AccordionItem
            value={faq.id}
            key={faq.id}
            className="bg-zinc-600 p-6"
          >
            <AccordionTrigger className="text-red-600 text-2xl capitalize ">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="">
              <FAQItem
                title={faq.title}
                body={faq.body}
                classes={"text-xl text-zinc-100"}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {visibleCount < faqs.length && (
        <Button onClick={loadMore}>Load {DEFAULT_COUNT_INCREASE} More</Button>
      )}
    </div>
  );
}
