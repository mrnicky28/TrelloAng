import { Component } from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
        <div class="overlay">
            <div class="center">
                <mat-spinner></mat-spinner>
            </div>
        </div>
    `,
    styles: [
        `
            .center {
                position: absolute;
                top: 50%;
                left: 50%;
                -moz-transform: translateX(-50%) translateY(-50%);
                -webkit-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
            }
            .overlay {
                height: 100vh;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.286);
                z-index: 10;
                top: 0;
                left: 0;
                position: fixed;
            }
        `,
    ],
})
export class LoadingComponent {}
