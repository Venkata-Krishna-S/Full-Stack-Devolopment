import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  firstname:string = "admin";
  lastname:string = "admin";
  age:number = 28;
  active:boolean = true;
  gender:string = "male";
  country:string = "India";
  adress:string = "hyderebad";
  constructor() { }

  ngOnInit(): void {
  }

}
