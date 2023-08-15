import React, { useState } from 'react';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';


const MEALS_DATA = [
    {
        id: '1',
        title: 'ULTIMATE ANGUS CLASSIC BBQ',
        desc: 'Flame-grilled, juicy Angus Beef patty served in between Corn Dusted Sourdough buns with American cheese, crispy Turkey Bacon, sliced onions, fresh tomato, Batavia Lettuce and smoky BBQ sauce.',
        price: '7',
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: 'DOUBLE WHOPPER® WITH CHEESE',
        desc: 'The only way to make Awesome more awesome is to add what made it awesome in the first place. We’ve added yet another WHOPPER® beef patty and cheese to the tangy pickles, ketchup, fresh tomatoes, crisp lettuce and fresh onions, creamy mayo and the toasted 5" sesame seed bun of the original WHOPPER®. The Double WHOPPER® with Cheese. It’s Awesomer.',
        price: '8', 
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: 'DOUBLE CHEESEBURGER',
        desc: 'Make room for our Double Cheeseburger, two signature flame-grilled beef patties topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        price: '12',
        img: '/img/meals/3.png'
    },
    {
        id: '4',
        title: 'ULTIMATE CHICKEN KING',
        desc: 'Crispy on the outside and tender on the inside – get the best of both worlds. Spicy Chicken patty topped with Swiss cheese, savoury Turkey Ham, crispy Turkey Bacon, crisp Batavia Lettuce and creamy Mayo. The ultimate chicken indulgence in between Corn Dusted Sourdough buns. The Ultimate Selection also includes Ultimate Angus Classic BBQ™ and Ultimate Angus Mushroom Swiss™.',
        price: '14',
        img: '/img/meals/4.png'
    },
    {
        id: '5',
        title: 'LONG CHICKEN',
        desc: 'Delightfully tasty chicken topped with shredded lettuce and creamy mayo, and served on a 7" sesame seed bun-made extra long because we know you don"t want the delicious bites to end so quickly.',
        price: '9',
        img: '/img/meals/5.png'
    },
    {
        id: '6',
        title: 'TENDERGRILL® CHICKEN',
        desc: 'Treat yourself to something awesome. A deliciously juicy premium chicken thigh patty that"s grilled to perfection, topped with a tomato slice, freshly shredded lettuce and creamy mayo to bring out all the flavours, then served on a soft sesame seed bun. All hail the thigh!',
        price: '14',
        img: '/img/meals/6.png'
    },
    {
        id: '7',
        title: 'FISH BURGER',
        desc: 'Score a catch of marvelous flavors for your tastebuds with this delightful burger. A succulent fish fillet is embraced by a whole slice of American cheese, and then topped with tangy tartar sauce to accentuate the fish"s flavor - and it"s all served between a toasted sesame bun.',
        price: '20',
        img: '/img/meals/7.png'
    }
]

const App = () => {

    const [mealsData, setMealsData] = useState(MEALS_DATA)

    const [cartData, setCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0
    });

    const addItem = (meal) => {
        const newCart = {...cartData}; // 浅复制
          
        // 如果商品不存在, 将meal 添加到购物车中
        if(newCart.items.indexOf(meal) === -1){
            newCart.items.push(meal);
                //修改商品数量
            meal.amount = 1;
        }else{
            //增加商品的数量
            meal.amount += 1;
        }
        
        newCart.totalAmount += 1;
        newCart.totalPrice += meal.price;
        setCartData(newCart);
    };

    const removeItem = (meal) => {
        const newCart = {...cartData};
        meal.amount -= 1;

        if(meal.amount === 0){
            newCart.items.splice(newCart.items.indexOf(meal), 1);
        }

        newCart.totalAmount -= 1;
        newCart.totalPrice -= meal.price;
        setCartData(newCart);
    };

    return(
        <CartContext.Provider value={{...cartData, addItem, removeItem}}>
            <div>
            <Meals mealsData={mealsData} />
        </div>
        </CartContext.Provider>        
    );
};

export default App;