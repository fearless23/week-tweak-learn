import { Component, OnInit } from '@angular/core';
import { AddStuffService }  from './../add-stuff.service';

@Component({
  selector: 'app-add-project',
  templateUrl: 'add-project.html'
})

export class AddProjectComponent implements OnInit {

  project;
  title: String;
  summary: String;
  category: String;

  constructor( private ass: AddStuffService) { }

  addProject (a, b, c) {
    this.project = {
      'title': a,
      'summary': b,
      'category': c,
      'dateAdded': new Date().getTime(),
      'tasks': 0,
      'steps': 0,
      'progress': 0,
      'status': 'active',
      'pickedThisWeek': false
    };
    this.ass.projectsDatabase.push(this.project);

  };

  ngOnInit() { }

}
