import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images=[
    {
      src:'../assets/vestiar.jpg',
      alt:'vestiar'
    },
    {
      src:'../assets/vestiar2.jpg',
      alt:'vestiar2'
    },
    {
      src:'../assets/vestiar3.jpg',
      alt:'vestiar3'
    },
    {
      src:'../assets/sauna.jpg',
      alt:'sauna'
    },
    {
      src:'../assets/sauna2.jpg',
      alt:'sauna2'
    },
    {
      src:'../assets/sauna3.jpg',
      alt:'sauna3'
    },
  ]
  title = 'Gym';
}
