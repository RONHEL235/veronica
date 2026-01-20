import ThemeToggle from "./components/ThemeToggle";
import FolderIcon from "./components/FolderIcon";

export default function App() {
  return (
    <main className="relative min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="p-4 bg-white dark:bg-black text-black dark:text-white">
  DARK MODE WORKS
</div>

      <FolderIcon label="music" x="20%" y="30%" />
      <FolderIcon label="store" x="50%" y="20%" />
      <FolderIcon label="tour" x="75%" y="35%" />
      <FolderIcon label="nu thoughts" x="60%" y="65%" />
    </main>
  );
}
