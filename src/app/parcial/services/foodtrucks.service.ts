import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Foodtruck} from "../model/foodtruck";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodtrucksService extends BaseService<Foodtruck>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/food-trucks';
  }
}
