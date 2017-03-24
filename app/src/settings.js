export var settings = {
  basePath: '/dashboard/GBPW_Test_Data',
  doFilterRouting: false,
  dataResources: {
    physicianData: {
      uuid: '302eeb05-8422-4217-8660-1929bfcaae18',
      queries: {
        by_age: {
          group_by: "Age",
          count: "Age",
        },
        by_race: {
          group_by: "Race",
          count: "Race",
        },
        by_gender: {
          group_by: "Gender",
          count: "Gender"
        },
        accept_medicaid: {
          group_by: "Accept Medicaid",
          count: "Accept Medicaid"
        },
        accept_new_medicaid: {
          group_by: "New Medicaid",
          count: "New Medicaid"
        },
        accept_medicare: {
          group_by: "Accept Medicare",
          count: "Accept Medicare"
        },
        accept_new_medicare: {
          group_by: "New Medicare",
          count: "New Medicare"
        },
        by_county: {
          group_by: 'WL1 County',
          sum: ['County1', 'County2', 'County3'],
          count: 'County1'
        },
        by_retiring: {
          group_by: ['Age', 'Retiring?'],
          count: 'Age',
        },
        state_total: {
          count: 'APPLC_NBR'
        }
      },
    },
    addlPhysData: {
      uuid: '302eeb05-8422-4217-8660-1929bfcaae18',
      queries: {
        by_county_2: {
          group_by: ['WL2 County'],
          sum: 'County2'
        },
        by_county_3: {
          group_by: ['WL3 County'],
          sum: 'County3'
        }
      }
    },
    countyData: {
      uuid: '107ff139-55d1-4b3e-8413-800a122bf1b0',
      queries: {
        all: {
          limit: 1000000
        },
      }
    },
    physDataCounty2: {
      uuid: '302eeb05-8422-4217-8660-1929bfcaae18',
      queries: {
        by_county_2: {
          group_by: 'WL2 County',
          sum: ['County1', 'County2', 'County3'],
          count: 'County2',
          filters: [
            {
              field: 'WL1 County',
              value: ['NULL']
            }
          ]
        }
      }
    }
  },
  vars: {
    countyField: 'WL1 County'
  },
  faPath: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  regions: [
    {
      id: "dashboard-header",
      className: "row",
      children: [
        {
          type: 'Markup',
          cardStyle: 'table',
          iconClass: '',
          header: 'Physician Workforce Data',
          className: 'col-md-12',
        }
      ]
    },
    {
      id: 'filters-row',
      className: 'row filters-row',
      children: [
        {
          type: 'Autocomplete',
          className: 'col-md-6 county-autocomplete',
          name: 'county-autocomplete',
          id: 'county-autocomplete',
          field: 'WL1 County',
          willFilter: ['physicianData'], // array of dkanDataResources keys that filters affect
          disabledBy: ['MSA'],
          multi: true,
          data: [
						[
							{
								"label":"Appling",
								"value":"1"
							},
							{
								"label":"Atkinson",
								"value":"2"
							},
							{
								"label":"Bacon",
								"value":"3"
							},
							{
								"label":"Baker",
								"value":"4"
							},
							{
								"label":"Baldwin",
								"value":"5"
							},
							{
								"label":"Banks",
								"value":"6"
							},
							{
								"label":"Barrow",
								"value":"7"
							},
							{
								"label":"Bartow",
								"value":"8"
							},
							{
								"label":"Ben Hill",
								"value":"9"
							},
							{
								"label":"Berrien",
								"value":"10"
							},
							{
								"label":"Bibb",
								"value":"11"
							},
							{
								"label":"Bleckley",
								"value":"12"
							},
							{
								"label":"Brantley",
								"value":"13"
							},
							{
								"label":"Brooks",
								"value":"14"
							},
							{
								"label":"Bryan",
								"value":"15"
							},
							{
								"label":"Bulloch",
								"value":"16"
							},
							{
								"label":"Burke",
								"value":"17"
							},
							{
								"label":"Butts",
								"value":"18"
							},
							{
								"label":"Calhoun",
								"value":"19"
							},
							{
								"label":"Camden",
								"value":"20"
							},
							{
								"label":"Candler",
								"value":"21"
							},
							{
								"label":"Carroll",
								"value":"22"
							},
							{
								"label":"Catoosa",
								"value":"23"
							},
							{
								"label":"Charlton",
								"value":"24"
							},
							{
								"label":"Chatham",
								"value":"25"
							},
							{
								"label":"Chattahoochee",
								"value":"26"
							},
							{
								"label":"Chattooga",
								"value":"27"
							},
							{
								"label":"Cherokee",
								"value":"28"
							},
							{
								"label":"Clarke",
								"value":"29"
							},
							{
								"label":"Clay",
								"value":"30"
							},
							{
								"label":"Clayton",
								"value":"31"
							},
							{
								"label":"Clinch",
								"value":"32"
							},
							{
								"label":"Cobb",
								"value":"33"
							},
							{
								"label":"Coffee",
								"value":"34"
							},
							{
								"label":"Colquitt",
								"value":"35"
							},
							{
								"label":"Columbia",
								"value":"36"
							},
							{
								"label":"Cook",
								"value":"37"
							},
							{
								"label":"Coweta",
								"value":"38"
							},
							{
								"label":"Crawford",
								"value":"39"
							},
							{
								"label":"Crisp",
								"value":"40"
							},
							{
								"label":"Dade",
								"value":"41"
							},
							{
								"label":"Dawson",
								"value":"42"
							},
							{
								"label":"Decatur",
								"value":"43"
							},
							{
								"label":"Dekalb",
								"value":"44"
							},
							{
								"label":"Dodge",
								"value":"45"
							},
							{
								"label":"Dooly",
								"value":"46"
							},
							{
								"label":"Dougherty",
								"value":"47"
							},
							{
								"label":"Douglas",
								"value":"48"
							},
							{
								"label":"Early",
								"value":"49"
							},
							{
								"label":"Echols",
								"value":"50"
							},
							{
								"label":"Effingham",
								"value":"51"
							},
							{
								"label":"Elbert",
								"value":"52"
							},
							{
								"label":"Emanuel",
								"value":"53"
							},
							{
								"label":"Evans",
								"value":"54"
							},
							{
								"label":"Fannin",
								"value":"55"
							},
							{
								"label":"Fayette",
								"value":"56"
							},
							{
								"label":"Floyd",
								"value":"57"
							},
							{
								"label":"Forsyth",
								"value":"58"
							},
							{
								"label":"Franklin",
								"value":"59"
							},
							{
								"label":"Fulton",
								"value":"60"
							},
							{
								"label":"Gilmer",
								"value":"61"
							},
							{
								"label":"Glascock",
								"value":"62"
							},
							{
								"label":"Glynn",
								"value":"63"
							},
							{
								"label":"Gordon",
								"value":"64"
							},
							{
								"label":"Grady",
								"value":"65"
							},
							{
								"label":"Greene",
								"value":"66"
							},
							{
								"label":"Gwinnett",
								"value":"67"
							},
							{
								"label":"Habersham",
								"value":"68"
							},
							{
								"label":"Hall",
								"value":"69"
							},
							{
								"label":"Hancock",
								"value":"70"
							},
							{
								"label":"Haralson",
								"value":"71"
							},
							{
								"label":"Harris",
								"value":"72"
							},
							{
								"label":"Hart",
								"value":"73"
							},
							{
								"label":"Heard",
								"value":"74"
							},
							{
								"label":"Henry",
								"value":"75"
							},
							{
								"label":"Houston",
								"value":"76"
							},
							{
								"label":"Irwin",
								"value":"77"
							},
							{
								"label":"Jackson",
								"value":"78"
							},
							{
								"label":"Jasper",
								"value":"79"
							},
							{
								"label":"Jeff Davis",
								"value":"80"
							},
							{
								"label":"Jefferson",
								"value":"81"
							},
							{
								"label":"Jenkins",
								"value":"82"
							},
							{
								"label":"Johnson",
								"value":"83"
							},
							{
								"label":"Jones",
								"value":"84"
							},
							{
								"label":"Lamar",
								"value":"85"
							},
							{
								"label":"Lanier",
								"value":"86"
							},
							{
								"label":"Laurens",
								"value":"87"
							},
							{
								"label":"Lee",
								"value":"88"
							},
							{
								"label":"Liberty",
								"value":"89"
							},
							{
								"label":"Lincoln",
								"value":"90"
							},
							{
								"label":"Long",
								"value":"91"
							},
							{
								"label":"Lowndes",
								"value":"92"
							},
							{
								"label":"Lumpkin",
								"value":"93"
							},
							{
								"label":"Macon",
								"value":"94"
							},
							{
								"label":"Madison",
								"value":"95"
							},
							{
								"label":"Marion",
								"value":"96"
							},
							{
								"label":"Mcduffie",
								"value":"97"
							},
							{
								"label":"Mcintosh",
								"value":"98"
							},
							{
								"label":"Meriwether",
								"value":"99"
							},
							{
								"label":"Miller",
								"value":"100"
							},
							{"label": "Mitchell",	"value": "101"},
							{"label": "Monroe"	, 	"value": "102"},
							{"label": "Montgomery", "value": "103"},
							{"label": "Morgan"	, 	"value": "104"},
							{"label": "Murray"	, 	"value": "105"},
							{"label": "Muscogee",	"value": "106"},
							{"label": "Newton"	, 	"value": "107"},
							{"label": "Oconee"	, 	"value": "108"},
							{"label": "Oglethorpe", "value": "109"},
							{"label": "Paulding", 	"value": "110"},
							{"label": "Peach"	,	"value": "111"},
							{"label": "Pickens"	, 	"value": "112"},
							{"label": "Pierce"	, 	"value": "113"},
							{"label": "Pike"	, 	"value": "114"},
							{"label": "Polk"	, 	"value": "115"},
							{"label": "Pulaski"	, 	"value": "116"},
							{"label": "Putnam"	, 	"value": "117"},
							{"label": "Quitman"	, 	"value": "118"},
							{"label": "Rabun"	, 	"value": "119"},
							{"label": "Randolph", 	"value": "120"},
							{"label": "Richmond", 	"value": "121"},
							{"label": "Rockdale", 	"value": "122"},
							{"label": "Schley"	, 	"value": "123"},
							{"label": "Screven"	, 	"value": "124"},
							{"label": "Seminole", 	"value": "125"},
							{"label": "Spalding", 	"value": "126"},
							{"label": "Stephens", 	"value": "127"},
							{"label": "Stewart"	, 	"value": "128"},
							{"label": "Sumter"	, 	"value": "129"},
							{"label": "Talbot"	, 	"value": "130"},
							{"label": "Taliaferro", "value": "131"},
							{"label": "Tattnall", 	"value": "132"},
							{"label": "Taylor"	, 	"value": "133"},
							{"label": "Telfair"	, 	"value": "134"},
							{"label": "Terrell"	, 	"value": "135"},
							{"label": "Thomas"	, 	"value": "136"},
							{"label": "Tift"	, 	"value": "137"},
							{"label": "Toombs"	, 	"value": "138"},
							{"label": "Towns"	, 	"value": "139"},
							{"label": "Treutlen", 	"value": "140"},
							{"label": "Troup"	, 	"value": "141"},
							{"label": "Turner"	, 	"value": "142"},
							{"label": "Twiggs"	, 	"value": "143"},
							{"label": "Union"	, 	"value": "144"},
							{"label": "Upson"	, 	"value": "145"},
							{"label": "Walker"	, 	"value": "146"},
							{"label": "Walton"	, 	"value": "147"},
							{"label": "Ware"	, 	"value": "148"},
							{"label": "Warren"	, 	"value": "149"},
							{"label": "Washington", "value": "150"},
							{"label": "Wayne"	, 	"value": "151"},
							{"label": "Webster"	, 	"value": "152"},
							{"label": "Wheeler"	, 	"value": "153"},
							{"label": "White"	, 	"value": "154"},
							{"label": "Whitfield", 	"value": "155"},
							{"label": "Wilcox"	, 	"value": "156"},
							{"label": "Wilkes"	, 	"value": "157"},
							{"label": "Wilkinson", 	"value": "158"},
							{"label": "Worth"	, 	"value": "159"}
						]
          ],
          placeholder: 'Select county...'
        },
        {
          type: 'Autocomplete',
          className: 'col-md-6',
          name: 'specialty-autocomplete',
          id: 'specialty-autocomplete',
          className: 'col-md-6 specialty-autocomplete',
          field: 'Specialty',
          willFilter: ['physicianData'], // array of dkanDataResources keys that filters affect
          data: [
						[
							{ label: "Pediatrics",          value: "18" },
							{ label: "Family Practice",     value: ["6", "06C"] },
							{ label: "Internal Medicine",   value: "7" },
							{ label: "Emergency Medicine",  value: "5" },
							{ label: "General Surgery",     value: "26A" },
							{ label: "Obstetrics / Gynecology",               value: [ "13", "13F", "13B" ] }
            ]
          ],
          placeholder: 'Select specialty...'
        },
        {
          type: 'MultiCheckboxFilter',
          cardStyle: 'content',
          header: 'MSA',
          name: 'msa-checkbox',
          label: 'MSA',
          table: 'countyData',
          field: 'MSA',
          className: 'col-md-12',
          options: [
            { label: 'MSA', value: 'Y' },
            { label: 'NON-MSA', value: 'N'}
          ],
          willFilter: ['physicianData'],
          joins: {
            physicianData: "WL1 County",
            countyData: "County_ID"
          }
        },
       /* {
          type: CheckboxFilter',
          name: 'msa-checkbox',
          label: 'MSA',
          table: 'countyData',
          field: 'MSA',
          value: 'Y',
          applyMulti: true,
          willFilter: ['physicianData'],
          joins: {
            physicianData: "WL_1_County",
            countyData: "County_ID"
          }
        },
        {
          type: 'CheckboxFilter',
          name: 'non-msa-checkbox',
          label: 'Non-MSA',
          table: 'countyData',
          field: 'MSA',
          value: 'N',
          applyMulti: true,
          willFilter: ['physicianData'],
          joins: {
            physicianData: "WL_1_County",
            countyData: "County_ID"
          }
        },*/
      ],
    },
    {
      id: 'metrics-header-row',
      className: 'row',
      multi: true,
      dataHandlers: ['countyMetricMultiSelect'],
      elements: {
        state: [
          {
            type: 'Markup',
            data: '<h2 class="col-md-12">Metrics for the State of Georgia</h2>'
          }
        ],
        singleCounty: [
          {
            type: 'Markup',
            dataHandlers: ['getSingleCountyMetricsHeaderContent']
          }
        ],
        multipleCounties: [
          {
            type: 'Markup',
            data: '<h2 class="col-md-12">Metrics for multiple counties</h2>'
          }
        ]
      }
    },
    {
      id: 'metrics-row',
      className: 'flexbox-centered',
      multi: true,
      dataHandlers: ['countyMetricMultiSelect'],
      elements: {
        state: [
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						dataHandlers: ['getPHW'],
						caption: 'Total PHW',
						background: '#0b68a3',
						iconClass: 'glyphicons glyphicons-link'
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#e57200',
						caption: 'TOTAL TPC',
						iconClass: 'fa fa-line-chart',
						dataHandlers: ['getTPC'],
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#c1272d',
						caption: 'Population',
						dataHandlers: [
							{
								name: 'getCountyTotals',
								field: 'County_Population'
							}
						],
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#2a9189',
						caption: 'PHYS / 100K',
						iconClass: 'fa fa-line-chart',
						dataHandlers: ['getRate']
					},
        ],
        singleCounty: [
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						dataHandlers: ['getPHW'],
						caption: 'Total PHW',
						background: '#0b68a3',
						iconClass: 'glyphicons glyphicons-link'
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#e57200',
						caption: 'Total TPC',
						iconClass: 'fa fa-line-chart',
						dataHandlers: ['getTPC'],
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#c1272d',
						caption: 'Population...',
						dataHandlers: [
							{
								name: 'getCountyTotals',
								field: 'County_Population'
							}
						],
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#2a9189',
						caption: 'PHYS / 100K',
						iconClass: 'fa fa-line-chart',
						dataHandlers: ['getRate']
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: ' #662d91',
						caption: 'PCSA',
						iconClass: 'fa fa-line-chart',
						dataHandlers: [
              {
                name: 'getCountyMetric',
                metric: 'PCSA'
              }
            ]
					},
        ],
        multipleCounties: [
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						dataHandlers: ['getPHW'],
						caption: 'Total PHW',
						background: '#0b68a3',
						iconClass: 'glyphicons glyphicons-link'
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#e57200',
						caption: 'Total TPC',
						iconClass: 'fa fa-line-chart',
						dataHandlers: ['getTPC'],
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#c1272d',
						caption: 'Population...',
						dataHandlers: [
							{
								name: 'getCountyTotals',
								field: 'County_Population'
							}
						],
					},
					{
						type: 'Metric',
						className: 'gbpw-metric',
						format: ',',
						cardStyle: 'metric',
						background: '#2a9189',
						caption: 'PHYS / 100K',
						iconClass: 'fa fa-line-chart',
						dataHandlers: ['getRate']
					},
        ]
      }
    },
    {
      id: 'pie-chart-row-1',
      className: 'row',
      children: [
        {
          type: 'Chart',
          className: 'col-md-6',
          cardStyle: 'chart',
          iconClass: 'fa fa-clock-o',
          header: 'Physician Distribution by Age',
          settings: {
            type: 'pieChart',
            x: 'Age',
            y: 'count_age',
            height: 400,
            showLabels: false,
            color:{
              '34 and Under': '#0c2049',
              '35 - 49': '#e57200',
              '50 - 64': '#662d91',
              '65+': '#2a9189'
            }
          },
          dataHandlers: [
            {
              name: 'common.getXYByQueryData',
              dataKey: 'physicianData',
              queryKey: 'by_age',
              xField: 'Age',
              yField: 'count_age'
            },
            {
              name: 'groupByRange',
              ranges: [ [0,34], [35,49], [50,64], [65,125] ],
              xField: 'Age',
              yField: 'count_age',
            },
            {
              name: 'common.changeFieldNames',
              undefinedVal: 'Undisclosed',
              xField: 'Age',
              fields: {
                '0 - 34': '34 and Under',
                '35 - 49': '35 - 49',
                '50 - 64': '50 - 64',
                '65 - 125': '65+'
              },
            },
            {
              name: 'NVD3.toPieChartSeries'
            },
          ],
        },
        {
          type: 'Chart',
          className: 'col-md-6',
          cardStyle: 'chart',
          iconClass: 'fa fa-hourglass-end',
          header: 'Physician Retiring Next Five Years',
          settings: {
            type: 'pieChart',
            x: 'Age',
            y: 'count_age',
            height: 400,
            showLabels: false,
            color:{
              '34 and Under': '#0c2049',
              '35 - 49': '#e57200',
              '50 - 64': '#662d91',
              '65+': '#2a9189'
            }
          },
          dataHandlers: [
            {
              name: 'common.getXYByQueryDataWhereFieldsIn',
              dataKey: 'physicianData',
              queryKey: 'by_retiring',
              xField: 'Age',
              yField: 'count_age',
              whereField: ['retiring', 'Retiring?'],
              whereFieldValueIn: ['Y']
            },
            {
              name: 'groupByRange',
              ranges: [ [0,34], [35,49], [50,64], [65,125] ],
              xField: 'Age',
              yField: 'count_age',
            },
            {
              name: 'common.changeFieldNames',
              undefinedVal: 'Undisclosed',
              xField: 'Age',
              fields: {
                '0 - 34': '34 and Under',
                '35 - 49': '35 - 49',
                '50 - 64': '50 - 64',
                '65 - 125': '65+'
              },
            },
            {
              name: 'NVD3.toPieChartSeries'
            },
          ],
        },
      ]
    },
    {
      id: 'dataTable-row-1',
      className: 'row',
      children: [
        {
          type: 'DataTable',
          cardStyle: 'table',
          className: 'col-md-6',
          hideControls: true,
          hideFilterHeader: true,
          dataHandlers: [
            {
              name: 'common.getXYByQueryData',
              dataKey: 'physicianData',
              queryKey: 'by_age',
              xField: 'Age',
              yField: 'count_age'
            },
            {
              name: 'groupByRange',
              ranges: [ [0,34], [35,49], [50,64], [65,125] ],
              xField: 'Age',
              yField: 'count_age',
            },
            {
              name: 'common.changeFieldNames',
              undefinedVal: 'Undisclosed',
              xField: 'Age',
              fields: {
                '0 - 34': '34 and Under',
                '35 - 49': '35 - 49',
                '50 - 64': '50 - 64',
                '65 - 125': '65+'
              },
            },
            {
              name: 'common.rekeySeries',
              newKeys: ['Age', '']
            }
          ],
          settings: {
            table: {
              rowHeight: 40,
              width: 800,
              maxHeight: 300,
              headerHeight:40
            },
            columns: {
              flexGrow: 1,
              width: 150,
            },
            cells: {
              height: 40,
              width: 500,
            }
          }
        },
        {
          type: 'DataTable',
          cardStyle: 'table',
          className: 'col-md-6',
          hideControls: true,
          hideFilterHeader: true,
          dataHandlers: [
            {
              name: 'common.getXYByQueryDataWhereFieldsIn',
              dataKey: 'physicianData',
              queryKey: 'by_retiring',
              xField: 'Age',
              yField: 'count_age',
              whereField: ['retiring', 'Retiring?'],
              whereFieldValueIn: ['Y']
            },
            {
              name: 'groupByRange',
              ranges: [ [0,34], [35,49], [50,64], [65,125] ],
              xField: 'Age',
              yField: 'count_age',
            },
            {
              name: 'common.changeFieldNames',
              undefinedVal: 'Undisclosed',
              xField: 'Age',
              fields: {
                '0 - 34': '34 and Under',
                '35 - 49': '35 - 49',
                '50 - 64': '50 - 64',
                '65 - 125': '65+'
              },
            },
            {
              name: 'common.rekeySeries',
              newKeys: ['Age', 'No. Retiring']
            }
          ],
          settings: {
            table: {
              rowHeight: 40,
              width: 800,
              maxHeight: 300,
              headerHeight:40
            },
            columns: {
              flexGrow: 1,
              width: 150,
            },
            cells: {
              height: 40,
              width: 500,
            }
          }
        },

      ]
    },
    {
      id: 'pie-chart-row-2',
      className: 'row',
      children: [
        {
          type: 'Chart',
          className: 'col-md-6',
          cardStyle: 'chart',
          iconClass: 'fa fa-users',
          header: 'Physician Distribution by Race',
          settings: {
            type: 'pieChart',
            x: 'Race',
            y: 'count_race',
            height: 400,
            showLabels: false,
            color: {
              'White': '#0c2049',
              'Black': '#e57200',
              'Asian': '#c1272d',
              'Native American': '#2a9189',
              'Other': '#662d91'
            }
          },
          dataHandlers: [
            {
              name: 'common.getXYByQueryData',
              dataKey: 'physicianData',
              queryKey: 'by_race',
              xField: 'Race',
              yField: 'count_race'
            },
            {
              name: 'common.changeFieldNames',
              undefinedVal: 'Unknown',
              xField: 'Race',
              fields: {
                'W': 'White',
                'B': 'Black',
                'AI': 'Native American',
                'AS': 'Asian',
                'PI': 'Pacific Islander',
                'OTHER': 'Other',
              },
            },
            {
              name: 'NVD3.toPieChartSeries'
            },
          ],
        },
        {
          type: 'Chart',
          className: 'col-md-6',
          cardStyle: 'chart',
          iconClass: 'fa fa-user',
          header: 'Physician Distribution by Gender',
          settings: {
            type: 'pieChart',
            x: 'Gender',
            y: 'count_gender',
            height: 400,
            showLabels: false,
            color: {
              'Male': '#0c2049',
              'Female': '#e57200',
              'Other': '#662d91'
            }
          },
          dataHandlers: [
            {
              name: 'common.getXYByQueryData',
              dataKey: 'physicianData',
              queryKey: 'by_gender',
              xField: 'Gender',
              yField: 'count_gender'
            },
            {
              name: 'common.changeFieldNames',
              undefinedVal: 'Unknown',
              xField: 'Gender',
              fields: {
                'M': 'Male',
                'F': 'Female',
                '': 'Other',
              },
            },
            {
              name: 'NVD3.toPieChartSeries'
            },
          ],
        },

      ]
    },
    {
      id: 'dataTable-row-2',
      className: 'row',
      children: [
        {
          type: 'DataTable',
          cardStyle: 'table',
          className: 'col-md-6',
          hideControls: true,
          hideFilterHeader: true,
          dataHandlers: [
            {
              name: 'common.getXYByQueryData',
              dataKey: 'physicianData',
              queryKey: 'by_race',
              xField: 'Race',
              yField: 'count_race'
            },
            {
              name: 'common.changeFieldNames',
              undefinedVal: 'Unknown',
              xField: 'Race',
              fields: {
                'W': 'White',
                'B': 'Black',
                'AI': 'Native American',
                'AS': 'Asian',
                'PI': 'Pacific Islander',
                'OTHER': 'Other',
              },
            },
            {
              name: 'common.rekeySeries',
              newKeys: ['Race', '']
            }
          ],
          settings: {
            table: {
              rowHeight: 40,
              width: 800,
              maxHeight: 300,
              headerHeight:40
            },
            columns: {
              flexGrow: 1,
              width: 150,
            },
            cells: {
              height: 40,
              width: 500,
            }
          }
        },
        {
          type: 'DataTable',
          cardStyle: 'table',
          className: 'col-md-6',
          hideControls: true,
          hideFilterHeader: true,
          dataHandlers: [
            {
              name: 'common.getXYByQueryData',
              dataKey: 'physicianData',
              queryKey: 'by_gender',
              xField: 'Gender',
              yField: 'count_gender'
            },
            {
              name: 'common.changeFieldNames',
              undefinedVal: 'Unknown',
              xField: 'Gender',
              fields: {
                'M': 'Male',
                'F': 'Female',
                '': 'Other',
              },
            },
            {
              name: 'common.rekeySeries',
              newKeys: ['Gender', '']
            }
          ],
          settings: {
            table: {
              rowHeight: 40,
              width: 800,
              maxHeight: 300,
              headerHeight:40
            },
            columns: {
              flexGrow: 1,
              width: 150,
            },
            cells: {
              height: 40,
              width: 500,
            }
          }
        },
      ]
    },
    {
      id: 'barChart-row-1',
      className: 'row',
      children: [
        {
          type: 'Chart',
          className: 'col-md-6',
          cardStyle: 'chart',
          iconClass: 'fa fa-heart',
          header: 'Physicians Who Accept Medicaid',
          settings: {
            type: 'discreteBarChart',
            x: 'x',
            y: 'y',
            yAxis: { tickFormat: '.0%' },
            legendValFormat: '%',
            color: {
              'Accept Medicaid' : '#0c2049',
              'New Medicaid' : '#e57200'
            }
          },
          dataHandlers: [
            {
              name: 'getAcceptMedChartData',
              serviceType: 'medicaid'
            },
            {
              name: 'NVD3.returnChartSeries',
              series: [
                {
                  name: 'Acceo foot Hhjdsa',
                  color: 'blue'
                }
              ]
            }
          ]
        },
        {
          type: 'Chart',
          className: 'col-md-6',
          cardStyle: 'chart',
          iconClass: 'fa fa-heart-o',
          header: 'Physicians Who Accept Medicare',
          settings: {
            type: 'discreteBarChart',
            x: 'x',
            y: 'y',
            yAxis: { tickFormat: '.0%' },
            color: {
              'Accept Medicare' : '#0c2049',
              'New Medicare' : '#e57200'
            }
          },
          dataHandlers: [
            {
              name: 'getAcceptMedChartData',
              serviceType: 'medicare'
            },
            {
              name: 'NVD3.returnChartSeries',
              series: [
                {
                  name: 'Acceot Hhjdsa',
                  color: 'red'
                }
              ]
            }
          ]
        },
      ]
    },
    {
      id: 'dataTable-row-last',
      className: 'row',
      children: [
        {
          type: 'DataTable',
          cardStyle: 'table',
          className: 'col-md-6',
          hideControls: true,
          hideFilterHeader: true,
          dataHandlers: [
            {
              name: 'getAcceptMedChartData',
              serviceType: 'medicaid'
            },
            {
              name: 'common.fieldToD3Format',
              field: 'y',
              format: '.0%',
            },
            {
              name: 'common.rekeySeries',
              newKeys: ['Accepts Medicaid', '']
            },
          ],
          settings: {
            table: {
              rowHeight: 40,
              width: 800,
              maxHeight: 300,
              headerHeight:40
            },
            columns: {
              flexGrow: 1,
              width: 150,
            },
            cells: {
              height: 40,
              width: 500,
            }
          }
        },
        {
          type: 'DataTable',
          cardStyle: 'table',
          className: 'col-md-6',
          hideControls: true,
          hideFilterHeader: true,
          dataHandlers: [
            {
              name: 'getAcceptMedChartData',
              serviceType: 'medicare'
            },
            {
              name: 'common.fieldToD3Format',
              field: 'y',
              format: '.0%',
            },
            {
              name: 'common.rekeySeries',
              newKeys: ['Accepts Medicare', '']
            }
          ],
          settings: {
            table: {
              rowHeight: 40,
              width: 800,
              maxHeight: 300,
              headerHeight:40
            },
            columns: {
              flexGrow: 1,
              width: 150,
            },
            cells: {
              height: 40,
              width: 500,
            }
          }
        },
      ]
    },
  ],
};
