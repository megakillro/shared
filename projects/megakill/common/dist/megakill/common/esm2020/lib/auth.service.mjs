import { Injectable, Optional } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import { from, of, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./config";
export class AuthService {
    constructor(router, config) {
        this.router = router;
        this.config = config;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = from(createAuth0Client({
            domain: this.config?.auth.domain,
            client_id: this.config?.auth.client_id,
            redirect_uri: `${window.location.origin}/manage/callback`,
            audience: this.config?.auth.audience
        })).pipe(shareReplay(1), // Every subscription receives the same shared value
        catchError(err => throwError(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(concatMap((client) => from(client.isAuthenticated())), tap(res => this.loggedIn = res));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(concatMap((client) => from(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new BehaviorSubject(null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = false;
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(concatMap((client) => from(client.getUser(options))), tap(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(concatMap((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return of(loggedIn);
        }));
        checkAuth$.subscribe((response) => {
            // If authenticated, response will be user object
            // If not authenticated, response will be 'false'
            this.loggedIn = !!response;
        });
    }
    login(redirectPath = '/') {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: `${window.location.origin}/manage/callback`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Only the callback component should call this method
        // Call when app reloads after user logs in with Auth0
        let targetRoute; // Path to redirect to after login processsed
        const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        tap(cbRes => {
            // Get and set target redirect route from callback results
            targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }), concatMap(() => {
            // Redirect callback complete; get user and login status
            return combineLatest(this.getUser$(), this.isAuthenticated$);
        }));
        // Subscribe to authentication completion observable
        // Response will be an array of user and login status
        authComplete$.subscribe(([user, loggedIn]) => {
            // Redirect to target route after callback processing
            this.router.navigate([targetRoute]);
        });
    }
    getTokenSilently$(options) {
        return this.auth0Client$.pipe(concatMap((client) => from(client.getTokenSilently(options))));
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log out
            client.logout({
                client_id: this.config?.auth.client_id,
                returnTo: `${window.location.origin}`
            });
        });
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthService, deps: [{ token: i1.Router }, { token: i2.MegakillCommonModuleConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.MegakillCommonModuleConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxpQkFBbUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBYyxlQUFlLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RixPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNekUsTUFBTSxPQUFPLFdBQVc7SUE4QnRCLFlBQ1UsTUFBYyxFQUNGLE1BQW1DO1FBRC9DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDRixXQUFNLEdBQU4sTUFBTSxDQUE2QjtRQS9CekQsbURBQW1EO1FBQ25ELGlCQUFZLEdBQUksSUFBSSxDQUNsQixpQkFBaUIsQ0FBQztZQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNoQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN0QyxZQUFZLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sa0JBQWtCO1lBQ3pELFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3JDLENBQUMsQ0FDeUIsQ0FBQyxJQUFJLENBQ2hDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxvREFBb0Q7UUFDcEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ25DLENBQUM7UUFDRixxRUFBcUU7UUFDckUsdUVBQXVFO1FBQ3ZFLCtFQUErRTtRQUMvRSwwREFBMEQ7UUFDMUQscUJBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3ZDLFNBQVMsQ0FBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUNsRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUNoQyxDQUFDO1FBQ0YsNEJBQXVCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzlDLFNBQVMsQ0FBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQzFFLENBQUM7UUFDRiw0REFBNEQ7UUFDcEQsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDN0QsaUJBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsMkNBQTJDO1FBQzNDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFLdEIsQ0FBQztJQUVMLGlEQUFpRDtJQUNqRCx3RUFBd0U7SUFDeEUsUUFBUSxDQUFDLE9BQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDM0IsU0FBUyxDQUFDLENBQUMsTUFBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ2pELENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYztRQUNaLG1EQUFtRDtRQUNuRCxzQ0FBc0M7UUFDdEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDM0MsU0FBUyxDQUFDLENBQUMsUUFBaUIsRUFBRSxFQUFFO1lBQzlCLElBQUksUUFBUSxFQUFFO2dCQUNaLDRDQUE0QztnQkFDNUMsOENBQThDO2dCQUM5QyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4QjtZQUNELHlEQUF5RDtZQUN6RCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQTBDLEVBQUUsRUFBRTtZQUNsRSxpREFBaUQ7WUFDakQsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBdUIsR0FBRztRQUM5Qix3REFBd0Q7UUFDeEQsNkJBQTZCO1FBQzdCLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUNsRCx3QkFBd0I7WUFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUN2QixZQUFZLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sa0JBQWtCO2dCQUN6RCxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixzREFBc0Q7UUFDdEQsc0RBQXNEO1FBQ3RELElBQUksV0FBbUIsQ0FBQyxDQUFDLDZDQUE2QztRQUN0RSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSTtRQUNyRCxnRUFBZ0U7UUFDaEUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1YsMERBQTBEO1lBQzFELFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYix3REFBd0Q7WUFDeEQsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQ3RCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0Ysb0RBQW9EO1FBQ3BELHFEQUFxRDtRQUNyRCxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxxREFBcUQ7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLE9BQWE7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDM0IsU0FBUyxDQUFDLENBQUMsTUFBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQzNFLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUNsRCx5QkFBeUI7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDdEMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7YUFDdEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3R0F2SFUsV0FBVzs0R0FBWCxXQUFXLGNBRlYsTUFBTTsyRkFFUCxXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBaUNJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWdha2lsbENvbW1vbk1vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY3JlYXRlQXV0aDBDbGllbnQsIHsgR2V0VG9rZW5TaWxlbnRseVZlcmJvc2VSZXNwb25zZSwgQXV0aDBDbGllbnQgfSBmcm9tICdAYXV0aDAvYXV0aDAtc3BhLWpzJztcbmltcG9ydCB7IGZyb20sIG9mLCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgLy8gQ3JlYXRlIGFuIG9ic2VydmFibGUgb2YgQXV0aDAgaW5zdGFuY2Ugb2YgY2xpZW50XG4gIGF1dGgwQ2xpZW50JCA9IChmcm9tKFxuICAgIGNyZWF0ZUF1dGgwQ2xpZW50KHtcbiAgICAgIGRvbWFpbjogdGhpcy5jb25maWc/LmF1dGguZG9tYWluLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZz8uYXV0aC5jbGllbnRfaWQsXG4gICAgICByZWRpcmVjdF91cmk6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L21hbmFnZS9jYWxsYmFja2AsXG4gICAgICBhdWRpZW5jZTogdGhpcy5jb25maWc/LmF1dGguYXVkaWVuY2VcbiAgICB9KVxuICApIGFzIE9ic2VydmFibGU8QXV0aDBDbGllbnQ+KS5waXBlKFxuICAgIHNoYXJlUmVwbGF5KDEpLCAvLyBFdmVyeSBzdWJzY3JpcHRpb24gcmVjZWl2ZXMgdGhlIHNhbWUgc2hhcmVkIHZhbHVlXG4gICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcihlcnIpKVxuICApO1xuICAvLyBEZWZpbmUgb2JzZXJ2YWJsZXMgZm9yIFNESyBtZXRob2RzIHRoYXQgcmV0dXJuIHByb21pc2VzIGJ5IGRlZmF1bHRcbiAgLy8gRm9yIGVhY2ggQXV0aDAgU0RLIG1ldGhvZCwgZmlyc3QgZW5zdXJlIHRoZSBjbGllbnQgaW5zdGFuY2UgaXMgcmVhZHlcbiAgLy8gY29uY2F0TWFwOiBVc2luZyB0aGUgY2xpZW50IGluc3RhbmNlLCBjYWxsIFNESyBtZXRob2Q7IFNESyByZXR1cm5zIGEgcHJvbWlzZVxuICAvLyBmcm9tOiBDb252ZXJ0IHRoYXQgcmVzdWx0aW5nIHByb21pc2UgaW50byBhbiBvYnNlcnZhYmxlXG4gIGlzQXV0aGVudGljYXRlZCQgPSB0aGlzLmF1dGgwQ2xpZW50JC5waXBlKFxuICAgIGNvbmNhdE1hcCgoY2xpZW50OiBBdXRoMENsaWVudCkgPT4gZnJvbShjbGllbnQuaXNBdXRoZW50aWNhdGVkKCkpKSxcbiAgICB0YXAocmVzID0+IHRoaXMubG9nZ2VkSW4gPSByZXMpXG4gICk7XG4gIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2skID0gdGhpcy5hdXRoMENsaWVudCQucGlwZShcbiAgICBjb25jYXRNYXAoKGNsaWVudDogQXV0aDBDbGllbnQpID0+IGZyb20oY2xpZW50LmhhbmRsZVJlZGlyZWN0Q2FsbGJhY2soKSkpXG4gICk7XG4gIC8vIENyZWF0ZSBzdWJqZWN0IGFuZCBwdWJsaWMgb2JzZXJ2YWJsZSBvZiB1c2VyIHByb2ZpbGUgZGF0YVxuICBwcml2YXRlIHVzZXJQcm9maWxlU3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHVzZXJQcm9maWxlJCA9IHRoaXMudXNlclByb2ZpbGVTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgLy8gQ3JlYXRlIGEgbG9jYWwgcHJvcGVydHkgZm9yIGxvZ2luIHN0YXR1c1xuICBsb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjb25maWc/OiBNZWdha2lsbENvbW1vbk1vZHVsZUNvbmZpZ1xuICApIHsgfVxuXG4gIC8vIFdoZW4gY2FsbGluZywgb3B0aW9ucyBjYW4gYmUgcGFzc2VkIGlmIGRlc2lyZWRcbiAgLy8gaHR0cHM6Ly9hdXRoMC5naXRodWIuaW8vYXV0aDAtc3BhLWpzL2NsYXNzZXMvYXV0aDBjbGllbnQuaHRtbCNnZXR1c2VyXG4gIGdldFVzZXIkKG9wdGlvbnM/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmF1dGgwQ2xpZW50JC5waXBlKFxuICAgICAgY29uY2F0TWFwKChjbGllbnQ6IEF1dGgwQ2xpZW50KSA9PiBmcm9tKGNsaWVudC5nZXRVc2VyKG9wdGlvbnMpKSksXG4gICAgICB0YXAodXNlciA9PiB0aGlzLnVzZXJQcm9maWxlU3ViamVjdCQubmV4dCh1c2VyKSlcbiAgICApO1xuICB9XG5cbiAgbG9jYWxBdXRoU2V0dXAoKSB7XG4gICAgLy8gVGhpcyBzaG91bGQgb25seSBiZSBjYWxsZWQgb24gYXBwIGluaXRpYWxpemF0aW9uXG4gICAgLy8gU2V0IHVwIGxvY2FsIGF1dGhlbnRpY2F0aW9uIHN0cmVhbXNcbiAgICBjb25zdCBjaGVja0F1dGgkID0gdGhpcy5pc0F1dGhlbnRpY2F0ZWQkLnBpcGUoXG4gICAgICBjb25jYXRNYXAoKGxvZ2dlZEluOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChsb2dnZWRJbikge1xuICAgICAgICAgIC8vIElmIGF1dGhlbnRpY2F0ZWQsIGdldCB1c2VyIGFuZCBzZXQgaW4gYXBwXG4gICAgICAgICAgLy8gTk9URTogeW91IGNvdWxkIHBhc3Mgb3B0aW9ucyBoZXJlIGlmIG5lZWRlZFxuICAgICAgICAgIHJldHVybiB0aGlzLmdldFVzZXIkKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbm90IGF1dGhlbnRpY2F0ZWQsIHJldHVybiBzdHJlYW0gdGhhdCBlbWl0cyAnZmFsc2UnXG4gICAgICAgIHJldHVybiBvZihsb2dnZWRJbik7XG4gICAgICB9KVxuICAgICk7XG4gICAgY2hlY2tBdXRoJC5zdWJzY3JpYmUoKHJlc3BvbnNlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgYm9vbGVhbikgPT4ge1xuICAgICAgLy8gSWYgYXV0aGVudGljYXRlZCwgcmVzcG9uc2Ugd2lsbCBiZSB1c2VyIG9iamVjdFxuICAgICAgLy8gSWYgbm90IGF1dGhlbnRpY2F0ZWQsIHJlc3BvbnNlIHdpbGwgYmUgJ2ZhbHNlJ1xuICAgICAgdGhpcy5sb2dnZWRJbiA9ICEhcmVzcG9uc2U7XG4gICAgfSk7XG4gIH1cblxuICBsb2dpbihyZWRpcmVjdFBhdGg6IHN0cmluZyA9ICcvJykge1xuICAgIC8vIEEgZGVzaXJlZCByZWRpcmVjdCBwYXRoIGNhbiBiZSBwYXNzZWQgdG8gbG9naW4gbWV0aG9kXG4gICAgLy8gKGUuZy4sIGZyb20gYSByb3V0ZSBndWFyZClcbiAgICAvLyBFbnN1cmUgQXV0aDAgY2xpZW50IGluc3RhbmNlIGV4aXN0c1xuICAgIHRoaXMuYXV0aDBDbGllbnQkLnN1YnNjcmliZSgoY2xpZW50OiBBdXRoMENsaWVudCkgPT4ge1xuICAgICAgLy8gQ2FsbCBtZXRob2QgdG8gbG9nIGluXG4gICAgICBjbGllbnQubG9naW5XaXRoUmVkaXJlY3Qoe1xuICAgICAgICByZWRpcmVjdF91cmk6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L21hbmFnZS9jYWxsYmFja2AsXG4gICAgICAgIGFwcFN0YXRlOiB7IHRhcmdldDogcmVkaXJlY3RQYXRoIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQXV0aENhbGxiYWNrKCkge1xuICAgIC8vIE9ubHkgdGhlIGNhbGxiYWNrIGNvbXBvbmVudCBzaG91bGQgY2FsbCB0aGlzIG1ldGhvZFxuICAgIC8vIENhbGwgd2hlbiBhcHAgcmVsb2FkcyBhZnRlciB1c2VyIGxvZ3MgaW4gd2l0aCBBdXRoMFxuICAgIGxldCB0YXJnZXRSb3V0ZTogc3RyaW5nOyAvLyBQYXRoIHRvIHJlZGlyZWN0IHRvIGFmdGVyIGxvZ2luIHByb2Nlc3NzZWRcbiAgICBjb25zdCBhdXRoQ29tcGxldGUkID0gdGhpcy5oYW5kbGVSZWRpcmVjdENhbGxiYWNrJC5waXBlKFxuICAgICAgLy8gSGF2ZSBjbGllbnQsIG5vdyBjYWxsIG1ldGhvZCB0byBoYW5kbGUgYXV0aCBjYWxsYmFjayByZWRpcmVjdFxuICAgICAgdGFwKGNiUmVzID0+IHtcbiAgICAgICAgLy8gR2V0IGFuZCBzZXQgdGFyZ2V0IHJlZGlyZWN0IHJvdXRlIGZyb20gY2FsbGJhY2sgcmVzdWx0c1xuICAgICAgICB0YXJnZXRSb3V0ZSA9IGNiUmVzLmFwcFN0YXRlICYmIGNiUmVzLmFwcFN0YXRlLnRhcmdldCA/IGNiUmVzLmFwcFN0YXRlLnRhcmdldCA6ICcvJztcbiAgICAgIH0pLFxuICAgICAgY29uY2F0TWFwKCgpID0+IHtcbiAgICAgICAgLy8gUmVkaXJlY3QgY2FsbGJhY2sgY29tcGxldGU7IGdldCB1c2VyIGFuZCBsb2dpbiBzdGF0dXNcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgdGhpcy5nZXRVc2VyJCgpLFxuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkJFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICAgIC8vIFN1YnNjcmliZSB0byBhdXRoZW50aWNhdGlvbiBjb21wbGV0aW9uIG9ic2VydmFibGVcbiAgICAvLyBSZXNwb25zZSB3aWxsIGJlIGFuIGFycmF5IG9mIHVzZXIgYW5kIGxvZ2luIHN0YXR1c1xuICAgIGF1dGhDb21wbGV0ZSQuc3Vic2NyaWJlKChbdXNlciwgbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAvLyBSZWRpcmVjdCB0byB0YXJnZXQgcm91dGUgYWZ0ZXIgY2FsbGJhY2sgcHJvY2Vzc2luZ1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RhcmdldFJvdXRlXSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRUb2tlblNpbGVudGx5JChvcHRpb25zPzogYW55KTogT2JzZXJ2YWJsZTxHZXRUb2tlblNpbGVudGx5VmVyYm9zZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aDBDbGllbnQkLnBpcGUoXG4gICAgICBjb25jYXRNYXAoKGNsaWVudDogQXV0aDBDbGllbnQpID0+IGZyb20oY2xpZW50LmdldFRva2VuU2lsZW50bHkob3B0aW9ucykpKVxuICAgICk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgLy8gRW5zdXJlIEF1dGgwIGNsaWVudCBpbnN0YW5jZSBleGlzdHNcbiAgICB0aGlzLmF1dGgwQ2xpZW50JC5zdWJzY3JpYmUoKGNsaWVudDogQXV0aDBDbGllbnQpID0+IHtcbiAgICAgIC8vIENhbGwgbWV0aG9kIHRvIGxvZyBvdXRcbiAgICAgIGNsaWVudC5sb2dvdXQoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY29uZmlnPy5hdXRoLmNsaWVudF9pZCxcbiAgICAgICAgcmV0dXJuVG86IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59YFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==