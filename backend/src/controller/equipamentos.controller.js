import { deleteCadService, getAllCad, getCadById } from "../services/cadastros-services.js"


export async function listAllCad (request, response){
    const equipamentos = await getAllCad()
   
    return response.code(200).send(equipamentos)
}

export async function listCadById(request, response){

    const equipamento = await getCadById(request.params.id)

    if (!equipamento) {
        response.code(404).send({ message: "User not found!"})

    }
    
    response.code(200).send(equipamento)
}

export async function deleteCad(request, response){

    const message = await deleteCadService(request.params.id)

    response.code(202).send({ message: message })
 
}
