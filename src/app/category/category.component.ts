import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { Products } from 'interface';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  ngOnInit(): void {
   // this.product = this.ecommerceService.getCategories()
 }
 product:Products[]=[]
constructor(public ecommerceService:EcommerceService) {}

}