import { Component, OnInit } from '@angular/core';
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
  ProductList :IProduct[];
  CategoryList :ICategory[];
  ClientName : string;
  IsPurchased:boolean=false;
  

  showTable() {
    if (this.IsPurchased)
    {
      this.IsPurchased = false;
    }
    else 
    {
      this.IsPurchased = true;
    }
  }

  showDiv()
  {
    this.IsPurchased = false;
  }


  constructor() {
    this.Discount = DiscountOffers.Discount15,
    this.StoreName = "Electronic Shop",
    this.StoreLogo ="../../assets/60635179_319082245657558_5022286901969682432_n.jpg",
    this.ProductList =
    [
      {
        ID: 1,
        Name: "laptop",
        Quantity: 1,
        Price: 15000,
        img:"../../assets/hp-da1886ne-laptop-i5-8265u-8gb-silver_1.jpg",
    },
    {
      ID: 2,
      Name: "TV",
      Quantity: 1,
      Price: 6500,
      img:"../../assets/rca-rca-rs32h2-eu-android-smart-led-tv.png",
  }
      
    ],
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
  

  ngOnInit(): void {
  }
}