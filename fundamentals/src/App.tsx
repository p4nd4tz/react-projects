import "./App.css";
import Book from "./book";

const bookList = [
  {
    id: 1,
    imageUrl: "../src/assets/book-1.jpg",
    name: "Interesting facts for curious minds",
    author: "jordan Moore",
  },
  {
    id: 2,
    imageUrl: "../src/assets/book-2.jpg",
    name: "Brain Boosting facts for curious minds",
    author: "Daniel Kane (Author)",
  },
  {
    id: 3,
    imageUrl: "../src/assets/book-3.jpg",
    name: "Fascinating facts for Inquisitive minds",
    author: "Fred Flynn",
  },
];

function App() {
  return (
    <div className="p-16 bg-slate-100">
      <nav className="flex justify-center">
        <h1 className="capitalize font-semibold my-16 text-4xl">Amazon best sellers</h1>
      </nav>
      <div className="flex gap-10">
        {bookList.map((bk) => (
          <Book key={bk.id} book={bk} />
        ))}
      </div>
    </div>
  );
}

export default App;