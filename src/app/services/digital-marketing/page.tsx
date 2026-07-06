import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "digital-marketing")!;

export default function ServicePage_digital_marketing() {
  return <ServiceDetailPage service={service} />;
}
