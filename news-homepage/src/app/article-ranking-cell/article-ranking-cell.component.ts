import { Component, Input } from '@angular/core';
import { Article } from '../types';

@Component({
    selector: 'app-article-ranking-cell',
    templateUrl: './article-ranking-cell.component.html',
    styleUrls: ['./article-ranking-cell.component.scss'],
})
export class ArticleRankingCellComponent {
    @Input() article!: Article;
}
