import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "networking")!;

export default function ServicePage_networking() {
  return <ServiceDetailPage service={service} />;
}
