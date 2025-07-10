import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output() addProduct = new EventEmitter<Product>();
  productForm: FormGroup;
  productionStatus = ['In Production', 'In Assembly', 'Shipped', 'Delivered'];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      id: [0, Validators.required],
      productName: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      productionDate: ['', Validators.required],
      status: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.addProduct.emit(newProduct);
      this.productForm.reset();
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
