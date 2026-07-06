import { SERVICE_PAGES } from "../../data";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

const service = SERVICE_PAGES.find((s) => s.slug === "ecommerce")!;

export default function ServicePage_ecommerce() {
  return <ServiceDetailPage service={service} />;
}
