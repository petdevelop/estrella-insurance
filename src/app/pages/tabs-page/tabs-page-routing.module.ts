import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs-page';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { PaymentsPage } from '../payments/payments';
import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
import { SpeakerListPage } from '../speaker-list/speaker-list';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // tab one
      {
        path: 'payments',
        component: PaymentsPage,
        outlet: 'payments'
      },
      {
        path: 'session/:sessionId',
        component: SessionDetailPage,
        outlet: 'payments'
      },
      // tab two
      {
        path: 'offices',
        component: SpeakerListPage,
        outlet: 'offices'
      },
      {
        path: 'session/:sessionId',
        component: SessionDetailPage,
        outlet: 'offices'
      },
      {
        path: 'speaker-details/:speakerId',
        component: SpeakerDetailPage,
        outlet: 'offices'
      },
      // tab three
      {
        path: 'map',
        component: MapPage,
        outlet: 'map'
      },
      // tab four
      {
        path: 'about',
        component: AboutPage,
        outlet: 'about'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
