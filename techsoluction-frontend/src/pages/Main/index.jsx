import { useEffect, useState } from "react"
import axios from "axios"
import { MainContainer } from "./styled"

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
        const response = await axios.get('http://127.0.0.1:3003/equipamentos')
        setEquipamentos(response.data)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('enviado')
        const response = await axios.post ('http://127.0.0.1:3003/equipamentos', formData)

        setEquipamentos((prev) => [...equipamentos, formData])
        console.log(response)

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
                        type="text"
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
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </ListaSelecion>
        </MainContainer>
    )
};

