import { AppBar, Avatar, Badge, InputBase, styled, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import React from "react";
import {Cake, Mail, Notifications} from '@mui/icons-material';
import { Box } from "@mui/system";

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",

}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap:"20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const Userbox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap:"10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6"  sx={{display: {xs: "none", sm: "block"}}}>MUI</Typography>
                <Cake sx={{display: {xs: "block", sm: "none"}}} />
                <Search><InputBase placeholder="Search..."/></Search>
                <Icons>
                    <Badge badgeContent={99} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={(e) => setOpen(true)} sx={{width:30, height:30}} src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=pexels-jill-wellington-39853.jpg&fm=jpg"/>
                </Icons>
                <Userbox>
                    <Avatar onClick={(e) => setOpen(true)} sx={{width:25, height:25}} src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=pexels-jill-wellington-39853.jpg&fm=jpg"/>
                    <Typography variant="p">Mythri</Typography>
                </Userbox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
        
)}

export default Navbar;