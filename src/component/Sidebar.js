import React from 'react'
import styled from "styled-components"
import AddCircleOutlineIcon from
    '@material-ui/icons/AddCircleOutline';
import { sidabarItems, channelItems }
    from "../data/SidebarData"
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Send from '@material-ui/icons/Send';
function Sidebar() {
    return (
        <Container>
            <MainWorkSpace>
                MAE YAPIM
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </MainWorkSpace>
            <MainChanels>
                {
                    sidabarItems.map(items => (
                        <MainChanelsItems>
                            {items.icons}
                            {items.text}
                        </MainChanelsItems>
                    ))
                }
            </MainChanels>
            <MainNewChannel>
                <ChannelContainer>
                    Channel
                    <AddIcon />
                </ChannelContainer>
                <ChaneelList>
                    {
                        channelItems.map(item => (
                            <Channel>
                                {item.title}
                            </Channel>
                        ))
                    }
                </ChaneelList>
            </MainNewChannel>


        </Container>
    )
}
export default Sidebar

// const Container = styled.div``
const NewButtonChannel = styled.div`
background:red;
positioned:absolute;
right:0px;

`
const MainNewChannel = styled.div`
    color:rgb(188,176,188);
    margin-left:16px;
    margin-right:16px;
    `

const Channel = styled.div`
    margin-left:16px;
    height:28px;
    align-items:center;

    :hover{
        cursor:pointer;
        background:#350D36;
        color:white;
    }
    `
const ChannelContainer = styled.div`
    display:flex;
    justify-content:space-between;
    :hover{
        cursor:pointer;
    }

    `
const ChaneelList = styled.div``

const Container = styled.div`
    background:#3F0E40;
    max-width: 350px;
    `


const MainWorkSpace = styled.div`
    height:64px;
    display:flex;
    justify-content:space-between;
    margin-left:16px;
    margin-right:16px;
    margin-bottom:10px;
    align-items:center;
    color:white;
    border-bottom:1px solid grey;
    `

const NewMessage = styled.div`
    width:30px;
    height:30px;
    background:white;
    color:black;
    cursor:pointer;
    display:flex;
    border-radius:20px;
    align-items:center;
    justify-content:center;

    `
const MainChanels = styled.div`
    padding-left:16px;
    margin-top:16px;
    margin-bottom:2px;
    margin-bottom:10px;
    border-bottom:1px solid grey;
    `
const MainChanelsItems = styled.div`
    color:rgb(188,176,188);
    height:28px;
    align-items:Center;
    display:grid;
    grid-template-columns:15% auto;
    margin-bottom:3px;
    :hover{
        cursor:pointer;
        background:#350D36;
        color:white;
    }
    `