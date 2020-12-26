export class Book {

    constructor(_id = null, title = null, author = null, year = null){
        this._id = _id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    _id: string;
    title: string;
    author: string;
    year: number;
}