import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor() { }

  getData() {
    alert('service data');
  }


}
