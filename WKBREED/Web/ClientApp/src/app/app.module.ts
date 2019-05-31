import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { TeamComponent } from './team/team.component';
import { FetchTourDatesComponent } from './fetch-tour-dates/fetch-tour-dates.component';

@NgModule({
	declarations: [
		AppComponent,
		NavMenuComponent,
		HomeComponent,
		SpotifyComponent,
		TeamComponent,
		FetchTourDatesComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, pathMatch: 'full' },
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
