// aca vamos a importar las rutas de los empleados
import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM employee")
    res.json(rows)
}

export const getEmployee = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [req.params])

  if (rows.length <= 0) return res.status(404).json({
    message: "Employee not found" 
  })
    
  res.json(rows[0])
}
  
export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query("INSERT INTO employee (name,salary) VALUES (?, ?)",[name, salary])
  res.send({
    id: rows.insertId,
    name,
    salary
  })
}

export const deleteEmployee = async (req, res) => {
  const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [req.params.id])
 
  if (result.affectedRows <= 0) return res.status(404).json({
    message: "Employee not found" 
  })
  
  res.sendStatus(204)
}

export const updateEmployee = (req, res) => {
  const {id} = req.params
  const {name, salary} = req.body
  console.log(id, name, salary)
  res.json('received')

}