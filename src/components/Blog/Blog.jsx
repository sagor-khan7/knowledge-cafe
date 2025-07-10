import bookmark from "../../assets/bookmark.png";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    author,
    author_img,
    cover,
    hashtags,
    posted_date,
    reading_time,
    title,
  } = blog;

  return (
    <div className="mb-20 border-b-2 border-gray-300">
      <img
        className="bg-cover bg-no-repeat bg-center w-full rounded-md"
        src={cover}
        alt={author}
      />
      <div className="flex justify-between items-center mt-10 mb-4">
        <div className="flex gap-5">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h4 className="text-xl font-bold">{author}</h4>
            <p className=" text-gray-500 font-medium">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className=" text-gray-500 font-medium">
            {reading_time} minutes read
          </p>
          <img
            onClick={() => handleAddToBookmark(blog)}
            className="w-4"
            src={bookmark}
            alt="bookmark"
          />
        </div>
      </div>
      <h2 className="font-bold text-[40px]">{title}</h2>
      <div className="flex gap-5 text-xl font-medium text-gray-600 my-4">
        {hashtags.map((hashtag, i) => (
          <p key={i}>#{hashtag}</p>
        ))}
      </div>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-500 border-b-2 cursor-pointer mb-6"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
