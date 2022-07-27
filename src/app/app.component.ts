import { AfterViewInit, Component, OnInit } from '@angular/core';

// import '../assets/vizzu.js';
declare const Vizzu:any; 
declare const data:any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
      //  test1.test()
  }
  title = 'vizzuChart';

  ngAfterViewInit() {


    let chart = new Vizzu('vizzuCanvas');

    chart.animate({
      data: data,
      config: {
        channels: {
          color: { set: ['Joy factors'] },
          label: { set: ['Country_code'] },
          size: { set: ['Country_code', 'Value 2 (+)'] }
        },
        title: 'Stacked Bubble Chart',
        geometry: 'circle'
      }
    });


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




    // let data = {
    //   series: [
    //     { name: 'Foo', values: ['Alice', 'Bob', 'Ted'] },
    //     { name: 'Bar', values: [15, 32, 12] },
    //     { name: 'Baz', values: [5, 3, 2] }
    //   ]
    // };

    // console.log(data);

        // let chart = new Vizzu('myVizzu', { data });

    // chart.animate({
    //   x: 'Foo',
    //   y: 'Bar'
    // });

  }



}
