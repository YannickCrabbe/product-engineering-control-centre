import { FilterGroup, VizItemOptions, VizItemSlot, VizItemType } from "@luzmo/dashboard-contents-types";
import { LUZMO_CONTROL_CENTRE_LOADER_OPTIONS, LUZMO_CONTROL_CENTRE_THEME } from "./luzmo-theme.config";

type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  : T;

export type LuzmoFlexChart = {
  id?: string;
  type: VizItemType;
  slots: VizItemSlot[];
  options: DeepPartial<VizItemOptions>;
  filters?: FilterGroup[];
}

export const GITHUB_PRS_DATASET_ID = 'f9adf19c-8293-44c5-93e3-ab9df8b323a8';
export const JIRA_TASKS_DATASET_ID = 'e096693e-76eb-4d42-9619-9f59cbda0a4c';
export const JIRA_BUGS_DATASET_ID = 'c5a86239-4357-4913-b401-e13f027cebe8';
export const BUG_TICKETS_DATE_COLUMN_ID = '75ed3d30-8048-4e1b-9944-142f6cb05339';
export const BUG_TICKETS_SQUAD_COLUMN_ID = '9aca72bf-3d0c-479f-8420-fd0a92c432be';
export const BUG_TICKETS_SQUAD_DATASET_ID = 'e096693e-76eb-4d42-9619-9f59cbda0a4c';

export type Squad = 'READY' | 'CREATE' | 'ENGAGE';

export const BUGS_DELTA_CHART: LuzmoFlexChart = {
  type: 'column-chart',
  slots: [
    {
      name: 'measure',
      content: [
        {
          column: '53433015-5dfc-4496-b86e-7a92a1273b2b',
          set: 'c5a86239-4357-4913-b401-e13f027cebe8',
          label: {
            en: 'Delta'
          },
          type: 'numeric',
          subtype: null,
          format: ',.0af',
          lowestLevel: 0,
          currency: null,
          aggregationFunc: 'sum'
        }
      ]
    },
    {
      name: 'x-axis',
      content: [
        {
          type: 'datetime',
          datasetId: 'c5a86239-4357-4913-b401-e13f027cebe8',
          set: 'c5a86239-4357-4913-b401-e13f027cebe8',
          columnId: '75ed3d30-8048-4e1b-9944-142f6cb05339',
          column: '75ed3d30-8048-4e1b-9944-142f6cb05339',
          label: {
            en: 'Date'
          },
          lowestLevel: 9,
          format: '%amd~%Y %H:%M:%S.%L',
          level: 3
        }
      ]
    },
    {
      name: 'legend',
      content: []
    }
  ],
  options: {
    theme: { ...LUZMO_CONTROL_CENTRE_THEME },
    loader: { ...LUZMO_CONTROL_CENTRE_LOADER_OPTIONS },
    mode: 'grouped',
    categories: {
      colored: false
    },
    grid: {
      x: {
        enabled: false
      },
      y: {
        enabled: false
      }
    },
    axislabels: {
      x: {
        enabled: false,
        position: 'center'
      },
      y: {
        enabled: false,
        position: 'middle'
      }
    },
    axis: {
      x: {
        ticksMode: 'ticks'
      },
      y: {
        ticksMode: 'ticks',
        scale: 'linear'
      }
    },
    bars: {
      label: 'absolute'
    },
    filter: {},
    display: {
      title: false,
      legend: true,
      modeOption: false
    },
    legend: {
      position: 'topRight'
    },
    interactivity: {
      availableExportTypes: [],
      customEvents: undefined,
      customTooltip: undefined,
      exportTypes: [],
      select: true,
      urlConfig: {
        target: '_blank',
        url: undefined
      }
    },
    ranking: {
      active: false,
      direction: 'top',
      number: 10
    },
    limit: {
      number: 500
    },
    sort: {
      by: 'category',
      direction: 'asc'
    },
    title: {
      en: 'Reported/resolved bug delta'
    }
  },
  filters: [
    {
      condition: 'and',
      filters: [
        {
          expression: '? >= ?',
          parameters: [
            {
              column_id: '75ed3d30-8048-4e1b-9944-142f6cb05339',
              dataset_id: 'c5a86239-4357-4913-b401-e13f027cebe8'
            },
            '2024-12-31T23:00:00.000Z'
          ]
        }
      ]
    }
  ]
};

