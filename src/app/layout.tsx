import "./globals.css";

export const metadata = {
  title: "SOSA Job Support",
  description: "Personalized Job Support Services by SOSA Consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
