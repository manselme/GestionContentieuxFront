import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injectable } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { UserService } from './service/user.service';
import { AppService } from './app.service';
import { AffaireComponent } from './pages/affaire/affaire.component';
import { DocumentComponent } from './pages/document/document.component';
import { ParticulierComponent } from './pages/particulier/particulier.component';
import { PhaseComponent } from './pages/phase/phase.component';
import { ProfessionelComponent } from './pages/professionel/professionel.component';
import { RoleComponent } from './pages/role/role.component';
import { TacheComponent } from './pages/tache/tache.component';
import { TiersComponent } from './pages/tiers/tiers.component';
import { TribunalComponent } from './pages/tribunal/tribunal.component';
import { TribunalService } from './service/tribunal.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor{
  intercept(req : HttpRequest<any>, next: HttpHandler){
    const xhr= req.clone({
      headers: req.headers.set('X-Requested-With','XMLHttpRequest')
    });
    return next.handle(xhr);
  }
  
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, AffaireComponent, DocumentComponent, ParticulierComponent, PhaseComponent, ProfessionelComponent, RoleComponent, TacheComponent, TiersComponent, TribunalComponent],
  providers: [AppService, UserService, TribunalService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
