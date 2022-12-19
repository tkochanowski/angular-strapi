import {Component, OnInit} from '@angular/core';
import { ArticlesService } from 'src/app/core/services/articles.service';
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap} from "rxjs";
import {Article} from "../../core/models/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
  article$: Observable<Article['attributes']> = new Observable<Article['attributes']>();
  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.articlesService.getArticle(params.get('slug') || '').pipe(
          map(articleData => articleData.attributes)
        );
      })
    );
  }

}
