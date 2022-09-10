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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVnYWtpbGwvY29tbW9uL3NyYy9saWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8saUJBQW1FLE1BQU0scUJBQXFCLENBQUM7QUFDdEcsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQWMsZUFBZSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXpFLE1BQU0sT0FBTyxXQUFXO0lBOEJ0QixZQUNVLE1BQWMsRUFDRixNQUFtQztRQUQvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0YsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7UUEvQnpELG1EQUFtRDtRQUNuRCxpQkFBWSxHQUFJLElBQUksQ0FDbEIsaUJBQWlCLENBQUM7WUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDaEMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdEMsWUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLGtCQUFrQjtZQUN6RCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNyQyxDQUFDLENBQ3lCLENBQUMsSUFBSSxDQUNoQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0RBQW9EO1FBQ3BFLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNuQyxDQUFDO1FBQ0Ys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VztrQkFIdkIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQWlDSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGNyZWF0ZUF1dGgwQ2xpZW50LCB7IEdldFRva2VuU2lsZW50bHlWZXJib3NlUmVzcG9uc2UsIEF1dGgwQ2xpZW50IH0gZnJvbSAnQGF1dGgwL2F1dGgwLXNwYS1qcyc7XG5pbXBvcnQgeyBmcm9tLCBvZiwgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IsIGNvbmNhdE1hcCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIC8vIENyZWF0ZSBhbiBvYnNlcnZhYmxlIG9mIEF1dGgwIGluc3RhbmNlIG9mIGNsaWVudFxuICBhdXRoMENsaWVudCQgPSAoZnJvbShcbiAgICBjcmVhdGVBdXRoMENsaWVudCh7XG4gICAgICBkb21haW46IHRoaXMuY29uZmlnPy5hdXRoLmRvbWFpbixcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWc/LmF1dGguY2xpZW50X2lkLFxuICAgICAgcmVkaXJlY3RfdXJpOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9tYW5hZ2UvY2FsbGJhY2tgLFxuICAgICAgYXVkaWVuY2U6IHRoaXMuY29uZmlnPy5hdXRoLmF1ZGllbmNlXG4gICAgfSlcbiAgKSBhcyBPYnNlcnZhYmxlPEF1dGgwQ2xpZW50PikucGlwZShcbiAgICBzaGFyZVJlcGxheSgxKSwgLy8gRXZlcnkgc3Vic2NyaXB0aW9uIHJlY2VpdmVzIHRoZSBzYW1lIHNoYXJlZCB2YWx1ZVxuICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IoZXJyKSlcbiAgKTtcbiAgLy8gRGVmaW5lIG9ic2VydmFibGVzIGZvciBTREsgbWV0aG9kcyB0aGF0IHJldHVybiBwcm9taXNlcyBieSBkZWZhdWx0XG4gIC8vIEZvciBlYWNoIEF1dGgwIFNESyBtZXRob2QsIGZpcnN0IGVuc3VyZSB0aGUgY2xpZW50IGluc3RhbmNlIGlzIHJlYWR5XG4gIC8vIGNvbmNhdE1hcDogVXNpbmcgdGhlIGNsaWVudCBpbnN0YW5jZSwgY2FsbCBTREsgbWV0aG9kOyBTREsgcmV0dXJucyBhIHByb21pc2VcbiAgLy8gZnJvbTogQ29udmVydCB0aGF0IHJlc3VsdGluZyBwcm9taXNlIGludG8gYW4gb2JzZXJ2YWJsZVxuICBpc0F1dGhlbnRpY2F0ZWQkID0gdGhpcy5hdXRoMENsaWVudCQucGlwZShcbiAgICBjb25jYXRNYXAoKGNsaWVudDogQXV0aDBDbGllbnQpID0+IGZyb20oY2xpZW50LmlzQXV0aGVudGljYXRlZCgpKSksXG4gICAgdGFwKHJlcyA9PiB0aGlzLmxvZ2dlZEluID0gcmVzKVxuICApO1xuICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrJCA9IHRoaXMuYXV0aDBDbGllbnQkLnBpcGUoXG4gICAgY29uY2F0TWFwKChjbGllbnQ6IEF1dGgwQ2xpZW50KSA9PiBmcm9tKGNsaWVudC5oYW5kbGVSZWRpcmVjdENhbGxiYWNrKCkpKVxuICApO1xuICAvLyBDcmVhdGUgc3ViamVjdCBhbmQgcHVibGljIG9ic2VydmFibGUgb2YgdXNlciBwcm9maWxlIGRhdGFcbiAgcHJpdmF0ZSB1c2VyUHJvZmlsZVN1YmplY3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICB1c2VyUHJvZmlsZSQgPSB0aGlzLnVzZXJQcm9maWxlU3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XG4gIC8vIENyZWF0ZSBhIGxvY2FsIHByb3BlcnR5IGZvciBsb2dpbiBzdGF0dXNcbiAgbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY29uZmlnPzogTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWdcbiAgKSB7IH1cblxuICAvLyBXaGVuIGNhbGxpbmcsIG9wdGlvbnMgY2FuIGJlIHBhc3NlZCBpZiBkZXNpcmVkXG4gIC8vIGh0dHBzOi8vYXV0aDAuZ2l0aHViLmlvL2F1dGgwLXNwYS1qcy9jbGFzc2VzL2F1dGgwY2xpZW50Lmh0bWwjZ2V0dXNlclxuICBnZXRVc2VyJChvcHRpb25zPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoMENsaWVudCQucGlwZShcbiAgICAgIGNvbmNhdE1hcCgoY2xpZW50OiBBdXRoMENsaWVudCkgPT4gZnJvbShjbGllbnQuZ2V0VXNlcihvcHRpb25zKSkpLFxuICAgICAgdGFwKHVzZXIgPT4gdGhpcy51c2VyUHJvZmlsZVN1YmplY3QkLm5leHQodXNlcikpXG4gICAgKTtcbiAgfVxuXG4gIGxvY2FsQXV0aFNldHVwKCkge1xuICAgIC8vIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uIGFwcCBpbml0aWFsaXphdGlvblxuICAgIC8vIFNldCB1cCBsb2NhbCBhdXRoZW50aWNhdGlvbiBzdHJlYW1zXG4gICAgY29uc3QgY2hlY2tBdXRoJCA9IHRoaXMuaXNBdXRoZW50aWNhdGVkJC5waXBlKFxuICAgICAgY29uY2F0TWFwKChsb2dnZWRJbjogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAobG9nZ2VkSW4pIHtcbiAgICAgICAgICAvLyBJZiBhdXRoZW50aWNhdGVkLCBnZXQgdXNlciBhbmQgc2V0IGluIGFwcFxuICAgICAgICAgIC8vIE5PVEU6IHlvdSBjb3VsZCBwYXNzIG9wdGlvbnMgaGVyZSBpZiBuZWVkZWRcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRVc2VyJCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vdCBhdXRoZW50aWNhdGVkLCByZXR1cm4gc3RyZWFtIHRoYXQgZW1pdHMgJ2ZhbHNlJ1xuICAgICAgICByZXR1cm4gb2YobG9nZ2VkSW4pO1xuICAgICAgfSlcbiAgICApO1xuICAgIGNoZWNrQXV0aCQuc3Vic2NyaWJlKChyZXNwb25zZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IGJvb2xlYW4pID0+IHtcbiAgICAgIC8vIElmIGF1dGhlbnRpY2F0ZWQsIHJlc3BvbnNlIHdpbGwgYmUgdXNlciBvYmplY3RcbiAgICAgIC8vIElmIG5vdCBhdXRoZW50aWNhdGVkLCByZXNwb25zZSB3aWxsIGJlICdmYWxzZSdcbiAgICAgIHRoaXMubG9nZ2VkSW4gPSAhIXJlc3BvbnNlO1xuICAgIH0pO1xuICB9XG5cbiAgbG9naW4ocmVkaXJlY3RQYXRoOiBzdHJpbmcgPSAnLycpIHtcbiAgICAvLyBBIGRlc2lyZWQgcmVkaXJlY3QgcGF0aCBjYW4gYmUgcGFzc2VkIHRvIGxvZ2luIG1ldGhvZFxuICAgIC8vIChlLmcuLCBmcm9tIGEgcm91dGUgZ3VhcmQpXG4gICAgLy8gRW5zdXJlIEF1dGgwIGNsaWVudCBpbnN0YW5jZSBleGlzdHNcbiAgICB0aGlzLmF1dGgwQ2xpZW50JC5zdWJzY3JpYmUoKGNsaWVudDogQXV0aDBDbGllbnQpID0+IHtcbiAgICAgIC8vIENhbGwgbWV0aG9kIHRvIGxvZyBpblxuICAgICAgY2xpZW50LmxvZ2luV2l0aFJlZGlyZWN0KHtcbiAgICAgICAgcmVkaXJlY3RfdXJpOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9tYW5hZ2UvY2FsbGJhY2tgLFxuICAgICAgICBhcHBTdGF0ZTogeyB0YXJnZXQ6IHJlZGlyZWN0UGF0aCB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUF1dGhDYWxsYmFjaygpIHtcbiAgICAvLyBPbmx5IHRoZSBjYWxsYmFjayBjb21wb25lbnQgc2hvdWxkIGNhbGwgdGhpcyBtZXRob2RcbiAgICAvLyBDYWxsIHdoZW4gYXBwIHJlbG9hZHMgYWZ0ZXIgdXNlciBsb2dzIGluIHdpdGggQXV0aDBcbiAgICBsZXQgdGFyZ2V0Um91dGU6IHN0cmluZzsgLy8gUGF0aCB0byByZWRpcmVjdCB0byBhZnRlciBsb2dpbiBwcm9jZXNzc2VkXG4gICAgY29uc3QgYXV0aENvbXBsZXRlJCA9IHRoaXMuaGFuZGxlUmVkaXJlY3RDYWxsYmFjayQucGlwZShcbiAgICAgIC8vIEhhdmUgY2xpZW50LCBub3cgY2FsbCBtZXRob2QgdG8gaGFuZGxlIGF1dGggY2FsbGJhY2sgcmVkaXJlY3RcbiAgICAgIHRhcChjYlJlcyA9PiB7XG4gICAgICAgIC8vIEdldCBhbmQgc2V0IHRhcmdldCByZWRpcmVjdCByb3V0ZSBmcm9tIGNhbGxiYWNrIHJlc3VsdHNcbiAgICAgICAgdGFyZ2V0Um91dGUgPSBjYlJlcy5hcHBTdGF0ZSAmJiBjYlJlcy5hcHBTdGF0ZS50YXJnZXQgPyBjYlJlcy5hcHBTdGF0ZS50YXJnZXQgOiAnLyc7XG4gICAgICB9KSxcbiAgICAgIGNvbmNhdE1hcCgoKSA9PiB7XG4gICAgICAgIC8vIFJlZGlyZWN0IGNhbGxiYWNrIGNvbXBsZXRlOyBnZXQgdXNlciBhbmQgbG9naW4gc3RhdHVzXG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgIHRoaXMuZ2V0VXNlciQoKSxcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCRcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBTdWJzY3JpYmUgdG8gYXV0aGVudGljYXRpb24gY29tcGxldGlvbiBvYnNlcnZhYmxlXG4gICAgLy8gUmVzcG9uc2Ugd2lsbCBiZSBhbiBhcnJheSBvZiB1c2VyIGFuZCBsb2dpbiBzdGF0dXNcbiAgICBhdXRoQ29tcGxldGUkLnN1YnNjcmliZSgoW3VzZXIsIGxvZ2dlZEluXSkgPT4ge1xuICAgICAgLy8gUmVkaXJlY3QgdG8gdGFyZ2V0IHJvdXRlIGFmdGVyIGNhbGxiYWNrIHByb2Nlc3NpbmdcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0YXJnZXRSb3V0ZV0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VG9rZW5TaWxlbnRseSQob3B0aW9ucz86IGFueSk6IE9ic2VydmFibGU8R2V0VG9rZW5TaWxlbnRseVZlcmJvc2VSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmF1dGgwQ2xpZW50JC5waXBlKFxuICAgICAgY29uY2F0TWFwKChjbGllbnQ6IEF1dGgwQ2xpZW50KSA9PiBmcm9tKGNsaWVudC5nZXRUb2tlblNpbGVudGx5KG9wdGlvbnMpKSlcbiAgICApO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIC8vIEVuc3VyZSBBdXRoMCBjbGllbnQgaW5zdGFuY2UgZXhpc3RzXG4gICAgdGhpcy5hdXRoMENsaWVudCQuc3Vic2NyaWJlKChjbGllbnQ6IEF1dGgwQ2xpZW50KSA9PiB7XG4gICAgICAvLyBDYWxsIG1ldGhvZCB0byBsb2cgb3V0XG4gICAgICBjbGllbnQubG9nb3V0KHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZz8uYXV0aC5jbGllbnRfaWQsXG4gICAgICAgIHJldHVyblRvOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufWBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=