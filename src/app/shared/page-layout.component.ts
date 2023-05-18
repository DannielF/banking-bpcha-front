import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: `
    <div class="page-layout">
      <app-nav-bar class="nav-bar"></app-nav-bar>
      <div class="page-layout__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .page-layout {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 100%;
        width: 100%;
      }
      .nav-bar {
        width: 100%;
        height: 20vh;
      }
    `,
  ],
})
export class PageLayoutComponent {}
