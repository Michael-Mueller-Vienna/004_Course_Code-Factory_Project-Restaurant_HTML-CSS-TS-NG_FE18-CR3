import { Component } from '@angular/core';
import { products } from "../products"
import { Iproducts } from "../Iproducts"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  products:Iproducts[] = products;

  product:Iproducts = {} as Iproducts;
  id:number = 0;
}