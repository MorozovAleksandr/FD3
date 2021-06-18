const Product = React.createClass({

    displayName: 'Product',

    onClickProduct() {
        this.props.cbOnClickProduct(this.props.id);
    },

    onDelete(e) {
        e.stopPropagation();
        confirm('Вы уверены, что хотите удалить?') ? this.props.cbOnDelete(this.props.id) : null;
    },

    render() {
        return (
            React.DOM.td({ className: `product ${this.props.activeStatus ? 'activeTrue' : null}`, onClick: this.onClickProduct },
                React.DOM.img({ className: 'product_img', src: this.props.urlImg }),
                React.DOM.h5({ className: 'product_name' }, this.props.name),
                React.DOM.div({ className: 'product_price' }, `Цена: ${this.props.price}`),
                React.DOM.div({ className: 'product_count' }, `Осталось: ${this.props.count}`),
                React.DOM.input({ className: 'product_delete btn btn-danger mt-2', type: 'button', defaultValue: 'Удалить', onClick: this.onDelete })
            )
        )
    }
});
