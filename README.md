<h1 align="center">Easy Auth deeplink</h1>

<p align="center">Enable deeplinking with Azure Easy Auth</p>

<p align="center">
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors">
		<img alt="All Contributors" src="https://img.shields.io/badge/all_contributors-1-21bb42.svg" />
	</a>
	<!-- ALL-CONTRIBUTORS-BADGE:END -->
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

## What is this?

Azure Static Web Apps support [EasyAuth](https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization) for simple authentication. However, [deeplinking is not meaningfully supported](https://github.com/Azure/static-web-apps/issues/435) - when you are redirected back to your app after authentication you lose query parameters from the URL which is a problem if you want to use deeplinking.

This package implements a workaround which allows you to use query parameters with EasyAuth. It works like this:

- it checks whether a user is authenticated
- if they are not, it:
  - stores the path and query string in localStorage and
  - redirects them to the login page
- when they return post-authentication it retrieves the path and query string from localStorage and sets the URL to that

You use this as the first action that runs before your app renders. This means that the approach should be framework agnostic. It's been tested with React.

## Usage

```shell
npm i easyauth-deeplink
```

```ts
import { deeplink } from "easyauth-deeplink";

function main() {
	// code that starts your application
}

deeplink("/login").then(main);
```

## API

```ts
/**
 * If authenticated, redirect to the path and query string stored in local storage.
 * If not authenticated, store the current path and query string in local storage and redirect to the login page.
 *
 * @param loginUrl The URL to redirect to if the user is not authenticated
 */
export async function deeplink(loginUrl: string) {
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).
Thanks! 💖

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- spellchecker: disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="https://github.com/johnnyreilly/easyauth-deeplink/issues?q=author%3AJoshuaKGoldberg" title="Bug reports">🐛</a> <a href="https://github.com/johnnyreilly/easyauth-deeplink/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="#example-JoshuaKGoldberg" title="Examples">💡</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#platform-JoshuaKGoldberg" title="Packaging/porting to new platform">📦</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="https://github.com/johnnyreilly/easyauth-deeplink/pulls?q=is%3Apr+reviewed-by%3AJoshuaKGoldberg" title="Reviewed Pull Requests">👀</a> <a href="#security-JoshuaKGoldberg" title="Security">🛡️</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a> <a href="https://github.com/johnnyreilly/easyauth-deeplink/commits?author=JoshuaKGoldberg" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://sinchang.me"><img src="https://avatars.githubusercontent.com/u/3297859?v=4?s=100" width="100px;" alt="Jeff Wen"/><br /><sub><b>Jeff Wen</b></sub></a><br /><a href="#tool-sinchang" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- spellchecker: enable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
