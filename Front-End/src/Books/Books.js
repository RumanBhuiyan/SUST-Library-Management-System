import axios from "axios";

const libraryBooks = [];

axios
  .get("http://localhost:4000/data/")
  .then((res) => {
    libraryBooks.push(...res.data);
  })
  .catch((error) => {
    console.log(error);
  });

export default libraryBooks;
