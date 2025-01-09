const ListTheNames = () => {
  const names = ["sp", "pp", "sm", "um", "lm", "ad"];
  const books = [
    {
      id: 1,
      author: "Chinua Achebe",
      country: "Nigeria",
      imageLink: "images/things-fall-apart.jpg",
      language: ["English", "Hindi", "Sanskrit"],
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      pages: 209,
      title: "Things Fall Apart",
      year: 1958,
    },
    {
      id: 2,
      author: "Hans Christian Andersen",
      country: "Denmark",
      imageLink: "images/fairy-tales.jpg",
      language: ["Danish", "English", "Hindi", "Sanskrit", "Gujrati"],
      link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      pages: 784,
      title: "Fairy tales",
      year: 1836,
    },
    {
      id: 3,
      author: "Dante Alighieri",
      country: "Italy",
      imageLink: "images/the-divine-comedy.jpg",
      language: ["Danish", "English", "Hindi", "Italian"],
      link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      pages: 928,
      title: "The Divine Comedy",
      year: 1315,
    },
    {
      id: 4,
      author: "Samuel Beckett",
      country: "Sumer and Akkadian Empire",
      imageLink: "images/the-epic-of-gilgamesh.jpg",
      language: ["English", "Hindi", "Akkadian"],
      link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      pages: 160,
      title: "The Epic Of Gilgamesh",
      year: -1700,
    },
    {
      id: 5,
      author: "Eswar mishra",
      country: "Achaemenid Empire",
      imageLink: "images/the-book-of-job.jpg",
      language: ["Marathi", "Hindi", "Hebrew"],
      link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
      pages: 176,
      title: "The Book Of Job",
      year: -600,
    },
  ];

  //   const prod = [
  //     { id: 1, name: "apple", price: 100 },
  //     { id: 2, name: "banana", price: 500 },
  //     { id: 3, name: "blackberry", price: 300 },
  //     { id: 4, name: "cherry", price: 200 },
  //     { id: 5, name: "mango", price: 500 },
  //   ];

  //   const showNames = (name) => {
  //     return <li key={name}>{name}</li>;
  //   };

  //   const prodlist = prod.map((product) => {
  //     return <li key={product.id.toString()}>{product.name}</li>;
  //   });

  // const updateBook = [];

  //   const getBook = () => {
  //     return books;
  //   };

  const getBookId = (id) => {
    return books.find((bid) => bid.id === id); //books.find((bid) => { return bid.id === id })
  };

  const bk = getBookId(2);
  //rest operator
  //   const { author, pages, language } = bk;
  //   const [l1, l2, ...l3] = language;

  //spread operator
  const updateBook = { ...bk, price: 200 };

  const newnames = names.slice().sort();
  console.log(newnames);

  return (
    <div>
      {/* {names.map(showNames)} */}

      {/* we should put key value as unique that to as a string value */}
      {/* {prodlist} */}

      {/* {author} {pages} */}
      {/* {l3} */}
      {updateBook.price}
      {console.log(updateBook.price)}

      {console.log(newnames)}
    </div>
  );
};

export default ListTheNames;
