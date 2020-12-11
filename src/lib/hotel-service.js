import axios from "axios";


// THIS IS AN EXAMPLE THAT YOU CAN USE 
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS
class HotelService {
  constructor() {
    this.api = axios.create({        
      baseURL: "http://localhost:5000/api",
      withCredentials: true
    });
  }

  getAll = () => {
    const pr = this.api
      .get('/hotels')
      .then((response) => response.data)
      .catch(err => console.log(err))

    return pr;
  }

  getOne = (id) => {
    const pr = this.api
      .get(`/hotels/${id}`, id)
      .then((response) => response.data)
      .catch(err => err.response.data.message)

    return pr;
  }

}

const hotelService = new HotelService();

export default hotelService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.