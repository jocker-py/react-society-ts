import React, {FC} from "react";
export type BooksPropsType = {
  books: Array<string>
  addItem?: () => void
}

const Books: FC<BooksPropsType> = ({books, addItem}) => {
  console.log("3");
  const booksElements = books.map((book, index) => <div key={index}>{book}</div>);
  const onClickHandler = addItem ? addItem : () => {};
  return <div>
    <div>{booksElements}</div>
    <button onClick={onClickHandler}>add book
    </button>
  </div>;
};

export default React.memo(Books);