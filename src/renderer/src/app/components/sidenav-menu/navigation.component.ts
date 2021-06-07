import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport
          (click)="drawer.toggle()"
          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="(isHandset$ | async) === false">
        <mat-toolbar>Διαχείριση</mat-toolbar>
        <mat-nav-list>
          <div>
            <a mat-list-item href="#"><i class="fas fa-gas-pump"></i>Πρατήρια</a>
          </div>
          <div>
            <a mat-list-item href="#">Πρατήρια1</a>
          </div>
          <div>
            <a mat-list-item href="#">Πρατήρια</a>
          </div>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span>renderer</span>
        </mat-toolbar>
        <!-- Add Content Here -->
      </mat-sidenav-content>
    </mat-sidenav-container>
    
  `,
  styles: [`
    .sidenav-container {
      height: 100%;
    }
    
    .sidenav {
      width: 200px;
    }
    
    .sidenav .mat-toolbar {
      background: inherit;
    }
    
    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }
    
  `]
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
