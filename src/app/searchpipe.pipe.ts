import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(array: any[], searchText: any): any {
    if (searchText) {
      let searchTlower=searchText.toLowerCase()
       return array.filter((x:any) => x.name.toLowerCase().includes(searchTlower) || x.description.toLowerCase().includes(searchTlower)|| x.quantity.toLowerCase().includes(searchTlower));  
     } else {
       return array;
     }
    }
}
