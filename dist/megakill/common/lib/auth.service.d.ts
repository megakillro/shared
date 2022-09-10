import { MegakillCommonModuleConfig } from './config';
import { GetTokenSilentlyVerboseResponse, Auth0Client } from '@auth0/auth0-spa-js';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AuthService {
    private router;
    private config?;
    auth0Client$: Observable<Auth0Client>;
    isAuthenticated$: Observable<boolean>;
    handleRedirectCallback$: Observable<import("@auth0/auth0-spa-js").RedirectLoginResult<any>>;
    private userProfileSubject$;
    userProfile$: Observable<any>;
    loggedIn: boolean;
    constructor(router: Router, config?: MegakillCommonModuleConfig | undefined);
    getUser$(options?: any): Observable<any>;
    localAuthSetup(): void;
    login(redirectPath?: string): void;
    handleAuthCallback(): void;
    getTokenSilently$(options?: any): Observable<GetTokenSilentlyVerboseResponse>;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
