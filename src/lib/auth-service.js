import axios from "axios";

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000/auth",
      withCredentials: true
    });
  }

  signup( username, email, password ) {
    const pr = this.auth
      .post("/signup", { username, email, password })
      .then((response) => response.data)
      .catch(err => err.response.data.message)

    return pr;
  }

  login( email, password ) {
    const pr = this.auth
      .post("/login", { email, password })
      .then((response) => response.data)
      .catch(err => err.response.data.message)
      
    return pr;
  }

  logout() {
    const pr = this.auth
      .get("/logout")
      .then((response) => response.data)
      .catch(err => err.response.data.message)

    return pr;
  }

  me() {
    const pr = this.auth
      .get("/me")
      .then((response) => response.data)
      .catch(err => err.response.data.message)

    return pr;
  }
}


const authService = new AuthService();

export default authService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
