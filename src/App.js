import './App.css';
import Header from './component/Header.js';
import ProductList from './component/ProductList.js';
import CartList from './component/CartList.js';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTR7BZS9NtqAIq2Yypb50S-HdK7wTXbbAiXT6epDQaLJwsfIFMVCg1J2fH8pY7F4kFP_7VCLL9JE3vwKM4j8Unjw7OF215L6hGK7WXAV0nv_2b7Yf7mGSkA&usqp=CAE',
      name: 'Unisex Glasses',
      category: 'Glasses',
      seller: 'lenskart',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://m.media-amazon.com/images/I/41BTlYui7sL._SX679_.jpg',
      name: 'Sun Glaases',
      category: 'Unisex',
      seller: 'unique ltd',
      price: 2999
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfJCdgC1z4Y_-1IbIAnHQDl5emVvMs2bkDePSS1mlm881qdldBhOJ6IXtfP0aMEZzaAT99fCUMVM55WLhBV5qDweXJ4js3OYtRfXwDb9UzX0dH3w4cqOZ5Gw&usqp=CAE',
      name: 'RADO R12949153',
      category: 'Rado watc',
      seller: 'RADO',
      price: 4000000
    },
    {
      url: 'https://images.jdmagicbox.com/quickquotes/images_main/rolex_datejust_men_watch_white_116233__10724277_0.jpg',
      name: 'Rolex Watch',
      category: 'Rolex',
      seller: 'Rolex and  Co',
      price: 20000
    },
    {
      url: 'https://m.media-amazon.com/images/I/71WvSloObLL._SX679_.jpg',
      name: 'Edith Glasses',
      category: 'Glasses',
      seller: 'Royal store',
      price: 10000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <>
          <ProductList product={product} addToCart={addToCart}
          handleShow={handleShow} ></ProductList>
          
          </>
      }


    </div>
  );
}

export default App;