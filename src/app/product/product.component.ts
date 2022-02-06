import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../services/product-services.service';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {

  IsPurchased:boolean=true;
  ProductList:any[]=[];
  Product:any={};
  ShowCard:boolean=false;
  errorMsg:any;
  ClientName = "";
  StoreName :string
  
  
  

  
  constructor( private _productServices :ProductServicesService ) {
    

    }
  
    renderValues()
    {      
      this._productServices.getAllProducts().subscribe((data)=>
      {
        return this.ProductList = data; 
      },
      error=>
      {
        this.errorMsg=error; 
      });
    }

    getProductById(id:any)
    {
      this.Product = this._productServices.getProductById(id);
      this.ShowCard= true;
      // console.log(id);
    }
    
    showTable() {

      this.IsPurchased = !this.IsPurchased
      
    }
  
    showDiv()
    {
      this.IsPurchased = false;
    }

  ngOnInit(): void {
    this.renderValues();
  }
  
}
