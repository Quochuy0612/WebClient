import { Category } from 'app/models/Category.model';
import { ProductService } from 'app/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }
  categoryIdvn = '606192f83f30f53ce8cd33dc';
  categoryIdmay = '6061935b3f30f53ce8cd33dd';
  Productsvn: any[];
  Productsmay: any[];
  
  ngOnInit(): void {
    this.productService.getProductsById(this.categoryIdvn).subscribe((data: Category) => {
      this.Productsvn = data.products;
    });
    this.productService.getProductsById(this.categoryIdmay).subscribe((data: Category) => {
      this.Productsmay = data.products;
    });
  }
  
}
