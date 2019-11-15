const initialState = () => {
  return {
    selectedRows: [],
    selectedSubRows: [],
    searchArr: [],
    sortArr: [],
    selected: 0,
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
