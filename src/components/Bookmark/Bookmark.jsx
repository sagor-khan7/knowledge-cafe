export default function Bookmark({ bookmark }) {
  return (
    <div className="bg-white rounded-md text-lg font-semibold p-5 mt-3">
      <h3>{bookmark.title}</h3>
    </div>
  );
}
