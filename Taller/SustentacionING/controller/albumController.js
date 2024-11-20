import { albumModel } from "../model/albumModel.js";

export const obtenerDatos = async (peticion, respuesta) => {
    try {
        let usuarios = await albumModel.find()
        respuesta.status(200).render("index", { usuarios })
    } catch (error) {
        console.log(error);
    }
}
export const crearDatos = async (peticion, respuesta) => {
    try {
        let data = peticion.body
        await albumModel.create(data)
        let usuarios = await albumModel.find()
        respuesta.status(200).render("index", {usuarios})
    } catch (error) {
        console.log(error);
    }
}