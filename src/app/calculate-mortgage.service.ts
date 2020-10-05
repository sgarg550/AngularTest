import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalculateMortgageService {

  constructor() { }

  public Calculate($formval): any {
    const res: any[] = [{val_1: 11, val_2: 345, val_3: '$1200', val2: '$120', val_4: '$10', val_5: '$56', val_6: '$10', val_7: '$56'}];
    return res;
  }
}
