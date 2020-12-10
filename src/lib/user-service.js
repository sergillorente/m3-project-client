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
            .then((response) => response.data);

        return pr;
    }

    getOne = () => {
        const pr = this.api
            .get(`/profile/${id}`)
            .then((response) => response.data);
    
        return pr;
      }

    updateOne = (id) => {
        const pr = this.api
            .put('/profile/${id}', id)
            .then((response) => response.data);

        return pr;
    }
    
      
}

const userService = new UserService();

export default UserService;