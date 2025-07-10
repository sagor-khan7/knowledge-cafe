import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks }) {
  return (
    <div className="md:w-1/3">
      <div className="bg-purple-200 py-5 px-12 rounded-md">
        <h4 className="text-2xl font-bold text-purple-500">
          Spend time on read: {bookmarks.reading_time}
        </h4>
      </div>
      <div className="p-8 bg-gray-200 mt-10 rounded-md">
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, i) => (
          <Bookmark key={i} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
}
