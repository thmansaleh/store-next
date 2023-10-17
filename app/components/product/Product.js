"use client"
import "./style.css"
import Link from "next/link"
export default function Product(){
  return  <Link href='product/6' className="product">
    <img  src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt=""/>
    <span className="product-name">iPhone 12</span>
    <div
    className="price-container">
 <div>600 AED</div>
      <div className="previous-price">700 AED </div>
    </div>
  </Link>
}
