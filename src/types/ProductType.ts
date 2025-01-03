export type ProductType = {
    id: string,
    name: string,
    description: string | null,
    quantity?: number | 1,
    price: number | null,
    image: string,
    currency?: string,

}