import axios from "axios";


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

