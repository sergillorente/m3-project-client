import axios from "axios";

class ReviewService {
    constructor() {
      this.api = axios.create({
        baseURL: process.env.REACT_APP_API_URL + '/api',
        withCredentials: true
      });
    }


    getAll = (hotelId) => {
        const pr = this.api.get(`/reviews/${hotelId}`)
        .then((response) => response.data)

        return pr;
    }

    createOne = (hotelId, updates) => {
        const pr = this.api.post(`/reviews/${hotelId}`, updates)
        .then((response) => response.data)

        return pr;

    }

    deleteOne = (reviewId) => {
        const pr = this.api.delete(`/reviews/${reviewId}`)
            .then((response) => response.data)
    
        return pr;
      }
}

const reviewService = new ReviewService();

export default reviewService;