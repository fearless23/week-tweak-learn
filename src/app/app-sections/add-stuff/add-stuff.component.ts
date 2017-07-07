import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-stuff',
  templateUrl: './add-stuff.html'
})

export class AddStuffComponent implements OnInit {

  pageTitle = 'Add Stuff';
  addStuffTabsData = [
    {
      'title': 'Project',
      'link' : './add-project'
    },
    {
      'title': 'Step',
      'link' : './add-step'
    },
    {
      'title': 'Task',
      'link' : './add-task'
    },
  ]
  constructor() { }

  ngOnInit() { }
}
