import { ConfirmationAsyncDialogComponent } from './confirmation-async-dialog/confirmation-async-dialog.component';
import { ConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';
import { OkPortalDialogComponent } from './ok-portal-dialog/ok-portal-dialog.component';
import { SelectPortalDialogComponent } from './select-portal-dialog/select-portal-dialog.component';
import { NgModule } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
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
MegakillCommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.6", ngImport: i0, type: MegakillCommonModule, declarations: [ConfirmationAsyncDialogComponent,
        OkPortalDialogComponent,
        SelectPortalDialogComponent], imports: [MatIconModule,
        MatDialogModule,
        MatProgressBarModule,
        ConfirmationDialogModule,
        HttpClientModule], exports: [ConfirmationDialogModule] });
MegakillCommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: MegakillCommonModule, imports: [MatIconModule,
        MatDialogModule,
        MatProgressBarModule,
        ConfirmationDialogModule,
        HttpClientModule, ConfirmationDialogModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: MegakillCommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConfirmationAsyncDialogComponent,
                        OkPortalDialogComponent,
                        SelectPortalDialogComponent
                    ],
                    imports: [
                        MatIconModule,
                        MatDialogModule,
                        MatProgressBarModule,
                        ConfirmationDialogModule,
                        HttpClientModule
                    ],
                    exports: [
                        ConfirmationDialogModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBb0J4RCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBa0M7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDMUQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7aUhBUlUsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBaEI3QixnQ0FBZ0M7UUFDaEMsdUJBQXVCO1FBQ3ZCLDJCQUEyQixhQUczQixhQUFhO1FBQ2IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsZ0JBQWdCLGFBR2hCLHdCQUF3QjtrSEFJZixvQkFBb0IsWUFYN0IsYUFBYTtRQUNiLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLGdCQUFnQixFQUdoQix3QkFBd0I7MkZBSWYsb0JBQW9CO2tCQWxCaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpcm1hdGlvbkFzeW5jRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtYXRpb24tYXN5bmMtZGlhbG9nL2NvbmZpcm1hdGlvbi1hc3luYy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1hdGlvbkRpYWxvZ01vZHVsZSB9IGZyb20gJy4vY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBPa1BvcnRhbERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb2stcG9ydGFsLWRpYWxvZy9vay1wb3J0YWwtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RQb3J0YWxEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1wb3J0YWwtZGlhbG9nL3NlbGVjdC1wb3J0YWwtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29uZmlybWF0aW9uQXN5bmNEaWFsb2dDb21wb25lbnQsXG4gICAgT2tQb3J0YWxEaWFsb2dDb21wb25lbnQsXG4gICAgU2VsZWN0UG9ydGFsRGlhbG9nQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBDb25maXJtYXRpb25EaWFsb2dNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29uZmlybWF0aW9uRGlhbG9nTW9kdWxlXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZWdha2lsbENvbW1vbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1lZ2FraWxsQ29tbW9uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNZWdha2lsbENvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE1lZ2FraWxsQ29tbW9uTW9kdWxlQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=