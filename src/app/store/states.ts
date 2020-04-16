import {Action, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Actions} from "./actions";
import {Contact} from "../classes/Classes";
import ColorThemeAction = Actions.ColorThemeAction;
import AppUserAction = Actions.AppUserAction;
import BeforeInstallAction = Actions.BeforeInstallAction;

export interface AppContextModel {
    appColorClass : string;
    beforeInstall : boolean | Event;
    appUser : Contact,
}

@State<any>({
    name: 'appContext',
    defaults: {
	appColorClass : '',
	beforeInstall : false,
	appUser : undefined,
    }
})
@Injectable()
export class AppContextState {
    @Action(ColorThemeAction) setColorTheme(ctx: StateContext<AppContextModel>, action: ColorThemeAction) {
	ctx.patchState({appColorClass: action.appColorClass});
    }
    @Action(BeforeInstallAction) setBeforeInstall(ctx: StateContext<AppContextModel>, action: BeforeInstallAction) {
	ctx.patchState({beforeInstall: action.beforeInstall});
    }
    @Action(AppUserAction) setAppUser(ctx: StateContext<AppContextModel>, action: AppUserAction) {
	ctx.patchState({ appUser: action.appUser});
    }
}


