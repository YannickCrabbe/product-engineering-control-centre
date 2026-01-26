import { Component, inject } from '@angular/core';
import { ChartStateService } from '../services/chart-state.service';
import { Squad } from '../luzmo-constants';

@Component({
  selector: 'app-squad-filter-toggle',
  template: `
    <div class="btn-group-terminal">
      <button
        [class.active]="chartState.isSquadActive('READY')"
        (click)="chartState.toggleSquad('READY')"
      >READY</button>
      <button
        [class.active]="chartState.isSquadActive('CREATE')"
        (click)="chartState.toggleSquad('CREATE')"
      >CREATE</button>
      <button
        [class.active]="chartState.isSquadActive('ENGAGE')"
        (click)="chartState.toggleSquad('ENGAGE')"
      >ENGAGE</button>
    </div>
  `,
})
export class SquadFilterToggleComponent {
  protected readonly chartState = inject(ChartStateService);
}
