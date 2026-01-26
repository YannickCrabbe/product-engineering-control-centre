import { Component, inject, input } from '@angular/core';
import { NgxLuzmoVizItemComponent } from '@luzmo/ngx-embed';
import { LuzmoFlexChart } from '../luzmo-constants';
import { EmbedAuthService } from '../services/embed-auth.service';

@Component({
  selector: 'app-luzmo-chart',
  imports: [NgxLuzmoVizItemComponent],
  template: `
    <luzmo-viz-item [style.height]="height()"
      [authKey]="embedAuth.credentials().key"
      [authToken]="embedAuth.credentials().token"
      [options]="$any(chart().options)"
      [slots]="chart().slots"
      [type]="$any(chart().type)"
      [filters]="$any(chart().filters)"
      [appServer]="embedAuth.appServer"
      [apiHost]="embedAuth.apiUrl">
    </luzmo-viz-item>
  `,
})
export class LuzmoChartComponent {
  readonly chart = input.required<LuzmoFlexChart>();
  readonly height = input('350px');

  protected readonly embedAuth = inject(EmbedAuthService);
}
