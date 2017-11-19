import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgPipesModule } from '../../../node_modules/ng-pipes';

// components
import { HomeComponent } from './home.component';

// services
import { QuoteService } from './quote.service';
import { FormsModule } from '@angular/forms';

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
    HomeComponent
  ],

  // uased providers (directives and services)
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
