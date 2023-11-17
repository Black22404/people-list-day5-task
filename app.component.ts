import { Component } from '@angular/core';
import { findIndex } from 'rxjs/internal/operators/findIndex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creationlist';
  //name: string[] = ["ahmed" , "ali" , "hassan"]

 // username: Array<string> = ["ahmed" , "ali" , "hassan"]

  //phone: Array<string> = ["123", "223" , "545"]

  customer: any [] = [
    {name: "kuhuk" , username: "ygjyg" , phone: "31654"}
  ]

  addcustomer () {
    this.customer.push({ name : "new" , username : "new" , phone: 6566});
    console.log("test");

  }

  deletecustomer () {
    this.customer.pop();
    this.customer.slice(); //current index
    console.log("test");
    console.log(findIndex);
  }
  }


