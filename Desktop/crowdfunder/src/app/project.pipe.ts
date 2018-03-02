import {Pipe, PipeTransform} from '@angular/core';
import {Project} from './project.model';

@Pipe({
  name: "goal",
  pure: false
})


export class ProjectPipe implements PipeTransform {

transform(input: Project[], desiredGoal) {
  var output: Project[] = [];
  if(desiredGoal === "lowGoalProjects") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].goal <= 49999) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredGoal === "highGoalProjects") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].goal >= 50000) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}

}
