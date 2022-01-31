import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/authSelectors';

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    isLoggedIn$!: Observable<boolean | null>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.inizializeValue();
    }

    inizializeValue(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    }
}
