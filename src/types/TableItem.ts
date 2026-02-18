// GET api/table/list --> TableList
export type TableList = TableItem[]

export interface TableItem {
    id: number,
    rating: number,
    title: number,
    image: string,
}