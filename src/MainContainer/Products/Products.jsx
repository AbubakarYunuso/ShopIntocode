import styleProduct from './Product.module.css'

const Products = (props)=>{

const products = [
    {
      id: 1,
      name: "MacBook",
      price: 100000,
      left: 31,
      image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
      id: 2,
      name: "Galaxy",
      price: 35999,
      left: 11,
      image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
      id: 3,
      name: "Скутер",
      price: 65500,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      left: 7,
      image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: 500,
      left: 24,
      image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
    {
      id: 7,
      name: "Белый холодильник",
      price: 43100,
      left: 18,
      image: "http://intocode.ru/d/react-project-1/images/7.jpg",
    },
    {
      id: 8,
      name: "Колонка",
      price: 3000,
      left: 1,
      image: "http://intocode.ru/d/react-project-1/images/8.jpg",
    },
    {
      id: 9,
      name: "Наушники",
      price: 1500,
      left: 5,
      image: "http://intocode.ru/d/react-project-1/images/9.jpg",
    },
  ];
    return(
            <div className={styleProduct.productContainer}>
                <div className={styleProduct.imageContainer}>
                    <img className={styleProduct.imageProduct} src={props.image} alt="ffef" />
                </div>
                <span className={styleProduct.priceProduct}>{props.price} ₽</span>
                <span className={styleProduct.nameProduct}>{props.name}</span>
                <button className={styleProduct.productButton}>Купить</button>
            </div>
    )
}

export default Products