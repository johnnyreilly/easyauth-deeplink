/**
 * If authenticated, redirect to the path and query string stored in local storage.
 * If not authenticated, store the current path and query string in local storage and redirect to the login page.
 *
 * @param loginUrl The URL to redirect to if the user is not authenticated
 */
export declare function deeplink(loginUrl: string): Promise<void>;
//# sourceMappingURL=deeplink.d.ts.map