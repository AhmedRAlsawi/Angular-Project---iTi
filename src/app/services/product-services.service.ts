import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import ProductList from '../../assets/Data/products.json'
import { IProduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http:HttpClient) { }


  getAllProducts():Observable<any>
  {
    return this.http.get("../../assets/Data/products.json").pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "Server Error Manually");
      
    }))
  }

  
  
  getProductById(id:number)
  {
    if ( isNaN(id) )
    {
      return console.error("ID is not a number.")
    }
    const productFound = ProductList.find((product)=>
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
