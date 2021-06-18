let id = 0;

const createProduct = (name, price, urlImg, count) => {
    return {
        id: id++,
        activeStatus: false,
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

    getInitialState: function () {
        return {
            products: this.props.products,
        };
    },

    onClickProduct(id) {
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
    },

    onDelete(id) {
        this.setState(({ products }) => {
            const idx = products.findIndex(el => el.id === id);
            const before = products.slice(0, idx);
            const after = products.slice(idx + 1);
            const updateProducts = [...before, ...after];

            return {
                products: updateProducts
            }
        })
    },

    render() {
        const product = this.state.products.map((item) => {
            const { id, name, price, urlImg, count, activeStatus } = item;
            return (
                React.createElement(Product, { key: id, cbOnClickProduct: this.onClickProduct, cbOnDelete: this.onDelete, activeStatus, id, name, price, urlImg, count })
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