import React from "react";
import { connect } from "react-redux";
import { addProduct, getProducts } from "../../redux/actions";


function FormProduct(props) {
  let { addProduct } = props
  let [product, setProduct] = React.useState({name: null, price: null})

  const handleChangeProduct = (name, price) => {
    setProduct({name: name, price: price})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(product);
    setProduct({name: "", price: ""})
    // getProducts()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          id="name"
          value={product.name}
          onChange={(e) => handleChangeProduct(e.target.value, product.price)}
        />
      </div>
      <div>
        <label htmlFor="title">Price</label>
        <input
          type="text"
          id="price"
          value={product.price}
          onChange={(e) => handleChangeProduct(product.name, e.target.value)}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  )
}

const mapDispatchToProps = {
  addProduct
}

export default connect(null, mapDispatchToProps)(FormProduct)