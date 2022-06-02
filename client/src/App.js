import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  const [mode, setMode] = React.useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });

  return (
    <div className="App">
        <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode}/>
            <Feed/>
            <Rightbar/>
          </Stack>
          <Add />
        </Box>
        </ThemeProvider>
    </div>
  );
}

export default App;
