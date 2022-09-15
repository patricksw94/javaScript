const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "Augusto Cury",
            },
            {
                title: "Os segredos da mente milionária",
                author: "Augusto Cury",
            },
            {
                title: "Os segredos da mente milionária",
                author: "Augusto Cury",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "Augusto Cury",
            },
            {
                title: "Os segredos da mente milionária",
                author: "Augusto Cury",
            },
            {
                title: "Os segredos da mente milionária",
                author: "Augusto Cury",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury')