// Task 1
const book = {
    title: "he's into her",
    author: "maxinejiji",
    pages: 113,
    isRead: true
};

console.log(book.title);
console.log(book["author"]);
console.log(book.pages);
console.log(book.isRead);

// Update
book.isRead = false;
book.genre = "teen fiction romance";
console.log(book);


// Task 2
const movies = [
    { title: "Ponyo", director: "Hayao Miyazaki", year: 2008 },
    { title: "Spirited Away", director: "Hayao Miyazaki", year: 2001 },
    { title: "Howl's Moving Castle", director: "Hayao Miyazaki", year: 2004 }
];

// Second Movie
console.log(movies[1].title);

// New Movie
movies.push({ title: "The Boy and the Heron", director: "Hayao Miyazaki", year: 2023 });

// Update the year of the first movie
movies[0].year = 2023;

console.log(movies);


// Task 3

const student = {
    name: "Maki",
    age: 18,
    subjects: ["Math", "Science", "History"]
};

// maki's first subject
console.log(student.subjects[0]);

// new subject
student.subjects.push("English");

console.log(student);


// Task 4

const recipe = {
    name: "Caesar Salad",
    ingredients: [
        { name: "Romaine Lettuce", quantity: "1 head", isVegetarian: true },
        { name: "Parmesan Cheese", quantity: "50g", isVegetarian: true },
        { name: "Chicken", quantity: "150g", isVegetarian: false }
    ]
};

// new ingredient
recipe.ingredients.push({ name: "Croutons", quantity: "1 cup", isVegetarian: true });

// second ingredient
console.log(recipe.ingredients[1].name);

console.log(recipe);