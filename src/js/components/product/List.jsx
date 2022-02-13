import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getProducts, updateProduct, deleteProduct} from "../../redux/actions";

const ListProduct = (props) => {
  let {products, getProducts, updateProduct, deleteProduct} = props
  let [product, setProduct] = React.useState(null)

  useEffect(() => {
    getProducts()
  }, [])

  const handleChangeProduct = (name, price) => {
    setProduct({id: product.id, name: name, price: price})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product);
    setProduct(null)
  }

  return (
    <>
      <ul>
        {products.map(element => (
          <>
            <div style={{display: "flex"}}>
              <li key={element.id}>{element.name} - ${element.price}</li>
              <button onClick={() =>
                setProduct({id: element.id, name: element.name, price: element.price})
              }>UPDATE</button>
              <button onClick={() => deleteProduct(element)}>DELETE</button>
            </div>

            {product && product.id === element.id && (
              <form onSubmit={handleSubmit}>
                <div>
                  <h3>UPDATE PRODUCT</h3>
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
                <button type="submit">UPDATE</button>
                <button onClick={() => setProduct(null)}>Cancel</button>
              </form>
            )}
          </>
        ))}
      </ul>
    </>
  )
};

const mapStateToProps = (state) => ({
  products: state.product.products
})

const mapDispatchToProps = {
  getProducts,
  updateProduct,
  deleteProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)