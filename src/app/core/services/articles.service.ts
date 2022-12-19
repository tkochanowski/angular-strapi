import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articlesPath = 'articles';

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get<{data: Article[]}>(environment.apiUrl+this.articlesPath).pipe(
      map((e: { data: Article[]; }) => e.data),
      map((e: Article[]) => e.map(article => article.attributes)),
    );
  }

  getArticle(slug: string): Observable<Article> {
    return this.http.get<{data: Article[]}>(environment.apiUrl+this.articlesPath+'?filters[slug][$eq]='+slug).pipe(
      map(articleData => articleData.data[0]),
    );
  }


}
