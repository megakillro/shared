import * as i0 from '@angular/core';
import { Injectable, Optional, InjectionToken, Component, Inject, NgModule } from '@angular/core';
import * as moment from 'moment-timezone';
import { saveAs } from 'file-saver';
import * as i1 from '@angular/common/http';
import { __awaiter } from 'tslib';
import * as i1$1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';
import createAuth0Client from '@auth0/auth0-spa-js';
import { from, throwError, BehaviorSubject, of, combineLatest } from 'rxjs';
import { shareReplay, catchError, concatMap, tap } from 'rxjs/operators';
import * as i1$2 from '@angular/router';

class FormatterService {
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

class MegakillCommonModuleConfig {
}
function getBaseUrl(config) {
    var _a, _b;
    if (!((_a = config === null || config === void 0 ? void 0 : config.environment) === null || _a === void 0 ? void 0 : _a.baseUrl)) {
        console.warn('No baseUrl provided in MegakillCommonModuleConfig. Register the module as MegakillCommonModule.forRoot({ environment }), where environment has the property baseUrl.');
    }
    return (_b = config === null || config === void 0 ? void 0 : config.environment) === null || _b === void 0 ? void 0 : _b.baseUrl;
}

class LocalFilesService {
    constructor(http, config) {
        this.http = http;
        this.baseUrl = getBaseUrl(config) + '/local-files/';
    }
    upload(formData) {
        return this.http.post(this.baseUrl + 'upload', formData).toPromise();
    }
    download(filePath) {
        const linkParts = filePath.split('/');
        const filename = linkParts[linkParts.length - 1];
        return this.http.get(this.baseUrl + 'download?filePath=' + filePath, { responseType: 'arraybuffer' }).toPromise().then((res) => {
            const arrayBuffer = res;
            const blob = new Blob([arrayBuffer]);
            saveAs(blob, filename);
            return res;
        });
    }
}
LocalFilesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalFilesService, deps: [{ token: i1.HttpClient }, { token: MegakillCommonModuleConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
LocalFilesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalFilesService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalFilesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: MegakillCommonModuleConfig, decorators: [{
                        type: Optional
                    }] }];
    } });

class CsvService {
    constructor(http, config) {
        this.http = http;
        this.baseUrl = getBaseUrl(config) + '/local-files/';
    }
    csvToXlsx(csv = {}) {
        return this.http.post(this.baseUrl + 'csv-to-xlsx', { csv }, { responseType: 'arraybuffer' }).toPromise();
    }
    csvToHtml(csv = {}) {
        return this.http.post(this.baseUrl + 'csv-to-html', { csv }, { responseType: 'arraybuffer' }).toPromise();
    }
    csvToPdf(csv = {}) {
        return this.http.post(this.baseUrl + 'csv-to-pdf', { csv }, { responseType: 'arraybuffer' }).toPromise();
    }
    csvToJson(csv = {}) {
        return this.http.post(this.baseUrl + 'csv-to-json', { csv }, { responseType: 'arraybuffer' }).toPromise();
    }
}
CsvService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CsvService, deps: [{ token: i1.HttpClient }, { token: MegakillCommonModuleConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
CsvService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CsvService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CsvService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: MegakillCommonModuleConfig, decorators: [{
                        type: Optional
                    }] }];
    } });

class S3Service {
    constructor(http, config) {
        this.http = http;
        this.baseUrl = getBaseUrl(config) + '/local-files/';
    }
    download(link) {
        return __awaiter(this, void 0, void 0, function* () {
            const linkParts = link.split('/');
            const filename = linkParts[linkParts.length - 1];
            return this.http.get(this.baseUrl + 'download?link=' + link, { responseType: 'arraybuffer' }).toPromise().then((res) => {
                const arrayBuffer = res;
                const blob = new Blob([arrayBuffer]);
                saveAs(blob, filename);
                return res;
            });
        });
    }
    upload(formData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post(this.baseUrl + 'upload', formData).toPromise();
        });
    }
}
S3Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3Service, deps: [{ token: i1.HttpClient }, { token: MegakillCommonModuleConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
S3Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: MegakillCommonModuleConfig, decorators: [{
                        type: Optional
                    }] }];
    } });

