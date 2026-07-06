import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "software")!;

export default function ServicePage_software() {
  return <ServiceDetailPage service={service} />;
}
