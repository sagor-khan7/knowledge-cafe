import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <main className="container mx-auto">
      <Header />
      <div className="md:flex md:gap-6">
        <Blogs />
        <Bookmarks />
      </div>
    </main>
  );
}
