import { v4 } from 'uuid'
import { deleteCad, listAllCad, listCadById, postEquipamentos } from '../controller/equipamentos.controller.js'

export async function cadRoutes(app) {
    // listar todos equipamentos
    app.get('/', listAllCad)
    // listar um equipamentos
    app.get('/:id', listCadById)
    // Deletar um equipamentos
    app.delete('/:id', deleteCad)
    // Cadastrar um equipamentos
    app.post('/', postEquipamentos)
    
    

}
