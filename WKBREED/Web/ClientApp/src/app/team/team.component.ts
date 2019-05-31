import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.css'],
})

export class TeamComponent {
	public teamMembers: TeamMember[];
	public selectedTeamMember: TeamMember;

	onSelect(teamMember: TeamMember): void {
		this.selectedTeamMember = teamMember;

		for (var i = 0; i < this.teamMembers.length; i++) {
			let tempMem = this.teamMembers[i];

			$("#v-pills-" + tempMem.Slug + "-tab").removeClass("active");
			$("#v-pills-" + tempMem.Slug).removeClass("active").removeClass("show");
		}

		$("#v-pills-" + this.selectedTeamMember.Slug + "-tab").addClass("active");

		setTimeout(function (slug) {
			$("#v-pills-" + slug).addClass("active").addClass("show");
		}, 200, this.selectedTeamMember.Slug);
	}

	constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		http.get<TeamJson>(baseUrl + 'assets/data/Team.json').subscribe(result => {
			this.teamMembers = result.teamMembers;
			this.selectedTeamMember = this.teamMembers[0];
		}, error => console.error(error));
	}
}

interface TeamJson {
	teamMembers: TeamMember[]
}

interface TeamMember {
	Name: string;
	Slug: string;
}
