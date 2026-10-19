import Header from "./Header";
import StatCard from "./StatCard";
function Docs(handleRead, handleBookmark, handleReset, read, bookmarks) {
    return (
    <div className="flex items-end justify-between px-20 pt-10">
        <div>
          <Header />
          <div className="mt-6 flex gap-4">
            <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
              onClick={handleRead}
            >
              Mark as read
            </button>
            <button
              className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
              onClick={handleBookmark}
            >
              Bookmark
            </button>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <StatCard label="Read" value={read} />
        <StatCard label="Bookmarks" value={bookmarks} />
      </div>
    );
}

export default Docs;