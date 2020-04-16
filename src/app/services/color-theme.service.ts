import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";
import {StateContext, Store} from "@ngxs/store";
import {Actions} from "../store/actions";
import ColorThemeAction = Actions.ColorThemeAction;
import {isPlatformBrowser} from "@angular/common";
import {AppContextModel, AppContextState} from "../store/states";

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {
    
    public colorItems = [
	{colorClass : 'first-theme', backgroundColor : '#ffeb3b', color : '#cca023', light: 'rgba(255,238,88,0.71)', active : false, iconColor : '#000', even : 'rgba(255,238,88,0.11)', odd : 'rgba(255,238,88,0.15)', highlight : 'rgba(255,238,88,0.36)'},
	{colorClass : 'second-theme', backgroundColor : '#2196f3', color : '#2d74aa',light: 'rgba(66,165,245,0.51)', active : true, iconColor : '#fff', even : 'rgba(66,165,245,0.05)', odd : 'rgba(66,165,245,0.07)', highlight : 'rgba(66,165,245,0.26)'},
	{colorClass : 'third-theme', backgroundColor : '#ff5722', color : '#c13316',light: 'rgba(255,114,69,0.51)', active : false, iconColor : '#fff', even : 'rgba(255,112,67,0.05)', odd : 'rgba(255,112,67,0.11)', highlight : 'rgba(255,112,67,0.25)'},
	{colorClass : 'forth-theme', backgroundColor : '#3f51b5', color : 'rgba(39,23,135,0.92)',light: 'rgba(92,107,192,0.51)', active : false, iconColor : '#fff', even : 'rgba(92,107,192,0.07)', odd : 'rgba(92,107,192,0.11)', highlight : 'rgba(92,107,192,0.26)'},
    ] ;

    constructor(
      public overlay : 	OverlayContainer,
      public store : Store,
      @Inject(PLATFORM_ID) private platformId: Object,
) {
	if (isPlatformBrowser(this.platformId)) {
	    //Установка значения цвета при старте приложения
	    window.localStorage.getItem('appColorClass') || window.localStorage.setItem('appColorClass', this.store.selectSnapshot((store : any) => store.appContext.appColorClass))
	}
    }
    
    setAppTheme(selector) {
	this.overlay.getContainerElement().classList.add(selector);
	window.localStorage.setItem('appColorClass', selector);
	this.store.dispatch(new ColorThemeAction(selector));
	return selector;
    }
    getThemeColor(type){
        //Получения цвета приложения по имени свойства объекта цвета: backgroundColor , color , light
	let colorClass = this.store.selectSnapshot(state => state.colorClass);
        return this.colorItems.filter(color => color.colorClass === colorClass)[0][type];
    }
    
    getNeededColor(index){
	return 0 === index % 2 ? this.getThemeColor('even') : this.getThemeColor('odd')
    }
    
/*    onActiveRow(prop){
	let target = prop.event.currentTarget,
	    contactRestriction = window.localStorage.getItem('contactRestriction'); //0 - 1 ; 1 - auto
	target.classList.toggle('active');
	let active =  target.classList.contains('active');
	if(active){
	    //Если условия соблюдены
	    if((contactRestriction == '0' && Object.keys(this.appContext.activeContacts).length < 1) || contactRestriction == '1'){
	    }else{
		document.querySelectorAll('div.table-contact').forEach((cont :HTMLElement, inx) => {
		    cont.style.backgroundColor = this.getNeededColor(inx);
		});
		//this.appContext.activeContacts = {};
		//Выдать уведомление о невозможности добавления контакта
		/!*	      console.log('Невозможно добавить контакт. Превышает ограничение добавления контактов.')  ;
			      return false;*!/
	    }
	}
	target.style.backgroundColor = active ? this.getThemeColor('highlight') : this.getNeededColor(prop.index);
	
	prop.activatedContact.emit({contact : prop.contact, add : active}) ;
    }*/
}
