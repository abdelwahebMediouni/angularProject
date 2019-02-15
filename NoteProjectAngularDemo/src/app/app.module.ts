import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {MatieresComponent} from './matieres/matieres.component';
import {MatiereService} from "./matieres/matieres.service";
import {ToastrModule} from "ngx-toastr";
import { AjoutMatiereComponent } from './ajout-matiere/ajout-matiere.component';

const appRoutes: Routes = [
  {path: 'matiere', component: MatieresComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MatieresComponent,
    AjoutMatiereComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: [
    MatiereService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}