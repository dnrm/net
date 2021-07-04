import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedComponent } from './components/feed/feed.component';
import { StoriesComponent } from './components/stories/stories.component';
import { PostComponent } from './components/post/post.component';
import { StoryComponent } from './components/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    NavbarComponent,
    ExploreComponent,
    DashboardComponent,
    FeedComponent,
    StoriesComponent,
    PostComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
