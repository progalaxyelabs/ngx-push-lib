import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NgxPushLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxPushLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxPushLibComponent, selector: "lib-ngx-push-lib", ngImport: i0, template: `
    <p>
      ngx-push-lib works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-push-lib', template: `
    <p>
      ngx-push-lib works!
    </p>
  ` }]
        }] });

class NgxPushLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibModule, declarations: [NgxPushLibComponent], exports: [NgxPushLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxPushLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxPushLibComponent
                    ],
                    imports: [],
                    exports: [
                        NgxPushLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-push-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxPushLibComponent, NgxPushLibModule, NgxPushLibService };
//# sourceMappingURL=progalaxyelabs-ngx-push-lib.mjs.map
