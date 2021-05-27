import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() products!: ProductAlertsComponent;
  constructor() { }

  ngOnInit() {
  }

}