import { Image as IImage } from "sanity";



export interface IProduct {
    id: string ;
    _id : string,
    name : string,
    _type : "product",
    image : IImage,
    price : number,
    description?: string,
    discountPercentage: number,
    isFeaturedProduct: Boolean,
    stockLevel: number,
    category: string,
    slug: {
        _type: 'slug'
        current: string
    }
    
}