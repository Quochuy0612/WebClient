import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/Category.model';
import { Product } from 'app/models/product';
import { ProductService } from 'app/Services/product.service';

@Component({
  selector: 'app-collections-menu',
  templateUrl: './collections-menu.component.html',
  styleUrls: ['./collections-menu.component.css']
})
export class CollectionsMenuComponent implements OnInit {

  category: Category[];
  name:string;
  categoryId;
  Products: Product[];

  constructor(
    private productService: ProductService,
  ) { }
  
  ngOnInit(): void {
    this.productService.getCate().subscribe((data: any[]) => {
      this.category = data;
      this.clickProduct(data[0]._id);
      this.categoryId= data[0]._id;
    });
  }
  clickProduct(id) {
    this.productService.getProductsById(id).subscribe((data: Category) => {
      this.categoryId = id;
      this.Products = data.products;
      //console.log(this.Products)
      // this.Products.forEach(element => {
      //   console.log(element.image);
      //   element.image.forEach(cc => {
      //     console.log(cc.url)
      //   });
      // });
    });
  }

}
