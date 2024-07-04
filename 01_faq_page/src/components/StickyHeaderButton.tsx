import { Button } from "./ui/button";

interface Props {
  label: string;
  onHeaderBtnClick: () => void;
  btnLabel: string;
  headerBtnDisabled?: boolean;
  labelAppendix?: string;
}

export default function StickyHeaderButton({
  label,
  labelAppendix,
  btnLabel,
  onHeaderBtnClick,
  headerBtnDisabled,
}: Props) {
  return (
    <div className="rounded-lg sticky top-0 bg-zinc-700 z-50 shadow-xl">
      <div className="lg:p-8 p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <h1 className="flex items-center gap-4 lg:text-3xl text-xl text-white font-bold">
          {label}
          {labelAppendix && (
            <span className="text-red-300 text-base"> {labelAppendix}</span>
          )}
        </h1>
        {
          <Button
            data-testid="sticky-header-button"
            onClick={onHeaderBtnClick}
            className="rounded-lg bg-red-600 w-8/12 sm:w-6/12 md:w-3/12 lg:w-2/12 lg:text-xl text-base p-4 hover:bg-red-400 hover:text-neutral-800 transition-all duration-300 ease-in-out shadow-lg"
            disabled={headerBtnDisabled}
          >
            {btnLabel}
          </Button>
        }
      </div>
    </div>
  );
}
