import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
	return document.getElementsByTagName('base')[0].href;
}

// We use Github for static data to save on Azure spending
export function getBaseGithubUrl() {
	return 'https://raw.githubusercontent.com/LewisJohnson/WKBREED-Serverless/master/WKBREED/src/';
}

const providers = [
	{ provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
	{ provide: 'GITHUB_BASE_URL', useFactory: getBaseGithubUrl, deps: [] }
];

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
	.catch(err => console.log(err));
