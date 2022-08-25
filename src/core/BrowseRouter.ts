import { BlockClass, props } from 'types';
import { Route } from './Route';
import { checkOnCorrectUrl } from 'utils';

class BrowseRouter {
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
      const target = event.currentTarget as Window;
      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    checkOnCorrectUrl(pathname);

    const route = this.getRoute(pathname);

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
    if (router && router['block'] !== null) {
      router['block'] = null;
    }
    return router || this.routers.find((route) => route.match('*'));
  }

  getRouters() {
    return this.routers;
  }
}

export default new BrowseRouter();
