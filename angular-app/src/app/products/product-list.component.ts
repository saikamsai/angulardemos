import { Component } from "@angular/core";

@Component({
    selector:'product-list',
    templateUrl:'./product-list.component.html'
})

export class ProductListComponent{
  pageTitle:string="Product List Page"   
  title = "Data binding using Property Binding";      
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";  
}