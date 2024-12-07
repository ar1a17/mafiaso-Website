import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title'; // Ensure Title is imported correctly if it exists in your project
import ProductItem from './Productitem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && Array.isArray(products)) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]); // Add `products` to the dependency array

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-34 m-auto text-xs sm:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam nostrum aspernatur doloribus magnam eius officiis, maiores quas optio aliquam fugiat, incidunt assumenda minima ipsa rem deserunt veritatis autem? Assumenda!
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item,index)=>(
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>

                    ))
                    
                    
                }

            </div>
        </div>
    );
};

export default BestSeller;