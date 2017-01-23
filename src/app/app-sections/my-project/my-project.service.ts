import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, AuthMethods } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MyProjectService {


  sub: any;
  db;
  id;
  userId;
  project={
    info: "",
  };
  constructor( private route: ActivatedRoute, af: AngularFire) {
    af.auth.subscribe( auth =>
      this.userId = auth.uid
    );
    this.route = route;
    this.sub = this.route.params.subscribe(params => this.id = params['id']);
    this.db = af.database.list('users/'+this.userId+'/projects', { preserveSnapshot: true });
    this.db.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        snapshot.forEach(myproject =>{
          if(myproject.key === this.id){
            this.project.info = myproject.val();
          };
        })
      })
    });
  }

  /*ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
    let id = params['id'];
    console.log("ID " +id);
  });*/

  /*this.db.map( projects => {
    const filtered = projects.filter(project => project.uid=== '-KamS40N02VGAZmmRWBF');
    console.log("Filtered "+filtered);
    this.project = filtered;  })

  }*/


}