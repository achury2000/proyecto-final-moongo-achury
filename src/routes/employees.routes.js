// aca vamos a importar las rutas de los empleados
import { Router } from "express";
import {getEmployee,createEmployee,updateEmployee,
deleteEmployee,getEmployees,} from "../controllers/employees.controller.js"

const router = Router();
// GET all Employees
router.get("/employees", getEmployees);
// GET An Employee
router.get("/employees/:id", getEmployee);
// INSERT An Employee
router.post("/employees", createEmployee);
// UPDATE An Employee
router.put("/employees/:id", updateEmployee);
// DELETE An Employee
router.delete("/employees/:id", deleteEmployee);

export default router;