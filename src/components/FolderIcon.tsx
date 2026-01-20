import { Folder } from "lucide-react";

interface FolderIconProps {
  label: string;
  x: string;
  y: string;
}

export default function FolderIcon({ label, x, y }: FolderIconProps) {
  return (
    <div
      className="absolute cursor-pointer select-none"
      style={{ left: x, top: y }}
    >
      <div className="flex flex-col items-center gap-2">
        <Folder
          size={40}
          className="text-neutral-700 dark:text-neutral-300"
        />
        <span className="text-xs text-neutral-500">{label}</span>
      </div>
    </div>
  );
}
