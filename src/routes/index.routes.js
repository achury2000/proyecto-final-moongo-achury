// aca vamos a importar las rutas de la aplicacion
import { Router } from "express";
import { index, ping } from "../controllers/index.rotes.js";

const router = Router();

router.get("/", index);

router.get("/ping", ping);

export default router;
