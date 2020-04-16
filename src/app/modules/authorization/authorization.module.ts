import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { StartComponent } from './start/start.component';
import {MaterialModule} from "../material/material.module";
import {GeneralModule} from "../general/general.module";


@NgModule({
  declarations: [StartComponent],
    imports: [
	CommonModule,
	AuthorizationRoutingModule,
	MaterialModule,
	GeneralModule
    ]
})
export class AuthorizationModule { }
