import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "./ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "digital-marketing")!;

export function ServicePage_digital_marketing() {
  return <ServiceDetailPage service={service} />;
}
