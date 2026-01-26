import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Services
import { EmbedAuthService } from './services/embed-auth.service';
import { ChartStateService } from './services/chart-state.service';

// Components
import { HeaderComponent } from './header/header';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel';
import { LuzmoChartComponent } from './luzmo-chart/luzmo-chart';
import { DateLevelToggleComponent } from './toggles/date-level-toggle';
import { SquadFilterToggleComponent } from './toggles/squad-filter-toggle';
import { PrLevelToggleComponent } from './toggles/pr-level-toggle';
import { TerminalChatComponent } from './terminal-chat/terminal-chat';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    DashboardPanelComponent,
    LuzmoChartComponent,
    DateLevelToggleComponent,
    SquadFilterToggleComponent,
    PrLevelToggleComponent,
    TerminalChatComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  // Services exposed to template
  protected readonly embedAuth = inject(EmbedAuthService);
  protected readonly chartState = inject(ChartStateService);

  // Local state
  protected readonly title = signal('devops_command');

  ngOnInit(): void {
    this.embedAuth.fetchCredentials();
  }
}
