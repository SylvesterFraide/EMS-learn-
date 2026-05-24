import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../component/services';

const Product = () => {
    const {id} = useParams();

    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');

    const fetchProduct = () => {
       services.find((item) => {
           if (item.id === parseInt(id)) {
               setProductData(item);
               setImage(item.image[0]);
           }
       });
       
        // const product = services.find(item => item.id === parseInt(id));
        // if (product) {
        //     setProductData(product);
        //     setImage(product.image[0]);
        // }
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    console.log(productData);
    console.log(image);

    return (
        <div>Product</div>
    )
}

export default Product