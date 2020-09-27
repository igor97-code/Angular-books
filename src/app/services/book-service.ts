import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class BooksService {
    

    books = [
        {
            author:'Н.В.Гоголь',
            name: 'Тарас Бульба',
            year: '1835',
            img:'assets/img/TarasBulba.png',
            id:'1'
        },
        {
            author:'Л.Н.Толстой',
            name: 'Война и мир',
            year: '1865',
            img:'assets/img/VoinaiMir.png',
            id:'2'
        },
        {
            author:'Л.Н.Толстой',
            name: 'Анна Каренина',
            year: '1875',
            img:'assets/img/AnnaKarenina.png',
            id:'3'
        },
        {
            author:'Ф.М.Достоевский',
            name: 'Преступление и наказание',
            year: '1866',
            img:'assets/img/PrestuplenieiNakazanie.png',
            id:'4'
        }
    ]

    delBook(id:string){
        this.books = this.books.filter(book => book.id !== id)
    }
    getById(id:string){
        return this.books.find(book => book.id == id)
    }
    editBook(book){
        this.books = this.books.map( localBook =>{
        return localBook.id === book.id ? book : localBook
       })
    }
    addBook(object){
        object.id = this.books.length;
        this.books.unshift(object);
    }
}
