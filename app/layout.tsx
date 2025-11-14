import "./global.css";
import Header from "./components/Header";

export const metadata = {
  title: "StoryBit - Streaming Dashboard",
  description: "Netflix style streaming dashboard built with Next.js 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ paddingTop: "75px" }}>{children}</div>
      </body>
    </html>
  );
}
