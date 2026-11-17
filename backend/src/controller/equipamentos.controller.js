import { deleteCadService, getAllCad, getCadById, postEquipamentos as postEquipamentosService } from "../services/cadastros-services.js"


export async function listAllCad (request, response){
    const equipamentos = await getAllCad()
   
    return response.code(200).send(equipamentos)
}

export async function listCadById(request, response){

    const equipamentos = await getCadById(request.params.id)

    if (!equipamentos) {
        response.code(404).send({ message: "User not found!"})

    }
    
    response.code(200).send(equipamentos)
}

export async function deleteCad(request, response){

    const message = await deleteCadService(request.params.id)

    response.code(202).send({ message: message })
 
}


export async function postEquipamentos(request, response) {
    const newEquipamentos = await postEquipamentosService(request.body)

    return response.code(201).send(newEquipamentos)
}
