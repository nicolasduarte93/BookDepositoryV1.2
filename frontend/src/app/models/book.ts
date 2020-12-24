export class Book {

    constructor(_id = '', title = '', author = '', year = 0){
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