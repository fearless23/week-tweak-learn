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
  providers: [ProjectsService]
})

export class AddProjectComponent {
  db;
  project;
  userId;
  modalState=false;
  title;
  summary;
  category;
  constructor(private ps: ProjectsService, private router: Router) {
    
  }

  ngOnInit() {
    this.db = this.ps.db;
    this.userId = this.ps.userId;
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

  

}