import { getBaseUrl, MegakillCommonModuleConfig } from './config';
import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class CsvService {
	baseUrl;

	constructor(
		private http: HttpClient,
		@Optional() config?: MegakillCommonModuleConfig
	) {
		this.baseUrl = getBaseUrl(config) + '/local-files/';
	}

	csvToXlsx(csv: any = {}) {
		return this.http.post(this.baseUrl + 'csv-to-xlsx', { csv }, { responseType: 'arraybuffer' }).toPromise();
	}

	csvToHtml(csv: any = {}) {
		return this.http.post(this.baseUrl + 'csv-to-html', { csv }, { responseType: 'arraybuffer' }).toPromise();
	}

	csvToPdf(csv: any = {}) {
		return this.http.post(this.baseUrl + 'csv-to-pdf', { csv }, { responseType: 'arraybuffer' }).toPromise();
	}

	csvToJson(csv: any = {}) {
		return this.http.post(this.baseUrl + 'csv-to-json', { csv }, { responseType: 'arraybuffer' }).toPromise();
	}
}