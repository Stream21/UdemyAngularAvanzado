//Modulos
import { NgModule } from '@angular/core';
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { BreadcrubsComponent } from "./breadcrubs/breadcrubs.component";

@NgModule({

  declarations: [
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrubsComponent
  ],
  exports: [
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrubsComponent
  ],

})

export class SharedModule { }
