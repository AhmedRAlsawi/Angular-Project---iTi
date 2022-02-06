import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUsers } from '../Shared Classes and types/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url:string= "https://jsonplaceholder.typicode.com/users"
  constructor(private http : HttpClient) { }

  getAllUsers():Observable<IUsers[]>
  {
    return this.http.get<IUsers[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "Server error")
    }))
  }
}