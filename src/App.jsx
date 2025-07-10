import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);

  function handleAddToBookmark(blog) {
    setBookmarks([...bookmarks, blog]);
  }
  return (
    <main className="container mx-auto">
      <Header />
      <div className="md:flex md:gap-6">
        <Blogs handleAddToBookmark={handleAddToBookmark} />

        <Bookmarks bookmarks={bookmarks} />
      </div>
    </main>
  );
}
