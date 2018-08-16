import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { PostService } from '../services/post.service';
import { getParseErrors } from '@angular/compiler';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;



  constructor(private service: PostService) {
  }

  ngOnInit() {

    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const postObj = { title: input.value };
    this.posts.splice(0, 0, postObj);

    input.value = '';

    this.service.create(postObj)
      .subscribe((post: any) => {
        postObj['id'] = post.id;
        console.log(post);
      }, (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
          //  this.form.setErrors(error.orginalError);
          } else {
            throw error;
          }
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(post => {
        console.log(post);
      });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(() => {
      },
      (error: AppError) => {

        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
        } else {
          throw error;
        }
      });
  }
}
