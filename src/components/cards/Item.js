import React from "react";
function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.preview.media.url} />
      <div className="px-3">
        <h6 className="my-3">{product.slug}</h6>
        <div className="flex justify-between">
          <span className="category">{product.category?.category.slug}</span>
          <span className="price">{product.price.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
