import axios from "axios";

class UserService {
    constructor() {
        this.auth = axios.create({
            baseURL: "http://localhost:5000/user",
            withCredentials: true
        });
    }

    addNewContent = () => {
        const pr = this.api.post('/profile')
            .then((response) => response.data)
            
        return pr;
    }

    getUserProfile = (id) => {
        const pr = this.api.get(`/profile/${id}`)
            .then((response) => response.data)

        return pr;
    }

    updateProfile = (id) => {
        const pr = this.api.put('/profile/${id}')
            .then((response) => response.data)

        return pr;
    }


}

const userService = new UserService();

export default userService;