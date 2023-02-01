import { Component } from '@angular/core';
import { Product } from './modules/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  
  products:Product[] = [{
    "id": 1,
    "name": "Awesome Bronze Chair",
    "price": 662,
    "description": "The Football Is Good For Training And Recreational Purposes",
    "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=5578"
  
    },
    {
    "id": 2,
    "name": "Recycled Rubber Salad",
    "price": 528,
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=2650",
    },
    {
    "id": 3,
    "name": "Luxurious Granite Table",
    "price": 34,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "image": "https://api.lorem.space/image/watch?w=640&h=480&r=4707"
    },
    {
    "id": 4,
    "name": "Practical Bronze Bacon",
    "price": 367,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=1795",
    },
    {
    "id": 5,
    "name": "Practical Concrete Bike",
    "price": 981,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "image": "https://api.lorem.space/image/watch?w=640&h=480&r=4346"
    },
    {
    "id": 6,
    "name": "Elegant Bronze Table",
    "price": 522,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=1149"
    },
    {
    "id": 7,
    "name": "Practical Wooden Towels",
    "price": 872,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "image": "https://api.lorem.space/image/watch?w=640&h=480&r=9784",
    },
    {
    "id": 8,
    "name": "Handmade Metal Chair",
    "price": 317,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "image":"https://api.lorem.space/image/shoes?w=640&h=480&r=3136"
    },
    {
    "id": 9,
    "name": "Handmade Cotton Pants",
    "price": 318,
    "description": "The Football Is Good For Training And Recreational Purposes",
    "image": "https://api.lorem.space/image/watch?w=640&h=480&r=6042"
    },
    {
    "id": 10,
    "name": "Fantastic Bronze Tuna",
    "price": 869,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=8160"
    },
    {
    "id": 11,
    "name": "Tasty Frozen Tuna",
    "price": 461,
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=3057"
    },
    {
    "id": 12,
    "name": "Intelligent Wooden Computer",
    "price": 653,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=3911"
    },
    {
    "id": 13,
    "name": "Unbranded Bronze Car",
    "price": 320,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=1265"
    },
    {
    "id": 14,
    "name": "Incredible Bronze Keyboard",
    "price": 430,
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=205"
    },
    {
    "id": 15,
    "name": "Electronic Fresh Sausages",
    "price": 523,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=3967"
    },
    {
    "id": 16,
    "name": "Fantastic Concrete Ball",
    "price": 641,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "image":"https://api.lorem.space/image/fashion?w=640&h=480&r=7359"
    },
    {
    "id": 17,
    "name": "Generic Rubber Car",
    "price": 441,
    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "image": "https://api.lorem.space/image/watch?w=640&h=480&r=7471"
    },
    {
    "id": 18,
    "name": "Bespoke Soft Mouse",
    "price": 669,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3970"
    },
    {
    "id": 19,
    "name": "Sleek Steel Chicken",
    "price": 38,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "image": "https://api.lorem.space/image?w=640&h=480&r=8391"
    },
    {
    "id": 20,
    "name": "Modern Bronze Car",
    "price": 220,
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "image": "https://api.lorem.space/image/watch?w=640&h=480&r=3037"
    }]

    productSelec:Product = this.products[0]

    setProductSelected(product:Product){
      this.productSelec = product
    }
}
