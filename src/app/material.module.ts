import { NgModule } from '@angular/core';
import {
  MdcIconRegistry,
  MdcButtonModule,
  MdcCardModule,
  MdcCheckboxModule,
  MdcChipsModule,
  MdcDialogModule,
  MdcDrawerModule,
  MdcElevationModule,
  MdcFabModule,
  MdcFormFieldModule,
  MdcIconButtonModule,
  MdcIconModule,
  MdcLinearProgressModule,
  MdcImageListModule,
  MdcListModule,
  MdcMenuModule,
  MdcRadioModule,
  MdcRippleModule,
  MdcSelectModule,
  MdcSliderModule,
  MdcSnackbarModule,
  MdcSwitchModule,
  MdcTabBarModule,
  MdcTextFieldModule,
  MdcTopAppBarModule,
  MdcTypographyModule
} from '@angular-mdc/web';

import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  exports: [
    MdcIconModule,
    MdcButtonModule,
    MdcCardModule,
    MdcCheckboxModule,
    MdcChipsModule,
    MdcDialogModule,
    MdcDrawerModule,
    MdcElevationModule,
    MdcFabModule,
    MdcFormFieldModule,
    MdcIconButtonModule,
    MdcIconModule,
    MdcLinearProgressModule,
    MdcImageListModule,
    MdcListModule,
    MdcMenuModule,
    MdcRadioModule,
    MdcRippleModule,
    MdcSelectModule,
    MdcSliderModule,
    MdcSnackbarModule,
    MdcSwitchModule,
    MdcTabBarModule,
    MdcTextFieldModule,
    MdcTopAppBarModule,
    MdcTypographyModule
  ]
})

export class AppMaterialModule {
  constructor(mdcIconRegistry: MdcIconRegistry, domSanitizer: DomSanitizer) {
    mdcIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
  }
}
