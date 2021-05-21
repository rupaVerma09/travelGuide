import {NgModule} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    exports: [
        MatSliderModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule
    ]})

export class DemoMaterialModule {}