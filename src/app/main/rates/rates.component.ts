import { Component } from '@angular/core';

interface CardsInfo{
  title:string,
  price:string,
  month:string,
  hour:string,
  initiation:string
}
@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})

export class RatesComponent {
  cardsInfo:CardsInfo[] = [
    {
      title:"Regular Membership",
      price:"$35",
      month:"/Monthly",
      hour:"24 Hour Access",
      initiation:"$45 Initiation"
    },
    {
      title:"Senior Membership",
      price:"$30",
      month:"/Monthly",
      hour:"24 Hour Access",
      initiation:"$40 Initiation"
    },
    {
      title:"Under 23 Membership",
      price:"$30",
      month:"/Monthly",
      hour:"24 Hour Access",
      initiation:"$40 Initiation"
    },
    {
      title:"High School Membership",
      price:"$25",
      month:"/Monthly",
      hour:"24 Hour Access",
      initiation:"No Initiation"
    }
  ]
}
