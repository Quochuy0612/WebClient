import { Injectable } from '@angular/core';
import { Product } from 'app/models/Product';
import { WebRequestService } from './web-request.service';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private webReqService: WebRequestService,
    private http: HttpClient) { }

  getCate() {
    return this.webReqService.get('Categories');
  }


  getProductsById(category_id: string) {
    return this.webReqService.get(`Categories/${category_id}`);
  }

  getProducts() {
    return this.webReqService.get(`Products`);
  }
  getDetailProduct(categoryId: string, productId: String) {
    return this.webReqService.get(`Products/${categoryId}/${productId}`);
  }
}
