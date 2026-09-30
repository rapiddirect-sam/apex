import { Metadata } from "next";
import { inter, playfair } from "../fontDefinitions";
import "../home3.css";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${playfair.variable} home3-root`}>
      {children}
    </div>
  );
}
