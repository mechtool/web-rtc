import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(()=> {
      if ('serviceWorker' in navigator) {
	  /*	  navigator.serviceWorker.register('service-worker.js', {
			scope: './'
		    }).then((registration) =>{}).catch (function (error) {
			// Произошла ошибка при регистрации Service Worker.
			// Файл service-worker.js может быть недоступным или содержать ошибки синтаксиса.
		    });*/
      } else {
	  // Данный браузер не поддерживает Service Worker.
      }
  })
  .catch(err => console.error(err));
});
