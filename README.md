# MyCollect
A simple Full stack CRUD Application using React as the frontend, coded in Typescript, using a MySQL database connected with Node.js and Express.js. Simple program for me to learn to apply full stack technologies into one project.

## Running the program
First you have to run the backend in a seperate terminal, so navigate to the backend with  
```
cd backend
npm run dev
```
Then you can get out of this folder and run it concurrently with the frontend service, make sure to open a new terminal
```
cd ../
npm run dev
```
This will have the backend services available as you use the frontend.

## Database Design

The database design is as follows:

User
- user_id
- username
- password
- user_type

Collection
- collection_id
- user_id FOREIGN KEY for USER
- collection_name

Item
- item_id
- collection_id FOREIGN KEY for COLLECTION
- item_name
- item_desc
- item_image

The API has the following endpoints:

For the Users
- /users : gets all Users in databse
- /user/:id : get a user by their ID
- /user : save a user id, username and password
- /users : create a user with a username, password and user_type
- /deleteuser/:id : delete a user by ID

For the Collection
- /collection/:id : get a collection by its ID
- /editcollection : edit a collections name
- /delete collection :"deleta collection by its ID
- /item/:id : get an item by its ID
- /createitem : create an item using collection_id, title, description
- /edititem : edit an items title and description
- /deleteitem : delete an item by its ID

## App Preview
<img width="1272" height="1258" alt="image" src="https://github.com/user-attachments/assets/bd432a66-9b7d-498c-967a-099581e7ee1d" />
<img width="1275" height="805" alt="image" src="https://github.com/user-attachments/assets/ae427fc9-61ee-4697-b0c8-a36eeb3bc8c7" />
<img width="1274" height="791" alt="image" src="https://github.com/user-attachments/assets/702424cd-946b-42bb-8236-fd2536d0356c" />

## Future Features
- Image Upload
- EAN Scanning for easier collecting


