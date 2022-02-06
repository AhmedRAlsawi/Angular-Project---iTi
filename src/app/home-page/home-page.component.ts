import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ICategory } from '../Shared Classes and types/ICategory';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  Discount : DiscountOffers;
  StoreName :string;
  StoreLogo :string;
  CategoryList :ICategory[];
  ClientName : string;
  IsPurchased:boolean=false;
  

  constructor() { 
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



  ngOnInit(): void {
  }

}
