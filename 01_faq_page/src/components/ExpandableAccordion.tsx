import { useEffect, useState } from "react";
import { IItem } from "../types";
import { HEADER_LABEL, LOAD_MORE_BUTTON_LABEL } from "../content";
import { COUNT_INCREASE, DEFAULT_VISIBLE_COUNT } from "../config";
import { Skeleton } from "./ui/skeleton";
import StickyHeaderButton from "./StickyHeaderButton";
import ItemsAccordion from "./ItemsAccordion";

interface Props {
  items: IItem[];
}
export default function ExpandableAccordion({ items }: Props) {
  const [itemsToDisplay, setItemsToDisplay] = useState<IItem[]>([]);

  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNT);

  useEffect(() => {
    if (itemsToDisplay.length !== visibleCount) {
      setItemsToDisplay(items.slice(0, visibleCount));
    }
  }, [visibleCount, items]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + COUNT_INCREASE);
  };

  return (
    <div className="lg:p-14 p-2 bg-zinc-900 min-h-screen">
      {/* Display placeholder while items are loading */}
      {!itemsToDisplay.length ? (
        <ComponentSkeleton />
      ) : (
        <div className="flex flex-col gap-2">
          <StickyHeaderButton
            label={HEADER_LABEL}
            labelAppendix={`(${visibleCount} / ${items.length})`}
            onHeaderBtnClick={loadMore}
            headerBtnDisabled={visibleCount === items.length}
            btnLabel={LOAD_MORE_BUTTON_LABEL(COUNT_INCREASE)}
          />
          <ItemsAccordion items={itemsToDisplay} />
        </div>
      )}
    </div>
  );
}

function ComponentSkeleton() {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-[112px] w-full rounded-lg bg-neutral-800" />
        <div className="space-y-1">
          {Array(DEFAULT_VISIBLE_COUNT)
            .fill(null)
            .map((_, i) => (
              <Skeleton
                key={i}
                className="h-[128px] w-full bg-neutral-800 rounded-sm"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
