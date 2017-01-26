import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'genre',
  pure: false
})
export class GenrePipe implements PipeTransform {

  transform(input: Project[], desiredGenre) {
    var output: Project[] = [];
    if (desiredGenre === "dog") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].genre === "dog") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "cat") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].genre === "cat") {
          output.push(input[i]);
        }
      }
      return output
    } else {
      return input;
    }
  }

}
