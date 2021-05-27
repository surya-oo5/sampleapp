import { Component } from '@angular/core';
import { product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = product;

  share() {
    window.alert('The product has been shared!');
  }
}