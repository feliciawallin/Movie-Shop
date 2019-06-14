import { Component, OnInit } from '@angular/core';
import { IExtendedOrder } from '../interfaces/IOrder';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  extendedOrders: IExtendedOrder[] = [];

  constructor(private service: DataService) {
  }

  ngOnInit() {

    //Subsribear på orden och namnen på filmerna som ligger i databasen, och pushar in i egenskapen extendOrders
    this.service.fetchOrderData().subscribe((orderData) => {

      for (let i = 0; i < orderData.length; i++) {
        this.extendedOrders.push({ order: orderData[i], movieNames: [] });

        let orderRows = orderData[i].orderRows;

        for (let j = 0; j < orderRows.length; j++) {
          let productId = orderRows[j].productId;

          this.service.fetchSingleMovie(productId).subscribe((data) => {
            this.extendedOrders[i].movieNames.push(data.name);

          });
        }
      }
    });
  }

}
