import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    nombre: String,
    artista: String,
    año: String
})

export const albumModel = new mongoose.model('Albums', userSchema)