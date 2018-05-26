// categories of books
const cat = {
    fantasy: 'fantasy',
    sf: 'science-fiction',
    horror: 'horror',
    romance: 'romance',
};

// some books
const books = [{
    id: 100,
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    price: 39,
    categories: [cat.fantasy],
    featured: true,
    description: 'Harry Potter\'s life is miserable. His parents are dead and he\'s stuck with his heartless relatives, who force him to live in a tiny closet under the stairs.',
    image: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&source=gbs_api'
}, {
    id: 101,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 25,
    categories: [cat.fantasy],
    featured: false,
    description: 'A great modern classic and the prelude to The Lord of the Rings.',
    image: 'http://books.google.com/books/content?id=YyXoAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
}, {
    id: 102,
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    price: 30,
    categories: [cat.fantasy, cat.romance],
    featured: false,
    description: 'Mikhail Bulgakov\'s devastating satire of Soviet life was written during the darkest period of Stalin\'s regime.'
}, {
    id: 103,
    title: 'Romeo & Juliet',
    author: 'William Shakespeare',
    price: 15,
    categories: [cat.romance],
    featured: false,
    description: 'In Romeo and Juliet, Shakespeare creates a world of violence and generational conflict in which two young people fall in love and die because of that love.'
}, {
    id: 104,
    title: 'It',
    author: 'Stephen King',
    price: 44,
    categories: [cat.horror],
    featured: true,
    description: 'They were seven teenagers when they first stumbled upon the horror. Now they were grown-up men and women who had gone out into the big world to gain success and happiness.'
}, {
    id: 105,
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    price: 32,
    categories: [cat.sf],
    featured: true,
    description: 'The novel is set in Airstrip One, a world of perpetual war, omnipresent government surveillance, and public manipulation.'
}, {
    id: 106,
    title: 'Solaris',
    author: 'Stanisław Lem',
    price: 29,
    categories: [cat.sf],
    featured: true,
    description: 'Cosmonaut Kris Kelvin lands on the research station suspended above the surface of the planet Solaris. Kelvin meets two colleagues at the station, but they appear to him strangely reserved, as if concealing something.',
    image: 'http://books.google.com/books/content?id=5F5RPgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
}, {
    id: 107,
    title: 'Dracula',
    author: 'Bram Stoker',
    price: 20,
    categories: [cat.horror, cat.romance],
    featured: false,
    description: 'The classic horror tale of the powerful, centuries-old vampire follows his bloodthirsty trail from the mountains of Central Europe to England, until Dr. Van Helsing comes up with a way to end his reign of terror.',
    image: 'http://books.google.com/books/content?id=ArNnwDGH1fQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
}];

export { books }