export const OPEN_CLIENT_BUGS_EVOLUTION: LuzmoFlexChart = {
  type: 'line-chart',
  slots: [
    {
      name: 'measure',
      content: [
        {
          column: '968a9b26-6798-4e31-9852-54911bda8324',
          set: 'c5a86239-4357-4913-b401-e13f027cebe8',
          label: {
            en: 'Open client bugs'
          },
          type: 'numeric',
          subtype: null,
          format: ',.0af',
          lowestLevel: 0,
          currency: null,
          aggregationFunc: 'sum'
        }
      ]
    },
    {
      name: 'x-axis',
      content: [
        {
          column: '75ed3d30-8048-4e1b-9944-142f6cb05339',
          set: 'c5a86239-4357-4913-b401-e13f027cebe8',
          label: {
            en: 'Date'
          },
          type: 'datetime',
          subtype: null,
          format: '%amd~%Y %H:%M:%S.%L',
          lowestLevel: 9,
          level: 4,
          currency: null
        }
      ]
    },
    {
      name: 'legend',
      content: []
    }
  ],
  options: {
    theme: { ...LUZMO_CONTROL_CENTRE_THEME },
    loader: { ...LUZMO_CONTROL_CENTRE_LOADER_OPTIONS },
    interpolation: 'linear',
    grid: {
      x: {
        enabled: false
      },
      y: {
        enabled: true,
        style: 'solid',
        opacity: 0.15
      },
      y2: {
        enabled: false
      }
    },
    axislabels: {
      x: {
        enabled: false,
        position: 'center'
      },
      y: {
        enabled: false,
        position: 'middle'
      },
      y2: {
        enabled: false,
        position: 'middle'
      }
    },
    axis: {
      x: {
        ticksMode: 'ticks'
      },
      y: {
        scale: 'linear',
        ticksMode: 'gridlines',
        type: 'default',
        ticksDensity: 'compact'
      },
      y2: {
        active: false,
        measureIndexes: [1],
        scale: 'linear',
        ticksMode: 'ticks',
        type: 'default'
      }
    },
    lines: {
      strokeWidth: 2,
      gradient: false
    },
    markers: {
      enabled: false,
      size: 2
    },
    interactivity: {
      availableExportTypes: [],
      brush: true,
      customEvents: undefined,
      customTooltip: undefined,
      exportTypes: [],
      urlConfig: {
        target: '_blank',
        url: undefined
      }
    },
    display: {
      title: false,
      legend: true
    },
    legend: {
      position: 'bottom'
    },
    filter: {},
    nullBreak: false,
    missingValue: {
      type: 'no'
    },
    limit: {
      number: 10000
    },
    title: {
      en: 'Open client bug queue'
    },
    mode: 'grouped',
    guidelines: {
      lines: [],
      style: {
        type: '0',
        width: '2'
      }
    }
  },
  filters: [
    {
      condition: 'and',
      filters: [
        {
          expression: '? >= ?',
          parameters: [
            {
              column_id: '75ed3d30-8048-4e1b-9944-142f6cb05339',
              dataset_id: 'c5a86239-4357-4913-b401-e13f027cebe8'
            },
            '2024-12-31T23:00:00.000Z'
          ]
        }
      ]
    }
  ]
};

