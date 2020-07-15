import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux';
import { addProduct } from '../redux/';
import '../App.css';



function ProductContainer({ productData, fetchProducts, addProduct }) {
    useEffect(() => {
        fetchProducts();
    }, []);
    return productData.loading ? (
        <h2>Loading</h2>
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
                <div>
                    <h2>Product List</h2>
                    <div>
                        {
                            productData.products.map(item =>
                                <div className="container" key={item.id}>
                                    <div className="image" >
                                        <img src={item.image} alt="avatar" />
                                        {/*<div>Id: {item.id}</div>*/}
                                        {/*<div>Featured: {item.featured.toString()}</div>*/}
                                        <p>Category: {item.category}</p>
                                        <p>Name: {item.name}</p>
                                        <p>Manufacture: {item.manufacture} </p>
                                        {/*<div>Amount: {item.amount}</div>*/}
                                        <button onClick={()=>addProduct(item)}>Add to Cart</button>
                                    </div>
                                </div>

                            )}
                    </div>
                </div>
            )

}

const mapStateToProps = state => {
    return {
        productData: state.product,
        //cartDate: state.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct: (product) => dispatch(addProduct(product))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);