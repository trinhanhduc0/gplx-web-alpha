import { OnTapLT } from "./components/OnTapLT";
import { ThiLT } from "./components/ThiLT";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/ontaplt',
    element: <OnTapLT />
  },
  {
    path: '/thilt',
    element: <ThiLT />
  }
];

export default AppRoutes;
