
const PRODUCTS = [
    {
        id: 100,
        name:'covid 19',
        price: 100,
        image: require('../assets/products/covid 19.jpg'),
        description: 'A book containing the covid 19 symptoms.'

    }, 

    {
        id: 101,
        name: 'the ugly truth',
        price: 150,
        image: require('../assets/products/the ugly truth.jpg'),
        description: ' The book talks about the truth of life'
        

    },

    

    {
        id: 103,
        name: 'hidden treasure',
        price: 200,
        image: require('../assets/products/hidden treasure.png'),
        description: 'This book talks about the history of life.'

    },

    
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}