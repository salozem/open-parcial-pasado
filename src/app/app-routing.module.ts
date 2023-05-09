import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodtrucksComponent} from "./parcial/pages/foodtrucks/foodtrucks.component";
import {HomeComponent} from "./parcial/pages/home/home.component";
import {NotFoundComponent} from "./parcial/pages/not-found/not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'new',component:FoodtrucksComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
