import { OnTapLT } from "./components/OnTapLT";
import { ThiLT } from "./components/ThiLT";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/hoc-ly-thuyet',
    element: <OnTapLT />
  },
  {
    path: '/thi-ly-thuyet',
    element: <ThiLT />
  }
];

export default AppRoutes;