export const CREATED_CLIENT_BUGS: LuzmoFlexChart = {
  type: 'line-chart',
  "slots": [
    {
      "name": "measure",
      "content": [
        {
          "type": "numeric",
          "set": "c5a86239-4357-4913-b401-e13f027cebe8",
          "column": "cf791f2c-3638-4bd7-ac05-abc3cd284ec2",
          "label": {
            "en": "Reported client bugs"
          },
          "lowestLevel": 0,
          "format": ",.0af",
          "id": "05e78d35-84de-45c6-9dc1-43ad2994bed4",
          "aggregationFunc": "sum"
        }
      ]
    },
    {
      "name": "x-axis",
      "content": [
        {
          "type": "datetime",
          "set": "c5a86239-4357-4913-b401-e13f027cebe8",
          "column": "75ed3d30-8048-4e1b-9944-142f6cb05339",
          "label": {
            "en": "Week"
          },
          "lowestLevel": 9,
          "format": "%amd~%Y %H:%M:%S.%L",
          "level": 4,
          "id": "62d10f90-6366-42f9-80df-34234a93074a"
        }
      ]
    },
    {
      "name": "legend",
      "content": []
    }
  ],
  "options": {
    theme: { ...LUZMO_CONTROL_CENTRE_THEME },
    loader: { ...LUZMO_CONTROL_CENTRE_LOADER_OPTIONS },
    "interpolation": "linear",
    "grid": {
      "x": {
        "enabled": false
      },
      "y": {
        "enabled": true,
        "style": "solid",
        "opacity": 0.15
      },
      "y2": {
        "enabled": false
      }
    },
    "axislabels": {
      "x": {
        "enabled": false,
        "position": "center"
      },
      "y": {
        "enabled": false,
        "position": "middle"
      },
      "y2": {
        "enabled": false,
        "position": "middle"
      }
    },
    "axis": {
      "x": {
        "ticksMode": "ticks"
      },
      "y": {
        "scale": "linear",
        "ticksMode": "gridlines",
        "type": "default",
        "ticksDensity": "compact"
      },
      "y2": {
        "active": false,
        "measureIndexes": [
          1
        ],
        "scale": "linear",
        "ticksMode": "ticks",
        "type": "default"
      }
    },
    "lines": {
      "strokeWidth": 1,
      "gradient": true
    },
    "markers": {
      "enabled": false,
      "size": 2
    },
    "interactivity": {
      "availableExportTypes": [
        "xlsx",
        "csv",
        "png"
      ],
      "brush": true,
      "customEvents": undefined,
      "customTooltip": undefined,
      "exportTypes": [
        "xlsx",
        "csv",
        "png"
      ],
      "urlConfig": {
        "target": "_blank",
        "url": undefined
      }
    },
    "display": {
      "title": false,
      "legend": true
    },
    "legend": {
      "position": "topRight"
    },
    "filter": {},
    "nullBreak": false,
    "missingValue": {
      "type": "manual",
      "value": 0
    },
    "limit": {
      "number": 10000
    },
    "title": {
      "en": "Newly reported client bugs"
    },
    "guidelines": {
      "lines": [
        {
          "color": "rgba(255, 255, 255, 0.7)",
          "type": "average"
        }
      ],
      "style": {
        "type": "3,3",
        "width": "1"
      }
    }
  },
  filters: [
    {
      condition: 'and',
      filters: [
        {
          expression: '? >= ?',
          parameters: [
            {
              column_id: '75ed3d30-8048-4e1b-9944-142f6cb05339',
              dataset_id: 'c5a86239-4357-4913-b401-e13f027cebe8'
            },
            '2024-12-31T23:00:00.000Z'
          ]
        }
      ]
    }
  ]
};

