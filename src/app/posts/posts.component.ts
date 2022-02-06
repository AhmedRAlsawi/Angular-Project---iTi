import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { IPosts } from '../Shared Classes and types/IPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor( private postsService:PostsService ) { }

  postsList:any;
  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe((postsContent)=>
    {
      this.postsList=postsContent;
    })
  }
}