const CONTAINER_DATA = new InjectionToken('CONTAINER_DATA', { providedIn: 'root', factory: () => ({}) });

class OkPortalDialogComponent {
    constructor(injector, dialogRef, data) {
        this.injector = injector;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
        this.componentData = null;
        if (data && data.title) {
            this.title = data.title;
        }
        if (!data || !data.component) {
            throw new Error('OkDialog: data.component is undefined');
        }
        this.component = data.component;
        if (!data.componentData) {
            throw new Error('OkDialog: data.component.componentData is undefined');
        }
        this.componentData = data.componentData;
        this.componentPortal = new ComponentPortal(this.component, null, this.createInjector(this.componentData));
    }
    createInjector(dataToPass) {
        const injectorTokens = new WeakMap();
        injectorTokens.set(CONTAINER_DATA, dataToPass);
        return new PortalInjector(this.injector, injectorTokens);
    }
    ngOnInit() { }
    onPortalAttached(event) {
        console.log(event.instance.selectedRow);
        console.log(event);
        this.eventSelectedRow = event.instance.selectedRow.subscribe((el) => {
            console.log(el);
        });
    }
}
OkPortalDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: OkPortalDialogComponent, deps: [{ token: i0.Injector }, { token: i1$1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
OkPortalDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: OkPortalDialogComponent, selector: "megakill-ok-portal-dialog", ngImport: i0, template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content style=\"height: 100%\">\n        <ng-template [cdkPortalOutlet]=\"componentPortal\" (attached)=\"onPortalAttached($event)\"></ng-template>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"primary\">OK</button>\n</div>", dependencies: [{ kind: "directive", type: i1$1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1$1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1$1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: OkPortalDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-ok-portal-dialog', template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content style=\"height: 100%\">\n        <ng-template [cdkPortalOutlet]=\"componentPortal\" (attached)=\"onPortalAttached($event)\"></ng-template>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"primary\">OK</button>\n</div>" }]
        }], ctorParameters: function () {
        return [{ type: i0.Injector }, { type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }];
    } });

class SelectPortalDialogComponent {
    constructor(injector, dialogRef, data) {
        this.injector = injector;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
        this.componentData = null;
        if (data && data.title) {
            this.title = data.title;
        }
        if (!data || !data.component) {
            throw new Error('SelectDialog: data.component is undefined');
        }
        this.component = data.component;
        if (!data.componentData) {
            throw new Error('SelectDialog: data.component.componentData is undefined');
        }
        this.componentData = data.componentData;
        this.componentPortal = new ComponentPortal(this.component, null, this.createInjector(this.componentData));
    }
    createInjector(dataToPass) {
        const injectorTokens = new WeakMap();
        injectorTokens.set(CONTAINER_DATA, dataToPass);
        return new PortalInjector(this.injector, injectorTokens);
    }
    ngOnInit() { }
    onPortalAttached(event) {
        console.log(event.instance.selectedRow);
        console.log(event);
        this.eventSelectedRow = event.instance.selectedRow.subscribe((row) => {
            console.log(row);
            this.selectedRow = row;
            console.log("SelectPortalDialogComponent -> onPortalAttached -> this.selectedRow", this.selectedRow);
        });
    }
    getSelectedRowAfterClose() {
        this.dialogRef.close(this.selectedRow);
        console.log("SelectPortalDialogComponent -> getSelectedRowAfterClose -> this.dialogRef.close(this.selectedRow);", this.selectedRow);
    }
}
SelectPortalDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: SelectPortalDialogComponent, deps: [{ token: i0.Injector }, { token: i1$1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
SelectPortalDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: SelectPortalDialogComponent, selector: "megakill-select-portal-dialog", ngImport: i0, template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content style=\"height: 100%\">\n        <ng-template [cdkPortalOutlet]=\"componentPortal\" (attached)=\"onPortalAttached($event)\"></ng-template>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>ANULEAZ\u0102</button>\n        <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"primary\" (click)=\"getSelectedRowAfterClose()\">SELECTEAZ\u0102</button>\n</div>\n", dependencies: [{ kind: "directive", type: i1$1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1$1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1$1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: SelectPortalDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-select-portal-dialog', template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content style=\"height: 100%\">\n        <ng-template [cdkPortalOutlet]=\"componentPortal\" (attached)=\"onPortalAttached($event)\"></ng-template>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>ANULEAZ\u0102</button>\n        <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"primary\" (click)=\"getSelectedRowAfterClose()\">SELECTEAZ\u0102</button>\n</div>\n" }]
        }], ctorParameters: function () {
        return [{ type: i0.Injector }, { type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }];
    } });

