import React from "react";

class CreateOrEditProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workMode: this.props.workMode,
            product: this.props.editProduct,
            newProduct: {
                name: '',
                price: '',
                urlImg: '',
                count: '',
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.editProduct !== prevProps.editProduct) {
            this.setState(({ product, workMode }) => {
                return {
                    product: this.props.editProduct,
                    workMode: this.props.workMode
                }
            })
        }
    }

    onChangeField = (e) => {
        if (this.state.workMode === 1) {
            const updateProduct = { ...this.state.newProduct, [e.target.dataset.name]: e.target.value };
            this.setState(({ newProduct }) => {
                return {
                    newProduct: updateProduct
                }
            })
        } else {
            const updateProduct = { ...this.state.product, [e.target.dataset.name]: e.target.value };
            this.setState(({ product }) => {
                return {
                    product: updateProduct
                }
            })
        }
    }

    onSave = () => {
        this.state.workMode === 1 ? this.props.cbOnSave(this.state.newProduct) : this.props.cbOnSave(this.state.product);
    }

    render() {
        return (
            <div>
                {
                    (this.state.workMode === 1) &&
                    <div>
                        <h3>Добавьте новый продукт</h3>
                        <div>
                            <span>Имя:</span> <input type="text" data-name="name" onChange={this.onChangeField} value={this.state.newProduct.name} />
                        </div>
                        <div>
                            <span>Цена:</span> <input type="text" data-name="price" onChange={this.onChangeField} value={this.state.newProduct.price} />
                        </div>
                        <div>
                            <span>Количество:</span> <input type="text" data-name="count" onChange={this.onChangeField} value={this.state.newProduct.count} />
                        </div>
                        <div>
                            <span>Урл картинки:</span> <input type="text" data-name="urlImg" onChange={this.onChangeField} value={this.state.newProduct.urlImg} />
                        </div>
                    </div>
                }
                {
                    (this.state.workMode === 2) &&
                    <div>
                        <h3>Редактировать существующий продукт</h3>
                        <div>
                            ID: {this.state.product.id};
                        </div>
                        <div>
                            <span>Имя:</span> <input type="text" data-name="name" onChange={this.onChangeField} value={this.state.product.name} />
                        </div>
                        <div>
                            <span>Цена:</span> <input type="text" data-name="price" onChange={this.onChangeField} value={this.state.product.price} />
                        </div>
                        <div>
                            <span>Количество:</span> <input type="text" data-name="count" onChange={this.onChangeField} value={this.state.product.count} />
                        </div>
                    </div>
                }
                <input onClick={this.onSave} type="button" value="Сохранить" />
                <input onClick={this.props.cbOnCancel} type="button" value="Отменить" />
            </div>
        )
    }
}

export default CreateOrEditProductCard;