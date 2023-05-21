import React, {useCallback, useMemo, useState} from "react";
import Counter from "../UseMemo/Counter";
import Books from "../UseMemo/Books";

const WithUseCallback = () => {
  console.log(1);
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(["JS", "HTML", "SASS", "CSS", "React"]);
  // if we use useCallback every time will be rendered only that component which dependency was changed
  const increment =  useCallback(() => setCount(count => count + 1), [count]);
  const addAngular = useCallback(() => setBooks(books => [...books, "Angular" + Date.now()]), [books])
  const filteredBooks = useMemo(() => books.filter(book => book.toLowerCase().includes("s")), [books]);
  return (
    <div>
      <div>Open console</div>
      <Counter count={count} increment={increment}/>
      <Books books={filteredBooks} addItem={addAngular}/>
    </div>
  );
};

export default WithUseCallback;