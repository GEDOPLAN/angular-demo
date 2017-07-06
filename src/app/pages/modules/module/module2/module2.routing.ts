import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component'

export const ROUTES = RouterModule.forChild([
    { path: '', component: PageComponent }
]);