import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "./ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "ecommerce")!;

export function ServicePage_ecommerce() {
  return <ServiceDetailPage service={service} />;
}
