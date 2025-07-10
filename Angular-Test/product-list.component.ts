import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  products: Product[] = [];
  filteredProducts$: Observable<Product[]> = of([]);
  filteredProducts: Product[] = [];
  addNewProduct = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();

    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
        this.filteredProducts$ = of(data);
      },
      error: (error) => {
        console.error("Error fetching products", error);
      }
    });
  }

  addProduct(newProduct: Product): void {
    this.productService.addProduct(newProduct).subscribe(() => {
      this.ngOnInit(); // Refresh product list
    });
  }

  searchProducts(event: Event): void {
    const input = (event.target as HTMLInputElement).value.trim();
    this.filteredProducts = this.products.filter(
      (product) =>
        product.productName.toLowerCase().includes(input.toLowerCase()) ||
        product.id.toString() === input
    );
    this.filteredProducts$ = of(this.filteredProducts);
  }
}
