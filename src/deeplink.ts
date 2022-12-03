const deeplinkPathAndQueryKey = "deeplink:pathAndQuery";

/**
 * If authenticated, redirect to the path and query string stored in local storage.
 * If not authenticated, store the current path and query string in local storage and redirect to the login page.
 *
 * @param loginUrl The URL to redirect to if the user is not authenticated
 */
export async function deeplink(loginUrl: string) {
    await deeplinkImpl(loginUrl, localStorage, history, location, console);
}

async function deeplinkImpl(
    loginUrl: string,
    localStorage: Storage,
    history: History,
    location: Location,
    console: Console
) {
    const pathAndQuery = location.pathname + location.search;
    console.log(`deeplink: URL before: ${pathAndQuery}`);

    const isAuth = await isAuthenticated();

    if (isAuth) {
        const deeplinkPathAndQuery = localStorage.getItem(
            deeplinkPathAndQueryKey
        );
        if (pathAndQuery === "/" && deeplinkPathAndQuery) {
            console.log(`deeplink: Redirecting to ${deeplinkPathAndQuery}`);
            localStorage.removeItem(deeplinkPathAndQueryKey);
            history.replaceState(null, "", deeplinkPathAndQuery);
        }
    } else {
        console.log(`deeplink: Storing redirect URL of ${pathAndQuery}`);
        localStorage.setItem(deeplinkPathAndQueryKey, pathAndQuery);
        location.href = loginUrl;
    }

    console.log(`deeplink: URL after: ${location.pathname + location.search}`);
}

async function isAuthenticated() {
    try {
        const response = await fetch("/.auth/me");
        const authMe: AuthMe = await response.json();
        const isAuth = authMe.clientPrincipal !== null;
        return isAuth;
    } catch (error) {
        console.error("Failed to fetch /.auth/me", error);
        return false;
    }
}
