import { Component, Input, OnInit } from '@angular/core';

interface images{
  src:string;
  alt:string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() images:images[] = [
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
  ];

  ngOnInit() {
   
  }
  
  



}
