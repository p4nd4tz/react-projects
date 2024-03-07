type BookProps = {
  book: {
    id: number;
    imageUrl: string;
    name: string;
    author: string;
  };
};

const Book = ({ book }: BookProps) => {
  const { id, imageUrl, name, author } = book;
  return (
    <div className="bg-white p-10 rounded-2xl flex flex-col gap-3 justify-center items-center text-center relative">
      <img src={imageUrl} alt="" className="h-96 w-64" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <span className="font-medium tracking-wider text-blue-800 text-sm">
        {author}
      </span>
      <span className="bg-orange-700 text-white p-3 absolute top-0 left-0 rounded-tl-lg rounded-br-2xl"># {id}</span>
    </div>
  );
};

export default Book;