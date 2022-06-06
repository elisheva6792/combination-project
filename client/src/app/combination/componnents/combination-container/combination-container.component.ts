import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data/data.service';
import { environment } from 'src/environments/environment';
import { CombinationService } from '../../services/combination.service';

@Component({
  selector: 'app-combination-container',
  templateUrl: './combination-container.component.html',
  styleUrls: ['./combination-container.component.scss']
})
export class CombinationContainerComponent implements OnInit {

  value = 'Clear me';
   combinationCount : number  = 0;
   currentArray : any;
  constructor(private dataService : DataService ,
    private combinationService : CombinationService,
     private router : Router) { }

  ngOnInit(): void {
  }

 
  getN(){
    this.dataService.getAsPromise<any>(
      `${environment.combinationGeneratorApiUrl }/api/combinations/start/${this.value}`
          ).subscribe(response=>{
          this.combinationCount = response;
          debugger;
          this.combinationService.severalPossibleCombinations$.next(this.combinationCount);
          },err=>{

          });
  }
  getData(){
    this.router.navigate([`combination-data/${this.value}`]);
  }

  clear(){
    this.value = '';
    this.combinationCount = 0; 
  }

  getNext(){
    this.dataService.getAsPromise<any>(
      `${environment.combinationGeneratorApiUrl}/api/combinations/getNext`
    ).subscribe(response=>{
    this.currentArray = response;
    debugger;
    },err=>{

    });
  }
}
