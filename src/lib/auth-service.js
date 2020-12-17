import axios from "axios";

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL + '/auth',
      withCredentials: true
    });
  }

  signup( username, email, password ) {
    const pr = this.auth.post("/signup", { username, email, password })
      .then((response) => response.data)
      
      return pr;
    }
    
    login( email, password ) {
      const pr = this.auth.post("/login", { email, password })
      .then((response) => response.data)
      
      return pr;
    }
    
    logout() {
      const pr = this.auth.get("/logout")
      .then((response) => response.data)
      
      return pr;
    }
    
    me() {
      const pr = this.auth.get("/me")
      .then((response) => response.data)

    return pr;
  }
}


const authService = new AuthService();

export default authService;
