import { fairygui } from "./fairygui";
// 没有设置导出且没有被其他组件引用的组件将不会被导出类型!
// 不符合命名规则的组件,导出名将使用`__ID__${组件id}`来代替!
// 不符合变量命名规则的属性(不符合正则:`/^[$_a-zA-Z]+[$_dw]*$/`)不会被导出!
// 非自定义名称的属性(系统自动生成名字的属性, 符合正则：`/^n[0-9]+$/`)不会被导出！
declare namespace uit {
	// ==================================== strict ======================================
	// 严格约束`getController`参数类型
	type StrictGetController<T, U extends string | undefined> = T extends { getController(name: string): infer R }
	  ? { getController(name: U extends undefined ? never : U): R } & Omit<T, "getController">
	  : T;
	// 严格约束`getTransition`参数类型
	type StrictGetTransition<T, U extends string | undefined> = T extends { getTransition(name: string): infer R }
	  ? { getTransition(name: U extends undefined ? never : U): R } & Omit<T, "getTransition">
	  : T;
	// 严格约束`getChild`参数类型和返回类型
	type StrictGetChild<T, U extends { [x: string]: unknown } | undefined> = T extends { getChild(name: string): unknown }
	  ? {
	      // 不存在此属性，请勿调用，仅用于存储类型
	      readonly __DisplayListType__?: U;
	      getChild<P extends keyof U>(name: P): U[P];
	    } & Omit<T, "getChild">
	  : T;
	// 严格模式的组件
	type StrictComponent<
	  Component,
	  DisplayList extends { [x: string]: unknown } | undefined = undefined,
	  Controller extends string | undefined = undefined,
	  Transition extends string | undefined = undefined
	> = StrictGetChild<StrictGetController<StrictGetTransition<Component, Transition>, Controller>, DisplayList>;
	// ==================================== strict ======================================
	import __pkg__v8r15bds = UILib;
	namespace UILib {
		namespace Components.btn {
			type BtnEmpty = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type RadioBtn2 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsCanRed', undefined>;
			type BtnClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnAdd = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type Btn6 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type Btn7 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type BtnCutDown = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type BtnTip = StrictComponent<fairygui.GButton, undefined, undefined, undefined>;
			type BtnBig1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnSearch = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnCommonRight = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type BtnWindowClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnTip1 = StrictComponent<fairygui.GButton, undefined, undefined, undefined>;
			type Btn3 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnSmall1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnSmall2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnSmall3 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnSmall4 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnSmall5 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnBig2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnBig3 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnBig4 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnBig5 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnTip2 = StrictComponent<fairygui.GButton, undefined, undefined, undefined>;
			type BtnClose1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnSmall6 = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnStar = StrictComponent<fairygui.GButton, undefined, 'button' | 'conHaveStar', undefined>;
			type BtnClose2 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnTip3 = StrictComponent<fairygui.GButton, undefined, undefined, undefined>;
			type BtnClose3 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnWindowClose1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnIcon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnClose5 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.renderer {
			type RewardRender1 = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly loaderTreasureQuality: fairygui.GLoader;
				readonly graphAniBg: fairygui.GGraph;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderArmy: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly loaderSpecial: fairygui.GLoader;
				readonly loaderTreasureLogo: fairygui.GLoader;
				readonly listTreasureStar: fairygui.GList;
				readonly imgSel: fairygui.GImage;
				readonly heroLinesQuality: fairygui.GLoader;
				readonly txtCount: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtLv: fairygui.GTextField;
			}, 'button' | 'conShowName' | 'conExtra' | 'conDouble' | 'conChip' | 'conArmy' | 'isGodSoldier' | 'isSpecial', undefined>;
			type ItemCheckRender = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly txtCount: fairygui.GTextField;
				readonly txtName: Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'button', undefined>;
			type ConsumeRender = StrictComponent<fairygui.GButton, {
				readonly imgBg: fairygui.GLoader;
				readonly btnItem: Components.renderer.ConsumeMask;
				readonly title: fairygui.GRichTextField;
			}, 'bgState', undefined>;
			type HeroStarRender = StrictComponent<fairygui.GComponent, {
				readonly loaderStar: fairygui.GLoader;
			}, 'conStarColor', undefined>;
			type RewardRender2 = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly loaderTreasureQuality: fairygui.GLoader;
				readonly graphAniBg: fairygui.GGraph;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderArmy: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly loaderSpecial: fairygui.GLoader;
				readonly loaderTreasureLogo: fairygui.GLoader;
				readonly listTreasureStar: fairygui.GList;
				readonly imgSel: fairygui.GImage;
				readonly heroLinesQuality: fairygui.GLoader;
				readonly txtCount: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtLv: fairygui.GTextField;
			}, 'button' | 'conShowName' | 'conExtra' | 'conDouble' | 'conChip' | 'conArmy' | 'isGodSoldier' | 'isSpecial', undefined>;
			type RewardRender3 = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly loaderTreasureQuality: fairygui.GLoader;
				readonly graphAniBg: fairygui.GGraph;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderArmy: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly loaderSpecial: fairygui.GLoader;
				readonly loaderTreasureLogo: fairygui.GLoader;
				readonly listTreasureStar: fairygui.GList;
				readonly imgSel: fairygui.GImage;
				readonly heroLinesQuality: fairygui.GLoader;
				readonly txtCount: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtLv: fairygui.GTextField;
			}, 'button' | 'conShowName' | 'conExtra' | 'conDouble' | 'conChip' | 'conArmy' | 'isGodSoldier' | 'isSpecial', undefined>;
			type RewardRender4 = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly loaderTreasureQuality: fairygui.GLoader;
				readonly graphAniBg: fairygui.GGraph;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderArmy: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly loaderSpecial: fairygui.GLoader;
				readonly loaderTreasureLogo: fairygui.GLoader;
				readonly listTreasureStar: fairygui.GList;
				readonly imgSel: fairygui.GImage;
				readonly heroLinesQuality: fairygui.GLoader;
				readonly txtCount: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtLv: fairygui.GTextField;
			}, 'button' | 'conShowName' | 'conExtra' | 'conDouble' | 'conChip' | 'conArmy' | 'isGodSoldier' | 'isSpecial', undefined>;
			type ConsumeMask = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, 'button', undefined>;
			type RewardRenderForEffect4 = StrictComponent<fairygui.GButton, {
				readonly rewardRender: Components.renderer.RewardRender4;
			}, 'button', undefined>;
			type RewardRenderForEffect1 = StrictComponent<fairygui.GButton, {
				readonly rewardRender: Components.renderer.RewardRender1;
			}, 'button', undefined>;
			type RewardRenderForEffect2 = StrictComponent<fairygui.GButton, {
				readonly rewardRender: Components.renderer.RewardRender2;
			}, 'button', undefined>;
			type GetWayRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly btnGo: Components.btn.BtnIcon;
				readonly listHero: fairygui.GList;
				readonly txtName: Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtTip: Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly yyTxt: fairygui.GTextField;
				readonly numTxt: fairygui.GTextField;
			}, 'conShowHero' | 'conOpen' | 'conBtnIcon' | 'numCon', undefined>;
		}
		namespace Components.frame {
			type Component_Empty = StrictComponent<fairygui.GComponent, undefined, undefined, undefined>;
			type Frame1 = StrictComponent<fairygui.GButton, {
				readonly title: Components.fontTab1.__cmpt__i098a3tlpi;
			}, undefined, undefined>;
			type Frame4 = StrictComponent<fairygui.GButton, {
				readonly close: Components.btn.BtnWindowClose1;
				readonly title: Components.fontTab_richText.__cmpt__i098a3tlpi;
			}, undefined, undefined>;
			type Frame5 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'conIsVisibleImg', undefined>;
			type Frame6 = StrictComponent<fairygui.GButton, {
				readonly title: Components.fontTab1.__cmpt__i098a3tlpi;
			}, 'conShowTitle', undefined>;
			type Frame7 = StrictComponent<fairygui.GButton, {
				readonly close: Components.btn.BtnWindowClose;
			}, undefined, undefined>;
		}
		namespace Components.button_checkbox {
			type Button_Check1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type Button_Check2 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type Button_Check3 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type Button_Check4 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type Button_Check5 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
		namespace Components.btnArrows {
			type BtnArrows1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnArrows2 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnArrows3 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnArrows4 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnArrows5 = StrictComponent<fairygui.GButton, {
				readonly redPoint1: fairygui.GImage;
			}, 'isRed', undefined>;
		}
		namespace Components.proBar {
			type ProgressBarAffair = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBarGreen = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBarGreen1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBarOrange = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBarRed = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBarYellow = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBarBlue = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: Components.fontTab1.__cmpt__i098a3tlph;
			}, undefined, undefined>;
			type ProgressBarBlue1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type ProgressBarYellow1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBarYellow2 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
		}
		namespace Components {
			type TroopFightSelectCom = StrictComponent<fairygui.GComponent, {
				readonly btnAdd: Components.btn.BtnBig1;
				readonly btnOk: Components.btn.BtnBig1;
				readonly troopList: fairygui.GList;
				readonly txtSelect: Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly TxtConsume2: fairygui.GRichTextField;
				readonly TxtConsume1: fairygui.GRichTextField;
			}, 'conIsShowConsume', undefined>;
			type CircleMaskProgressCom = StrictComponent<fairygui.GComponent, {
				readonly maskGraph: fairygui.GGraph;
			}, undefined, undefined>;
			type GetWayCom = StrictComponent<fairygui.GComponent, {
				readonly listGetWay: fairygui.GList;
			}, undefined, undefined>;
			type QualityDarkCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
			}, undefined, undefined>;
			type QualityLightCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
			}, undefined, undefined>;
			type CommonDarkDesCom = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: Components.fontTab.__cmpt__v5p1a3tlgz;
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.button_radio {
			type Button_Radio1 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type Button_Radio0 = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type Button_Radio2 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type Button_Radio3 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsRight' | 'conIsCanRed', undefined>;
			type Button_Radio4 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.countryRender {
			type CountryCityRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type CountrySmallRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type CountryFightSmallRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
		}
		namespace Components.silder {
			type silder_com_3 = StrictComponent<fairygui.GSlider, {
				readonly bg: fairygui.GImage;
				readonly bar: fairygui.GImage;
				readonly gripBg: fairygui.GImage;
				readonly grip1: Components.silder.silder_com_3_grip;
				readonly grip: Components.btn.BtnEmpty;
				readonly curNum: Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type silder_com_3_grip = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.fontTab {
			type __cmpt__v5p1a3tlgy = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__v5p1a3tlgz = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__v5p1a3tlh0 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__v5p1a3tlh2 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__v5p1a3tlh3 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__v5p1a3tlh4 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__v5p1a3tlh5 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__v5p1a3tlh7 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__v5p1a3tlh8 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlha = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhb = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhc = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhd = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhe = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhf = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhg = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhh = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhi = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhj = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhm = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhq = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhs = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlht = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhu = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhv = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhx = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhy = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__f73xa3tlhz = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljh = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tlji = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljj = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljk = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljl = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljm = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljn = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljo = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljp = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljq = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljr = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljs = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljt = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tlju = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__kyk1a3tljv = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__e9fra3tlk5 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__e9fra3tlk6 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__e9fra3tlk7 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__e9fra3tlk8 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dldaa3tlkf = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dldaa3tlkg = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__tr9ia3tlku = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__tr9ia3tlkw = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__jyc6a3tlky = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__jyc6a3tlkz = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__9i4xa3tll0 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__9i4xa3tll1 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__9i4xa3tll2 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__9i4xa3tll3 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__9i4xa3tll4 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dkjpa3tll8 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__cv0fa3tlld = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oa3ga3tllk = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type GradientLabel = StrictComponent<fairygui.GLabel, {
				readonly txtContent: fairygui.GRichTextField;
				readonly maskGraph: fairygui.GGraph;
			}, undefined, undefined>;
			type __cmpt__gsraa3tlly = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__rq3da3tlmx = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__rq3da3tlmy = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.btnSpecial {
			type BtnRecharge = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnGet = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type BtnBuy = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnGoToRecharge = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnBlue = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnOrang = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
		}
		namespace Components.title {
			type CommonTitleDark = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CommonTitleLight = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CommonTitleEstate = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.fontTab_richText {
			type __cmpt__oeaia3tlp6 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlp8 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlp9 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlpa = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlpb = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlpc = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlpd = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlpe = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlpf = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__oeaia3tlpg = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__i098a3tlph = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__i098a3tlpi = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__i098a3tlpj = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__i098a3tlpk = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__i098a3tlpl = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__s0zca3tlpo = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__s0zca3tlpp = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlpq = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlpr = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlps = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlpt = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlpu = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlpv = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlpw = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlpx = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlpy = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlq0 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlq1 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlq2 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__dr9ba3tlq3 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__sxsxa3tlq7 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__sxsxa3tlq8 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__sxsxa3tlq9 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__sxsxa3tlqa = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__sxsxa3tlqb = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__su2va3tlqc = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__hsfga3tlqd = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__hsfga3tlqf = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__lxexa3tlqg = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__r27sa3tlqj = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__jd7wa3tlqk = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__evuca3tlqn = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__nik3a3tlqo = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__nik3a3tlqp = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__nik3a3tlqq = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__qc44a3tlqt = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__m8naa3tlqw = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__m8naa3tlqx = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__lj961no8tzf = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__lj961no8tzg = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__lj961no8tzh = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__lj961no8tzi = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__txlt1no8tzm = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__uj3e1no8u0x = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__uj3e1no8u0y = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.btnAct {
			type BtnAct1 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnAct2 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnAct3 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnAct4 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnAct5 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnAct6 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnAct2_1 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
		}
		namespace Components.progressBar {
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBar2 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBar3 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBar4 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBar5 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBar6 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBar7 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace Components.selectBtn {
			type SelectBtn = StrictComponent<fairygui.GComponent, undefined, undefined, 'loop' | 'select'>;
		}
		namespace Components.fontTab_text {
			type __cmpt__qmdq1no8u5v = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u5w = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u5x = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u5y = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u5z = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u60 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u61 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u62 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u63 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u64 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u65 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u66 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u67 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u68 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u69 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6a = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6b = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6c = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6d = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6e = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6f = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6g = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6h = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6i = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6j = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6k = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6l = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6m = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6n = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6o = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6p = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6q = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6r = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6s = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6t = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6u = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6v = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6w = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6x = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6y = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u6z = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u70 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u71 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u72 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u73 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u74 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u75 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u76 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u77 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u78 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u79 = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u7a = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u7b = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u7c = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__qmdq1no8u7d = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
}
