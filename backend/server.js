import express from "express";
import cors from "cors";
import { getUsers, getUser, getAllCollections, getCollection, getItem, getItems, deleteCollection, deleteItem, editCollection, editItem, createCollection, createItem } from './database.js';

const app = express();

app.use(express.json())

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users).send("Users received")
})

app.get("/user/:id", async (req,res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
})

app.post("/users", async (req, res) => {
    const {username, password, user_type, salt} = req.body
    const user = await createUser(username, password, user_type, salt)
    res.status(201).send(user)
})

app.get("/collections/:id", async (req,res) => {
    const id = req.params.id
    const collections = await getAllCollections(id)
    res.send(collections)
})

app.get("/collection/:id", async (req,res) => {
    const id = req.params.id
    const collection = await getCollection(id)
    res.send(collection)
})

app.post("/collection/:id", async (req, res) => {
    const {id, name} = req.body
    const collection = await createCollection(id, name)
    res.status(201).send(collection)
})

app.post("/editcollection/:id", async (req, res) => {
    const {id,name} = req.body
    const collection = await editCollection(id,name)
    res.status(201).send(collection)
})

app.post("/deletecollection/:id", async (req, res) => {
    const {id} = req.body
    const collection = await deleteCollection(id)
    res.status(201).send(collection)
})

app.get("/items/:id", async (req,res) => {
    const id = req.params.id
    const items = await getItems(id)
    res.send(items)
})

app.get("/item/:id", async (req,res) => {
    const id = req.params.id
    const item = await getItem(id)
    res.send(item)
})

app.post("/createitem", async (req, res) => {
    const {collection_id,title,description,image} = req.body
    const item = await createItem(collection_id,title,description,image)
    res.status(201).send(item)
})

app.post("/edititem", async (req, res) => {
    const {id,title,description} = req.body
    const item = await editItem(id,title,description)
    res.status(201).send(item)
})

app.post("/deleteitem/:id", async (req, res) => {
    const id = req.params.id
    const item = await deleteItem(id)
    res.status(201).send(item)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Error Encountered")
})

app.listen(8080, () => {
    console.log("Server is running on 8080")
})