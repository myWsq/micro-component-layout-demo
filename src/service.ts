import Axios from "axios";
import _groupBy from "lodash/groupBy";
import _keyBy from "lodash/keyBy";

export interface Component {
  id?: number;
  path: string;
  js: string;
  css?: string;
}

export interface Route {
  id: number;
  path: string;
  component: Component;
}

export interface RouteModifyPayload {
  path: string;
  componentId: number | undefined;
}

export interface getComponentsResult {
  [namespace: string]: Component[];
}

export const GlobalService = {
  async getComponents() {
    const res = await Axios.get("/api/component");
    const components: Component[] = res.data;
    return _groupBy(components, item => item.path.split(".")[0]);
  },
  async getCurLayoutComponent() {
    const res = await Axios.get("/api/config");
    return res.data.layoutComponent as Component;
  },
  async getRoutes() {
    const res = await Axios.get("/api/config");
    const routes = res.data.routeItems as Route[];
    return _keyBy(routes, item => item.path);
  },
  async setLayoutComponent(id: number) {
    await Axios.post("/api/layout", {
      id
    });
  },
  async createComonent(payload: Component) {
    const res = await Axios.post("/api/component", payload);
    return res.data;
  },
  async createRouteItem(payload: RouteModifyPayload) {
    const res = await Axios.post("/api/route", payload);
    return res.data;
  }
};
