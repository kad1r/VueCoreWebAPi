export const test = {
    state: {
        products: []
    },
    getters: {
        getProducts(s) {
            return s.state.products;
        }
    },
    mutations: {
        addProduct(state, product) {
            state.producs.push(product);
        },
        deleteProducts(state, products) {
            state.products.delete(producs);
        },
        updateProduct(state, product) {
            state.products.update(product);
        }
    },
    actions: {
        addNewProduct({ commit }, product) {
            commit("addProduct", product);
        }
    }
};
