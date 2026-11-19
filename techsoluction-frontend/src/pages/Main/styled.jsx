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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    
    h2 {
        color: #1e3a8a;
        font-size: 23px;
        margin-bottom: 25px;
        text-align: center;
    }

    form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
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

     input {
        width: 100%;
        padding: 13px;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        box-sizing: border-box;
        transition: 0.3s;
    }   
`
export const ListaSelecion = styled.div`
    width: 100%;
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    
    td {
        padding: 14px;
        border-bottom: 1px solid #e2e8f0;
        color: #334155;
        font-size: 14px;
    }
    

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

export const ButtonsContainer = styled.div`
    width: 100%;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 25px;

    button {
        padding: 12px 25px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
    }
}
`