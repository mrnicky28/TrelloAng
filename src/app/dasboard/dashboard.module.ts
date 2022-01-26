import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/modules/material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, MaterialModule],
    exports: [DashboardComponent],
})
export class DashboardModule {}
