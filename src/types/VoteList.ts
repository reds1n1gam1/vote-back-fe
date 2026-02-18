// GET api/vote --> VoteList
export type VoteList = {
    city1: VoteItem,
    city2: VoteItem
}

export interface VoteItem {
    id: number,
    title: string,
    text: string,
    images?: string[]
}