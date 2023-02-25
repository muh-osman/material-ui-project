import { Outlet } from "react-router-dom";
import Drawer from '../MUI/Drawer';
export default function Root() {
  return (
    <>
      <Drawer />

      <Outlet />
    </>
  );
}
