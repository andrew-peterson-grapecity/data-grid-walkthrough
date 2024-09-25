import { Component } from '@angular/core';

import { Selector } from '@grapecity/wijmo.grid.selector';

import * as wjcCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Wijmo-Setup';
  selector: Selector = null;
  selectedItems: any[] = [];
  headers = true;
  salesData = this.getSalesData(50);

  // generate some data
  getSalesData(count: number) {
    let data = [];
    let locations = 'US,Japan,UK,Canada,Russia,Italy'.split(',');
    let customers =
      'Jayden Foster, Derry Combs, Gia Shields, Lukas Brewer, Hina Garcia, Carolina Lindsey'.split(
        ','
      );
    let customerInitials = 'JF,DC,GS,LB,HG,CL'.split(',');
    let customerColors =
      'cornflowerblue,darkorange,crimson,forestgreen,lightcoral,plum'.split(
        ','
      );
    let phoneNumbers = [
      '+1-202-65-0150',
      '+1-203-75-0150',
      '+1-204-85-0150',
      '+1-205-95-0150',
      '+1-206-56-0150',
      '+1-207-57-0150',
    ];
    let salesAgents = 'Eden Wicks,Selena Casey,Preston Kearns'.split(',');
    let paymentMethods = 'Check,Credit,Electronic Bank Transfer'.split(',');
    let orderStatuses = 'Pending,Complete,Closed'.split(',');
    let today = new Date();

    for (let i = 0; i < count; i++) {
      data.push({
        id: Math.floor(Math.random() * 100000),
        customer: customers[i % customers.length],
        customerColor: customerColors[i % customerColors.length],
        customerInitial: customerInitials[i % customerInitials.length],
        location: locations[i % locations.length],
        phoneNumber: phoneNumbers[i % phoneNumbers.length],
        salesAgent: salesAgents[Math.floor(Math.random() * (2 + 1))],
        sale: Math.random() * 100000,
        paymentMethod: paymentMethods[i % paymentMethods.length],
        lead: Math.floor(Math.random() * 99) + 1,
        date: wjcCore.DateTime.addDays(today, -Math.floor(Math.random() * 100)),
        orderStatus: orderStatuses[Math.floor(Math.random() * (2 + 1))],
      });
    }
    return new wjcCore.CollectionView(data);
  }

  salesGridInit(grid: wjGrid.FlexGrid) {
    grid.autoSizeColumns();

    grid.cells.rows.defaultSize = 52;
    grid.columnHeaders.rows.defaultSize = 56;

    this.selector = new Selector(grid, {
      itemChecked: () => {
        this.selectedItems = grid.rows.filter((r) => r.isSelected);
      },
    });
  }
}
