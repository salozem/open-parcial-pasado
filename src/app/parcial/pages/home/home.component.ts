import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodtrucks!: any[];
  numItems!:number;

  constructor(private http:HttpClient) {
    this.getFoodTrucks();
  }

  getFoodTrucks(){
    this.http.get<any[]>('http://localhost:3000/food-trucks').subscribe(data =>{
      this.foodtrucks = data;
      this.numItems = this.foodtrucks.length;
      });
  }
}
