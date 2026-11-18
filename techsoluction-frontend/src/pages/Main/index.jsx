import { useEffect, useState } from "react"
import axios from "axios"
import { ListaSelecion, MainContainer, RegistroSection } from "./styled"
 
//  export function newPage() {
//         const [equipamentos, setEquipamentos] = useState([]);
//         const [paginaAtual, setPaginaAtual] = useState(1);

//         const [itensPorPagina] = useState(10);

//         function nextPage() {
//             setPaginaAtual(paginaAtual+1)

//             buscarPerifericos()
//         }
        
//         function prevPage(){
//             if(itensPorPagina === 10){
//                 if(itensPorPagina === 10){
//                     setPaginaAtual(1)
//                 } else {
//                     setPaginaAtual(itensPorPagina-1)
//                 }
                
//                 buscarPerifericos()
//         }


//     }

    

export function Main() {
    const [equipamentos, setEquipamentos] = useState([])
    const [formData, setFormData] = useState({
        nome: '',
        categoria: '',
        numero_de_serie: '',
        status: '',
        data_aquisicao: '',

    })



    const fetchEquipamentos = async () => {
        const response = await axios.get(`http://127.0.0.1:3000/equipamentos`)
        setEquipamentos(response.data)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('enviado')
        const response = await axios.post ('http://127.0.0.1:3000/equipamentos', formData)

        setEquipamentos([...equipamentos, formData])
        console.log(response)

    }
    const deleteEquipamentos = async (id) => {
        const response = await axios.delete  (`http://127.0.0.1:3000/equipamentos/${id}`)

        setEquipamentos([...equipamentos, formData])
        console.log(response)
        alert('Produto excluido')
    }
    
    useEffect(() => {
        fetchEquipamentos();

    }, [equipamentos])

    return (
        <MainContainer>
            <h1>Sistema Techsoluction</h1>
            <RegistroSection>
                <h2>Cadastro de Equipamentos</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome do equipamento"
                        value={formData.nome}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="categoria"
                        placeholder="Categoria do equipamento"
                        value={formData.categoria}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="numero_de_serie"
                        placeholder="Entrada do numero de serie"
                        value={formData.numero_de_serie}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="status"
                        placeholder="Status do equipamento"
                        value={formData.status}
                        onChange={handleInputChange}
                    />
                    <input
                        type="date"
                        name="data_aquisicao"
                        placeholder="Data do Equipamento"
                        value={formData.data_aquisicao}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Cadastrar equipamentos</button>
                    </form>
            </RegistroSection>
            <ListaSelecion>
                <h2>Lista de Equipamentos</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do equipamento</th>
                                <th>Categoria</th>
                                <th>Numero de serie</th>
                                <th>Status</th>
                                <th>Data de aquisição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                equipamentos.map((equipamentos) => (
                                    <tr key={equipamentos.id}>
                                        <td>{equipamentos.nome}</td>
                                        <td>{equipamentos.categoria}</td>
                                        <td>{equipamentos.numero_de_serie}</td>
                                        <td>{equipamentos.status}</td>
                                        <td>{equipamentos.data_aquisicao}</td>
                                            <td><button onClick={() => deleteEquipamentos(equipamentos.id)}>Excluir equipamento</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </ListaSelecion>
            {/* //
            <ButtonsContainer>
                <button onClick={() => setPaginaAtual(paginaAtual -1)} disabled={paginaAtual === 1}>Anterior</button>
                <button onClick={prevPage}>Anterior</button>

            </ButtonsContainer>
            // */}
        </MainContainer>
    )
};

