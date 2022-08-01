import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  user = {
    name: 'Vova',
    address: 'Lviv',
    phone: '888-999',
    icons: [assetUrl('Crab.svg')]
  }
}
