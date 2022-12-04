<h1 align="center">Easy Auth deeplink</h1>

<p align="center">Enable deeplinking with Azure Easy Auth</p>

<p align="center">
	<a href="https://www.npmjs.com/package/easyauth-deeplink">
		<img alt="npm version" src="https://img.shields.io/npm/v/easyauth-deeplink.svg" />
	</a>
	<a href="https://www.npmjs.com/package/easyauth-deeplink">
		<img alt="Downloads" src="http://img.shields.io/npm/dm/easyauth-deeplink.svg" />
	</a>
	<img alt="node version" src="http://img.shields.io/node/v/easyauth-deeplink.svg" />
	<img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-21bb42.svg" />
	<a href="https://github.com/johnnyreilly/easyauth-deeplink/blob/main/.github/CODE_OF_CONDUCT.md">
		<img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-contributor_covenant-21bb42" />
	</a>
	<a href="https://github.com/johnnyreilly/easyauth-deeplink/blob/main/LICENSE.md">
	    <img alt="License: MIT" src="https://img.shields.io/github/license/johnnyreilly/easyauth-deeplink?color=21bb42">
    </a>
	<a href="https://github.com/sponsors/johnnyreilly">
    	<img alt="Sponsor: On GitHub" src="https://img.shields.io/badge/sponsor-on_github-21bb42.svg" />
    </a>
    <img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
</p>

## What is `easyauth-deeplink`?

Azure Static Web Apps support [EasyAuth](https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization) for simple authentication. However, [deeplinking is not meaningfully supported](https://github.com/Azure/static-web-apps/issues/435) - when you are redirected back to your app after authentication you lose query parameters from the URL which is a problem if you want to use deeplinking.

This package implements a workaround which allows you to use query parameters with EasyAuth. It works like this:

- it checks whether a user is authenticated
- if they are not, it:
  - stores the path and query string in localStorage and
  - redirects them to the login page
- when they return post-authentication it retrieves the path and query string from localStorage and sets the URL to that

nb: `easyauth-deeplink` requires that anonymous access to your site is allowed so it can harvest the path / query to redirect to. We advise that you apply security at the API layer and to any secure data within your app.

[To learn more, read this blog post](https://blog.johnnyreilly.com/2022/12/04/azure-static-web-apps-easyauth-deeplink).

## Usage

You use `easyauth-deeplink` as the first action that runs before your app renders. This means that the approach should be framework agnostic. `easyauth-deeplink` been tested with React and Azure Static Web Apps.

```shell
npm i easyauth-deeplink
```

```ts
import { deeplink } from "easyauth-deeplink";

function main() {
	// code that starts your application
}

deeplink("/.auth/login/aad").then(main);
// or
deeplink("/.auth/login/github").then(main);
// or
deeplink("/.auth/login/twitter").then(main);
// or
deeplink("/.auth/login/google").then(main);
// etc
```

## API

The `deeplink` function takes a single parameter which is the URL to redirect to for authentication. It either triggers the authentication flow or returns a `Promise` which resolves when the route has been set to the deep linked URL.

```ts
/**
 * If authenticated, redirect to the path and query string stored in local storage.
 * If not authenticated, store the current path and query string in local storage and redirect to the login page.
 *
 * @param loginUrl The URL to redirect to if the user is not authenticated
 */
export async function deeplink(loginUrl: string): Promise<void> {
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).

Thanks! ❤️🌻
