import { AuthMe } from "./types";

const deeplinkPathAndQueryKey = "deeplink:pathAndQuery";

/**
 * If authenticated, redirect to the path and query string stored in local storage.
 * If not authenticated, store the current path and query string in local storage and redirect to the login page.
 *
 * @param loginUrl The URL to redirect to if the user is not authenticated
 */
export async function deeplink(loginUrl: string) {
	if (!loginUrl) {
		throw new Error("loginUrl is required");
	}

	const pathAndQuery = location.pathname + location.search;
	console.log(`deeplink: URL before: ${pathAndQuery}`);

	const deeplinkPathAndQuery = localStorage.getItem(deeplinkPathAndQueryKey);

	const isAuth = await isAuthenticated();

	if (isAuth) {
		if (deeplinkPathAndQuery && pathAndQuery === "/") {
			console.log(`deeplink: Redirecting to ${deeplinkPathAndQuery}`);
			localStorage.removeItem(deeplinkPathAndQueryKey);
			history.replaceState(null, "", deeplinkPathAndQuery);
		}
	} else if (!deeplinkPathAndQuery) {
		if (pathAndQuery !== "/" && pathAndQuery !== loginUrl) {
			console.log(
				`deeplink: Storing redirect URL of ${pathAndQuery} and redirecting to ${loginUrl}`
			);
			localStorage.setItem(deeplinkPathAndQueryKey, pathAndQuery);
			location.href = loginUrl;
		} else {
			console.log(`deeplink: Redirecting to ${loginUrl}`);
			location.href = loginUrl;
		}
	}
}

async function isAuthenticated() {
	try {
		const response = await fetch("/.auth/me");
		const authMe = (await response.json()) as AuthMe;
		const isAuth = authMe.clientPrincipal !== null;
		return isAuth;
	} catch (error) {
		console.error("Failed to fetch /.auth/me", error);
		return false;
	}
}
