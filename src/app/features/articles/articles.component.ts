import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles$ = this.articlesService.getArticles();
  constructor(private articlesService: ArticlesService) { }

}
