import { ConfirmationAsyncDialogComponent } from './confirmation-async-dialog/confirmation-async-dialog.component';
import { ConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';
import { OkPortalDialogComponent } from './ok-portal-dialog/ok-portal-dialog.component';
import { SelectPortalDialogComponent } from './select-portal-dialog/select-portal-dialog.component';
import { NgModule } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
        ConfirmationDialogModule], exports: [ConfirmationDialogModule] });
MegakillCommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: MegakillCommonModule, imports: [MatIconModule,
        MatDialogModule,
        MatProgressBarModule,
        ConfirmationDialogModule, ConfirmationDialogModule] });
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
                        ConfirmationDialogModule
                    ],
                    exports: [
                        ConfirmationDialogModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBbUJ0RSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBa0M7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDMUQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7aUhBUlUsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBZjdCLGdDQUFnQztRQUNoQyx1QkFBdUI7UUFDdkIsMkJBQTJCLGFBRzNCLGFBQWE7UUFDYixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLHdCQUF3QixhQUd4Qix3QkFBd0I7a0hBSWYsb0JBQW9CLFlBVjdCLGFBQWE7UUFDYixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLHdCQUF3QixFQUd4Qix3QkFBd0I7MkZBSWYsb0JBQW9CO2tCQWpCaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHdCQUF3QjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maXJtYXRpb25Bc3luY0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLWFzeW5jLWRpYWxvZy9jb25maXJtYXRpb24tYXN5bmMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25EaWFsb2dNb2R1bGUgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgT2tQb3J0YWxEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL29rLXBvcnRhbC1kaWFsb2cvb2stcG9ydGFsLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0UG9ydGFsRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtcG9ydGFsLWRpYWxvZy9zZWxlY3QtcG9ydGFsLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZ2FraWxsQ29tbW9uTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29uZmlybWF0aW9uQXN5bmNEaWFsb2dDb21wb25lbnQsXG4gICAgT2tQb3J0YWxEaWFsb2dDb21wb25lbnQsXG4gICAgU2VsZWN0UG9ydGFsRGlhbG9nQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBDb25maXJtYXRpb25EaWFsb2dNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbmZpcm1hdGlvbkRpYWxvZ01vZHVsZVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVnYWtpbGxDb21tb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IE1lZ2FraWxsQ29tbW9uTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNZWdha2lsbENvbW1vbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWVnYWtpbGxDb21tb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBNZWdha2lsbENvbW1vbk1vZHVsZUNvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19