import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {libraryComponent} from './library.component';
import {RouterModule, Routes} from '@angular/router';
import {NbActionsModule, NbCardModule, NbLayoutModule, NbProgressBarModule, NbSpinnerModule} from '@nebular/theme';
import {HeaderModule} from '../header/header.module';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LibraryPdfComponent} from './library-pdf/library-pdf.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';

const routes: Routes = [
    {path: '', component: libraryComponent},
    {path: 'pdf', component: LibraryPdfComponent},
];

@NgModule({
    declarations: [libraryComponent, LibraryPdfComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        NbLayoutModule,
        NbProgressBarModule,
        NbActionsModule,
        NbCardModule,
        NbSpinnerModule,
        HeaderModule,
        HttpClientModule,
        PdfViewerModule
    ]
})
export class libraryModule {
}
