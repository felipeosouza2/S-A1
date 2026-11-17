import { useState } from "react"
import { MainContainer } from "./styled"

export function Main() {
    const [equipamentos, setEquipamentos] = useState([])
    const [formData, setformData] = useState({
        nome: '',
        categoria: '',
        numero_de_serie: '',
        status: '',
        data_aquisicao: '',

    })

    const fecthEquipamentos = async () => {
        const response = await axios.get('http://127.0.0.1:3003/equipamentos')
        setEquipamentos(response.data)
    }

    return (
        <MainContainer>
            <h1>Sistema Techsoluction</h1>
        </MainContainer>
    )
};

