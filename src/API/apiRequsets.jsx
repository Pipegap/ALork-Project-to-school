import axios from "axios";
const APIKey = '47e6bef3-3e58-4548-ac92-37ce2d055703';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : APIKey,
    }
})



export const usersAPI = {
    setUsers(pageCount, selectedPage) {
        return instance.get( `users?count=${pageCount}&page=${selectedPage}`).then(response => {
            return response.data;
        });
    },
};

export const authAPI = {
    authUser () {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    },
};

export const profileAPI = {
    setOtherUsersInfo (userId) {
        return instance.get(`profile/${(!userId) ? 2 : userId}`).then(response => {
            return response.data;
        });
    },
    setUserInfo () {
        return instance.get(`profile/2`).then(response => {
            return response.data;
        });
    },
};

export const subscriberAPI = {
    async toggleSubscriber (id, value) {
        if (!value) {
            return await instance.post(`follow/${id}`).then(response => {
                return response.data;
            });
        } else {
            return await instance.delete(`follow/${id}`).then(response => {
                return response.data;
            });
        }
    }
}