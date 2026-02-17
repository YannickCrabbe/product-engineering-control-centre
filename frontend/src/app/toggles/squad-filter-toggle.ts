import { Component, inject } from '@angular/core';
import { ChartStateService } from '../services/chart-state.service';

@Component({
  selector: 'app-squad-filter-toggle',
  template: `
    <div class="btn-group-terminal">
      <button
        [class.active]="chartState.isSquadActive('Forge')"
        (click)="chartState.toggleSquad('Forge')"
      >FORGE</button>
      <button
        [class.active]="chartState.isSquadActive('Orbit')"
        (click)="chartState.toggleSquad('Orbit')"
      >ORBIT</button>
      <button
        [class.active]="chartState.isSquadActive('Horizon')"
        (click)="chartState.toggleSquad('Horizon')"
      >HORIZON</button>
    </div>
  `,
})
export class SquadFilterToggleComponent {
  protected readonly chartState = inject(ChartStateService);
}