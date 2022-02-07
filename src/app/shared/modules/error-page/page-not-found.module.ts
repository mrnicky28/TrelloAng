import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found.component';

const routes: Routes = [
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [RouterModule.forChild(routes)],
    exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
