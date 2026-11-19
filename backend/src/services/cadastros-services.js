import { v4 } from "uuid"
import { db } from "../database/connection.js"


// //
// const limit = 10;
// const page = Math.max(1, Number(request.query.page) || 1 );
// //

// //
// export async function getAllCad() {
//     const [equipamentos] = await db.query("SELECT * FROM equipamentos" )

//     return equipamentos
// }
// //

    

export async function getAllCad(page, limit) {
    page = Math.max(1, Number(page) || 1);
    limit = Math.max(1, Number(limit) || 10);

    const offset = (page - 1) * limit;

    const [equipamentos] = await db.query("SELECT * FROM equipamentos LIMIT ? OFFSET ?", [limit, offset])

    return equipamentos;
}

export async function getCadById(id) {
    const [equipamentos] = await db.query("SELECT * FROM equipamentos WHERE id = ?", [id])

    return equipamentos[0]

}

// // Busca somente os 10 equipamentos da página
// const [equipamentos] = await db.query("SELECT * FROM equipamentos LIMIT ? OFFSET ?", [limit=10, offset]);
// //


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

