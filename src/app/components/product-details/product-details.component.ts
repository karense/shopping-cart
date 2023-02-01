import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modules/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product:Product = {
    id : 0,
    name: "",
    description: "",
    price:0,
    image:"",
  }


}
