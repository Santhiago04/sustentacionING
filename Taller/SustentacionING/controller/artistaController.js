import { artistaModel } from "../model/artistaModel.js";

export const obtenerDatos = async (peticion, respuesta) => {
    try {
        let usuarios = await artistaModel.find()
        respuesta.status(200).render("index", { usuarios })
    } catch (error) {
        console.log(error);
    }
}
export const crearDatos = async (peticion, respuesta) => {
    try {
        let data = peticion.body
        await artistaModel.create(data)
        let usuarios = await artistaModel.find()
        respuesta.status(200).render("index", {usuarios})
    } catch (error) {
        console.log(error);
    }
}