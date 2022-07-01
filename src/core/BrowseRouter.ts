import { BlockClass, props } from 'types';
import { Route } from './Route';

export default class BrowseRouter {
  static __instance: BrowseRouter;
  private routers: Array<Route> = [];
  private history: History = window.history;
  private currentRoute: Route | null = null;

  constructor() {
    if (BrowseRouter.__instance) {
      return BrowseRouter.__instance;
    }

    BrowseRouter.__instance = this;
  }

  use<P>(pathname: string, block: BlockClass<P>, props: props = {}) {
    const route = new Route(pathname, block, props);

    this.routers.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      this._onRoute(event.currentTarget?.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    let route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route | undefined {
    const router = this.routers.find((route) => route.match(pathname));
    return router || this.routers.find((route) => route.match('*'));
  }
}
