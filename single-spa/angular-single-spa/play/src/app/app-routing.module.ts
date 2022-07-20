import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttackComponent } from './attack/attack.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: 'play', redirectTo: 'play/attack', pathMatch: 'full' },
  { path: 'play/attack', component: AttackComponent },
  { path: 'play/help', loadChildren: () => import('./help/help.module').then((m) => m.HelpModule) },
  /*
   * Makes sure we don't try to show a 404 ou error while single-spa is transitioning between routes
   * https://single-spa.js.org/docs/ecosystem-angular#configure-routes
   */
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    /*
     * Should be same as mount in root, but have strange effects when navigate between apps.
     * https://single-spa.js.org/docs/ecosystem-angular#configure-routes
     */
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }