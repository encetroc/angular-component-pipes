import { Pipe, PipeTransform } from "@angular/core";
/*
 * take's what ever element in the array that has primary = true
 * and put it at the start of the array
 */
@Pipe({ name: "primary" })
export class PrimaryPipe implements PipeTransform {
  transform(value: any[]): any[] {
    const index = value.findIndex(el => el.primary);
    const primaryElement = value[index];
    value.splice(index, 1);
    value.unshift(primaryElement);
    return value;
  }
}
