import { v4 } from "uuid"
import { db } from "../database/connection.js"

export async function getAllCad() {
    const [equipamentos] = await db.query("SELECT * FROM equipamentos" )

    return equipamentos
}

export async function getCadById() {
    const [ equipamento ] = await db.query("SELECT * FROM equipamentos WHERE id = ?", [id])

    return equipamento[0]

}

export async function postCadastros(body) {
    const { nome, categoria, serie, status, data } = body

    const equipamento = await db.query(`INSERT INTO equipamentos(nome, categoria, serie, status, data) VALUES (?, ?, ?, ?, ?)`,
        [nome, categoria, serie, status, data]
    )

    return equipamento
    
}
export async function deleteCadService(id) {
    await db.query("DELETED FROM equipamentos WHERE id = ?")
    
    return "Equipamento Deleted"
}
export async function putCadService(id, body) {
    const { nome, categoria, serie, status, data } = body

    await db.query(
        `UPDATE equipamentos
        SET nome = ?, categoria = ?, serie = ?, status = ?, data =?
        WHERE id = ?`,
        [nome, categoria, serie, status, data, id]
    )

    return "Equipamentos updated"
    
}
