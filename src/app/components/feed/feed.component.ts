import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 100000)
  }

  ngOnInit(): void {
  }

}
