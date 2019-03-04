import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AdminRoutingModule } from './admin-routing.module';

// Components
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    // Material
    MatSidenavModule,
    MatIconModule
  ]
})
export class AdminModule { }