export const OPEN_CLIENT_BUGS_LIST: LuzmoFlexChart = {
  type: 'regular-table',
  slots: [
    {
      name: 'columns',
      content: [
        {
          column: '56dfb866-35e4-4440-9615-cec13d5e203d',
          set: 'e096693e-76eb-4d42-9619-9f59cbda0a4c',
          label: {
            en: 'Priority'
          },
          type: 'hierarchy',
          subtype: null,
          lowestLevel: 0,
          level: null,
          id: 'edf73788-eca0-4f98-a31d-6e45152a75cc',
          currency: null
        },
        {
          type: 'hierarchy',
          datasetId: 'e096693e-76eb-4d42-9619-9f59cbda0a4c',
          set: 'e096693e-76eb-4d42-9619-9f59cbda0a4c',
          columnId: '9aca72bf-3d0c-479f-8420-fd0a92c432be',
          column: '9aca72bf-3d0c-479f-8420-fd0a92c432be',
          label: {
            en: 'Squad'
          },
          lowestLevel: 0,
          format: '',
          level: null,
          id: '045a2d0c-520a-4f04-9e7f-221f12899222'
        },
        {
          type: 'datetime',
          datasetId: 'e096693e-76eb-4d42-9619-9f59cbda0a4c',
          set: 'e096693e-76eb-4d42-9619-9f59cbda0a4c',
          columnId: '2cf61f8a-fac0-4220-abbc-3488766d1bc3',
          column: '2cf61f8a-fac0-4220-abbc-3488766d1bc3',
          label: {
            en: 'Create date'
          },
          lowestLevel: 9,
          format: '%d/%m/%Y',
          level: 5,
          id: '699027df-1eed-4be2-ba55-2389ebad824e'
        },
        {
          column: 'd1cebee1-d17f-464d-8800-f713ba03ed81',
          set: 'e096693e-76eb-4d42-9619-9f59cbda0a4c',
          label: {
            en: 'Ticket name'
          },
          type: 'hierarchy',
          subtype: null,
          lowestLevel: 0,
          level: null,
          id: 'ca2c9f7d-2da2-441b-9e01-f2453710666f',
          currency: null
        }
      ]
    }
  ],
  options: {
    theme: { ...LUZMO_CONTROL_CENTRE_THEME },
    loader: { ...LUZMO_CONTROL_CENTRE_LOADER_OPTIONS },
    display: {
      title: false
    },
    tableBorders: {
      type: 'rows',
      width: 1,
      color: 'rgba(237,237,237,0.2)'
    },
    headers: {},
    alternateRowColor: false,
    interactivity: {
      availableExportTypes: [],
      customEvents: undefined,
      exportTypes: [],
      urlConfig: {
        target: '_blank',
        url: undefined
      }
    },
    rowHeight: 32,
    infiniteScrolling: true,
    sortingMode: 'multiColumn' as any,
    limit: {
      number: 10000
    },
    sort: [
      {
        id: '699027df-1eed-4be2-ba55-2389ebad824e',
        set: 'e096693e-76eb-4d42-9619-9f59cbda0a4c',
        column: '2cf61f8a-fac0-4220-abbc-3488766d1bc3',
        direction: 'desc',
        level: 5
      }
    ],
    title: {
      en: 'Open client bug list'
    },
    "columns": [
      {
        "slotContentId": "edf73788-eca0-4f98-a31d-6e45152a75cc",
        "mode": "normal",
        "sortIndex": undefined,
        "sortOrder": undefined,
        "width": {
          "desktop": 83.5
        },
        "textAlign": "left",
        "wrapText": false
      },
      {
        "slotContentId": "045a2d0c-520a-4f04-9e7f-221f12899222",
        "mode": "categoryBadge",
        "sortIndex": undefined,
        "sortOrder": undefined,
        "width": {
          "desktop": 83.5
        },
        "textAlign": "left",
      },
      {
        "slotContentId": "699027df-1eed-4be2-ba55-2389ebad824e",
        "mode": "normal",
        "sortIndex": 1,
        "sortOrder": "desc",
        "width": {
          "desktop": 120
        },
        "textAlign": "left",
      },
      {
        "slotContentId": "ca2c9f7d-2da2-441b-9e01-f2453710666f",
        "mode": "normal",
        "sortIndex": undefined,
        "sortOrder": undefined,
        "width": undefined,
        "textAlign": "left",
        "wrapText": true
      }
    ],
    hiddenColumns: []
  },
  filters: [
    {
      condition: 'and',
      "filters": [
        {
          "expression": "? >= ?",
          "parameters": [
            {
              "column_id": "75ed3d30-8048-4e1b-9944-142f6cb05339",
              "dataset_id": "c5a86239-4357-4913-b401-e13f027cebe8"
            },
            "2024-12-31T23:00:00.000Z"
          ]
        }
      ]
    },
    {
      "condition": "and",
      "filters": [
        {
          "expression": "? in ?",
          "parameters": [
            {
              "column_id": "f702be95-16d2-4735-8d9f-286a62bfb760",
              "dataset_id": "e096693e-76eb-4d42-9619-9f59cbda0a4c",
              "level": 1
            },
            [
              "Client Bug"
            ]
          ]
        },
        {
          "expression": "? not in ?",
          "parameters": [
            {
              "column_id": "a6e480d9-d928-4129-a13d-cd9a3ed59ae0",
              "dataset_id": "e096693e-76eb-4d42-9619-9f59cbda0a4c",
              "level": 1
            },
            [
              "Done",
              "Duplicate",
              "Cannot Reproduce",
              "Wont Do"
            ]
          ]
        },
        {
          "expression": "? in ?",
          "parameters": [
            {
              "column_id": "9aca72bf-3d0c-479f-8420-fd0a92c432be",
              "dataset_id": "e096693e-76eb-4d42-9619-9f59cbda0a4c",
              "level": 1
            },
            [
              "CREATE",
              "ENGAGE",
              "READY"
            ]
          ]
        },
        {
          "expression": "? >= ?",
          "parameters": [
            {
              "column_id": "2cf61f8a-fac0-4220-abbc-3488766d1bc3",
              "dataset_id": "e096693e-76eb-4d42-9619-9f59cbda0a4c"
            },
            "2024-12-31T23:00:00.000Z"
          ]
        }
      ],
    }
  ]
};

export type PrLevel = 'SQUAD' | 'USER' | 'REPO';

export const PR_LEVEL_SQUAD_CONTENT = {
  type: 'hierarchy',
  datasetId: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
  set: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
  columnId: 'ca59b80a-5e3a-4571-9e85-cc5f9ea84f32',
  column: 'ca59b80a-5e3a-4571-9e85-cc5f9ea84f32',
  label: { en: 'Squad' },
  lowestLevel: 0,
  format: '',
  level: 1,
  id: '37130181-f2db-4628-b625-2216b30db6ce'
} as const;

export const PR_LEVEL_USER_CONTENT = {
  type: 'hierarchy',
  datasetId: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
  set: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
  columnId: 'ca59b80a-5e3a-4571-9e85-cc5f9ea84f32',
  column: 'ca59b80a-5e3a-4571-9e85-cc5f9ea84f32',
  label: { en: 'User' },
  lowestLevel: 0,
  format: '',
  level: 2,
  id: 'ac0607f7-deb3-406e-8186-c70c558a8207'
} as const;

export const PR_LEVEL_REPO_CONTENT = {
  type: 'hierarchy',
  datasetId: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
  set: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
  columnId: '476752fe-7d7a-40bd-b111-fb82d2a29302',
  column: '476752fe-7d7a-40bd-b111-fb82d2a29302',
  label: { en: 'Repository' },
  lowestLevel: 0,
  format: '',
  level: null,
  id: '7295169c-4211-43cb-b745-3c45f3c36358'
} as const;

export const PRS_MERGED_BY_SQUAD: LuzmoFlexChart = {
  type: 'sunburst-chart',
  slots: [
    {
      name: 'measure',
      content: [
        {
          type: 'numeric',
          datasetId: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
          set: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
          columnId: '69d07823-0095-4ea5-96fc-03fd3a328477',
          column: '69d07823-0095-4ea5-96fc-03fd3a328477',
          label: {
            en: 'PRs merged'
          },
          lowestLevel: 0,
          format: '.0af',
          id: 'ee9825e8-c13b-4d8d-9797-168c3b018dc2'
        }
      ]
    },
    {
      name: 'levels',
      content: [
        PR_LEVEL_SQUAD_CONTENT,
        PR_LEVEL_USER_CONTENT
      ]
    }
  ],
  options: {
    theme: { ...LUZMO_CONTROL_CENTRE_THEME },
    display: {
      title: false,
      legend: false,
      labels: true
    },
    legend: {
      position: 'right'
    },
    interactivity: {
      availableExportTypes: [],
      customTooltip: null,
      exportTypes: [],
      select: true,
      urlConfig: {
        target: '_blank',
        url: undefined
      }
    },
    filter: {},
    limit: {
      number: 500
    },
    sort: {
      by: 'measure',
      direction: 'desc'
    },
    title: {
      en: 'PRs merged by squad'
    }
  },
  filters: [
    {
      condition: 'and',
      filters: [
        {
          expression: '? >= ?',
          parameters: [
            {
              column_id: '75ed3d30-8048-4e1b-9944-142f6cb05339',
              dataset_id: 'c5a86239-4357-4913-b401-e13f027cebe8'
            },
            '2024-12-31T23:00:00.000Z'
          ]
        }
      ]
    },
    {
      id: '2d8b91ff-88ae-4177-9dc5-fdfcbf0fc7e0',
      origin: 'itemFilter',
      condition: 'and',
      filters: [
        {
          expression: '? not in ?',
          parameters: [
            {
              column_id: 'ca59b80a-5e3a-4571-9e85-cc5f9ea84f32',
              dataset_id: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
              level: 1
            },
            ['_$Unassigned1']
          ]
        }
      ]
    }
  ]
};

