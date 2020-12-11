import axios from "axios";

class UserService {
    constructor() {
      this.auth = axios.create({
        baseURL: "http://localhost:5000/user",
        withCredentials: true
      });
    }

    updateOne = (update) => {
        const pr = this.api
            .post('/profile', update)
            .then((response) => response.data)
            .catch(err => err.response.data.message)

        return pr;
    }

    getOne = () => {
        const pr = this.api
            .get(`/profile/${id}`)
            .then((response) => response.data)
            .catch(err => err.response.data.message)
    
        return pr;
      }

    updateOne = () => {
        const pr = this.api
            .put('/profile/${id}')
            .then((response) => response.data)
            .catch(err => err.response.data.message)

        return pr;
    }
    
      
}

const userService = new UserService();

export default userService;