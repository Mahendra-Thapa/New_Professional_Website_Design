import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "./ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "cloud")!;

export function ServicePage_cloud() {
  return <ServiceDetailPage service={service} />;
}
