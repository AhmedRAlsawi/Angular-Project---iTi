import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  ProductList = [
    
  {
    ID: 1,
    Name: "TV",
    Quantity: 1,
    Price: 6500,
    img:"../../assets/rca-rca-rs32h2-eu-android-smart-led-tv.png",
},{
  ID: 2,
  Name: "laptop",
  Quantity: 1,
  Price: 15000,
  img:"../../assets/hp-da1886ne-laptop-i5-8265u-8gb-silver_1.jpg",
}]

  constructor() { }

  getAllProducts()
  {
    return this.ProductList;
  }
  
  getProductById(id:number)
  {
    if ( isNaN(id) )
    {
      return console.error("ID is not a number.")
    }
    const productFound = this.ProductList.find((product)=>
    {
      return product.ID == id ;
    })
    if (!productFound)
    {
      return console.log("ID not found"); 
    }
    return productFound;
    

  }

}
