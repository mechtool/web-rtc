import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenInstallService {

  constructor() {}
  initialize(){
      //Обработка события установки приложения на экран устройства
      window.addEventListener("beforeinstallprompt", (beforeInstallPromptEvent) => {
	  //Управление переходит в этот обработчик, если приложение еще не установлено на экран (каждый раз)
	  //и не переходит, когда приложение уже установлено
	  beforeInstallPromptEvent.preventDefault(); // Предотвратить немедленный запуск отображения диалога
	  //this.appContext.beforeInstall.next(beforeInstallPromptEvent);
      });
      //прослушивание события 'appinstall' для определения установки приложения на экран устройства
      window.addEventListener("appinstalled", (evt) => {
	  //Управление переходит в этот обработчик сразу (next tick) после принятия
	  //предложения об установки приложения один раз и больще никогда не переходит.
	  //приложение уже установлено на экран устройства
	  //this.appContext.beforeInstall.next(false);
	  debugger;
      });
  }
}
