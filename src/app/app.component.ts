import { Component } from '@angular/core';

@Component({
  selector: 'root-directive',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  file:string = 'this file is app.component.html';
  name:string = 'Eoghan';
  age:number = 22;

}
