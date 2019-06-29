import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, gender: string,salary :any): string {
    if(gender.toLowerCase() == 'male'){
      return 'Mr. '+ value;
    }else{
      return 'Miss. '+ value;
    }

  }

}
