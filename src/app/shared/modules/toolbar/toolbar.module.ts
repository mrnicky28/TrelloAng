import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
    declarations: [ToolbarComponent],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [ToolbarComponent],
})
export class ToolbarModule {}
