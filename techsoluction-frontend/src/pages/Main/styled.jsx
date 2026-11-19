import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color:#f1f5f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: #1e3a8a;
        font-size: 32px;
        fonte-weight: bold;
        margin-bottom: 30px;
        text-align: center;}
`

export const RegistroSection = styled.div`
    width: 100%;
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 35px;
    box-sizing: border-box;
    
    h2 {
        color: #1e3a8a;
        font-size: 23px;
        margin-bottom: 25px;
        text-align: center;
    }
        button {
            padding: 14px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
`
export const ListaSelecion = styled.div`
    width: 100%;
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;

    h2 {
        color: #1e3a8a;
        font-size: 23px;
        margin-bottom: 25px;
        text-align: center;

    }

    button {
        padding: 9px 13px;
        background: #dc2626;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
}
`