import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyClone'
})
export class CurrencyClonePipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    switch (args[0]) {
      case 'INR':
        return `INR ${value} ${args[1]}`;
      case 'EUR':
        return `EUR ${value} ${args[1]}`;
      default:
        return 'Unknown currency';
    }
  }
}
