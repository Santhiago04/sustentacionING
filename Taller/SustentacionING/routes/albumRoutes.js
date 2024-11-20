import { Router } from "express";
import { crearDatos, obtenerDatos } from "../controller/albumController.js";
const router = Router()

router.get('/albums', obtenerDatos)
router.post('/albums', crearDatos)


export default router;
