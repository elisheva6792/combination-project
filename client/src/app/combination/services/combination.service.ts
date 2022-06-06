import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombinationService {


  // severalPossibleCombinations : number = 0;
  public severalPossibleCombinations$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }
}
