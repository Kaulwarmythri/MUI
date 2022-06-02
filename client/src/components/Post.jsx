import React from "react";
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, CardActions, Checkbox } from "@mui/material";
import {MoreVert, Favorite, Share, FavoriteBorder} from "@mui/icons-material";

export const Post = () => {
    return (
        <Card sx={{margin:"20px 0 20px 0"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    M
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Mythri Kaulwar"
                subheader="March 25, 2022"
            />
            <CardMedia
                component="img"
                height="10%"
                image="https://material-ui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
                
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
            </Card>
    )
}