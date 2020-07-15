import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux';

function UserContainer({ productData, fetchProducts }) {
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
                                <div>
                                    <img src={item.image} alt="avatar" />
                                    {/*<div>Id: {item.id}</div>*/}
                                    {/*<div>Featured: {item.featured.toString()}</div>*/}
                                    <div>Category: {item.category}</div>
                                    <div>Name: {item.name}</div>
                                    <div>Manufacture: {item.manufacture} </div>
                                    {/*<div>Amount: {item.amount}</div>*/}
                                </div>

                            )}
                    </div>
                </div>
            )

}

const mapStateToProps = state => {
    return {
        productData: state.product,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer);