import { Pipe, PipeTransform }       from '@angular/core';

@Pipe({name: 'taskFilter'})
export class TaskFilterPipe implements PipeTransform {

  // targetedArray or Passed Array  --- x  -- baseProjects;
  // Item in array has a property   --- y  -- title;
  // Passed value of text           --- z  -- learn painting;
  transform(x) {
    if (!x) {return x; }
    return x.filter(item => item.title === 'taskulta');
  }

}
