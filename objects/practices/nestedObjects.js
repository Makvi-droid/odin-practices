const book = {
    title: "JavaScript Basics",
    author: {
      firstName: "John",
      lastName: "Doe"
    },
    year: 2022,
    genres: ["Education", "Programming"]
  };

  book.genres.push("Web Development");

  console.log(book.title);
  console.log(book.author.lastName);
  console.log(book.genres);
  delete book.year;

  console.log(book.year);
  