import axios from "axios";

class UserService {
    constructor() {
        this.user = axios.create({
            baseURL: "http://localhost:5000/user",
            withCredentials: true
        });
    }

    addNewContent = () => {
        const pr = this.user.post('/profile')
            .then((response) => response.data)
            
        return pr;
    }

    getUserProfile = (id) => {
        const pr = this.user.get(`/profile/${id}`)
            .then((response) => response.data)

        return pr;
    }

    updateProfile = (updates) => {
        const pr = this.user.put('/profile/', updates)
            .then((response) => response.data)

        return pr;
    }


}

const userService = new UserService();

export default userService;