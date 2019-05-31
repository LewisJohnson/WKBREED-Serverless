import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-fetch-tour-dates',
	templateUrl: './fetch-tour-dates.component.html',
	styleUrls: ['./fetch-tour-dates.component.css']
})

export class FetchTourDatesComponent {
	public tourDates: TourDate[];

	constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		http.get<TourDateJson>(baseUrl + 'assets/data/TourDates.json').subscribe(result => {
			this.tourDates = result.tours;
		}, error => console.error(error));
	}
}

interface TourDateJson {
	tours: TourDate[]
}

interface TourDate {
	Venue: string;
	Location: string;
	Date: string;
	TicketUrl: string;
}
