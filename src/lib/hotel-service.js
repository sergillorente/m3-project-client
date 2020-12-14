import axios from "axios";


// THIS IS AN EXAMPLE THAT YOU CAN USE 
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS
class HotelService {
  constructor() {
    this.api = axios.create({        
      baseURL: process.env.REACT_APP_API_URL + '/api',
      withCredentials: true
    });
  }

  getAll = () => {
    const pr = this.api.get('/hotels')
      .then((response) => response.data)

    return pr;
  }

  getOneHotel = (id) => {
    const pr = this.api.get(`/hotels/${id}`)
      .then((response) => response.data)

    return pr;
  }

}

const hotelService = new HotelService();

export default hotelService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.