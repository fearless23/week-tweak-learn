import { Component } from '@angular/core';
import { MyProjectService} from './my-project.service';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  providers: [MyProjectService]
})

export class MyProjectComponent {
  tabsData = [
		{
			"title": "Overview",
			"link" : "./"
		},
		{
			"title": "Steps",
			"link" : "./steps"
		},
		{
			"title": "Files",
			"link" : "./a"
		},
		{
			"title": "Settings",
			"link" : "./b"
		},
	];

	title;
  constructor( private mps: MyProjectService) {}

	ngOnInit(){
		this.mps.myProject.subscribe(	data => this.title = data.title );
	} 
}