export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-background py-6">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-lg text-foreground">
          © {new Date().getFullYear()} Ali Hossain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
