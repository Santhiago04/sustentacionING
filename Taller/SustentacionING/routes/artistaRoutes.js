import { Router } from "express";
import { crearDatos, obtenerDatos } from "../controller/artistaController.js";
const router = Router()

router.get('/artista', obtenerDatos)
router.post('/artista', crearDatos)


export default router;
