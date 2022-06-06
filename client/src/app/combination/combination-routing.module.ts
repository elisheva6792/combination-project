import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationContainerComponent } from './componnents/combination-container/combination-container.component';
import { CombinationGridComponent } from './componnents/combination-grid/combination-grid.component';


export const routes: Routes = [
  { path: '', redirectTo: 'combination' },
  { path: 'combination', component: CombinationContainerComponent },
  { path: 'combination-data/:n', component: CombinationGridComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinationRoutingModule { }
