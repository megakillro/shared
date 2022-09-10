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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWdha2lsbC9jb21tb24vc3JjL2xpYi9mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0saUJBQWlCLENBQUM7O0FBSzFDLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsZ0JBQWdCLENBQUM7SUFFakIsYUFBYSxDQUFDLE1BQVc7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQscUJBQXFCLENBQUMsTUFBVztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxNQUFXO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUFFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLE9BQU8sVUFBVSxDQUFDO1FBQ3ZELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTyxhQUFhLENBQUM7UUFDMUQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPLFVBQVUsQ0FBQztRQUN2RCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELG9CQUFvQixDQUFDLE1BQVc7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUYsQ0FBQzs7NkdBOUJVLGdCQUFnQjtpSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdHRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZGF0ZUZvcm1hdHRlcihwYXJhbXM6IGFueSkge1xuICAgIGlmICghcGFyYW1zLnZhbHVlKSByZXR1cm4gcGFyYW1zLnZhbHVlO1xuICAgIHJldHVybiBtb21lbnQocGFyYW1zLnZhbHVlKS50eignRXVyb3BlL0J1Y2hhcmVzdCcpLmZvcm1hdCgnREQuTU0uWVlZWScpO1xuICB9XG5cbiAgZGF0ZVRpbWVGb3JtYXR0ZXIocGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIXBhcmFtcy52YWx1ZSkgcmV0dXJuIHBhcmFtcy52YWx1ZTtcbiAgICByZXR1cm4gbW9tZW50KHBhcmFtcy52YWx1ZSkudHooJ0V1cm9wZS9CdWNoYXJlc3QnKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW06c3MnKTtcbiAgfVxuXG4gIGRhdGVUaW1lSEhtbUZvcm1hdHRlcihwYXJhbXM6IGFueSkge1xuICAgIGlmICghcGFyYW1zLnZhbHVlKSByZXR1cm4gcGFyYW1zLnZhbHVlO1xuICAgIHJldHVybiBtb21lbnQocGFyYW1zLnZhbHVlKS50eignRXVyb3BlL0J1Y2hhcmVzdCcpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xuICB9XG5cbiAgaGlzdG9yeU9wZXJhdGlvbkZvcm1hdHRlcihwYXJhbXM6IGFueSkge1xuICAgIGlmICghcGFyYW1zLnZhbHVlKSByZXR1cm4gcGFyYW1zLnZhbHVlO1xuICAgIGlmIChwYXJhbXMudmFsdWUuaW5jbHVkZXMoJ2luc2VydCcpKSByZXR1cm4gYEFkxIN1Z2FyZWA7XG4gICAgaWYgKHBhcmFtcy52YWx1ZS5pbmNsdWRlcygndXBkYXRlJykpIHJldHVybiBgQWN0dWFsaXphcmVgO1xuICAgIGlmIChwYXJhbXMudmFsdWUuaW5jbHVkZXMoJ2RlbGV0ZScpKSByZXR1cm4gYMiYdGVyZ2VyZWA7XG4gICAgcmV0dXJuIHBhcmFtcy52YWx1ZTtcbiAgfVxuXG4gIGFwcG9pbnRtZW50Rm9ybWF0dGVyKHBhcmFtczogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMudmFsdWUpIHJldHVybiBwYXJhbXMudmFsdWU7XG4gICAgcmV0dXJuIG1vbWVudChwYXJhbXMudmFsdWUuc3RhcnREYXRlKS50eignRXVyb3BlL0J1Y2hhcmVzdCcpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbScpO1xuICB9XG59XG4iXX0=