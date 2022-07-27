import { AfterViewInit, Component, OnInit } from '@angular/core';

// import {Vizzu} from './../../node_modules/vizzujs/vizzuMain.min.js'

// declare let Vizzu: any;
// import Vizzu from "vizzu/dist/vizzu.min.js"
// import {data} from './../../node_modules/dataViz/dataVizzu'


// import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@~0.5.0/dist/vizzu.min.js';
// import { data } from 'https://lib.vizzuhq.com/test/integration/test_data/chart_types_eu.js';


//  let data:any = require('https://lib.vizzuhq.com/test/integration/test_data/chart_types_eu.js');

// import Vizzu from 'vizzu'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor() {
  }
  ngOnInit(): void {
    this.loadScript()
  }
  title = 'vizzuChart';

  loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'https://cdn.jsdelivr.net/npm/vizzu@~0.5.0/dist/vizzu.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}

  ngAfterViewInit() {

    let chart = new Vizzu('vizzuCanvas'); 

    

    // chart.animate({
    //   data: data,
    //   config: {
    //     channels: {
    //       color: { set: ['Joy factors'] },
    //       label: { set: ['Country_code'] },
    //       size: { set: ['Country_code', 'Value 2 (+)'] }
    //     },
    //     title: 'Stacked Bubble Chart',
    //     geometry: 'circle'
    //   }
    // });


    chart.animate({
      config: {
        channels: {
          x: { set: ['Country_code', 'Value 2 (+)'] },
          y: { set: ['Joy factors'] },
          label: { set: null },
          /* The stacking is eliminated when we remove
          the extra dimension from the size channel. */
          size: { set: null }
        },
        title: 'Bar Chart',
        geometry: 'rectangle',
        orientation: 'vertical'
      }
    });


    chart.animate({
      config: {
        channels: {
          x: { detach: ['Country_code'] },
          label: { set: ['Value 2 (+)'] }
        }
      }
    });



  }



}


function test() {


}