import { bootstrapApplication } from '@angular/platform-browser';
import { Childangularelement } from './app/childangularelement/childangularelement';
import { provideHttpClient } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

bootstrapApplication(Childangularelement, {
  providers: [provideHttpClient()]
}).then(appRef => {
  const injector = appRef.injector;
  const element = createCustomElement(Childangularelement, { injector });
  customElements.define('child-angular-element', element);
}).catch(err => console.error(err));
