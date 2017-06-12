import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']  
})

export class ProjectsComponent {

  projectsTabsData = [
		{
			"title": "Base",
			"link" : "/projects/base"
		},
		{
			"title": "Personal",
			"link" : "/projects/personal"
		},
		{
			"title": "Pro",
			"link" : "/projects/pro"
		},
		{
			"title": "Social",
			"link" : "/projects/social"
		},
	];

  pageTitle= "My Projects";
  
  constructor() {}

  ngOnInit() {}

}