import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PaymentsPage } from './payments';
import { PaymentsFilterPage } from '../payments-filter/payments-filter';
import { PaymentsPageRoutingModule } from './payments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsPageRoutingModule
  ],
  declarations: [
    PaymentsPage,
    PaymentsFilterPage
  ],
  entryComponents: [
    PaymentsFilterPage
  ]
})
export class PaymentsModule { }
