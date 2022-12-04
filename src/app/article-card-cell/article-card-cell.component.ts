import { Component, Input } from '@angular/core';
import { Article } from '../types';

@Component({
    selector: 'app-article-card-cell',
    template: `
        <article class="article">
            <h3 class="article--title">{{ article.title }}</h3>
            <p>{{ article.description }}</p>
            <ng-content></ng-content>
        </article>
    `,
    styleUrls: ['./article-card-cell.component.scss'],
})
export class ArticleCardCellComponent {
    @Input() article!: Article;
}
