import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import * as i0 from "@angular/core";
export class FormatterService {
    constructor() { }
    dateFormatter(params) {
        if (!params.value)
            return params.value;
        return moment(params.value).tz('Europe/Bucharest').format('DD.MM.YYYY');
    }
    dateTimeFormatter(params) {
        if (!params.value)
            return params.value;
        return moment(params.value).tz('Europe/Bucharest').format('DD.MM.YYYY HH:mm:ss');
    }
    dateTimeHHmmFormatter(params) {
        if (!params.value)
            return params.value;
        return moment(params.value).tz('Europe/Bucharest').format('DD.MM.YYYY HH:mm');
    }
    historyOperationFormatter(params) {
        if (!params.value)
            return params.value;
        if (params.value.includes('insert'))
            return `Adăugare`;
        if (params.value.includes('update'))
            return `Actualizare`;
        if (params.value.includes('delete'))
            return `Ștergere`;
        return params.value;
    }
    appointmentFormatter(params) {
        if (!params.value)
            return params.value;
        return moment(params.value.startDate).tz('Europe/Bucharest').format('DD.MM.YYYY HH:mm');
    }
}
FormatterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: FormatterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FormatterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: FormatterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: FormatterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2Zvcm1hdHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQzs7QUFLMUMsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixnQkFBZ0IsQ0FBQztJQUVqQixhQUFhLENBQUMsTUFBVztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBVztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxNQUFXO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUFFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN2QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELHlCQUF5QixDQUFDLE1BQVc7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTyxVQUFVLENBQUM7UUFDdkQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPLGFBQWEsQ0FBQztRQUMxRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLE9BQU8sVUFBVSxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsb0JBQW9CLENBQUMsTUFBVztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMxRixDQUFDOzs2R0E5QlUsZ0JBQWdCO2lIQUFoQixnQkFBZ0IsY0FGZixNQUFNOzJGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0dGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBkYXRlRm9ybWF0dGVyKHBhcmFtczogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMudmFsdWUpIHJldHVybiBwYXJhbXMudmFsdWU7XG4gICAgcmV0dXJuIG1vbWVudChwYXJhbXMudmFsdWUpLnR6KCdFdXJvcGUvQnVjaGFyZXN0JykuZm9ybWF0KCdERC5NTS5ZWVlZJyk7XG4gIH1cblxuICBkYXRlVGltZUZvcm1hdHRlcihwYXJhbXM6IGFueSkge1xuICAgIGlmICghcGFyYW1zLnZhbHVlKSByZXR1cm4gcGFyYW1zLnZhbHVlO1xuICAgIHJldHVybiBtb21lbnQocGFyYW1zLnZhbHVlKS50eignRXVyb3BlL0J1Y2hhcmVzdCcpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbTpzcycpO1xuICB9XG5cbiAgZGF0ZVRpbWVISG1tRm9ybWF0dGVyKHBhcmFtczogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMudmFsdWUpIHJldHVybiBwYXJhbXMudmFsdWU7XG4gICAgcmV0dXJuIG1vbWVudChwYXJhbXMudmFsdWUpLnR6KCdFdXJvcGUvQnVjaGFyZXN0JykuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XG4gIH1cblxuICBoaXN0b3J5T3BlcmF0aW9uRm9ybWF0dGVyKHBhcmFtczogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMudmFsdWUpIHJldHVybiBwYXJhbXMudmFsdWU7XG4gICAgaWYgKHBhcmFtcy52YWx1ZS5pbmNsdWRlcygnaW5zZXJ0JykpIHJldHVybiBgQWTEg3VnYXJlYDtcbiAgICBpZiAocGFyYW1zLnZhbHVlLmluY2x1ZGVzKCd1cGRhdGUnKSkgcmV0dXJuIGBBY3R1YWxpemFyZWA7XG4gICAgaWYgKHBhcmFtcy52YWx1ZS5pbmNsdWRlcygnZGVsZXRlJykpIHJldHVybiBgyJh0ZXJnZXJlYDtcbiAgICByZXR1cm4gcGFyYW1zLnZhbHVlO1xuICB9XG5cbiAgYXBwb2ludG1lbnRGb3JtYXR0ZXIocGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIXBhcmFtcy52YWx1ZSkgcmV0dXJuIHBhcmFtcy52YWx1ZTtcbiAgICByZXR1cm4gbW9tZW50KHBhcmFtcy52YWx1ZS5zdGFydERhdGUpLnR6KCdFdXJvcGUvQnVjaGFyZXN0JykuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tJyk7XG4gIH1cbn1cbiJdfQ==