let id = 0;

const createProduct = (name, price, urlImg, count) => {
    return {
        id: id++,
        name,
        price,
        urlImg,
        count,
    }
}

const products = [
    createProduct('NikeCourt React Vapor NXT', '$110', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b637837-be6f-4221-94c7-04b0c846d49f/nikecourt-react-vapor-nxt-hard-court-tennis-shoe-KkrQ2H.png', 1),
    createProduct('Nike Air Force 1 LV8', '$120', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/060b8182-1799-4c74-b9ef-502fd4b1c1dd/air-force-1-lv8-shoe-z1jqnt.png', 2),
    createProduct('Nike Air Max Plus', '$130', 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2e78dae5-984d-4d6d-a763-ddb429b3cbf9/air-jordan-1-low-shoe-FNs1LD.png', 2),
    createProduct('Air Jordan 1 Low', '$140', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e78dae5-984d-4d6d-a763-ddb429b3cbf9/air-jordan-1-low-shoe-FNs1LD.png', 9),
];

const Nike = React.createClass({

    displayName: 'Nike',

    render() {
        const product = this.props.products.map((item) => {
            const { id, name, price, urlImg, count } = item;
            return (
                React.DOM.td({ key: id, className: `product` },
                    React.DOM.img({ className: 'product_img', src: urlImg }),
                    React.DOM.h5({ className: 'product_name' }, name),
                    React.DOM.div({ className: 'product_price' }, `Цена: ${price}`),
                    React.DOM.div({ className: 'product_count' }, `Осталось: ${count}`),
                )
            );
        });

        return (
            React.DOM.table({ className: 'table' },
                React.DOM.tbody({ className: 'tbody' },
                    React.DOM.tr({ className: 'shop' }, product)
                ),
            )
        )
    }
});

ReactDOM.render(
    React.createElement(Nike, { nameShop: 'Nike', products: products }),
    document.getElementById('root')
);