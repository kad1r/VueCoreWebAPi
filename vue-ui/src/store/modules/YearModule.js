const initialState = () => {
    return {
        year: new Date().getFullYear()
    };
};

export const year = {
    namespaced: true,
    state: initialState(),
    getters: {
        getSelectedYear(s) {
            return s.state.year;
        }
    },
    mutations: {
        reset(state) {
            const newState = initialState();

            Object.keys(newState).forEach(key => {
                state[key] = newState[key]
            });
        },
        setNewYear(state, year) {
            state.year = year;
        }
    },
    actions: {
        reset({ commit }) {
            commit("reset");
        },
        updateSelectedYear({ commit }, year) {
            debugger;
            commit("setNewYear", year);
            this.dispatch("productlist/load", year);
        }
    }
};
