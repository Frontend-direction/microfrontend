import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'header';
  logoPath = 'http://localhost:8081/assets/home.jpg';
  profileImgPath = 'http://localhost:8081/assets/logo.jpg'
}
