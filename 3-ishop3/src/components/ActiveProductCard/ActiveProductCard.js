
import React from "react";
import s from './ActiveProductCard.module.css';

class ActiveProductCard extends React.Component {
    render() {
        return (
            <div>
                <div className={s.activeProductCard} onClick={this.onClickProduct}>
                    <img className={s.productImg} src={this.props.activeProduct.urlImg} alt="" />
                    <h5 className={s.productName}>{this.props.activeProduct.name}</h5>
                    <div className={s.productPrice}>Цена: {this.props.activeProduct.price}</div>
                    <div className={s.productCount}>Осталось: {this.props.activeProduct.count}</div>
                </div>
            </div>
        )
    }
}

export default ActiveProductCard;