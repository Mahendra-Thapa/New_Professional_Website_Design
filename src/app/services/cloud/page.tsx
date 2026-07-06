import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "cloud")!;

export default function ServicePage_cloud() {
  return <ServiceDetailPage service={service} />;
}
