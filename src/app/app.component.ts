import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    HostListener,
    Inject,
    OnDestroy,
    OnInit,
    PLATFORM_ID
} from '@angular/core';
import {isPlatformBrowser,  registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {routerTransition} from "./animations/animations";
import {Observable} from "rxjs";
import {Select} from "@ngxs/store";
import {AppContextModel, AppContextState} from "./store/states";
import {ScreenInstallService} from "./services/screen-install.service";
//Регистрация русской локали
registerLocaleData(localeRu, 'ru');

@Component({
  selector: 'app-root',
    templateUrl : 'app.component.html',
    styleUrls: ['app.component.css'],
    animations : [routerTransition] ,
    changeDetection : ChangeDetectionStrategy.OnPush,

})
export class AppComponent implements OnInit, OnDestroy{
    
    public subscribes = [];
    
    @HostBinding('class') public appColorClass ;
    //Потеря фокуса
    @HostListener('window:blur') public onBlur(){
	console.log('onblur') ;
    }
    //Востановление фокуса
    @HostListener('window:focus') public onFocus(){
	console.log('onfocus') ;
    }
    
    constructor(
        public changeRef : ChangeDetectorRef,
        public screenInstallService : ScreenInstallService,
        @Inject(PLATFORM_ID) private platformId: Object) {
    }
    
    @Select(AppContextState) appContext$ : Observable<AppContextModel> ;
    
    ngOnInit() {
	//Если браузер
	if (isPlatformBrowser(this.platformId)) {
	    this.screenInstallService.initialize();
	    this.subscribes.push(this.appContext$.subscribe((appContext : any) => {
		if (!/null|undefined/.test(appContext.appColorClass)) {
		    this.appColorClass = appContext.appColorClass;
		    this.changeRef.markForCheck();
		}
	    }) );
	}
    }
    
    ngOnDestroy(){
	this.subscribes.forEach(sub => sub.unsubscribe());
    }
    
    getState(outlet){
	return outlet.activatedRouteData.type;
    }
}
