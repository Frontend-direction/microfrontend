import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { assetUrl } from 'src/single-spa/asset-url';
import { animals } from './data';

const defautData = {
  id: 0,
  name: '',
  desc: '',
  img: ''
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'info';
  animal = defautData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap
    .pipe(filter(val => val.has('id')))
    .subscribe(val => {
      let param1 = this.route.snapshot.queryParams["id"];
      const foundAnimal = animals
      .find(({ id }) => id === parseInt(param1, 10)) || defautData;
      
      this.animal = {
        ...foundAnimal,
        img: assetUrl(foundAnimal.img)
      }
      
    })
  }
}
