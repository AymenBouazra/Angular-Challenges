import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flous'
})
export class FlousPipe implements PipeTransform {

  transform(value: string): string {
    return '$'+value
  }

}
