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

  Discount : DiscountOffers;
  StoreName :string;
  StoreLogo :string;
  CategoryList :ICategory[];
  ClientName : string;
  IsPurchased:boolean=false;
  ProductList:IProduct[]=[];
  Product:any={};
  ShowCard:boolean=false;

  

  showTable() {

    this.IsPurchased = !this.IsPurchased
    
  }

  showDiv()
  {
    this.IsPurchased = false;
  }



  constructor( private _productServices :ProductServicesService ) {
    this.Discount = DiscountOffers.Discount15,
    this.StoreName = "Electronic Shop",
    this.StoreLogo ="../../assets/60635179_319082245657558_5022286901969682432_n.jpg",
    this.CategoryList=
    [
      {
        ID: 1122,
        Name: "Electroincs",
      },
      {
        ID: 1144,
        Name: "Home Appliance",
      }
    ],
    this.ClientName = "",
    this.IsPurchased = true;

    }
  
    renderValues()
    {
      this.ProductList = this._productServices.getAllProducts();
    }

    getProductById(id:any)
    {
      this.Product = this._productServices.getProductById(id);
      this.ShowCard= true;
      console.log(id);
    }
    
 

  ngOnInit(): void {
    this.renderValues();
  }
  
}
