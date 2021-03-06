import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  book:Book;
  titles:String[]=[];
  number:number;
  formBook;
  bookIdFromRoute:string;
  loading:boolean=false;
  constructor(private formbuilder:FormBuilder,private bookService:BookService, private route: ActivatedRoute,private routers: Router) { }
   
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.bookIdFromRoute = String(routeParams.get('bookId'));
    this.book=new Book({});
    this.getBook(this.bookIdFromRoute);
    this.createBookForm();
  }


  getBook(bookId:string)
  {
    this.bookService.getBookById(bookId).subscribe(data =>{
      this.book=data.book;
      console.log(data);
    });
  }
  addTitle()
  {
    this.titles[this.number]="<h1 id="+this.number+">Titles</h1>";
    this.formBook.get('description').setValue(this.formBook.get('description').value+this.titles[this.number]);
    this.number++;
  }

  addSubTitle()
  {
    this.titles[this.number]="<h3 id="+this.number+">Titles</h3>";
    this.formBook.get('description').setValue(this.formBook.get('description').value+this.titles[this.number]);
    this.number++;
  }
  updateBook()
  {
    this.loading=true;
    if (this.formBook.invalid) {
      this.loading=false;
      return;
    }

    const val = this.formBook.value;
    const book = new Book({title:val.title,description:val.description,userId:JSON.parse(localStorage.getItem('currentUserVal')).id})
    this.bookService.updateBook( this.bookIdFromRoute,book).subscribe(data =>{
        if (data.status) {
          this.loading=false;
          this.routers.navigate(["/"]);
        }
        else
        {
          this.loading=false;
          //handler error
        }
    });
  }

  createBookForm()
  {
    this.formBook = this.formbuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required]
  });
  }
}
