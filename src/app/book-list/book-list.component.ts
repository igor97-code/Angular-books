import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/book-service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent{

  constructor( public BooksService: BooksService ,private router: Router) {}

  goEditBook(id){
    this.router.navigate(['edit/',id])
  }
  addBook(){
    this.router.navigate(['book-add/'])
  }
}
