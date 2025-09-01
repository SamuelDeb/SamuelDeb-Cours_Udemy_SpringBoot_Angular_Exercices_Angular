import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.html',
  styles: ``
})
export class Binding implements OnInit {

  titre : string = 'demo du Data Binding Interpolation ';

  status : boolean = true;

  nom : string = 'Samuel Debaer';

  constructor() { }

  ngOnInit(): void {
  }
  
  changerTitre() {
    this.titre = 'Titre modifié';

}
}