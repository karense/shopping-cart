import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/modules/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  products:Product[] = []

  @Output()
  selected = new EventEmitter<Product>();

  handleSelect(product: Product){
    this.selected.emit(product)
  }

}
