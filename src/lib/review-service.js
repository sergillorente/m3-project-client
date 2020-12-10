import axios from "axios";

class ReviewService {
    constructor() {
      this.auth = axios.create({
        baseURL: "http://localhost:5000/api",
        withCredentials: true
      });
    }

    getOne = (hotelId) => {
        const pr = this.api
            .get(`/review/${id}`, { hotelId} )
            .then((response) => response.data);
    
        return pr;
    }

    getOne = (hotelId, userId) => {
        const pr = this.api
            .get('/review/${id}/${id}', hotelId, userId)
            .then((response) => response.data);

        return pr;
    }

    updateOne = (reviewId) => {
        const pr = this.api
            .post('/review/${id}', reviewId)
            .then((response) => response.data);

        return pr;

    }

    deleteOne = (id) => {
        const pr = this.api
            .delete(`/review/${id}` )
            .then((response) => response.data);
    
        return pr;
      }
}

const ReviewService = new ReviewService();

export default ReviewService;