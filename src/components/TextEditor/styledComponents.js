import styled from 'styled-components'
export const MainContainer = styled.div`
background-color:#25262c;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`

export const SubContainer = styled.div`
width:80%;
background-color:#1b1c22;
height:80vh;
display:flex;
`
export const TextContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
width:40%
`

export const Heading = styled.h1`
color:#ffffff;
text-align:center;

`

export const Image = styled.img`
width:350px;
height:400px;
margin-top:100px;
margin-bottom:100px;
`

export const TextStyledContainer = styled.div`
width:60%;
background-color:#25262c;
margin:20px
`

export const UnOrderList = styled.ul`
display: flex;
list-style-type: none;
`

export const ListItem = styled.li``

export const Button = styled.button`
outline:none;
border:none;
background-color:transparent;
color: ${props => props.color}
`
export const HrLine = styled.hr``

export const TextArea = styled.textarea`
outline:none;
border:none;
background-color:transparent;
padding:20px;
color:#f8fafc;
font-size:30px;
font-style:${props => props.fontStyle};
text-decoration:${props => props.textDecaration};
font-weight:${props => props.fontWeight}
`
