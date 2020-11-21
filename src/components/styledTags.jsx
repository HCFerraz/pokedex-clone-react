import styled from 'styled-components'

const Title = styled.div`
    margin: 1em auto;
    padding: 0.2em 0.1em;
    width: 135px;
    
    text-align: center;
    font-size: ${props => props.setMinFont || "1em"};
    
    color: rgb(228, 228, 220);
    background-color: #2980b9;
    
    border: 0.1em solid #2980b9;
    border-radius: 1em;
`
const TitleFont = styled(Title)`
    font-size: 10pt;
    padding: 0.5em
`
const Description = styled.span`
    color: rgb(228, 228, 220);
    display: flex;
    justify-content: center;
    text-align: center;
    font-style: italic;
    flex-wrap: wrap
`

export {
    Title,
    TitleFont,
    Description
}