import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';
import { animals } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing';
  animals = animals.map(animal => {
    return {
      ...animal,
      img: assetUrl(animal.img),
    }
  });

  constructor(private router: Router){}

  openInfo(animal: any): void {
    this.router.navigate([`/icons/`], { queryParams: { id: animal.id } })
  }
}
