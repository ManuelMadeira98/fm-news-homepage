import { Component } from '@angular/core';
import { Article, CardEntries } from './types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    featured: Article = {
        title: 'The Bright Future of Web 3.0?',
        description:
            'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
        image: '/assets/image-web-3-mobile.jpg',
    };

    cardEntries: CardEntries = {
        firstCard: [
            {
                title: 'Hydrogen VS Electric Cars',
                description: 'Will hydrogen-fueled cars ever catch up to EVs?',
            },
            {
                title: 'The Downsides of AI Artistry',
                description:
                    'What are the possible adverse effects of on-demand AI image generation?',
            },
            {
                title: 'Is VC Funding Drying Up?',
                description:
                    'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
            },
        ],
        secondCard: [
            {
                ranking: '01',
                title: 'Reviving Retro PCs',
                description:
                    'What happens when old PCs are given modern upgrades?',
                image: '/assets/image-retro-pcs.jpg',
            },
            {
                ranking: '02',
                title: 'Top 10 Laptops of 2022',
                description: 'Our best picks for various needs and budgets.',
                image: '/assets/image-top-laptops.jpg',
            },
            {
                ranking: '03',
                title: 'The Growth of Gaming',
                description:
                    'How the pandemic has sparked fresh opportunities.',
                image: '/assets/image-gaming-growth.jpg',
            },
        ],
    };
}
