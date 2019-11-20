const initialState = () => {
  return {
    searchArr: [],
    sortArr: [],
    comps: ["About", "Home", "Product", "ProductActivity", "ProductList"],
    lastComponent: null,
  };
};
const state = () => initialState();

export const app = {
  namespaced: true,
  state: state,
  getters: {},
  mutations: {
    resetModuleState(state) {
      Object.assign(state, initialState());
    },
  },
  actions: {
    resetAppState({ commit }) {
      commit("resetModuleState");
    },
  },
};
