import {NgModule, SecurityContext} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ArticlesComponent} from "./features/articles/articles.component";
import { ArticleComponent } from './features/article/article.component';
import {MarkdownModule} from "ngx-markdown";

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
  ],
  imports: [
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
