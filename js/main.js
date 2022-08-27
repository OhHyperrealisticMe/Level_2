class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this._render();
        this._calcSum();
    }
    _fetchProducts(){
        this.goods = [{
            id: 1,
            title: 'Notebook',
            price: 2000,
            image: 'https://spark-promotions.pl/data/shopproducts/172225/notatnik-ok-a5-v283805.jpg'
        },
        {
            id: 2,
            title: 'Mouse',
            price: 20,
            image: 'https://i.ebayimg.com/00/s/MTUwMFgxMjI1/z/Jt0AAOSw~mpa6cR5/$_57.JPG'
        },
        {
            id: 3,
            title: 'Keyboard',
            price: 200,
            image: 'https://images.wbstatic.net/big/new/25710000/25712665-1.jpg'
        },
        {
            id: 4,
            title: 'Gamepad',
            price: 50,
            image: 'https://images.wbstatic.net/big/new/64240000/64247827-1.jpg'
        },
    ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    _calcSum() {
        let sum = 0;
        for(let product of this.goods) {
            sum += product.price;
        }
        console.log(sum);
    }
}


class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.image = product.image;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
            <img src="${this.image}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
        </div>`
    }
}

class Cart {
    constructor(cart) {

    }

    calcCartSum(){
        //суммарная цена товаров
    }

    calcItemNum(){
        //посчитать, сколько предметов в корзине
    }

    clearCart(){
        //очистить корзину
    }

    deleteItem(){
        //удаляет товар из корзины
    }

    showItem(){
        //показывает товар на странице
    }

    plusItem(){
        //это когда можно нажать + и товаров в корзине станет на один больше
    }
}

class CartItem {
    constructor(cartItem) {

    }

}

let list = new ProductsList();


// const products = [{
//         id: 1,
//         title: 'Notebook',
//         price: 2000,
//         image: 'https://spark-promotions.pl/data/shopproducts/172225/notatnik-ok-a5-v283805.jpg'
//     },
//     {
//         id: 2,
//         title: 'Mouse',
//         price: 20,
//         image: 'https://i.ebayimg.com/00/s/MTUwMFgxMjI1/z/Jt0AAOSw~mpa6cR5/$_57.JPG'
//     },
//     {
//         id: 3,
//         title: 'Keyboard',
//         price: 200,
//         image: 'https://images.wbstatic.net/big/new/25710000/25712665-1.jpg'
//     },
//     {
//         id: 4,
//         title: 'Gamepad',
//         price: 50,
//         image: 'https://images.wbstatic.net/big/new/64240000/64247827-1.jpg'
//     },
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (image, title, price) => {
//     return `<div class="product-item">
//                 <img src="${image}">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item.image, item.title, item.price));
//     document.querySelector('.products').innerHTML = productsList.join('');
// };

// renderPage(products);