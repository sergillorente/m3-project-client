# OH! Review



## Description

The purpose of this app is to have a place where to be able to choose your best hotel option.:hotel:

In order to do that we have a reviews system rating the hotels from 1 being the minimum value to 5 being the maximum. Also, you will be able to filter the hotels by its category and its location.



### User stories

- **Presentation Page:** As a user when I access the Homepage, I will have a brief introduction of what the app is about with some explanatory text and a button to get you where the action begins. :call_me_hand:

- **Hotels Page (not logged in)**: As a user, I would see how pretty this page is and whenever I want to have some kind of interaction I will be redirected to the Alert Page. :warning:

- **Alert Page:** As I user, I will not have another choice but to sign up or login in order to continue the navigation and to enjoy the fully experience of this app and its functionality.:smiley:

- **Sign Up:** As a user, I would like to register to know further information about this app.:registered:

- **Log in:** As a user, I will have access to my personal account in the login page. :family:

- **Log out: ** As a user, I will exit from my account with assurance that nobody can access but me. :closed_lock_with_key:

- **Hotels Page (logged in):** As I user, I will finally see a bunch of hotels that I can filter by name and location and further functionalities that will allow me to share my opinion.:open_book:

- **Hotels Details:** As a user, once I have choosed to investigate in a hotel, a list will be displayed with its features and current reviews from another users.:detective:

- **Profile Page:** As a user, in here I will have the possibility to check my personal details once I have logged in. As well as: :customs:

  - I can also edit my personal data.

  - And updated it whenever I want!

  - And if, I feel like a need to remove something, I will also be able to do so.

    

### Backlog

- Make the app responsive for more than a single mobile device.

- Add a map in the Hotels List Page where you can see a map of Barcelona with all the hotels which the DataBase includes.

- Add more cities to this filter.

- Add more hotel categories.

- Create a FAQ page.

- Create a second fully CRUD in the Hotels Details Page.

- Create a User-Hotel page where users and hoteliers can interact among them and stay in contact.

  

## Client / Frontend 

### React Router Routes (React App)

|          **Path**          |    Component     |                       Permission                        |                          Behaviour                           |
| :------------------------: | :--------------: | :-----------------------------------------------------: | :----------------------------------------------------------: |
|            `/`             | PresentationPage |                    public `<Route>`                     |                         Splash page                          |
|         `/hotels`          |    HotelsPage    | Anon only `<AnonRoute`<br /> user only `<PrivateRoute>` | Brief introduction where you can see actual hotels. <br />When private there is a button to add a review and you can filter by name and category |
|         `/signup`          |    SignupPage    |                 anon only `<AnonRoute>`                 | Signup form, link to login. It will give access to the user to access to the Hotels List page |
|          `/login`          |    LoginPage     |                 anon only `<AnonRoute>`                 | Login form, link to signup. It will give access to the user to access to the Hotels List page |
|    `/hoteldetails/:id`     | HotelDetailsPage |               user only `<PrivateRoute>`                | Shows the hotel you have chosen and display its features and  reviews associated |
|  `/hoteldetails/add/:id`   | HotelDetailsPage |               user only `<PrivateRoute>`                |                         Add a review                         |
| `/hoteldetails/delete/:id` | HotelDetailsPage |               user only `<PrivateRoute>`                |                  Delete the selected review                  |
|     `/profile/add/:id`     |   ProfilePage    |               user only `<PrivateRoute>`                |     Add and update the username and the profile picture      |
|   `/profile/delete/:id`    |   ProfilePage    |               user only `<PrivateRoute>`                |        Delete the current username or profile picture        |



### Components

- PresentationPage
- HotelsPage
- SignupPage
- LoginPage
- HotelDetailsPage
- ProfilePage



### Services

- Auth Service
  - auth.signup(user)
  - auth.login(user)
  - auth.logout()
  - auth.me()
- Hotel Service
  - hotels.list()
  - hotel.detail(id)
- Review Service
  - review.list(hotelId)
  - review.add(review)
  - review.delete(review)



## Server / Backend

### Models

**User:**

```javascript
{
	username:{ type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: {type: String, required: true, unique: true },
	picture: String
}
```



**Hotel:**

```javascript
{
        image: String,
        title: String,
        description: String,
        district: {type: String, enum:['Ciutat Vella', 'Eixample', 'Sants-Montjuïc', 'Les 						Corts', 'Sarrià-Sant Gervasi', 'Gràcia', 'Horta-Guinardó', 'Nou Barris', 'Sant 								Martí']},
        category: Number
    }
```



**Review:**

```javascript
{
	text: String,
	rating: {
		type: String,
		enum: ['1', '2', '3', '4', '5'],
	},
	hotelId: {
	type: mongoose.SchemaTypes.ObjectId, ref: "Hotel"
  	},
	userId: {
	type: mongoose.SchemaTypes.ObjectId, ref: "User" 
  	},
  timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
  },
}
```



## Endpoints (backend routes)

| **HTTP Method** |            **URL**             |                 **Request Body**                 | **Success Status** | **Error Status** |                       **Description**                        |
| :-------------: | :----------------------------: | :----------------------------------------------: | :----------------: | :--------------: | :----------------------------------------------------------: |
|      POST       |         `/auth/signup`         |           {username, email, password}            |        201         |       500        |           Sign up auth route to create a new user            |
|      POST       |         `/auth/login`          |                {email, password}                 |        200         |       500        |           Log in route to log in the existing user           |
|       GET       |         `/auth/logout`         |                       N/A                        |        204         |       500        |                      Logs out the user                       |
|       GET       |           `/auth/me`           |                       N/A                        |        200         |       500        | Return user data from session storage, for React Frontend authentication |
|       GET       |        `/user/profile`         |       {username, emial, password, picture}       |        200         |       404        |        Shows the Profile Page and therefore the form         |
|       PUT       |      `/user/profile/:id`       |   {username, email, password, profilePicture}    |        200         |       404        | Updates the form and the inputs; username and profile picture input |
|       GET       |         `/api/hotels`          |      {image, title, description,  category}      |        200         |       400        | Shows the hotels and its features when the user is logged in |
|       GET       |        `api/hotels/:id`        | {image, title, description,  district, category} |        200         |       400        |                   Shows an specific hotel                    |
|       GET       |     `api/reviews/:hotelId`     |                       {id}                       |                    |       400        |   Shows the current reviews attached to an specific hotel    |
|       GET       | `api/reviews/:hotelId/:userId` |                       {id}                       |                    |       400        | Shows the reviews made into an specific hotel and appears a delete button for those reviews done by the user who has made them |
|      POST       |         `api/reviews`          |                       {id}                       |                    |       400        |          Display the option to create a new reviews          |
|     DELETE      |       `api/reviews/:id`        |                       {id}                       |                    |       400        | You can delete the specific you are selecting if it has been written by you |



### Links

#### Trello

 [My trello](https://trello.com/b/8dnHwyGc/m3-project-oh-review)

#### Git

[Client repository Link](https://github.com/sergillorente/m3-project-client )

[Server Repository Link](https://github.com/sergillorente/m3-project-server )

[Deployed App Link]( https://oh-review-m3.herokuapp.com/ )



#### Slides

[My Slides](https://docs.google.com/presentation/d/1iwXeTq9N-NAZmR5hDY-9xjaOiOW5g6bAIJkLvTMYWmU/edit#slide=id.p )