const getDefaultState = () => {
    return {
        categories: []
    };
};

export const productpage = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        // getProduct(s) {
        //     return s.state.product;
        // },
        // getCategories(s) {
        //     return s.state.categories;
        // }
    },
    mutations: {
        load(state, obj) {
            // state.product =
            //     Object.keys(obj.product).length === 0
            //         ? getDefaultState().product
            //         : obj.product;
            state.categories = obj.categories.length > 0 ? obj.categories : [];
        }
    },
    actions: {
        load({ commit }, obj) {
            commit("load", obj);
        }
    }
};
