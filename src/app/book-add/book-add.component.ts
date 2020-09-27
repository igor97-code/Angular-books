import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {BooksService} from '../services/book-service'

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  constructor(  public router: Router,  public BooksService: BooksService) {this.service = BooksService  }
  service
  img:string
  author:string
  name:string
  year:string

  ngOnInit(): void {
  }
  toMain(){
    this.router.navigate(['/'])
  }
  submit(){
    this.service.addBook({name:this.name,image:this.img,author:this.author,year:this.year})
    this.toMain();
  }
}
