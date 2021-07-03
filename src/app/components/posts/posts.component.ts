import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService],
})
export class PostsComponent implements OnInit {
  public id: any;
  public post: any;

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      this.id = data.id - 1
    })

    this.postService.getPosts().subscribe((data) => {
      this.post = data;
      this.post = this.post[this.id]
    });
  }
}
