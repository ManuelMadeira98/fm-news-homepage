export interface Article {
    title: string,
    description: string,
    ranking?: string,
    image?: string
}

export interface CardEntries {
    firstCard: Article[],
    secondCard: Article[]
}