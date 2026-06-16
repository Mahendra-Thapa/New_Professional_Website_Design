import { Outlet } from "react-router";
import { ServiceSubNav } from "../../components/ServiceSubNav";

export function ServiceLayout() {
  return (
    <>
      <ServiceSubNav />
      <Outlet />
    </>
  );
}
