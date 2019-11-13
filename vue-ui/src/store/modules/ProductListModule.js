const state = {
    products: []
};

export const productlist = {
    namespaced: true,
    state: state,
    mutations: {
        load(state, products) {
            state.products = products;
        }
    },
    actions: {
        load({ commit }, year) {
            var products = require("../../assets/data/product_list.json");

            products = products.filter(x => { return x.year == year; });
            commit("load", products);
        }
    }
};