class MegakillCommonModule {
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

const RO_DATE_FORMATS = {
    parse: {
        dateInput: 'DD.MM.YYYY',
    },
    display: {
        dateInput: 'DD.MM.YYYY',
        monthYearLabel: 'MM.YYYY',
        dateA11yLabel: 'DD.MM.YYYY',
        monthYearA11yLabel: 'MM.YYYY',
    },
};

const AG_GRID_LOCALE_TEXT_RO = {
    // for filter panel
    page: 'Pagina',
    more: 'Mai mult',
    to: 'la',
    of: 'din',
    next: 'Următoarea',
    last: 'Ultima',
    first: 'Prima',
    previous: 'Precedenta',
    loadingOoo: 'Se încarcă...',
    // for set filter
    selectAll: 'Selectează tot',
    searchOoo: 'Caută...',
    blanks: 'Goale',
    // for number filter and text filter
    filterOoo: 'Filtrează...',
    applyFilter: 'Aplică filtru...',
    equals: 'Egal',
    notEqual: 'Diferit',
    // for number filter
    lessThan: 'Mai mic ca',
    greaterThan: 'Mai mare ca',
    lessThanOrEqual: 'Mai mic sau egal',
    greaterThanOrEqual: 'Mai mare sau egal',
    inRange: 'Între',
    // for text filter
    contains: 'Conține',
    notContains: 'Nu conține',
    startsWith: 'Începe cu',
    endsWith: 'Se termină cu',
    // filter conditions
    andCondition: 'Și',
    orCondition: 'Sau',
    // the header of the default group column
    group: 'Grup',
    // tool panel
    columns: 'Coloane',
    filters: 'Filtre',
    rowGroupColumns: 'Coloane pivot',
    rowGroupColumnsEmptyMessage: 'Trage coloanele în grup',
    valueColumns: 'Coloane cu valori',
    pivotMode: 'Mod pivot',
    groups: 'Grupuri',
    values: 'Valori',
    pivots: 'Pivoți',
    valueColumnsEmptyMessage: 'Trage coloanele pentru agregare',
    pivotColumnsEmptyMessage: 'Trage coloanele pentru pivotare',
    toolPanelButton: 'Unelte',
    // other
    noRowsToShow: 'Nicio intrare.',
    // enterprise menu
    pinColumn: 'Pin-uiește coloana',
    valueAggregation: 'Agregare valorică',
    autosizeThiscolumn: 'Auto-dimensionează această coloana',
    autosizeAllColumns: 'Auto-dimensionează toate coloanele',
    groupBy: 'Grupeaza după',
    ungroupBy: 'Negrupează după',
    resetColumns: 'Resetează coloanele',
    expandAll: 'Expandează',
    collapseAll: 'Contractă',
    toolPanel: 'Unelte',
    export: 'Exportă',
    csvExport: 'Export CSV',
    excelExport: 'Export Excel (.xlsx)',
    excelXmlExport: 'Export Excel (.xml)',
    // enterprise menu (charts)
    pivotChartAndPivotMode: 'Grafic Pivot & Mod Pivot',
    pivotChart: 'Grafic pivot',
    chartRange: 'Rază grafic',
    columnChart: 'Coloană',
    groupedColumn: 'Grupat',
    stackedColumn: 'Stivuit',
    normalizedColumn: 'Stivuit 100%',
    barChart: 'Bare',
    groupedBar: 'Bare grupate',
    stackedBar: 'Bare stivuite',
    normalizedBar: 'Bare stivuite 100%',
    pieChart: 'Plăcintă',
    pie: 'Plăcintă',
    doughnut: 'Gogoașă',
    line: 'Linie',
    xyChart: 'X Y (Dispersat)',
    scatter: 'Dispersat',
    bubble: 'Bule',
    areaChart: 'Suprafață',
    area: 'Suprafață',
    stackedArea: 'Suprafață stivuit',
    normalizedArea: 'Suprafață stivuit 100%',
    // enterprise menu pinning
    pinLeft: 'Pin la stânga <<',
    pinRight: 'Pin la dreapta >>',
    noPin: 'Fără pin <>',
    // enterprise menu aggregation and status bar
    sum: 'Sumă',
    min: 'Minim',
    max: 'Maxim',
    none: 'Niciunul',
    count: 'Nr. intrări',
    average: 'Medie',
    filteredRows: 'Filtrate',
    selectedRows: 'Selectate',
    totalRows: 'Nr. total intrări',
    totalAndFilteredRows: 'intrări',
    // standard menu
    copy: 'Copiază',
    copyWithHeaders: 'Copiază cu capete de tabel',
    ctrlC: 'Ctrl + C',
    paste: 'Lipește',
    ctrlV: 'Ctrl + V',
    // charts
    pivotChartTitle: 'Grafic pivot',
    rangeChartTitle: 'Grafic rază',
    settings: 'Setări',
    data: 'Date',
    format: 'Format',
    categories: 'Categorii',
    series: 'Serii',
    axis: 'Axă',
    color: 'Culoare',
    thickness: 'Grosime',
    xRotation: 'Rotație X',
    yRotation: 'Rotație Y',
    ticks: 'Ticks',
    width: 'Lățime',
    length: 'Lungime',
    padding: 'Padding',
    chart: 'Grafic',
    title: 'Titlu',
    font: 'Font',
    top: 'Sus',
    right: 'Dreapta',
    bottom: 'Jos',
    left: 'Stânga',
    labels: 'Nume',
    size: 'Mărime',
    legend: 'Legendă',
    position: 'Poziție',
    markerSize: 'Mărime marker',
    markerStroke: 'Contur marker',
    markerPadding: 'Padding marker',
    itemPaddingX: 'Padding Item X',
    itemPaddingY: 'Padding Item Y',
    strokeWidth: 'Lățime contur',
    offset: 'Offset',
    tooltips: 'Tooltip-uri',
    offsets: 'Offset-uri',
    callout: 'Callout',
    markers: 'Markere',
    shadow: 'Umbră',
    blur: 'Blur',
    xOffset: 'Offset X',
    yOffset: 'Offset Y',
    lineWidth: 'Lățime linie',
    normal: 'Normal',
    bold: 'Bold',
    italic: 'Italic',
    boldItalic: 'Bold Italic',
    fillOpacity: 'Opacitate Fill',
    strokeOpacity: 'Opacitate Linie',
    columnGroup: 'Coloană',
    barGroup: 'Bară',
    pieGroup: 'Plăcintă',
    lineGroup: 'Linie',
    scatterGroup: 'Dispersie',
    areaGroup: 'Suprafață',
    groupedColumnTooltip: 'Grupat',
    stackedColumnTooltip: 'Stivuit',
    normalizedColumnTooltip: 'Stivuit 100%',
    groupedBarTooltip: 'Grupat',
    stackedBarTooltip: 'Stivuit',
    normalizedBarTooltip: 'Stivuit 100%',
    pieTooltip: 'Plăcintă',
    doughnutTooltip: 'Gogoașă',
    lineTooltip: 'Linie',
    groupedAreaTooltip: 'Grupat',
    stackedAreaTooltip: 'Stivuit',
    normalizedAreaTooltip: 'Stivuit 100%',
    scatterTooltip: 'Dispersie',
    bubbleTooltip: 'Bule',
    noDataToChart: 'Nu există date disponibile pentru a fi incluse în grafic.',
    pivotChartRequiresPivotMode: 'Graficul pivot necesită activarea modului pivot.'
};

class AuthService {
    constructor(router, config) {
        var _a, _b, _c;
        this.router = router;
        this.config = config;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = from(createAuth0Client({
            domain: (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth.domain,
            client_id: (_b = this.config) === null || _b === void 0 ? void 0 : _b.auth.client_id,
            redirect_uri: `${window.location.origin}/manage/callback`,
            audience: (_c = this.config) === null || _c === void 0 ? void 0 : _c.auth.audience
        })).pipe(shareReplay(1), // Every subscription receives the same shared value
        catchError(err => throwError(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(concatMap((client) => from(client.isAuthenticated())), tap(res => this.loggedIn = res));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(concatMap((client) => from(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new BehaviorSubject(null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = false;
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(concatMap((client) => from(client.getUser(options))), tap(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(concatMap((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return of(loggedIn);
        }));
        checkAuth$.subscribe((response) => {
            // If authenticated, response will be user object
            // If not authenticated, response will be 'false'
            this.loggedIn = !!response;
        });
    }
    login(redirectPath = '/') {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: `${window.location.origin}/manage/callback`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Only the callback component should call this method
        // Call when app reloads after user logs in with Auth0
        let targetRoute; // Path to redirect to after login processsed
        const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        tap(cbRes => {
            // Get and set target redirect route from callback results
            targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }), concatMap(() => {
            // Redirect callback complete; get user and login status
            return combineLatest(this.getUser$(), this.isAuthenticated$);
        }));
        // Subscribe to authentication completion observable
        // Response will be an array of user and login status
        authComplete$.subscribe(([user, loggedIn]) => {
            // Redirect to target route after callback processing
            this.router.navigate([targetRoute]);
        });
    }
    getTokenSilently$(options) {
        return this.auth0Client$.pipe(concatMap((client) => from(client.getTokenSilently(options))));
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            var _a;
            // Call method to log out
            client.logout({
                client_id: (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth.client_id,
                returnTo: `${window.location.origin}`
            });
        });
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthService, deps: [{ token: i1$2.Router }, { token: MegakillCommonModuleConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1$2.Router }, { type: MegakillCommonModuleConfig, decorators: [{
                        type: Optional
                    }] }];
    } });

class CallbackComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.handleAuthCallback();
    }
}
CallbackComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CallbackComponent, deps: [{ token: AuthService }], target: i0.ɵɵFactoryTarget.Component });
CallbackComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: CallbackComponent, selector: "megakill-callback", ngImport: i0, template: "" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CallbackComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-callback', template: "" }]
        }], ctorParameters: function () { return [{ type: AuthService }]; } });

