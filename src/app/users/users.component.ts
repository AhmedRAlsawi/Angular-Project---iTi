import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { IUsers } from '../Shared Classes and types/IUsers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  
  constructor( private userService:UsersService ) { }

  usersList:any;

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((usersContent)=>
    {
      this.usersList=usersContent;

    })
  } 
}