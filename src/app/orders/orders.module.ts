import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';



@NgModule({
  declarations: [PageListOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    IconsModule
  ]
})
export class OrdersModule { }
