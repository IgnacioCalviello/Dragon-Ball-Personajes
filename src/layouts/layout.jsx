export default function Layout({ children }) {
  return (
    <main className="w-full min-h-screen p-1 dark:bg-slate-900 dark:text-white">
      {children}
    </main>
  );
}
