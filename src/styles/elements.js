import styled from 'styled-components'

export const StyledPresentationButton = styled.button`
    margin-bottom: 127px;
    margin-top: 58px;
    margin-left: 106px;
    witdh: 200px;
    height: 50px;
    border: none;
    color: black;
    background-color: #8bc34a;
    border-radius: 11px;
    box-shadow: inset 0 0 0 0 #5a9216;
    transition: ease-out 0.3s;
    font-size: 22px;
    outline: none;
    &:hover {
        box-shadow: inset 200px 0 0 0 #5a9216;
        cursor: pointer;
        color: white; 
    }
`
export const TextPresentation = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 19px;
    text-align: center;
    color: black;
    border: 1px solid black;
    { /* margin: 0 195px 0 30px; */}
`

export const AsideText = styled.p`  
    font-size: 19px;
    text-align: center;
    color: black;
`

export const IconDesign = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 139%;
    text-align: center;
    background-color: rgb(138, 137, 136);
    color: black;
    font-size: 14px;
`
