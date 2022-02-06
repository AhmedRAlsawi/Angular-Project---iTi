import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';
import { ProductsWithDiscComponent } from './products-with-disc/products-with-disc.component';
import { ProductsWithoutDiscComponent } from './products-without-disc/products-without-disc.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"products", component:ProductComponent,
    children:[
      {path:"discount",component:ProductsWithDiscComponent},
      {path:"withoutdiscount",component:ProductsWithoutDiscComponent}
    ]
  },
  {path:"users", component:UsersComponent},
  {path:"posts", component:PostsComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"**", component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
