import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/FetchData";
import styles from "./Product.module.css"
import cart from "../../assets/icons/cart.svg"
import loading from "../../assets/icons/loading.svg"
const Foundation = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      const products = await fetchData(
        "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"
      );
      await setProduct(products);
    };
    fetchProduct();
  }, []);
  return (
    <div className={styles.container}>
      {product ? (
        product.map((item) => (
          
          <div class="product-card">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src={item.image_link} alt=""/>
          </div>
          <div class="product-details">
            <span class="product-catagory">{item.category}</span>
            <h4>{item.name}</h4><br/>
            <p> <h3>brand : {item.brand}</h3></p>
            <div class="product-bottom-details">
              <div class="product-price"><small>$ {item.price}</small>${item.price}</div>
              <div class="product-links">
                <i class="fa fa-shopping-cart"><img width="50px" src={cart} alt=""/></i>
              </div>
            </div>
          </div>
        </div>
        ))
      ) : (
        <img width="400px" src={loading} alt="loading"/>
      )}
    </div>
  );
};

export default Foundation;
