import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceLayout } from "./pages/services/ServiceLayout";
import { ServicePage_cloud } from "./pages/services/cloud";
import { ServicePage_networking } from "./pages/services/networking";
import { ServicePage_software } from "./pages/services/software";
import { ServicePage_web } from "./pages/services/web";
import { ServicePage_digital_marketing } from "./pages/services/digital-marketing";
import { ServicePage_ecommerce } from "./pages/services/ecommerce";
import { Technology } from "./pages/Technology";
import { Team } from "./pages/Team";
import { FAQ } from "./pages/FAQ";
import { Blog } from "./pages/Blog";
import { BlogDetail } from "./pages/BlogDetail";
import { Career } from "./pages/Career";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "services",
        Component: ServiceLayout,
        children: [
          { index: true, Component: Services },
          { path: "cloud", Component: ServicePage_cloud },
          { path: "networking", Component: ServicePage_networking },
          { path: "software", Component: ServicePage_software },
          { path: "web", Component: ServicePage_web },
          { path: "digital-marketing", Component: ServicePage_digital_marketing },
          { path: "ecommerce", Component: ServicePage_ecommerce },
        ],
      },
      { path: "products", Component: Products },
      { path: "projects", Component: Products },
      { path: "technology", Component: Technology },
      { path: "team", Component: Team },
      { path: "faq", Component: FAQ },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogDetail },
      { path: "career", Component: Career },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
