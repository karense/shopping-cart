import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../modules/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product:Product = {
    id : 0,
    name: "",
    description: "",
    price:0,
    image:"",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
