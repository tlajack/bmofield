import "./globals.css";

export const metadata = {
  title: "BMO Field Concessions",
  description: "Concession Details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
