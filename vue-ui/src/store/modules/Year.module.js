export const year = {
    state: {
        year: 2019
    },
    getters: {
        getSelectedYear(s) {
            return s.state.year;
        }
    },
    mutations: {
        setNewYear(state, year) {
            state.year = year;
        }
    },
    actions: {
        updateSelectedYear({ commit }, year) {
            commit("setNewYear", year);
        }
    }
};
