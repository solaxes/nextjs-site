import NewsList from "@/components/news/NewsList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <h1>NewsList</h1>
      <NewsList />
    </div>
  );
}
