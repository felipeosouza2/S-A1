import { v4 } from "uuid"
import { db } from "../database/connection.js"

export async function getAllCad() {
    const [equipamentos] = await db.query("SELECT * FROM equipamentos" )

    return equipamentos
}

export async function getCadById(id) {
    const [ equipamentos ] = await db.query("SELECT * FROM equipamentos WHERE id = ?", [id])

    return equipamentos[0]

}

export async function postEquipamentos(body) {
    const { nome, categoria, numero_de_serie, status, data_aquisicao } = body

    const id = v4()

    await db.query(`INSERT INTO equipamentos(id, nome, categoria, numero_de_serie, status, data_aquisicao) VALUES (?, ?, ?, ?, ?, ?)`,
        [id, nome, categoria, numero_de_serie, status, data_aquisicao]
    )

    return {
        id,
        nome,
        categoria,
        numero_de_serie,
        status,
        data_aquisicao
    }    
}
export async function deleteCadService(id) {
    await db.query("DELETE FROM equipamentos WHERE id = ?", [id])
    
    return "Equipamento Deleted"
}

