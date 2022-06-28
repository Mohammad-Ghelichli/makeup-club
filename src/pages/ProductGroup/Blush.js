import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/FetchData";
import styles from "./Product.module.css"
import cart from "../../assets/icons/cart.svg"
import loading from "../../assets/icons/loading.svg"
import Product from "../cart/shared/Product";


const Blush = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      const products = await fetchData(
        "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
      );
      await setProduct(products);
      console.log(products)
    };
    fetchProduct();
  }, []);
  return (
    <div className={styles.container}>
      {product ? (
        product.map(item => <Product key={item.id} item={item}/>
          
        )
      ) : (
        <div>

          <img width="400px" src={loading} alt="loading"/>

        </div>
      )}
    </div>
  );
};


export default Blush;
