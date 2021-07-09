import React from "react";

class CreateOrEditProductCard extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.workMode === 2) {
            this.currentValidationField = {
                name: true,
                price: true,
                urlImg: true,
                count: true,
            };
        } else {
            this.currentValidationField = {
                name: false,
                price: false,
                urlImg: false,
                count: false,
            }
        }
        this.state = {
            workMode: this.props.workMode,
            product: this.props.editProduct,
            newProduct: {
                name: '',
                price: '',
                urlImg: '',
                count: '',
            },
            validationResultStatus: this.props.validationResultStatus,
            validationField: this.currentValidationField
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.editProduct !== prevProps.editProduct) {
            this.setState(({ product, workMode, validationResultStatus }) => {
                return {
                    product: this.props.editProduct,
                    workMode: this.props.workMode,
                    validationResultStatus: this.props.validationResultStatus
                }
            })
        }
    }

    updateValidationResultField = (status, e) => {
        this.setState(({ validationField }) => {
            return {
                validationField: { ...validationField, [e.target.dataset.name]: status }
            }
        });

        this.updateValidationResult({ ...this.state.validationField, [e.target.dataset.name]: status });
    }

    updateValidationResult = (fieldsResult) => {
        let count = 0;
        for (let prop in fieldsResult) {
            if (fieldsResult[prop]) count += 1;
        }

        this.setState(({ validationResultStatus }) => {
            if (count === Object.keys(fieldsResult).length) {
                return {
                    validationResultStatus: true
                }
            } else {
                return {
                    validationResultStatus: false
                }
            }
        })
    }

    validation = (e) => {
        switch (e.target.dataset.name) {
            case 'name':
                this.updateValidationResultField(e.target.value.split(" ").length - 1 !== e.target.value.length && e.target.value.length > 1, e);
                break;
            case 'price':
                this.updateValidationResultField((e.target.value > -1 && e.target.value != ""), e);
                break;
            case 'urlImg':
                this.updateValidationResultField(e.target.value.split(" ").length - 1 !== e.target.value.length && e.target.value.length > 1, e);
                break;
            case 'count':
                this.updateValidationResultField((e.target.value > -1 && e.target.value != ""), e);
                break;
        }
    }

    onChangeField = (e) => {
        this.onSaveStatusUpdate(false);

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

        this.validation(e);
    }

    onSaveStatusUpdate = (status) => {
        this.props.cbOnSaveStatusUpdate(status);
    }

    onSave = () => {
        this.onSaveStatusUpdate(true);
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
                            <span>Имя:</span>
                            <input type="text" data-name="name" onChange={this.onChangeField} value={this.state.newProduct.name} />
                            {
                                (!this.state.validationField.name) &&
                                <span>Минимальная длина строки 2 символа. Строка не должно состоять только из пробелов.</span>
                            }
                        </div>
                        <div>
                            <span>Цена:</span>
                            <input type="number" data-name="price" onChange={this.onChangeField} value={this.state.newProduct.price} />
                            {
                                (!this.state.validationField.price) &&
                                <span>Обязательное поле. Значение должно быть не ниже 0.</span>
                            }
                        </div>
                        <div>
                            <span>Количество:</span>
                            <input type="number" data-name="count" onChange={this.onChangeField} value={this.state.newProduct.count} />
                            {
                                (!this.state.validationField.count) &&
                                <span>Обязательное поле. Значение должно быть не ниже 0.</span>
                            }
                        </div>
                        <div>
                            <span>Урл картинки:</span>
                            <input type="text" data-name="urlImg" onChange={this.onChangeField} value={this.state.newProduct.urlImg} />
                            {
                                (!this.state.validationField.urlImg) &&
                                <span>Минимальная длина строки 2 символа. Строка не должно состоять только из пробелов.</span>
                            }
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
                            <span>Имя:</span>
                            <input type="text" data-name="name" onChange={this.onChangeField} value={this.state.product.name} />
                            {
                                (!this.state.validationField.name) &&
                                <span>Минимальная длина строки 2 символа. Строка не должно состоять только из пробелов.</span>
                            }
                        </div>
                        <div>
                            <span>Цена:</span>
                            <input type="number" data-name="price" onChange={this.onChangeField} value={this.state.product.price} />
                            {
                                (!this.state.validationField.price) &&
                                <span>Обязательное поле. Значение должно быть не ниже 0.</span>
                            }
                        </div>
                        <div>
                            <span>Количество:</span>
                            <input type="number" data-name="count" onChange={this.onChangeField} value={this.state.product.count} />
                            {
                                (!this.state.validationField.count) &&
                                <span>Обязательное поле. Значение должно быть не ниже 0.</span>
                            }
                        </div>
                        <div>
                            <span>Урл картинки:</span>
                            <input type="text" data-name="urlImg" onChange={this.onChangeField} value={this.state.product.urlImg} />
                            {
                                (!this.state.validationField.urlImg) &&
                                <span>Минимальная длина строки 2 символа. Строка не должно состоять только из пробелов.</span>
                            }
                        </div>
                    </div>
                }
                <input disabled={!this.state.validationResultStatus} onClick={this.onSave} type="button" value="Сохранить" />
                <input onClick={this.props.cbOnCancel} type="button" value="Отменить" />
            </div>
        )
    }
}

export default CreateOrEditProductCard;