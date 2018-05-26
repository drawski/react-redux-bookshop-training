import { books } from "./data";

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// returns random num [200;1200]
function getRandTime() {
    return Math.random() * 1000 + 200;
}

const fakeApi = {
    async getFeaturedBooks() {
        await delay(getRandTime());
        return books.filter(book => book.featured);
    },
    async getBooksByCategory(category) {
        await delay(getRandTime());
        return books
            .filter(book => book.categories.includes(category));
    },
    async searchByAuthorTitle(token) {
        await delay(getRandTime());
        return books
            .filter(book => book.title.includes(token) || book.author.includes(token));
    },
    async getBookData(bookId) {
        await delay(getRandTime());
        return books.find(book => book.id === bookId);
    }
};

export default fakeApi;
