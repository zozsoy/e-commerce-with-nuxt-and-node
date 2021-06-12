import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";

export const state = () => ({
    name: null,
    email: null
});

export const actions = {
    nuxtServerInit({commit}, {req}) {
        if (process.server && process.static) return;
        if (!req.headers.cookie) return;

        // cookie var mı
        const parsedCookie = cookieparser.parse(req.headers.cookie);
        const parsedToken = parsedCookie.access_token;

        if (!parsedToken) return;

        const decoded = JWTDecode(parsedToken);

        if (decoded) {
            commit("setUser", {
                name: decoded.name,
                email: decoded.email
            });
        }
    }
}

export const mutations = {
    setUser(state, userData) {
        state.name = userData.name;
        state.email = userData.email;
    },
    removeUser(state) {
        state.name = null;
        state.email = null;
    }
}