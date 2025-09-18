import { createBrowserRouter } from "react-router-dom";
import Matrixcalculator from "../componemts/Matrixcalculator";
import Wrapper from "../layout/Wrapper";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "",
        element: <Matrixcalculator/>,
      },
    ],
  },
]);
export default Routes;