class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.isAuthenticated$.pipe(tap(loggedIn => {
            if (!loggedIn) {
                this.auth.login(state.url);
            }
        }));
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthGuard, deps: [{ token: AuthService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AuthService }]; } });

class OkDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
        this.message = '';
        if (data && data.title) {
            this.title = data.title;
        }
        if (data && data.message) {
            this.message = data.message;
        }
    }
    ngOnInit() { }
}
OkDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: OkDialogComponent, deps: [{ token: i1$1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
OkDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: OkDialogComponent, selector: "megakill-ok-dialog", ngImport: i0, template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content>\n        <p>{{message}}</p>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button mat-dialog-close=\"true\" cdkFocusInitial color=\"primary\">OK</button>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: OkDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-ok-dialog', template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content>\n        <p>{{message}}</p>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button mat-dialog-close=\"true\" cdkFocusInitial color=\"primary\">OK</button>\n</div>" }]
        }], ctorParameters: function () {
        return [{ type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }];
    } });

class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openOkDialog(data) {
        return this.dialog.open(OkDialogComponent, { data });
    }
    openOkPortalDialog(data) {
        return this.dialog.open(OkPortalDialogComponent, { data, width: '90vw', maxWidth: '90vw', height: '80vh' });
    }
    openSelectPortalDialog(data) {
        return this.dialog.open(SelectPortalDialogComponent, { data, width: '90vw', maxWidth: '90vw', height: '80vh' });
    }
}
DialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: DialogService, deps: [{ token: i1$1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
DialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: DialogService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: DialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.MatDialog }]; } });

