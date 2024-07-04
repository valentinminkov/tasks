import { IItem } from "../types";
import Item from "./Item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface Props {
  items: IItem[];
}

export default function ItemsAccordion({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full rounded-lg ">
      {items.map((item) => (
        <AccordionItem
          value={item.id.toString()}
          key={item.id}
          className="bg-zinc-800 p-8 rounded-sm"
        >
          <AccordionTrigger className="text-red-600 text-2xl capitalize hover:text-red-400 hover:animate-pulse text-left">
            <span>{item.title}</span>
          </AccordionTrigger>
          <AccordionContent className="py-6 bg-zinc-800 border-t-2 border-zinc-700">
            <Item
              title={item.title}
              body={item.body}
              classes={"text-xl text-zinc-100"}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
