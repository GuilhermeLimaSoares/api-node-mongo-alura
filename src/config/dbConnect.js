import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guilhermelimasoares9:Aprendiz16@alura.szjicn4.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;