import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { environment } from 'src/environments/environment';
import { PaginationQuery } from '../../models/paginationQuery';
import { CombinationService } from '../../services/combination.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-combination-grid',
  templateUrl: './combination-grid.component.html',
  styleUrls: ['./combination-grid.component.scss']
})
export class CombinationGridComponent implements OnInit {


  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private combinationService: CombinationService,
    private dataService: DataService) { }

  displayedColumns: string[] = ['combination'];
  dataSource: any;
  resultsLength: number = 0;
  paginationQuery = new PaginationQuery();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentN: number = 0;
  activeRouteTabSubscription: Subscription | null = null;;

  ngOnInit(): void {

    this.activeRouteTabSubscription = this.activeRoute.params.subscribe((urlParameters) => {
      this.currentN = urlParameters['n'];
    });
    this.initData(this.paginationQuery);
  }



  private initData(paginationQuery: PaginationQuery) {
    this.dataService.getAsPromise<any>(
      `${environment.combinationGeneratorApiUrl}/api/combinations/${this.currentN}/${this.paginationQuery.pageIndex}/${this.paginationQuery.pageSize}`

    ).subscribe(response => {
      this.dataSource = response.map((item: any) => {
        return {
          combination: item
        }
      })
      this.setPaginator();

    }, err => {

    });
  }
  private setPaginator() {
    this.dataSource.paginator = this.paginator;
    this.combinationService.severalPossibleCombinations$.subscribe(item => {
      this.resultsLength = item;
    })
    this.dataSource.paginator._intl.itemsPerPageLabel = ' ';
  }


  onPageChanged(paginationQuery: any) {
    this.paginationQuery.pageIndex = paginationQuery.pageIndex;
    this.initData(this.paginationQuery);
  }

  navigate() {
    this.router.navigate(['combination']);
  }

}
