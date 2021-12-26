# Show User Details 


## The Goal 

The purpose of this challenge is to implement a feature into an existing codebase.  
In this case the feature is displaying user data in a card format as shown [here](https://reverent-euler-fd445c.netlify.app/).
The existing codebase here is small as the main goal is to focus on fetching and using the data from the API.  

We want to see a card for each user displaying their name, age, location and username.  
There should also be a button at the bottom of each card that when clicked displays their contact information (email, phone number and address). 


## Getting Started

Clone the repository: 

```git clone git@github.com:glenntippett/show-user-details-challenge.git ```

Install dependencies: 

```npm install``` 

Run the app: 

```npm run start```

You should see the basic page at:  
[localhost:3000](http://localhost:3000/)  


## Dependencies  

In a new job you will need to become familiar with the packages and tools that the company uses.  

### React Bootstrap
For this challenge you must use the [React Bootstrap](https://react-bootstrap.github.io/) and regular [Bootstrap](https://getbootstrap.com/) libraries.

### The API
You will be calling the user data from the [Random User Generator API](https://randomuser.me/documentation).  
Let's keep our API call separate from the component logic.  
Make your call to the API within ```src/services/retrieveUserInfo.js```  
This should then be called from ```src/components/UserInfo.js```  

### Design 
We're not focusing on the design in this challenge, so standard Bootstrap components are fine.  
But at a minimum it should be responsive.  
Cards should stack on top of each other on mobile screens and be centered in the screen.  
On desktop the cards should line up next to each other.  
