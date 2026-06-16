import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "./ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "software")!;

export function ServicePage_software() {
  return <ServiceDetailPage service={service} />;
}
