import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleCardCellComponent } from './article-card-cell/article-card-cell.component';
import { ArticleRankingCellComponent } from './article-ranking-cell/article-ranking-cell.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardCellComponent,
    ArticleRankingCellComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
