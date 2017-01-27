import { Component }        from '@angular/core';
import { ProjectsService }  from './../projects.service';
import { Router }           from '@angular/router';
declare var firebase: any;

let colors = ['orange', 'blue', 'red', 'violet', 'green'];
let rand = Math.floor(Math.random()*4);

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css', '../../../shared/styles/modal.css'],
  
})

export class AddProjectComponent {
  db;
  project;
  userId;
  modalState=false;

  constructor(private projectsservice: ProjectsService, private router: Router) {
    this.db = projectsservice.db;
    this.userId = projectsservice.userId;
  }

  addProject(a:"none",b:"none", c) {
      this.project = {"title": a, "summary": b, "category": c, "color":colors[rand], "dateAdded": new Date().getTime()};
      this.db.list('/users/'+this.userId+'/projects/'+c).push(this.project);
      this.modalState = false;
      this.router.navigateByUrl('/projects/'+c);
  };

  reset(a,b,c){
    a = ''; b='', c='';
  }

  ngOnInit() { }

}