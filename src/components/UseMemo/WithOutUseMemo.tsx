import React, {useState} from "react";
import Books from "./Books";
import Counter from "./Counter";

const WithOutUseMemo = () => {
  console.log("1");
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(["JS", "HTML", "SASS", "CSS", "React"]);
  const increment = () => setCount((prevState => prevState + 1));
  // if not use memo Books will be rendered, if change count
  const filteredBooks = books.filter(book => book.toLowerCase().includes("s"))
  return (
    <div>
      <div>Open console</div>
      <Counter count={count} increment={increment}/>
      <Books books={filteredBooks}/>
    </div>
  );
};

export default WithOutUseMemo;