import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public content: string

  @Input()
  public id: number

  @Input()
  public link: string = 'yes';

  constructor() {
  }

  ngOnInit(): void {
    this.title = this.title.charAt(0).toUpperCase() + this.title.substring(1);
  }

}
