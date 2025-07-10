import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  function handleAddToBookmark(blog) {
    setBookmarks([...bookmarks, blog]);
  }

  function handleMarkAsRead(id, time) {
    setReadingTime(readingTime + time);

    console.log("remove bookmark", id);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  }

  return (
    <main className="container mx-auto">
      <Header />
      <div className="md:flex md:gap-6">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </main>
  );
}
