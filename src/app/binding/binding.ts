import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.html',
  styles: ``
})
export class Binding implements OnInit {

  titre : string = 'demo du Data Binding Interpolation';
  constructor() { }
  ngOnInit(): void {
  }

}
