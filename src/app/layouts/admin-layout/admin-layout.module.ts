import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from 'src/app/login/login.component';
import { TribunalComponent } from 'src/app/pages/tribunal/tribunal.component';
import { AffaireComponent } from 'src/app/pages/affaire/affaire.component';
import { DocumentComponent } from 'src/app/pages/document/document.component';
import { ParticulierComponent } from 'src/app/pages/particulier/particulier.component';
import { PhaseComponent } from 'src/app/pages/phase/phase.component';
import { ProfessionelComponent } from 'src/app/pages/professionel/professionel.component';
import { RoleComponent } from 'src/app/pages/role/role.component';
import { TacheComponent } from 'src/app/pages/tache/tache.component';
import { TiersComponent } from 'src/app/pages/tiers/tiers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    LoginComponent,
    DocumentComponent,
    TribunalComponent,
    AffaireComponent,
    TacheComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    ParticulierComponent, 
    PhaseComponent, 
    ProfessionelComponent, 
    RoleComponent, 
    TiersComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule { }
