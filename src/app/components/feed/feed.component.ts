import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [PostsService]
})
export class FeedComponent implements OnInit {

  public id: number
  public posts: any
  public times: Array<any>;

  constructor(
    private postsService: PostsService
  ) {
    this.id = Math.floor(Math.random() * 100000)
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data
      console.log(data)
      this.posts = this.posts.slice(0, 10)
    });
  }

}
