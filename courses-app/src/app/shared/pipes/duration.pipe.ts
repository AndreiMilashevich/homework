import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(input: number): string {
    const mins = input % 60;
    const hours = Math.trunc(input / 60);
    const units = hours > 1 ? 'hours' : 'hour';
    return `${hours / 10 >= 1 ? hours : '0' + hours}:${mins / 10 >= 1 ? mins : '0' + mins} ${units}`;
  }

}
