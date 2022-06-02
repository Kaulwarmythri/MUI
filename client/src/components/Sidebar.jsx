import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import {Home, EventNote, Group, OndemandVideo, ChatBubble, Settings, AccountCircle, ModeNight, DarkMode} from '@mui/icons-material';

const Sidebar = ({mode, setMode}) => {
    return (
        <Box flex={1} p={2} sx={{display: {xs:"none", sm: "block"}}}>
            <Box sx={{position: "fixed"}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#pages">
                        <ListItemIcon>
                            <EventNote />
                        </ListItemIcon>
                        <ListItemText primary="Events" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#friends">
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#groups">
                        <ListItemIcon>
                            <OndemandVideo />
                        </ListItemIcon>
                        <ListItemText primary="Videos" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#chats">
                        <ListItemIcon>
                            <ChatBubble />
                        </ListItemIcon>
                        <ListItemText primary="Chats" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#settings">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#profile">
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#darkmode">
                        <ListItemIcon>
                            <DarkMode />
                        </ListItemIcon>
                        <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
        
)}

export default Sidebar;