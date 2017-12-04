import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';

import { DummyDataService } from '../core/dummy-data.service';
import { LocalStorageService } from '../core/localstorage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule.forRoot(),
    ProductDetailsRoutingModule
  ],
  declarations: [
    ProductDetailsComponent
  ],
  providers: [
    DummyDataService,
    LocalStorageService
  ]
})
export class ProductDetailsModule {}
