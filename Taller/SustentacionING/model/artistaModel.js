import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    nombre: String,
    genero: String,
    pais: String
})

export const artistaModel = new mongoose.model('Artistas', userSchema)