class ActionsRenderer {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    agInit(params) {
        this.params = params;
    }
    edit() {
        this.params.context.componentParent.edit(this.params.data);
    }
    delete() {
        this.params.context.componentParent.delete(this.params.data);
    }
    showHistory() {
        const dialogRef = this.dialogService.openOkPortalDialog({
            title: 'Istoric',
            component: this.params.context.componentParent.historyDialogComponentType,
            componentData: {
                id: this.params.data._id
            }
        });
        return dialogRef;
    }
    refreshParent() {
        this.params.context.componentParent.getData();
    }
    refresh() {
        return false;
    }
}
ActionsRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: ActionsRenderer, deps: [{ token: DialogService }], target: i0.ɵɵFactoryTarget.Component });
ActionsRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: ActionsRenderer, selector: "megakill-actions-renderer", ngImport: i0, template: "<button mat-icon-button (click)=\"edit()\" matTooltip=\"Editeaz\u0103\" color=\"primary\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>edit</mat-icon> -->\n  <!-- TO DO: i18n (temp) -->\n  Editeaz\u0103\n</button>\n<button mat-icon-button (click)=\"delete()\" matTooltip=\"\u0218terge\" color=\"accent\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>delete</mat-icon> -->\n  <!-- TO DO: i18n (temp) -->\n  \u0218terge\n</button>\n<!-- TO DO: i18n -->\n<button mat-icon-button (click)=\"showHistory()\" matTooltip=\"Vezi istoricul\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>history</mat-icon> -->\n  <!-- TO DO: i18n (temp)-->\n  Istoric\n</button>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: ActionsRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-actions-renderer', template: "<button mat-icon-button (click)=\"edit()\" matTooltip=\"Editeaz\u0103\" color=\"primary\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>edit</mat-icon> -->\n  <!-- TO DO: i18n (temp) -->\n  Editeaz\u0103\n</button>\n<button mat-icon-button (click)=\"delete()\" matTooltip=\"\u0218terge\" color=\"accent\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>delete</mat-icon> -->\n  <!-- TO DO: i18n (temp) -->\n  \u0218terge\n</button>\n<!-- TO DO: i18n -->\n<button mat-icon-button (click)=\"showHistory()\" matTooltip=\"Vezi istoricul\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>history</mat-icon> -->\n  <!-- TO DO: i18n (temp)-->\n  Istoric\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: DialogService }]; } });

