"use client"
import "./style.css"
export default function Product(){
  return  <div className="product">
    <img  src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt=""/>
    <span className="product-name">iPhone 12</span>
    <div
    className="price-container">
      <div className="previous-price">700 AED </div>
    </div>
  </div>
}
