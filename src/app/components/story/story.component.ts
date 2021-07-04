import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input()
  public src: string;

  @Input()
  public user: string;

  constructor() { }

  ngOnInit(): void {
  }

}
