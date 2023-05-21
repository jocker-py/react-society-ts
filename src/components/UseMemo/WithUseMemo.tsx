import React, {FC, useMemo, useState} from "react";
import Counter from "./Counter";
import Books from "./Books";

const WithUseMemo = () => {
  console.log("1");
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(["JS", "HTML", "SASS", "CSS", "React"]);
  const increment = () => setCount((prevState => prevState + 1));
  //With use memo Books will not be rendered if change count
  const filteredBooks = useMemo(() =>
      books.filter(book => book.toLowerCase().includes("s"))
    , [books]);
  return (
    <div>
      <div>Open console</div>
      <Counter count={count} increment={increment}/>
      <Books books={filteredBooks}/>
    </div>
  );
};

export default WithUseMemo;