export const PRS_PER_REPO: LuzmoFlexChart = {
  type: 'sankey-diagram',
  slots: [
    {
      name: 'source',
      content: [
        {
          type: 'hierarchy',
          datasetId: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
          set: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
          columnId: 'ca59b80a-5e3a-4571-9e85-cc5f9ea84f32',
          column: 'ca59b80a-5e3a-4571-9e85-cc5f9ea84f32',
          label: {
            en: 'Squad'
          },
          lowestLevel: 0,
          format: '',
          level: 1,
          id: '5c0b8e8e-7c6d-4d9c-a5a7-2740ed3a3669'
        }
      ]
    },
    {
      name: 'category',
      content: []
    },
    {
      name: 'measure',
      content: [
        {
          type: 'numeric',
          set: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
          column: '69d07823-0095-4ea5-96fc-03fd3a328477',
          label: {
            en: 'PRs merged'
          },
          lowestLevel: 0,
          format: '.0af',
          id: 'fd317735-0619-4fd8-8990-4bc0f77040aa'
        }
      ]
    },
    {
      name: 'destination',
      content: [
        {
          type: 'hierarchy',
          datasetId: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
          set: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
          columnId: '476752fe-7d7a-40bd-b111-fb82d2a29302',
          column: '476752fe-7d7a-40bd-b111-fb82d2a29302',
          label: {
            en: 'Repository'
          },
          lowestLevel: 0,
          format: '',
          level: null,
          id: 'd2bb4e40-c5c5-45e2-86fe-6b2943ebc566'
        }
      ]
    }
  ],
  options: {
    theme: { ...LUZMO_CONTROL_CENTRE_THEME },
    loader: { ...LUZMO_CONTROL_CENTRE_LOADER_OPTIONS },
    labels: {
      display: true,
      value: false
    },
    display: {
      title: false
    },
    nodes: {
      colored: true
    },
    links: {
      value: false
    },
    interactivity: {
      availableExportTypes: [],
      customEvents: undefined,
      exportTypes: [],
      select: true,
      urlConfig: {
        target: '_blank',
        url: undefined
      }
    },
    alignment: 'justify',
    colors: {
      byCategory: true,
      linkColor: 'gradient'
    },
    filter: {},
    limit: {
      number: 500
    },
    title: {
      en: 'PRs per repository'
    },
    type: 'sankey'
  },
  filters: [
    {
      condition: 'and',
      filters: [
        {
          expression: '? >= ?',
          parameters: [
            {
              column_id: '75ed3d30-8048-4e1b-9944-142f6cb05339',
              dataset_id: 'c5a86239-4357-4913-b401-e13f027cebe8'
            },
            '2024-12-31T23:00:00.000Z'
          ]
        }
      ]
    },
    {
      condition: 'and',
      filters: [
        {
          expression: '? not in ?',
          parameters: [
            {
              column_id: 'ca59b80a-5e3a-4571-9e85-cc5f9ea84f32',
              dataset_id: 'f9adf19c-8293-44c5-93e3-ab9df8b323a8',
              level: 1
            },
            ['_$Unassigned1']
          ],
          properties: {
            type: 'where',
            id: '87d1fdde-c321-411d-b3fb-0ef57234a6d7',
            origin: 'itemFilter'
          }
        }
      ]
    }
  ]
};