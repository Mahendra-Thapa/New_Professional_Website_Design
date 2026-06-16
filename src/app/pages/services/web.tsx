import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "./ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "web")!;

export function ServicePage_web() {
  return <ServiceDetailPage service={service} />;
}
