import React from "react";
import {Tooltip, Fab, Modal, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from "@mui/material";
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import { borderColor, Box } from "@mui/system";

const StyledModal = styled(Modal) ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {border: "none"},
    "&:hover": {border: "none"}
});

const Userbox = styled(Box) ({
    display: "flex",
    alignItems: "center",
    gap:"10px",
    marginBottom:"20px",
});

const Add = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Tooltip title="Delete"  sx={{position: "fixed", bottom:20, left: {md:70, xs: "calc(50% - 25px)"}}}>
            <Fab color="primary" aria-label="add" onClick={e => setOpen(true)}>
                <AddIcon />
            </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={5} borderRadius={4}>
                    <Typography variant="h6" textAlign="center" color="gray">Create Post</Typography>
                    <Userbox>
                    <Avatar src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=pexels-jill-wellington-39853.jpg&fm=jpg"/>
                    <Typography variant="span" fontWeight={500}>Kaulwar Mythri</Typography>
                    </Userbox>
                    <TextField
                        sx={{width:"100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    /> 
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary"/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="success"/>
                        <PersonAdd color="warning"/>
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}><DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add;