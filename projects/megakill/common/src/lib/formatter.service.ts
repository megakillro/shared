import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {

  constructor() { }

  dateFormatter(params: any) {
    if (!params.value) return params.value;
    return moment(params.value).tz('Europe/Bucharest').format('DD.MM.YYYY');
  }

  dateTimeFormatter(params: any) {
    if (!params.value) return params.value;
    return moment(params.value).tz('Europe/Bucharest').format('DD.MM.YYYY HH:mm:ss');
  }

  dateTimeHHmmFormatter(params: any) {
    if (!params.value) return params.value;
    return moment(params.value).tz('Europe/Bucharest').format('DD.MM.YYYY HH:mm');
  }

  historyOperationFormatter(params: any) {
    if (!params.value) return params.value;
    if (params.value.includes('insert')) return `Adăugare`;
    if (params.value.includes('update')) return `Actualizare`;
    if (params.value.includes('delete')) return `Ștergere`;
    return params.value;
  }

  appointmentFormatter(params: any) {
    if (!params.value) return params.value;
    return moment(params.value.startDate).tz('Europe/Bucharest').format('DD.MM.YYYY HH:mm');
  }
}
