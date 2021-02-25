import React from 'react'
import styled from "styled-components"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text"
                            placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UsersContainer>
                <Name>
                    Alex Suprun
                </Name>
                <UsersImageContainer >
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </UsersImageContainer>
            </UsersContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background:#350d36;
    display:flex;
    color:white;
    align-items:center;
    positioned:relative;
    justify-content:center;
    z-index:20;
    box-shadow:0 1px 0 0 rgb(255 255 / 10%);

    `
const Main = styled.div`
    display:flex;
    margin-left:16px;
    margin-right:16px;

    `
const SearchContainer = styled.div`
    min-width:400px;
    margin-left:16px;
    margin-right:16px;
    `
const Search = styled.div`
    box-shodow:inset 0 0 0 1px rgb(104 74 104)
    width:100%;
    border-radis:10px;

    input {
        color:white;
        width:70%;
        background-color:transparent;
        border:none;
        padding-left:8px;
        padding-right:8px;
        padding-top:5px;
        padding-bottom:5px;
    }
    input:focus {
        outline:none;
    }

    `
const UsersContainer = styled.div`
    align-items:center;
    display:flex;
    padding-right:16px;
    position:absolute;
    right:0;

    `
const Name = styled.div`
    margin-right:10px;

    `
const UsersImageContainer = styled.div`
    width:30px;
    height:30px;
    border:2px solid white;
    border-radius:6px;
    img{
        width:100%;
        height:100%;
    }
    
`

