import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'stats-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  ngVersion = VERSION;

  title = 'stats';
}
