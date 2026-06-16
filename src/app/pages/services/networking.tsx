import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "./ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "networking")!;

export function ServicePage_networking() {
  return <ServiceDetailPage service={service} />;
}
