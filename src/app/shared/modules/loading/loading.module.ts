import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './components/loading.component';

@NgModule({
    declarations: [LoadingComponent],
    imports: [CommonModule, MaterialModule],
    exports: [LoadingComponent],
})
export class LoadingModule {}
