import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router'
import {BooksService} from '../services/book-service'


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})

export class BookEditComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public BooksService: BooksService
  ) {  this.servise = BooksService }
  book;
  servise;
  edit = false;

  i:string = 'qweqweqwe';
  a:string = 'qwe';
  n:string = 'qwe';
  y:string = 'qwe';

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.book = this.servise.getById(params.id)
    })
  }
  toMain(){
    this.router.navigate(['/'])
  }
  submit(){
    this.edit = true;
    this.servise.editBook(this.book);
    this.toMain();
  }

}