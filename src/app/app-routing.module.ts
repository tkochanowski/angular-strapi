import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './features/articles/articles.component';
import {ArticleComponent} from "./features/article/article.component";

const routes: Routes = [
  { path: 'article/:slug', component: ArticleComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: '', component: ArticlesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
