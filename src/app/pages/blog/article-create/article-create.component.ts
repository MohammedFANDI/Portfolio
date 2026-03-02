import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Article } from '../../../models/article';
import { BlogService } from '../../../services/blog.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css'
})
export class ArticleCreateComponent {

  // @ViewChild('title') title!: ElementRef;
  // @ViewChild('category') category!: ElementRef;
  // @ViewChild('body') body!: ElementRef;
  // @ViewChild('image') image!: ElementRef;

  categoryService = inject(CategoryService);

  blogService = inject(BlogService);

  router = inject(Router);

  submit(myForm: NgForm) { // the type NgForm check it in the html of this componenet
    if(myForm.invalid) { //why i added this condition , I did it even if someone entred in the inspection of the form and remove [disabled] he gonna find this condition to prevent him to enter an invalid form
      return;
    }
    const myArticle: Article = {
      ...myForm.value,
      author: 1,
      reaction: {
        likes: 0,
        dislikes: 0
      },
      views: 0,
    }

    this.blogService.save(myArticle).subscribe({
      next: (res) => {
        this.router.navigate(['/blog/list']);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
  // submit(myForm: any) {

  //   const myArticle: Article = {
  //     title: this.title.nativeElement.value,
  //     category: this.category.nativeElement.value,
  //     body: this.body.nativeElement.value,
  //     image: this.image.nativeElement.value,
  //     views: 0,
  //     reaction: {
  //       likes: 0,
  //       dislikes: 0
  //     },
  //     author: 1,
  //   }

  //   this.blogService.save(myArticle).subscribe({
  //     next: (res) => {
  //       this.router.navigate(['/blog/list']);
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })

  // }


}
