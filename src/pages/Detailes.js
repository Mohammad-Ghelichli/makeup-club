import React, {  useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./Detailes.module.css";
import { fetchData } from "../utils/FetchData";
const Detailes = () => {
  const navigate=useNavigate()
  const clickHandler=()=>{
    navigate(-1)
  }
  const params = useParams();
  const code = params.id;
  const id = code.split(":");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetchData(
        `http://makeup-api.herokuapp.com/api/v1/products/${id[1]}.json`
      );
      await setProduct(data);
    };
    fetchProduct();
    console.log(product);
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <img src={product.image_link} alt="" />
        </div>
        <div className={styles.detailes}>
          <h1>{product.name}</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>
            <span>Brand : </span>
            {product.brand}
          </h2>
          <br />
          <h2>
            <span>Category : </span>
            {product.product_type}
          </h2>
          <br />
          <h2>
            <span>Price : </span> $ {product.price}
          </h2>
          <br />
          <span>
            <h2>Description :</h2>
          </span>
          <br />
          <p>{product.description}</p>
        </div>
        <div className={styles.but}>
          <button onClick={clickHandler}>back to shop</button>

        </div>

      </div>
    </div>
  );
};

export default Detailes;
