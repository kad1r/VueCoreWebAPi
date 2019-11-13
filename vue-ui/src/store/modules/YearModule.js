const initialState = () => {
    return {
        year: new Date().getFullYear()
    };
};

export const year = {
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
            commit("setNewYear", year);
            this.dispatch("productlist/load", year);
        }
    }
};
