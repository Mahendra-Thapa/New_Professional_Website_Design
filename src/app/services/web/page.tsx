import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "web")!;

export default function ServicePage_web() {
  return <ServiceDetailPage service={service} />;
}
