import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        (posts) => this.posts = posts);
  }


  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    // optimistic update
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        (createdPost) => {
          post['id'] = createdPost['id'];
        },
        (err: AppError) => {
          this.posts.splice(0, 1);

          if (err instanceof BadInput) {
            // use as validation error of our form
            // this.form.setErrors(err.originalError);
          } else {
            // rethrow error to being handled by global ErrorHandler (AppErrorHandler)
            throw err;
          }

        });
  }

  updatePost(post: any) {
    this.service.update(post, {title: 'Hello there'})
      .subscribe(
        (updatedPost) => {
          let index = this.posts.findIndex(value => value['id'] === updatedPost['id']);
          this.posts.splice(index, 1, updatedPost);
        });
  }

  deletePost(post: any) {
    // optimistic delete - delete post before actual call to the server
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post['id'])
      .subscribe(
        () => {
        },
        (err: AppError) => {
          // if some error occurred - put the post back to the array
          this.posts.splice(index, 0, post);

          if (err instanceof NotFoundError) {
            alert('This post has already been deleted..');
          } else {
            throw err;
          }
        });

  }
}
