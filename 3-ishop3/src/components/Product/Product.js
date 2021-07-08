import React from 'react';

class Product extends React.Component {
    onClickProduct = () => {
        this.props.cbOnClickProduct(this.props.id);
    }

    onDelete = (e) => {
        e.stopPropagation();
        const answer = window.confirm('Вы уверены, что хотите удалить?') ? this.props.cbOnDelete(this.props.id) : null;
    }

    onEdit = (e) => {
        e.stopPropagation();
        this.props.cbOnEdit(this.props.id);
    }

    render() {
        return (
            <td className={`product ${this.props.activeStatus ? 'activeTrue' : null}`} onClick={this.onClickProduct}>
                <img className='product_img' src={this.props.urlImg} alt="" />
                <h5 className='product_name'>{this.props.name}</h5>
                <div className='product_price'>Цена: {this.props.price}</div>
                <div className='product_count'>Осталось: {this.props.count}</div>
                <input className='btn btn-danger mt-2' type="button" defaultValue='Редактировать' onClick={this.onEdit} />
                <input className='product_delete btn btn-danger mt-2' type="button" defaultValue='Удалить' onClick={this.onDelete} />
            </td>
        )
    }
}

export default Product;