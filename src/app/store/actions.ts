import {Contact} from "../classes/Classes";

export namespace Actions {
    
    export class ColorThemeAction {
	static readonly type = '[App] Change ColorTheme';
	constructor(public appColorClass: string) {}
    }
    export class BeforeInstallAction {
	static readonly type = '[App] Change Before install';
	constructor(public beforeInstall: false | Event) {}
    }
    export class AppUserAction {
	static readonly type = '[App] Change AppUser';
	constructor(public appUser: Contact) {}
    }
}
