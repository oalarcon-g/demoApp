import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  image1: string;
  image2: string;

  constructor() {
  	this.image1 = 'http://images6.fanpop.com/image/photos/36500000/Beautiful-Landscapes-image-beautiful-landscapes-36505176-600-450.jpg';
  	this.image2 = 'https://st2.depositphotos.com/7742794/10636/i/950/depositphotos_106364402-stock-photo-beautiful-russian-landscape-of-izmailovsky.jpg';
  }

}
