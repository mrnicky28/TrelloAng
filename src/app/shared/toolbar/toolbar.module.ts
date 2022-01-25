import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
    declarations: [ToolbarComponent],
    imports: [CommonModule, MaterialModule],
    exports: [ToolbarComponent],
})
export class ToolbarModule {}
