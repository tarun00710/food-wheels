import "./globals.css";
import MainHeader from "../components/MainHeader";
import MainHeaderBackground from "../components/MainHeaderBackground"

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative top-0 bg-black">
        <MainHeaderBackground />
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
