import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationModule } from './combination/combination.module';

const routes: Routes = [

//   loadChildren: () =>
//   import(
//     './combination/combination.module'
// ).then((m) => m.CombinationModule)
  
{
  path: '',
  loadChildren: () => CombinationModule,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