class BooleanRenderer {
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
}
BooleanRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: BooleanRenderer, deps: [], target: i0.ɵɵFactoryTarget.Component });
BooleanRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: BooleanRenderer, selector: "megakill-boolean-renderer", ngImport: i0, template: "<!-- TO DO: i18n -->\n{{ params.value ? 'Da' : 'Nu' }}\n<!-- TO DO: replace icon with SVG -->\n<!-- <mat-icon *ngIf=\"params.value === true\" style=\"margin-top: 10px\">check</mat-icon> -->\n<!-- TO DO: replace icon with SVG -->\n<!-- <mat-icon *ngIf=\"params.value === false\" style=\"margin-top: 10px\">clear</mat-icon> -->", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: BooleanRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-boolean-renderer', template: "<!-- TO DO: i18n -->\n{{ params.value ? 'Da' : 'Nu' }}\n<!-- TO DO: replace icon with SVG -->\n<!-- <mat-icon *ngIf=\"params.value === true\" style=\"margin-top: 10px\">check</mat-icon> -->\n<!-- TO DO: replace icon with SVG -->\n<!-- <mat-icon *ngIf=\"params.value === false\" style=\"margin-top: 10px\">clear</mat-icon> -->" }]
        }] });

class DownloadRenderer {
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
    download() {
        return this.s3Service.download(this.params.value);
    }
}
DownloadRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: DownloadRenderer, deps: [{ token: S3Service }], target: i0.ɵɵFactoryTarget.Component });
DownloadRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: DownloadRenderer, selector: "megakill-download-renderer", ngImport: i0, template: "<!-- TO DO: replace mat-icon with svgs -->\n\n<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace mat-icon with svgs -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n\n<!-- TO DO: i18n -->\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace mat-icon with svgs -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: DownloadRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-download-renderer', template: "<!-- TO DO: replace mat-icon with svgs -->\n\n<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace mat-icon with svgs -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n\n<!-- TO DO: i18n -->\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace mat-icon with svgs -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: S3Service }]; } });

