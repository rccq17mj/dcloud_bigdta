import { Injectable } from '@angular/core';
import {
    CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router,
    Route, CanLoad
} from '@angular/router';


@Injectable()
export class RoutesGuardService implements CanActivate, CanActivateChild, CanLoad {
    constructor () {}

    /**
     * 守卫路由
     * @param activatedRouterState
     * @param routerState
     * @returns {boolean}
     */
    canActivate(activatedRouterState: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
      // TODO 逻辑在这里写即可
        return true;
    }

    /**
     * 守卫子路由
     * @param activatedRouterState
     * @param routerState
     * @returns {boolean}
     */
    canActivateChild(activatedRouterState: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        return this.canActivate(activatedRouterState, routerState);
    }

    canLoad(route: Route) {
        return true;
    }
}
