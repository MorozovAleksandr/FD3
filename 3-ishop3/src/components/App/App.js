import './App.css';
import React from 'react';
import Product from '../Product/Product.js';
import ActiveProductCard from '../ActiveProductCard/ActiveProductCard.js';
import CreateOrEditProductCard from '../CreateOrEditProductCard/CreateOrEditProductCard.js';
import dataJson from '../../data.json';

class App extends React.Component {

    constructor() {
        super();
        this.id = 1;
        this.state = {
            products: dataJson.product.map(item => this.createProduct(...item)),
            activeCardId: null,
            createOrEditCard: {
                createOrEditStatus: false,
                editCardId: null,
                workMode: null
            }
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
                products: updateProducts,
                activeCardId: id
            }
        })
    }

    onDelete = (id) => {
        if (this.state.activeCardId === id) {
            this.setState(activeCardId => {
                return {
                    activeCardId: null
                }
            })
        }
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

    onEdit = (id) => {
        this.setState(({ createOrEditCard }) => {
            return {
                createOrEditCard: {
                    createOrEditStatus: true,
                    editCardId: id,
                    workMode: 2
                }
            }
        })
    }

    onSave = (product) => {
        this.setState(({ products }) => {
            let updateProducts = null;
            if (this.state.createOrEditCard.workMode === 1) {
                let newProduct = [];
                for (let prop in product) {
                    newProduct.push(product[prop])
                }
                updateProducts = [...products, this.createProduct(...newProduct)];

            } else {
                const idx = products.findIndex(el => el.id === product.id);
                const before = products.slice(0, idx);
                const after = products.slice(idx + 1);
                updateProducts = [...before, product, ...after];
            }
            return {
                products: updateProducts,
                createOrEditCard: {
                    createOrEditStatus: false,
                    editCardId: null
                }
            }
        })

    }

    onCancel = () => {
        this.setState(() => {
            return {
                createOrEditCard: {
                    createOrEditStatus: false,
                    editCardId: null
                }
            }
        })
    }

    onNewProduct = () => {
        this.setState(() => {
            return {
                createOrEditCard: {
                    createOrEditStatus: true,
                    editCardId: null,
                    workMode: 1
                }
            }
        })
    }

    render() {
        const product = this.state.products.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <Product key={id} cbOnClickProduct={this.onClickProduct} cbOnDelete={this.onDelete} cbOnEdit={this.onEdit} {...itemProps} id={id} />
            );
        });

        return (
            <div>
                <table className="table" >
                    <tbody className="tbody">
                        <tr className="shop">
                            {product}
                        </tr>
                    </tbody>
                </table>
                <input type="button" onClick={this.onNewProduct} value="Новый продукт" />
                {
                    (this.state.activeCardId) &&
                    <ActiveProductCard activeProduct={this.state.products.find(item => item.id === this.state.activeCardId)} />
                }

                {
                    (this.state.createOrEditCard.createOrEditStatus) &&
                    <CreateOrEditProductCard cbOnCancel={this.onCancel} workMode={this.state.createOrEditCard.workMode} cbOnSave={this.onSave} editProduct={this.state.products.find(item => item.id === this.state.createOrEditCard.editCardId)} />
                }

            </div>
        )
    }
}

export default App;