class LocalDownloadRenderer {
    constructor(localFilesService) {
        this.localFilesService = localFilesService;
    }
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
    download() {
        return this.localFilesService.download(this.params.value);
    }
}
LocalDownloadRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalDownloadRenderer, deps: [{ token: LocalFilesService }], target: i0.ɵɵFactoryTarget.Component });
LocalDownloadRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: LocalDownloadRenderer, selector: "appointments-solution-local-download-renderer", ngImport: i0, template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalDownloadRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'appointments-solution-local-download-renderer', template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: LocalFilesService }]; } });

class LocalPhotoRenderer {
    constructor(localFilesService) {
        this.localFilesService = localFilesService;
    }
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
    download() {
        return this.localFilesService.download(this.params.value);
    }
}
LocalPhotoRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalPhotoRenderer, deps: [{ token: LocalFilesService }], target: i0.ɵɵFactoryTarget.Component });
LocalPhotoRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: LocalPhotoRenderer, selector: "megakill-local-photo-renderer", ngImport: i0, template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>visibility</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>VIZUALIZEAZ\u0102 FOTOGRAFIA</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalPhotoRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-local-photo-renderer', template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>visibility</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>VIZUALIZEAZ\u0102 FOTOGRAFIA</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: LocalFilesService }]; } });

class S3DownloadRenderer {
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
    download() {
        return this.s3Service.download(this.params.value);
    }
}
S3DownloadRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3DownloadRenderer, deps: [{ token: S3Service }], target: i0.ɵɵFactoryTarget.Component });
S3DownloadRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: S3DownloadRenderer, selector: "appointments-solution-s3-download-renderer", ngImport: i0, template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3DownloadRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'appointments-solution-s3-download-renderer', template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: S3Service }]; } });

class S3PhotoRenderer {
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
    download() {
        return this.s3Service.download(this.params.value);
    }
}
S3PhotoRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3PhotoRenderer, deps: [{ token: S3Service }], target: i0.ɵɵFactoryTarget.Component });
S3PhotoRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: S3PhotoRenderer, selector: "megakill-s3-photo-renderer", ngImport: i0, template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>visibility</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>VIZUALIZEAZ\u0102 FOTOGRAFIA</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3PhotoRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-s3-photo-renderer', template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>visibility</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>VIZUALIZEAZ\u0102 FOTOGRAFIA</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: S3Service }]; } });

/*
 * Public API Surface of common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AG_GRID_LOCALE_TEXT_RO, ActionsRenderer, AuthGuard, AuthService, BooleanRenderer, CONTAINER_DATA, CallbackComponent, CsvService, DownloadRenderer, FormatterService, LocalDownloadRenderer, LocalFilesService, LocalPhotoRenderer, MegakillCommonModule, RO_DATE_FORMATS, S3DownloadRenderer, S3PhotoRenderer, S3Service };
//# sourceMappingURL=megakill-common.mjs.map