import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function NewsLayout({ children }) {
  return (
    <div className="container p-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">{children}</div>
        <div className="col-span-4">
          <ul>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
