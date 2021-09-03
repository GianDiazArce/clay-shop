interface IProduct {
    name?: string;
    brand?: string;
    img: string;
}

export const productos: IProduct[] = [
    {
        img: 'product1.png',
        brand: 'Louis Vouiton'
    },
    {
        img: 'product2.png',
        brand: 'Dolce&Gabbana'
    },
    {
        img: 'product3.png',
        brand: 'Gucci'
    },
    {
        img: 'product4.png',
        brand: 'Dries van Noten'
    },
]