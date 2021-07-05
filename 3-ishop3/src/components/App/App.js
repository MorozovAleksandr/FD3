import './App.css';
import React from 'react';
import Product from '../Product/Product.js'
import dataJson from '../../data.json'

class App extends React.Component {

    constructor() {
        super();
        this.id = 0;
        this.state = {
            products: dataJson.product.map(item => this.createProduct(...item))
        }
    }

    createProduct = (name, price, urlImg, count) => {
        return {
            id: this.id++,
            activeStatus: false,
            name,
            price,
            urlImg,
            count,
        }
    }

    onClickProduct = (id) => {
        this.setState(({ products }) => {
            const currentProducts = [...products];
            currentProducts.forEach(item => item.activeStatus = false);
            const idx = currentProducts.findIndex(el => el.id === id);
            const oldItem = currentProducts[idx];
            const updateItem = { ...oldItem, activeStatus: true }
            const before = currentProducts.slice(0, idx);
            const after = currentProducts.slice(idx + 1);
            const updateProducts = [...before, updateItem, ...after];

            return {
                products: updateProducts
            }
        })
    }

    onDelete = (id) => {
        this.setState(({ products }) => {
            const idx = products.findIndex(el => el.id === id);
            const before = products.slice(0, idx);
            const after = products.slice(idx + 1);
            const updateProducts = [...before, ...after];

            return {
                products: updateProducts
            }
        })
    }

    render() {
        const product = this.state.products.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <Product key={id} cbOnClickProduct={this.onClickProduct} cbOnDelete={this.onDelete} {...itemProps} id={id} />
            );
        });

        return (
            <table className="table" >
                <tbody className="tbody">
                    <tr className="shop">
                        {product}
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default App;