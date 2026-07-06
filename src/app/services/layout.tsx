
import { ServiceSubNav } from "../components/ServiceSubNav";

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceSubNav />
      {children}
    </>
  );
}
