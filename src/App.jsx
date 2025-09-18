import { CssBaseline, ThemeProvider } from "@mui/material"
import Routes from "./routes/Route"
import Theme from "./Theme/Theme"

import { RouterProvider} from "react-router-dom";


function App() {


  return (
    <>
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <RouterProvider router={Routes}/>
    </ThemeProvider>

    </>
  )
}

export default App
