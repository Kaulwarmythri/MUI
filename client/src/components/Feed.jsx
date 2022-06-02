import {Box, Skeleton, Stack} from "@mui/material";
import React from "react";
import {Post} from "./Post";

const Feed = () => {
        const [loading, setLoading] = React.useState(true);

        setTimeout(() => {
                setLoading(false);
        }, 3000);
    return (
        <Box flex={4} p={2}>
                {loading ? (
                <Stack>
                <Skeleton variant="text" height={20} />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="rectangular" height={300} />
                <Skeleton variant="text" height={100} />
                </Stack>   
                ) : (
                <>
                  <Post />   
                  <Post /> 
                  <Post /> 
                  <Post /> 
                  <Post />    
                </>
                )}
        </Box>
        
)}

export default Feed;