import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinationContainerComponent } from './componnents/combination-container/combination-container.component';
import { CombinationRoutingModule } from './combination-routing.module';
import { MaterialModule } from 'src/matrial/matrial.module';
import { FormsModule } from '@angular/forms';
import { CombinationGridComponent } from './componnents/combination-grid/combination-grid.component';



@NgModule({
  declarations: [
    CombinationContainerComponent,
    CombinationGridComponent
  ],
  imports: [
    CommonModule,
    CombinationRoutingModule,
     MaterialModule,
     FormsModule
    
  ]
})
export class CombinationModule { }
