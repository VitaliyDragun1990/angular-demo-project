import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './rout_http_section/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './rout_http_section/navbar/navbar.component';
import { HomeComponent } from './rout_http_section/home/home.component';
import { GithubProfileComponent } from './rout_http_section/github-profile/github-profile.component';
import { NotFoundComponent } from './rout_http_section/not-found/not-found.component';
import { GithubFollowersComponent } from './rout_http_section/github-followers/github-followers.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Routing Section
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
