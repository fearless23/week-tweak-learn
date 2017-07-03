import { Pipe, PipeTransform }       from '@angular/core';

@Pipe({name: 'filterArray'})
export class FilterPipe implements PipeTransform {

  // targetedArray or Passed Array  --- x  -- baseProjects;
  // Item in array has a property   --- y  -- title;
  // Passed value of text           --- z  -- learn painting;
  transform(x, y, z) {
    if (!x) { return x; };
    return x.filter(item => item.y === z);
  }

}
