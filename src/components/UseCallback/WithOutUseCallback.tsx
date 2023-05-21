import React, {useMemo, useState} from "react";
import Counter from "../UseMemo/Counter";
import Books from "../UseMemo/Books";

const WithOutUseCallback = () => {
  console.log(1);
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(["JS", "HTML", "SASS", "CSS", "React"]);
  // if not use callback functions increment and addAngular every time will be different
  // so components will be rendered every time
  const increment =  () => setCount(count => count + 1)
  const addAngular = () => setBooks(books => [...books, "Angular" + Date.now()]);
  const filteredBooks = useMemo(() => books.filter(book => book.toLowerCase().includes("s")), [books]);
  return (
    <div>
      <div>Open console</div>
      <Counter count={count} increment={increment}/>
      <Books books={filteredBooks} addItem={addAngular}/>
    </div>
  );
};

export default WithOutUseCallback;