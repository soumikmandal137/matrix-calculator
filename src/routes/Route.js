import Matrixcalculator from "../componemts/Matrixcalculator";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Matrixcalculator />,
      },
    ]
    }
    ])