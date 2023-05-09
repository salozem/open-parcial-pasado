import {Component, OnInit, ViewChild} from '@angular/core';
import {Foodtruck} from "../../model/foodtruck";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FoodtrucksService} from "../../services/foodtrucks.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodtrucks',
  templateUrl: './foodtrucks.component.html',
  styleUrls: ['./foodtrucks.component.css']
})
export class FoodtrucksComponent implements OnInit {
  foodtruckData: Foodtruck;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['ownerFirstName', 'ownerLastName', 'brandName', 'email', 'address', 'websiteUrl', 'menuUrl'];

  @ViewChild('foodtruckForm', {static: true})
  foodtruckForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort, {static: true})
  sort!: MatSort;

  isEditMode = false;

  constructor(private foodtrucksService: FoodtrucksService, private router:Router) {
    this.foodtruckData = {} as Foodtruck;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllFoodTrucks();
  }

  getAllFoodTrucks() {
    this.foodtrucksService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Foodtruck) {
    this.foodtruckData = element;
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.foodtruckForm.resetForm();
    this.router.navigate(['/home']);
  }

  deleteItem(id: number) {
    this.foodtrucksService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Foodtruck) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addFoodtruck() {
    this.foodtrucksService.create(this.foodtruckData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        return o;
      });
    });
  }

  updateFoodtruck() {
    this.foodtrucksService.update(this.foodtruckData.id, this.foodtruckData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Foodtruck) => {
        if (o.id === response.id) {
          o = response;
        }
        return 0;
      });
    });
  }

  onSubmit() {
    if (this.foodtruckForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateFoodtruck();
      } else {
        console.log('about to add')
        this.addFoodtruck();
        this.router.navigate(['/home']);
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}
