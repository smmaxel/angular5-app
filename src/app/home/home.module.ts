import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgPipesModule } from '../../../node_modules/ng-pipes';
import { FilterPipe } from './home.filter';

// components
import { HomeComponent } from './home.component';

// services
import { QuoteService } from './quote.service';
import { FormsModule } from '@angular/forms';
import { DummyDataService } from '../core/dummy-data.service';
import { EndpointService } from '../core/endpoint.service';

@NgModule({

  // imported modules
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    NgPipesModule
  ],

  // imported components
  declarations: [
    HomeComponent,
    FilterPipe
  ],

  // uased providers (directives and services)
  providers: [
    QuoteService,
    DummyDataService,
    EndpointService
  ]
})
export class HomeModule { }
