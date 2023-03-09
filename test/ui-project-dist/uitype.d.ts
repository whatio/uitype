import * as fairygui from 'fairygui-cc';
// 没有设置导出且没有被其他组件引用的组件将不会被导出类型!
// 不符合命名规则的包,导出名将使用`__pkg__${包id}`来代替!
// 不符合命名规则的组件,导出名将使用`__cmpt__${组件id}`来代替!
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
			type BtnEmpty = StrictComponent<Button, undefined, 'button', undefined>;
				type RadioBtn2 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsCanRed', undefined>;
			type BtnClose = StrictComponent<Button, undefined, 'button', undefined>;
				type BtnAdd = StrictComponent<Button, {
					readonly icon: loader;
				}, 'button' | 'conIsGray', undefined>;
				type Btn6 = StrictComponent<Button, {
					readonly title: richtext;
					readonly icon: loader;
				}, 'button' | 'conIsGray', undefined>;
				type Btn7 = StrictComponent<Button, {
					readonly title: richtext;
					readonly icon: loader;
				}, 'button' | 'conIsGray', undefined>;
				type BtnCutDown = StrictComponent<Button, {
					readonly icon: loader;
				}, 'button' | 'conIsGray', undefined>;
				type BtnBig1 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
			type BtnSearch = StrictComponent<Button, undefined, 'button', undefined>;
				type BtnCommonRight = StrictComponent<Button, {
					readonly icon: loader;
				}, 'button' | 'conIsGray', undefined>;
			type BtnWindowClose = StrictComponent<Button, undefined, 'button', undefined>;
				type Btn3 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button', undefined>;
				type BtnSmall1 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
				type BtnSmall2 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
				type BtnSmall3 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
				type BtnSmall4 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
				type BtnSmall5 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
				type BtnBig2 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
				type BtnBig3 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
				type BtnBig4 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
				type BtnBig5 = StrictComponent<Button, {
					readonly icon: image;
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
			type BtnClose1 = StrictComponent<Button, undefined, 'button', undefined>;
				type BtnSmall6 = StrictComponent<Button, {
					readonly bg: image;
					readonly redPoint: image;
					readonly icon: loader;
					readonly title: richtext;
				}, 'button' | 'conIsGray', undefined>;
			type BtnStar = StrictComponent<Button, undefined, 'button' | 'conHaveStar', undefined>;
			type BtnClose2 = StrictComponent<Button, undefined, 'button', undefined>;
			type BtnClose3 = StrictComponent<Button, undefined, 'button', undefined>;
			type BtnWindowClose1 = StrictComponent<Button, undefined, 'button', undefined>;
				type BtnIcon = StrictComponent<Button, {
					readonly icon: loader;
				}, 'button', undefined>;
			type BtnClose5 = StrictComponent<Button, undefined, 'button', undefined>;
		}
		namespace Components.renderer {
				type RewardRender1 = StrictComponent<Button, {
					readonly iconQuality: loader;
					readonly loaderTreasureQuality: loader;
					readonly graphAniBg: graph;
					readonly imgIcon: loader;
					readonly loaderFrame: loader;
					readonly loaderArmy: loader;
					readonly graphAni: graph;
					readonly loaderSpecial: loader;
					readonly loaderTreasureLogo: loader;
					readonly listTreasureStar: list;
					readonly imgSel: image;
					readonly heroLinesQuality: loader;
					readonly txtCount: text;
					readonly txtName: text;
					readonly txtLv: text;
				}, 'button' | 'conShowName' | 'conExtra' | 'conDouble' | 'conChip' | 'conArmy' | 'isGodSoldier' | 'isSpecial', undefined>;
				type ItemCheckRender = StrictComponent<Button, {
					readonly iconQuality: loader;
					readonly imgIcon: loader;
					readonly loaderFrame: loader;
					readonly txtCount: text;
					readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				}, 'button', undefined>;
				type ConsumeRender = StrictComponent<Button, {
					readonly imgBg: loader;
					readonly btnItem: UILib.Components.renderer.ConsumeMask;
					readonly title: richtext;
				}, 'bgState', undefined>;
				type HeroStarRender = StrictComponent<component, {
					readonly loaderStar: loader;
				}, 'conStarColor', undefined>;
				type RewardRender2 = StrictComponent<Button, {
					readonly iconQuality: loader;
					readonly loaderTreasureQuality: loader;
					readonly graphAniBg: graph;
					readonly imgIcon: loader;
					readonly loaderFrame: loader;
					readonly loaderArmy: loader;
					readonly graphAni: graph;
					readonly loaderSpecial: loader;
					readonly loaderTreasureLogo: loader;
					readonly listTreasureStar: list;
					readonly imgSel: image;
					readonly heroLinesQuality: loader;
					readonly txtCount: text;
					readonly txtName: text;
					readonly txtLv: text;
				}, 'button' | 'conShowName' | 'conExtra' | 'conDouble' | 'conChip' | 'conArmy' | 'isGodSoldier' | 'isSpecial', undefined>;
				type RewardRender3 = StrictComponent<Button, {
					readonly iconQuality: loader;
					readonly loaderTreasureQuality: loader;
					readonly graphAniBg: graph;
					readonly imgIcon: loader;
					readonly loaderFrame: loader;
					readonly loaderArmy: loader;
					readonly graphAni: graph;
					readonly loaderSpecial: loader;
					readonly loaderTreasureLogo: loader;
					readonly listTreasureStar: list;
					readonly imgSel: image;
					readonly heroLinesQuality: loader;
					readonly txtCount: text;
					readonly txtName: text;
					readonly txtLv: text;
				}, 'button' | 'conShowName' | 'conExtra' | 'conDouble' | 'conChip' | 'conArmy' | 'isGodSoldier' | 'isSpecial', undefined>;
				type RewardRender4 = StrictComponent<Button, {
					readonly iconQuality: loader;
					readonly loaderTreasureQuality: loader;
					readonly graphAniBg: graph;
					readonly imgIcon: loader;
					readonly loaderFrame: loader;
					readonly loaderArmy: loader;
					readonly graphAni: graph;
					readonly loaderSpecial: loader;
					readonly loaderTreasureLogo: loader;
					readonly listTreasureStar: list;
					readonly imgSel: image;
					readonly heroLinesQuality: loader;
					readonly txtCount: text;
					readonly txtName: text;
					readonly txtLv: text;
				}, 'button' | 'conShowName' | 'conExtra' | 'conDouble' | 'conChip' | 'conArmy' | 'isGodSoldier' | 'isSpecial', undefined>;
				type ConsumeMask = StrictComponent<Button, {
					readonly loaderBg: loader;
					readonly icon: loader;
					readonly loaderFrame: loader;
				}, 'button', undefined>;
				type RewardRenderForEffect4 = StrictComponent<Button, {
					readonly rewardRender: UILib.Components.renderer.RewardRender4;
				}, 'button', undefined>;
				type RewardRenderForEffect1 = StrictComponent<Button, {
					readonly rewardRender: UILib.Components.renderer.RewardRender1;
				}, 'button', undefined>;
				type RewardRenderForEffect2 = StrictComponent<Button, {
					readonly rewardRender: UILib.Components.renderer.RewardRender2;
				}, 'button', undefined>;
				type GetWayRender = StrictComponent<component, {
					readonly loaderIcon: loader;
					readonly btnGo: UILib.Components.btn.BtnIcon;
					readonly listHero: list;
					readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
					readonly txtTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
					readonly yyTxt: text;
					readonly numTxt: text;
				}, 'conShowHero' | 'conOpen' | 'conBtnIcon' | 'numCon', undefined>;
		}
		namespace Components.frame {
				type Frame1 = StrictComponent<Button, {
					readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpi;
				}, undefined, undefined>;
				type Frame4 = StrictComponent<Button, {
					readonly close: UILib.Components.btn.BtnWindowClose1;
					readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpi;
				}, undefined, undefined>;
				type Frame5 = StrictComponent<Button, {
					readonly icon: loader;
				}, 'conIsVisibleImg', undefined>;
				type Frame6 = StrictComponent<Button, {
					readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpi;
				}, 'conShowTitle', undefined>;
				type Frame7 = StrictComponent<Button, {
					readonly close: UILib.Components.btn.BtnWindowClose;
				}, undefined, undefined>;
		}
		namespace Components.button_checkbox {
			type Button_Check1 = StrictComponent<Button, undefined, 'button', undefined>;
			type Button_Check2 = StrictComponent<Button, undefined, 'button', undefined>;
				type Button_Check3 = StrictComponent<Button, {
					readonly title: richtext;
				}, 'button', undefined>;
			type Button_Check4 = StrictComponent<Button, undefined, 'button', undefined>;
				type Button_Check5 = StrictComponent<Button, {
					readonly title: richtext;
				}, 'button', undefined>;
		}
		namespace Components.btnArrows {
				type BtnArrows1 = StrictComponent<Button, {
					readonly icon: loader;
				}, 'button', undefined>;
			type BtnArrows2 = StrictComponent<Button, undefined, 'button', undefined>;
			type BtnArrows3 = StrictComponent<Button, undefined, 'button', undefined>;
			type BtnArrows4 = StrictComponent<Button, undefined, 'button', undefined>;
				type BtnArrows5 = StrictComponent<Button, {
					readonly redPoint1: image;
				}, 'isRed', undefined>;
		}
		namespace Components.proBar {
				type ProgressBarAffair = StrictComponent<ProgressBar, {
					readonly bar: image;
				}, undefined, undefined>;
				type ProgressBarGreen = StrictComponent<ProgressBar, {
					readonly bar: image;
				}, undefined, undefined>;
				type ProgressBarGreen1 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBarOrange = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBarRed = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBarYellow = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBarBlue = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				}, undefined, undefined>;
				type ProgressBarBlue1 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: richtext;
				}, undefined, undefined>;
				type ProgressBarYellow1 = StrictComponent<ProgressBar, {
					readonly bar: image;
				}, undefined, undefined>;
				type ProgressBarYellow2 = StrictComponent<ProgressBar, {
					readonly bar: image;
				}, undefined, undefined>;
				type ProgressBar1 = StrictComponent<ProgressBar, {
					readonly bar: image;
				}, undefined, undefined>;
		}
		namespace Components {
				type TroopFightSelectCom = StrictComponent<component, {
					readonly btnAdd: UILib.Components.btn.BtnBig1;
					readonly btnOk: UILib.Components.btn.BtnBig1;
					readonly troopList: list;
					readonly txtSelect: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
					readonly TxtConsume2: richtext;
					readonly TxtConsume1: richtext;
				}, 'conIsShowConsume', undefined>;
				type CircleMaskProgressCom = StrictComponent<component, {
					readonly maskGraph: graph;
				}, undefined, undefined>;
				type GetWayCom = StrictComponent<component, {
					readonly listGetWay: list;
				}, undefined, undefined>;
				type QualityDarkCom = StrictComponent<component, {
					readonly loaderBg: loader;
				}, undefined, undefined>;
				type QualityLightCom = StrictComponent<component, {
					readonly loaderBg: loader;
				}, undefined, undefined>;
				type CommonDarkDesCom = StrictComponent<Button, {
					readonly icon: loader;
					readonly title: UILib.Components.fontTab.__cmpt__v5p1a3tlgz;
					readonly txtDes: richtext;
				}, undefined, undefined>;
		}
		namespace Components.button_radio {
				type Button_Radio1 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly icon: loader;
				}, 'button', undefined>;
				type Button_Radio0 = StrictComponent<Button, {
					readonly bgLoader: loader;
					readonly icon: loader;
					readonly title: text;
					readonly redPoint: image;
				}, 'button', undefined>;
				type Button_Radio2 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: richtext;
				}, 'button', undefined>;
				type Button_Radio3 = StrictComponent<Button, {
					readonly icon: loader;
					readonly redPoint: image;
				}, 'button' | 'conIsRight' | 'conIsCanRed', undefined>;
				type Button_Radio4 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button', undefined>;
		}
		namespace Components.countryRender {
				type CountryCityRender = StrictComponent<Button, {
					readonly icon: loader;
				}, undefined, undefined>;
				type CountrySmallRender = StrictComponent<Button, {
					readonly icon: loader;
				}, undefined, undefined>;
				type CountryFightSmallRender = StrictComponent<Button, {
					readonly icon: loader;
				}, undefined, undefined>;
		}
		namespace Components.silder {
				type silder_com_3 = StrictComponent<Slider, {
					readonly bg: image;
					readonly bar: image;
					readonly gripBg: image;
					readonly grip1: UILib.Components.silder.silder_com_3_grip;
					readonly grip: UILib.Components.btn.BtnEmpty;
					readonly curNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				}, undefined, undefined>;
			type silder_com_3_grip = StrictComponent<Button, undefined, 'button', undefined>;
		}
		namespace Components.fontTab {
				type __cmpt__v5p1a3tlgy = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__v5p1a3tlgz = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__v5p1a3tlh0 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__v5p1a3tlh2 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__v5p1a3tlh3 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__v5p1a3tlh4 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__v5p1a3tlh5 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__v5p1a3tlh7 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__v5p1a3tlh8 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlha = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhb = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhc = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhd = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhe = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhf = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhg = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhh = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhi = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhj = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhm = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhq = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhs = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlht = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhu = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhv = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhx = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhy = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__f73xa3tlhz = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljh = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tlji = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljj = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljk = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljl = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljm = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljn = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljo = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljp = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljq = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljr = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljs = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljt = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tlju = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__kyk1a3tljv = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__e9fra3tlk5 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__e9fra3tlk6 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__e9fra3tlk7 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__e9fra3tlk8 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dldaa3tlkf = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dldaa3tlkg = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__tr9ia3tlku = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__tr9ia3tlkw = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__jyc6a3tlky = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__jyc6a3tlkz = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__9i4xa3tll0 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__9i4xa3tll1 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__9i4xa3tll2 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__9i4xa3tll3 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__9i4xa3tll4 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dkjpa3tll8 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__cv0fa3tlld = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oa3ga3tllk = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type GradientLabel = StrictComponent<Label, {
					readonly txtContent: richtext;
					readonly maskGraph: graph;
				}, undefined, undefined>;
				type __cmpt__gsraa3tlly = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__rq3da3tlmx = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__rq3da3tlmy = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
		}
		namespace Components.btnSpecial {
				type BtnRecharge = StrictComponent<Button, {
					readonly icon: loader;
				}, 'button', undefined>;
				type BtnGet = StrictComponent<Button, {
					readonly redPoint: image;
					readonly icon: loader;
				}, 'button' | 'conIsGray', undefined>;
				type BtnBuy = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsGray', undefined>;
				type BtnGoToRecharge = StrictComponent<Button, {
					readonly icon: loader;
				}, 'button', undefined>;
				type BtnBlue = StrictComponent<Button, {
					readonly icon: loader;
				}, 'button', undefined>;
				type BtnOrang = StrictComponent<Button, {
					readonly redPoint: image;
					readonly icon: loader;
				}, 'button' | 'conIsGray', undefined>;
		}
		namespace Components.title {
				type CommonTitleDark = StrictComponent<Button, {
					readonly title: text;
				}, 'button', undefined>;
				type CommonTitleLight = StrictComponent<Button, {
					readonly title: text;
				}, 'button', undefined>;
				type CommonTitleEstate = StrictComponent<Button, {
					readonly title: text;
				}, 'button', undefined>;
		}
		namespace Components.fontTab_richText {
				type __cmpt__oeaia3tlp6 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlp8 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlp9 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlpa = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlpb = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlpc = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlpd = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlpe = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlpf = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__oeaia3tlpg = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__i098a3tlph = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__i098a3tlpi = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__i098a3tlpj = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__i098a3tlpk = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__i098a3tlpl = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__s0zca3tlpo = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__s0zca3tlpp = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlpq = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlpr = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlps = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlpt = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlpu = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlpv = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlpw = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlpx = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlpy = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlq0 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlq1 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlq2 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__dr9ba3tlq3 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__sxsxa3tlq7 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__sxsxa3tlq8 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__sxsxa3tlq9 = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__sxsxa3tlqa = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__sxsxa3tlqb = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__su2va3tlqc = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__hsfga3tlqd = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__hsfga3tlqf = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__lxexa3tlqg = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__r27sa3tlqj = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__jd7wa3tlqk = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__evuca3tlqn = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__nik3a3tlqo = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__nik3a3tlqp = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__nik3a3tlqq = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__qc44a3tlqt = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__m8naa3tlqw = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__m8naa3tlqx = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__lj961no8tzf = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__lj961no8tzg = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__lj961no8tzh = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__lj961no8tzi = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__txlt1no8tzm = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__uj3e1no8u0x = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
				type __cmpt__uj3e1no8u0y = StrictComponent<Label, {
					readonly title: richtext;
				}, undefined, undefined>;
		}
		namespace Components.btnAct {
				type BtnAct1 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsGray', undefined>;
				type BtnAct2 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsGray', undefined>;
				type BtnAct3 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsGray', undefined>;
				type BtnAct4 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsGray', undefined>;
				type BtnAct5 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsGray', undefined>;
				type BtnAct6 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsGray', undefined>;
				type BtnAct2_1 = StrictComponent<Button, {
					readonly redPoint: image;
					readonly title: text;
				}, 'button' | 'conIsGray', undefined>;
		}
		namespace Components.progressBar {
				type ProgressBar1 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBar2 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBar3 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBar4 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBar5 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBar6 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
				type ProgressBar7 = StrictComponent<ProgressBar, {
					readonly bar: image;
					readonly title: text;
				}, undefined, undefined>;
		}
		namespace Components.selectBtn {
				type SelectBtn = StrictComponent<component, {
					readonly loop: transition;
					readonly select: transition;
				}, undefined, undefined>;
		}
		namespace Components.fontTab_text {
				type __cmpt__qmdq1no8u5v = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u5w = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u5x = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u5y = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u5z = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u60 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u61 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u62 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u63 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u64 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u65 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u66 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u67 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u68 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u69 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6a = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6b = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6c = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6d = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6e = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6f = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6g = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6h = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6i = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6j = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6k = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6l = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6m = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6n = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6o = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6p = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6q = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6r = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6s = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6t = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6u = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6v = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6w = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6x = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6y = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u6z = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u70 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u71 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u72 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u73 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u74 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u75 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u76 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u77 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u78 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u79 = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u7a = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u7b = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u7c = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
				type __cmpt__qmdq1no8u7d = StrictComponent<Label, {
					readonly title: text;
				}, undefined, undefined>;
		}
		}
}
