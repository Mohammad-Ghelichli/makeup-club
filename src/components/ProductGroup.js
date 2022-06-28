import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductGroup = () => {
  return (
    <div style={{padding:"10px 5px"}}>
      <br/>
      <br/>
      <br/>
      <h1 style={{textAlign:"center"}}>Product Group</h1>
      <br/>
      <br/>
      <br/>

      <div>
        <ul className="ul">
          <li>
            <Link to="/lip">lip_liner</Link>
          </li>
          <li>
            <Link to="/lipstick">lipstick</Link>
          </li>
          <li>
            <Link to="/foundation">foundation</Link>
          </li>
          <li>
            <Link to="/eyeliner">eyeliner</Link>
          </li>
          <li>
            <Link to="/eyeshadow">eyeshadow</Link>
          </li>
          <li>
            <Link to="/blush">blush</Link>
          </li>
          <li>
            <Link to="/bronzer">bronzer</Link>
          </li>
          <li>
            <Link to="/mascara">mascara</Link>
          </li>
          <li>
            <Link to="/eyebrow">eyebrow</Link>
          </li>
        </ul>
      <br/>
      <br/>

      </div>
    </div>

  );
};

export default ProductGroup;
