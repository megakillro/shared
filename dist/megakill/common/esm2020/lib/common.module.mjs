import { OkPortalDialogComponent } from './ok-portal-dialog/ok-portal-dialog.component';
import { SelectPortalDialogComponent } from './select-portal-dialog/select-portal-dialog.component';
import { NgModule } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export class MegakillCommonModule {
    static forRoot(config) {
        return {
            ngModule: MegakillCommonModule,
            providers: [
                { provide: MegakillCommonModuleConfig, useValue: config }
            ]
        };
    }
}
MegakillCommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: MegakillCommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MegakillCommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.6", ngImport: i0, type: MegakillCommonModule, declarations: [OkPortalDialogComponent,
        SelectPortalDialogComponent], imports: [MatIconModule,
        MatDialogModule] });
MegakillCommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: MegakillCommonModule, imports: [MatIconModule,
        MatDialogModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: MegakillCommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OkPortalDialogComponent,
                        SelectPortalDialogComponent
                    ],
                    imports: [
                        MatIconModule,
                        MatDialogModule
                    ],
                    exports: []
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBZTNELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFrQztRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUMxRDtTQUNGLENBQUM7SUFDSixDQUFDOztpSEFSVSxvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFYN0IsdUJBQXVCO1FBQ3ZCLDJCQUEyQixhQUczQixhQUFhO1FBQ2IsZUFBZTtrSEFNTixvQkFBb0IsWUFQN0IsYUFBYTtRQUNiLGVBQWU7MkZBTU4sb0JBQW9CO2tCQWJoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPa1BvcnRhbERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb2stcG9ydGFsLWRpYWxvZy9vay1wb3J0YWwtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RQb3J0YWxEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1wb3J0YWwtZGlhbG9nL3NlbGVjdC1wb3J0YWwtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBPa1BvcnRhbERpYWxvZ0NvbXBvbmVudCxcbiAgICBTZWxlY3RQb3J0YWxEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lZ2FraWxsQ29tbW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBNZWdha2lsbENvbW1vbk1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWVnYWtpbGxDb21tb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1lZ2FraWxsQ29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==