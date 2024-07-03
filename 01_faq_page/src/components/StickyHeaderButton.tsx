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
    <div className="sticky top-0 bg-zinc-700 z-50">
      <div className="p-8 flex justify-between items-center">
        <h1 className="flex items-center gap-4 text-3xl text-white font-bold">
          {label}
          {labelAppendix && (
            <span className="text-red-300 text-base"> {labelAppendix}</span>
          )}
        </h1>
        {
          <Button
            data-testid="sticky-header-button"
            onClick={onHeaderBtnClick}
            className="rounded-none bg-red-600 text-xl p-6 hover:bg-red-400 hover:text-neutral-800"
            disabled={headerBtnDisabled}
          >
            {btnLabel}
          </Button>
        }
      </div>
    </div>
  );
}
