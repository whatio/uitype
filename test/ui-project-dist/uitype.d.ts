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
	import __pkg__clbhyzs2 = Academy;
	namespace Academy {
		type WendaoView = StrictComponent<fairygui.GComponent, {
			readonly icon: fairygui.GLoader;
			readonly loaderChooseClose: fairygui.GLoader;
			readonly txtSkillName: fairygui.GTextField;
			readonly listHero: fairygui.GList;
			readonly listGoods: fairygui.GList;
			readonly btnScreen: UILib.Components.btn.BtnSmall2;
			readonly btnTip: fairygui.GButton;
			readonly btnWendao: UILib.Components.btn.BtnBig1;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly btnLock: UILib.Components.btn.BtnBig4;
			readonly renConsume: UILib.Components.renderer.ConsumeRender;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly btnCutDown: UILib.Components.btn.BtnCutDown;
			readonly slider: UILib.Components.silder.silder_com_3;
			readonly txtNoHeroTip: fairygui.GTextField;
		}, 'isLock' | 'conIsChoose' | 'conType' | 'conIsHaveDebris' | 'conIsNull', 't0'>;
		type WendaoTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnCancel: UILib.Components.btn.BtnBig5;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnNoPrompt: UILib.Components.button_checkbox.Button_Check4;
			readonly btnSel: UILib.Components.btn.BtnEmpty;
		}, undefined, undefined>;
		type WendaoScreenWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listSkill: fairygui.GList;
			readonly listItem: fairygui.GList;
			readonly listBtn: fairygui.GList;
		}, 'conIsSkill', undefined>;
		namespace Components.render {
			type WendaoHeroRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly btnBigLock: fairygui.GImage;
				readonly txtNum: fairygui.GTextField;
			}, 'button' | 'isLock', undefined>;
			type WendaoGoodsRender = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender1;
				readonly debrisType: fairygui.GLoader;
			}, 'button' | 'goodsType', undefined>;
			type WendaoSkillRender = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly imgIcon: fairygui.GLoader;
				readonly textName: fairygui.GTextField;
			}, 'button', undefined>;
			type WendaoItemRender = StrictComponent<fairygui.GButton, {
				readonly btntitle: UILib.Components.title.CommonTitleDark;
				readonly listItem: fairygui.GList;
			}, 'button', undefined>;
		}
	}
	import __pkg__ub2hoytf = AccountLogout;
	namespace AccountLogout {
		type AccountLogoutWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: AccountLogout.Components.AccountLogoutFrame;
			readonly btnClose: AccountLogout.Components.AccountWindowClose;
			readonly btnLogout: AccountLogout.Components.AccountBtnOk;
			readonly btnFreeze: AccountLogout.Components.AccountBtnOk;
			readonly btnCancelLogout: AccountLogout.Components.AccountBtnCancel;
			readonly btnOk: AccountLogout.Components.AccountBtnCancel;
			readonly btnCancelFreeze: AccountLogout.Components.AccountBtnCancel;
			readonly tipStr: fairygui.GRichTextField;
		}, 'logoutState', undefined>;
		type AccountLogoutView = StrictComponent<fairygui.GComponent, {
			readonly closeBg: fairygui.GGraph;
			readonly aLogoutWindow: AccountLogout.AccountLogoutWindow;
		}, undefined, undefined>;
		namespace Components {
			type AccountLogoutFrame = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'conIsVisibleImg', undefined>;
			type AccountWindowClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type AccountBtnOk = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type AccountBtnCancel = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
		}
	}
	import __pkg__7mjqpm4v = AccountWelfare;
	namespace AccountWelfare {
		type AccountWelfareView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly tabList: fairygui.GList;
		}, undefined, undefined>;
		type BindAccountSubView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly tip: fairygui.GLoader;
			readonly taskList: fairygui.GList;
			readonly rewardRender0: UILib.Components.renderer.RewardRender2;
			readonly rewardRender1: UILib.Components.renderer.RewardRender2;
			readonly txtTip: UILib.Components.fontTab.__cmpt__f73xa3tlht;
		}, undefined, undefined>;
		type QuestionnaireSubView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly tip: fairygui.GLoader;
			readonly taskList: fairygui.GList;
		}, undefined, undefined>;
		type CommunitySubView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly tip: fairygui.GLoader;
			readonly taskList: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type BindAccountTab = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BindAccountTaskRender = StrictComponent<fairygui.GComponent, {
				readonly btnGo: UILib.Components.btn.BtnSmall2;
				readonly txtTask: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			}, 'finishedState', undefined>;
			type QuestionnaireRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly txtTask: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly box: AccountWelfare.Components.Btn;
			}, 'finishedState', undefined>;
			type Btn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type CommunityRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly titleLoader: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, undefined, undefined>;
		}
	}
	import __pkg__97v7i0tm = Activity;
	namespace Activity {
		type ActivityWindow = StrictComponent<fairygui.GComponent, {
			readonly icon: fairygui.GLoader;
			readonly img_title: fairygui.GLoader;
			readonly heroGraph: fairygui.GGraph;
			readonly img_des: fairygui.GLoader;
			readonly nameQuality: fairygui.GLoader;
			readonly heroQualtiy: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly txtName: fairygui.GTextField;
			readonly item1: Activity.Render.ActivityRewardRender;
			readonly item2: Activity.Render.ActivityRewardRender;
			readonly item3: Activity.Render.ActivityRewardRender;
			readonly item4: Activity.Render.ActivityRewardRender;
			readonly item5: Activity.Render.ActivityRewardRender;
			readonly item6: Activity.Render.ActivityRewardRender;
			readonly btnGo: UILib.Components.btn.BtnEmpty;
			readonly btn_skillAni: UILib.Components.btn.BtnCutDown;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly listDes1: fairygui.GList;
			readonly listDes2: fairygui.GList;
			readonly listDes3: fairygui.GList;
			readonly listReward: fairygui.GList;
			readonly txtName1: fairygui.GTextField;
			readonly txtName2: fairygui.GTextField;
			readonly txtName3: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
			readonly gotoBtn: UILib.Components.btnAct.BtnAct2;
		}, 'conType', undefined>;
		namespace Render {
			type ActivityRewardRender = StrictComponent<fairygui.GButton, {
				readonly img_bg: fairygui.GLoader;
				readonly iconRender: Activity.Render.ActivityIconRender;
			}, undefined, undefined>;
			type ActivityIconRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type txtRender = StrictComponent<fairygui.GComponent, {
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__thupw6mw = ActOverview;
	namespace ActOverview {
		type ActOverviewView = StrictComponent<fairygui.GComponent, {
			readonly nameLoader: fairygui.GLoader;
			readonly listAct: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type ActOverviewRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderLab: fairygui.GLoader;
				readonly loaderTimeBg: fairygui.GLoader;
				readonly listReward: fairygui.GList;
				readonly redPoint: fairygui.GImage;
				readonly textTime: fairygui.GTextField;
				readonly textDesc: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'c1', undefined>;
		}
	}
	import __pkg__mw74illv = AffairRetrieve;
	namespace AffairRetrieve {
		type AffairRetrieveView = StrictComponent<fairygui.GComponent, {
			readonly topBg: fairygui.GLoader;
			readonly topBg2: fairygui.GLoader;
			readonly affairRender: AffairRetrieve.Components.AffairRetrieveRender;
			readonly affairList: fairygui.GList;
			readonly btnTipCheck: AffairRetrieve.Components.AffairRetrieveCheck;
			readonly affairTip: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
		}, undefined, undefined>;
		namespace Components {
			type AffairRetrieveRender = StrictComponent<fairygui.GComponent, {
				readonly retrieveIcon: fairygui.GLoader;
				readonly btnCutDown: UILib.Components.btn.BtnCutDown;
				readonly btnAdd: UILib.Components.btn.BtnAdd;
				readonly retrieveBtn: UILib.Components.btn.BtnSmall2;
				readonly rewardRender: UILib.Components.renderer.ConsumeRender;
				readonly slider: UILib.Components.silder.silder_com_3;
				readonly retrieveCount: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
				readonly retrieveTitle: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			}, undefined, undefined>;
			type AffairRetrieveCheck = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpc;
			}, 'button', undefined>;
		}
	}
	import __pkg__fd2vz1r2 = Alert;
	namespace Alert {
		type AlertWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly cancel: UILib.Components.btn.BtnBig2;
			readonly ok: UILib.Components.btn.BtnBig1;
			readonly close: UILib.Components.btn.BtnWindowClose1;
			readonly darkBg: fairygui.GImage;
			readonly txtInfo: fairygui.GRichTextField;
			readonly txtSecond: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly btnCheck: UILib.Components.button_checkbox.Button_Check1;
			readonly loaderIconUrl: fairygui.GLoader;
			readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly groupCost: fairygui.GGroup;
		}, 'isShowIcon' | 'conShowSecond', undefined>;
		type RechargeAlertWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly darkBg: fairygui.GImage;
			readonly ok: UILib.Components.btn.BtnBig1;
			readonly cancel: UILib.Components.btn.BtnBig1;
			readonly txtInfo: fairygui.GRichTextField;
		}, undefined, undefined>;
		type AlertUpdateWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly darkBg: fairygui.GImage;
			readonly ok: UILib.Components.btn.BtnBig1;
			readonly cancel: UILib.Components.btn.BtnBig4;
			readonly txtInfo: fairygui.GTextField;
		}, 'cancelState', undefined>;
		type TipsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly cancel: UILib.Components.btn.BtnBig2;
			readonly ok: UILib.Components.btn.BtnBig1;
			readonly darkBg: fairygui.GImage;
			readonly txtInfo: fairygui.GRichTextField;
		}, undefined, undefined>;
	}
	import __pkg__44r3c3ud = AlienInvade;
	namespace AlienInvade {
		type WorldAlienInvadeView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly troopFightSelectCom: UILib.Components.TroopFightSelectCom;
			readonly listReward: fairygui.GList;
			readonly txtFightPower: UILibHero.Components.fight.FightPowerRecommendBig;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
			readonly txtCount: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtLevel: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
		}, undefined, undefined>;
		type WorldAlienInvadeListView = StrictComponent<fairygui.GComponent, {
			readonly loader0: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loader1: fairygui.GLoader;
			readonly loader2: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly txtTroop: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6l;
			readonly txtLevel: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6i;
			readonly txtPro: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly btnLast: UILib.Components.btnArrows.BtnArrows1;
			readonly btnNext: UILib.Components.btnArrows.BtnArrows1;
			readonly btnTips: fairygui.GButton;
			readonly btnFight: UILib.Components.btn.BtnBig5;
			readonly redPoint: fairygui.GImage;
			readonly listEnemy: fairygui.GList;
			readonly txtFinishTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtRefresh: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conBossState', undefined>;
		type WorldAlienInvadePlanView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly txtFightPower: UILibHero.Components.fight.FightPowerRecommendBig;
			readonly proTask: UILib.Components.progressBar.ProgressBar4;
			readonly listReward: fairygui.GList;
			readonly comTask: AlienInvade.Components.WorldAlienInvadeTaskRender;
			readonly txtComplete: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
			readonly txtCount: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
		}, undefined, undefined>;
		type WorldAlienInvadeAttackWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderIcon: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly btnFight: UILib.Components.btn.BtnBig4;
			readonly btnCreate: UILib.Components.btn.BtnBig1;
			readonly loaderName: fairygui.GLoader;
			readonly txtName: fairygui.GTextField;
			readonly txtTroop: fairygui.GTextField;
			readonly txtFightPower: UILibHero.Components.fight.FightPowerRecommendBig;
		}, undefined, 't0'>;
		namespace Components {
			type WorldAlienInvadeTaskRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly listReward: fairygui.GList;
				readonly btnGet: UILib.Components.btn.BtnBig1;
				readonly btnGoTo: UILib.Components.btn.BtnBig3;
				readonly btnGoCity: UILib.Components.btn.BtnBig3;
				readonly btnCreate: UILib.Components.btn.BtnBig1;
				readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
				readonly txtDesc: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
				readonly txtDesc1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conTaskState', undefined>;
		}
		namespace Components.render {
			type WorldAlienInvadeRender = StrictComponent<fairygui.GComponent, {
				readonly loader0: fairygui.GLoader;
				readonly loaderIcon: fairygui.GGraph;
				readonly listReward: fairygui.GList;
				readonly btnFight: UILib.Components.btn.BtnEmpty;
				readonly btnGo: UILib.Components.btn.BtnEmpty;
				readonly btnGet: UILib.Components.btn.BtnEmpty;
				readonly btnLook: UILib.Components.btn.BtnEmpty;
				readonly txtTroop: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly loader1: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly txtState: fairygui.GTextField;
			}, 'conState' | 'conCityState', undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly txtPro: fairygui.GTextField;
				readonly mask: AlienInvade.Components.render.ProMask;
			}, undefined, undefined>;
			type ProMask = StrictComponent<fairygui.GComponent, {
				readonly txtPro: fairygui.GTextField;
				readonly bar: fairygui.GGraph;
			}, undefined, undefined>;
		}
	}
	import __pkg__dq4mljju = AndingCity;
	namespace AndingCity {
		type AndingDKRJView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly tipBg: fairygui.GLoader;
			readonly tiptBg11: fairygui.GLoader;
			readonly correct: fairygui.GLoader;
			readonly topicList: fairygui.GList;
			readonly tiptBg1111: fairygui.GLoader;
			readonly bg2: fairygui.GLoader;
			readonly proBar: UILib.Components.proBar.ProgressBarBlue1;
			readonly topicStr: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly topicCount: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly correctCount: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			readonly tipTimeStr: UILib.Components.fontTab_richText.__cmpt__lxexa3tlqg;
		}, 'correctState', 'correctAni'>;
		type AndingWudouView = StrictComponent<fairygui.GComponent, {
			readonly loaderRes: fairygui.GLoader;
			readonly loaderHand: fairygui.GLoader;
			readonly graphAtk: fairygui.GGraph;
			readonly loaderPowerBg: fairygui.GLoader;
			readonly progressHp: AndingCity.Components.wudouProgress;
			readonly btnAtk: UILib.Components.btn.BtnEmpty;
			readonly wudouPowerCom: fairygui.GComponent;
			readonly txtDes: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			readonly txtTalk: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			readonly txtRate: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			readonly txtAtkNum: fairygui.GTextField;
		}, 'conShowTalk' | 'conWin' | 'conState', 't0' | 't1' | 't3' | 't4'>;
		type AndingFightView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly loaderCity: fairygui.GLoader;
			readonly btnFight: UILib.Components.btn.BtnBig4;
			readonly btnGo: UILib.Components.btn.BtnBig3;
			readonly btnFightPower: UILibHero.Components.fight.FightPowerRecommendBig;
			readonly listHero: fairygui.GList;
			readonly txtNpcName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
			readonly txtLevel: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtCity: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTroopNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
		}, 'conIsHaveTroop' | 'conFightType', undefined>;
		type AndingFateView = StrictComponent<fairygui.GComponent, {
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly loaderName: fairygui.GLoader;
			readonly listFateChoose: fairygui.GList;
			readonly txtTime: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtCity: fairygui.GTextField;
			readonly txtDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, 't0'>;
		type AndingJianxiView = StrictComponent<fairygui.GComponent, {
			readonly comJianxi: AndingCity.Components.AndingCityJianxiCom;
			readonly progressTime: UILib.Components.proBar.ProgressBarAffair;
			readonly groWait: fairygui.GGroup;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__lxexa3tlqg;
		}, undefined, 'aniWait'>;
		type AndingSuttlementWindow = StrictComponent<fairygui.GComponent, {
			readonly light1: fairygui.GLoader;
			readonly bg1: fairygui.GImage;
			readonly loaderEvaluate: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly btnEmpty: UILib.Components.btn.BtnEmpty;
		}, undefined, undefined>;
		namespace Components {
			type wudouProgress = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type AndingCityJianxiCom = StrictComponent<fairygui.GComponent, {
				readonly btnNpc0: AndingCity.Components.render.jianxi.AndingJianxiRender;
				readonly btnNpc1: AndingCity.Components.render.jianxi.AndingJianxiRender;
				readonly btnNpc2: AndingCity.Components.render.jianxi.AndingJianxiRender;
				readonly btnNpc3: AndingCity.Components.render.jianxi.AndingJianxiRender;
				readonly btnNpc4: AndingCity.Components.render.jianxi.AndingJianxiRender;
				readonly btnNpc5: AndingCity.Components.render.jianxi.AndingJianxiRender;
				readonly btnNpc6: AndingCity.Components.render.jianxi.AndingJianxiRender;
			}, undefined, undefined>;
		}
		namespace Components.render.fate {
			type AndingCityFateHead = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conResult' | 'button', undefined>;
			type ProgressBarFate = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
			}, 'c1', 't0'>;
		}
		namespace Components.render.dkrj {
			type TopicRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly tipIcon: fairygui.GLoader;
				readonly tip: fairygui.GLoader;
				readonly topicStr: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlq2;
			}, 'selectState' | 'correctState' | 'button' | 'correctTip', undefined>;
		}
		namespace Components.render.jianxi {
			type AndingJianxiRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly btnHit0: UILib.Components.btn.BtnEmpty;
				readonly btnHit1: UILib.Components.btn.BtnEmpty;
			}, 'button' | 'conResult', undefined>;
		}
	}
	import __pkg__j4bs1kh2 = Arena;
	namespace Arena {
		type ArenaView = StrictComponent<fairygui.GComponent, {
			readonly btnRank: Arena.Components.Button1;
			readonly btnReport: Arena.Components.Button1;
			readonly btnShop: Arena.Components.Button1;
			readonly btnTip: fairygui.GButton;
			readonly btnRefresh: UILib.Components.btn.BtnBig1;
			readonly listRank: fairygui.GList;
			readonly comOwnRank: Arena.Components.Render.ArenaOwnRoleRender;
			readonly btnAddTimes: UILib.Components.btn.BtnAdd;
			readonly btnMaxRank: Arena.Components.ArenaSelectBtn1;
			readonly btnCur: Arena.Components.ArenaSelectBtn;
			readonly txtTimes: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
		}, 'conType', undefined>;
		type ArenaRankWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listRank: fairygui.GList;
			readonly selfRankRender: Arena.Components.Render.ArenaRankRender;
		}, undefined, undefined>;
		type ArenaReportView = StrictComponent<fairygui.GComponent, {
			readonly listReport: fairygui.GList;
		}, undefined, undefined>;
		type ArenaRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GLoader;
			readonly light1: fairygui.GLoader;
			readonly light2: fairygui.GLoader;
			readonly imgIcon: fairygui.GImage;
			readonly loaderIcon: fairygui.GLoader;
			readonly btnRewardRank: fairygui.GImage;
			readonly txtGoldNum: fairygui.GTextField;
			readonly firstRewardGro: fairygui.GGroup;
			readonly txtAreanNum: fairygui.GTextField;
			readonly txtCurRank: fairygui.GTextField;
			readonly txtNextRank: fairygui.GTextField;
		}, 'conResult', undefined>;
		type ArenaFormationView = StrictComponent<fairygui.GComponent, {
			readonly btnFight: UILib.Components.btn.BtnBig4;
			readonly listFormationEnemy: fairygui.GList;
			readonly listFormationSelf: fairygui.GList;
			readonly txtMyTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNPCTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		namespace Components {
			type Button1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type ArenaSelectBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ArenaSelectBtn1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.Render {
			type ArenaRankRender = StrictComponent<fairygui.GComponent, {
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly listReward: fairygui.GList;
				readonly txtRank: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtName1: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
			}, 'conRank' | 'comIsOwn', undefined>;
			type ArenaReportRender = StrictComponent<fairygui.GComponent, {
				readonly loaderCountrySelf: UILib.Components.countryRender.CountryCityRender;
				readonly loaderCountryEnemy: UILib.Components.countryRender.CountryCityRender;
				readonly listFormation: fairygui.GList;
				readonly listFormationEnemy: fairygui.GList;
				readonly btnLook: UILib.Components.btn.BtnSmall2;
				readonly txtRank: UILib.Components.fontTab.__cmpt__jyc6a3tlkz;
				readonly txtNameSelf: fairygui.GTextField;
				readonly txtNameEnemy: fairygui.GTextField;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly txtReport: fairygui.GTextField;
			}, 'conState' | 'conIsAtk' | 'conIsLast', undefined>;
			type HeroHeadRender = StrictComponent<fairygui.GButton, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
			}, 'conWin', undefined>;
			type ArenaFormationRender = StrictComponent<fairygui.GButton, {
				readonly comHero: Arena.Components.Render.ArenaChoiceRender;
				readonly txtOpenCondition: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpv;
				readonly imgAdd: fairygui.GImage;
			}, 'conSelf' | 'conNull', undefined>;
			type ArenaChoiceRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly progressFront: UILibHero.Components.render.other.ProgressArmy;
				readonly progressBack: UILibHero.Components.render.other.ProgressArmy;
				readonly blackBg: fairygui.GImage;
			}, 'conIsNotFight' | 'button', undefined>;
			type ArenaRoleRender = StrictComponent<fairygui.GComponent, {
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly btnShowRole: UILib.Components.btn.BtnEmpty;
				readonly btnChallenge: UILib.Components.btn.BtnSmall1;
				readonly txtRank: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			}, 'conRank' | 'conIsRank' | 'conIsOwn' | 'conIsMain', undefined>;
			type ArenaOwnRoleRender = StrictComponent<fairygui.GComponent, {
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly btnChallenge: UILib.Components.btn.BtnSmall4;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly btnShowRole: UILib.Components.btn.BtnEmpty;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtRank: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
			}, 'conRank' | 'conIsRank' | 'conIsOwn' | 'conIsMain', undefined>;
		}
	}
	import __pkg__idrto4w5 = ArmySkin;
	namespace ArmySkin {
		type ArmySkinWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly skinIcon: fairygui.GLoader;
			readonly attCom: ArmySkin.AttCom2;
			readonly titleDark: ArmySkin.render.CommonTitleDark;
			readonly btnCount: UILib.Components.renderer.ConsumeRender;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnLvUp: UILib.Components.btn.BtnBig3;
			readonly armyList: fairygui.GList;
		}, 'conState', undefined>;
		type AttCom = StrictComponent<fairygui.GComponent, {
			readonly baseAtt: ArmySkin.render.ArmySkinAttrRender;
			readonly advancedList: fairygui.GList;
		}, undefined, undefined>;
		type AttCom2 = StrictComponent<fairygui.GComponent, {
			readonly attCom: ArmySkin.AttCom;
		}, undefined, undefined>;
		namespace render {
			type ArmySkinAttrRender = StrictComponent<fairygui.GComponent, {
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtLv: fairygui.GTextField;
			}, undefined, undefined>;
			type ArmyRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly skinIcon: fairygui.GLoader;
				readonly comHero: ArmySkin.render.HeroCom;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'button' | 'conHero', undefined>;
			type HeroCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, undefined, undefined>;
			type SkinIcon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type CommonTitleDark = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__yonmkf47 = ArtifactFight;
	namespace ArtifactFight {
		type ArtifactFightView = StrictComponent<fairygui.GComponent, {
			readonly listTask: fairygui.GList;
			readonly proExp: ArtifactFight.Render.ProgressBar;
			readonly finshCount: fairygui.GTextField;
		}, undefined, 't0'>;
		namespace Render {
			type ArtifactFightTaskRender = StrictComponent<fairygui.GComponent, {
				readonly btnGo: UILib.Components.btnAct.BtnAct6;
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly txtName: fairygui.GTextField;
				readonly txt: fairygui.GTextField;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtReward: fairygui.GTextField;
				readonly effectAni: fairygui.GGraph;
			}, 'conState' | 'conEff', undefined>;
			type ArtifactFightAwardCom = StrictComponent<fairygui.GComponent, {
				readonly loaderReward1: fairygui.GLoader;
				readonly txtTime: fairygui.GTextField;
			}, 'conState' | 'conBig', 'aniRota'>;
			type ProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly exp0: ArtifactFight.Render.ArtifactFightAwardCom;
				readonly exp1: ArtifactFight.Render.ArtifactFightAwardCom;
				readonly exp2: ArtifactFight.Render.ArtifactFightAwardCom;
				readonly exp3: ArtifactFight.Render.ArtifactFightAwardCom;
				readonly exp4: ArtifactFight.Render.ArtifactFightAwardCom;
				readonly exp5: ArtifactFight.Render.ArtifactFightAwardCom;
			}, undefined, undefined>;
		}
	}
	import __pkg__yxu66bpv = ArtifactTreasury;
	namespace ArtifactTreasury {
		type ArtifactTreasuryView = StrictComponent<fairygui.GComponent, {
			readonly proExp: ArtifactTreasury.Components.ProgressBar;
			readonly finshCount: fairygui.GTextField;
			readonly txtScore: fairygui.GTextField;
			readonly graphAni1: fairygui.GGraph;
			readonly graphAni2: fairygui.GGraph;
			readonly graphAni3: fairygui.GGraph;
			readonly listReward: fairygui.GList;
			readonly listReward2: fairygui.GList;
			readonly btnTip: fairygui.GButton;
			readonly btnShop: ArtifactTreasury.Components.Btn2;
			readonly btnBox: ArtifactTreasury.Components.Btn2;
			readonly btnGraph1: UILib.Components.btn.BtnEmpty;
			readonly btnGraph2: UILib.Components.btn.BtnEmpty;
			readonly btnGraph3: UILib.Components.btn.BtnEmpty;
			readonly btnRecord: ArtifactTreasury.Components.Btn1;
			readonly btnBuy1: UILib.Components.btn.BtnBig1;
			readonly btnBuy10: UILib.Components.btn.BtnBig4;
			readonly btnGl: ArtifactTreasury.Components.Btn1;
			readonly redPoint: fairygui.GImage;
			readonly loaderIcon1: fairygui.GLoader;
			readonly txtRecruit1: fairygui.GTextField;
			readonly loaderIcon2: fairygui.GLoader;
			readonly txtRecruit2: fairygui.GTextField;
			readonly txtItemCount: fairygui.GTextField;
			readonly txtFree: fairygui.GTextField;
			readonly txtTips3: fairygui.GTextField;
			readonly txtTips1: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			readonly txtTips2: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
		}, 'conIsFree' | 'conIsShopRed', 't0'>;
		type ArtifactTreasuryShopWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly loaderIcon: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly txtScore: fairygui.GTextField;
			readonly title: fairygui.GTextField;
		}, undefined, undefined>;
		type ArtifactTreasuryRecordWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listRecord: fairygui.GList;
		}, undefined, undefined>;
		type ArtifactTreasuryGlWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type ProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly exp0: ArtifactTreasury.Components.raleRender;
				readonly exp1: ArtifactTreasury.Components.raleRender;
				readonly exp2: ArtifactTreasury.Components.raleRender;
				readonly exp3: ArtifactTreasury.Components.raleRender;
				readonly exp4: ArtifactTreasury.Components.raleRender;
				readonly exp5: ArtifactTreasury.Components.raleRender;
			}, undefined, undefined>;
			type raleRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
				readonly graphEffect: fairygui.GGraph;
				readonly txtNum: fairygui.GTextField;
			}, 'conState' | 'conBig', undefined>;
			type ArtifactTreasuryRecordRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
				readonly txtTime: fairygui.GTextField;
				readonly txtName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conIsFree', undefined>;
			type ItemRender = StrictComponent<fairygui.GComponent, {
				readonly renReward: UILib.Components.renderer.RewardRender3;
				readonly renScore: UILib.Components.renderer.RewardRender3;
				readonly collectSelect: UILib.Components.button_checkbox.Button_Check4;
				readonly btnBuy: UILib.Components.btn.BtnSmall2;
			}, undefined, undefined>;
			type BtnSpecial = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conRed', undefined>;
			type Btn1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type Btn2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type rewardRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
			}, undefined, undefined>;
			type GlRender = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
				readonly btn: fairygui.GLoader;
				readonly titleName: fairygui.GTextField;
				readonly titleNum: fairygui.GTextField;
			}, 'isShow', undefined>;
		}
	}
	import __pkg__piw54g9b = AttackCity;
	namespace AttackCity {
		type AttackCityView = StrictComponent<fairygui.GComponent, {
			readonly mapCom: AttackCity.Com.AttackMapCom;
			readonly enemyHeroList: fairygui.GList;
			readonly selfHeroList: fairygui.GList;
			readonly listGroup: fairygui.GGroup;
			readonly troopList: fairygui.GList;
			readonly btnBattle: UILib.Components.btn.BtnBig3;
			readonly btnTips: fairygui.GButton;
			readonly loader0: fairygui.GLoader;
			readonly loader1: fairygui.GLoader;
			readonly attrDes: UILib.Components.fontTab_richText.__cmpt__sxsxa3tlqa;
			readonly count: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly refDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly nowChapter: fairygui.GTextField;
			readonly nowOccupied: fairygui.GRichTextField;
			readonly fightNum: UILibHero.Components.fight.FightPowerBig;
			readonly rewardList: fairygui.GList;
		}, undefined, 't1' | 't2'>;
		namespace Com {
			type AttackMapCom = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly specialGroup: fairygui.GGroup;
				readonly level0: AttackCity.Com.LevelBtn;
				readonly level1: AttackCity.Com.LevelBtn;
				readonly level2: AttackCity.Com.LevelBtn;
				readonly level3: AttackCity.Com.LevelBtn;
				readonly level4: AttackCity.Com.LevelBtn;
				readonly level5: AttackCity.Com.LevelBtn;
				readonly level6: AttackCity.Com.LevelBtn;
				readonly level7: AttackCity.Com.LevelBtn;
				readonly level8: AttackCity.Com.LevelBtn;
				readonly levelGroup: fairygui.GGroup;
			}, undefined, 't0'>;
			type LevelBtn = StrictComponent<fairygui.GComponent, {
				readonly icon: fairygui.GLoader;
				readonly fightGroup0: fairygui.GGroup;
				readonly effect: fairygui.GGraph;
			}, 'c1', 't0'>;
			type HeroAniRender = StrictComponent<fairygui.GComponent, {
				readonly effect: fairygui.GGraph;
				readonly heroAni: fairygui.GGraph;
				readonly quality: fairygui.GLoader;
			}, 'state' | 'isEmptyCL' | 'fettersCL' | 'posCL', 't0'>;
			type AttackHeroRender = StrictComponent<fairygui.GComponent, {
				readonly heroRender: UILibHero.Components.render.dragHeroRender.NewDragTroopHeroRender;
				readonly quality: fairygui.GLoader;
			}, 'button', undefined>;
			type RewardItem = StrictComponent<fairygui.GComponent, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, undefined, 't0'>;
		}
	}
	import __pkg__jpq865zr = Bag;
	namespace Bag {
		type BagView = StrictComponent<fairygui.GComponent, {
			readonly itemList: fairygui.GList;
			readonly listBtn: fairygui.GList;
			readonly btnAllUse: UILib.Components.btn.BtnBig1;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
		}, 'conItemType', undefined>;
		type GetWayWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly btnUse: UILib.Components.btn.BtnBig1;
			readonly rewardRender: UILib.Components.renderer.RewardRender1;
			readonly imgArrow: fairygui.GImage;
			readonly listGetWay: fairygui.GList;
			readonly txtNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u71;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtSubView: Bag.GetWayBriefSubView;
		}, 'conIsCanUse' | 'conIsConquest' | 'conIsShowNum', undefined>;
		type ItemUseWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnUse: UILib.Components.btn.BtnBig1;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly btnCutDown: UILib.Components.btn.BtnCutDown;
			readonly rewardRender: UILib.Components.renderer.RewardRender2;
			readonly slider: UILib.Components.silder.silder_com_3;
			readonly listItem: fairygui.GList;
			readonly txtUseNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
		}, 'conType', undefined>;
		type ItemSkillTipWindow = StrictComponent<fairygui.GComponent, {
			readonly getWayCom: UILib.Components.GetWayCom;
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly learnCom: UILib.Components.CommonDarkDesCom;
			readonly listSkillFromHero: fairygui.GList;
			readonly txtCanlearn: UILib.Components.fontTab.__cmpt__v5p1a3tlgz;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly baseEffectCom: UILib.Components.CommonDarkDesCom;
			readonly highEffectCom: UILib.Components.CommonDarkDesCom;
			readonly rewardRender: UILib.Components.renderer.RewardRender1;
			readonly txtSkillName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtSkillNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, 'conIsShowHero' | 'conShowGetWay', undefined>;
		type ItemTitleTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderItemIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly attList: fairygui.GList;
			readonly txtItemName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtItemDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
		}, 'conType', undefined>;
		type ItemHeroFragWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderHeroIcon: fairygui.GLoader;
			readonly loaderHeroQuality: fairygui.GLoader;
			readonly loaderType: fairygui.GLoader;
			readonly loaderQuality: fairygui.GLoader;
			readonly listStar: fairygui.GList;
			readonly listReward: fairygui.GList;
			readonly txtHeroName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtHeroNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
		}, undefined, undefined>;
		type ItemSimpleDescWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly txtItemDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type ItemSimpleTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly itemRender: UILib.Components.renderer.RewardRender1;
			readonly txtSubView: Bag.GetWayBriefSubView;
			readonly txtItemName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtItemNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
		}, 'showHaveState', undefined>;
		type ItemChooseWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnUse: UILib.Components.btn.BtnBig1;
			readonly rewardRender: UILib.Components.renderer.RewardRender1;
			readonly listItem: fairygui.GList;
			readonly txtOpenNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtOwnedNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
		}, 'conPreShow', undefined>;
		type GetWayBriefSubView = StrictComponent<fairygui.GComponent, {
			readonly txtDes: UILib.Components.fontTab.__cmpt__kyk1a3tljr;
		}, undefined, undefined>;
		type HeroLinesTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly itemRender: UILib.Components.renderer.RewardRender1;
			readonly txtItemName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtItemNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
			readonly txtItemDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtList: fairygui.GList;
			readonly listGetWay: fairygui.GList;
		}, undefined, undefined>;
		type HeroLinesExpTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly itemRender: UILib.Components.renderer.RewardRender1;
			readonly txtItemName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtItemDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtItemNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
		}, undefined, undefined>;
		type ItemSimplePreviewWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly itemRender: UILib.Components.renderer.RewardRender1;
			readonly itemChooseListCom: Bag.Components.ItemChooseListCom;
			readonly txtSubView: Bag.GetWayBriefSubView;
			readonly txtItemName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtItemNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
		}, 'showHaveState', undefined>;
		namespace Components {
			type ItemSkillFromHero = StrictComponent<fairygui.GComponent, {
				readonly txtHeroName: UILib.Components.fontTab.__cmpt__kyk1a3tlju;
				readonly txtSkill: UILib.Components.fontTab.__cmpt__kyk1a3tljr;
			}, 'conQuality', undefined>;
			type AttItemRander = StrictComponent<fairygui.GComponent, {
				readonly txtName: UILib.Components.fontTab.__cmpt__gsraa3tlly;
			}, undefined, undefined>;
			type ItemChooseListCom = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
			}, undefined, undefined>;
		}
		namespace Components.render {
			type BagItemRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly graphAniBg: fairygui.GGraph;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderArmy: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly loaderSpecial: fairygui.GLoader;
				readonly newImg: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly imgChip: fairygui.GImage;
				readonly txtCount: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conIsNew' | 'conCanOpen' | 'conArmy' | 'isSpecial', undefined>;
			type titleAttrRender = StrictComponent<fairygui.GComponent, {
				readonly txtAtt: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, undefined, undefined>;
			type ItemChooseRender = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender2;
				readonly btnAdd: UILib.Components.btn.BtnAdd;
				readonly btnLess: UILib.Components.btn.BtnCutDown;
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'button' | 'conGray', undefined>;
			type HeroLinesAttRender = StrictComponent<fairygui.GComponent, {
				readonly txtName: UILib.Components.fontTab.__cmpt__gsraa3tlly;
			}, undefined, undefined>;
		}
	}
	import __pkg__a3acr8su = Baggage;
	namespace Baggage {
		type BaggageView = StrictComponent<fairygui.GComponent, {
			readonly listBaggage: fairygui.GList;
			readonly txtCountDown: fairygui.GTextField;
			readonly txtLevel: fairygui.GTextField;
		}, undefined, undefined>;
		namespace Components.render {
			type BaggageRender = StrictComponent<fairygui.GComponent, {
				readonly baggageIcon1: fairygui.GLoader;
				readonly baggageIcon: fairygui.GLoader;
				readonly btnFree: UILib.Components.btn.BtnBig1;
				readonly btnBaggage: Baggage.Components.render.Btn7;
				readonly txtNum: fairygui.GTextField;
				readonly txtTime: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
				readonly txtTime2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
			}, 'isFree', undefined>;
			type Btn7 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly title1: fairygui.GTextField;
			}, 'button' | 'conIsGray' | 'conShowLast', undefined>;
		}
	}
	import __pkg__k50blwi8 = BarbaricInvade;
	namespace BarbaricInvade {
		type BarbaricInvadeView = StrictComponent<fairygui.GComponent, {
			readonly topView: BarbaricInvade.BarbaricInvadeTopView;
			readonly loaderIcon: fairygui.GLoader;
			readonly left: fairygui.GLoader;
			readonly right: fairygui.GLoader;
			readonly bottom: fairygui.GLoader;
			readonly group: fairygui.GGroup;
			readonly listBuff: fairygui.GList;
			readonly listReward: fairygui.GList;
			readonly listEnemy: fairygui.GList;
			readonly btnTips: fairygui.GButton;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly btnDouble: BarbaricInvade.Components.BarDoubleBtn;
			readonly btnGo: UILib.Components.btn.BtnBig4;
			readonly btnHelp: BarbaricInvade.Components.BtnHelp;
			readonly leftArrows: fairygui.GImage;
			readonly rightArrows: fairygui.GImage;
			readonly txtRemainNum: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
			readonly bossName: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
		}, 'stateLoader', undefined>;
		type BarbaricInvadePutWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnAssembly: UILib.Components.btn.BtnBig1;
			readonly joinBtn: UILib.Components.btn.BtnBig1;
			readonly btnFight: UILib.Components.btn.BtnBig1;
			readonly fightGroup: fairygui.GGroup;
			readonly listTroop: fairygui.GList;
			readonly listWeak: fairygui.GList;
			readonly loaderHead: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly txtAddBtn: BarbaricInvade.Components.BarbarUpBtn;
			readonly imgDouble: fairygui.GImage;
			readonly txtTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtPutNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			readonly txtFight: BarbaricInvade.Components.render.FightPowerBig;
		}, 'timeState' | 'conIsCapTain' | 'myRoomState', undefined>;
		type BarbaricInvadeDoubleWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list: fairygui.GList;
			readonly txtTip: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type BarbaricRoomWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnRoomClick: UILib.Components.btn.BtnBig1;
			readonly listRoom: fairygui.GList;
			readonly txtNoRoom: fairygui.GTextField;
			readonly roomName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtFight: UILibHero.Components.fight.FightPowerBig;
		}, 'conIsHaveRoom' | 'emptyState', undefined>;
		type BarbaricSupportWindow = StrictComponent<fairygui.GComponent, {
			readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpi;
			readonly proHelp0: BarbaricInvade.Components.ProgressBar5;
			readonly proHelp1: BarbaricInvade.Components.ProgressBar5;
			readonly proHelp2: BarbaricInvade.Components.ProgressBar5;
			readonly btnBox0: BarbaricInvade.Components.BarbaricActiveBaseRender;
			readonly btnBox1: BarbaricInvade.Components.BarbaricActiveBaseRender;
			readonly btnBox2: BarbaricInvade.Components.BarbaricActiveBaseRender;
			readonly btnClose: UILib.Components.btn.BtnWindowClose1;
			readonly comOwnRank: BarbaricInvade.Components.render.BarbaricSupportRender;
			readonly listRank: fairygui.GList;
			readonly txtNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpv;
		}, undefined, undefined>;
		type BarbaricTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly okBtn: UILib.Components.btn.BtnBig1;
			readonly cancel: UILib.Components.btn.BtnBig1;
			readonly txtInfo: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtSecond: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type BarbaricHeroSelectWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnGo: UILib.Components.btn.BtnBig5;
			readonly checkListHero: fairygui.GList;
			readonly txtPutNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDesc: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly textTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtFightPower: UILibHero.Components.fight.FightPowerBig;
			readonly txtFight: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
		}, 'heroEmpty' | 'changeState', undefined>;
		type BarbaricInvadeTopView = StrictComponent<fairygui.GComponent, {
			readonly loaderBg: fairygui.GLoader;
			readonly loaderOne: fairygui.GLoader;
			readonly loaderThree: fairygui.GLoader;
			readonly loaderTwo: fairygui.GLoader;
			readonly loaderFour: fairygui.GLoader;
			readonly loaderFive: fairygui.GLoader;
		}, 'posState', 'ani0' | 'ani2'>;
		namespace Components {
			type BarDoubleBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'conOpenState' | 'conIsGray', 'aniScale'>;
			type BtnFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conState', undefined>;
			type BtnHeroType = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'button' | 'attrCond', undefined>;
			type ProgressBar5 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: BarbaricInvade.Components.TaskActiveBar;
			}, undefined, undefined>;
			type TaskActiveBar = StrictComponent<fairygui.GComponent, {
				readonly barMask: fairygui.GGraph;
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type BarbaricActiveBaseRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, 'button' | 'conIsOpen' | 'conMax', undefined>;
			type BtnHelp = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
			}, 'button' | 'conRed', undefined>;
			type BarbarUpBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type BarbaricInvadeRender = StrictComponent<fairygui.GButton, {
				readonly loaderIcon: fairygui.GLoader;
				readonly aniGGraph: fairygui.GGraph;
				readonly loaderReward: fairygui.GLoader;
				readonly txtOpenCondition: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly txtOpenCondition: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u71;
				readonly txtPutNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u70;
				readonly txtTime: fairygui.GRichTextField;
			}, 'conIsLock' | 'button' | 'conIsShowRed' | 'conIsPut' | 'bgState', 'assemblyAni' | 'selectAni' | 'awardAni'>;
			type BarPutRoleRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly btnWithdraw: BarbaricInvade.Components.BtnFunc;
				readonly listHero: fairygui.GList;
				readonly txtRoleName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
				readonly txtLv: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
				readonly txtHelp: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			}, 'conIsOwn' | 'conIsMy', undefined>;
			type BarPutHeroRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly btnAdd: UILib.Components.btn.BtnAdd;
				readonly addGroup: fairygui.GGroup;
				readonly btnRemove: BarbaricInvade.Components.BtnFunc;
				readonly headRender: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly heroType: BarbaricInvade.Components.BtnHeroType;
				readonly heroFront: BarbaricInvade.Components.BtnHeroType;
				readonly heroBack: BarbaricInvade.Components.BtnHeroType;
				readonly txtHeroName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6r;
				readonly txtFight: UILibHero.Components.fight.FightPowerBig;
				readonly emptyGroup: fairygui.GGroup;
			}, 'conIsOwn' | 'conIsHaveTroop' | 'conIsOneHero', undefined>;
			type BarbaricRoomRender = StrictComponent<fairygui.GComponent, {
				readonly brnAddRoom: UILib.Components.btn.BtnSmall2;
				readonly txtAddBtn: BarbaricInvade.Components.BarbarUpBtn;
				readonly txtRoomNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
				readonly txtPlayerNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
				readonly txtCaptain: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly brnRemoveRoom: UILib.Components.btn.BtnSmall4;
			}, 'conState' | 'conIsOwn', undefined>;
			type BarbaricSupportRender = StrictComponent<fairygui.GComponent, {
				readonly countryRender: UILib.Components.countryRender.CountryCityRender;
				readonly txtFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtTime: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtRank: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
			}, 'conRank', undefined>;
			type BarbaricBuffRender = StrictComponent<fairygui.GButton, {
				readonly skillBg0: fairygui.GLoader;
				readonly icon: fairygui.GImage;
				readonly loaderBg: fairygui.GLoader;
				readonly loaderSKillIcon: fairygui.GLoader;
				readonly loaderHeroQuality: fairygui.GLoader;
				readonly title: UILib.Components.fontTab_text.__cmpt__qmdq1no8u71;
				readonly txtDesc: fairygui.GRichTextField;
			}, undefined, undefined>;
			type BarbaricDoubleTipRender = StrictComponent<fairygui.GComponent, {
				readonly loaderState: fairygui.GLoader;
				readonly loaderState1: fairygui.GLoader;
				readonly txtTime: fairygui.GTextField;
			}, 'conState', undefined>;
			type FightPowerBig = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__fuo8zd2u = BizActFixed;
	namespace BizActFixed {
		type BizActFixedView = StrictComponent<fairygui.GComponent, {
			readonly leftImage: fairygui.GImage;
			readonly rightImage: fairygui.GImage;
			readonly imgBg: fairygui.GImage;
			readonly subViewContainer: fairygui.GComponent;
			readonly listActivity: fairygui.GList;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows5;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows5;
		}, undefined, undefined>;
		namespace Components {
			type BizActTabRender = StrictComponent<fairygui.GButton, {
				readonly iconLoader: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
		}
	}
	import __pkg__uqhtno2x = BizActiveTask;
	namespace BizActiveTask {
		type BizActiveTaskView = StrictComponent<fairygui.GComponent, {
			readonly loaderHero: fairygui.GLoader;
			readonly listTask: fairygui.GList;
			readonly btnDaily: BizActiveTask.Components.Button_Radio3;
			readonly btnCycle: BizActiveTask.Components.Button_Radio3;
			readonly imgArrows: fairygui.GImage;
			readonly imgArrowsUp: fairygui.GImage;
			readonly txtTime: fairygui.GTextField;
		}, 'conType', undefined>;
		namespace Components {
			type BizActiveTaskRender = StrictComponent<fairygui.GComponent, {
				readonly loaderState: fairygui.GLoader;
				readonly listReward: fairygui.GList;
				readonly btnGetInto: UILib.Components.btn.BtnSmall4;
				readonly btnGet: UILib.Components.btn.BtnSmall2;
				readonly txtName: fairygui.GTextField;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
			}, 'conButton', undefined>;
			type Button_Radio3 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsRight' | 'conIsCanRed', undefined>;
		}
	}
	import __pkg__kddavpid = BizGodAuction;
	namespace BizGodAuction {
		type BizGodAuctionWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderHero: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly listHero: fairygui.GList;
			readonly btnTip: UILib.Components.btn.BtnBig2;
			readonly btnGo: UILib.Components.btnAct.BtnAct3;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly btnClose1: UILib.Components.btn.BtnClose1;
			readonly txtTime: fairygui.GTextField;
			readonly txtDay: fairygui.GTextField;
		}, 'conState', undefined>;
		namespace Components {
			type BizGodAuctionRender = StrictComponent<fairygui.GButton, {
				readonly heroRes: fairygui.GLoader;
				readonly txtName: fairygui.GTextField;
			}, 'button' | 'conState' | 'conIsMan', undefined>;
		}
	}
	import __pkg__pseqgt86 = BoxPreview;
	namespace BoxPreview {
		type BoxPreviewWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderLight: fairygui.GLoader;
			readonly rewardList: fairygui.GList;
		}, undefined, undefined>;
	}
	import __pkg__hvdajl76 = BreakLine;
	namespace BreakLine {
		type BreakLineView = StrictComponent<fairygui.GComponent, {
			readonly txtTime: fairygui.GRichTextField;
			readonly btnLogin: UILib.Components.btn.BtnBig1;
			readonly group: fairygui.GGroup;
		}, undefined, undefined>;
		namespace Components {
			type Button_Common3 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__q35o5k1q = Building;
	namespace Building {
		type BuildingView = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GImage;
			readonly imgUp: fairygui.GImage;
			readonly emptyCom: fairygui.GGraph;
		}, 'conShowInfo', undefined>;
		type BuildingText = StrictComponent<fairygui.GComponent, {
			readonly txtName: fairygui.GTextField;
			readonly txtEstateTime: fairygui.GTextField;
			readonly txtCampL: fairygui.GTextField;
			readonly txtCampM: fairygui.GTextField;
			readonly txtCampR: fairygui.GTextField;
		}, 'conShowInfo', undefined>;
		type BuildingBubble = StrictComponent<fairygui.GComponent, undefined, 'conShowInfo', undefined>;
		type BuildingBubbleEffect = StrictComponent<fairygui.GComponent, {
			readonly graphAni: fairygui.GGraph;
		}, 'conShowInfo', undefined>;
		namespace Components {
			type BtnBuildingReap = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly circleProgress: fairygui.GComponent;
			}, 'conShowTitle' | 'conBg' | 'doubleState', 't0'>;
			type BtnBuildingFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', 'unfold' | 'away'>;
			type BuildingCDView = StrictComponent<fairygui.GComponent, {
				readonly progress: Building.Components.ProgressBar1;
				readonly funcLoader: fairygui.GLoader;
				readonly txtCDShow: fairygui.GTextField;
				readonly txtCDName: fairygui.GTextField;
				readonly txtDes: fairygui.GTextField;
				readonly btnSpeed: Building.Components.BtnBuildingFunc;
			}, undefined, 'traName'>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type BuildingFuncView = StrictComponent<fairygui.GComponent, {
				readonly funcList: fairygui.GList;
			}, 'showFuncCtr', 'bottomUnfold' | 'bottomAway'>;
			type BtnBuildingOpen = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
			}, undefined, 't0'>;
			type BtnBuildingFree = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
			}, undefined, 't0'>;
			type BuildingMakeCDView = StrictComponent<fairygui.GComponent, {
				readonly progress: Building.Components.ProgressBar1;
				readonly loaderIcon: fairygui.GLoader;
				readonly btnSpeed: Building.Components.BtnBuildingFunc;
				readonly txtTime: fairygui.GTextField;
				readonly txtDes: fairygui.GTextField;
				readonly txtIndex: fairygui.GTextField;
			}, 'conFinish', undefined>;
		}
	}
	import __pkg__4zudqkny = BuildingSummary;
	namespace BuildingSummary {
		type BuildingSummaryWindow = StrictComponent<fairygui.GComponent, {
			readonly summaryList: fairygui.GList;
			readonly btnClose: BuildingSummary.Components.btnSummary;
		}, undefined, undefined>;
		namespace Render {
			type SummaryListRender = StrictComponent<fairygui.GComponent, {
				readonly funcBtn: BuildingSummary.Components.FuncBtn;
				readonly summaryList: fairygui.GList;
			}, undefined, undefined>;
			type MoneyListRender = StrictComponent<fairygui.GComponent, {
				readonly showIcon: fairygui.GLoader;
				readonly btnGetWay: BuildingSummary.Components.BtnSmall1;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtNum: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, undefined, undefined>;
			type BuildingListRender = StrictComponent<fairygui.GComponent, {
				readonly showIcon: fairygui.GLoader;
				readonly funcBtn: BuildingSummary.Components.BtnSmall1;
				readonly proBar: BuildingSummary.Components.ProBar;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conIsFree', undefined>;
			type PlayListRender = StrictComponent<fairygui.GComponent, {
				readonly showIcon: fairygui.GLoader;
				readonly funcBtn: BuildingSummary.Components.BtnSmall1;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtNum: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conState', undefined>;
			type TechAndTreasureListRender = StrictComponent<fairygui.GComponent, {
				readonly showIcon: fairygui.GLoader;
				readonly funcBtn: BuildingSummary.Components.BtnSmall1;
				readonly proBar: BuildingSummary.Components.ProBar;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conIsFree', undefined>;
			type TroopsListRender = StrictComponent<fairygui.GComponent, {
				readonly showIcon: fairygui.GLoader;
				readonly funcBtn: BuildingSummary.Components.BtnSmall1;
				readonly proBar: BuildingSummary.Components.ProBar;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtNum: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'conIsFree', undefined>;
		}
		namespace Components {
			type FuncBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__9i4xa3tll3;
			}, 'button' | 'conState', undefined>;
			type ProBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type btnSummary = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnSmall1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
		}
	}
	import __pkg__41f186rt = BuildingView;
	namespace BuildingView {
		type BuildingInfoView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly txtOutput: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly listCondition: fairygui.GList;
			readonly btnMoreInfo: UILib.Components.btn.BtnBig1;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDesc: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtCurLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conDescType', undefined>;
		type BuildingLevelUpView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnTime: UILib.Components.btn.Btn6;
			readonly btnMoney: UILib.Components.btn.Btn7;
			readonly outputCom: BuildingView.Components.BuildingOutputCom;
			readonly listAttrArr: fairygui.GList;
			readonly listUpCondition: fairygui.GList;
			readonly listConsume: fairygui.GList;
			readonly graphAni: fairygui.GGraph;
			readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtConsume: UILib.Components.fontTab_richText.__cmpt__lxexa3tlqg;
			readonly actionView: BuildingView.Components.MiniGameCom;
			readonly txtMiniTxt: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
			readonly txtCurLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNextLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly btnFree: UILib.Components.btn.BtnBig1;
		}, 'conState' | 'conType' | 'conMaxLv' | 'conIsShowMiniGame', undefined>;
		type CampMakeView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly loaderArmy: fairygui.GLoader;
			readonly btnMoney: UILib.Components.btn.Btn7;
			readonly btnTime: UILib.Components.btn.Btn6;
			readonly btnCutDown: UILib.Components.btn.BtnCutDown;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly btnConsume: UILib.Components.renderer.ConsumeRender;
			readonly slider: UILib.Components.silder.silder_com_3;
			readonly txtCampNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtSplitCount: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtTotalCount: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
		}, undefined, undefined>;
		namespace render {
			type UpConditionRender = StrictComponent<fairygui.GComponent, {
				readonly bgText: fairygui.GImage;
				readonly btnUp: UILib.Components.btn.BtnSmall2;
				readonly loaderCondRes: fairygui.GLoader;
				readonly btnSpeed: UILib.Components.btn.BtnSmall1;
				readonly txtLimit: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtTime: fairygui.GTextField;
				readonly imgRect: fairygui.GImage;
			}, 'conIsComplete' | 'conIsLimit', 't0'>;
		}
		namespace Components {
			type BuildingFuncDesRender = StrictComponent<fairygui.GComponent, {
				readonly imgArrow: fairygui.GImage;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtValue: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtNextVal: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			}, 'conShowNext', undefined>;
			type Btn1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly txtInfo: fairygui.GTextField;
			}, 'button' | 'conColor' | 'conState', undefined>;
			type BuildingOutputCom = StrictComponent<fairygui.GComponent, {
				readonly loaderOutType: fairygui.GLoader;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly txtCurCrop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtNextCrop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
				readonly txtBuildingName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAddNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			}, 'conHaveAdd', undefined>;
			type MiniGameCom = StrictComponent<fairygui.GComponent, {
				readonly army0: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army1: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army2: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army3: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army4: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army5: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army6: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army7: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army8: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army9: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army10: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army11: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army12: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army13: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army14: BuildingView.Components.BuildingMiniGameActionRender;
				readonly army15: BuildingView.Components.BuildingMiniGameActionRender;
			}, undefined, undefined>;
			type BuildingMiniGameActionRender = StrictComponent<fairygui.GComponent, {
				readonly graphAni: fairygui.GGraph;
			}, undefined, undefined>;
		}
	}
	import __pkg__fjbm20rk = BuildingWindow;
	namespace BuildingWindow {
		type BuildingSpeedUpWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly comSpeedUp: BuildingWindow.Components.render.SpeedUpRender;
			readonly btnClose: UILib.Components.btn.BtnWindowClose1;
		}, undefined, undefined>;
		type BuildingLvupWinWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderBg1: fairygui.GLoader;
			readonly loaderBg2: fairygui.GLoader;
			readonly graphAniTop: fairygui.GGraph;
			readonly graphAniBottom: fairygui.GGraph;
			readonly graphAniParticle: fairygui.GGraph;
			readonly loaderBg3: fairygui.GLoader;
			readonly loaderRes: fairygui.GLoader;
			readonly txtName: fairygui.GTextField;
			readonly listAttr: fairygui.GList;
			readonly txtCurLv: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtNextLv: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly groupAll: fairygui.GGroup;
		}, 'conShowAttr', 'tClose'>;
		type BuildingMoreInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listCondition: fairygui.GList;
			readonly listTitle: fairygui.GList;
		}, undefined, undefined>;
		type GongDianLvupWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderBaseLight: fairygui.GLoader;
			readonly loaderFlag: fairygui.GLoader;
			readonly loaderBuild: fairygui.GLoader;
			readonly loaderTitleLight: fairygui.GLoader;
			readonly loaderTitle: fairygui.GLoader;
			readonly loaderLvBg: fairygui.GLoader;
			readonly listAttr: fairygui.GList;
			readonly txtLv: fairygui.GTextField;
		}, undefined, 'xiangxia'>;
		type TechnologySpeedUpWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly comSpeedUp: BuildingWindow.Components.render.SpeedUpRender;
			readonly loaderType: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__i098a3tlpj;
			readonly txtCurLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNextLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly groupTechnology: fairygui.GGroup;
		}, undefined, undefined>;
		type BuildingUnLockMiniWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderIcon: fairygui.GLoader;
			readonly btnUnLock: BuildingWindow.Components.BtnCommon2;
			readonly loaderBuild: fairygui.GLoader;
			readonly txtDesc1: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtDesc2: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		namespace Components {
			type ProgressBar2 = StrictComponent<fairygui.GProgressBar, {
				readonly bg: fairygui.GImage;
				readonly barBlue: fairygui.GImage;
				readonly bargreen: fairygui.GImage;
				readonly baryellow: fairygui.GImage;
			}, undefined, undefined>;
			type BuildMoreInfoTitleRender = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			}, 'conIsLast', undefined>;
			type BtnCommon2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type BuildingMoreInfoRender = StrictComponent<fairygui.GComponent, {
				readonly listAttr: fairygui.GList;
			}, 'conIsShowBg' | 'conIsCurLv' | 'conIsGray', undefined>;
			type BuildMoreInfoAttrRender = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__v5p1a3tlh7;
				readonly txtQian: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
				readonly txtHou: UILib.Components.fontTab.__cmpt__f73xa3tlhq;
			}, 'conIsLast' | 'conIsDouble', undefined>;
			type ArmyAttrRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtValueBefore: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtValueLater: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			}, 'conIsShowShadow', undefined>;
			type textRender = StrictComponent<fairygui.GComponent, {
				readonly imgArrow: fairygui.GImage;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtValue: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtNextVal: UILib.Components.fontTab_richText.__cmpt__m8naa3tlqw;
			}, 'conShowNext', undefined>;
			type GongDianTxtRender = StrictComponent<fairygui.GComponent, {
				readonly imgArrow: fairygui.GImage;
				readonly txtDes: UILib.Components.fontTab.__cmpt__gsraa3tlly;
				readonly txtValue: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtNextVal: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			}, 'conShowNext', undefined>;
			type SpeedUpRender = StrictComponent<fairygui.GComponent, {
				readonly btnItem: UILib.Components.btn.BtnBig1;
				readonly btnMoney: UILib.Components.btn.Btn7;
				readonly btnCutDown: UILib.Components.btn.BtnCutDown;
				readonly btnAdd: UILib.Components.btn.BtnAdd;
				readonly btnFreeUpgrade: UILib.Components.btn.BtnBig1;
				readonly itemList: fairygui.GList;
				readonly slider: UILib.Components.silder.silder_com_3;
				readonly proSpeedBar: BuildingWindow.Components.ProgressBar2;
				readonly txtCDTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
				readonly txtFreeTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
				readonly txtSpeedTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsFreeTime', undefined>;
		}
	}
	import __pkg__sa3rt2fp = Campaign;
	namespace Campaign {
		type CampaignView = StrictComponent<fairygui.GComponent, {
			readonly bgImg: fairygui.GLoader;
			readonly titleBg: fairygui.GLoader;
			readonly Light: fairygui.GLoader;
			readonly Cloud: fairygui.GLoader;
			readonly graph: fairygui.GComponent;
			readonly chooseBtn0: Campaign.Components.TabBtn;
			readonly chooseBtn1: Campaign.Components.TabBtn;
			readonly chooseBtn2: Campaign.Components.TabBtn;
			readonly chooseBtn3: Campaign.Components.TabBtn;
			readonly chooseBtn4: Campaign.Components.TabBtn;
			readonly btnShop: Campaign.Components.BtnShop;
			readonly btnEndlessArenaShop: Campaign.Components.BtnShop;
			readonly btnEndlessArenaWorship: Campaign.Components.BtnShop;
		}, 'conTab', 'idle'>;
		namespace Components {
			type TabBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type CampaignRender1 = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly nameLoader: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly rewardList: fairygui.GList;
				readonly groupReward: fairygui.GGroup;
				readonly txtBg1: fairygui.GImage;
				readonly txtDes1: fairygui.GRichTextField;
				readonly txtDes1Group: fairygui.GGroup;
				readonly txtBg2: fairygui.GImage;
				readonly txtDes2: fairygui.GRichTextField;
				readonly txtDes2Group: fairygui.GGroup;
				readonly btnEmpty: Campaign.Components.BtnHit;
			}, 'button' | 'openCon', 'Birth' | 'Die'>;
			type BtnShop = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type BtnHit = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
			}, 'button', undefined>;
		}
	}
	import __pkg__8u77k7hc = CarnivalLottery;
	namespace CarnivalLottery {
		type CarnivalLotteryView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly listType: fairygui.GList;
		}, 'conOpenSel', undefined>;
		type CarnivalLotteryShopWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderIcon: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly txtName: fairygui.GTextField;
			readonly txtScore: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
		}, undefined, undefined>;
		type CarnivalLotteryTaskView = StrictComponent<fairygui.GComponent, {
			readonly listTask: fairygui.GList;
			readonly txtTime: fairygui.GTextField;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, 't0'>;
		type CarnivalLotteryRewardView = StrictComponent<fairygui.GComponent, {
			readonly luckDrawSubView: CarnivalLottery.CarnivalLotterySubView;
			readonly progress: CarnivalLottery.Components.ProgressBarYellow;
			readonly listReward: fairygui.GList;
			readonly btnGet: UILib.Components.btn.BtnSmall4;
			readonly btnGl: UILib.Components.btn.BtnAdd;
			readonly btnShop: UILib.Components.btn.BtnAdd;
			readonly skipAniBtn: CarnivalLottery.Components.CarnivalLotteryCheck;
			readonly luckBtnOne: UILib.Components.btn.BtnBig1;
			readonly luckBtnTwo: UILib.Components.btn.BtnBig4;
			readonly txtAllNum: fairygui.GTextField;
			readonly txtCount: fairygui.GTextField;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly txtTime: fairygui.GTextField;
		}, 'conState', 't0' | 't1'>;
		type CarnivalLotteryChooseWindow = StrictComponent<fairygui.GComponent, {
			readonly touchLayer: fairygui.GGraph;
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly listChoose: fairygui.GList;
			readonly listAward: fairygui.GList;
			readonly txtRewardNum: fairygui.GTextField;
		}, undefined, undefined>;
		type CarnivalLotterySubView = StrictComponent<fairygui.GComponent, {
			readonly reward0: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward1: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward2: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward3: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward4: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward5: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward6: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward7: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward8: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward9: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward10: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward11: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward12: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward13: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward14: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward15: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward16: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward17: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward18: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly reward19: CarnivalLottery.Components.CarnivalLotteryItem;
			readonly light: fairygui.GLoader;
		}, 'conType', undefined>;
		type CarnivalLotteryGlWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type CarnivalLotteryShopItem = StrictComponent<fairygui.GButton, {
				readonly buyBtn: CarnivalLottery.Components.CarnivalLotteryShopBtn;
				readonly reward: UILib.Components.renderer.RewardRender4;
				readonly numTxt: fairygui.GTextField;
				readonly nameTxt: fairygui.GTextField;
			}, 'noNum' | 'conIsShow', undefined>;
			type CarnivalLotteryShopBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CarnivalLotteryTaskRender = StrictComponent<fairygui.GComponent, {
				readonly btnGo: UILib.Components.btnAct.BtnAct6;
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly txtName: fairygui.GTextField;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txt: fairygui.GTextField;
				readonly txtReward: fairygui.GTextField;
				readonly effectAni: fairygui.GGraph;
			}, 'conState' | 'conEff', undefined>;
			type BtnPage = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conIsShowRed', undefined>;
			type CarnivalLotteryCheck = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CarnivalLotteryItem = StrictComponent<fairygui.GButton, {
				readonly loaderFrame2: fairygui.GLoader;
				readonly btnAdd: fairygui.GLoader;
				readonly rewardIcon: fairygui.GLoader;
			}, 'conState' | 'conType' | 'conIsSelect', 't0'>;
			type CarnivalLotteryRewardItem = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRenderForEffect1;
			}, 'conState', undefined>;
			type CarnivalLotteryItem2 = StrictComponent<fairygui.GButton, {
				readonly loaderbg: fairygui.GLoader;
				readonly loaderFrame2: fairygui.GLoader;
				readonly btnAdd: fairygui.GLoader;
				readonly rewardIcon: fairygui.GLoader;
			}, 'conState' | 'button' | 'conType', undefined>;
			type GlRender = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
				readonly btn: fairygui.GLoader;
				readonly titleName: fairygui.GTextField;
				readonly titleNum: fairygui.GTextField;
			}, 'isShow', undefined>;
			type CarnivalLotteryStageRender = StrictComponent<fairygui.GComponent, {
				readonly listItem: fairygui.GList;
			}, undefined, undefined>;
			type ProgressBarYellow = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__sdt84lnw = CarnivalLotteryNew;
	namespace CarnivalLotteryNew {
		type CarnivalLotteryNewView = StrictComponent<fairygui.GComponent, {
			readonly luckDrawSubView: CarnivalLotteryNew.CarnivalLotteryNewSubView;
			readonly progress: CarnivalLotteryNew.Components.ProgressBarYellow;
			readonly listReward: fairygui.GList;
			readonly listTask: fairygui.GList;
			readonly btnShop: UILib.Components.btn.BtnAdd;
			readonly skipAniBtn: CarnivalLotteryNew.Components.CarnivalLotteryNewCheck;
			readonly luckBtnOne: UILib.Components.btn.BtnBig1;
			readonly luckBtnTwo: UILib.Components.btn.BtnBig4;
			readonly btnGl: UILib.Components.btn.BtnAdd;
			readonly btnTip: fairygui.GButton;
			readonly btnGet: UILib.Components.btn.BtnCutDown;
			readonly txtCount: UILib.Components.fontTab.__cmpt__f73xa3tlhm;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly txtTime: fairygui.GTextField;
		}, 'conState', 't0' | 't1'>;
		type CarnivalLotteryNewSubView = StrictComponent<fairygui.GComponent, {
			readonly reward0: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward1: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward2: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward3: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward4: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward5: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward6: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward7: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward8: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward9: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward10: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward11: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward12: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward13: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward14: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward15: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward16: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly reward17: CarnivalLotteryNew.Components.CarnivalLotteryNewItem;
			readonly light: fairygui.GLoader;
		}, undefined, undefined>;
		type CarnivalLotteryNewShopWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderIcon: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly txtName: fairygui.GTextField;
			readonly txtScore: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
		}, undefined, undefined>;
		type CarnivalLotteryNewGlWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type CarnivalLotteryNewShopItem = StrictComponent<fairygui.GButton, {
				readonly buyBtn: CarnivalLotteryNew.Components.CarnivalLotteryNewShopBtn;
				readonly reward: UILib.Components.renderer.RewardRender4;
				readonly numTxt: fairygui.GTextField;
				readonly nameTxt: fairygui.GTextField;
			}, 'noNum' | 'conIsShow', undefined>;
			type CarnivalLotteryNewShopBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CarnivalLotteryNewTaskRender = StrictComponent<fairygui.GComponent, {
				readonly btnGo: UILib.Components.btn.BtnSmall2;
				readonly btnGet: UILib.Components.btn.BtnSmall4;
				readonly progress: UILib.Components.proBar.ProgressBarBlue;
				readonly txtName: fairygui.GTextField;
				readonly txt: fairygui.GTextField;
				readonly txtReward: fairygui.GTextField;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conState', undefined>;
			type CarnivalLotteryNewCheck = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CarnivalLotteryNewItem = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender2;
			}, 'conState', undefined>;
			type CarnivalLotteryNewStageRender = StrictComponent<fairygui.GComponent, {
				readonly listItem: fairygui.GList;
			}, undefined, undefined>;
			type ProgressBarYellow = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type GlRender = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
				readonly btn: fairygui.GLoader;
				readonly titleName: fairygui.GTextField;
				readonly titleNum: fairygui.GTextField;
			}, 'isShow', undefined>;
		}
	}
	import __pkg__jfjk1cfc = Chat;
	namespace Chat {
		type ChatFaceView = StrictComponent<fairygui.GComponent, {
			readonly listFace: fairygui.GList;
		}, undefined, undefined>;
		type ChatView = StrictComponent<fairygui.GComponent, {
			readonly loaderBg: fairygui.GLoader;
			readonly loaderBottom: fairygui.GLoader;
			readonly listChannel: fairygui.GList;
			readonly listChat: fairygui.GList;
			readonly listSystem: fairygui.GList;
			readonly loaderTitleTop: fairygui.GTextField;
			readonly loaderTitleBottom: fairygui.GTextField;
			readonly secretView: Chat.ChatSecretViewUI;
			readonly btnArrow: Chat.Components.BtnArrow;
			readonly btnNewMsg: Chat.Components.BtnNewMsg;
			readonly btnShield: Chat.Components.ButtonShield;
			readonly btnChannel: Chat.Components.ButtonChannel;
			readonly txtInput: fairygui.GTextField;
			readonly btnInput: UILib.Components.btn.BtnEmpty;
			readonly btnSend: UILib.Components.btn.BtnSmall3;
			readonly btnInputChannel: Chat.Components.BtnChannelSmall;
			readonly groupInput: fairygui.GGroup;
		}, 'conState', undefined>;
		type ChatRoleWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnInfo: UILib.Components.btn.BtnSmall1;
			readonly btnAdd: UILib.Components.btn.BtnSmall1;
			readonly btnSecret: UILib.Components.btn.BtnSmall1;
			readonly btnHide: UILib.Components.btn.BtnSmall1;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
		}, 'conIsFriend' | 'conIsShield', undefined>;
		type ChatSecretViewUI = StrictComponent<fairygui.GComponent, {
			readonly listRole: fairygui.GList;
			readonly listSecret: fairygui.GList;
			readonly btnCancelDel: UILib.Components.btn.BtnSmall3;
			readonly btnDel: UILib.Components.btn.BtnSmall3;
			readonly btnNewMsg: Chat.Components.BtnNewMsg;
			readonly txtCount: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
		}, 'conNull' | 'conDel', undefined>;
		type ChannelSelectWindow = StrictComponent<fairygui.GComponent, {
			readonly listChannel: fairygui.GList;
			readonly bulletList: fairygui.GList;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
		}, undefined, undefined>;
		type ChatRoleSimpleWindow = StrictComponent<fairygui.GComponent, {
			readonly btnRole: UILib.Components.btn.BtnBig2;
			readonly btnSecret: UILib.Components.btn.BtnBig2;
			readonly btnShield: UILib.Components.btn.BtnBig2;
		}, 'conShield', undefined>;
		type ChatShieldWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listShield: fairygui.GList;
			readonly txtCount: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type ChatSecretRoleWindow = StrictComponent<fairygui.GComponent, {
			readonly btnRole: UILib.Components.btn.BtnBig2;
			readonly btnShield: UILib.Components.btn.BtnBig2;
			readonly btnDel1: UILib.Components.btn.BtnBig2;
			readonly btnDel2: UILib.Components.btn.BtnBig2;
		}, 'conShield', undefined>;
		type CityShareWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: UILib.Components.btn.BtnClose;
			readonly listChannel: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type FaceRender = StrictComponent<fairygui.GButton, {
				readonly anim: fairygui.GGraph;
			}, 'button', undefined>;
			type FaceWidthRender = StrictComponent<fairygui.GButton, {
				readonly iconFrame: fairygui.GGraph;
				readonly anim: fairygui.GGraph;
			}, 'button', undefined>;
			type ButtonFace = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ButtonChannel = StrictComponent<fairygui.GButton, undefined, 'button' | 'conChannel', undefined>;
			type ButtonTitle = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'button', undefined>;
			type ButtonShield = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ButtonVoice = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnArrow = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type ButtonChannelBig = StrictComponent<fairygui.GButton, {
				readonly btnSel: UILib.Components.button_checkbox.Button_Check2;
				readonly title: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
			}, 'button' | 'btnCon', undefined>;
			type ButtonChannel1 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnChannelSmall = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, 'button', undefined>;
			type ButtonRadio = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnNewMsg = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type ChatRender = StrictComponent<fairygui.GComponent, {
				readonly imgBg1: fairygui.GImage;
				readonly imgBg2: fairygui.GImage;
				readonly txtContentL: fairygui.GRichTextField;
				readonly txtContentR: fairygui.GRichTextField;
				readonly txtFaceL: fairygui.GRichTextField;
				readonly txtFaceR: fairygui.GRichTextField;
				readonly noticeRender: Chat.Components.render.ChatNoticeRender;
				readonly recordRender: Chat.Components.fRecord.ChatFRecordRender;
				readonly titleRender: Chat.Components.render.ChatTitleRender;
				readonly headRender: Chat.Components.render.ChatHeadRender;
			}, 'conPos' | 'conState', undefined>;
			type ChatSystemRender = StrictComponent<fairygui.GComponent, {
				readonly txtContent: fairygui.GRichTextField;
			}, undefined, undefined>;
			type ChatSecretRender = StrictComponent<fairygui.GComponent, {
				readonly btnTitle: Chat.Components.ButtonTitle;
				readonly headRender: Chat.Components.render.ChatHeadRender;
				readonly imgBg1: fairygui.GImage;
				readonly imgBg2: fairygui.GImage;
				readonly txtContentL: fairygui.GRichTextField;
				readonly txtContentR: fairygui.GRichTextField;
				readonly txtFaceL: fairygui.GRichTextField;
				readonly txtFaceR: fairygui.GRichTextField;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpb;
				readonly txtMilitaryRank: fairygui.GTextField;
			}, 'conPos' | 'conState', undefined>;
			type ChatSecretHeadRender = StrictComponent<fairygui.GButton, {
				readonly headIcon: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly btnSel: UILib.Components.button_checkbox.Button_Check4;
			}, 'button' | 'conOnline' | 'conDel' | 'conRed', undefined>;
			type ChatShieldRender = StrictComponent<fairygui.GComponent, {
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly headIcon: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly btnTitle: Chat.Components.ButtonTitle;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtLv: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conTitle', undefined>;
			type ChatTitleRender = StrictComponent<fairygui.GComponent, {
				readonly btnTitle: Chat.Components.ButtonTitle;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpb;
				readonly txtMilitaryRank: fairygui.GTextField;
			}, 'conPos', undefined>;
			type ChatNoticeRender = StrictComponent<fairygui.GComponent, {
				readonly txtContent: fairygui.GRichTextField;
			}, undefined, undefined>;
			type ChatHeadRender = StrictComponent<fairygui.GComponent, {
				readonly headIcon: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly btnChannel: Chat.Components.BtnChannelSmall;
				readonly countryRender: UILib.Components.countryRender.CountryCityRender;
			}, undefined, undefined>;
		}
		namespace Components.fRecord {
			type ChatFRecordRender = StrictComponent<fairygui.GComponent, {
				readonly leftRender: Chat.Components.fRecord.ChatFHeroRender;
				readonly rightRender: Chat.Components.fRecord.ChatFHeroRender;
				readonly leftName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly rightName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly chanGroup: fairygui.GGroup;
			}, 'conPos', undefined>;
			type ChatFHeroRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly loaderIcon: fairygui.GLoader;
				readonly bg1: fairygui.GLoader;
				readonly bg2: fairygui.GLoader;
				readonly listStar: fairygui.GList;
				readonly heroName: UILib.Components.fontTab.__cmpt__f73xa3tlhm;
				readonly level: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conQuality' | 'conIsAwaken', undefined>;
		}
	}
	import __pkg__v0m5niow = CityAffairs;
	namespace CityAffairs {
		type CityAffairsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listHero: fairygui.GList;
			readonly btnSpeed: UILib.Components.btn.BtnBig4;
			readonly btnOneKey: UILib.Components.btn.BtnBig1;
		}, 'conIsCanGet', undefined>;
		namespace Components.render {
			type CityAffairsRender = StrictComponent<fairygui.GButton, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderQuality: fairygui.GLoader;
				readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
				readonly txtTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtCityName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsFinish' | 'button', undefined>;
		}
	}
	import __pkg__bf6968xm = CityEstate;
	namespace CityEstate {
		type CityEstateView = StrictComponent<fairygui.GComponent, {
			readonly btnNotGet: CityEstate.Components.BtnType3;
			readonly title0: fairygui.GLoader;
			readonly imgTip: fairygui.GImage;
			readonly btnGet: CityEstate.Components.BtnType1;
			readonly title1: fairygui.GLoader;
			readonly listEstate: fairygui.GList;
			readonly listLv: fairygui.GList;
			readonly imgArrows: fairygui.GImage;
			readonly title2: fairygui.GLoader;
			readonly listType: fairygui.GList;
			readonly txtTitle: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpa;
			readonly imgArrows1: fairygui.GImage;
			readonly btnCanFight: CityEstate.Components.BtnType2;
			readonly btnCount1: UILib.Components.renderer.ConsumeRender;
			readonly btnCount4: UILib.Components.renderer.ConsumeRender;
			readonly btnCount3: UILib.Components.renderer.ConsumeRender;
			readonly btnCount2: UILib.Components.renderer.ConsumeRender;
		}, 'conState' | 'conLevel', undefined>;
		type CityEstateAttackView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnOutput: CityEstate.Components.render.CityEstateOutPutBtn;
			readonly btnGo: UILib.Components.btn.BtnBig4;
			readonly btnNoTroop: UILib.Components.btn.BtnBig1;
			readonly listReward: fairygui.GList;
			readonly listHeroMove: fairygui.GList;
			readonly loaderFightPreview: fairygui.GLoader;
			readonly cityTypeLoader: fairygui.GLoader;
			readonly txtOutputType: UILib.Components.title.CommonTitleEstate;
			readonly btnFight: UILibHero.Components.fight.FightPowerBig;
			readonly txtLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtCityType: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpt;
			readonly txtTroopNum: UILib.Components.fontTab_richText.__cmpt__r27sa3tlqj;
			readonly title: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
		}, 'conType' | 'conIsTroop', undefined>;
		type CityEstateLevyView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly proTime: UILib.Components.proBar.ProgressBarAffair;
			readonly btnOK: UILib.Components.btn.BtnBig4;
			readonly btnOutput: CityEstate.Components.render.CityEstateOutPutBtn;
			readonly listReward: fairygui.GList;
			readonly loaderCityType: fairygui.GLoader;
			readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			readonly txtNameLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtHeroName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpg;
			readonly txtCityName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtSkill: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
			readonly txtSkillLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
			readonly txtCityType: fairygui.GTextField;
			readonly txtTip1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conQuality' | 'conState' | 'conHaveSkill', undefined>;
		type CityPortGetWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnGet: CityEstate.Components.BtnGet;
			readonly btnReward: UILib.Components.renderer.ConsumeRender;
			readonly btnOutput: UILib.Components.renderer.ConsumeRender;
			readonly listPort: fairygui.GList;
			readonly txtNum: UILib.Components.fontTab.__cmpt__f73xa3tlha;
		}, 'conIsPort', undefined>;
		type CityEstateCollectionView = StrictComponent<fairygui.GComponent, {
			readonly cityTypeLoader: fairygui.GLoader;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnOutput: CityEstate.Components.render.CityEstateOutPutBtn;
			readonly imgBg: fairygui.GImage;
			readonly btnAbandon: UILib.Components.btn.BtnSmall3;
			readonly listReward: fairygui.GList;
			readonly listHero: fairygui.GList;
			readonly btnGold: UILib.Components.btn.Btn7;
			readonly btnTime: UILib.Components.btn.Btn6;
			readonly btnCousume: UILib.Components.renderer.ConsumeRender;
			readonly txtConsume: UILib.Components.fontTab_richText.__cmpt__lxexa3tlqg;
			readonly txtRemain: UILib.Components.fontTab_richText.__cmpt__lxexa3tlqg;
			readonly txtRemainTimes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtOutputType: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpv;
			readonly txtCityType: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
			readonly txtRecoverTime: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtAbandonTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtLv: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
		}, 'conType' | 'conHero', undefined>;
		type CityPortCollectionView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnOutput: CityEstate.Components.render.CityEstateOutPutBtn;
			readonly btnPort: UILib.Components.btn.BtnBig1;
			readonly btnAbandon: UILib.Components.btn.BtnSmall3;
			readonly cityTypeLoader: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
			readonly txtPortDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly txtCityType: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			readonly txtAbandonTime: UILib.Components.fontTab.__cmpt__f73xa3tlha;
		}, undefined, undefined>;
		type CityEstatePreviewWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly darkBg: fairygui.GImage;
			readonly listItem: fairygui.GList;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtDes2: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, 'conIsPort', undefined>;
		namespace Components {
			type BtnType1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnLevel = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnGet = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'button', undefined>;
			type BtnType2 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type CityBuildRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly title1: fairygui.GTextField;
			}, 'button' | 'conType', 'dianji'>;
			type BtnType3 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.render {
			type EstateTypeRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type CityEstateRender = StrictComponent<fairygui.GComponent, {
				readonly bgImg: fairygui.GLoader;
				readonly btnOutput: CityEstate.Components.render.CityEstateOutPutBtn1;
				readonly loaderIcon: fairygui.GLoader;
				readonly txtCity: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
				readonly txtEstate: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
				readonly txtOpration: fairygui.GTextField;
				readonly txtCount: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
				readonly txtTime: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
				readonly txtFight: fairygui.GTextField;
				readonly txtType: fairygui.GTextField;
				readonly btnMain: UILib.Components.btn.BtnEmpty;
				readonly btnLq: UILib.Components.btn.BtnSmall4;
				readonly listReward: fairygui.GList;
				readonly comTrain: CityEstate.Components.unknown.HeroUTrainRender;
				readonly btnGoPort: UILib.Components.btn.BtnSmall1;
				readonly btnOpration: UILib.Components.btn.BtnSmall5;
				readonly btnAbadon: UILib.Components.btn.BtnSmall3;
				readonly btnGoFight: UILib.Components.btn.BtnSmall5;
				readonly btnGoFightCity: UILib.Components.btn.BtnSmall5;
				readonly txtState: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
				readonly txtfq: fairygui.GTextField;
				readonly noFqTxt: fairygui.GTextField;
			}, 'conIsOpretion' | 'conIsOccupy' | 'conIsPort' | 'conIsTrain', undefined>;
			type CityEstatHeroRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly comTime: UILibHero.Components.render.cityHeroRender.HeroBusyTimeRender;
				readonly txtState: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly txtSkill: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly txtSkillLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
				readonly txtCity: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'button' | 'conShowSkill' | 'conShowCity' | 'conShowTime', undefined>;
			type CityPortGetRender = StrictComponent<fairygui.GComponent, {
				readonly btnOutput: UILib.Components.renderer.ConsumeRender;
				readonly txtCity: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
				readonly txtLv: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
			}, 'conIsShowBg', undefined>;
			type CityEstateOutPutBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type CityEstateOutPutBtn1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace Components.unknown {
			type HeroUTrainRender = StrictComponent<fairygui.GComponent, {
				readonly iconQuality: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, undefined, undefined>;
		}
	}
	import __pkg__7ni1rjn2 = CityLordPrivilege;
	namespace CityLordPrivilege {
		type CityLordPrivilegeView = StrictComponent<fairygui.GComponent, {
			readonly txtLoader: fairygui.GLoader;
			readonly listTask: fairygui.GList;
			readonly render: CityLordPrivilege.Render.CityLordPrivilegeRewardRender;
			readonly render1: CityLordPrivilege.Render.CityLordPrivilegeRewardRender;
			readonly render2: CityLordPrivilege.Render.CityLordPrivilegeRewardRender;
			readonly render3: CityLordPrivilege.Render.CityLordPrivilegeRewardRender;
			readonly listBtn: fairygui.GList;
			readonly txtDes: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
			readonly txtTitle: fairygui.GTextField;
			readonly txtDes2: fairygui.GTextField;
		}, 'conShow4', 't0'>;
		namespace Render {
			type CityLordPrivilegeTaskRender = StrictComponent<fairygui.GComponent, {
				readonly txtDes: fairygui.GRichTextField;
				readonly txtState: fairygui.GRichTextField;
			}, 'conState', undefined>;
			type CityLordPrivilegeRewardRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly itemGraph: fairygui.GGraph;
				readonly listItem: fairygui.GList;
				readonly btnGet: CityLordPrivilege.Render.Btn3;
				readonly txtSale: fairygui.GTextField;
				readonly txtLock: fairygui.GTextField;
				readonly txtNum: fairygui.GRichTextField;
				readonly txtNum2: fairygui.GTextField;
				readonly redPoint: fairygui.GImage;
			}, 'conState' | 'conType' | 'conSale' | 'conEff', 't0'>;
			type Button_Radio0 = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
				readonly title2: fairygui.GTextField;
			}, 'button' | 'conIsRed' | 'conIsOk', undefined>;
			type Btn3 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__f5db2bq8 = CityWindow;
	namespace CityWindow {
		type CityInfoView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly cityTypeLoader: fairygui.GLoader;
			readonly headLoader: fairygui.GLoader;
			readonly headNoLoader: fairygui.GLoader;
			readonly txtAddArmy: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly groupAddArmy: fairygui.GGroup;
			readonly txtdissolve: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly loaderInspireBg: fairygui.GLoader;
			readonly loaderInspireIcon: fairygui.GLoader;
			readonly txtInspireLv: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtInspire: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly groupInspire: fairygui.GGroup;
			readonly txtSpeedLv: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtSpeed: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly groupSpeed: fairygui.GGroup;
			readonly cityTypeTxt: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly attackTimeTxt: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDefLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDefCount1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDefCount2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtGold: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTaxSliver: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTaxGrain: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtPlunder: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly roleNameTxt: UILib.Components.fontTab_richText.__cmpt__r27sa3tlqj;
			readonly imgbkgd: fairygui.GImage;
		}, 'conIsFortress' | 'conAddState' | 'conIsSpeedLv' | 'conIsInsporeLv' | 'conIsMayor' | 'conDissolveState' | 'conSpeedInspire', undefined>;
		type CityInfoTroopsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listArmy: fairygui.GList;
			readonly txtDefLevel: fairygui.GTextField;
		}, 'conAtk', undefined>;
		type CityMarchView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnIsAutoFight: UILib.Components.button_checkbox.Button_Check4;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly cityTypeLoader: fairygui.GLoader;
			readonly troopList: fairygui.GList;
			readonly txtTargetName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtSelect: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtCityType: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly btnConsume2: UILib.Components.renderer.ConsumeRender;
			readonly btnConsume1: UILib.Components.renderer.ConsumeRender;
			readonly GroCost: fairygui.GGroup;
		}, undefined, undefined>;
		type CityBuildView = StrictComponent<fairygui.GComponent, {
			readonly loader0: fairygui.GLoader;
			readonly loaderBg: fairygui.GLoader;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly comCityBuild: CityWindow.Components.CityBuild.CityBuildCom;
			readonly comCityBuilding: CityWindow.Components.CityBuild.CityBuildingCom;
			readonly btnAllDesc: fairygui.GLoader;
			readonly btnHelp: fairygui.GButton;
			readonly progressRate: CityWindow.Components.CityBuild.ProgressBarExp1;
			readonly listDesc: fairygui.GList;
			readonly listBtn: fairygui.GList;
			readonly txtBuildName: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
			readonly txtProNum: UILib.Components.fontTab.__cmpt__kyk1a3tljo;
			readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			readonly txtCondition: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			readonly txtMaxDes: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
		}, 'conIsBuild' | 'conIsMaxLv' | 'conIsCanBuild', undefined>;
		type CityBuildPrivilegeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listDesc: fairygui.GList;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		type CityNoTroopView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnFightPower: UILibHero.Components.fight.FightPowerRecommendBig;
			readonly txtHeroName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			readonly txtLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conIsShowName' | 'conIsGhowFight', undefined>;
		type GoldCityInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly txtTip1: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtTip2: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly cityShape: fairygui.GGraph;
			readonly cityShape1: fairygui.GGraph;
			readonly txtCityName: fairygui.GTextField;
			readonly txtCityName1: fairygui.GTextField;
			readonly btnCity: UILib.Components.btn.BtnEmpty;
			readonly btnCity1: UILib.Components.btn.BtnEmpty;
		}, 'conIsTip', undefined>;
		type CityExplainWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
		}, undefined, undefined>;
		namespace Components {
			type CityInfoTroopsRender = StrictComponent<fairygui.GButton, {
				readonly bgText: fairygui.GLoader;
				readonly armyNameTxt: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly armyNumTxt: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly armyPowerTxt: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
			}, 'conBgState' | 'conIconState', undefined>;
		}
		namespace Components.CityBuild {
			type CityBuildRender = StrictComponent<fairygui.GButton, {
				readonly comHero: CityWindow.Components.CityBuild.CityBuildHead;
				readonly icon: fairygui.GLoader;
				readonly nameLoader: fairygui.GLoader;
				readonly txtLv: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'button' | 'isLock' | 'isMaxLevel' | 'conIsStatus', 'dianji' | 'fangda' | 'suoxiao'>;
			type CityBuildFuncTxtRender = StrictComponent<fairygui.GComponent, {
				readonly LvTxt: UILib.Components.fontTab.__cmpt__f73xa3tlhy;
				readonly contentTxt: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CityBuildBtn = StrictComponent<fairygui.GButton, {
				readonly listCost: fairygui.GList;
			}, 'button' | 'conType', undefined>;
			type ProgressBarExp1 = StrictComponent<fairygui.GProgressBar, {
				readonly bargreen: fairygui.GImage;
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBarExp2 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type RadioBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsCanRed' | 'conType', undefined>;
			type CityBuildHead = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type CityBuildCom = StrictComponent<fairygui.GComponent, {
				readonly buildBtnList: fairygui.GList;
				readonly listReward: fairygui.GList;
				readonly listHero: fairygui.GList;
				readonly moneyBtn: UILib.Components.btn.Btn7;
				readonly timeBtn: UILib.Components.btn.Btn6;
			}, 'conIsCanBuild' | 'conHero', undefined>;
			type CityBuildingCom = StrictComponent<fairygui.GComponent, {
				readonly proTime: UILib.Components.proBar.ProgressBarAffair;
				readonly listReward: fairygui.GList;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly btnOK: UILib.Components.btn.BtnBig4;
				readonly btnSpeed: UILib.Components.btn.BtnBig1;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp6;
				readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtStatus: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtCityName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpg;
				readonly txtMainAttr: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly txtAttrNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
			}, 'conQuality' | 'conIsFinish', undefined>;
			type CityBuildCostCom = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpk;
			}, undefined, undefined>;
			type CityBuildTroopRender = StrictComponent<fairygui.GButton, {
				readonly imgBottom: fairygui.GImage;
				readonly comHeroHead: UILibHero.Components.render.HeroTroopRender;
				readonly comTime: UILibHero.Components.render.cityHeroRender.HeroBusyTimeRender;
				readonly txtSkill: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly txtBuildLv: UILib.Components.fontTab.__cmpt__f73xa3tlhq;
				readonly txtStateDesc: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
			}, 'button' | 'conIsGray' | 'conIsTime', undefined>;
			type CityBuildFuncAllTxtRender = StrictComponent<fairygui.GComponent, {
				readonly contentLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly contentTxt: fairygui.GRichTextField;
			}, 'conType', undefined>;
			type CityBuildRenderCom = StrictComponent<fairygui.GComponent, {
				readonly cityRender: CityWindow.Components.CityBuild.CityBuildRender;
			}, undefined, 'fangda' | 'suoxiao' | 'Click' | 'Idle'>;
		}
	}
	import __pkg__zq08oapo = CoiledRecharge;
	namespace CoiledRecharge {
		type CoiledRechargeSubView = StrictComponent<fairygui.GComponent, {
			readonly progress: CoiledRecharge.Components.ProgressBar3;
			readonly dayRewardList: fairygui.GList;
			readonly rechargeBtn: UILib.Components.btnAct.BtnAct3;
			readonly receiveBtn: UILib.Components.btnAct.BtnAct2;
			readonly effect: fairygui.GGraph;
			readonly des1: fairygui.GRichTextField;
			readonly des2: fairygui.GRichTextField;
			readonly time: fairygui.GTextField;
			readonly rechargeDay: fairygui.GTextField;
		}, 'c1', undefined>;
		namespace Components {
			type ProgressBar3 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type CoiledSpecialRewardRender = StrictComponent<fairygui.GComponent, {
				readonly reward: UILib.Components.renderer.RewardRender4;
				readonly recieveBtn: UILib.Components.btn.BtnEmpty;
				readonly redPoint: fairygui.GImage;
				readonly txtTitle: fairygui.GTextField;
			}, 'button' | 'conState' | 'isShowReward' | 'isFinish', 'aniRota'>;
			type rewardCom = StrictComponent<fairygui.GComponent, {
				readonly render: UILib.Components.renderer.RewardRender3;
				readonly renderName: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__t92n1yyb = CommunityStrategy;
	namespace CommunityStrategy {
		type CommunityStrategyView = StrictComponent<fairygui.GComponent, {
			readonly listRender: fairygui.GList;
		}, undefined, undefined>;
		type CommunityStrategyWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly txtDes: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Render {
			type CommunityStrategyRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderTitle: fairygui.GLoader;
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__cocrxjfk = Compare;
	namespace Compare {
		type HeroCompareView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly loaderIconUrl: fairygui.GLoader;
			readonly btnGoto: UILib.Components.btn.BtnBig1;
			readonly btnReset: UILib.Components.btn.BtnAdd;
			readonly btnHelp: fairygui.GButton;
			readonly btnMoneyGoto: UILib.Components.btn.BtnBig4;
			readonly txtFight: UILibHero.Components.fight.FightPowerRecommendSmallBig;
			readonly listReward: fairygui.GList;
			readonly listHero: fairygui.GList;
			readonly nameQuality: fairygui.GLoader;
			readonly heroQualtiy: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljv;
			readonly txtFreshTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
			readonly txtRemainNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
		}, 'conIsFree', undefined>;
		type HeroCompareDebrisTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderItemIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly txtItemName: fairygui.GRichTextField;
			readonly txtItemNum: fairygui.GTextField;
			readonly txtItemDesc: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Render {
			type HeroCompareRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly heroRes: fairygui.GLoader;
				readonly heroQuality: fairygui.GLoader;
				readonly graphAniFrame: fairygui.GGraph;
				readonly txtName: fairygui.GTextField;
				readonly graphAniQuality: fairygui.GGraph;
			}, 'button' | 'conQuality', undefined>;
		}
		namespace Components {
			type CityBuildProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__iwln3iwe = Conquest;
	namespace Conquest {
		type ConquestView = StrictComponent<fairygui.GComponent, {
			readonly stepAniView: Conquest.ConquestStepAniView;
			readonly bBg: fairygui.GLoader;
			readonly levyBtn: Conquest.Components.ConquestBtn;
			readonly leftBtn: Conquest.Components.ConquestArrowBtn;
			readonly rightBtn: Conquest.Components.ConquestArrowBtn;
			readonly rewardBtn: UILib.Components.btn.BtnBig1;
			readonly hookFastBtn: UILib.Components.btn.BtnBig3;
			readonly btnTips: fairygui.GButton;
			readonly hookItemList: fairygui.GList;
			readonly hookList: fairygui.GList;
			readonly txtTime: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			readonly txtProfit: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			readonly titleName: fairygui.GRichTextField;
			readonly levyCount: fairygui.GRichTextField;
			readonly title: fairygui.GTextField;
		}, 'profitState', undefined>;
		type ConquestStepView = StrictComponent<fairygui.GComponent, {
			readonly bgLoader: fairygui.GLoader;
			readonly maskBg: fairygui.GLoader;
		}, undefined, undefined>;
		type ConquestFightHeroView = StrictComponent<fairygui.GComponent, {
			readonly btnGo: UILib.Components.btn.BtnBig4;
			readonly listMyHero: fairygui.GList;
			readonly listNPCHero: fairygui.GList;
			readonly txtMyTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNPCTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		type ConquestLevyWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly list: fairygui.GList;
			readonly btnAdd: Conquest.Components.ConquestAddBtn;
			readonly count: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
			readonly resetTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
		}, undefined, undefined>;
		type ConquestLeryBuyWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnCancle: UILib.Components.btn.BtnBig2;
			readonly btnSure: UILib.Components.btn.BtnBig1;
			readonly moneyBtn: UILib.Components.renderer.ConsumeRender;
			readonly txtBuyRemine: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtBuyCount: UILib.Components.fontTab_richText.__cmpt__nik3a3tlqq;
		}, undefined, undefined>;
		type ConquestHookBuyWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnCancle: UILib.Components.btn.BtnBig2;
			readonly btnSure: UILib.Components.btn.BtnBig1;
			readonly moneyBtn: UILib.Components.renderer.ConsumeRender;
			readonly listHookReward: fairygui.GList;
			readonly txtBuyCount: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtBuyRemine: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		type ConquestStepTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listReward: fairygui.GList;
			readonly listStarReward: fairygui.GList;
			readonly btnGo: UILib.Components.btn.BtnBig3;
			readonly btnReceive: UILib.Components.btn.BtnBig1;
			readonly star0: fairygui.GLoader;
			readonly star1: fairygui.GLoader;
			readonly star2: fairygui.GLoader;
			readonly txtStar0: fairygui.GRichTextField;
			readonly txtStar1: fairygui.GRichTextField;
			readonly txtStar2: fairygui.GRichTextField;
			readonly starGroup: fairygui.GGroup;
			readonly challengeStr: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp6;
		}, 'conDungType' | 'challengeState', undefined>;
		type ConquestStepEditView = StrictComponent<fairygui.GComponent, {
			readonly bgLoader: fairygui.GLoader;
			readonly titleName: fairygui.GRichTextField;
			readonly small: Conquest.Components.editRender.ConquestStepSmallEditRender;
			readonly max: Conquest.Components.editRender.ConquestStepLMaxEditRender;
			readonly max: Conquest.Components.editRender.ConquestStepLMaxEditRender;
			readonly max: Conquest.Components.editRender.ConquestStepLMaxEditRender;
			readonly small: Conquest.Components.editRender.ConquestStepSmallEditRender;
		}, undefined, undefined>;
		type ConquestStepAniView = StrictComponent<fairygui.GComponent, {
			readonly curStepView: Conquest.ConquestStepView;
		}, undefined, undefined>;
		type ConquestItemRender = StrictComponent<fairygui.GButton, {
			readonly loaderIcon: fairygui.GLoader;
			readonly titleText: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
		}, 'button', undefined>;
		type ConquestRewardItemWindow = StrictComponent<fairygui.GComponent, {
			readonly light1: fairygui.GLoader;
			readonly light2: fairygui.GLoader;
			readonly bg1: fairygui.GImage;
			readonly graphAniTop: fairygui.GGraph;
			readonly graphAniBottom: fairygui.GGraph;
			readonly graphAniParticle: fairygui.GGraph;
			readonly alterLoader: fairygui.GLoader;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly rewardList: fairygui.GList;
			readonly titleImg: UILib.Components.title.CommonTitleDark;
			readonly hookItemList: fairygui.GList;
		}, undefined, 't0'>;
		type ConquestRewardRender = StrictComponent<fairygui.GButton, {
			readonly reward: UILib.Components.renderer.RewardRender1;
			readonly txtTitle: fairygui.GTextField;
		}, 'button', undefined>;
		namespace Components {
			type ConquestAddBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type ConquestStepRender = StrictComponent<fairygui.GComponent, {
				readonly starRender: Conquest.Components.ConquestStepSatrRender;
				readonly fightGroup0: fairygui.GGroup;
				readonly fightGroup1: fairygui.GGroup;
				readonly bossRender: Conquest.Components.ConquestStepBossRender;
				readonly bossResGz: fairygui.GGraph;
				readonly bossRes: fairygui.GGraph;
				readonly receiveRes: fairygui.GGraph;
				readonly effectRes: fairygui.GGraph;
				readonly bossBtn: UILib.Components.btn.BtnEmpty;
				readonly redPoint: fairygui.GImage;
			}, 'fightState' | 'fightType' | 'isRight' | 'isRed', 'fencingOneAni' | 'fencingTwoAni'>;
			type ConquestLevyRender = StrictComponent<fairygui.GButton, {
				readonly listItem: fairygui.GList;
				readonly collectionBtn: UILib.Components.btn.BtnSmall2;
				readonly chapterName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly conditionTxt: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'c1', undefined>;
			type ConquestBoxRender = StrictComponent<fairygui.GButton, {
				readonly loaderBox: fairygui.GLoader;
			}, 'button' | 'conIsRecieve', undefined>;
			type ConquestStepSatrRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly star0: fairygui.GLoader;
				readonly star1: fairygui.GLoader;
				readonly star2: fairygui.GLoader;
				readonly starAGroup: fairygui.GGroup;
				readonly starLiang0: Conquest.Components.ConquestStarLiang;
				readonly starLiang1: Conquest.Components.ConquestStarLiang;
				readonly starLiang2: Conquest.Components.ConquestStarLiang;
				readonly starLGroup: fairygui.GGroup;
				readonly chapterName: fairygui.GRichTextField;
			}, 'conIsGateType' | 'conIsStar' | 'conIsHaveStar' | 'isRightState', undefined>;
			type ConquestArrowBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type ConquestHookItemRender = StrictComponent<fairygui.GButton, {
				readonly loaderIcon: fairygui.GLoader;
				readonly titleText: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			}, 'button', undefined>;
			type ConquestBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type ConquestIntroduce = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type ConquestStarLiang = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly aniGraph: fairygui.GGraph;
			}, 'button', undefined>;
			type ConquestStepBossRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GImage;
				readonly bossHead: fairygui.GLoader;
				readonly bossName: fairygui.GRichTextField;
			}, 'isBossRight', undefined>;
			type ConquestGuideFinger = StrictComponent<fairygui.GComponent, undefined, undefined, 'circleAni1' | 'circleAni2'>;
		}
		namespace Components.editRender {
			type ConquestStepLMaxEditRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly star0: fairygui.GLoader;
				readonly star1: fairygui.GLoader;
				readonly star2: fairygui.GLoader;
			}, undefined, 't0'>;
			type ConquestStepSmallEditRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, 't0'>;
			type ConquestStepRMaxEditRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly star0: fairygui.GLoader;
				readonly star1: fairygui.GLoader;
				readonly star2: fairygui.GLoader;
			}, undefined, 't0'>;
		}
	}
	import __pkg__52yysxet = Country;
	namespace Country {
		type CountryView = StrictComponent<fairygui.GComponent, {
			readonly btnPower: Country.Components.BtnFunc;
			readonly btnTask: Country.Components.BtnFunc;
			readonly btnOfficial: Country.Components.BtnFunc;
			readonly btnLib: Country.Components.BtnFunc;
			readonly btnBarbaricInvade: Country.Components.BtnFunc;
			readonly btnCountryLv: Country.Components.BtnFunc;
			readonly levelCom: Country.Components.CountryLevelCom;
			readonly countryLvRankCom: Country.Components.CountryLvRankCom;
		}, 'conMerge' | 'conCountry', undefined>;
		type CountryTitleView = StrictComponent<fairygui.GComponent, {
			readonly btnTitle0: Country.Components.BtnTitle1;
			readonly btnTitle1: Country.Components.BtnLeftTitle2;
			readonly btnTitle2: Country.Components.BtnRightTitle2;
			readonly btnTitle4: Country.Components.BtnRightTitle3;
			readonly btnTitle3: Country.Components.BtnLeftTitle2;
			readonly btnTitle5: Country.Components.BtnRightTitle3;
			readonly btnTitle6: Country.Components.BtnLeftTitle3;
			readonly btnTitle7: Country.Components.BtnLeftTitle3;
			readonly btnTitle8: Country.Components.BtnRightTitle3;
			readonly btnTitle9: Country.Components.BtnRightTitle3;
			readonly btnTitle10: Country.Components.BtnLeftTitle3;
			readonly btnTitle11: Country.Components.BtnLeftTitle3;
			readonly btnTitle: Country.Components.BtnTitleFunc;
			readonly btnRank: Country.Components.BtnTitleFunc;
			readonly btnMator: Country.Components.BtnTitleFunc;
			readonly btnOrder: Country.Components.BtnTitleFunc;
		}, undefined, 't0'>;
		type CountryTitleWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnFight: UILibHero.Components.fight.FightPowerSmall;
			readonly btnOperate: UILib.Components.btn.BtnBig1;
			readonly btnImpeach: UILib.Components.btn.BtnBig1;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly title: UILib.Components.title.CommonTitleDark;
			readonly listDes: fairygui.GList;
			readonly txtTip: fairygui.GTextField;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpr;
			readonly loaderTitle: UILib.Components.fontTab_richText.__cmpt__su2va3tlqc;
			readonly txtState: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly loaderHeroCom: Country.Components.render.MaskCircleHeroRes;
		}, 'conState' | 'conImpeach' | 'conOnline', undefined>;
		type ImpeachNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly btnGo: UILib.Components.btn.BtnBig4;
			readonly loaderHero: fairygui.GLoader;
			readonly guowang: fairygui.GLoader;
			readonly thName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly btnRoleFight: UILibHero.Components.fight.FightPowerSmall;
			readonly btnWangFight: UILibHero.Components.fight.FightPowerSmall;
			readonly gwName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type CountryImpeachWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnOppose: UILib.Components.btn.BtnBig3;
			readonly btnSupport: UILib.Components.btn.BtnBig5;
			readonly selecOppose: UILib.Components.btn.BtnBig3;
			readonly selecSupport: UILib.Components.btn.BtnBig5;
			readonly noSupport: UILib.Components.btn.BtnBig5;
			readonly noOppose: UILib.Components.btn.BtnBig3;
			readonly head2: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly head1: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly left0: fairygui.GImage;
			readonly left1: fairygui.GImage;
			readonly left2: fairygui.GImage;
			readonly left3: fairygui.GImage;
			readonly left4: fairygui.GImage;
			readonly left5: fairygui.GImage;
			readonly right0: fairygui.GImage;
			readonly right1: fairygui.GImage;
			readonly right2: fairygui.GImage;
			readonly right3: fairygui.GImage;
			readonly right4: fairygui.GImage;
			readonly right5: fairygui.GImage;
			readonly playerName1: fairygui.GTextField;
			readonly playerName2: fairygui.GTextField;
			readonly yhNum: fairygui.GTextField;
			readonly thNum: fairygui.GTextField;
			readonly txtRemainTime: fairygui.GTextField;
		}, 'btnc', undefined>;
		type SetKingNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly titleLoader: fairygui.GLoader;
		}, undefined, undefined>;
		type SetTitleNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly txtName: fairygui.GTextField;
			readonly txtTitle: fairygui.GTextField;
		}, undefined, undefined>;
		type CountryTitleAppointWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listPlayer: fairygui.GList;
		}, undefined, undefined>;
		type CountryExchequerView = StrictComponent<fairygui.GComponent, {
			readonly redPoint: fairygui.GImage;
			readonly btnTip2: fairygui.GButton;
			readonly btnTip1: fairygui.GButton;
			readonly item1: UILib.Components.renderer.RewardRender4;
			readonly item2: UILib.Components.renderer.RewardRender4;
			readonly item3: UILib.Components.renderer.RewardRender4;
			readonly btnReward: UILib.Components.btn.BtnBig4;
			readonly btnDetails: UILib.Components.btn.BtnEmpty;
			readonly txtYearKill: fairygui.GTextField;
			readonly txtYearLoss: fairygui.GTextField;
			readonly txtYearBuild: fairygui.GTextField;
			readonly txtBoxMultiple: fairygui.GTextField;
			readonly txtYearKillContribution: fairygui.GTextField;
			readonly txtYearLossContribution: fairygui.GTextField;
			readonly txtYearBuildContribution: fairygui.GTextField;
			readonly txtTime: UILib.Components.fontTab.__cmpt__oa3ga3tllk;
			readonly graphEffect: fairygui.GGraph;
			readonly graphAni: fairygui.GGraph;
		}, 'conType' | 'conState' | 'conIsRed', 'Box' | 't1' | 't2'>;
		type CountryMayorWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listPrefecture: fairygui.GList;
			readonly txtNum1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtNum2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
		}, undefined, undefined>;
		type CountrySendTokenWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnGet: UILib.Components.renderer.ConsumeRender;
			readonly btnSend: UILib.Components.btn.Btn6;
			readonly loaderBg: fairygui.GLoader;
			readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		type CountryNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly noticeCom: Country.Components.FontDesCom;
			readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtTitle: fairygui.GRichTextField;
		}, 'conState', undefined>;
		type CountryEditNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnSend: UILib.Components.btn.BtnBig1;
			readonly txtInput: fairygui.GRichTextField;
			readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type CountryMailWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnGet: UILib.Components.btn.BtnBig1;
			readonly textTitle1: fairygui.GTextField;
			readonly textDesc1: fairygui.GTextField;
			readonly txtLength1: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly textTitle2: fairygui.GTextField;
			readonly textDesc2: fairygui.GTextField;
			readonly txtLength2: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type TokenNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnGo: UILib.Components.btn.BtnBig1;
			readonly headCom: UILibHero.Components.render.headRender.MaskCircleRender;
			readonly txtTitle: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly txtDes: fairygui.GRichTextField;
		}, undefined, undefined>;
		type CountryTokenTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnGo: UILib.Components.btn.BtnBig1;
			readonly loaderBg: fairygui.GLoader;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		type CountryTaskView = StrictComponent<fairygui.GComponent, {
			readonly loaderTaskName: fairygui.GLoader;
			readonly imgTitle: fairygui.GImage;
			readonly nameLoader: fairygui.GLoader;
			readonly btnNext: UILib.Components.btnArrows.BtnArrows1;
			readonly btnLast: UILib.Components.btnArrows.BtnArrows1;
			readonly listTaskState: fairygui.GList;
			readonly listArward: fairygui.GList;
			readonly btnGet: UILib.Components.btn.BtnBig4;
			readonly btnGo: UILib.Components.btn.BtnBig3;
			readonly proTask: UILib.Components.proBar.ProgressBarBlue1;
			readonly txtTaskNum: fairygui.GTextField;
			readonly txtDesc: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtConstruct: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTypeDesc: fairygui.GTextField;
		}, 'conHaveStepDesc' | 'conIsConstruct' | 'conIsMerger' | 'conIsFinish', undefined>;
		type CountryOrderWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly textTitle1: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			readonly comDesc1: Country.Components.OrderDescCom;
			readonly comDesc2: Country.Components.OrderDescCom;
			readonly textTitle2: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			readonly btnGet: UILib.Components.btn.BtnBig1;
			readonly txtTitle: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
		}, 'conIsKing', undefined>;
		type CountryRankWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listRank: fairygui.GList;
			readonly listBtn: fairygui.GList;
			readonly rankOwn: Country.Components.render.CountryRankRender;
		}, 'conRankState', undefined>;
		type CountryMayorAppointWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listPlayer: fairygui.GList;
			readonly txtNum1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtNum2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
		}, undefined, undefined>;
		type CountryTitleListWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listTitle: fairygui.GList;
		}, undefined, undefined>;
		type CountryImpConfirmWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly imgBg: fairygui.GLoader;
			readonly listDes: fairygui.GList;
			readonly closeBtn: UILib.Components.btn.BtnBig2;
			readonly impeachmentBtn: UILib.Components.btn.BtnBig5;
			readonly titleTxt: fairygui.GRichTextField;
			readonly icon: fairygui.GLoader;
		}, undefined, undefined>;
		type CountryMayorItemWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderRole: Country.Components.RoleMayor;
			readonly ybTxt: fairygui.GRichTextField;
			readonly ybCjTxt: fairygui.GRichTextField;
			readonly ybTsTxt: fairygui.GRichTextField;
			readonly lcTxt: fairygui.GRichTextField;
			readonly lcCjTxt: fairygui.GRichTextField;
			readonly tqTxt: fairygui.GRichTextField;
			readonly tqCjTxt: fairygui.GRichTextField;
			readonly tsTxt: fairygui.GRichTextField;
			readonly lsTsTxt: fairygui.GRichTextField;
			readonly item0: UILib.Components.renderer.RewardRender4;
			readonly item1: UILib.Components.renderer.RewardRender4;
			readonly item2: UILib.Components.renderer.RewardRender4;
			readonly btnSet: UILib.Components.btn.BtnIcon;
			readonly gotoCity: UILib.Components.btn.BtnIcon;
			readonly flBtn: UILib.Components.btn.BtnBig4;
			readonly btnRoleFight: UILibHero.Components.fight.FightPowerBig;
			readonly playerName: fairygui.GTextField;
			readonly citiName: fairygui.GTextField;
		}, 'conState' | 'wucon', undefined>;
		type CountryExchequerDetailsView = StrictComponent<fairygui.GComponent, {
			readonly btnRedPackets: UILib.Components.btn.BtnBig4;
			readonly listCitySilver: fairygui.GList;
			readonly listCityMoney: fairygui.GList;
			readonly listCityCrop: fairygui.GList;
			readonly listRecore: fairygui.GList;
			readonly txtSilver: fairygui.GTextField;
			readonly txtMoney: fairygui.GTextField;
			readonly txtCrop: fairygui.GTextField;
			readonly txtCityMoney: fairygui.GTextField;
			readonly txtCitySilver: fairygui.GTextField;
			readonly txtCityCrop: fairygui.GTextField;
			readonly txtRedPackets: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			readonly redPoint: fairygui.GImage;
			readonly txtCitySilverJg: fairygui.GTextField;
			readonly txtCitySilverTxt: fairygui.GTextField;
			readonly txtCityMoneyTxt: fairygui.GTextField;
			readonly txtCityMoneyJg: fairygui.GTextField;
			readonly txtCityCropJg: fairygui.GTextField;
			readonly txtCityCropTxt: fairygui.GTextField;
		}, 'conType' | 'conIsRed', undefined>;
		type CountryTokenListWindow = StrictComponent<fairygui.GComponent, {
			readonly listToken: fairygui.GList;
		}, undefined, undefined>;
		type CountryRedEnvelopeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listPac: fairygui.GList;
			readonly num: fairygui.GTextField;
		}, undefined, undefined>;
		type RedPacketsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listBtn: fairygui.GList;
			readonly listPac: fairygui.GList;
			readonly btnGetReward: UILib.Components.btn.BtnBig1;
		}, 'conState', undefined>;
		namespace Components {
			type CountryExchequerHead = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type ButtonTask = StrictComponent<fairygui.GButton, {
				readonly txtCityName: fairygui.GRichTextField;
				readonly btnGo: UILib.Components.btn.BtnSmall1;
			}, 'button' | 'conIsFinish', undefined>;
			type OrderDescCom = StrictComponent<fairygui.GComponent, {
				readonly textDesc: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, undefined, undefined>;
			type BtnTitleFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type ProgressImpeach = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type BtnFunc = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button' | 'conRed', undefined>;
			type BtnTitle1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnLeftTitle2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnLeftTitle3 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnRightTitle2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnRightTitle3 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type FontDesCom = StrictComponent<fairygui.GComponent, {
				readonly txtNotice: fairygui.GRichTextField;
			}, undefined, undefined>;
			type BtnRadio = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type HeroFightCom = StrictComponent<fairygui.GComponent, {
				readonly txtHeroFight: fairygui.GTextField;
				readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
			}, undefined, undefined>;
			type RoleMayor = StrictComponent<fairygui.GComponent, {
				readonly loaderHero: fairygui.GLoader;
			}, undefined, undefined>;
			type BtnDetails = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsGray' | 'conIsRed', undefined>;
			type CountryLvRankCom = StrictComponent<fairygui.GComponent, {
				readonly listRank: fairygui.GList;
			}, undefined, undefined>;
			type circleProgressCom = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
			}, undefined, undefined>;
			type CountryLevelCom = StrictComponent<fairygui.GButton, {
				readonly circleProgressCom: Country.Components.circleProgressCom;
				readonly txtLv: fairygui.GTextField;
			}, 'conRed', undefined>;
			type Lable1 = StrictComponent<fairygui.GLabel, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpr;
			}, undefined, undefined>;
		}
		namespace Components.render {
			type CountryTitleAppointRender = StrictComponent<fairygui.GButton, {
				readonly loaderTitle: fairygui.GLoader;
				readonly roleHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly countryRender: UILib.Components.countryRender.CountryCityRender;
				readonly btnOperate: UILib.Components.btn.BtnSmall2;
				readonly btnCancel: UILib.Components.btn.BtnSmall4;
				readonly btnShowRole: UILib.Components.btn.BtnEmpty;
				readonly txtHeroFight: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtHeroName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtState: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly btnRoleFight: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conType', undefined>;
			type CountryMayorRender = StrictComponent<fairygui.GButton, {
				readonly loaderCityType: fairygui.GLoader;
				readonly btnSet: UILib.Components.btn.BtnSmall2;
				readonly btnCancel: UILib.Components.btn.BtnSmall4;
				readonly txtCity: UILib.Components.fontTab_richText.__cmpt__i098a3tlpk;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__i098a3tlpk;
				readonly txtCityType: UILib.Components.fontTab_richText.__cmpt__i098a3tlpk;
				readonly txtCityBuild: UILib.Components.fontTab_richText.__cmpt__i098a3tlpk;
			}, 'conIsOppaint' | 'itembgCon', undefined>;
			type CountryMayorAppointRender = StrictComponent<fairygui.GComponent, {
				readonly btnOperate: UILib.Components.btn.BtnSmall2;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly btnShowRole: UILib.Components.btn.BtnEmpty;
				readonly txtState: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtCity: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			}, 'conType', undefined>;
			type CountryTitleDesRender = StrictComponent<fairygui.GComponent, {
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CountryTitleRender = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly listDes: fairygui.GList;
				readonly btnSetTitle: UILib.Components.btn.BtnSmall2;
				readonly btnCancelTitle: UILib.Components.btn.BtnSmall4;
				readonly btnImpeach: UILib.Components.btn.BtnSmall4;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpr;
				readonly txtState: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpr;
			}, 'conState' | 'conImpeach', undefined>;
			type CountryRankRender = StrictComponent<fairygui.GButton, {
				readonly loaderRank: fairygui.GLoader;
				readonly loaderRank1: fairygui.GLoader;
				readonly btnFight: UILibHero.Components.fight.FightPowerSmall;
				readonly heroFightCom: Country.Components.HeroFightCom;
				readonly txtVal: UILib.Components.fontTab_richText.__cmpt__i098a3tlpk;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlq0;
				readonly txtRank: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly txtTitle: fairygui.GRichTextField;
				readonly txtMayor: fairygui.GRichTextField;
				readonly txtState: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			}, 'conRank' | 'conRankState' | 'conHaveTitle' | 'conHaveMayor' | 'conOwn', undefined>;
			type CountryImpRender = StrictComponent<fairygui.GComponent, {
				readonly txt: fairygui.GTextField;
			}, undefined, undefined>;
			type CountryExchequerCityRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly txtScore: fairygui.GTextField;
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type CountryExchequerRecoreRender = StrictComponent<fairygui.GButton, {
				readonly txtScore: fairygui.GTextField;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly listCity: fairygui.GList;
			}, 'conType', undefined>;
			type CountryTokenListRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly tokenType: fairygui.GLoader;
				readonly tokenIcon: fairygui.GLoader;
				readonly btnSend: UILib.Components.btn.BtnSmall4;
				readonly txtTip: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly gzTxt: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly ccTxt: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CountryLvRankRender = StrictComponent<fairygui.GComponent, {
				readonly txtLv: UILib.Components.fontTab_text.__cmpt__qmdq1no8u72;
				readonly txtExp: UILib.Components.fontTab_text.__cmpt__qmdq1no8u72;
				readonly txtRank: UILib.Components.fontTab_text.__cmpt__qmdq1no8u72;
			}, 'conRanking' | 'conIsOwn' | 'comType', undefined>;
			type MaskCircleHeroRes = StrictComponent<fairygui.GComponent, {
				readonly comHead: Country.Components.render.MaskCircleHeroResCom;
			}, undefined, undefined>;
			type MaskCircleHeroResCom = StrictComponent<fairygui.GComponent, {
				readonly loaderHead: fairygui.GLoader;
			}, undefined, undefined>;
			type CountryExchequerPacRender = StrictComponent<fairygui.GComponent, {
				readonly btnHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderTitle: fairygui.GLoader;
				readonly txtName: fairygui.GRichTextField;
			}, 'c1' | 'conType', undefined>;
		}
	}
	import __pkg__baajvb6k = CountryBadge;
	namespace CountryBadge {
		type CountryBadgeView = StrictComponent<fairygui.GComponent, {
			readonly loaderBg: fairygui.GLoader;
			readonly countryLvCom: CountryBadge.Components.CountryLevelCom;
			readonly countryBadgeCom: CountryBadge.Components.CountryBadgeCom;
			readonly countryTaskBtnCom: CountryBadge.Components.CountryTaskBtnCom;
			readonly countryLvRewardCom: CountryBadge.Components.CountryLevelRewardCom;
		}, undefined, undefined>;
		type CountryBadgeWearWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnOperate: UILib.Components.btn.BtnBig1;
			readonly listHero: fairygui.GList;
			readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
		}, 'conState', undefined>;
		namespace Components {
			type CountryLevelCom = StrictComponent<fairygui.GComponent, {
				readonly countryRender: fairygui.GLoader;
				readonly proExp: UILib.Components.progressBar.ProgressBar2;
				readonly btnGetExp: UILib.Components.btn.BtnSmall2;
				readonly btnPrivilege: UILib.Components.btn.BtnSmall4;
				readonly txtLv: fairygui.GTextField;
			}, 'conCountry', undefined>;
			type CountryBadgeCom = StrictComponent<fairygui.GComponent, {
				readonly imgPoint: fairygui.GImage;
				readonly btnTip: fairygui.GButton;
				readonly listAttr: fairygui.GList;
				readonly listHero: fairygui.GList;
				readonly graphAni: fairygui.GGraph;
				readonly txtLv: fairygui.GTextField;
				readonly txtTip: fairygui.GRichTextField;
			}, 'conCountry', undefined>;
			type CountryTaskBtnCom = StrictComponent<fairygui.GComponent, {
				readonly btnTaskJunWu: CountryBadge.Components.BtnTask;
				readonly btnTaskChenXi: CountryBadge.Components.BtnTask;
				readonly btnTaskChengJiu: CountryBadge.Components.BtnTask;
				readonly btnTaskGuoZhan: CountryBadge.Components.BtnTask;
				readonly redPointJunWu: fairygui.GImage;
				readonly redPointChenXi: fairygui.GImage;
				readonly redPointChengJiu: fairygui.GImage;
				readonly redPointGuoZhan: fairygui.GImage;
			}, undefined, 't0'>;
			type CountryLevelRewardCom = StrictComponent<fairygui.GComponent, {
				readonly listRewardLv: fairygui.GList;
				readonly listRewardDay: fairygui.GList;
				readonly rewardPrize: UILib.Components.renderer.RewardRenderForEffect1;
				readonly btnGetLvReward: UILib.Components.btn.BtnSmall4;
				readonly btnGetDayReward: UILib.Components.btn.BtnSmall4;
				readonly btnPreview: CountryBadge.Components.ButtonPreview;
				readonly txtLvDes: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly rewardTip: fairygui.GRichTextField;
			}, 'conLvRewardState' | 'conDayRewardState' | 'notMaxState', undefined>;
			type BtnTask = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsGray', undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ButtonPreview = StrictComponent<fairygui.GButton, {
				readonly btnPreview: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type AttrTextRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CountryBadgePosRender = StrictComponent<fairygui.GComponent, {
				readonly loaderHero: fairygui.GLoader;
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly imgRed: fairygui.GImage;
				readonly graphAni: fairygui.GGraph;
				readonly txtCondition: fairygui.GRichTextField;
			}, 'conState', undefined>;
			type CountryBadgeSelectRender = StrictComponent<fairygui.GButton, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderQuality: fairygui.GLoader;
				readonly loaderType: fairygui.GLoader;
				readonly imgWear: fairygui.GImage;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtHeroName: UILib.Components.fontTab.__cmpt__kyk1a3tljp;
			}, 'button', undefined>;
		}
	}
	import __pkg__49cwwuks = CountryBattle;
	namespace CountryBattle {
		type CountryBattleTaskRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
			readonly listReward: fairygui.GList;
			readonly txtNum: fairygui.GTextField;
		}, undefined, undefined>;
		type CountryBattleRankView = StrictComponent<fairygui.GComponent, {
			readonly listRank: fairygui.GList;
			readonly selfRankRender: CountryBattle.Components.render.CountryBattleRankRender;
		}, undefined, undefined>;
		type CountryBattleView = StrictComponent<fairygui.GComponent, {
			readonly xiaCom: CountryBattle.Components.countryBattleXia;
			readonly qiuCom: CountryBattle.Components.countryBattleQiu;
			readonly listReward: fairygui.GList;
			readonly btnReward: UILib.Components.btnAct.BtnAct2;
			readonly txtReward: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
			readonly txtDes: fairygui.GTextField;
			readonly txtNowNum: fairygui.GTextField;
			readonly loaderTitleTop: fairygui.GTextField;
		}, 'conType' | 'conIsShowReward', undefined>;
		type CountryBattleQiuStateWindow = StrictComponent<fairygui.GComponent, {
			readonly rewardIcon: fairygui.GLoader;
			readonly city1: CountryBattle.Components.cityCom;
			readonly city2: CountryBattle.Components.cityCom;
			readonly txtDes: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			readonly txtNum: fairygui.GTextField;
		}, 'conType', undefined>;
		namespace Components {
			type taskCityCom = StrictComponent<fairygui.GButton, {
				readonly imgIcon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conState' | 'conType' | 'conIsShow', undefined>;
			type countryBattleXia = StrictComponent<fairygui.GComponent, {
				readonly cityCom1: CountryBattle.Components.taskCityCom;
				readonly cityCom2: CountryBattle.Components.taskCityCom;
				readonly cityCom5: CountryBattle.Components.taskCityCom;
				readonly cityCom3: CountryBattle.Components.taskCityCom;
				readonly cityCom4: CountryBattle.Components.taskCityCom;
				readonly cityCom6: CountryBattle.Components.taskCityCom;
				readonly btnCountry1: UILib.Components.countryRender.CountryCityRender;
				readonly btnCountry2: UILib.Components.countryRender.CountryCityRender;
			}, undefined, undefined>;
			type countryBattleQiu = StrictComponent<fairygui.GComponent, {
				readonly mapView: fairygui.GComponent;
				readonly taskCom1: CountryBattle.Components.render.CountryBattleNewTaskRender;
				readonly taskCom2: CountryBattle.Components.render.CountryBattleNewTaskRender;
				readonly taskCom3: CountryBattle.Components.render.CountryBattleNewTaskRender;
				readonly taskCom4: CountryBattle.Components.render.CountryBattleNewTaskRender;
				readonly taskCom5: CountryBattle.Components.render.CountryBattleNewTaskRender;
				readonly taskCom6: CountryBattle.Components.render.CountryBattleNewTaskRender;
				readonly btnHelp: fairygui.GButton;
				readonly txtAtt1: fairygui.GTextField;
				readonly txtAtt2: fairygui.GTextField;
				readonly txtDes1: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly txtDes2: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly txtDes3: fairygui.GTextField;
			}, undefined, undefined>;
			type cityCom = StrictComponent<fairygui.GComponent, {
				readonly btnCountry: UILib.Components.countryRender.CountryCityRender;
				readonly txtCityName: fairygui.GTextField;
			}, 'conCityType' | 'conState', undefined>;
		}
		namespace Components.render {
			type CountryBattleRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtName: fairygui.GTextField;
			}, 'conIsNow', undefined>;
			type CountryBattleRankRender = StrictComponent<fairygui.GComponent, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly listReward: fairygui.GList;
				readonly txtRank: fairygui.GRichTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtFight: fairygui.GTextField;
			}, 'conRank' | 'conIsSelf', undefined>;
			type CountryBattleNewTaskRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtCountry: fairygui.GRichTextField;
			}, 'conState' | 'conCountry', undefined>;
			type CountryBattleNewRewardRender = StrictComponent<fairygui.GComponent, {
				readonly rewardIcon: fairygui.GLoader;
				readonly txtNum: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conState', undefined>;
		}
	}
	import __pkg__rfo2wwmy = CountryBoss;
	namespace CountryBoss {
		type CountryBossRankView = StrictComponent<fairygui.GComponent, {
			readonly btnRank: UILib.Components.button_radio.Button_Radio3;
			readonly btnReward: UILib.Components.button_radio.Button_Radio3;
			readonly listRank: fairygui.GList;
			readonly listRankReward: fairygui.GList;
			readonly selfRank: CountryBoss.Render.CountryBossRankRender;
		}, 'conType', undefined>;
		type CountryBossView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly proHp: CountryBoss.Components.proHp;
			readonly btnRank: fairygui.GLoader;
			readonly btnHelp: fairygui.GButton;
			readonly btnGo: UILib.Components.btn.BtnBig4;
			readonly btnAddNum: UILib.Components.btn.BtnAdd;
			readonly listReward: fairygui.GList;
			readonly listReward2: fairygui.GList;
			readonly txtNpcName: UILib.Components.fontTab.__cmpt__9i4xa3tll4;
			readonly txtNpcLv: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			readonly txtTimeDes: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			readonly txtTime: UILib.Components.fontTab.__cmpt__kyk1a3tlju;
			readonly txtNum: UILib.Components.fontTab.__cmpt__e9fra3tlk7;
			readonly txtAddtime: UILib.Components.fontTab.__cmpt__e9fra3tlk7;
		}, 'c1', undefined>;
		type CountryBossSelectHeroWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnGo: UILib.Components.btn.BtnBig1;
			readonly troopList: fairygui.GList;
			readonly txtNum: fairygui.GTextField;
			readonly txtPutNum: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
		}, undefined, undefined>;
		namespace Render {
			type CountryBossRankRender = StrictComponent<fairygui.GComponent, {
				readonly rankLoader: fairygui.GLoader;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly comHead: CountryBoss.Components.RankHeroHead;
				readonly txtRanking: fairygui.GRichTextField;
				readonly txtName: fairygui.GRichTextField;
				readonly txtFight: fairygui.GRichTextField;
			}, 'conRank' | 'conIsSelf', undefined>;
			type CountryBossRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtRank: fairygui.GTextField;
			}, 'conRank' | 'conIsSelf', undefined>;
			type CountryBossHeroRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly progressFront: UILibHero.Components.render.other.ProgressArmy;
				readonly progressBack: UILibHero.Components.render.other.ProgressArmy;
				readonly txtFight: UILibHero.Components.fight.FightPowerSmall;
			}, 'button', undefined>;
		}
		namespace Components {
			type proHp = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type RankHeroHead = StrictComponent<fairygui.GComponent, {
				readonly icon: fairygui.GLoader;
				readonly loaderQuality: fairygui.GLoader;
			}, 'conIsHeroHead', undefined>;
		}
	}
	import __pkg__t39kq5on = CountryBuild;
	namespace CountryBuild {
		type CountryBTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly headCom1: UILibHero.Components.render.headRender.MaskCircleRender;
			readonly headCom2: UILibHero.Components.render.headRender.MaskCircleRender;
			readonly headCom3: UILibHero.Components.render.headRender.MaskCircleRender;
			readonly btnOpen: UILib.Components.btn.BtnBig1;
			readonly introduce: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtName1: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
			readonly txtDes1: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
			readonly txtName2: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
			readonly txtDes2: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
			readonly txtName3: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
			readonly txtDes3: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
			readonly txtDes4: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
			readonly txtDes6: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
			readonly txtDes5: fairygui.GRichTextField;
		}, 'conNum', undefined>;
		type CountryBPowerTaskView = StrictComponent<fairygui.GComponent, {
			readonly comMap: CountryBuild.Components.mapCom;
			readonly effefcom: CountryBuild.Components.EffefCom;
			readonly btnGoTo: UILib.Components.btn.BtnBig3;
			readonly btnGoTo2: UILib.Components.btn.BtnEmpty;
			readonly txtOwnNum: fairygui.GTextField;
			readonly txtEnemyNum: fairygui.GTextField;
			readonly txtDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly tag1: CountryBuild.Components.CountryTagBtn;
			readonly tag2: CountryBuild.Components.CountryTagBtn;
			readonly tag3: CountryBuild.Components.CountryTagBtn;
			readonly listReward: fairygui.GList;
			readonly txt1: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
			readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			readonly leaderFightCom: CountryBuild.Components.LeaderAbort.LeaderFightView;
		}, 'conMaxFight' | 'conState' | 'conPos' | 'conOtherPos' | 'conCity' | 'c1', 't0'>;
		type CountryBuildWindow = StrictComponent<fairygui.GComponent, {
			readonly buildBtn: UILib.Components.btn.BtnBig4;
			readonly noBuildBtn: UILib.Components.btn.BtnBig2;
			readonly countryList: fairygui.GList;
			readonly selectList: fairygui.GList;
			readonly title: UILib.Components.fontTab.__cmpt__v5p1a3tlh4;
		}, 'conMask', 't0'>;
		namespace Components {
			type CountryBNameRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'selectState', undefined>;
			type CountryBColorRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'selectState', undefined>;
			type EffefCom = StrictComponent<fairygui.GComponent, {
				readonly graphHero0: fairygui.GGraph;
				readonly graphHero1: fairygui.GGraph;
				readonly graphHero2: fairygui.GGraph;
				readonly graphHero3: fairygui.GGraph;
				readonly graphHero4: fairygui.GGraph;
				readonly graphHero5: fairygui.GGraph;
				readonly graphHero6: fairygui.GGraph;
				readonly graphHero7: fairygui.GGraph;
				readonly graphHero8: fairygui.GGraph;
				readonly graphDown0: fairygui.GGraph;
				readonly graphDown1: fairygui.GGraph;
				readonly graphDown2: fairygui.GGraph;
				readonly graphDown3: fairygui.GGraph;
				readonly graphDown4: fairygui.GGraph;
				readonly graphDown5: fairygui.GGraph;
				readonly graphDown6: fairygui.GGraph;
				readonly graphDown7: fairygui.GGraph;
				readonly graphDown8: fairygui.GGraph;
				readonly graphUp0: fairygui.GGraph;
				readonly graphUp1: fairygui.GGraph;
				readonly graphUp2: fairygui.GGraph;
				readonly graphUp3: fairygui.GGraph;
				readonly graphUp4: fairygui.GGraph;
				readonly graphUp5: fairygui.GGraph;
				readonly graphUp6: fairygui.GGraph;
				readonly graphUp7: fairygui.GGraph;
				readonly graphUp8: fairygui.GGraph;
			}, 'conCity', undefined>;
			type mapCom = StrictComponent<fairygui.GComponent, {
				readonly comMap: fairygui.GComponent;
			}, undefined, undefined>;
			type CountryTagBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly selectIcon: fairygui.GLoader;
			}, 'button' | 'c1', undefined>;
			type Btn_HeGuoZhiZhan = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type Btn_LingXiuZhengDuo = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
		}
		namespace Components.LeaderAbort {
			type LeaderFightView = StrictComponent<fairygui.GComponent, {
				readonly leader1: CountryBuild.Components.LeaderAbort.LeaderRender;
				readonly leader2: CountryBuild.Components.LeaderAbort.LeaderRender;
				readonly leader3: CountryBuild.Components.LeaderAbort.LeaderRender;
				readonly awardList1: fairygui.GList;
				readonly des1: fairygui.GRichTextField;
				readonly des2: fairygui.GRichTextField;
				readonly awardList2: fairygui.GList;
				readonly des3: fairygui.GRichTextField;
				readonly awardList3: fairygui.GList;
			}, undefined, undefined>;
			type LeaderRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'c1', undefined>;
			type AwardRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'selectState', undefined>;
		}
	}
	import __pkg__93jjkziq = CountryDailyEdict;
	namespace CountryDailyEdict {
		type CountryDailyEdictView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly topBg: fairygui.GLoader;
			readonly bottomwenzi: fairygui.GLoader;
			readonly listSubView: CountryDailyEdict.CountryDailyListSubView;
			readonly proActive: CountryDailyEdict.Components.ProBar.CountryEdictBoxBar;
			readonly imgArrows: fairygui.GImage;
			readonly imgArrowsUp: fairygui.GImage;
			readonly btnBase0: CountryDailyEdict.Components.CountryActiveBoxRender;
			readonly btnBase1: CountryDailyEdict.Components.CountryActiveBoxRender;
			readonly btnBase2: CountryDailyEdict.Components.CountryActiveBoxRender;
			readonly btnBase3: CountryDailyEdict.Components.CountryActiveBoxRender;
			readonly btnBase4: CountryDailyEdict.Components.CountryActiveBoxRender;
			readonly tipBtn: CountryDailyEdict.Components.CountryDailyEdictTipRender;
			readonly btnAllReceive: UILib.Components.btn.BtnBig1;
			readonly btnHelp: fairygui.GButton;
			readonly timeStr: fairygui.GRichTextField;
			readonly txtNum: fairygui.GRichTextField;
		}, undefined, 'boxAni'>;
		type CountryDailyEdictExpSubView = StrictComponent<fairygui.GComponent, {
			readonly topBg: fairygui.GLoader;
			readonly expBar: CountryDailyEdict.Components.ProBar.ProgressCountryExpBar;
			readonly countryList: fairygui.GList;
			readonly finshCount: fairygui.GRichTextField;
		}, undefined, undefined>;
		type CountryDailyListSubView = StrictComponent<fairygui.GComponent, {
			readonly listTask: fairygui.GList;
		}, undefined, 'listAni'>;
		namespace Components {
			type CountryDailyBoxExpBar = StrictComponent<fairygui.GComponent, {
				readonly barMask: fairygui.GGraph;
			}, undefined, undefined>;
			type CountryActiveBoxRender = StrictComponent<fairygui.GButton, {
				readonly btnBox: fairygui.GLoader;
				readonly btnBox1: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsOpen' | 'conIsLast', 'aniRota'>;
			type CountryDailyEdictTaskRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly endPoint: fairygui.GImage;
				readonly btnGetInto: UILib.Components.btn.BtnSmall4;
				readonly btnGet: UILib.Components.btn.BtnSmall1;
				readonly btnGroup: fairygui.GGroup;
				readonly rewardList: fairygui.GList;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
				readonly txtActive: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly bgGray: fairygui.GLoader;
				readonly txtOpenDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conButton' | 'grayState', undefined>;
			type CountryDailyEdictTipRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CountryDailyEdictExpRender = StrictComponent<fairygui.GComponent, {
				readonly topBg: fairygui.GLoader;
				readonly countryRender: UILib.Components.countryRender.CountryCityRender;
				readonly rewardRender: UILib.Components.renderer.RewardRender2;
				readonly expStr: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'loaderState' | 'conIsOwn', undefined>;
		}
		namespace Components.ProBar {
			type CountryEdictBoxBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: CountryDailyEdict.Components.CountryDailyBoxExpBar;
			}, undefined, undefined>;
			type CountryEdictTaskBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type CountryDailyExpTitle = StrictComponent<fairygui.GComponent, {
				readonly txtNum: fairygui.GRichTextField;
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
			}, 'conComplete', undefined>;
			type ProgressCountryExpBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly expTitle0: CountryDailyEdict.Components.ProBar.CountryDailyExpTitle;
				readonly expTitle1: CountryDailyEdict.Components.ProBar.CountryDailyExpTitle;
				readonly expTitle2: CountryDailyEdict.Components.ProBar.CountryDailyExpTitle;
				readonly expTitle3: CountryDailyEdict.Components.ProBar.CountryDailyExpTitle;
				readonly expTitle4: CountryDailyEdict.Components.ProBar.CountryDailyExpTitle;
			}, undefined, undefined>;
		}
	}
	import __pkg__eo8recr1 = CountryEdict;
	namespace CountryEdict {
		type CountryEdictView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly listType: fairygui.GList;
		}, 'conOpenSel', undefined>;
		namespace SubViews {
			type CountryArmyEdictSubview = StrictComponent<fairygui.GComponent, {
				readonly comMap: CountryEdict.Components.cuntryArmy.mapCom;
				readonly rankCom1: CountryEdict.Components.achievementEdict.CountryAchievementTipRender;
				readonly rankCom2: CountryEdict.Components.achievementEdict.CountryAchievementTipRender;
				readonly rankCom3: CountryEdict.Components.achievementEdict.CountryAchievementTipRender;
				readonly proExp: CountryEdict.Components.achievementEdict.ProgressBar5;
				readonly listTask: fairygui.GList;
				readonly listReward: fairygui.GList;
				readonly btnGet: UILib.Components.btn.BtnSmall2;
				readonly btnLelf: UILib.Components.btnArrows.BtnArrows2;
				readonly btnRight: UILib.Components.btnArrows.BtnArrows2;
				readonly btnTip: fairygui.GButton;
				readonly redPoint: fairygui.GImage;
				readonly txtCityDes: fairygui.GTextField;
				readonly txtDes: fairygui.GTextField;
				readonly finshCount: fairygui.GTextField;
			}, 'conRewardState' | 'conType', 't0'>;
			type AchievementEdictSubView = StrictComponent<fairygui.GComponent, {
				readonly personalCom: CountryEdict.Components.achievementEdict.PersonalAchievementCom;
				readonly countryCom: CountryEdict.Components.achievementEdict.CountryAchievementCom;
			}, 'conType', undefined>;
			type CountryBattleEdictSubview = StrictComponent<fairygui.GComponent, {
				readonly bg1: fairygui.GLoader;
				readonly topBg: fairygui.GLoader;
				readonly bg: fairygui.GLoader;
				readonly rankCom1: CountryEdict.Components.countryBattle.CountryBattleRankRender;
				readonly rankCom2: CountryEdict.Components.countryBattle.CountryBattleRankRender;
				readonly rankCom3: CountryEdict.Components.countryBattle.CountryBattleRankRender;
				readonly comTask: CountryEdict.Components.countryBattle.taskListCom;
				readonly btnOwn: CountryEdict.Components.countryBattle.BtnType;
				readonly btnCountry: CountryEdict.Components.countryBattle.BtnType;
				readonly btnTip: fairygui.GButton;
				readonly btnGet: UILib.Components.btn.BtnBig1;
				readonly redPoint: fairygui.GImage;
				readonly txtDes3: UILib.Components.fontTab.__cmpt__f73xa3tlhs;
				readonly txtDes4: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtBtn: fairygui.GRichTextField;
				readonly txtDes: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
				readonly txtDes2: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
				readonly listCityTask: fairygui.GList;
			}, 'conType' | 'conState', undefined>;
		}
		namespace Components {
			type BtnPage = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conIsShowRed', undefined>;
		}
		namespace Components.cuntryArmy {
			type CountryArmyCityBtn = StrictComponent<fairygui.GButton, {
				readonly loaderCity: fairygui.GLoader;
				readonly loaderSelectCity: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly txtTaskNum: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conIsOpen' | 'button' | 'conIsCanRed' | 'conType', undefined>;
			type CountryArmyTaskRender = StrictComponent<fairygui.GComponent, {
				readonly btnGet: UILib.Components.btn.BtnSmall4;
				readonly btnGo: UILib.Components.btn.BtnSmall2;
				readonly listReward: fairygui.GList;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conState', undefined>;
			type CountryArmyTaskRender2 = StrictComponent<fairygui.GComponent, {
				readonly topBg: fairygui.GLoader;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly expStr: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conRank' | 'conIsOwn', undefined>;
			type mapCom = StrictComponent<fairygui.GComponent, {
				readonly comMap: fairygui.GComponent;
			}, undefined, undefined>;
		}
		namespace Components.countryBattle {
			type CountryBattleRankRender = StrictComponent<fairygui.GComponent, {
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly listReward: fairygui.GList;
				readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conRank', undefined>;
			type CntryBattleTaskRender = StrictComponent<fairygui.GButton, {
				readonly proRale: UILib.Components.progressBar.ProgressBar2;
				readonly btnGo: UILib.Components.btn.BtnSmall2;
				readonly btnBox: UILib.Components.btn.BtnAdd;
				readonly btnGet: UILib.Components.btn.BtnSmall4;
				readonly listReward: fairygui.GList;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conState', undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type BtnType = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conType' | 'conIsCanRed', undefined>;
			type CityTaskRender = StrictComponent<fairygui.GComponent, {
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtScore: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conState' | 'conType', undefined>;
			type taskListCom = StrictComponent<fairygui.GComponent, {
				readonly listTask: fairygui.GList;
			}, undefined, 'tweenUp'>;
		}
		namespace Components.achievementEdict {
			type AchievementEdictRender = StrictComponent<fairygui.GComponent, {
				readonly proRale: UILib.Components.progressBar.ProgressBar2;
				readonly btnBox: UILib.Components.btn.BtnAdd;
				readonly btnGo: UILib.Components.btn.BtnSmall2;
				readonly btnGet: UILib.Components.btn.BtnSmall4;
				readonly listReward: fairygui.GList;
				readonly graphAni: fairygui.GGraph;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtTime: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			}, 'conState', undefined>;
			type AchievementEdictTab = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type CountryAchievementCom = StrictComponent<fairygui.GComponent, {
				readonly listCountryTask: fairygui.GList;
				readonly listCountryTip: fairygui.GList;
				readonly bottomwenzi: fairygui.GImage;
				readonly proExp: CountryEdict.Components.achievementEdict.ProgressBar5;
				readonly btnTip: fairygui.GButton;
			}, undefined, 't0'>;
			type CountryAchievementTipRender = StrictComponent<fairygui.GComponent, {
				readonly imgOwn: fairygui.GImage;
				readonly countryRender: UILib.Components.countryRender.CountryCityRender;
				readonly rewardRender: UILib.Components.renderer.RewardRender2;
				readonly txtTip: fairygui.GTextField;
			}, 'conRank' | 'conOwn', undefined>;
			type LimitTimeAchievementCom = StrictComponent<fairygui.GComponent, {
				readonly txtTip: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly listReward: fairygui.GList;
				readonly listLimitTask: fairygui.GList;
				readonly bottomwenzi: fairygui.GImage;
				readonly proLimitRale: CountryEdict.Components.achievementEdict.ProgressBar6;
			}, undefined, undefined>;
			type PersonalAchievementCom = StrictComponent<fairygui.GComponent, {
				readonly limitCom: CountryEdict.Components.achievementEdict.LimitTimeAchievementCom;
				readonly seasonCom: CountryEdict.Components.achievementEdict.SeasonAchievementCom;
			}, 'conHaveLimit', undefined>;
			type ProgressBar5 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly exp0: CountryEdict.Components.achievementEdict.AchievementRale;
				readonly exp1: CountryEdict.Components.achievementEdict.AchievementRale;
				readonly exp2: CountryEdict.Components.achievementEdict.AchievementRale;
				readonly exp3: CountryEdict.Components.achievementEdict.AchievementRale;
				readonly exp4: CountryEdict.Components.achievementEdict.AchievementRale;
				readonly exp5: CountryEdict.Components.achievementEdict.AchievementRale;
			}, undefined, undefined>;
			type SeasonAchievementCom = StrictComponent<fairygui.GComponent, {
				readonly listSeasonTask: fairygui.GList;
				readonly proSeasonRale: CountryEdict.Components.achievementEdict.ProgressBar6;
			}, undefined, undefined>;
			type AchievementRale = StrictComponent<fairygui.GComponent, {
				readonly txtNum: fairygui.GTextField;
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
			}, 'conComplete', undefined>;
			type AchievementEdictFontTab = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type ProgressBar6 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__egoptiqt = CountryLvPrivilege;
	namespace CountryLvPrivilege {
		type CountryLvPrivilegeWindow = StrictComponent<fairygui.GComponent, {
			readonly listRender: fairygui.GList;
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
		}, undefined, undefined>;
		type CountryRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
			readonly btnRightReward: UILib.Components.btn.BtnCutDown;
			readonly listRender: fairygui.GList;
		}, 'conState', undefined>;
		namespace Components {
			type QqbyTitleRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'conIsGray', undefined>;
			type CountryLvPrivilegeRender = StrictComponent<fairygui.GComponent, {
				readonly btnKing: CountryLvPrivilege.Components.QqbyTitleRender;
				readonly listTitle: fairygui.GList;
				readonly listDes: fairygui.GList;
				readonly txtTitle: fairygui.GTextField;
			}, 'conIsActivate' | 'c1', undefined>;
			type CountryLvPrivilegeDesRender = StrictComponent<fairygui.GComponent, {
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			}, 'conIsNew', undefined>;
			type CountryRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtDes: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__xgy3byqk = CountryPower;
	namespace CountryPower {
		type CountryQqbyMapWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly comMap: fairygui.GComponent;
		}, undefined, undefined>;
		type CountryQqbyTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnReward: CountryPower.Components.countryPowerRender.QqbyRewardRender1;
			readonly btnTax: CountryPower.Components.countryPowerRender.QqbyTaxBtn;
			readonly listType: fairygui.GList;
			readonly listCity: fairygui.GList;
			readonly listTitle: fairygui.GList;
			readonly txtTip: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtTitle: fairygui.GTextField;
			readonly btnKing: UILib.Components.btn.BtnEmpty;
			readonly txtTitle1: fairygui.GTextField;
			readonly btnKing1: UILib.Components.btn.BtnEmpty;
		}, 'conState' | 'conIsHaveTitle' | 'conQqbyState', undefined>;
		type CountryPowerView = StrictComponent<fairygui.GComponent, {
			readonly comMap: fairygui.GComponent;
			readonly btnMap: CountryPower.Components.countryPowerRender.QqbyMapBtn;
			readonly btnNotMerger: CountryPower.Components.countryPowerRender.QqbyNotMergerRender;
			readonly btnQqby: CountryPower.Components.countryPowerRender.QqbyTaskRender;
			readonly btnArrow1: UILib.Components.btnArrows.BtnArrows2;
			readonly btnArrow2: UILib.Components.btnArrows.BtnArrows2;
			readonly listQqby: fairygui.GList;
			readonly listForce: fairygui.GList;
			readonly nameLoader: fairygui.GLoader;
			readonly btnTip: fairygui.GButton;
			readonly guide1: fairygui.GGraph;
			readonly guide2: fairygui.GGraph;
		}, 'conIsMerger', undefined>;
		type CountryPowerNewView = StrictComponent<fairygui.GComponent, {
			readonly comMap: fairygui.GComponent;
			readonly listForce: fairygui.GList;
		}, 'conIsMerger', undefined>;
		namespace Components.countryPowerRender {
			type CountryForceRender = StrictComponent<fairygui.GButton, {
				readonly loaderCountryName: fairygui.GLoader;
				readonly loaderCountry: fairygui.GLoader;
				readonly btnCountry: CountryPower.Components.countryPowerRender.CountryFlagBtn;
				readonly listCity: fairygui.GList;
				readonly effect: fairygui.GGraph;
				readonly selectImg: fairygui.GImage;
				readonly txtPower: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly comEffect: CountryPower.Components.countryPowerRender.CityFightEffectCom;
			}, 'conIsMax' | 'conIsMerge' | 'conIsHasCountry', undefined>;
			type QqbyTaskRender = StrictComponent<fairygui.GButton, {
				readonly listTitle: fairygui.GList;
				readonly listCity: fairygui.GList;
				readonly btnKing: CountryPower.Components.countryPowerRender.QqbyTitleRender;
				readonly txtDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtTip: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtTax: fairygui.GTextField;
				readonly btnReward: CountryPower.Components.countryPowerRender.QqbyRewardRender;
				readonly rewardEffect: fairygui.GGraph;
			}, 'conHaveTax' | 'conIsGray', undefined>;
			type QqbyTitleRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'conIsGray', undefined>;
			type QqbyRewardRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'conState', undefined>;
			type ForceNotMergeCom = StrictComponent<fairygui.GButton, {
				readonly comDown: CountryPower.Components.countryPowerRender.ForceNotMergeRender;
				readonly comUp: CountryPower.Components.countryPowerRender.ForceNotMergeRender;
			}, undefined, undefined>;
			type ForceNotMergeRender = StrictComponent<fairygui.GComponent, {
				readonly btnCountry: CountryPower.Components.countryPowerRender.CountryFlagBtn;
				readonly txtPower: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly effect: fairygui.GGraph;
				readonly listCity: fairygui.GList;
				readonly selectImg: fairygui.GImage;
			}, 'conTouchDown' | 'conIsMax', undefined>;
			type CountryPowerCitySmallRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly txtScore: fairygui.GTextField;
			}, undefined, undefined>;
			type CountryFlagBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly btnCountry: UILib.Components.countryRender.CountryCityRender;
			}, undefined, undefined>;
			type QqbyChooiceBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'btnState', undefined>;
			type QqbyCityBtn = StrictComponent<fairygui.GButton, {
				readonly cityShape: fairygui.GGraph;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGuancheng' | 'conState', undefined>;
			type QqbyNotMergerRender = StrictComponent<fairygui.GButton, {
				readonly btnCity: UILib.Components.btn.BtnEmpty;
				readonly btnTitle: UILib.Components.btn.BtnEmpty;
				readonly btnReward: UILib.Components.btn.BtnEmpty;
				readonly btnTax: UILib.Components.btn.BtnEmpty;
				readonly nameLoader1: fairygui.GLoader;
				readonly nameLoader: fairygui.GLoader;
				readonly cityShape: fairygui.GGraph;
				readonly listMyCountry: fairygui.GList;
				readonly listOtherCountry: fairygui.GList;
				readonly listOtherCountry1: fairygui.GList;
				readonly txtDesc: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'conIsMerger', undefined>;
			type CountryForceBigRender = StrictComponent<fairygui.GButton, {
				readonly btnCountry: CountryPower.Components.countryPowerRender.CountryFlagBtn;
				readonly loaderCountry: fairygui.GLoader;
				readonly loaderCountryName: fairygui.GLoader;
				readonly txtPower: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly listCity: fairygui.GList;
				readonly effect: fairygui.GGraph;
				readonly selectImg: fairygui.GImage;
				readonly comEffect: CountryPower.Components.countryPowerRender.CityFightEffectCom;
			}, 'conIsMax' | 'conIsMerge' | 'conIsHasCountry', undefined>;
			type CountryForceSmallRender = StrictComponent<fairygui.GButton, {
				readonly btnCountry: CountryPower.Components.countryPowerRender.CountryFlagBtn;
				readonly loaderCountry: fairygui.GLoader;
				readonly loaderCountryName: fairygui.GLoader;
				readonly listCity: fairygui.GList;
				readonly effect: fairygui.GGraph;
				readonly selectImg: fairygui.GImage;
				readonly txtPower: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly comEffect: CountryPower.Components.countryPowerRender.CityFightEffectCom;
			}, 'conIsMax' | 'conIsMerge' | 'conIsHasCountry', undefined>;
			type CountryPowerCityRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly txtScore: fairygui.GTextField;
			}, undefined, undefined>;
			type QqbyTipBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly icon1: fairygui.GLoader;
			}, 'button', undefined>;
			type QqbyCityBtn1 = StrictComponent<fairygui.GButton, {
				readonly cityShape: fairygui.GGraph;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGuancheng' | 'conState', undefined>;
			type QqbyRewardRender1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'conState', undefined>;
			type QqbyTaxBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type QqbyMapBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CityFightEffectCom = StrictComponent<fairygui.GComponent, undefined, undefined, 'fightEffect'>;
		}
	}
	import __pkg__jn7xebvg = CreateRole;
	namespace CreateRole {
		type CreateRoleView = StrictComponent<fairygui.GComponent, {
			readonly createRoleView: CreateRole.EmptyCom;
		}, 'conRewardPos' | 'conShowInput' | 'countryState', 'tFlag' | 'CloudFX' | 't1' | 't3' | 't5'>;
		type CreateRoleLightFX = StrictComponent<fairygui.GComponent, {
			readonly Light: fairygui.GLoader;
			readonly Cloud: fairygui.GLoader;
			readonly Par: fairygui.GLoader;
		}, undefined, 'LightFX'>;
		type EmptyCom = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly btnEnterGame: CreateRole.Components.entergame;
			readonly createName: CreateRole.Components.CreateName;
			readonly country3: CreateRole.Components.ButtonCity2;
			readonly country5: CreateRole.Components.ButtonCity1;
			readonly country1: CreateRole.Components.ButtonCity;
			readonly groupReward: CreateRole.Components.BtnRecommend;
			readonly Star: fairygui.GLoader;
			readonly imgTipBg: fairygui.GImage;
			readonly txtCount: fairygui.GTextField;
			readonly groupTip: fairygui.GGroup;
			readonly inputCom: CreateRole.Components.InputCom;
			readonly loaderCurFlag: fairygui.GLoader;
		}, 'conRewardPos' | 'conShowInput' | 'countryState', 'tFlag' | 'CloudFX' | 't1' | 't3' | 't5'>;
		namespace Components {
			type Button_UIicon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CreateName = StrictComponent<fairygui.GComponent, {
				readonly graphAni: fairygui.GGraph;
				readonly btnRandom: CreateRole.Components.Button_UIicon;
				readonly txtName: fairygui.GTextField;
			}, undefined, undefined>;
			type entergame = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ButtonCity = StrictComponent<fairygui.GButton, {
				readonly graph: fairygui.GGraph;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type Button_Arrow = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type InputCom = StrictComponent<fairygui.GComponent, {
				readonly touchLayer: fairygui.GGraph;
				readonly btnOk: CreateRole.Components.BtnSmall2;
				readonly btnFace: CreateRole.Components.BtnFace;
				readonly txtInput: fairygui.GTextField;
			}, undefined, undefined>;
			type BtnSmall2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnCountryFont = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnRecommend = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ButtonCity1 = StrictComponent<fairygui.GButton, {
				readonly graph: fairygui.GGraph;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type ButtonCity2 = StrictComponent<fairygui.GButton, {
				readonly graph: fairygui.GGraph;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnFace = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__2q2fd50g = CrossServerFinals;
	namespace CrossServerFinals {
		type CrossServerFinalsView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly btnRewardPreView: UILib.Components.btn.BtnBig1;
			readonly changeBtn: UILib.Components.btn.BtnBig4;
			readonly imgTime: fairygui.GImage;
			readonly progress: UILib.Components.proBar.ProgressBarYellow;
			readonly btnList: fairygui.GList;
			readonly txtFightTime: fairygui.GTextField;
		}, 'subType' | 'conIsJoin', undefined>;
		type CSFinalsRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
			readonly listRank: fairygui.GList;
		}, undefined, undefined>;
		namespace subView {
			type CrossServerGroupSubView = StrictComponent<fairygui.GComponent, {
				readonly btnList: fairygui.GList;
				readonly playerList: fairygui.GList;
			}, undefined, undefined>;
			type CrossServerRiseSubView = StrictComponent<fairygui.GComponent, {
				readonly playerList: fairygui.GList;
			}, undefined, undefined>;
			type CrossServerRiseFinalsSubView = StrictComponent<fairygui.GComponent, {
				readonly eightRiseRender0: CrossServerFinals.Components.riseRender.CrossServerRiseLeftRender;
				readonly eightRiseRender3: CrossServerFinals.Components.riseRender.CrossServerRiseLeftRender;
				readonly eightRiseRender1: CrossServerFinals.Components.riseRender.CrossServerRiseRightRender;
				readonly eightRiseRender2: CrossServerFinals.Components.riseRender.CrossServerRiseRightRender;
				readonly twoRiseRender0: CrossServerFinals.Components.riseRender.CrossServerRiseFirstRender;
				readonly fourRiseRender0: CrossServerFinals.Components.riseRender.CrossServerRiseSecondLeftRender;
				readonly fourRiseRender1: CrossServerFinals.Components.riseRender.CrossServerRiseSecondRightRender;
			}, undefined, undefined>;
		}
		namespace Components {
			type CrossServerGroupRender = StrictComponent<fairygui.GComponent, {
				readonly playerList: fairygui.GList;
				readonly txtTime: fairygui.GTextField;
			}, undefined, undefined>;
			type CrossServerRiseFightRender = StrictComponent<fairygui.GComponent, {
				readonly atkRender: CrossServerFinals.Components.CrossServerPlayerender;
				readonly defRender: CrossServerFinals.Components.CrossServerPlayerender;
				readonly playbackBtn: CrossServerFinals.Components.CrossServerRecord;
			}, 'resultState', undefined>;
			type CrossServerPlayerender = StrictComponent<fairygui.GComponent, {
				readonly headRender: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly txtName: fairygui.GTextField;
				readonly txtName1: fairygui.GTextField;
			}, 'conNoBody', undefined>;
			type CrossServerGroupRadio = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly title1: fairygui.GTextField;
			}, 'button', undefined>;
			type CrossServerType = StrictComponent<fairygui.GButton, {
				readonly loaderBg0: fairygui.GLoader;
				readonly loaderBg1: fairygui.GLoader;
				readonly loaderTitle0: fairygui.GLoader;
				readonly loaderTitle1: fairygui.GLoader;
			}, 'button' | 'conType', undefined>;
			type CrossServerRecord = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type CrossServerRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtRank: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
			}, 'conRank', undefined>;
			type CrossServerWinPlayerender = StrictComponent<fairygui.GComponent, {
				readonly headRender: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly txtName: fairygui.GTextField;
			}, undefined, undefined>;
			type CrossServerPlayerBigRender = StrictComponent<fairygui.GComponent, {
				readonly headRender: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly txtName: fairygui.GTextField;
				readonly txtName1: fairygui.GTextField;
			}, 'conNoBody', undefined>;
			type CrossServerChampionRender = StrictComponent<fairygui.GComponent, {
				readonly loaderHero: fairygui.GLoader;
				readonly bgAn: fairygui.GImage;
				readonly chaBtnFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtName: fairygui.GTextField;
				readonly txtName1: fairygui.GTextField;
			}, 'conNoBody', undefined>;
		}
		namespace Components.riseRender {
			type CrossServerRiseSecondLeftRender = StrictComponent<fairygui.GComponent, {
				readonly playbackBtn: CrossServerFinals.Components.CrossServerRecord;
				readonly atkRender: CrossServerFinals.Components.CrossServerPlayerender;
				readonly defRender: CrossServerFinals.Components.CrossServerPlayerender;
			}, 'resultState', undefined>;
			type CrossServerRiseLeftRender = StrictComponent<fairygui.GComponent, {
				readonly imgFight: fairygui.GImage;
				readonly playbackBtn: CrossServerFinals.Components.CrossServerRecord;
				readonly atkRender: CrossServerFinals.Components.CrossServerPlayerender;
				readonly defRender: CrossServerFinals.Components.CrossServerPlayerender;
			}, 'resultState', undefined>;
			type CrossServerRiseFirstRender = StrictComponent<fairygui.GComponent, {
				readonly atkRender: CrossServerFinals.Components.CrossServerPlayerBigRender;
				readonly defRender: CrossServerFinals.Components.CrossServerPlayerBigRender;
				readonly championRender: CrossServerFinals.Components.CrossServerChampionRender;
				readonly playbackBtn: CrossServerFinals.Components.CrossServerRecord;
			}, 'resultState', undefined>;
			type CrossServerRiseRightRender = StrictComponent<fairygui.GComponent, {
				readonly playbackBtn: CrossServerFinals.Components.CrossServerRecord;
				readonly atkRender: CrossServerFinals.Components.CrossServerPlayerender;
				readonly defRender: CrossServerFinals.Components.CrossServerPlayerender;
			}, 'resultState', undefined>;
			type CrossServerRiseSecondRightRender = StrictComponent<fairygui.GComponent, {
				readonly playbackBtn: CrossServerFinals.Components.CrossServerRecord;
				readonly atkRender: CrossServerFinals.Components.CrossServerPlayerender;
				readonly defRender: CrossServerFinals.Components.CrossServerPlayerender;
			}, 'resultState', undefined>;
		}
	}
	import __pkg__0rczmkm0 = CrossServerFunc;
	namespace CrossServerFunc {
		type CrossServerRankView = StrictComponent<fairygui.GComponent, {
			readonly listRankHero: fairygui.GList;
			readonly listRankReward: fairygui.GList;
			readonly btnHeroOwn: CrossServerFunc.Components.RankFightRender;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly btnRank: CrossServerFunc.Components.BtnCountry;
			readonly btnReward: CrossServerFunc.Components.BtnCountry;
		}, 'conType', undefined>;
		type CrossServerWorShipView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly btnShowHero: UILib.Components.btn.BtnEmpty;
			readonly loaderLevel: fairygui.GLoader;
			readonly listRewardRank: fairygui.GList;
			readonly listRewardStage: fairygui.GList;
			readonly btnRank: UILib.Components.btn.BtnSmall4;
			readonly btnGetRank: UILib.Components.btn.BtnSmall5;
			readonly btnGetStage: UILib.Components.btn.BtnSmall5;
			readonly btnWorShip: UILib.Components.btn.BtnBig2;
			readonly btnItem: UILib.Components.renderer.RewardRender4;
			readonly btnShop: CrossServerFunc.Components.BtnShop;
			readonly txtItem: fairygui.GTextField;
			readonly txtMaxName: fairygui.GTextField;
			readonly txtName: fairygui.GTextField;
			readonly txtScore: fairygui.GTextField;
			readonly txtRank: fairygui.GTextField;
			readonly txtWorNum: fairygui.GTextField;
		}, 'conIsShowRank' | 'conRanking' | 'conIsWor', undefined>;
		namespace Components {
			type RankFightRender = StrictComponent<fairygui.GButton, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderLevel: fairygui.GLoader;
				readonly txtGuandiLv: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtRanking: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtRankNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			}, 'conIsOwn' | 'conIsShowRank' | 'conRanking' | 'conColor', undefined>;
			type FightRSiteBtn = StrictComponent<fairygui.GButton, {
				readonly result: fairygui.GLoader;
				readonly lCountryLoader: UILib.Components.countryRender.CountrySmallRender;
				readonly rCountryLoader: UILib.Components.countryRender.CountrySmallRender;
				readonly btnOpenInfo: UILib.Components.btn.BtnEmpty;
				readonly btnGoCity: UILib.Components.btn.BtnEmpty;
				readonly lPlayerName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly rPlayerName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly cityName: fairygui.GTextField;
				readonly siteCount: fairygui.GTextField;
				readonly timeStr: fairygui.GTextField;
			}, 'resultState' | 'lastState', undefined>;
			type BtnCountry = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly iconDi: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsRight' | 'conIsCanRed', undefined>;
			type RankRewardRender = StrictComponent<fairygui.GButton, {
				readonly listReward: fairygui.GList;
				readonly txtRanking: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
			}, 'conRanking', undefined>;
			type BtnShop = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
		}
	}
	import __pkg__2oaq7e7f = CrossServerMatching;
	namespace CrossServerMatching {
		type CrossServerMatchingView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly scoreProBar: CrossServerMatching.Components.CrossServerMatchingProBar;
			readonly heroSubView: CrossServerMatching.CrossServerHeroSubView;
			readonly rankBtn: UILib.Components.btn.BtnSmall4;
			readonly recordBtn: UILib.Components.btn.BtnSmall2;
			readonly matchingBtn: UILib.Components.btn.BtnBig4;
			readonly promotionBtn: UILib.Components.btn.BtnBig1;
			readonly saveBtn: UILib.Components.btn.BtnBig4;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly levelBtn: CrossServerMatching.Components.MatchingLevelRender;
			readonly btnHelp: fairygui.GButton;
			readonly txtRank: fairygui.GRichTextField;
			readonly txtCount: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtAllCount: fairygui.GRichTextField;
			readonly txtWinCount: fairygui.GRichTextField;
			readonly btnShop: CrossServerMatching.Components.BtnShop;
		}, 'promotionState', undefined>;
		type CrossServerHeroSubView = StrictComponent<fairygui.GComponent, {
			readonly listHero: fairygui.GList;
			readonly txtFightPower: UILibHero.Components.fight.FightPowerBig;
			readonly txtPutNum: fairygui.GRichTextField;
		}, 'hideTip', undefined>;
		type CrossServerMatchingWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly refreshBtn: UILib.Components.btn.Btn6;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly matchingList: fairygui.GList;
			readonly txtCount: fairygui.GRichTextField;
		}, undefined, undefined>;
		type CrossServerScoreWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly scoreList: fairygui.GList;
			readonly funTip: UILib.Components.fontTab_richText.__cmpt__qc44a3tlqt;
		}, undefined, undefined>;
		type CrossServerPromotionView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly playerList: fairygui.GList;
			readonly heroSubView: CrossServerMatching.CrossServerHeroSubView;
			readonly excitationBtn: UILib.Components.btn.BtnBig1;
			readonly matchingBtn: UILib.Components.btn.BtnBig4;
			readonly allInspireList: fairygui.GList;
			readonly txtChallenge: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtAllWin: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtCurWin: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpc;
		}, undefined, undefined>;
		type CrossServerMatchingBuyWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnCancle: UILib.Components.btn.BtnBig4;
			readonly btnSure: UILib.Components.btn.BtnBig1;
			readonly txtBuyCount: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpt;
			readonly txtBuyRemine: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly moneyBtn: UILib.Components.renderer.ConsumeRender;
		}, undefined, undefined>;
		type CrossServerPromotionResultWindow = StrictComponent<fairygui.GComponent, {
			readonly win: fairygui.GImage;
			readonly win2: fairygui.GImage;
			readonly winGroup: fairygui.GGroup;
			readonly loseBg: fairygui.GLoader;
			readonly s1: fairygui.GImage;
			readonly s2: fairygui.GImage;
			readonly s3: fairygui.GImage;
			readonly lose: fairygui.GImage;
			readonly loseGroup: fairygui.GGroup;
		}, undefined, 'winAni' | 'loseAni'>;
		type CrossServerInspireWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly titleDark1: UILib.Components.title.CommonTitleDark;
			readonly titleDark2: UILib.Components.title.CommonTitleDark;
			readonly buyBtn: UILib.Components.btn.Btn6;
			readonly inspireList: fairygui.GList;
			readonly allInspireList: fairygui.GList;
			readonly txtCount: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		namespace Components {
			type CrossServerMatchingRender = StrictComponent<fairygui.GComponent, {
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly headRender: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly btnChallenge: UILib.Components.btn.BtnSmall1;
				readonly txtName: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CrossServerScoreRender = StrictComponent<fairygui.GButton, {
				readonly icon: CrossServerMatching.Components.MatchingLevelRender;
				readonly listReward: fairygui.GList;
				readonly title: UILib.Components.fontTab_richText.__cmpt__nik3a3tlqq;
			}, 'promotionState', undefined>;
			type CrossServerPlayerPmender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly bgSelect: fairygui.GLoader;
				readonly heroRender: CrossServerMatching.Components.CrossServerPlayerMask;
				readonly bgAn: fairygui.GLoader;
				readonly bgSelectAn: fairygui.GLoader;
				readonly roleInfoBtn: fairygui.GLoader;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtServer: UILib.Components.fontTab_richText.__cmpt__i098a3tlpl;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__i098a3tlpl;
				readonly txtScore: UILib.Components.fontTab_richText.__cmpt__i098a3tlpl;
			}, 'button' | 'finshState', undefined>;
			type MatchingLevelRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type CrossServerMatchingProBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CrossServerInspireRender = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type CrossServerInspireSmallRender = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			}, undefined, undefined>;
			type CrossServerPlayerMask = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnShop = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
		}
	}
	import __pkg__zf1t5zse = CrossServerShop;
	namespace CrossServerShop {
		type CrossServerShopView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly zl: fairygui.GLoader;
			readonly shopTopBg: fairygui.GLoader;
			readonly shopGoodsList: fairygui.GList;
			readonly shopOpenView: CrossServerShop.CrossServerShopOpenView;
			readonly zs: fairygui.GLoader;
			readonly zs1: fairygui.GLoader;
			readonly attrIcon: fairygui.GLoader;
			readonly shopBtnList: fairygui.GList;
			readonly scoreCount: fairygui.GRichTextField;
			readonly txtTimeLeft: fairygui.GRichTextField;
			readonly attrName: fairygui.GRichTextField;
		}, undefined, 'listAni'>;
		type CrossServerShopOpenView = StrictComponent<fairygui.GComponent, {
			readonly leftMen: fairygui.GLoader;
			readonly rightMen: fairygui.GLoader;
		}, undefined, 'openAni'>;
		namespace Components {
			type CrossServerShopBuyRender = StrictComponent<fairygui.GButton, {
				readonly iconHead: fairygui.GLoader;
				readonly icon0: fairygui.GLoader;
				readonly icon1: fairygui.GLoader;
				readonly lineImg: fairygui.GImage;
			}, 'button', undefined>;
			type CrossServerShopSubRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly rewardRender: UILib.Components.renderer.RewardRender3;
				readonly btnBuy: CrossServerShop.Components.CrossServerShopBtn;
				readonly txtName: fairygui.GRichTextField;
				readonly txtNum: fairygui.GRichTextField;
				readonly renderGroup: fairygui.GGroup;
			}, 'conSellOut' | 'limitState' | 'isFlip' | 'isNo', undefined>;
			type CrossServerShopBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__6a75oqf3 = Debug;
	namespace Debug {
		type DebugWindow = StrictComponent<fairygui.GComponent, {
			readonly btnLogin: Debug.Components.BtnLogin;
			readonly txtLog: fairygui.GTextField;
			readonly btnClose: Debug.Components.BtnLogin;
			readonly txtGM: fairygui.GTextField;
			readonly btnGM: Debug.Components.BtnLogin;
			readonly btnClear: Debug.Components.BtnLogin;
			readonly txtHost: fairygui.GTextField;
			readonly txtPort: fairygui.GTextField;
			readonly txtAccount: fairygui.GTextField;
			readonly txtToken: fairygui.GTextField;
			readonly txtServer: fairygui.GTextField;
			readonly btnRandomAccount: Debug.Components.BtnLogin;
			readonly txtRoleName: fairygui.GTextField;
			readonly txtSever: fairygui.GTextField;
			readonly btnConfirm: Debug.Components.BtnLogin;
			readonly btnToken: Debug.Components.BtnLogin;
			readonly btnChangeServer: Debug.Components.BtnLogin;
			readonly chooseAccount: Debug.Components.BtnLogin;
			readonly serverList: Debug.Components.serverList;
			readonly hostAdd: Debug.Components.BtnLogin;
			readonly txtVersion: fairygui.GTextField;
			readonly btnLog: Debug.Components.BtnLogin;
			readonly accountList: Debug.Components.accountList;
			readonly btnIsNewUser: Debug.Components.Button1;
		}, 'selectSever' | 'loginType' | 'roleNameLogin' | 'conShowAccount', undefined>;
		namespace Components {
			type BtnLogin = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type serverList = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type ServerInfoRender = StrictComponent<fairygui.GComponent, {
				readonly info: fairygui.GTextField;
			}, undefined, undefined>;
			type accountList = StrictComponent<fairygui.GComponent, {
				readonly severList: fairygui.GList;
				readonly accountList: fairygui.GList;
			}, undefined, undefined>;
			type AccountListRender = StrictComponent<fairygui.GComponent, {
				readonly txtName: fairygui.GTextField;
				readonly txtLevel: fairygui.GTextField;
			}, undefined, undefined>;
			type Button1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.test {
			type ComboBox1_item = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type ComboBox1_popup = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type ComboBox1 = StrictComponent<fairygui.GComboBox, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type TestBuilding = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type TestBuildingRender = StrictComponent<fairygui.GComponent, {
				readonly info: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__5w6jfl1e = DengGaoDuoBao;
	namespace DengGaoDuoBao {
		type DengGaoView = StrictComponent<fairygui.GComponent, {
			readonly iconBg: fairygui.GLoader;
			readonly list: fairygui.GList;
			readonly helpBtn: fairygui.GButton;
			readonly specialRewardDes: fairygui.GRichTextField;
			readonly rechargeDes: fairygui.GRichTextField;
			readonly consumeDes: fairygui.GRichTextField;
			readonly rechargeGotoBtn: UILib.Components.btn.BtnSmall2;
			readonly consumeGotoBtn: UILib.Components.btn.BtnSmall2;
			readonly specialItem: fairygui.GGroup;
		}, undefined, 't0'>;
		namespace Components {
			type DengGaoRender = StrictComponent<fairygui.GButton, {
				readonly unLockLightGroup: fairygui.GGroup;
				readonly specialReward: DengGaoDuoBao.Components.DengGaoRewardRender;
				readonly rewardList: fairygui.GList;
				readonly receiveBtn: UILib.Components.btn.BtnEmpty;
				readonly menGroup: fairygui.GGroup;
				readonly qiangGroup: fairygui.GGroup;
				readonly lock: fairygui.GLoader;
				readonly suo: fairygui.GGroup;
				readonly specialLockGoup: fairygui.GGroup;
				readonly downBgGroup: fairygui.GGroup;
				readonly lockBtn: UILib.Components.btn.BtnEmpty;
				readonly heroAniCom: DengGaoDuoBao.Components.DengGaoAniCom;
				readonly itemName: fairygui.GTextField;
				readonly itemNameGroup: fairygui.GGroup;
				readonly ysGroup: fairygui.GGroup;
				readonly hadRecive: fairygui.GGroup;
				readonly canRecive: fairygui.GGroup;
				readonly topBgGroup: fairygui.GGroup;
				readonly topTextBgGroup: fairygui.GGroup;
				readonly titleText: fairygui.GRichTextField;
			}, 'state' | 'type' | 'showHeroCL', 't0' | 't2'>;
			type DengGaoRewardRender = StrictComponent<fairygui.GButton, {
				readonly effect: fairygui.GGraph;
				readonly reward: UILib.Components.renderer.RewardRender3;
			}, 'lockState', undefined>;
			type DengGaoAniCom = StrictComponent<fairygui.GComponent, {
				readonly titleText: fairygui.GRichTextField;
				readonly heroAni: fairygui.GGraph;
			}, undefined, undefined>;
		}
	}
	import __pkg__au10atkd = DiscountStore;
	namespace DiscountStore {
		type DiscountStoreView = StrictComponent<fairygui.GComponent, {
			readonly iconBg: fairygui.GLoader;
			readonly list: fairygui.GList;
			readonly canBuyNum: fairygui.GRichTextField;
			readonly txtDes: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			readonly txtTime: fairygui.GRichTextField;
			readonly refBtn: DiscountStore.com.BtnRefresh;
			readonly loaderIcon: fairygui.GLoader;
			readonly txtValue: fairygui.GRichTextField;
			readonly txtActivityTime: fairygui.GRichTextField;
			readonly helpBtn: fairygui.GButton;
		}, 'freeRefState', undefined>;
		namespace com {
			type DiscountStoreBuyBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type DiscountStoreRender = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender2;
				readonly discountNum: fairygui.GTextField;
				readonly nameTxt: fairygui.GRichTextField;
				readonly effect: fairygui.GGraph;
				readonly buyBtn: DiscountStore.com.DiscountStoreBuyBtn;
			}, 'showEffect' | 'state' | 'bgPos', undefined>;
			type BtnRefresh = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__eela6idk = DoubleObtainRD;
	namespace DoubleObtainRD {
		type DoubleObtainRDWindow = StrictComponent<fairygui.GComponent, {
			readonly rewardList: fairygui.GList;
			readonly receiveBtn: UILib.Components.btnSpecial.BtnBuy;
			readonly close: UILib.Components.btn.BtnWindowClose;
			readonly btnHelp: fairygui.GButton;
			readonly funcTip: fairygui.GRichTextField;
			readonly doubleEndTime: fairygui.GRichTextField;
		}, 'doubleState', undefined>;
		type InspireObtainRDWindow = StrictComponent<fairygui.GComponent, {
			readonly leftGc: fairygui.GLoader;
			readonly rightGc: fairygui.GLoader;
			readonly beginBtn: DoubleObtainRD.Components.InspireObtainBtn;
			readonly receiveBtn: UILib.Components.btn.BtnBig4;
			readonly btnHelp: fairygui.GButton;
			readonly endTimeStr: fairygui.GTextField;
			readonly group1: fairygui.GGroup;
			readonly txtCountDown: fairygui.GTextField;
			readonly funcTip: fairygui.GRichTextField;
			readonly beginCount: fairygui.GTextField;
			readonly countDownBtn: fairygui.GLoader;
		}, 'countDown' | 'endState', 'playDownAni'>;
		namespace Components {
			type InspireObtainBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
	}
	import __pkg__runp3hq1 = EndlessArena;
	namespace EndlessArena {
		type EndlessArenaShopWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderIcon: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly txtName: fairygui.GTextField;
			readonly txtScore: fairygui.GTextField;
		}, undefined, undefined>;
		type EndlessArenaRankView = StrictComponent<fairygui.GComponent, {
			readonly listRank: fairygui.GList;
			readonly listRankReward: fairygui.GList;
			readonly selfRankRender: EndlessArena.Components.EndlessArenaRankRender;
			readonly btnRank: UILib.Components.button_radio.Button_Radio3;
			readonly btnReward: UILib.Components.button_radio.Button_Radio3;
		}, 'conType', undefined>;
		type EndlessArenaView = StrictComponent<fairygui.GComponent, {
			readonly challengerRender1: EndlessArena.Components.EndlessArenaRender;
			readonly challengerRender2: EndlessArena.Components.EndlessArenaRender;
			readonly challengerRender3: EndlessArena.Components.EndlessArenaRender;
			readonly btnHelp: fairygui.GButton;
			readonly btnFightRecord: UILib.Components.btn.BtnAdd;
			readonly btnShop: UILib.Components.btn.BtnAdd;
			readonly btnRank: UILib.Components.btn.BtnAdd;
			readonly btnTask: UILib.Components.btn.BtnAdd;
			readonly btnWorship: UILib.Components.btn.BtnAdd;
			readonly redPoint: fairygui.GImage;
			readonly worshipRedPoint: fairygui.GImage;
			readonly btnAddNum: UILib.Components.btn.BtnAdd;
			readonly txtAddtime: fairygui.GRichTextField;
			readonly txtTime: fairygui.GTextField;
			readonly txtNum: fairygui.GTextField;
		}, 'conState' | 'conIsShowTime' | 'titleCL', undefined>;
		type EndlessArenaHeroWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listHero: fairygui.GList;
		}, undefined, undefined>;
		type EndlessArenaFormationView = StrictComponent<fairygui.GComponent, {
			readonly btnFight: UILib.Components.btn.BtnBig4;
			readonly listFormationEnemy: fairygui.GList;
			readonly listFormationSelf: fairygui.GList;
			readonly txtMyTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNPCTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTime: fairygui.GTextField;
			readonly txtBuff: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
		}, 'conType', undefined>;
		type EndlessArenaTaskWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnAllGet: UILib.Components.btn.BtnBig1;
			readonly listTask: fairygui.GList;
		}, undefined, undefined>;
		type EndlessArenaWorshipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly heroList: fairygui.GList;
			readonly count: fairygui.GTextField;
		}, undefined, undefined>;
		namespace Components {
			type EndlessArenaShopItem = StrictComponent<fairygui.GButton, {
				readonly buyBtn: EndlessArena.Components.EndlessArenaShopBtn;
				readonly reward: UILib.Components.renderer.RewardRender3;
				readonly nameTxt: fairygui.GTextField;
				readonly numTxt: fairygui.GTextField;
			}, 'noNum', undefined>;
			type EndlessArenaShopBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type EndlessArenaRankRender = StrictComponent<fairygui.GComponent, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly listReward: fairygui.GList;
				readonly txtRank: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtFight: fairygui.GTextField;
			}, 'conRank' | 'conIsSelf', undefined>;
			type EndlessArenaRender = StrictComponent<fairygui.GComponent, {
				readonly heroRes: fairygui.GLoader;
				readonly loaderHeroType: fairygui.GLoader;
				readonly proHp: UILib.Components.progressBar.ProgressBar4;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly btnFightNum: UILibHero.Components.fight.FightPowerBig;
				readonly btnFight: UILib.Components.btn.BtnCutDown;
				readonly btnLookChallenger: UILib.Components.btn.BtnEmpty;
				readonly btnLook: EndlessArena.Components.btnLook;
				readonly graphAni: fairygui.GGraph;
				readonly listAttack: fairygui.GList;
				readonly txtName: fairygui.GTextField;
				readonly txtTime: fairygui.GTextField;
				readonly txtBuff: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtNum: fairygui.GTextField;
				readonly txtAttack: fairygui.GTextField;
				readonly txtNoAttack: fairygui.GTextField;
			}, 'conType' | 'conState' | 'conIsAttack', undefined>;
			type proHp = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type attackRender = StrictComponent<fairygui.GComponent, {
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conIsFight', undefined>;
			type EndlessArenaChoiceRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly progressFront: UILibHero.Components.render.other.ProgressArmy;
				readonly progressBack: UILibHero.Components.render.other.ProgressArmy;
				readonly blackBg: fairygui.GImage;
			}, 'conIsNotFight' | 'button', undefined>;
			type EndlessArenaRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtRank: fairygui.GTextField;
			}, 'conRank' | 'conIsSelf', undefined>;
			type EndlessArenaWorshipRender = StrictComponent<fairygui.GComponent, {
				readonly heroCom: EndlessArena.Components.headCom;
				readonly worshipName: fairygui.GLoader;
				readonly btnWorship: UILib.Components.btn.BtnSmall4;
				readonly heroName: fairygui.GTextField;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly count: fairygui.GTextField;
				readonly rewardRender: UILib.Components.renderer.RewardRender2;
			}, 'isNullState' | 'typeCL' | 'worshipState', undefined>;
			type headCom = StrictComponent<fairygui.GComponent, {
				readonly heroIcon: fairygui.GLoader;
			}, undefined, undefined>;
			type btnLook = StrictComponent<fairygui.GButton, {
				readonly btnLook: fairygui.GRichTextField;
			}, 'conState', undefined>;
		}
		namespace Components.render {
			type EndlessArenaTaskRender = StrictComponent<fairygui.GButton, {
				readonly progressBarNum: UILib.Components.progressBar.ProgressBar2;
				readonly listReward: fairygui.GList;
				readonly btnGetInto: UILib.Components.btn.BtnSmall4;
				readonly btnGet: UILib.Components.btn.BtnSmall1;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conButton', 't0'>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__7omyqjqs = EveryDay;
	namespace EveryDay {
		type EveryDayMustWindow = StrictComponent<fairygui.GComponent, {
			readonly titleTxt: UILib.Components.fontTab_text.__cmpt__qmdq1no8u70;
			readonly viewBox: EveryDay.EveryDayView;
		}, undefined, undefined>;
		type EveryDayView = StrictComponent<fairygui.GComponent, {
			readonly list: fairygui.GList;
			readonly topItem: EveryDay.Components.EveryDayMustItemRender;
		}, 'isTop', undefined>;
		namespace Components {
			type EveryDayMustRender = StrictComponent<fairygui.GButton, {
				readonly list: fairygui.GList;
				readonly titleTxt: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7b;
			}, undefined, undefined>;
			type EveryDayMustItemRender = StrictComponent<fairygui.GButton, {
				readonly itemIcon: fairygui.GLoader;
				readonly titleTxt: UILib.Components.fontTab_text.__cmpt__qmdq1no8u70;
				readonly strTxt: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, 'bgCon' | 'lineCon' | 'isRed', undefined>;
		}
	}
	import __pkg__1oc311sm = ExploreTreasure;
	namespace ExploreTreasure {
		type ExploreTreasureView = StrictComponent<fairygui.GComponent, {
			readonly listCity: fairygui.GList;
			readonly slider: ExploreTreasure.Components.Slider1;
			readonly btnCutdown: UILib.Components.btn.BtnAdd;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly btnGo: UILib.Components.btn.BtnBig3;
			readonly btnTips: fairygui.GButton;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtTitle: fairygui.GTextField;
			readonly txtRemainCount: fairygui.GTextField;
			readonly txtAllCount: fairygui.GTextField;
			readonly txtLv: fairygui.GTextField;
		}, 'conIsFinish', undefined>;
		type ExploreTreasureTroopView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnGo: UILib.Components.btn.BtnBig1;
			readonly btnTroop: UILib.Components.btn.BtnBig3;
			readonly listTroop: fairygui.GList;
			readonly listEnemy: fairygui.GList;
			readonly listMine: fairygui.GList;
			readonly txtSelect: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtChallengeTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTroopTip: fairygui.GTextField;
			readonly txtTitle: fairygui.GTextField;
			readonly btnGo1: UILib.Components.btn.BtnBig3;
		}, 'conCountry' | 'conIsHaveTroop', undefined>;
		namespace Components {
			type ExploreTreasureCityRender = StrictComponent<fairygui.GButton, {
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly listReward: fairygui.GList;
				readonly cityShape: fairygui.GGraph;
				readonly comHead: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly txtCity: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			}, 'conPos' | 'conMine' | 'button' | 'conIsHave', undefined>;
			type Silder1_grip = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			}, 'button', undefined>;
			type Slider1 = StrictComponent<fairygui.GSlider, {
				readonly bar: fairygui.GImage;
				readonly grip: ExploreTreasure.Components.Silder1_grip;
			}, undefined, undefined>;
			type ExploreTreasureHeadRender = StrictComponent<fairygui.GComponent, {
				readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderType: fairygui.GLoader;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
			}, 'conEmpty', undefined>;
		}
	}
	import __pkg__caudo9z3 = FamousGeneral;
	namespace FamousGeneral {
		type FamousGeneralView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: fairygui.GLoader;
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly listReward: fairygui.GList;
			readonly btnReward: UILib.Components.btn.BtnBig1;
			readonly btnFight: UILib.Components.btn.BtnBig1;
			readonly txtFight: UILibHero.Components.fight.FightPowerRecommendSmall;
			readonly loaderQuality: fairygui.GLoader;
			readonly loaderName: fairygui.GLoader;
			readonly btnHelp: fairygui.GButton;
			readonly txtDesc: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtArmNum: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtTime: fairygui.GTextField;
			readonly txtNextCost: fairygui.GTextField;
			readonly txtLv: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, 'conIsFight' | 'conIsFinish', undefined>;
		type FamousGeneralWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly loaderIcon: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly btnFight: UILib.Components.btn.BtnSmall1;
			readonly txtName: fairygui.GTextField;
			readonly txtFight: fairygui.GTextField;
			readonly txtDesc1: fairygui.GTextField;
			readonly txtDesc: fairygui.GTextField;
			readonly txtLv: fairygui.GTextField;
			readonly txtArmNum: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
			readonly txtNextCost: fairygui.GTextField;
		}, 'conIsFight', undefined>;
	}
	import __pkg__j4xfi4qp = FestivalActivity;
	namespace FestivalActivity {
		type FestivalActivityView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly listActivity: fairygui.GList;
		}, undefined, undefined>;
		type FestivalActSevenDayView = StrictComponent<fairygui.GComponent, {
			readonly iconBg: fairygui.GLoader;
			readonly iconTitle: fairygui.GLoader;
			readonly day0: FestivalActivity.Components.BtnDay;
			readonly day1: FestivalActivity.Components.BtnDay;
			readonly day2: FestivalActivity.Components.BtnDay;
			readonly day3: FestivalActivity.Components.BtnDay;
			readonly day4: FestivalActivity.Components.BtnDay;
			readonly day5: FestivalActivity.Components.BtnDay;
			readonly day6: FestivalActivity.Components.BtnDay;
			readonly btnGet: UILib.Components.btnAct.BtnAct2;
			readonly btnHelp: fairygui.GButton;
			readonly listReward: fairygui.GList;
			readonly effectAni: fairygui.GGraph;
			readonly txtTime: fairygui.GTextField;
		}, 'conState', 't0'>;
		type FestivalActFishingView = StrictComponent<fairygui.GComponent, {
			readonly reward0: FestivalActivity.Components.FishingItem;
			readonly reward1: FestivalActivity.Components.FishingItem;
			readonly reward2: FestivalActivity.Components.FishingItem;
			readonly reward3: FestivalActivity.Components.FishingItem;
			readonly reward4: FestivalActivity.Components.FishingItem;
			readonly reward5: FestivalActivity.Components.FishingItem;
			readonly reward7: FestivalActivity.Components.FishingItem;
			readonly reward8: FestivalActivity.Components.FishingItem;
			readonly reward6: FestivalActivity.Components.FishingItem;
			readonly btnShop: UILib.Components.btn.BtnAdd;
			readonly skipAniBtn: FestivalActivity.Components.FishingCheck;
			readonly luckBtnOne: UILib.Components.btn.BtnBig1;
			readonly luckBtnTwo: UILib.Components.btn.BtnBig4;
			readonly btnRecord: FestivalActivity.Components.Btn1;
			readonly btnGL: UILib.Components.btn.BtnCutDown;
			readonly btnTip: fairygui.GButton;
			readonly listReward: fairygui.GList;
			readonly redPoint: fairygui.GImage;
			readonly loaderIcon1: fairygui.GLoader;
			readonly txtRecruit1: fairygui.GTextField;
			readonly loaderIcon2: fairygui.GLoader;
			readonly txtRecruit2: fairygui.GTextField;
			readonly txtScore: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
		}, 'conIsShopRed', 't0' | 't1'>;
		type FestivalActFishingRecordWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listRecord: fairygui.GList;
		}, undefined, undefined>;
		type FestivalAcFishingShopWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderIcon: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly txtScore: fairygui.GTextField;
		}, undefined, undefined>;
		type FishingGlWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listReward: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type BtnDay = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly iconGray: fairygui.GLoader;
				readonly iconSelect: fairygui.GLoader;
			}, 'button' | 'conRed' | 'conState', undefined>;
			type FishingCheck = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type RaleRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender1;
				readonly graphEffect: fairygui.GGraph;
				readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conState', undefined>;
			type FishingItem = StrictComponent<fairygui.GButton, {
				readonly qualityLoader: fairygui.GLoader;
				readonly rewardIcon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, undefined, 't0'>;
			type ItemRender = StrictComponent<fairygui.GComponent, {
				readonly renReward: UILib.Components.renderer.RewardRender4;
				readonly renScore: UILib.Components.renderer.RewardRender4;
				readonly collectSelect: UILib.Components.button_checkbox.Button_Check4;
				readonly btnBuy: UILib.Components.btn.BtnSmall2;
				readonly numTxt: fairygui.GRichTextField;
				readonly txtDes: fairygui.GTextField;
			}, 'noNum', undefined>;
			type FishingRecordRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
				readonly txtTime: fairygui.GTextField;
				readonly txtName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conIsFree', undefined>;
			type FestivalActTabRender = StrictComponent<fairygui.GButton, {
				readonly iconLoader: fairygui.GLoader;
				readonly iconLoaderUp: fairygui.GLoader;
				readonly iconUp: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type Btn1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type GLRender = StrictComponent<fairygui.GComponent, {
				readonly reward: UILib.Components.renderer.RewardRender2;
				readonly txtGl: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__lc7mv74h = FestivalActivityEaters;
	namespace FestivalActivityEaters {
		type FestivalActEatersView = StrictComponent<fairygui.GComponent, {
			readonly iconBg: fairygui.GLoader;
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly taskCom: FestivalActivityEaters.Components.FestivalActEatersRender;
			readonly listFood: fairygui.GList;
			readonly btnEat: FestivalActivityEaters.Components.FestivalActEatBtn;
			readonly btnChallenge: UILib.Components.btnAct.BtnAct2;
			readonly txtChallengeTimes: fairygui.GTextField;
			readonly txtCountDown: fairygui.GTextField;
			readonly listChoose: fairygui.GList;
			readonly txtCountDown1: fairygui.GTextField;
			readonly txtScore: fairygui.GTextField;
		}, 'conState' | 'conIsBegin', undefined>;
		namespace Components {
			type FestivalActEatBtn = StrictComponent<fairygui.GButton, {
				readonly iconLoaderUp: fairygui.GLoader;
			}, 'button', undefined>;
			type FestivalActEatChooseRender = StrictComponent<fairygui.GButton, {
				readonly btnReward: FestivalActivityEaters.Components.BtnCkjl;
			}, 'button' | 'conType', undefined>;
			type FestivalActEatersRender = StrictComponent<fairygui.GComponent, {
				readonly btnGo: UILib.Components.btnAct.BtnAct6;
				readonly btnGetInto: UILib.Components.btnAct.BtnAct5;
				readonly txtDesc: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly txtTitle: fairygui.GRichTextField;
			}, 'conIsFinish' | 'conButton', undefined>;
			type FestivalActEatFoodRender = StrictComponent<fairygui.GComponent, undefined, 'conType' | 'conIsNone' | 'conFoodType' | 'conIsEat', undefined>;
			type BtnGo = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type BtnStart = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type BtnCkjl = StrictComponent<fairygui.GButton, undefined, 'button' | 'conIsGray', undefined>;
		}
	}
	import __pkg__aworm7cx = FeteEvery;
	namespace FeteEvery {
		type FeteEverySubView = StrictComponent<fairygui.GComponent, {
			readonly loaderBg1: fairygui.GLoader;
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderBg2: fairygui.GLoader;
			readonly proTime: FeteEvery.Components.ProgressBar3;
			readonly btnFeteEvery: UILib.Components.btnAct.BtnAct2;
			readonly listAward: fairygui.GList;
			readonly txtTime: fairygui.GRichTextField;
		}, 'conState', undefined>;
		type FeteEveryChooseWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly listAward: fairygui.GList;
			readonly listChoose: fairygui.GList;
			readonly txtRewardNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		type FeteEveryAddRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: UILib.Components.frame.Frame4;
			readonly listReward: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type FeteEveryAwardCom = StrictComponent<fairygui.GComponent, {
				readonly btnReward: UILib.Components.renderer.RewardRender1;
				readonly loaderBg: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, 'conIsHaveAward', 't0'>;
			type FeteEveryChooseAwardCom = StrictComponent<fairygui.GButton, {
				readonly btnReward: UILib.Components.renderer.RewardRender1;
				readonly loaderBg: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, 'conIsHaveAward' | 'button', undefined>;
			type btnFeteEvery = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type ProgressBar3 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type FeteEveryAddAwardCom = StrictComponent<fairygui.GComponent, {
				readonly loaderReward: fairygui.GLoader;
				readonly loaderReward1: fairygui.GLoader;
				readonly txtTime: fairygui.GRichTextField;
			}, 'button' | 'conState' | 'conIsLast' | 'conGot', 'aniRota'>;
		}
	}
	import __pkg__lbgiuxuq = Fight;
	namespace Fight {
		type FightNoticeView = StrictComponent<fairygui.GComponent, {
			readonly skillGrap: fairygui.GGraph;
			readonly enemySkillGrap: fairygui.GGraph;
			readonly heroSkill: Fight.Components.FightNotice.heroSkillViewNew.FightNoticeSkillHeroNew;
			readonly enemySkill: Fight.Components.FightNotice.heroSkillViewNew.FightNoticeSkillHeroEnemyNew;
			readonly attrUpView: Fight.Components.FightNotice.attrToneUpView.FightAttrToneUpView;
			readonly fightMeritoriousView: Fight.Components.FightNotice.fightMeritoriousView.FightMeritoriousNoticeView;
			readonly enemyFightMeritoriousView: Fight.Components.FightNotice.fightMeritoriousView.FightMeritoriousNoticeView;
		}, undefined, undefined>;
		namespace Components.Damage {
			type NormalMinusDamageView = StrictComponent<fairygui.GComponent, {
				readonly fontCom: fairygui.GComponent;
				readonly fontCom2: fairygui.GComponent;
				readonly imgFont: fairygui.GImage;
			}, undefined, 'army'>;
			type NormalAddDamageView = StrictComponent<fairygui.GComponent, {
				readonly fontCom: fairygui.GComponent;
			}, undefined, 'gain'>;
			type BlockDamageView = StrictComponent<fairygui.GComponent, {
				readonly fontCom: fairygui.GComponent;
				readonly fontCom2: fairygui.GComponent;
				readonly imgFont: fairygui.GImage;
			}, undefined, 'parry'>;
			type CritDamageView = StrictComponent<fairygui.GComponent, {
				readonly fontCom: fairygui.GComponent;
				readonly fontCom2: fairygui.GComponent;
				readonly imgFont: fairygui.GImage;
			}, undefined, 'strike'>;
		}
		namespace Components.ChatInfo {
			type HeroChatInfoView = StrictComponent<fairygui.GComponent, {
				readonly loaderBgL: fairygui.GLoader;
				readonly loaderBgR: fairygui.GLoader;
				readonly txtDialogueL: fairygui.GTextField;
				readonly txtDialogueR: fairygui.GTextField;
			}, 'conIsSelf', 'playAniL' | 'playAniR'>;
		}
		namespace Components.ArmyInfo {
			type NormalArmyInfoView = StrictComponent<fairygui.GComponent, {
				readonly imgfightBg: fairygui.GImage;
				readonly imgfight: fairygui.GImage;
				readonly txtNameBg: fairygui.GLoader;
				readonly imgFirst: fairygui.GImage;
				readonly barHp1: Fight.Components.ArmyInfoBar.ArmyInfoProgressBar2;
				readonly barHp: Fight.Components.ArmyInfoBar.ArmyInfoProgressBar1;
				readonly btnShowHero: UILib.Components.btn.BtnEmpty;
			}, undefined, 'priority' | 't1'>;
			type NormalArmyInfoTextView = StrictComponent<fairygui.GComponent, {
				readonly txtName: fairygui.GRichTextField;
				readonly txtFight: fairygui.GTextField;
			}, undefined, 't0'>;
			type AscriptionArmyInfoView = StrictComponent<fairygui.GComponent, {
				readonly flagLoader: fairygui.GLoader;
				readonly flagName: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.BeginFight {
			type BeginCountDownCom = StrictComponent<fairygui.GComponent, {
				readonly txtCountDown: fairygui.GTextField;
			}, undefined, 't0' | 't1'>;
			type BeginFightCom = StrictComponent<fairygui.GComponent, {
				readonly imgEffect0: fairygui.GImage;
				readonly imgEffect1: fairygui.GImage;
			}, undefined, 't3'>;
		}
		namespace Components.BuffNotice {
			type BuffNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly buffNameRes: fairygui.GLoader;
			}, undefined, 't1' | 't3' | 't4' | 't5' | 't6' | 't2'>;
			type Baoji = StrictComponent<fairygui.GComponent, {
				readonly buffNameRes: fairygui.GLoader;
			}, undefined, 'strike'>;
			type Gedang = StrictComponent<fairygui.GComponent, {
				readonly buffNameRes: fairygui.GLoader;
			}, undefined, 'parry'>;
			type Jianyi = StrictComponent<fairygui.GComponent, {
				readonly buffNameRes: fairygui.GLoader;
			}, undefined, 'chaos'>;
			type Shanbi = StrictComponent<fairygui.GComponent, {
				readonly buffNameRes: fairygui.GLoader;
			}, undefined, 'dodge'>;
			type Zengyi = StrictComponent<fairygui.GComponent, {
				readonly buffNameRes: fairygui.GLoader;
			}, undefined, 'treat'>;
			type Common = StrictComponent<fairygui.GComponent, {
				readonly buffNameRes: fairygui.GLoader;
			}, undefined, 'Common'>;
		}
		namespace Components.ArmyInfoBar {
			type ArmyInfoProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
			}, 'redState', undefined>;
			type ArmyInfoProgressBar2 = StrictComponent<fairygui.GProgressBar, {
				readonly bg: fairygui.GImage;
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
		}
		namespace Components.FightResult {
			type CityFightResult = StrictComponent<fairygui.GComponent, {
				readonly loaderFlag: fairygui.GLoader;
				readonly loaderResult: fairygui.GLoader;
				readonly loaderCountryName: fairygui.GLoader;
			}, 'conResult', 'resultAni'>;
		}
		namespace Components.FightNotice.muFuView {
			type FightNoticeMufuAdd = StrictComponent<fairygui.GComponent, {
				readonly listBuff: fairygui.GList;
			}, undefined, 'dianjiangtaiAdd'>;
		}
		namespace Components.FightNotice.impeccable {
			type FightImpeccableNoticeEnemyView = StrictComponent<fairygui.GComponent, {
				readonly bgCom: Fight.Components.FightNotice.impeccable.render.FightImpeccableNoticeBgCom;
				readonly sbIcon: Fight.Components.FightNotice.impeccable.render.FightImpeccableSbIcon;
				readonly fontCom: Fight.Components.FightNotice.impeccable.render.FightImpeccableNoticeFontCom;
			}, undefined, 'heroSkillAni'>;
			type FightImpeccableNoticeView = StrictComponent<fairygui.GComponent, {
				readonly bgCom: Fight.Components.FightNotice.impeccable.render.FightImpeccableNoticeBgCom;
				readonly sbIcon: Fight.Components.FightNotice.impeccable.render.FightImpeccableSbIcon;
				readonly fontCom: Fight.Components.FightNotice.impeccable.render.FightImpeccableNoticeFontCom;
			}, undefined, 'heroSkillAni'>;
		}
		namespace Components.FightNotice.hejiViewNew {
			type FightNoticeHeJiSkillViewNew = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly heroResCom: Fight.Components.FightNotice.hejiViewNew.render.HeJiViceHeroTwoSubViewNew;
				readonly bg1: fairygui.GLoader;
				readonly BG: fairygui.GGroup;
				readonly heji: fairygui.GLoader;
				readonly skillNameUrl0: fairygui.GLoader;
				readonly skillNameUrl1: fairygui.GLoader;
				readonly heroAni: fairygui.GGraph;
				readonly skillNameUrl00: fairygui.GLoader;
				readonly skillNameUrl01: fairygui.GLoader;
			}, undefined, 'hejiAni'>;
		}
		namespace Components.FightNotice.fatigueView {
			type FightFatigueNoticeView = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly pldx: fairygui.GLoader;
				readonly skillName: fairygui.GRichTextField;
				readonly skillName2: fairygui.GRichTextField;
				readonly loaderFatigue: fairygui.GLoader;
			}, 'aniState' | 'waitState', 'fatigueAni' | 't1' | 't2' | 't3' | 't4' | 't5'>;
		}
		namespace Components.FightNotice.formationView {
			type FormationNoticeView = StrictComponent<fairygui.GComponent, {
				readonly upBg: fairygui.GLoader;
				readonly iconUp: fairygui.GLoader;
				readonly upName: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly restraintUpCom: Fight.Components.FightNotice.formationView.FormationFmRestraint;
				readonly downBg: fairygui.GLoader;
				readonly iconDown: fairygui.GLoader;
				readonly downName: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly restraintDownCom: Fight.Components.FightNotice.formationView.FormationFmRestraint;
				readonly fmName: fairygui.GLoader;
				readonly fmName2: fairygui.GLoader;
			}, undefined, 'fatigueAni'>;
			type FormationFmRestraint = StrictComponent<fairygui.GComponent, {
				readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'posState', undefined>;
		}
		namespace Components.FightNotice.armySkillView {
			type FightNoticeArmySkill = StrictComponent<fairygui.GComponent, {
				readonly loaderSkillQuality: fairygui.GLoader;
				readonly armyTypeLoader: fairygui.GLoader;
				readonly txtSkillName: fairygui.GRichTextField;
			}, undefined, 'enemy' | 'me'>;
		}
		namespace Components.FightNotice.attrToneUpView {
			type FightNoticeAttrToneUp = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly txtAttr: fairygui.GTextField;
				readonly txtSelfAttr: fairygui.GTextField;
				readonly txtEnemyAttr: fairygui.GTextField;
			}, 'conIsSelf', 't0' | 't1'>;
			type FightAttrToneUpView = StrictComponent<fairygui.GComponent, {
				readonly listAttrToneUp: fairygui.GList;
			}, undefined, undefined>;
		}
		namespace Components.FightNotice.render.heroHead {
			type FightNoticeHeroHeadRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderLvQuality: fairygui.GLoader;
				readonly txtLv: fairygui.GTextField;
			}, 'hasLvState', undefined>;
		}
		namespace Components.FightNotice.muFuView.render {
			type FightNoticeMufuRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly txtBackName: fairygui.GLoader;
				readonly txtBackAttr: fairygui.GTextField;
			}, undefined, 't0'>;
		}
		namespace Components.FightNotice.heroSkillViewNew {
			type FightNoticeSkillHeroNew = StrictComponent<fairygui.GComponent, {
				readonly heroCom: Fight.Components.FightNotice.heroSkillViewNew.render.FightNoticeSkillBgNew;
				readonly skillCom: Fight.Components.FightNotice.heroSkillViewNew.render.FightNoticeSkillNameNew;
				readonly loaderVice: fairygui.GLoader;
			}, undefined, 'heroSkillAni'>;
			type FightNoticeSkillHeroEnemyNew = StrictComponent<fairygui.GComponent, {
				readonly heroCom: Fight.Components.FightNotice.heroSkillViewNew.render.FightNoticeSkillBgNew;
				readonly skillCom: Fight.Components.FightNotice.heroSkillViewNew.render.FightNoticeSkillNameNew;
				readonly loaderVice: fairygui.GLoader;
			}, undefined, 'heroSkillAni'>;
		}
		namespace Components.FightNotice.impeccable.render {
			type FightImpeccableNoticeFontCom = StrictComponent<fairygui.GComponent, {
				readonly bg1: fairygui.GLoader;
				readonly wu: fairygui.GLoader;
				readonly xie: fairygui.GLoader;
				readonly ke: fairygui.GLoader;
				readonly ji: fairygui.GLoader;
				readonly gth0: fairygui.GLoader;
				readonly gth1: fairygui.GLoader;
				readonly skillAni: fairygui.GGraph;
			}, undefined, 't0'>;
			type FightImpeccableNoticeBgCom = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly heroRes: fairygui.GLoader;
			}, undefined, 't0'>;
			type FightImpeccableSbIcon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly sb: fairygui.GLoader;
			}, 'button', 't0'>;
		}
		namespace Components.FightNotice.hejiViewNew.render {
			type HeJiViceHeroTwoSubViewNew = StrictComponent<fairygui.GComponent, {
				readonly heroRes0: Fight.Components.FightNotice.hejiViewNew.render.FHeroHeJiMaskRenderNew;
				readonly heroResAni: fairygui.GGraph;
				readonly heroRes1: Fight.Components.FightNotice.hejiViewNew.render.FHeroHeJiMaskRenderNew;
			}, undefined, 'twoAni'>;
			type FHeroHeJiMaskRenderNew = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
		}
		namespace Components.FightNotice.triggerSkillViewNew {
			type FightNoticeArrowTowerSkillNew = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly gongjianbg: fairygui.GLoader;
				readonly gongjianbg1: fairygui.GLoader;
				readonly pl: fairygui.GLoader;
				readonly plsj: fairygui.GLoader;
				readonly gongjian0: fairygui.GLoader;
				readonly gongjian1: fairygui.GLoader;
			}, undefined, 'turreAni'>;
			type FightNoticeTurretSkillNew = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly gongjianbg: fairygui.GLoader;
				readonly gongjianbg1: fairygui.GLoader;
				readonly gongjian0: fairygui.GLoader;
				readonly gongjian1: fairygui.GLoader;
			}, undefined, 'turreAni'>;
		}
		namespace Components.FightNotice.legendTalentViewNew {
			type FightNoticeLegendTalentEnemyViewNew = StrictComponent<fairygui.GComponent, {
				readonly noticeCom: Fight.Components.FightNotice.legendTalentViewNew.render.FightNoticeLegendTalentCom;
				readonly heroList: fairygui.GList;
				readonly herolist: fairygui.GGroup;
				readonly jiLiCom: Fight.Components.FightNotice.legendTalentViewNew.render.FightNoticeLegendTalentNameCom;
				readonly listAttrF: fairygui.GList;
				readonly listAttrB: fairygui.GList;
				readonly tx1: fairygui.GGroup;
				readonly listAttrF2: fairygui.GList;
				readonly listAttrB2: fairygui.GList;
				readonly tx2: fairygui.GGroup;
				readonly all: fairygui.GGroup;
			}, undefined, 'in' | 'txturn1' | 'txturn2' | 'out'>;
			type FightNoticeLegendTalentViewNew = StrictComponent<fairygui.GComponent, {
				readonly noticeCom: Fight.Components.FightNotice.legendTalentViewNew.render.FightNoticeLegendTalentCom;
				readonly heroList: fairygui.GList;
				readonly herolist: fairygui.GGroup;
				readonly jiLiCom: Fight.Components.FightNotice.legendTalentViewNew.render.FightNoticeLegendTalentNameCom;
				readonly listAttrF: fairygui.GList;
				readonly listAttrB: fairygui.GList;
				readonly tx1: fairygui.GGroup;
				readonly listAttrF2: fairygui.GList;
				readonly listAttrB2: fairygui.GList;
				readonly tx2: fairygui.GGroup;
				readonly all: fairygui.GGroup;
			}, undefined, 'in' | 'txturn1' | 'txturn2' | 'out'>;
		}
		namespace Components.FightNotice.heroSuitSkillViewNew {
			type FightNoticeSkillEnemy9002 = StrictComponent<fairygui.GComponent, {
				readonly suit0: fairygui.GLoader;
				readonly heroCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillBgCom;
				readonly suit1: fairygui.GLoader;
				readonly skillCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillNameCom;
				readonly zsBg: fairygui.GLoader;
				readonly suitName: fairygui.GTextField;
				readonly armyName: fairygui.GTextField;
			}, undefined, 'suitAni'>;
			type FightNoticeSkillEnemy9004 = StrictComponent<fairygui.GComponent, {
				readonly suit0: fairygui.GLoader;
				readonly heroCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillBgCom;
				readonly suit1: fairygui.GLoader;
				readonly skillCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillNameCom;
				readonly zsBg: fairygui.GLoader;
				readonly suitName: fairygui.GTextField;
				readonly armyName: fairygui.GTextField;
			}, undefined, 'suitAni'>;
			type FightNoticeSkillEnemy9005 = StrictComponent<fairygui.GComponent, {
				readonly suit0: fairygui.GLoader;
				readonly heroCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillBgCom;
				readonly suit1: fairygui.GLoader;
				readonly skillCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillNameCom;
				readonly zsBg: fairygui.GLoader;
				readonly suitName: fairygui.GTextField;
				readonly armyName: fairygui.GTextField;
			}, undefined, 'suitAni'>;
			type FightNoticeSkillEnemy9006 = StrictComponent<fairygui.GComponent, {
				readonly suit0: fairygui.GLoader;
				readonly heroCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillBgCom;
				readonly suit1: fairygui.GLoader;
				readonly skillCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillNameCom;
				readonly zsBg: fairygui.GLoader;
				readonly suitName: fairygui.GTextField;
				readonly armyName: fairygui.GTextField;
			}, undefined, 'suitAni'>;
			type FightNoticeSkillEnemy9003 = StrictComponent<fairygui.GComponent, {
				readonly suit0: fairygui.GLoader;
				readonly heroCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillBgCom;
				readonly suit1: fairygui.GLoader;
				readonly suitGh: fairygui.GGraph;
				readonly skillCom: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitSkillNameCom;
				readonly zsBg: fairygui.GLoader;
				readonly suitName: fairygui.GTextField;
				readonly armyName: fairygui.GTextField;
			}, undefined, 'suitAni'>;
		}
		namespace Components.FightNotice.exclusiveArmyViewNew {
			type FightNoticeExclusiveArmyViewNew = StrictComponent<fairygui.GComponent, {
				readonly bgCom: Fight.Components.FightNotice.exclusiveArmyViewNew.render.FightNoticeExclusiveArmyBg;
				readonly skillCom: Fight.Components.FightNotice.exclusiveArmyViewNew.render.FightNoticeExclusiveArmySkillName;
				readonly zsBg: fairygui.GLoader;
				readonly heroName: fairygui.GTextField;
				readonly armyName: fairygui.GTextField;
			}, undefined, 't0'>;
			type FightNoticeExclusiveArmyEnemyViewNew = StrictComponent<fairygui.GComponent, {
				readonly bgCom: Fight.Components.FightNotice.exclusiveArmyViewNew.render.FightNoticeExclusiveArmyBg;
				readonly skillCom: Fight.Components.FightNotice.exclusiveArmyViewNew.render.FightNoticeExclusiveArmySkillName;
				readonly zsBg: fairygui.GLoader;
				readonly heroName: fairygui.GTextField;
				readonly armyName: fairygui.GTextField;
			}, undefined, 't0'>;
		}
		namespace Components.FightNotice.passiveArmySkillView {
			type FightNoticePassiveArmySkill = StrictComponent<fairygui.GComponent, {
				readonly loaderSkillQuality: fairygui.GLoader;
				readonly txtSkillName: fairygui.GRichTextField;
			}, undefined, 'enemy' | 'me'>;
		}
		namespace Components.FightNotice.fightMeritoriousView {
			type FightMeritoriousNoticeView = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtNum: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			}, undefined, 'fatigueAni'>;
		}
		namespace Components.FightNotice.heroSkillViewNew.render {
			type HeroSkillMaskRender = StrictComponent<fairygui.GComponent, {
				readonly heroLoader: fairygui.GLoader;
			}, undefined, undefined>;
			type FightNoticeSkillNameNew = StrictComponent<fairygui.GComponent, {
				readonly skillName0: fairygui.GLoader;
				readonly skillName1: fairygui.GLoader;
				readonly skillName2: fairygui.GLoader;
				readonly skillName3: fairygui.GLoader;
			}, undefined, 't0'>;
			type FightNoticeSkillBgNew = StrictComponent<fairygui.GComponent, {
				readonly loaderSkillQuality1: fairygui.GLoader;
				readonly loaderSkillQuality: fairygui.GLoader;
				readonly heroRes: Fight.Components.FightNotice.heroSkillViewNew.render.HeroSkillMaskRender;
				readonly heroAni: fairygui.GGraph;
			}, undefined, 't0'>;
		}
		namespace Components.FightNotice.legendTalentViewNew.render {
			type FightNoticeLegendRender = StrictComponent<fairygui.GComponent, {
				readonly txtAttr: fairygui.GTextField;
			}, undefined, undefined>;
			type FightNoticeLegendTalentCom = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly bgComAni: fairygui.GGraph;
			}, undefined, 't0' | 't1'>;
			type FightNoticeLegendTalentNameCom = StrictComponent<fairygui.GComponent, {
				readonly ji: fairygui.GLoader;
				readonly skillNameAni: fairygui.GGraph;
				readonly li: fairygui.GLoader;
				readonly ji1: fairygui.GLoader;
				readonly li1: fairygui.GLoader;
			}, undefined, 't0' | 't1'>;
			type FHeroJiLiMaskRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type FHeroJiLiMaskRender1 = StrictComponent<fairygui.GButton, {
				readonly heroRes: Fight.Components.FightNotice.legendTalentViewNew.render.FHeroJiLiMaskRender;
			}, 'button', undefined>;
		}
		namespace Components.FightNotice.heroSuitSkillViewNew.render {
			type FightNoticeSuitSkillBgCom = StrictComponent<fairygui.GComponent, {
				readonly loaderSkillQuality: fairygui.GLoader;
				readonly loaderSkillQuality1: fairygui.GLoader;
				readonly heroRes: Fight.Components.FightNotice.heroSuitSkillViewNew.render.FightNoticeSuitHeroMask;
				readonly bg1: fairygui.GLoader;
			}, undefined, 't0'>;
			type FightNoticeSuitHeroMask = StrictComponent<fairygui.GComponent, {
				readonly heroRes: fairygui.GLoader;
			}, undefined, 't0'>;
			type FightNoticeSuitSkillNameCom = StrictComponent<fairygui.GComponent, {
				readonly skillName0: fairygui.GLoader;
				readonly skillName1: fairygui.GLoader;
				readonly skillName2: fairygui.GLoader;
				readonly skillName3: fairygui.GLoader;
			}, undefined, 't0'>;
		}
		namespace Components.FightNotice.exclusiveArmyViewNew.render {
			type FightNoticeExclusiveArmyBg = StrictComponent<fairygui.GComponent, {
				readonly loaderSkillQuality: fairygui.GLoader;
				readonly loaderSkillQuality1: fairygui.GLoader;
				readonly heroRes: Fight.Components.FightNotice.exclusiveArmyViewNew.render.FightNoticeExclusiveArmyMaskRender;
				readonly bg1: fairygui.GLoader;
			}, undefined, 't0'>;
			type FightNoticeExclusiveArmyMaskRender = StrictComponent<fairygui.GComponent, {
				readonly heroRes: fairygui.GLoader;
				readonly heroAni0: fairygui.GGraph;
				readonly heroAni1: fairygui.GGraph;
			}, undefined, 't0'>;
			type FightNoticeExclusiveArmySkillName = StrictComponent<fairygui.GComponent, {
				readonly skillName0: fairygui.GLoader;
				readonly skillName1: fairygui.GLoader;
				readonly skillName2: fairygui.GLoader;
				readonly skillName3: fairygui.GLoader;
			}, undefined, 't0'>;
		}
	}
	import __pkg__4welyse6 = FightDungeon;
	namespace FightDungeon {
		type NationalWarDungeonProcessor = StrictComponent<fairygui.GComponent, {
			readonly loaderRewardBg: fairygui.GImage;
			readonly comHeroBottom: FightUI.Components.FightTop.FightHeadInfoLeftRender;
			readonly comEnemyBottom: FightUI.Components.FightTop.FightHeadInfoRightRender;
			readonly btnSpeed: FightDungeon.Components.FightBottom.FightSpeedBtn;
			readonly imgRound: fairygui.GImage;
			readonly imgRound1: fairygui.GImage;
			readonly loaderCountryUpLeftFrame: fairygui.GLoader;
			readonly loaderCountryUpRightFrame: fairygui.GLoader;
			readonly imgZzLeft: fairygui.GImage;
			readonly imgZzRight: fairygui.GImage;
			readonly comBuffSelf: FightDungeon.Components.FightTop.Buff.FightHeadBuff;
			readonly comBuffEnemy: FightDungeon.Components.FightTop.Buff.FightHeadBuff;
			readonly bartizanRender: FightDungeon.Components.FightTop.NationalWarIconRender;
			readonly blockhouseRender: FightDungeon.Components.FightTop.NationalWarIconRender;
			readonly loaderCountrySelf: UILib.Components.countryRender.CountryCityRender;
			readonly loaderCountryEnemy: UILib.Components.countryRender.CountryCityRender;
			readonly listSelf: fairygui.GList;
			readonly listEnemy: fairygui.GList;
			readonly txtFightNum: fairygui.GTextField;
			readonly txtFightName: fairygui.GRichTextField;
			readonly txtSelfNum: fairygui.GRichTextField;
			readonly txtEnemyNum: fairygui.GRichTextField;
			readonly txtFightNum1: fairygui.GTextField;
			readonly topGrop: fairygui.GGroup;
			readonly listHero: fairygui.GList;
			readonly imgArrow: fairygui.GImage;
			readonly leftBm: fairygui.GGroup;
			readonly btnDrum: FightDungeon.Components.FightBottom.NationalWarRewardBtn;
			readonly btnWarSituation: FightDungeon.Components.FightBottom.NationalWarTipBtn;
			readonly btnWarTip: FightDungeon.Components.FightBottom.NationalWarTipBtn;
			readonly btnGroup: fairygui.GGroup;
			readonly btnReturn: FightDungeon.Components.FightBottom.FightLeftBackBtn;
			readonly warDrumTip: FightDungeon.Components.FightTip.NationalWarDrumTipView;
		}, 'cityState', 'xia' | 'zuo' | 'you' | 't3' | 't4' | 'roundAni' | 't0' | 't7'>;
		type BaggageDungeonProcessor = StrictComponent<fairygui.GComponent, {
			readonly listReward: fairygui.GList;
			readonly txtEnemyNum: fairygui.GTextField;
			readonly groupDrop: fairygui.GGroup;
		}, undefined, undefined>;
		type BarbaricInvadeDungeonProcessor = StrictComponent<fairygui.GComponent, {
			readonly listBuff: fairygui.GList;
		}, undefined, undefined>;
		type KillingArmiesDungeonProcessor = StrictComponent<fairygui.GComponent, {
			readonly listReward: fairygui.GList;
			readonly txtEnemyNum: fairygui.GTextField;
			readonly groupDrop: fairygui.GGroup;
			readonly killingArmiesWeatherIcon: fairygui.GLoader;
			readonly txtWeatherName: UILib.Components.fontTab.__cmpt__rq3da3tlmy;
			readonly txtWeatherDes: fairygui.GTextField;
			readonly weatherGroup: fairygui.GGroup;
		}, 'conShowWeather', undefined>;
		type LeaderDungeonProcessor = StrictComponent<fairygui.GComponent, {
			readonly comBuffSelf: FightDungeon.Components.FightTop.Buff.FightHeadBuff;
			readonly comBuffEnemy: FightDungeon.Components.FightTop.Buff.FightHeadBuff;
			readonly attrGroup: fairygui.GGroup;
		}, undefined, undefined>;
		type AttackCityProcessor = StrictComponent<fairygui.GComponent, {
			readonly comFettersAttr: FightDungeon.Components.FightTop.AttackCityFettersAttr;
		}, undefined, undefined>;
		namespace Components.FightTip {
			type NationalWarDrumTipView = StrictComponent<fairygui.GComponent, {
				readonly drumTipStr: fairygui.GRichTextField;
			}, undefined, 'drumTipAni'>;
		}
		namespace Components.FightTop {
			type NationalWarIconRender = StrictComponent<fairygui.GButton, {
				readonly nameTxt: fairygui.GRichTextField;
				readonly level: fairygui.GRichTextField;
				readonly title: fairygui.GRichTextField;
			}, 'isShowCD' | 'isTurret', undefined>;
			type AttackCityFettersAttr = StrictComponent<fairygui.GComponent, {
				readonly txtAttr: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.FightBottom {
			type NationalWarHeroHeadRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
				readonly proBlood: FightDungeon.Components.FightBottom.FightHeroHeadBar;
				readonly txtState: fairygui.GRichTextField;
				readonly txtLv: fairygui.GRichTextField;
				readonly txtFight: fairygui.GRichTextField;
			}, 'conQuality' | 'conIsAwaken', undefined>;
			type NationalWarRewardBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly iconUrl: fairygui.GLoader;
				readonly txtNum: fairygui.GRichTextField;
				readonly txtMoneyNum: fairygui.GRichTextField;
			}, 'conIsHaveNum' | 'conShowMoney', undefined>;
			type FightHeroHeadBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type BaggageRewardRender = StrictComponent<fairygui.GComponent, {
				readonly btnReward: UILib.Components.renderer.RewardRender1;
			}, undefined, undefined>;
			type NationalWarTipBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type FightSpeedBtn = StrictComponent<fairygui.GButton, {
				readonly txtSpeed: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			}, 'button' | 'conSpeed', undefined>;
			type FightLeftBackBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.FightTop.Head {
			type FightHeadRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GImage;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly txtFight: fairygui.GRichTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conType', undefined>;
		}
		namespace Components.FightTop.Buff {
			type FightBarbaricBuffRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderSKillIcon: fairygui.GLoader;
				readonly loaderHeroQuality: fairygui.GLoader;
				readonly title: UILib.Components.fontTab.__cmpt__rq3da3tlmy;
				readonly txtDesc: fairygui.GTextField;
			}, 'conQuality', undefined>;
			type FightHeadBuff = StrictComponent<fairygui.GComponent, {
				readonly txtBuff: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	
	import __pkg__70064w42 = FightMap;
	namespace FightMap {
		namespace SubView.MapEffectView {
			type FightMapSceneView_1 = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly turretLoader: fairygui.GLoader;
			}, undefined, 'beaconFire'>;
			type FightMapSceneView_2 = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly turretLoader: fairygui.GLoader;
			}, undefined, 'lightning'>;
			type FightMapSceneView_3 = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
			}, undefined, 't0'>;
			type FightMapSceneView_4 = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly turretLoader: fairygui.GLoader;
				readonly cloud3: fairygui.GGroup;
				readonly cloud4: fairygui.GGroup;
			}, undefined, 't0'>;
			type FightMapSceneView_5 = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly decorate: fairygui.GLoader;
			}, undefined, 't0'>;
			type FightMapSceneView_6 = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly decorate: fairygui.GLoader;
			}, undefined, 't0'>;
		}
		namespace SubView.MapAtmosphereView {
			type FightMapAtmosphere_1 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type FightMapAtmosphere_2 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type FightMapAtmosphere_4 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type FightMapAtmosphere_3 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type FightMapAtmosphere_5 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type FightMapAtmosphere_6 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
		}
		namespace Components.MapSceneEffect {
			type FightFog02 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
		}
	}
	import __pkg__fcw76nka = FightMeritorious;
	namespace FightMeritorious {
		type FightMeritoriousView = StrictComponent<fairygui.GComponent, {
			readonly loader0: fairygui.GLoader;
			readonly guide1: fairygui.GLoader;
			readonly guide2: fairygui.GLoader;
			readonly guide3: fairygui.GLoader;
			readonly guide4: fairygui.GLoader;
			readonly btnGetReward: UILib.Components.btn.BtnBig4;
			readonly btnRank: UILib.Components.btn.BtnCutDown;
			readonly btnRewardRank: UILib.Components.btn.BtnCutDown;
			readonly task1: FightMeritorious.Render.TaskRender;
			readonly task2: FightMeritorious.Render.TaskRender;
			readonly task3: FightMeritorious.Render.TaskRender;
			readonly task4: FightMeritorious.Render.TaskRender;
			readonly txtNum: fairygui.GTextField;
		}, undefined, undefined>;
		type FightMeritoriousRankView = StrictComponent<fairygui.GComponent, {
			readonly listRank: fairygui.GList;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly selfRank: FightMeritorious.Render.FightMeritoriousRankRender;
			readonly txtDes: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
		}, 'conSelf', undefined>;
		type FightMeritoriousWindow = StrictComponent<fairygui.GComponent, {
			readonly rankCom: FightMeritorious.FightMeritoriousRankView;
			readonly yearRewardcom: FightMeritorious.FightMeritoriousRewardWindow;
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
		}, 'conType', undefined>;
		type FightMeritoriousRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly listReward: fairygui.GList;
			readonly txtDes: UILib.Components.fontTab_text.__cmpt__qmdq1no8u77;
			readonly txtDes2: UILib.Components.fontTab_text.__cmpt__qmdq1no8u77;
		}, undefined, undefined>;
		namespace Render {
			type FightMeritoriousRankRender = StrictComponent<fairygui.GComponent, {
				readonly loaderHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly listReward: fairygui.GList;
				readonly txtRank: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
				readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
				readonly txtFight: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
				readonly txtFigh: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
			}, 'conRank' | 'conIsSelf' | 'conIsShowRank' | 'conIsLight', undefined>;
			type FightMeritoriousRender = StrictComponent<fairygui.GButton, {
				readonly proCom: FightMeritorious.Components.ProMeritorious;
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
				readonly txtNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly effect1: fairygui.GGraph;
			}, 'conState' | 'c1' | 'conType', undefined>;
			type FightMeritoriousRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtRank: fairygui.GTextField;
			}, 'conRank', undefined>;
			type TaskRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly txtNum: fairygui.GTextField;
			}, 'conType', undefined>;
		}
		namespace Components {
			type ProMeritorious = StrictComponent<fairygui.GProgressBar, {
				readonly di: fairygui.GLoader;
			}, 'c1', undefined>;
			type proCircle = StrictComponent<fairygui.GComponent, {
				readonly loaderCostIcon: fairygui.GLoader;
			}, undefined, undefined>;
			type Btn1 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__82e3etg8 = FightNationalWar;
	namespace FightNationalWar {
		type NationalWarCityFuncWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly cityList: fairygui.GList;
			readonly btnGoTo: UILib.Components.btn.BtnBig1;
			readonly btnConsume: UILib.Components.renderer.ConsumeRender;
			readonly btnConsumeTime: UILib.Components.renderer.ConsumeRender;
			readonly groCost: fairygui.GGroup;
		}, 'consumeState', undefined>;
		type NationalWarRankWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listRank: fairygui.GList;
			readonly comMainRank: FightNationalWar.Components.NationalWarRankRender;
			readonly loaderDefBg: fairygui.GLoader;
			readonly loaderHeroCountry: UILib.Components.countryRender.CountryCityRender;
			readonly loaderBgHero: fairygui.GLoader;
			readonly loaderIconHero: fairygui.GLoader;
			readonly loaderFrameHero: fairygui.GLoader;
			readonly txtNameHero: fairygui.GRichTextField;
			readonly txtLvHero: fairygui.GTextField;
			readonly loaderAtkBg: fairygui.GLoader;
			readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly txtName: fairygui.GRichTextField;
			readonly txtLv: fairygui.GTextField;
		}, 'conShowAtk' | 'conShowDef' | 'conIsHaveData' | 'conQualityDef' | 'conQualityAtk', undefined>;
		type NationalWarDrumWindow = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly topBg: fairygui.GLoader;
			readonly bottomBg: fairygui.GLoader;
			readonly consumeIcon: fairygui.GLoader;
			readonly tipBtn: UILib.Components.button_checkbox.Button_Check4;
			readonly btnMark: UILib.Components.btn.BtnBig4;
			readonly rewardBtn: UILib.Components.renderer.RewardRender1;
			readonly tipTxt: fairygui.GRichTextField;
			readonly consumeCount: fairygui.GRichTextField;
		}, undefined, undefined>;
		type NationalWarInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly progressArmyHp0: FightNationalWar.Components.ProgressBarHp;
			readonly progressArmyHp1: FightNationalWar.Components.ProgressBarHp;
			readonly loaderLogo0: fairygui.GLoader;
			readonly loaderLogo1: fairygui.GLoader;
			readonly loaderType: fairygui.GLoader;
			readonly heroRender: UILibHero.Components.render.HeroTroopRender;
			readonly btnTuJin: UILib.Components.btn.BtnBig1;
			readonly btnBack: UILib.Components.btn.BtnBig4;
			readonly troopHeroBtn: UILib.Components.btn.BtnSearch;
			readonly txtFight: UILibHero.Components.fight.FightPowerBig;
			readonly txtName0: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtName1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNumAll0: UILib.Components.fontTab_richText.__cmpt__txlt1no8tzm;
			readonly txtNumAll1: UILib.Components.fontTab_richText.__cmpt__txlt1no8tzm;
			readonly txtBar0: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			readonly txtBar1: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
		}, undefined, undefined>;
		type NationalWarMapWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderMap: fairygui.GLoader;
			readonly comEnemy1: FightNationalWar.Components.NationalWarMapRender;
			readonly comEnemy2: FightNationalWar.Components.NationalWarMapRender;
			readonly comEnemy3: FightNationalWar.Components.NationalWarMapRender;
			readonly comEnemy4: FightNationalWar.Components.NationalWarMapRender;
			readonly comEnemy5: FightNationalWar.Components.NationalWarMapRender;
			readonly comHero1: FightNationalWar.Components.NationalWarMapRender;
			readonly comHero2: FightNationalWar.Components.NationalWarMapRender;
			readonly comHero3: FightNationalWar.Components.NationalWarMapRender;
			readonly comHero4: FightNationalWar.Components.NationalWarMapRender;
			readonly comHero5: FightNationalWar.Components.NationalWarMapRender;
		}, undefined, 't0' | 't1'>;
		namespace Components {
			type ProgressBarHp = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type NationalWarCityRender = StrictComponent<fairygui.GButton, {
				readonly jiantou: fairygui.GLoader;
				readonly jingZhouLoader: fairygui.GLoader;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly comOwnCity: fairygui.GComponent;
				readonly txtCityName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
				readonly txtCityTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
				readonly txtCityType: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
				readonly npcCount: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly playerNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly npcLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly lossTip: fairygui.GRichTextField;
			}, 'button' | 'posState' | 'lossColor' | 'jingZhouState', undefined>;
			type NationalWarRankRender = StrictComponent<fairygui.GComponent, {
				readonly loaderEnumyCountry: UILib.Components.countryRender.CountryCityRender;
				readonly txtRank: fairygui.GRichTextField;
				readonly txtName: fairygui.GRichTextField;
				readonly txtScore: fairygui.GRichTextField;
			}, undefined, undefined>;
			type NationalWarMapRender = StrictComponent<fairygui.GComponent, {
				readonly heroFrameLoader: fairygui.GLoader;
				readonly comHeroHead: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly txtName: fairygui.GTextField;
			}, 'conIsFight' | 'conQuality', 'fightEffect'>;
		}
	}
	import __pkg__kl9dfmzi = FightRecord;
	namespace FightRecord {
		type FightRecordView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly proBtn: UILib.Components.button_radio.Button_Radio1;
			readonly cityBtn: UILib.Components.button_radio.Button_Radio1;
		}, 'btnState', undefined>;
		type FightRecordDetailWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly resultLoader: fairygui.GLoader;
			readonly heroBtn: FightRecord.Components.HeroResRender;
			readonly roleBg: fairygui.GLoader;
			readonly result: fairygui.GLoader;
			readonly armyGroup: fairygui.GGroup;
			readonly fightPoint: UILib.Components.btn.BtnSmall3;
			readonly fightHF: UILib.Components.btn.BtnSmall3;
			readonly fightFX: UILib.Components.btn.BtnSmall3;
			readonly collectSelect: UILib.Components.button_checkbox.Button_Check3;
			readonly playerList: fairygui.GList;
			readonly armyList: fairygui.GList;
		}, 'resultState', undefined>;
		type CrossServerRecordView = StrictComponent<fairygui.GComponent, {
			readonly proList: fairygui.GList;
			readonly imgArrows: fairygui.GImage;
			readonly imgArrowsUp: fairygui.GImage;
			readonly allReadBtn: UILib.Components.btn.BtnSmall2;
			readonly imgTitleGroup: fairygui.GGroup;
			readonly funcTitle: fairygui.GRichTextField;
		}, 'emptyState' | 'conType', undefined>;
		type CrossServerRecordWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly proList: fairygui.GList;
			readonly atkName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly defName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly result: fairygui.GLoader;
		}, 'conIsLeftWin', undefined>;
		namespace PeoSub {
			type FightRecordPeoSubView = StrictComponent<fairygui.GComponent, {
				readonly peoSubView: FightRecord.PeoSub.FightRecordMaskPeoView;
				readonly allBtn: UILib.Components.button_radio.Button_Radio2;
				readonly fightBtn: UILib.Components.button_radio.Button_Radio2;
				readonly crusadeBtn: UILib.Components.button_radio.Button_Radio2;
				readonly collectBtn: UILib.Components.button_radio.Button_Radio2;
				readonly allReadBtn: UILib.Components.btn.BtnSmall2;
			}, 'screenState' | 'emptyState', undefined>;
			type FightRecordMaskPeoView = StrictComponent<fairygui.GComponent, {
				readonly proList: fairygui.GList;
			}, undefined, undefined>;
		}
		namespace CitySub {
			type FightRecordCitySubView = StrictComponent<fairygui.GComponent, {
				readonly cityList: fairygui.GList;
				readonly bottomJt: fairygui.GImage;
			}, 'emptyState', undefined>;
			type FightRecordCityView = StrictComponent<fairygui.GComponent, {
				readonly citySubView: FightRecord.CitySub.FightRecordMaskCityView;
				readonly allBtn: UILib.Components.button_radio.Button_Radio2;
				readonly fightBtn: UILib.Components.button_radio.Button_Radio2;
				readonly taoFaBtn: UILib.Components.button_radio.Button_Radio2;
				readonly collectBtn: UILib.Components.button_radio.Button_Radio2;
				readonly cityBtn: UILib.Components.button_radio.Button_Radio1;
			}, 'screenState' | 'emptyState', undefined>;
			type FightRecordMaskCityView = StrictComponent<fairygui.GComponent, {
				readonly cityList: fairygui.GList;
			}, undefined, undefined>;
		}
		namespace Components {
			type HeroHeadRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly maskRender: UILibHero.Components.render.headRender.MaskCircleRender;
			}, undefined, undefined>;
			type ArmsRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type FightRecordDArmyRender = StrictComponent<fairygui.GComponent, {
				readonly cityGroup: fairygui.GGroup;
				readonly heroRender: FightRecord.Components.PeoRender.FRecordDArmysRender;
				readonly frontRender: FightRecord.Components.PeoRender.FRecordDArmysRender;
				readonly backRender: FightRecord.Components.PeoRender.FRecordDArmysRender;
				readonly cityKill: fairygui.GRichTextField;
			}, 'posState', undefined>;
			type HeroResRender = StrictComponent<fairygui.GButton, {
				readonly heroLoader: fairygui.GLoader;
			}, 'button', undefined>;
			type ArmsInfoRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
		namespace Components.PeoRender {
			type ArmsViewRender = StrictComponent<fairygui.GComponent, {
				readonly armsIcon: FightRecord.Components.ArmsRender;
				readonly armyCount: fairygui.GRichTextField;
			}, undefined, undefined>;
			type FightRPeoRadioRender = StrictComponent<fairygui.GButton, {
				readonly firstGroup: fairygui.GGroup;
				readonly siteBtn: FightRecord.Components.PeoRender.FightRSiteBtn;
				readonly redPoint: fairygui.GImage;
				readonly siteGroup: fairygui.GGroup;
				readonly dateTime: fairygui.GRichTextField;
				readonly dateGroup: fairygui.GGroup;
			}, 'button' | 'isDateTime' | 'isFirstState', undefined>;
			type FightRSiteBtn = StrictComponent<fairygui.GButton, {
				readonly result: fairygui.GLoader;
				readonly lCountryLoader: UILib.Components.countryRender.CountrySmallRender;
				readonly rCountryLoader: UILib.Components.countryRender.CountrySmallRender;
				readonly btnGoCity: UILib.Components.btn.BtnEmpty;
				readonly lPlayerName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly rPlayerName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly btnOpenInfo: UILib.Components.btn.BtnEmpty;
				readonly cityName: fairygui.GRichTextField;
				readonly siteCount: fairygui.GRichTextField;
				readonly timeStr: fairygui.GRichTextField;
			}, 'resultState' | 'lastState' | 'fightState', undefined>;
			type FightRecordDRender = StrictComponent<fairygui.GComponent, {
				readonly headRender: FightRecord.Components.HeroHeadRender;
				readonly countryLoader: UILib.Components.countryRender.CountryCityRender;
				readonly frontRender: FightRecord.Components.PeoRender.ArmsViewRender;
				readonly backRender: FightRecord.Components.PeoRender.ArmsViewRender;
				readonly fightPower: UILibHero.Components.fight.FightPowerSmall;
				readonly lplayerName: fairygui.GRichTextField;
				readonly rplayerName: fairygui.GRichTextField;
				readonly heroLv: fairygui.GRichTextField;
				readonly qq: fairygui.GRichTextField;
				readonly prideCount: fairygui.GRichTextField;
				readonly heroName: fairygui.GRichTextField;
			}, 'posState' | 'attackState', undefined>;
			type FRecordDArmysRender = StrictComponent<fairygui.GComponent, {
				readonly headRender: FightRecord.Components.HeroHeadRender;
				readonly arms: FightRecord.Components.ArmsRender;
				readonly frontKill: fairygui.GRichTextField;
				readonly backKill: fairygui.GRichTextField;
				readonly killGroup: fairygui.GGroup;
			}, 'posState' | 'selectIndex', undefined>;
			type CSFightRPeoRadioRender = StrictComponent<fairygui.GButton, {
				readonly firstGroup: fairygui.GGroup;
				readonly siteBtn: FightRecord.Components.PeoRender.FightRSiteBtn;
				readonly redPoint: fairygui.GImage;
				readonly siteGroup: fairygui.GGroup;
				readonly dateTime: fairygui.GRichTextField;
				readonly dateGroup: fairygui.GGroup;
			}, 'button' | 'isDateTime' | 'isFirstState', undefined>;
			type FightRPeoRadioSmallRender = StrictComponent<fairygui.GButton, {
				readonly result: fairygui.GLoader;
				readonly btnOpenInfo: UILib.Components.btn.BtnEmpty;
				readonly lPlayerName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly rPlayerName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly cityName: fairygui.GRichTextField;
				readonly siteCount: fairygui.GRichTextField;
				readonly timeStr: fairygui.GRichTextField;
			}, 'resultState' | 'lastState', undefined>;
		}
		namespace Components.CityRender {
			type FightRecordCityRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly cityName: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly dateTime: fairygui.GRichTextField;
				readonly time: fairygui.GRichTextField;
			}, 'isFight', undefined>;
		}
	}
	import __pkg__avn63m8f = FightRecordShare;
	namespace FightRecordShare {
		type FRecordShareWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type ShareButton = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__yp0n9toh = FightUI;
	namespace FightUI {
		type FightUIView = StrictComponent<fairygui.GComponent, {
			readonly rectTop: fairygui.GGraph;
			readonly rectBottom: fairygui.GGraph;
			readonly backBtn: fairygui.GLoader;
			readonly loadSubView: FightUI.FightLoadSubView;
			readonly backSubView: FightUI.FightBackSubView;
			readonly txtFightName: fairygui.GRichTextField;
		}, undefined, undefined>;
		type FightLoadSubView = StrictComponent<fairygui.GComponent, {
			readonly graphBg: fairygui.GGraph;
			readonly groupLoading: fairygui.GGroup;
		}, undefined, 'loadAni'>;
		type FightBackSubView = StrictComponent<fairygui.GComponent, {
			readonly loaderBackBg: fairygui.GLoader;
			readonly btnBack: FightUI.Components.FightBtn.FightBackBtn;
			readonly btnBackOne: FightUI.Components.FightBtn.FightBackBtn;
			readonly btnPlayBack: FightUI.Components.FightBtn.FightBackBtn;
			readonly btnPlayNext: FightUI.Components.FightBtn.FightBackBtn;
		}, 'playBackState', 'showClose'>;
		type FightUIEditView = StrictComponent<fairygui.GComponent, {
			readonly rootPoint: fairygui.GTextField;
			readonly leftUpPoint: fairygui.GTextField;
			readonly rightUpPoint: fairygui.GTextField;
			readonly leftDownPoint: fairygui.GTextField;
			readonly rightDownPoint: fairygui.GTextField;
			readonly uRootPoint: fairygui.GTextField;
			readonly dRootPoint: fairygui.GTextField;
			readonly upFmRadioX: fairygui.GTextField;
			readonly upFmRadioY: fairygui.GTextField;
			readonly downFmRadioX: fairygui.GTextField;
			readonly downFmRadioY: fairygui.GTextField;
			readonly btnChange: UILib.Components.btn.BtnSmall3;
			readonly btnReset: UILib.Components.btn.BtnSmall3;
			readonly btnFight: UILib.Components.btn.BtnSmall3;
			readonly generalRes: fairygui.GTextField;
			readonly frontRes: fairygui.GTextField;
			readonly backRes: fairygui.GTextField;
			readonly upScale: fairygui.GTextField;
			readonly centerScale: fairygui.GTextField;
			readonly downScale: fairygui.GTextField;
			readonly armyPosY: fairygui.GTextField;
			readonly upAlpha: fairygui.GTextField;
			readonly centerAlpha: fairygui.GTextField;
			readonly preSkillID: fairygui.GTextField;
			readonly effectList: fairygui.GList;
			readonly btnFightPush: UILib.Components.btn.BtnSmall3;
			readonly slideRadio: fairygui.GTextField;
			readonly btnUp: UILib.Components.button_checkbox.Button_Check3;
			readonly effectGroup: fairygui.GGroup;
			readonly shakeTimes: fairygui.GTextField;
			readonly shakeTimeParam: fairygui.GTextField;
			readonly shakeDecay: fairygui.GTextField;
			readonly shakeMaxDis: fairygui.GTextField;
			readonly shakeIsRandom: UILib.Components.button_checkbox.Button_Check2;
		}, 'isUpState', undefined>;
		type FightUIEditRender = StrictComponent<fairygui.GComponent, {
			readonly effectScale: fairygui.GTextField;
			readonly effectSkew: fairygui.GTextField;
			readonly effectPos: fairygui.GTextField;
			readonly effectRotation: fairygui.GTextField;
			readonly effectName: fairygui.GTextField;
		}, undefined, undefined>;
		namespace Components.FightMap {
			type NationalWarMapFunc = StrictComponent<fairygui.GComponent, {
				readonly loaderMap: fairygui.GLoader;
				readonly imgHero1: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgHero2: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgHero3: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgHero4: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgHero5: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgEnemy1: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgEnemy2: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgEnemy3: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgEnemy4: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly imgEnemy5: FightUI.Components.FightMap.NationalWarMapSmallRender;
				readonly heroHeadLoader1: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly heroHeadLoader2: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly heroHeadLoader3: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly heroHeadLoader4: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly heroHeadLoader5: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly enemyHeadLoader1: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly enemyHeadLoader2: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly enemyHeadLoader3: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly enemyHeadLoader4: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly enemyHeadLoader5: UILibHero.Components.render.headRender.MaskCircleRender;
			}, undefined, undefined>;
			type NationalWarMapSmallRender = StrictComponent<fairygui.GComponent, undefined, 'conType' | 'conIsUp', undefined>;
		}
		namespace Components.FightTop {
			type FightTopUIView = StrictComponent<fairygui.GComponent, {
				readonly headInfoComSelf: FightUI.Components.FightTop.FightHeadInfoLeftRender;
				readonly headInfoComEnemy: FightUI.Components.FightTop.FightHeadInfoRightRender;
				readonly roundBg: fairygui.GImage;
				readonly imgRound1: fairygui.GImage;
				readonly txtFightNum1: fairygui.GTextField;
				readonly txtRount: fairygui.GTextField;
				readonly roundGroup: fairygui.GGroup;
			}, 'conIsCross', 'roundAni' | 't0' | 't7'>;
			type FightHeadInfoLeftRender = StrictComponent<fairygui.GComponent, {
				readonly cacheAsBitmapCom: FightUI.Components.FightTop.FightHeadBitmapLeftRender;
				readonly heroHeadCom: FightUI.Components.FightTop.FightHeadHeroBitmapLeftRender;
				readonly fontCom: FightUI.Components.FightTop.FightHeadFontLeftRender;
			}, undefined, 't0'>;
			type FightHeadInfoRightRender = StrictComponent<fairygui.GComponent, {
				readonly cacheAsBitmapCom: FightUI.Components.FightTop.FightHeadBitmapRightRender;
				readonly heroHeadCom: FightUI.Components.FightTop.FightHeadHeroBitmapRightRender;
				readonly fontCom: FightUI.Components.FightTop.FightHeadFontRightRender;
			}, undefined, 't0'>;
			type FightHeadFontLeftRender = StrictComponent<fairygui.GComponent, {
				readonly countryLoader: fairygui.GLoader;
				readonly txtCountry: fairygui.GTextField;
			}, undefined, undefined>;
			type FightHeadFontRightRender = StrictComponent<fairygui.GComponent, {
				readonly countryLoader: fairygui.GLoader;
				readonly txtCountry: fairygui.GTextField;
			}, undefined, undefined>;
			type FightHeadBitmapLeftRender = StrictComponent<fairygui.GComponent, {
				readonly loaderHeadBg: fairygui.GLoader;
				readonly loaderTitle: fairygui.GLoader;
				readonly proHeroBlood1: FightUI.Components.FightProgress.ProgressBar2;
				readonly proHeroBlood: FightUI.Components.FightProgress.ProgressBar1;
				readonly loaderFatigue: fairygui.GLoader;
				readonly fatigueBtn: fairygui.GLoader;
				readonly txtFatigue: fairygui.GTextField;
				readonly txtForce: fairygui.GTextField;
				readonly txtWit: fairygui.GTextField;
				readonly txtCharm: fairygui.GTextField;
				readonly txtLead: fairygui.GTextField;
				readonly txtFmName: fairygui.GRichTextField;
			}, 'conIsFitigue' | 'conFightFm', 't0'>;
			type FightHeadBitmapRightRender = StrictComponent<fairygui.GComponent, {
				readonly loaderHeadBg: fairygui.GLoader;
				readonly loaderTitle: fairygui.GLoader;
				readonly proHeroBlood1: FightUI.Components.FightProgress.ProgressBar2;
				readonly proHeroBlood: FightUI.Components.FightProgress.ProgressBar1;
				readonly loaderFatigue: fairygui.GLoader;
				readonly fatigueBtn: fairygui.GLoader;
				readonly txtFatigue: fairygui.GTextField;
				readonly txtForce: fairygui.GTextField;
				readonly txtWit: fairygui.GTextField;
				readonly txtCharm: fairygui.GTextField;
				readonly txtLead: fairygui.GTextField;
				readonly txtFmName: fairygui.GRichTextField;
			}, 'conIsFitigue' | 'conFightFm', 't0'>;
			type FightHeadHeroBitmapLeftRender = StrictComponent<fairygui.GComponent, {
				readonly loaderHeroBg: fairygui.GLoader;
				readonly heroHeadRender: fairygui.GLoader;
				readonly loaderHeadBar: fairygui.GLoader;
				readonly loaderHeadAwake: fairygui.GLoader;
			}, 'conIsAwaken', 't0'>;
			type FightHeadHeroBitmapRightRender = StrictComponent<fairygui.GComponent, {
				readonly loaderHeroBg: fairygui.GLoader;
				readonly heroHeadRender: fairygui.GLoader;
				readonly loaderHeadBar: fairygui.GLoader;
				readonly loaderHeadAwake: fairygui.GLoader;
			}, 'conIsAwaken', 't0'>;
		}
		namespace Components.FightBtn {
			type FightSpeedBtn = StrictComponent<fairygui.GButton, {
				readonly txtSpeed: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			}, 'button' | 'conSpeed', undefined>;
			type FightSkipBtn = StrictComponent<fairygui.GButton, undefined, 'button' | 'conIsGray', undefined>;
			type FightPauseBtn = StrictComponent<fairygui.GButton, undefined, 'button' | 'pauseState', undefined>;
			type FightBackBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type FightLeftBackBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.FightBottom {
			type FightBottomUIView = StrictComponent<fairygui.GComponent, {
				readonly loaderRewardBg: fairygui.GImage;
				readonly btnReturn: FightUI.Components.FightBtn.FightLeftBackBtn;
				readonly btnSkip: FightUI.Components.FightBtn.FightSkipBtn;
				readonly btnSpeed: FightUI.Components.FightBtn.FightSpeedBtn;
				readonly btnPause: FightUI.Components.FightBtn.FightPauseBtn;
				readonly btnGroup: fairygui.GGroup;
			}, undefined, undefined>;
		}
		namespace Components.ReportLogView {
			type FightActionLogItem = StrictComponent<fairygui.GComponent, {
				readonly txtLog: fairygui.GTextField;
			}, undefined, undefined>;
			type FightReportView = StrictComponent<fairygui.GComponent, {
				readonly bigRoundIndexList: fairygui.GList;
				readonly roundLogList: fairygui.GList;
			}, undefined, undefined>;
			type FightRoundLogItem = StrictComponent<fairygui.GComponent, {
				readonly actionLogList: fairygui.GList;
				readonly roundName: fairygui.GTextField;
			}, undefined, undefined>;
			type RadioBtn2 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.FightProgress {
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
			}, 'redState', undefined>;
			type ProgressBar2 = StrictComponent<fairygui.GProgressBar, {
				readonly bg: fairygui.GImage;
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
		}
	}
	import __pkg__nrcjhm5d = FirstPay;
	namespace FirstPay {
		type FirstPayWindow = StrictComponent<fairygui.GComponent, {
			readonly rewardList: fairygui.GList;
			readonly heroChooseBtn: FirstPay.Components.HeroChooseBtn;
			readonly payBtn: FirstPay.Components.PayBtn;
			readonly heroShow: FirstPay.Components.HeroShowRes;
			readonly chooseList: fairygui.GList;
			readonly armyTalentBtn: FirstPay.Components.ArmyTalentBtn;
			readonly detailBtn: FirstPay.Components.HeroDetailsBtn;
			readonly btnClose: FirstPay.Components.BtnClose;
			readonly txtRewardDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly iconPoint: fairygui.GImage;
			readonly heroDesLeft: fairygui.GLoader;
			readonly heroDesRight: fairygui.GLoader;
			readonly heroNameDes: fairygui.GLoader;
			readonly heroName: fairygui.GLoader;
			readonly loaderQuality: fairygui.GLoader;
			readonly heroType: fairygui.GLoader;
			readonly hyperLink: fairygui.GRichTextField;
		}, 'conBtnState' | 'conPayState' | 'conHeroType', 't0'>;
		type HeroChooseWindow = StrictComponent<fairygui.GComponent, {
			readonly payBtn: FirstPay.Components.PayBtn;
			readonly heroChooseList: fairygui.GList;
			readonly txtRewardDes: fairygui.GRichTextField;
		}, 'conBtnState' | 'conState', undefined>;
		type HeroInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly loaderQuality: fairygui.GLoader;
			readonly loaderType: fairygui.GLoader;
			readonly imgAttr1: fairygui.GImage;
			readonly imgAttr2: fairygui.GImage;
			readonly imgAttr3: fairygui.GImage;
			readonly imgAttr4: fairygui.GImage;
			readonly loaderArmyFront: fairygui.GLoader;
			readonly loaderArmyLater: fairygui.GLoader;
			readonly listSkill: fairygui.GList;
			readonly txtWuli: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtZhili: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTongshuai: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtMeili: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtName: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			readonly txtArmyFront: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtArmyBack: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly imgTitle: fairygui.GLoader;
			readonly giftedList: fairygui.GList;
		}, 'conIsAwake', undefined>;
		type HeroArmyTalentWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly loaderQuality: fairygui.GLoader;
			readonly loaderType: fairygui.GLoader;
			readonly imgAttr1: fairygui.GImage;
			readonly imgAttr2: fairygui.GImage;
			readonly imgAttr3: fairygui.GImage;
			readonly imgAttr4: fairygui.GImage;
			readonly loaderArmyFront: fairygui.GLoader;
			readonly loaderArmyLater: fairygui.GLoader;
			readonly txtWuli: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtZhili: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTongshuai: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtMeili: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtName: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			readonly txtArmyFront: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtArmyBack: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly exclusiveTalent: FirstPay.Components.Renderer.ExclusiveTalent;
		}, undefined, undefined>;
		namespace Components {
			type HeroChooseBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type HeroShowRes = StrictComponent<fairygui.GButton, {
				readonly skeletonView: UILibHero.Components.SkeletonView;
			}, 'button' | 'conHero', undefined>;
			type PayBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type Tabs = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conRed', undefined>;
			type HeroDetailsBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
			}, 'button', undefined>;
			type BtnClose = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type ArmyTalentBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
			}, 'button', undefined>;
		}
		namespace Components.Renderer {
			type heroListRender = StrictComponent<fairygui.GButton, {
				readonly heroResHalf: fairygui.GLoader;
			}, 'button', undefined>;
			type HeroChooseRender = StrictComponent<fairygui.GButton, {
				readonly heroCheckBox: UILib.Components.button_checkbox.Button_Check4;
				readonly heroName: fairygui.GRichTextField;
				readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
			}, 'button', undefined>;
			type HeroGiftedRender = StrictComponent<fairygui.GComponent, {
				readonly point: fairygui.GLoader;
				readonly giftedDes: UILib.Components.fontTab.__cmpt__kyk1a3tljo;
			}, undefined, undefined>;
			type HeroInitSkillRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderHeroSkillLogo: fairygui.GLoader;
				readonly loaderArmyTalentLogo: fairygui.GLoader;
				readonly txtLv: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conType', undefined>;
			type ExclusiveTalent = StrictComponent<fairygui.GComponent, {
				readonly exclusiveList: fairygui.GList;
			}, undefined, undefined>;
			type NormalTalent = StrictComponent<fairygui.GComponent, {
				readonly listSkill: fairygui.GList;
			}, undefined, undefined>;
			type ExclusiveRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly skillName: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
				readonly txtUseTime: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtTalentDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtTalentDesMax: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conQuality', undefined>;
		}
	}
	import __pkg__jx50vhxw = FirstRecharge;
	namespace FirstRecharge {
		type FirstRechargeWindow = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GLoader;
			readonly jumpIcon: fairygui.GLoader;
			readonly bg2: fairygui.GLoader;
			readonly jumpEffect: fairygui.GGraph;
			readonly rewardList: fairygui.GList;
			readonly tagList: fairygui.GList;
			readonly bg3: fairygui.GLoader;
			readonly close: UILib.Components.btn.BtnClose2;
			readonly rechargeBtn: UILib.Components.btnAct.BtnAct2;
			readonly rechargeEffect: fairygui.GGraph;
			readonly effectClick: fairygui.GGraph;
		}, 'c1' | 'showType', 't0' | 't1'>;
		namespace Com {
			type TagBtn = StrictComponent<fairygui.GButton, {
				readonly textIcon: fairygui.GLoader;
				readonly textIconSelected: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type BtnOrang = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type AttrRender = StrictComponent<fairygui.GComponent, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__aignmjkl = FirstRechargePiggyBank;
	namespace FirstRechargePiggyBank {
		type FirstRechargePiggyBankWindow = StrictComponent<fairygui.GComponent, {
			readonly jumpIcon: fairygui.GLoader;
			readonly jumpEffect: fairygui.GGraph;
			readonly close: UILib.Components.btn.BtnClose5;
			readonly rechargeEffect: fairygui.GGraph;
			readonly piggyBankBtn: UILib.Components.btnAct.BtnAct2;
			readonly list_piggyBank: fairygui.GList;
			readonly txt_money: fairygui.GTextField;
			readonly txt_days: fairygui.GTextField;
			readonly txt_time: fairygui.GTextField;
			readonly txt_daysLater: fairygui.GTextField;
			readonly rewardList: fairygui.GList;
			readonly rechargeBtn: UILib.Components.btnAct.BtnAct2;
			readonly item_piggy: UILib.Components.renderer.RewardRender4;
			readonly txt_daysLaterRecharge: fairygui.GTextField;
			readonly item_precious: UILib.Components.renderer.RewardRender2;
			readonly tab_firstRecharge: FirstRechargePiggyBank.Com.FirstRechargePiggyBankTagBtn;
			readonly tab_piggyBank: FirstRechargePiggyBank.Com.FirstRechargePiggyBankTagBtn;
		}, 'c1' | 'showType' | 'showTab' | 'c_showPiggyTitle' | 'c_piggyIsOpen', 't0' | 't1'>;
		namespace Com {
			type FirstRechargePiggyBankTagBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'c_isRed', undefined>;
			type FirstRechargePiggyBankRender = StrictComponent<fairygui.GComponent, {
				readonly btn_needMoney: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly btn_money: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			}, 'c_achieve', undefined>;
		}
	}
	import __pkg__5v4igjaq = FixedConsume;
	namespace FixedConsume {
		type FixedConsumeSubView = StrictComponent<fairygui.GComponent, {
			readonly arrow: fairygui.GImage;
			readonly listRecharge: fairygui.GList;
			readonly txtNum: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
		}, undefined, undefined>;
		namespace Components {
			type FixedConsumeRender = StrictComponent<fairygui.GButton, {
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly listReward: fairygui.GList;
				readonly progressNum: UILib.Components.progressBar.ProgressBar2;
				readonly txtMoney: fairygui.GTextField;
			}, 'conState', undefined>;
			type BtnOrang = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type FixedRechargeRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly btnGet: UILib.Components.btn.BtnBig1;
				readonly txtNum: fairygui.GTextField;
			}, 'conState', undefined>;
		}
	}
	import __pkg__qqx78c6m = FixedOsRecharge;
	namespace FixedOsRecharge {
		type FixedOsRechargeSubView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly skill1Image: fairygui.GLoader;
			readonly skill2Image: fairygui.GLoader;
			readonly skill1Name: fairygui.GLoader;
			readonly skill2Name: fairygui.GLoader;
			readonly skill1Des: fairygui.GLoader;
			readonly skill2Des: fairygui.GLoader;
			readonly nameQuality: fairygui.GLoader;
			readonly heroQualtiy: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly txtName: fairygui.GTextField;
			readonly heroTitle: fairygui.GGroup;
			readonly arrow: fairygui.GImage;
			readonly listRecharge: fairygui.GList;
			readonly skill1Btn: FixedOsRecharge.Components.Btn;
			readonly skill2Btn: FixedOsRecharge.Components.Btn;
			readonly txtTime: fairygui.GTextField;
		}, 'c1', undefined>;
		namespace Components {
			type FixedOsRechargeRender = StrictComponent<fairygui.GComponent, {
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly btnGoto: UILib.Components.btnAct.BtnAct6;
				readonly firstReward: UILib.Components.renderer.RewardRenderForEffect1;
				readonly listReward: fairygui.GList;
				readonly txtMoney: fairygui.GTextField;
				readonly txtTimes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conState', undefined>;
			type Btn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
		}
	}
	import __pkg__88xvjnha = FixedRecharge;
	namespace FixedRecharge {
		type FixedRechargeSubView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly nameQuality: fairygui.GLoader;
			readonly heroQualtiy: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly heroTitle: fairygui.GGroup;
			readonly arrow: fairygui.GImage;
			readonly effect: fairygui.GGraph;
			readonly skillYLBtn: FixedRecharge.Components.Btn;
			readonly heroTFBtn: FixedRecharge.Components.Btn;
			readonly listRecharge: fairygui.GList;
			readonly txtName: fairygui.GTextField;
			readonly txtNum: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
			readonly des1: fairygui.GRichTextField;
		}, 'type', undefined>;
		namespace Components {
			type FixedRechargeRender = StrictComponent<fairygui.GComponent, {
				readonly targetValue: fairygui.GTextField;
				readonly txtMoney: fairygui.GTextField;
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly btnGoto: UILib.Components.btnAct.BtnAct6;
				readonly firstReward: UILib.Components.renderer.RewardRenderForEffect1;
				readonly listReward: fairygui.GList;
				readonly progressNum: UILib.Components.progressBar.ProgressBar2;
			}, 'conState' | 'type', undefined>;
			type Btn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace Components.button {
			type BtnSound = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type btnTitle = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsWear', undefined>;
		}
	}
	import __pkg__97scrtcg = FixedRechargeNew;
	namespace FixedRechargeNew {
		type FixedRechargeNewSubView = StrictComponent<fairygui.GComponent, {
			readonly iconBg: fairygui.GLoader;
			readonly iconTitle: fairygui.GLoader;
			readonly effect: fairygui.GGraph;
			readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTime: fairygui.GTextField;
			readonly listRecharge: fairygui.GList;
		}, 'type', undefined>;
		namespace Components {
			type Btn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type FixedRechargeNewRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtMoney: fairygui.GRichTextField;
				readonly progressNum: UILib.Components.progressBar.ProgressBar4;
				readonly firstReward: UILib.Components.renderer.RewardRenderForEffect1;
				readonly btnCz: UILib.Components.btnAct.BtnAct6;
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
			}, 'conState', undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__8i71s12z = Friend;
	namespace Friend {
		type FriendView = StrictComponent<fairygui.GComponent, {
			readonly listType: fairygui.GList;
			readonly btnApply: UILib.Components.btn.BtnSmall1;
			readonly btnSearch: UILib.Components.btn.BtnSmall1;
		}, 'conHaveApply', undefined>;
		type FriendApplyView = StrictComponent<fairygui.GComponent, {
			readonly listApply: fairygui.GList;
		}, 'conNull', undefined>;
		type FriendSearchView = StrictComponent<fairygui.GComponent, {
			readonly btnClear: Friend.Components.BtnClear;
			readonly btnSearch: UILib.Components.btn.BtnBig1;
			readonly txtInput: fairygui.GRichTextField;
			readonly friendRender: Friend.Components.FriendRender;
		}, undefined, undefined>;
		type FriendInviteWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listFriend: fairygui.GList;
		}, 'conNull', undefined>;
		namespace Components {
			type FriendListRender = StrictComponent<fairygui.GButton, {
				readonly btnArrow: UILib.Components.btnArrows.BtnArrows1;
				readonly listFriend: fairygui.GList;
				readonly title: fairygui.GTextField;
				readonly txtNum: fairygui.GTextField;
			}, 'conState', undefined>;
			type FriendRender = StrictComponent<fairygui.GButton, {
				readonly imgState: fairygui.GImage;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly btnIgnore: UILib.Components.btn.BtnSmall1;
				readonly btnAgree: UILib.Components.btn.BtnSmall1;
				readonly btnAdd: UILib.Components.btn.BtnSmall1;
				readonly txtName: fairygui.GTextField;
				readonly txtFight: fairygui.GTextField;
				readonly txtLevel: fairygui.GTextField;
				readonly txtCountry: fairygui.GTextField;
				readonly txtState: fairygui.GTextField;
			}, 'conState' | 'conIsFriend' | 'conIsRed', undefined>;
			type BtnClear = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type FriendInviteRender = StrictComponent<fairygui.GComponent, {
				readonly loaderHead: fairygui.GLoader;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly btnInvite: UILib.Components.btn.BtnBig1;
				readonly txtName: fairygui.GRichTextField;
				readonly txtFight: fairygui.GTextField;
			}, 'conState', undefined>;
		}
	}
	import __pkg__tz6c5jsg = FriendInvitation;
	namespace FriendInvitation {
		type FriendInvitationSubView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly topBg: fairygui.GLoader;
			readonly fxTip: fairygui.GLoader;
			readonly yqTip: fairygui.GLoader;
			readonly invitationTabBtn: FriendInvitation.Components.FriendInvitationTabBtn;
			readonly shareTabBtn: FriendInvitation.Components.FriendInvitationTabBtn;
			readonly shareBtn: UILib.Components.btnAct.BtnAct4;
			readonly invitationBtn: UILib.Components.btnAct.BtnAct4;
			readonly invitationCom: FriendInvitation.FriendInvitationSubCom;
			readonly shareCom: FriendInvitation.FriendInvitationShareSubCom;
			readonly friendStr: fairygui.GRichTextField;
		}, 'shareState', undefined>;
		type FriendInvitationShareWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly copyBtn: UILib.Components.btn.BtnBig1;
			readonly goToList: fairygui.GList;
			readonly linkStr: fairygui.GTextField;
			readonly graph: fairygui.GGraph;
		}, undefined, undefined>;
		type FriendInvitationSubCom = StrictComponent<fairygui.GComponent, {
			readonly taskList: fairygui.GList;
		}, undefined, undefined>;
		type FriendInvitationShareSubCom = StrictComponent<fairygui.GComponent, {
			readonly shareList: fairygui.GList;
			readonly shareTip: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Components {
			type FriendInvitationTaskRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly rewardList: fairygui.GList;
				readonly receiveBtn: UILib.Components.btn.BtnSmall4;
				readonly taskDes: fairygui.GRichTextField;
				readonly taskCon: fairygui.GRichTextField;
			}, 'taskState', undefined>;
			type FriendInvitationGoToRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type FriendInvitationTabBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
		}
	}
	import __pkg__81chggkw = FuncDescription;
	namespace FuncDescription {
		type FuncDescriptionWindow = StrictComponent<fairygui.GComponent, {
			readonly funcNameLoader: fairygui.GLoader;
			readonly funcTitleGroup: fairygui.GGroup;
			readonly infoList: fairygui.GList;
			readonly localDes: fairygui.GRichTextField;
			readonly rewardList: fairygui.GList;
			readonly receiveBtn: UILib.Components.btn.BtnSmall4;
			readonly mask: fairygui.GGraph;
			readonly tagListCom: FuncDescription.Com.TagsCom;
			readonly taskList: fairygui.GList;
			readonly close: UILib.Components.btn.BtnWindowClose;
		}, 'lockState' | 'reseiveState', 'first' | 'change'>;
		namespace Com {
			type TagBtnRender = StrictComponent<fairygui.GButton, {
				readonly iconLoader: fairygui.GLoader;
				readonly titleText: fairygui.GLoader;
				readonly specialText: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly finishImage: fairygui.GImage;
				readonly desTxt: fairygui.GRichTextField;
			}, 'button' | 'c1', undefined>;
			type FuncTaskRender = StrictComponent<fairygui.GButton, {
				readonly progressBar: UILib.Components.progressBar.ProgressBar2;
				readonly value: fairygui.GRichTextField;
				readonly taskTitle: fairygui.GRichTextField;
				readonly gotoBtn: UILib.Components.btn.BtnSmall2;
			}, 'state', undefined>;
			type TagsCom = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type ProgressBarBlue = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type LoaderCom = StrictComponent<fairygui.GComponent, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type DesCom = StrictComponent<fairygui.GComponent, {
				readonly funcDes: fairygui.GRichTextField;
			}, undefined, undefined>;
			type FuncInfoRender = StrictComponent<fairygui.GComponent, {
				readonly com1: FuncDescription.Com.DesCom;
				readonly com2: FuncDescription.Com.LoaderCom;
			}, undefined, undefined>;
		}
	}
	import __pkg__ltyfrukf = FuncExplain;
	namespace FuncExplain {
		type FuncExplainWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly txtContent: fairygui.GRichTextField;
		}, undefined, undefined>;
	}
	
	import __pkg__h52n2tkv = FuncNotic;
	namespace FuncNotic {
		type FuncNoticWindow = StrictComponent<fairygui.GComponent, {
			readonly listCom: FuncNotic.Components.funcNoticeListCom;
			readonly funcBtn: FuncNotic.Components.Button_Radio0;
			readonly activityBtn: FuncNotic.Components.Button_Radio0;
			readonly close: FuncNotic.Components.BtnWindowClose;
			readonly downArrow: fairygui.GImage;
			readonly upArrow: fairygui.GImage;
		}, 'c1', undefined>;
		type FuncNoticeView = StrictComponent<fairygui.GComponent, {
			readonly listType: fairygui.GList;
			readonly listTask: fairygui.GList;
		}, 'conType', undefined>;
		type FuncNoticeDescWindow = StrictComponent<fairygui.GComponent, {
			readonly listFunc: fairygui.GList;
			readonly close: UILib.Components.btn.BtnWindowClose;
			readonly txtDesc: fairygui.GRichTextField;
			readonly txtTitle: fairygui.GTextField;
			readonly listReward: fairygui.GList;
			readonly btnGetInto: UILib.Components.btn.BtnSmall4;
			readonly btnGet: UILib.Components.btn.BtnSmall2;
		}, 'conButton' | 'conType', undefined>;
		namespace Components {
			type funcNoticeListCom = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type FuncNoticRender2 = StrictComponent<fairygui.GButton, {
				readonly clickBtn: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly titleText: UILib.Components.fontTab.__cmpt__f73xa3tlhs;
				readonly titleIcon: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
				readonly desName1: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
				readonly icon: fairygui.GLoader;
				readonly des1: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly desName2: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly des2: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly rewardIcon: UILib.Components.renderer.RewardRender4;
				readonly canReceiveEffect: fairygui.GImage;
				readonly canReceiveBtn: fairygui.GLoader;
				readonly unlockAwardImage: fairygui.GImage;
				readonly receiveImage: fairygui.GImage;
			}, 'c1', undefined>;
			type Btn3 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnWindowClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type Button_Radio0 = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type RadioBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsCanRed' | 'conType', undefined>;
			type FuncNoticeRender = StrictComponent<fairygui.GButton, {
				readonly listReward: fairygui.GList;
				readonly btnGet: FuncNotic.Components.ButtonDesc;
				readonly redPoint: fairygui.GImage;
				readonly txtName: fairygui.GTextField;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conButton' | 'conIsRed' | 'conType', 't0'>;
			type FuncNoticeDescRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly txtDesc: fairygui.GRichTextField;
			}, 'conIsLeft' | 'conIsFirst', undefined>;
			type ButtonDesc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
			}, 'button' | 'conIsGary', undefined>;
		}
	}
	import __pkg__mvcdlp1x = FuncOpen;
	namespace FuncOpen {
		type FuncOpenWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderRes: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6u;
		}, undefined, 'Loop' | 'active'>;
	}
	import __pkg__swwf41wv = Fund;
	namespace Fund {
		type FundView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly tag1: Fund.Components.ChooseListBtn;
			readonly tag2: Fund.Components.ChooseListBtn;
		}, 'c1', undefined>;
		type TipsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly cancel: UILib.Components.btn.BtnBig2;
			readonly ok: UILib.Components.btn.BtnBig1;
			readonly close: UILib.Components.btn.BtnClose;
			readonly darkBg: fairygui.GImage;
			readonly txtInfo: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Components {
			type ChooseListBtn = StrictComponent<fairygui.GButton, {
				readonly iconBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conType', undefined>;
			type FundRewardRender = StrictComponent<fairygui.GComponent, {
				readonly txtDay: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly rewardList: fairygui.GList;
				readonly btnGet: UILib.Components.btn.BtnSmall1;
			}, undefined, undefined>;
		}
	}
	import __pkg__sjidifbl = FundGrowUp;
	namespace FundGrowUp {
		type FundGrowUpSubView = StrictComponent<fairygui.GComponent, {
			readonly arrow: fairygui.GImage;
			readonly buyBtn: UILib.Components.btnAct.BtnAct2;
			readonly rewardList: fairygui.GList;
			readonly txtTimeLeft: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
		}, 'conTime', undefined>;
		type FundGrowUpTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly cancel: UILib.Components.btn.BtnBig2;
			readonly ok: UILib.Components.btn.BtnBig1;
			readonly close: UILib.Components.btn.BtnClose;
			readonly darkBg: fairygui.GImage;
			readonly txtInfo: fairygui.GRichTextField;
		}, 'conShowSecond', undefined>;
		namespace Components {
			type FundGrowUpBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type FundGrowUpRewardRender = StrictComponent<fairygui.GComponent, {
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly rewardList: fairygui.GList;
				readonly daytxt: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			}, 'conState', undefined>;
		}
	}
	import __pkg__scsozbp1 = FundLord;
	namespace FundLord {
		type FundLordSubView = StrictComponent<fairygui.GComponent, {
			readonly buyBtn: UILib.Components.btnAct.BtnAct2_1;
			readonly rewardList: fairygui.GList;
			readonly txtRechargeLimit: UILib.Components.fontTab_richText.__cmpt__jd7wa3tlqk;
			readonly txtRechargeNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
			readonly txtTimeLeft: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			readonly arrow: fairygui.GImage;
		}, 'conTime', undefined>;
		namespace Components {
			type FundLordBuyBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type FundLordRewardRender = StrictComponent<fairygui.GComponent, {
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly rewardList: fairygui.GList;
				readonly txtCondition: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			}, 'conState', undefined>;
			type buyBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type FundGrowUpRewardsCom = StrictComponent<fairygui.GComponent, {
				readonly contentArea: UILib.Components.frame.Frame4;
				readonly ok: UILib.Components.btn.BtnBig1;
				readonly rewardShowList: fairygui.GList;
			}, 'conShowSecond', undefined>;
		}
	}
	import __pkg__l9ddatp9 = GMRes;
	namespace GMRes {
		type GmWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listGm: fairygui.GList;
			readonly btn0: UILib.Components.button_radio.Button_Radio4;
			readonly btn1: UILib.Components.button_radio.Button_Radio4;
			readonly btn3: UILib.Components.button_radio.Button_Radio4;
			readonly btn4: UILib.Components.button_radio.Button_Radio4;
			readonly btn5: UILib.Components.button_radio.Button_Radio4;
			readonly btn6: UILib.Components.button_radio.Button_Radio4;
			readonly btn7: UILib.Components.button_radio.Button_Radio4;
			readonly btn2: UILib.Components.button_radio.Button_Radio4;
			readonly txtPut1: fairygui.GTextField;
			readonly txtPutTimeH: GMRes.Components.ComboBox1;
			readonly txtPutTimeM: GMRes.Components.ComboBox1;
			readonly txtPutTimeS: GMRes.Components.ComboBox1;
			readonly btnSend: UILib.Components.btn.BtnSmall1;
			readonly btnResetCity: UILib.Components.btn.BtnSmall1;
			readonly btnOpenQianduan: UILib.Components.button_checkbox.Button_Check1;
		}, 'conType' | 'conIsShowTime' | 'conIsQianduan', undefined>;
		namespace Components {
			type GmRender = StrictComponent<fairygui.GButton, {
				readonly btnSend: UILib.Components.btn.BtnSmall1;
				readonly txtTitle: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
				readonly txtPut1: fairygui.GTextField;
				readonly txtPut2: fairygui.GTextField;
				readonly txtPut3: fairygui.GTextField;
				readonly txtPara: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpr;
				readonly txtExa: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly comChoose: GMRes.Components.ComboBox2;
			}, 'conType' | 'conIsChoose', undefined>;
			type ComboBox1 = StrictComponent<fairygui.GComboBox, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type ComboBox1_popup = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type ComboBox1_item = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type ComboBox2 = StrictComponent<fairygui.GComboBox, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type ProtocolCheckRenderer = StrictComponent<fairygui.GComponent, undefined, 'button', undefined>;
		}
	}
	import __pkg__w3ltnpkd = GodArmsLuckDraw;
	namespace GodArmsLuckDraw {
		type GodArmsLuckDrawView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly luckDrawSubView: GodArmsLuckDraw.GodArmsLuckDrawSubView;
			readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly luckCountTip: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly rewardList: fairygui.GList;
			readonly proBar: GodArmsLuckDraw.Components.GodProgressBarYellow;
			readonly btnReceive: UILib.Components.btn.BtnSmall4;
			readonly skipAniBtn: GodArmsLuckDraw.Components.GodArmsLuckDrawCheck;
			readonly luckOne: UILib.Components.renderer.ConsumeRender;
			readonly luckTwo: UILib.Components.renderer.ConsumeRender;
			readonly luckBtnOne: UILib.Components.btn.BtnBig1;
			readonly luckBtnTwo: UILib.Components.btn.BtnBig4;
			readonly luckLvList: fairygui.GList;
			readonly txtLuckCount: fairygui.GRichTextField;
			readonly txtItemCount: fairygui.GRichTextField;
		}, undefined, 't0'>;
		type GodArmsLuckDrawSubView = StrictComponent<fairygui.GComponent, {
			readonly reward0: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward1: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward2: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward3: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward4: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward5: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward6: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward7: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward8: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward9: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward10: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly reward11: GodArmsLuckDraw.Components.GodArmsLuckDrawRender;
			readonly graphSelectAni: fairygui.GGraph;
			readonly graphRotate: fairygui.GImage;
		}, undefined, 't0' | 't1'>;
		namespace Components {
			type GodArmsLuckDrawRender = StrictComponent<fairygui.GComponent, {
				readonly iconQuality: fairygui.GLoader;
				readonly imgIcon: fairygui.GLoader;
				readonly graphUpAni: fairygui.GGraph;
				readonly graphSelectAni: fairygui.GGraph;
				readonly txtCount: fairygui.GRichTextField;
			}, undefined, undefined>;
			type GodArmsLuckDrawLvRender = StrictComponent<fairygui.GButton, {
				readonly titleLv: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			}, undefined, undefined>;
			type GodArmsLuckDrawCheck = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlhs;
			}, 'button', undefined>;
			type GodProgressBarYellow = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__dzgftvxm = GodHeroTrial;
	namespace GodHeroTrial {
		type GodHeroTrialWindow = StrictComponent<fairygui.GComponent, {
			readonly awakeEffect: GodHeroTrial.Compoents.HeroAwakeEffectCom;
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly loaderQuality: fairygui.GLoader;
			readonly loaderName: fairygui.GLoader;
			readonly btnSkill: fairygui.GLoader;
			readonly skillIcon: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly graphAniQuality: fairygui.GGraph;
			readonly rewardList: fairygui.GList;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly btnOk: UILib.Components.btn.BtnBig4;
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
			readonly btnLelf: UILib.Components.btnArrows.BtnArrows2;
			readonly btnRight: UILib.Components.btnArrows.BtnArrows2;
		}, 'c1', 'PageDown' | 'PageUp'>;
		type GodHeroTrialFightView = StrictComponent<fairygui.GComponent, {
			readonly btnGo: UILib.Components.btn.BtnBig4;
			readonly listMyHero: fairygui.GList;
			readonly listNPCHero: fairygui.GList;
			readonly txtMyTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNPCTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		type TrialSettlementWindow = StrictComponent<fairygui.GComponent, {
			readonly listMyHero: fairygui.GList;
			readonly listNPCHero: fairygui.GList;
			readonly loaderWin: fairygui.GLoader;
			readonly progressEnemy: GodHeroTrial.Render.ProGodHeroHP;
			readonly progressMy: GodHeroTrial.Render.ProGodHeroHP;
			readonly txtRoleName: fairygui.GTextField;
			readonly txtEnemyName: fairygui.GRichTextField;
			readonly txtRoleWin: fairygui.GTextField;
			readonly txtEnemyWin: fairygui.GTextField;
		}, 'isWin', undefined>;
		namespace Render {
			type GodHeroTrialRender = StrictComponent<fairygui.GButton, {
				readonly loaderIconDi: fairygui.GLoader;
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly progressFront: GodHeroTrial.Render.ProgressArmy_H;
				readonly progressBack: GodHeroTrial.Render.ProgressArmy_H;
				readonly txtFight: UILibHero.Components.fight.FightPowerSmall;
				readonly txtLv: fairygui.GTextField;
			}, 'conIsEmpty' | 'button' | 'isWin' | 'isMy', undefined>;
			type ProGodHeroHP = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'c1', undefined>;
			type ProgressArmy_H = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly txtMaxCount: fairygui.GRichTextField;
				readonly txtCurCount: fairygui.GTextField;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Compoents {
			type HeroAwakeEffectCom = StrictComponent<fairygui.GComponent, undefined, undefined, 'Looplight'>;
		}
	}
	import __pkg__4fykwb4m = GodSoldier;
	namespace GodSoldier {
		type GodSoldierView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly effect: fairygui.GGraph;
			readonly equipList: fairygui.GList;
			readonly btn4: GodSoldier.Components.GodSoldierBtn;
			readonly btn3: GodSoldier.Components.GodSoldierBtn;
			readonly btn2: GodSoldier.Components.GodSoldierBtn;
			readonly btn1: GodSoldier.Components.TitleBtn;
			readonly btn0: GodSoldier.Components.TitleBtn;
			readonly btn5: GodSoldier.Components.TitleBtn;
		}, 'subCom' | 'wearCon' | 'rechargeCon', 't0'>;
		type GodSoldierMedalBagWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btn1: UILib.Components.btn.BtnBig1;
			readonly btn0: UILib.Components.btn.BtnBig1;
			readonly btn2: UILib.Components.btn.BtnBig1;
			readonly btn3: UILib.Components.btn.BtnBig1;
			readonly btn7: UILib.Components.btn.BtnBig1;
			readonly btn8: UILib.Components.btn.BtnBig1;
			readonly sxTxt: fairygui.GTextField;
			readonly sxName: fairygui.GTextField;
			readonly equipList: fairygui.GList;
			readonly sxBtn: fairygui.GButton;
			readonly redPoint: fairygui.GImage;
			readonly downList: fairygui.GList;
			readonly bg1: fairygui.GImage;
			readonly newItem: UILib.Components.renderer.RewardRender2;
			readonly currList: fairygui.GList;
			readonly bg0: fairygui.GImage;
			readonly currItem: UILib.Components.renderer.RewardRender2;
			readonly title: fairygui.GRichTextField;
		}, 'downCon' | 'currCon' | 'btnCon' | 'sysCon' | 'sxCon' | 'isOne' | 'isPd', undefined>;
		type MedalWarehouseWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly medalList: fairygui.GList;
			readonly btn1: UILib.Components.btn.BtnBig1;
			readonly btn2: UILib.Components.btn.BtnBig4;
			readonly btn3: UILib.Components.btn.BtnBig3;
			readonly txtName: fairygui.GTextField;
			readonly txtDescF: fairygui.GRichTextField;
			readonly sxTxt: fairygui.GTextField;
			readonly sxName: fairygui.GTextField;
			readonly sxBtn: fairygui.GButton;
		}, 'btnCon' | 'sxCon' | 'isCon', undefined>;
		type SynthesisPreviewWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly viewBox: GodSoldier.Components.SyntheslsView;
			readonly btn1: UILib.Components.btn.BtnBig1;
		}, undefined, undefined>;
		type GodSoldierScreenWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly txtList: fairygui.GList;
		}, undefined, undefined>;
		type GodSoldierGetWayWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly rewardRender: UILib.Components.renderer.RewardRender1;
			readonly imgArrow: fairygui.GImage;
			readonly listGetWay: fairygui.GList;
			readonly txtName: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			readonly currList: fairygui.GList;
			readonly titleTxt: fairygui.GRichTextField;
		}, undefined, undefined>;
		type GodSoldierSuitWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnName: GodSoldier.Components.BtnSuit;
			readonly btnUpgrade: UILib.Components.btn.BtnBig1;
			readonly listMedalSlot: fairygui.GList;
			readonly listAttr: fairygui.GList;
			readonly imgMax: fairygui.GImage;
			readonly txtTitle: fairygui.GRichTextField;
		}, 'starCon' | 'isMax', undefined>;
		type GodSoldierSkillWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly skillGrap: fairygui.GGraph;
		}, undefined, undefined>;
		namespace Render {
			type RechargeSlotRender = StrictComponent<fairygui.GButton, {
				readonly iconBg: fairygui.GLoader;
				readonly select: fairygui.GLoader;
				readonly iconImg: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly effect: fairygui.GGraph;
				readonly jihuo: fairygui.GLoader;
			}, 'button' | 'isRed' | 'chongzhiCon', 't0'>;
			type GodSoldierAttRender = StrictComponent<fairygui.GComponent, {
				readonly txt: fairygui.GRichTextField;
				readonly txtNum: fairygui.GRichTextField;
			}, undefined, undefined>;
			type GodSoldierMaxEquip = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly loaderTreasureQuality: fairygui.GLoader;
				readonly txtName: fairygui.GRichTextField;
				readonly imgIcon: fairygui.GLoader;
				readonly qualityImg: fairygui.GLoader;
				readonly headIcon: GodSoldier.Render.GodSoldierHead;
			}, 'isHeroCon' | 'starCon', 't0' | 't1'>;
			type MedalSlot = StrictComponent<fairygui.GButton, {
				readonly nameBg: fairygui.GImage;
				readonly txtName: fairygui.GRichTextField;
				readonly bg1: fairygui.GImage;
				readonly item: UILib.Components.renderer.RewardRender2;
				readonly txt: fairygui.GTextField;
				readonly redPoint: fairygui.GImage;
			}, 'isNoCon' | 'button' | 'suoCon' | 'isRed', undefined>;
			type MedalIcon = StrictComponent<fairygui.GButton, {
				readonly item: UILib.Components.renderer.RewardRender2;
				readonly txtName: fairygui.GRichTextField;
			}, 'button' | 'isNo' | 'isStrong', undefined>;
			type ScreenItem = StrictComponent<fairygui.GButton, {
				readonly txt: fairygui.GTextField;
			}, undefined, undefined>;
			type GodSoldierUpLvAttRender = StrictComponent<fairygui.GComponent, {
				readonly txt: fairygui.GRichTextField;
				readonly txtNum: fairygui.GRichTextField;
				readonly effect: fairygui.GGraph;
			}, 'isNew', undefined>;
			type GodSoldierRechargeAttRender = StrictComponent<fairygui.GComponent, {
				readonly txt: fairygui.GTextField;
				readonly txtNum: fairygui.GTextField;
			}, 'isNew', undefined>;
			type GodSoldierEquip = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly loaderTreasureQuality: fairygui.GLoader;
				readonly txtName: fairygui.GRichTextField;
				readonly imgIcon: fairygui.GLoader;
				readonly qualityImg: fairygui.GLoader;
				readonly loaderBg: fairygui.GLoader;
				readonly head: GodSoldier.Components.CircularHead;
				readonly loaderFrame: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'isHeroCon' | 'button' | 'isOpenCon' | 'starCon' | 'isRed', undefined>;
			type GodSoldierHead = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly head: GodSoldier.Components.CircularHead;
				readonly loaderFrame: fairygui.GLoader;
			}, undefined, undefined>;
			type GodSoldierImprintRender = StrictComponent<fairygui.GComponent, {
				readonly nameTxt: fairygui.GTextField;
				readonly numTxt: fairygui.GTextField;
				readonly maxTxt: fairygui.GTextField;
				readonly noTxt: fairygui.GTextField;
			}, 'isMax' | 'isNoOpen', undefined>;
			type GodSoldierSuitAttrRender = StrictComponent<fairygui.GComponent, {
				readonly imgMax: fairygui.GImage;
				readonly imgNext: fairygui.GImage;
				readonly imgCur: fairygui.GImage;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly txtAttrCur: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttrNext: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttrMax: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtCondition: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conState', undefined>;
		}
		namespace subView {
			type GodSoldierUpStarSubView = StrictComponent<fairygui.GComponent, {
				readonly currList: fairygui.GList;
				readonly currStage: fairygui.GTextField;
				readonly downList: fairygui.GList;
				readonly downStage: fairygui.GTextField;
				readonly maxEquip: GodSoldier.Render.GodSoldierMaxEquip;
				readonly effect: fairygui.GGraph;
				readonly btnCost: UILib.Components.renderer.ConsumeRender;
				readonly btnUpGrade2: UILib.Components.btn.BtnBig1;
				readonly txtTips: fairygui.GTextField;
			}, 'currStar' | 'downStar' | 'maxStar' | 'isNo' | 'btnCon', 't0'>;
			type GodSoldierInlaySubView = StrictComponent<fairygui.GComponent, {
				readonly attList: fairygui.GList;
				readonly bzBtn: GodSoldier.Components.Button1;
				readonly maxEquip: GodSoldier.Render.GodSoldierMaxEquip;
				readonly btn_skillAni: UILib.Components.btn.BtnCutDown;
				readonly medalSlotList: fairygui.GList;
				readonly txtTips: fairygui.GRichTextField;
				readonly btn5: UILib.Components.btn.BtnCutDown;
			}, undefined, 't0'>;
			type GodSoldierBasicsSubView = StrictComponent<fairygui.GComponent, {
				readonly txtNum: fairygui.GRichTextField;
				readonly attList: fairygui.GList;
				readonly item0: GodSoldier.Render.RechargeSlotRender;
				readonly item1: GodSoldier.Render.RechargeSlotRender;
				readonly item2: GodSoldier.Render.RechargeSlotRender;
				readonly item3: GodSoldier.Render.RechargeSlotRender;
				readonly item4: GodSoldier.Render.RechargeSlotRender;
				readonly btnActivate: UILib.Components.btnAct.BtnAct2;
				readonly btnRecharge: UILib.Components.btnAct.BtnAct2;
				readonly nameImg: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
			}, 'currStar' | 'rechargeCon', undefined>;
			type GodSoldierImprintSubView = StrictComponent<fairygui.GComponent, {
				readonly attList1: fairygui.GList;
				readonly equipList: fairygui.GList;
				readonly stageTxt: fairygui.GRichTextField;
				readonly btnUpGrade: UILib.Components.btn.BtnBig3;
				readonly stageTips1: fairygui.GRichTextField;
				readonly attList0: fairygui.GList;
				readonly stageTips0: fairygui.GRichTextField;
				readonly stageTxt0: fairygui.GRichTextField;
				readonly effect: fairygui.GGraph;
				readonly stageTxt: fairygui.GRichTextField;
				readonly stageTxt1: fairygui.GRichTextField;
			}, 'isMax', undefined>;
		}
		namespace Components {
			type CircularHead = StrictComponent<fairygui.GComponent, {
				readonly iconImg: fairygui.GLoader;
			}, undefined, undefined>;
			type SyntheslsView = StrictComponent<fairygui.GComponent, {
				readonly upList: fairygui.GList;
				readonly downList: fairygui.GList;
			}, undefined, undefined>;
			type GodSoldierBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type GodSoldierSuitDesCom = StrictComponent<fairygui.GComponent, {
				readonly curDes: GodSoldier.Components.GodSoldierSuitDesRender;
				readonly nextDes: GodSoldier.Components.GodSoldierSuitDesRender;
				readonly advanceDes: GodSoldier.Components.GodSoldierSuitDesRender;
			}, 'conHaveNext' | 'conHaveAdvance', undefined>;
			type GodSoldierSuitDesRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly txtName: fairygui.GRichTextField;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type TitleBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'isRed', undefined>;
			type GodSoldierSuitItem = StrictComponent<fairygui.GButton, {
				readonly txtDes: fairygui.GRichTextField;
				readonly iconImg: fairygui.GLoader;
			}, undefined, undefined>;
			type Button1 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnSuit = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp6;
			}, 'button', undefined>;
		}
	}
	import __pkg__tml60bpy = GotoPalace;
	namespace GotoPalace {
		type GotoPalaceWindow = StrictComponent<fairygui.GComponent, {
			readonly bgLoader: fairygui.GLoader;
			readonly okBtn: GotoPalace.BtnCommon1;
			readonly goBtn: GotoPalace.BtnCommon1;
			readonly closeBtn: GotoPalace.MiniMapLevelClose;
			readonly textOpen: fairygui.GRichTextField;
		}, 'con', undefined>;
		type MiniMapLevelClose = StrictComponent<fairygui.GButton, {
			readonly icon: fairygui.GLoader;
		}, 'button', undefined>;
		type BtnCommon1 = StrictComponent<fairygui.GButton, {
			readonly title: fairygui.GTextField;
		}, 'button', undefined>;
	}
	import __pkg__u25gybpw = Guide;
	namespace Guide {
		type GuideView = StrictComponent<fairygui.GComponent, {
			readonly guideBgCom: Guide.Components.GuideBgCom;
			readonly btnCloseGuide: UILib.Components.btn.BtnBig1;
			readonly btnDoCustom: UILib.Components.btn.BtnBig1;
			readonly btnAutoGuide: UILib.Components.btn.BtnBig1;
			readonly btnCloseForceGuide: UILib.Components.btn.BtnBig1;
			readonly imgBg: fairygui.GGraph;
			readonly txtInput: fairygui.GTextField;
			readonly guideGroup: fairygui.GGroup;
		}, undefined, undefined>;
		namespace Components {
			type GuideDialogView = StrictComponent<fairygui.GComponent, {
				readonly modalLayer: fairygui.GGraph;
				readonly maskCom: Guide.Components.GuideDialogMaskView;
				readonly nextStep: Guide.Components.NextStep;
				readonly txtHeroName: fairygui.GTextField;
				readonly txtDialogue: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpy;
				readonly touchLayer: fairygui.GGraph;
				readonly btnCom: Guide.Components.BtnCom;
				readonly btnSkip: UILib.Components.btn.BtnSmall1;
			}, 'conDir' | 'conBgType', 'Fadein' | 'Fadeout'>;
			type GuideMaskView = StrictComponent<fairygui.GComponent, {
				readonly maskCom: Guide.Components.GuideMaskCom;
				readonly loaderShp: fairygui.GLoader;
				readonly aniCom: Guide.Components.GuideMaskAni;
			}, 'conMasktype', undefined>;
			type GuideHolderView = StrictComponent<fairygui.GComponent, {
				readonly touchLayer: fairygui.GGraph;
				readonly modalLayer: fairygui.GGraph;
			}, undefined, undefined>;
			type NextStep = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type GuideTextCom = StrictComponent<fairygui.GComponent, {
				readonly txtGuide: fairygui.GRichTextField;
			}, undefined, undefined>;
			type GuideMaskAni = StrictComponent<fairygui.GComponent, undefined, 'conType', 'tCircle' | 'tRect'>;
			type GuideCloseWindowView = StrictComponent<fairygui.GComponent, {
				readonly touchLayer: fairygui.GGraph;
			}, undefined, undefined>;
			type GuideTipCom = StrictComponent<fairygui.GComponent, {
				readonly txtSpecial: fairygui.GRichTextField;
			}, 'conDir', 't0'>;
			type GuideBgCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderBgLast: fairygui.GLoader;
			}, undefined, 't0'>;
			type GuideDialogSkeCom = StrictComponent<fairygui.GComponent, {
				readonly skeletonHoldor: UILibHero.Components.SkeletonView;
			}, undefined, undefined>;
			type GuideMiniDialogSkeCom = StrictComponent<fairygui.GComponent, {
				readonly skeletonHoldor: UILibHero.Components.SkeletonView;
			}, undefined, 't0' | 't1'>;
			type GuideMiniDialogView = StrictComponent<fairygui.GComponent, {
				readonly modalLayer: fairygui.GGraph;
				readonly skeCom: Guide.Components.GuideMiniDialogSkeCom;
				readonly nextStep: Guide.Components.NextStep;
				readonly txtHeroName: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
				readonly txtDialogue: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly touchLayer: fairygui.GGraph;
				readonly btnOption0: Guide.Components.BtnTab;
				readonly btnOption1: Guide.Components.BtnTab;
				readonly btnOption2: Guide.Components.BtnTab;
				readonly groupBtn: fairygui.GGroup;
				readonly btnSkip: UILib.Components.btn.BtnSmall1;
			}, 'conDir', 't0' | 't1'>;
			type GuideMaskCom = StrictComponent<fairygui.GComponent, {
				readonly maskHolder: fairygui.GGraph;
				readonly imgBg: fairygui.GGraph;
				readonly graphRect: fairygui.GGraph;
				readonly graphCircle: fairygui.GGraph;
			}, 'conMaskType', undefined>;
			type GuideFinger = StrictComponent<fairygui.GComponent, {
				readonly imgFinger: fairygui.GImage;
				readonly imgArrow: fairygui.GImage;
				readonly txtGuideCom: Guide.Components.GuideTextCom;
				readonly bigCorner1: Guide.Components.GuideCornerBig;
				readonly bigCorner2: Guide.Components.GuideCornerBig;
				readonly smallCorner1: Guide.Components.GuideCornerSmall;
				readonly smallCorner2: Guide.Components.GuideCornerSmall;
				readonly smallCorner4: Guide.Components.GuideCornerSmall;
				readonly smallCorner3: Guide.Components.GuideCornerSmall;
			}, 'conMasktype' | 'conFontState', 'tFinger' | 'rect' | 'corner' | 'circle'>;
			type GuideCornerBig = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type GuideCornerSmall = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type BtnTab = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnCom = StrictComponent<fairygui.GComponent, {
				readonly btnOption0: Guide.Components.BtnTab;
				readonly btnOption1: Guide.Components.BtnTab;
				readonly btnOption2: Guide.Components.BtnTab;
			}, undefined, 't0' | 't1'>;
			type GuideDialogMaskView = StrictComponent<fairygui.GComponent, {
				readonly skeCom: Guide.Components.GuideDialogSkeCom;
			}, 'conBgType', 'Fadein' | 'Fadeout'>;
		}
	}
	import __pkg__attx70zd = GuideCreateName;
	namespace GuideCreateName {
		type GuideCreateNameWindow = StrictComponent<fairygui.GComponent, {
			readonly graphAni: fairygui.GGraph;
			readonly btnRandom: GuideCreateName.Components.BtnRandom;
			readonly btnOk: UILib.Components.btnAct.BtnAct2;
			readonly txtInput: fairygui.GTextField;
		}, undefined, 't0' | 't1'>;
		namespace Components {
			type BtnRandom = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
	}
	import __pkg__wgbg12ls = GuideReward;
	namespace GuideReward {
		type GuideRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly graphAniParticle: fairygui.GGraph;
			readonly listReward: fairygui.GList;
		}, 'conType', 'Fadein'>;
	}
	import __pkg__770o4f3l = GuideWindow;
	namespace GuideWindow {
		type GuideSkipTipWindow = StrictComponent<fairygui.GComponent, {
			readonly graphMask: fairygui.GGraph;
			readonly btnNew: GuideWindow.Components.Btn1;
			readonly btnOld: GuideWindow.Components.Btn1;
			readonly btnNew1: GuideWindow.Components.Btn1;
			readonly btnOld1: GuideWindow.Components.Btn1;
			readonly btnOk: GuideWindow.Components.Btn2;
		}, 'conState', undefined>;
		type GuideOpenWindow = StrictComponent<fairygui.GComponent, {
			readonly touchLayer: fairygui.GGraph;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderLight1: fairygui.GLoader;
			readonly loaderRole: fairygui.GLoader;
			readonly imgTip: fairygui.GImage;
			readonly txtInfo: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			readonly btnSkip: UILib.Components.btn.BtnSmall1;
		}, undefined, 'FX01' | 'FX02'>;
		type Soldiers1 = StrictComponent<fairygui.GComponent, {
			readonly loaderArmylleft: fairygui.GLoader;
			readonly loaderArmyright: fairygui.GLoader;
		}, undefined, undefined>;
		namespace Components {
			type Btn1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type Btn2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
	}
	import __pkg__jgjctun3 = Hero;
	namespace Hero {
		type HeroView = StrictComponent<fairygui.GComponent, {
			readonly btnHeroMap: Hero.Components.button.BtnHeroNotRecruit;
			readonly btnHeroList: Hero.Components.button.BtnHeroRecruit;
			readonly subViewContainer: fairygui.GComponent;
			readonly btnTip: fairygui.GButton;
		}, 'conSubView', undefined>;
		type HeroDetailsView = StrictComponent<fairygui.GComponent, {
			readonly heroInfoCom: Hero.Components.HeroInfoCom;
			readonly subViewContainer: fairygui.GComponent;
			readonly heroUpgradesCom: Hero.Components.HeroUpgradesCom;
			readonly loaderBottom: fairygui.GLoader;
			readonly listBtn: fairygui.GList;
		}, 'conBtnSel', undefined>;
		type HeroLevelUpWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly graphAni: fairygui.GGraph;
			readonly progressBarExp: UILib.Components.progressBar.ProgressBar2;
			readonly listProp: fairygui.GList;
			readonly txtLevel: UILib.Components.fontTab.__cmpt__v5p1a3tlh7;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljo;
			readonly txtExp: fairygui.GTextField;
		}, 'conQuality', undefined>;
		type HeroUseChipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnCancel: UILib.Components.btn.BtnBig5;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnNoPrompt: UILib.Components.button_checkbox.Button_Check1;
			readonly btnSel: UILib.Components.btn.BtnEmpty;
			readonly txtConsumeNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly txtOwnNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
		}, undefined, undefined>;
		type HeroSkillDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly qualityCom: UILib.Components.QualityLightCom;
			readonly btnForget: UILib.Components.btn.BtnCutDown;
			readonly btnExclusive: UILib.Components.button_checkbox.Button_Check4;
			readonly btnUp: UILib.Components.btn.BtnBig1;
			readonly btnSel: UILib.Components.btn.BtnEmpty;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly listDes: fairygui.GList;
			readonly listConsume: fairygui.GList;
			readonly listCondition: fairygui.GList;
			readonly txtExclusive: UILib.Components.fontTab_text.__cmpt__qmdq1no8u78;
			readonly txtName: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			readonly txtType: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtTiming: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtConnectAttr: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTip: UILib.Components.fontTab_text.__cmpt__qmdq1no8u71;
		}, 'conIsShowTip' | 'conIsShowExclusive' | 'conQuality' | 'conMaxLevel', undefined>;
		type HeroArmyTalentView = StrictComponent<fairygui.GComponent, {
			readonly loaderBg: fairygui.GLoader;
			readonly loaderBgLogo: fairygui.GLoader;
			readonly loaderBottom: fairygui.GLoader;
			readonly loaderArmyLogo: fairygui.GLoader;
			readonly loaderArmyLogo1: fairygui.GLoader;
			readonly listTalent: fairygui.GList;
			readonly listBtnSel: fairygui.GList;
			readonly listAttr: fairygui.GList;
			readonly armyInfoCom: Hero.Components.ArmyTalentInfoCom;
			readonly btnArmyUp: Hero.Components.button.BtnArmyTalentUp;
			readonly btnReset: Hero.Components.button.BtnReset;
			readonly btnTip: fairygui.GButton;
			readonly graphBtnAni: fairygui.GGraph;
			readonly graphAni: fairygui.GGraph;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			readonly txtName1: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			readonly time: fairygui.GTextField;
		}, 'conLvMax' | 'resetType', 'tList'>;
		type ArmyTalentLevelUpWindow = StrictComponent<fairygui.GComponent, {
			readonly btnBg: UILib.Components.frame.Frame6;
			readonly btnClose1: UILib.Components.btn.BtnEmpty;
			readonly imgArrow: fairygui.GImage;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly imgExclusive: fairygui.GImage;
			readonly listConsume: fairygui.GList;
			readonly listDes: fairygui.GList;
			readonly listCondition: fairygui.GList;
			readonly btnStrengthen: UILib.Components.btn.BtnBig1;
			readonly btnClose: UILib.Components.btn.BtnWindowClose1;
			readonly txtTrainExp: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtType: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTiming: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtConnectAttr: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__i098a3tlpj;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
		}, 'conIsTip' | 'conMaxLevel' | 'conQuality', undefined>;
		type HeroBreakPreWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderArmyFront: fairygui.GLoader;
			readonly loaderArmyLater: fairygui.GLoader;
			readonly btnTalent: fairygui.GLoader;
			readonly listAttrLeft: fairygui.GList;
			readonly listAttrRight: fairygui.GList;
			readonly listStar: fairygui.GList;
			readonly listNextStar: fairygui.GList;
			readonly btnLelf: UILib.Components.btnArrows.BtnArrows2;
			readonly btnRight: UILib.Components.btnArrows.BtnArrows2;
			readonly btnTalent2: UILib.Components.btn.BtnCutDown;
			readonly btnBuyForGold: UILib.Components.btn.Btn7;
			readonly btnBuyForMoney: UILib.Components.btn.Btn6;
			readonly heroChipReward: UILib.Components.renderer.RewardRender4;
			readonly redPoint: fairygui.GImage;
			readonly txtCostExplain: UILib.Components.fontTab_text.__cmpt__qmdq1no8u61;
			readonly txtCoinNum: UILib.Components.fontTab.__cmpt__dldaa3tlkg;
			readonly txtArmyFront: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtArmyLater: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtNow: UILib.Components.fontTab.__cmpt__kyk1a3tljn;
			readonly txtNext: UILib.Components.fontTab.__cmpt__kyk1a3tljn;
			readonly txtStarDes: UILib.Components.fontTab.__cmpt__kyk1a3tljk;
			readonly txtDes: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6e;
			readonly txtShow: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpb;
		}, 'conIsState' | 'conType' | 'conIsShowQua', undefined>;
		type HeroSkillForgetWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnSel: UILib.Components.btn.BtnEmpty;
			readonly btnResetAll: UILib.Components.btn.BtnBig1;
			readonly btnConsume: UILib.Components.renderer.RewardRender4;
			readonly btnReset: UILib.Components.btn.BtnBig5;
			readonly listItem: fairygui.GList;
			readonly graphAni: fairygui.GGraph;
			readonly txtTip1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtFreeTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conState' | 'conFree', undefined>;
		type HeroAttrDesTipWindow = StrictComponent<fairygui.GComponent, {
			readonly txtDes: fairygui.GRichTextField;
		}, undefined, undefined>;
		type HeroFateDialogueWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly txtName: fairygui.GRichTextField;
			readonly txtDesc: fairygui.GRichTextField;
		}, 'conType', undefined>;
		type HeroAdvanceWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnAdvance: UILib.Components.btn.BtnBig1;
			readonly btnChip: UILib.Components.renderer.ConsumeRender;
			readonly btnExclusive: UILib.Components.button_checkbox.Button_Check4;
			readonly btnSel: UILib.Components.btn.BtnEmpty;
			readonly loaderLogo: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly listConsume: fairygui.GList;
			readonly listAttr: fairygui.GList;
			readonly txtArmy: fairygui.GTextField;
			readonly txtArmyNext: fairygui.GTextField;
			readonly txtTip: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly txtChip: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
			readonly txtDes: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
			readonly txtMax: UILib.Components.fontTab.__cmpt__v5p1a3tlh7;
		}, 'conState', undefined>;
		type HeroTalentWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly talentCom: Hero.Components.HeroTalentListCom;
		}, undefined, undefined>;
		type HeroAwakeWindow = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly btnClose: UILib.Components.btn.BtnWindowClose1;
			readonly btnAwake: UILib.Components.btnAct.BtnAct2;
			readonly btnFight: UILibHero.Components.fight.FightPowerBig;
			readonly loaderQualityFlair: fairygui.GLoader;
			readonly loaderQualityNameBg: fairygui.GLoader;
			readonly loaderName: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly graphAniQuality: fairygui.GGraph;
			readonly listStar: fairygui.GList;
			readonly txtFlair: fairygui.GTextField;
			readonly listTalentDes: fairygui.GList;
			readonly listConsume: fairygui.GList;
			readonly tipTxt: UILib.Components.fontTab.__cmpt__rq3da3tlmx;
		}, 'conIsAwake', undefined>;
		type HeroBreakTipWindow = StrictComponent<fairygui.GComponent, {
			readonly listHouAttr: fairygui.GList;
			readonly listQianAttr: fairygui.GList;
			readonly listTalent: fairygui.GList;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly imgTip: fairygui.GImage;
		}, 'conIsShowTalent', undefined>;
		type AssistantHeroSelectWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly listHero: fairygui.GList;
			readonly txtSelectCount: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
		}, 'conType', undefined>;
		type HeroAssisSkillDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__i098a3tlpj;
			readonly txtType: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtTiming: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtConnectAttr: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtEffectDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNextLevelDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDes: UILib.Components.fontTab_text.__cmpt__qmdq1no8u77;
		}, 'conQuality' | 'conIsDes', undefined>;
		type HeroTitleWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly graphHero: fairygui.GGraph;
			readonly graphTitle: fairygui.GGraph;
			readonly titleIcon: fairygui.GLoader;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly titleList: fairygui.GList;
			readonly attList: fairygui.GList;
			readonly txtEffectDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conIsEff' | 'conIsWear', undefined>;
		type HeroHistoryWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly historyCom: Hero.Components.HeroHistoryCom;
			readonly arrow: fairygui.GImage;
		}, undefined, undefined>;
		type HeroBreakTalenWindow = StrictComponent<fairygui.GComponent, {
			readonly talentCom: Hero.Components.render.HeroTalentCom;
		}, undefined, undefined>;
		type HeroSkillFreeResetWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnReset: UILib.Components.btn.BtnBig1;
			readonly listItem: fairygui.GList;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTip1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
		}, undefined, undefined>;
		type FreeResetTipWindow = StrictComponent<fairygui.GComponent, {
			readonly txtDes1: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtDes2: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
		}, undefined, undefined>;
		type AssistantHeroDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly comHero: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly skillRender: Hero.Components.render.HeroAssistantSkillRender2;
			readonly armySkillRender: Hero.Components.render.HeroAssistantSkillRender2;
			readonly btnHelp: fairygui.GButton;
			readonly listTreasureScore: fairygui.GList;
			readonly txtAttack: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtDefense: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtSkillBuff: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtAttackNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			readonly txtDefenseNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			readonly txtSkillBuffNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			readonly txtSuitName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			readonly txtSuitScore: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			readonly txtDes: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			readonly txtDes2: UILib.Components.fontTab_text.__cmpt__qmdq1no8u79;
		}, 'conIsHaveTreasure', undefined>;
		type HeroResetWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly castrender: Hero.Components.render.HeroResetCastRender;
			readonly list_item: fairygui.GList;
			readonly timeText: fairygui.GRichTextField;
			readonly num: fairygui.GRichTextField;
			readonly btn_resethero: UILib.Components.btn.BtnBig1;
			readonly btnHelp: fairygui.GButton;
			readonly btnConsume: Hero.Components.button.ConsumeRender;
		}, 'type', undefined>;
		type HeroMapRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listRewardInfo: fairygui.GList;
		}, undefined, undefined>;
		type GetNewHeroNewWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderBg: fairygui.GLoader;
			readonly skeletonHoldor: fairygui.GGraph;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly skeletonView: UILibHero.Components.SkeletonDeviationView;
			readonly nameQuality: fairygui.GLoader;
			readonly heroQualtiy: fairygui.GLoader;
			readonly loaderQualityFlair: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljv;
			readonly txtFlair: fairygui.GTextField;
			readonly btnTalent: Hero.Components.button.BtnTalent;
			readonly loaderAttr: fairygui.GLoader;
			readonly listSkill: fairygui.GList;
			readonly txtForce: fairygui.GTextField;
			readonly txtWit: fairygui.GTextField;
			readonly txtCharm: fairygui.GTextField;
			readonly txtLead: fairygui.GTextField;
			readonly loaderLogoFront: fairygui.GLoader;
			readonly loaderLogoBack: fairygui.GLoader;
			readonly txtArmyNameF: fairygui.GTextField;
			readonly txtArmyNameB: fairygui.GTextField;
			readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly txtShowChip: fairygui.GTextField;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly imgTip: fairygui.GImage;
			readonly black: fairygui.GGraph;
			readonly mj1: fairygui.GLoader;
			readonly mj2: fairygui.GLoader;
			readonly effectFlash: fairygui.GGraph;
		}, 'conHaveSkill' | 'conIsShip', 'in'>;
		type GetNewHeroWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderBg: fairygui.GLoader;
			readonly skeletonHoldor: fairygui.GGraph;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly skeletonBgB: UILibHero.Components.SkeletonView;
			readonly skeletonView: UILibHero.Components.SkeletonDeviationView;
			readonly loaderBgFront: fairygui.GLoader;
			readonly skeletonBgF: UILibHero.Components.SkeletonView;
			readonly nameQuality: fairygui.GLoader;
			readonly heroQualtiy: fairygui.GLoader;
			readonly loaderQualityFlair: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljv;
			readonly txtFlair: fairygui.GTextField;
			readonly btnTalent: Hero.Components.button.BtnTalent;
			readonly loaderAttr: fairygui.GLoader;
			readonly listSkill: fairygui.GList;
			readonly txtForce: fairygui.GTextField;
			readonly txtWit: fairygui.GTextField;
			readonly txtCharm: fairygui.GTextField;
			readonly txtLead: fairygui.GTextField;
			readonly loaderLogoFront: fairygui.GLoader;
			readonly loaderLogoBack: fairygui.GLoader;
			readonly txtArmyNameF: fairygui.GTextField;
			readonly txtArmyNameB: fairygui.GTextField;
			readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly txtShowChip: fairygui.GTextField;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly imgTip: fairygui.GImage;
			readonly shareSubView: Hero.Components.shareSubView.GetNewHeroNewShareCom;
			readonly black: fairygui.GGraph;
			readonly mj1: fairygui.GLoader;
			readonly mj2: fairygui.GLoader;
			readonly effectFlash: fairygui.GGraph;
		}, 'conHaveSkill' | 'conIsShip' | 'conIsTavern', 'in'>;
		type HeroAttrDesTipAllWindow = StrictComponent<fairygui.GComponent, {
			readonly txtDes0: fairygui.GRichTextField;
			readonly txtDes1: fairygui.GRichTextField;
			readonly txtDes2: fairygui.GRichTextField;
			readonly txtDes3: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Components {
			type HeroSkillDetailsCom = StrictComponent<fairygui.GComponent, {
				readonly txtEffectDes: fairygui.GRichTextField;
				readonly txtNextLevelDes: fairygui.GRichTextField;
				readonly txtSeniorDes: fairygui.GRichTextField;
				readonly txtAdvancedDes: fairygui.GRichTextField;
			}, 'conIsShowNextLevelDes' | 'conIsShowAdvancedDes' | 'conIsShowSeniorDes', undefined>;
			type HeroSelectCom = StrictComponent<fairygui.GComponent, {
				readonly btnUp: Hero.Components.button.btnUp;
				readonly btnCloseSel: UILib.Components.btn.BtnEmpty;
				readonly listQuality: fairygui.GList;
				readonly listArmy: fairygui.GList;
				readonly listJob: fairygui.GList;
			}, 'conState', undefined>;
			type HeroInfoCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBgBack: fairygui.GLoader;
				readonly skeletonBgB: UILibHero.Components.SkeletonView;
				readonly loaderEffectBg: fairygui.GLoader;
				readonly heroPromoteFX: fairygui.GGraph;
				readonly skeletonView: UILibHero.Components.SkeletonView;
				readonly loaderBgFront: fairygui.GLoader;
				readonly skeletonBgF: UILibHero.Components.SkeletonView;
				readonly loaderBgMask: fairygui.GLoader;
				readonly loaderMaskBottom: fairygui.GLoader;
				readonly loaderMaskTop: fairygui.GLoader;
				readonly btnAwake: Hero.Components.button.BtnFunc;
				readonly graphAniAwake: fairygui.GGraph;
				readonly loaderNotActive: fairygui.GLoader;
				readonly listStar: fairygui.GList;
				readonly loaderNameBg: fairygui.GLoader;
				readonly nameQuality: fairygui.GLoader;
				readonly heroQualtiy: fairygui.GLoader;
				readonly loaderHeroType: fairygui.GLoader;
				readonly btnTitle: Hero.Components.button.btnTitle;
				readonly btnResetHero: Hero.Components.button.BtnSmallFunc;
				readonly btnHistory: Hero.Components.button.BtnSmallFunc;
				readonly btnWearTitle: Hero.Components.button.BtnSmallFunc;
				readonly graphAniQuality: fairygui.GGraph;
				readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljv;
				readonly listFunc: fairygui.GList;
				readonly btnFightFm: Hero.Components.fightFm.HeroFightFmBtn;
				readonly btnLeft: UILib.Components.btnArrows.BtnArrows4;
				readonly btnRight: UILib.Components.btnArrows.BtnArrows4;
				readonly group: fairygui.GGroup;
			}, 'conIsCanRecruit' | 'conIsNull', 'tArrow' | 'tRight' | 'tBgEffectShow' | 'tBgEffectClose' | 'heroPromoteFX'>;
			type HeroSkillMaskRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly graphMask: fairygui.GGraph;
			}, undefined, undefined>;
			type HeroUpgradesCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly btnUpLevel: Hero.Components.button.BtnUpLevel;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtForce: fairygui.GTextField;
				readonly txtWit: fairygui.GTextField;
				readonly txtCharm: fairygui.GTextField;
				readonly txtLead: fairygui.GTextField;
			}, undefined, 'tLeft' | 'tRight'>;
			type circleProgressCom = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroAssistantCom = StrictComponent<fairygui.GComponent, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroHistoryCom = StrictComponent<fairygui.GComponent, {
				readonly txtLife: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtHistory: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtStory: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, undefined, undefined>;
			type ArmyTalentInfoCom = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly btnIcon: Hero.Components.button.BtnTrainUp;
				readonly btnLeft: UILib.Components.btnArrows.BtnArrows4;
				readonly btnRight: UILib.Components.btnArrows.BtnArrows4;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__su2va3tlqc;
				readonly btnSkin: UILib.Components.btn.BtnCutDown;
				readonly txtTip: fairygui.GTextField;
				readonly txtExp: fairygui.GTextField;
			}, 'conState' | 'conSkin', 'tExp' | 't1'>;
			type HeroTalentListCom = StrictComponent<fairygui.GComponent, {
				readonly talentCom: Hero.Components.render.HeroTalentCom;
				readonly awakeTalentCom: Hero.Components.render.HeroTalentCom;
				readonly legendTalentCom: Hero.Components.render.HeroTalentCom1;
				readonly fateCom: Hero.Components.render.HeroTalentCom2;
			}, undefined, undefined>;
			type HeroAwakeEffectTest = StrictComponent<fairygui.GComponent, undefined, 'conAwakeQuality', 'Rotation'>;
			type HeroMapAwardCom = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
			}, undefined, undefined>;
			type BtnHeroMapIntegral = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.button {
			type BtnFateOther = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroIcon: fairygui.GLoader;
				readonly iconFrame: fairygui.GLoader;
				readonly txtName: fairygui.GRichTextField;
			}, 'button' | 'conIsGrayed' | 'conIsRed' | 'conSkillType' | 'conIsOpen', undefined>;
			type BtnHeroStarLeft = StrictComponent<fairygui.GButton, {
				readonly effect: fairygui.GGraph;
			}, 'conIsCanBreak' | 'conColor' | 'isHaveStar', undefined>;
			type BtnReset = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type HeroCircleHeadCom = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type btnUp = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnTraining = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly circleProgressCom: Hero.Components.circleProgressCom;
				readonly txtNum: fairygui.GTextField;
			}, 'button' | 'conRed' | 'conGrayed', undefined>;
			type Button1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'conIsRed' | 'button', 'click'>;
			type btnTitle = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsWear', undefined>;
			type BtnFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conRed', undefined>;
			type BtnAdvance = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
			}, 'button' | 'conCanUp', undefined>;
			type BtnUpLevel = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button' | 'conGrayed' | 'conRed', undefined>;
			type BtnFateFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly iconDown: fairygui.GLoader;
			}, 'button' | 'conFunc', undefined>;
			type BtnHeroNotRecruit = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type BtnHeroRecruit = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnHeroStarRight = StrictComponent<fairygui.GButton, {
				readonly effect: fairygui.GGraph;
			}, 'conColor' | 'isHaveStar' | 'conIsCanBreak', undefined>;
			type BtnTreasure = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnTrainUp = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly circleProgressCom: Hero.Components.circleProgressCom;
			}, 'button' | 'conRed' | 'conGrayed', undefined>;
			type BtnHeroAssist = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'conIsGray', undefined>;
			type BtnTalent = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnArmyArrow = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnArmyTalentUp = StrictComponent<fairygui.GButton, undefined, 'button' | 'conIsShowRed', undefined>;
			type BtnDetails = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnSound = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ConsumeRender = StrictComponent<fairygui.GButton, {
				readonly imgBg: fairygui.GLoader;
				readonly btnItem: Hero.Components.button.ConsumeMask;
				readonly title: fairygui.GRichTextField;
			}, 'bgState', undefined>;
			type ConsumeMask = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnHeroStarArrLeft = StrictComponent<fairygui.GButton, {
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly effect1: fairygui.GGraph;
			}, 'conIsCanBreak' | 'conColor' | 'isHaveStar', undefined>;
			type BtnHeroStarArrRight = StrictComponent<fairygui.GButton, {
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly effect1: fairygui.GGraph;
			}, 'conColor' | 'isHaveStar' | 'conIsCanBreak', undefined>;
			type BtnHeroBiography = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
			}, 'button' | 'conRed', undefined>;
			type BtnSmallFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conRed', undefined>;
		}
		namespace Components.render {
			type HeroAttrTxtRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtArr: fairygui.GTextField;
			}, 'conIsShowLine', undefined>;
			type HeroConsumeRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly txtNum: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
			}, undefined, undefined>;
			type HeroSkillRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly btnIcon: Hero.Components.HeroSkillMaskRender;
				readonly imgNo: fairygui.GImage;
				readonly imgAniBg: fairygui.GImage;
				readonly imgAni: fairygui.GImage;
				readonly progressChip: Hero.Components.progress.ProgressSkill;
				readonly txtName: fairygui.GTextField;
			}, 'button' | 'conIsGrayed' | 'conRed' | 'conMaxLv' | 'conAwake' | 'conSpecial', 'canLearnAni'>;
			type BtnArmyTalentStrengthenRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'conRed' | 'button' | 'conEnd', undefined>;
			type ArmyTalentRender = StrictComponent<fairygui.GButton, {
				readonly imgRightIn: fairygui.GImage;
				readonly imgLeftIn: fairygui.GImage;
				readonly imgTopIn: fairygui.GImage;
				readonly imgBottomIn: fairygui.GImage;
				readonly imgRightOut: fairygui.GImage;
				readonly imgLeftOut: fairygui.GImage;
				readonly imgTopOut: fairygui.GImage;
				readonly imgBottomOut: fairygui.GImage;
				readonly graphAni: fairygui.GGraph;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly imgLock: fairygui.GImage;
				readonly imgAni: fairygui.GImage;
				readonly groupAni: fairygui.GGroup;
				readonly imgUp: fairygui.GImage;
				readonly imgMaxLv: fairygui.GImage;
				readonly txtLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsNull' | 'conIsEffect' | 'conIsGrayed' | 'conType', 'canLearnAni' | 'tShengji'>;
			type SkillConditionRender = StrictComponent<fairygui.GComponent, {
				readonly txtCondition: fairygui.GTextField;
				readonly loaderIcon: fairygui.GLoader;
			}, 'conIsOk', undefined>;
			type HeroFateCostRender = StrictComponent<fairygui.GComponent, {
				readonly txtCost: fairygui.GRichTextField;
				readonly btnLeaveFor: UILib.Components.btn.BtnBig1;
			}, 'conIsFinish', undefined>;
			type HeroFateCostResRender = StrictComponent<fairygui.GComponent, {
				readonly costIcon: fairygui.GLoader;
				readonly txtCostNum: fairygui.GTextField;
			}, undefined, undefined>;
			type ArmyTalentRenderSmall = StrictComponent<fairygui.GButton, {
				readonly loaderQuality: fairygui.GLoader;
				readonly loaderGray: fairygui.GLoader;
				readonly txtLevel: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			}, 'conGray', undefined>;
			type HeroSkillTypeRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsRed', undefined>;
			type HeroRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: fairygui.GLoader;
				readonly loaderMask: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly heroQuality: fairygui.GLoader;
				readonly titleIcon: fairygui.GLoader;
				readonly loaderHeroType: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly imgFuJiang: fairygui.GImage;
				readonly imgShangZhen: fairygui.GImage;
				readonly starList: fairygui.GList;
				readonly graphAniFrame: fairygui.GGraph;
				readonly graphAniQuality: fairygui.GGraph;
				readonly graphAniAwake: fairygui.GGraph;
				readonly txtLv: fairygui.GTextField;
				readonly txtChipNum: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conIsNew' | 'conState' | 'conQuality' | 'conAwake', 't0'>;
			type HeroInactiveRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly heroQuality: fairygui.GLoader;
				readonly starList: fairygui.GList;
				readonly txtChipNum: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'button', undefined>;
			type HeroBreakAttrRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly txtValueLater: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			}, undefined, undefined>;
			type HeroArmyAttrTxtRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly txtCurNum: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhm;
				readonly txtNextNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh7;
				readonly txtMax: UILib.Components.fontTab.__cmpt__v5p1a3tlh7;
			}, 'conMaxLv', undefined>;
			type HeroFateHeadCom = StrictComponent<fairygui.GComponent, {
				readonly heroIcon: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroTreasureRender = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender1;
				readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljn;
				readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
				readonly loaderType: fairygui.GLoader;
			}, 'conState', undefined>;
			type AssistantHeroRender = StrictComponent<fairygui.GComponent, {
				readonly loaderFrame2: fairygui.GLoader;
				readonly loaderLogo: fairygui.GLoader;
				readonly btnAdd: fairygui.GLoader;
				readonly desLoader: fairygui.GLoader;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly btnGO: Hero.Components.button.BtnHeroAssist;
				readonly btnDetails2: UILib.Components.btn.BtnEmpty;
				readonly btnSkill: Hero.Components.render.HeroAssistantSkillRender;
				readonly btnArmySkill: Hero.Components.render.HeroAssistantSkillRender;
				readonly btnDetails: Hero.Components.button.BtnDetails;
				readonly listAttrFront: fairygui.GList;
				readonly txtHeroName: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
				readonly txtArmy: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
				readonly txtDes: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
				readonly txtTreasureScore: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
				readonly txtSkillBuff: fairygui.GTextField;
				readonly txtFate: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
			}, 'conState' | 'conQuality' | 'conFate' | 'armyCL', undefined>;
			type AssistantHeroSelectRender = StrictComponent<fairygui.GButton, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderHeroType: fairygui.GLoader;
				readonly loaderQuality: fairygui.GLoader;
				readonly btnSkill: Hero.Components.render.HeroAssistantSkillRender;
				readonly btnArmySkill: Hero.Components.render.HeroAssistantSkillRender;
				readonly txtFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtHeroName: UILib.Components.fontTab.__cmpt__kyk1a3tljp;
				readonly txtFate: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly jbImage: fairygui.GImage;
				readonly txtDes: UILib.Components.fontTab.__cmpt__dkjpa3tll8;
			}, 'button' | 'conState', undefined>;
			type HeroAssistantSkillRender = StrictComponent<fairygui.GButton, {
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderHeroSkillLogo: fairygui.GLoader;
				readonly loaderArmyTalentLogo: fairygui.GLoader;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtLv: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			}, 'conType', undefined>;
			type ArmyTalentAttrRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly txtCurNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtNextNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
				readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conActivate', undefined>;
			type HeroDesRender1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtTitle: UILib.Components.fontTab.__cmpt__kyk1a3tljr;
				readonly txtMaxAttr: UILib.Components.fontTab.__cmpt__kyk1a3tljr;
				readonly txtDes: UILib.Components.fontTab.__cmpt__kyk1a3tljr;
				readonly txtCurAttr: UILib.Components.fontTab.__cmpt__kyk1a3tljr;
				readonly group: fairygui.GGroup;
			}, 'button', undefined>;
			type HeroTalentCom = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type HeroTalentCom1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly heroLegendDes: Hero.Components.render.HeroDesRender1;
			}, undefined, undefined>;
			type TitleRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtHeroName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
			}, 'conIsWear' | 'button', undefined>;
			type titleAttrRender = StrictComponent<fairygui.GComponent, {
				readonly txtAtt: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type HeroTalentCom2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type HeroDesRender2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtDes: fairygui.GRichTextField;
			}, 'button', undefined>;
			type ArmyTalentDesRender = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly txtDes: fairygui.GRichTextField;
			}, 'button', undefined>;
			type HeroAwakeDesRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly txtDes: fairygui.GRichTextField;
			}, 'button', undefined>;
			type HeroAssistantSkillRender2 = StrictComponent<fairygui.GButton, {
				readonly btnSkill: Hero.Components.render.HeroAssistantSkillRender;
				readonly txtType: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttack: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
				readonly txtDefense: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			}, 'conType' | 'conIsShowBg', undefined>;
			type AssistantHeroScoreTreasureInfoRender = StrictComponent<fairygui.GComponent, {
				readonly heroTreasure: ShowRole.Components.HeroTreasure;
				readonly txtBreak: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtEffect: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtStrengthen: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsShowBg', undefined>;
			type HeroResetCastRender = StrictComponent<fairygui.GComponent, {
				readonly icon_qua_bg: fairygui.GLoader;
				readonly icon_quality: fairygui.GLoader;
				readonly icon_cast: fairygui.GLoader;
			}, undefined, undefined>;
			type ArmyTalentTypeRender = StrictComponent<fairygui.GComponent, {
				readonly listArmyTalent: fairygui.GList;
			}, 'conType', undefined>;
			type HeroMapRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: fairygui.GLoader;
				readonly loaderMask: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly heroQuality: fairygui.GLoader;
				readonly loaderHeroType: fairygui.GLoader;
				readonly btnHero: UILib.Components.btn.BtnEmpty;
				readonly btnGet: Hero.Components.BtnHeroMapIntegral;
				readonly redPoint: fairygui.GImage;
				readonly graphAniQuality: fairygui.GGraph;
				readonly graphAniAwake: fairygui.GGraph;
				readonly starList: fairygui.GList;
				readonly txtChipNum: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtLv: fairygui.GTextField;
			}, 'conState' | 'conQuality' | 'conAwake', 't0'>;
			type HeroMapRewardRender = StrictComponent<fairygui.GButton, {
				readonly listReward: fairygui.GList;
				readonly imgFinish: fairygui.GImage;
				readonly txtMapLv: fairygui.GRichTextField;
				readonly proRateTitle: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			}, 'conType', undefined>;
			type HeroMapRewardRender1 = StrictComponent<fairygui.GButton, {
				readonly rewardRender: UILib.Components.renderer.RewardRenderForEffect2;
			}, 'conGet', undefined>;
			type HeroSkillDesRender = StrictComponent<fairygui.GComponent, {
				readonly txtTitle: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.fightFm {
			type HeroFightFmBtn = StrictComponent<fairygui.GButton, {
				readonly fightFmIcon: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
		namespace Components.subView {
			type HeroAttrSubView = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderLineF: fairygui.GLoader;
				readonly loaderLineB: fairygui.GLoader;
				readonly imgNoSkillBack: fairygui.GImage;
				readonly imgNoSkillFront: fairygui.GImage;
				readonly loaderLogoBack: fairygui.GLoader;
				readonly loaderLogoFront: fairygui.GLoader;
				readonly btnAdvanceFront: Hero.Components.button.BtnAdvance;
				readonly btnAdvanceBack: Hero.Components.button.BtnAdvance;
				readonly btnTrainFront: Hero.Components.button.BtnTraining;
				readonly btnTrainBack: Hero.Components.button.BtnTraining;
				readonly listAttrFront: fairygui.GList;
				readonly listAttrBack: fairygui.GList;
				readonly listArmyFrontSkill: fairygui.GList;
				readonly listArmyBackSkill: fairygui.GList;
				readonly txtArmyFront: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
				readonly txtArmyBack: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
				readonly attBtn0: UILib.Components.btn.BtnEmpty;
				readonly attBtn1: UILib.Components.btn.BtnEmpty;
			}, undefined, undefined>;
			type HeroSkillSubView = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly listType: fairygui.GList;
				readonly listSkill: fairygui.GList;
				readonly txtTip: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtTypeName: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			}, 'conSkillType' | 'conShowTip' | 'conNull', undefined>;
			type HeroFateSubView = StrictComponent<fairygui.GComponent, {
				readonly loader0: fairygui.GLoader;
				readonly btnUpgarde: UILib.Components.btn.BtnBig1;
				readonly txtSkillName: UILib.Components.title.CommonTitleDark;
				readonly graphBtn: fairygui.GGraph;
				readonly listFate: fairygui.GList;
				readonly listFunc: fairygui.GList;
				readonly txtSkillType: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly txtActivateNeed: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly txtProperty: fairygui.GRichTextField;
				readonly loader1: fairygui.GLoader;
			}, 'conIsCanUpgrade' | 'conType' | 'conFunc' | 'conIsFate', 'upSuccess'>;
			type HeroBreakSubView = StrictComponent<fairygui.GComponent, {
				readonly loader0: fairygui.GLoader;
				readonly loader1: fairygui.GLoader;
				readonly loaderProBg: fairygui.GLoader;
				readonly loader2: fairygui.GLoader;
				readonly upStartEffect1: fairygui.GGraph;
				readonly upStartEffect2: fairygui.GGraph;
				readonly upRedPoint: fairygui.GImage;
				readonly loaderTalentIcon: UILib.Components.btn.BtnEmpty;
				readonly heroStarArr0: Hero.Components.button.BtnHeroStarArrLeft;
				readonly heroStarArr1: Hero.Components.button.BtnHeroStarArrLeft;
				readonly heroStarArr2: Hero.Components.button.BtnHeroStarArrLeft;
				readonly heroStarArr3: Hero.Components.button.BtnHeroStarArrRight;
				readonly heroStarArr4: Hero.Components.button.BtnHeroStarArrRight;
				readonly heroStarArr5: Hero.Components.button.BtnHeroStarArrRight;
				readonly heroStar0: Hero.Components.button.BtnHeroStarLeft;
				readonly heroStar1: Hero.Components.button.BtnHeroStarLeft;
				readonly heroStar2: Hero.Components.button.BtnHeroStarLeft;
				readonly heroStar3: Hero.Components.button.BtnHeroStarRight;
				readonly heroStar4: Hero.Components.button.BtnHeroStarRight;
				readonly heroStar5: Hero.Components.button.BtnHeroStarRight;
				readonly upStartEffect3: fairygui.GGraph;
				readonly btnBuyForGold: UILib.Components.btn.Btn7;
				readonly btnBuyForMoney: UILib.Components.btn.Btn6;
				readonly heroChipReward: UILib.Components.renderer.RewardRender4;
				readonly redPoint: fairygui.GImage;
				readonly txtCostExplain: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly txtCoinNum: UILib.Components.fontTab.__cmpt__dldaa3tlkg;
				readonly txtPrivilege: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conIsCanUpgrade' | 'conIsMax' | 'conStar', 't0' | 't1'>;
			type HeroTreasureSubView = StrictComponent<fairygui.GComponent, {
				readonly loader0: fairygui.GLoader;
				readonly loaderBg: fairygui.GLoader;
				readonly graphNameAni: fairygui.GGraph;
				readonly graphBgAni: fairygui.GGraph;
				readonly btnTreasure: Hero.Components.button.BtnTreasure;
				readonly btnSuit: UILibHero.Components.render.other.BtnHeroSuit;
				readonly btnTreasureStrengthSuit: UILibHero.Components.render.other.BtnTreasureStrengthSuit;
				readonly listTreasure: fairygui.GList;
			}, 'conSuit' | 'conStrengthSuit', undefined>;
			type HeroAssistantHeroSubView = StrictComponent<fairygui.GComponent, {
				readonly jbImage: fairygui.GImage;
				readonly frontCom: Hero.Components.render.AssistantHeroRender;
				readonly backCom: Hero.Components.render.AssistantHeroRender;
				readonly heroCom: Hero.Components.HeroAssistantCom;
				readonly btnGO: UILib.Components.btn.BtnBig1;
				readonly btnHelp: fairygui.GButton;
				readonly btnSkill: Hero.Components.render.HeroAssistantSkillRender;
				readonly btnArmySkill: Hero.Components.render.HeroAssistantSkillRender;
				readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
				readonly txtSkillDes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly recommendDes: fairygui.GTextField;
			}, 'conIsMain', undefined>;
			type HeroListSubView = StrictComponent<fairygui.GComponent, {
				readonly listHero: fairygui.GList;
				readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
				readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
				readonly heroSelectCom: Hero.Components.HeroSelectCom;
				readonly txtNum: fairygui.GTextField;
			}, undefined, undefined>;
			type HeroMapSubView = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly proMapRate: UILib.Components.progressBar.ProgressBar4;
				readonly loaderBox: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly listHeroMap: fairygui.GList;
				readonly ingetralEffectCom: fairygui.GComponent;
				readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
				readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
				readonly heroSelectCom: Hero.Components.HeroSelectCom;
				readonly txtMapLv: fairygui.GTextField;
				readonly proRateTitle: fairygui.GTextField;
				readonly txtNum: fairygui.GTextField;
			}, 'conState', undefined>;
		}
		namespace Components.progress {
			type ProgressSkill = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'conGrayed', undefined>;
			type progressLv = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
		}
		namespace Components.shareSubView {
			type GetNewHeroNewShareCom = StrictComponent<fairygui.GComponent, {
				readonly graphBg: fairygui.GGraph;
				readonly bg: fairygui.GLoader;
				readonly rewardList: fairygui.GList;
				readonly shareTip: fairygui.GRichTextField;
				readonly rewardGroup: fairygui.GGroup;
				readonly titlebg: fairygui.GLoader;
				readonly titleLoader: fairygui.GLoader;
				readonly txtServer: fairygui.GRichTextField;
				readonly txtPlayer: fairygui.GRichTextField;
				readonly titleGroup: fairygui.GGroup;
				readonly saveBtn: Hero.Components.shareSubView.HeroShareBtn;
				readonly shareBtn: Hero.Components.shareSubView.HeroShareBtn;
				readonly screenshotBtn: Hero.Components.shareSubView.HeroShareBtn;
				readonly graph: fairygui.GGraph;
				readonly btnClose: UILib.Components.btn.BtnClose1;
				readonly shareGroup: fairygui.GGroup;
			}, 'shareState' | 'screenshotState' | 'finshState' | 'openState', 'btnAni'>;
			type HeroShareBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly titleBg: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'titleState', undefined>;
		}
		namespace Components.render.break {
			type breakTipAttrCom = StrictComponent<fairygui.GComponent, {
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhs;
				readonly txtCurAttr: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtNextAttr: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			}, undefined, undefined>;
		}
	}
	import __pkg__s09z7ips = HeroAuction;
	namespace HeroAuction {
		type HeroAuctionView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly heroList: fairygui.GList;
			readonly moneyIcon: fairygui.GImage;
			readonly timeBg: fairygui.GImage;
			readonly btnBid: UILib.Components.btnAct.BtnAct2;
			readonly heroAwakeRender: UILib.Components.renderer.RewardRender2;
			readonly heroFragmentRender: UILib.Components.renderer.RewardRender2;
			readonly btnTip: fairygui.GButton;
			readonly txtLeftTime: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly curPrice: fairygui.GRichTextField;
			readonly heroName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpc;
			readonly tips0: UILib.Components.fontTab_richText.__cmpt__sxsxa3tlqb;
			readonly tips1: UILib.Components.fontTab_richText.__cmpt__sxsxa3tlqb;
		}, 'conBtnState', undefined>;
		type BidWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnCutDown: UILib.Components.btn.BtnCutDown;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly bidBtn: HeroAuction.Components.bidBtn1;
			readonly slider: UILib.Components.silder.silder_com_3;
			readonly quickBidList: fairygui.GList;
			readonly txtCurPrice: fairygui.GRichTextField;
		}, undefined, undefined>;
		type HeroAuctionAwakeInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly rewardRender: UILib.Components.renderer.RewardRender1;
			readonly desList: fairygui.GList;
			readonly name: UILib.Components.fontTab.__cmpt__f73xa3tlhz;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type HeroAuctionTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly item1: UILib.Components.renderer.RewardRender3;
			readonly heroRes0: fairygui.GLoader;
			readonly heroRes1: fairygui.GLoader;
			readonly item0: UILib.Components.renderer.RewardRender3;
			readonly item2: UILib.Components.renderer.RewardRender3;
			readonly item3: UILib.Components.renderer.RewardRender3;
			readonly goto0: UILib.Components.btnAct.BtnAct6;
			readonly goto1: UILib.Components.btnAct.BtnAct6;
			readonly gold0: fairygui.GRichTextField;
			readonly gold1: fairygui.GRichTextField;
			readonly playName0: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			readonly playName1: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			readonly name0: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpc;
			readonly name1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpc;
		}, 'stateCon', undefined>;
		namespace Components {
			type bidBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type bidBtn1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type QuickChooseListRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type HeroComRight = StrictComponent<fairygui.GComponent, {
				readonly heroLoader: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroAuctionListRender = StrictComponent<fairygui.GButton, {
				readonly heroHead: UILibHero.Components.render.headRender.HeroQualityHeadRender;
				readonly heroQualityBg: fairygui.GLoader;
				readonly txtState: fairygui.GRichTextField;
				readonly loaderState: fairygui.GLoader;
				readonly txtStateName: fairygui.GRichTextField;
			}, 'button' | 'conHeroQuality' | 'conState' | 'txtPos', undefined>;
			type HeroComLeft = StrictComponent<fairygui.GComponent, {
				readonly heroLoader: fairygui.GLoader;
			}, undefined, undefined>;
			type btnBid = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type HeroCom = StrictComponent<fairygui.GComponent, {
				readonly heroLoader: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroTalentCom = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly talentList: fairygui.GList;
			}, undefined, undefined>;
			type HeroDesRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'button', undefined>;
			type AwakeRender = StrictComponent<fairygui.GComponent, {
				readonly txtDes: UILib.Components.fontTab.__cmpt__dldaa3tlkf;
			}, undefined, undefined>;
			type HeroAuctionRewardRender = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly imgSel: fairygui.GImage;
				readonly txtCount: fairygui.GRichTextField;
				readonly txtName: fairygui.GRichTextField;
			}, 'conShowName' | 'button', undefined>;
		}
	}
	import __pkg__h25erx6m = HeroBiography;
	namespace HeroBiography {
		type HeroBiographyView = StrictComponent<fairygui.GComponent, {
			readonly listBiography: fairygui.GList;
			readonly attrCom: HeroBiography.Components.AttrCom;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly btnTopAttr: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottomAttr: UILib.Components.btnArrows.BtnArrows3;
			readonly loaderHero: fairygui.GLoader;
			readonly nameQuality: fairygui.GLoader;
			readonly heroQuality: fairygui.GLoader;
			readonly graphAniQuality: fairygui.GGraph;
			readonly imgAwake: fairygui.GImage;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljt;
		}, undefined, undefined>;
		type HeroBiographyAttrWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly imgTop: fairygui.GImage;
			readonly imgBottom: fairygui.GImage;
			readonly listAttrTop: fairygui.GList;
			readonly listAttrBottom: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type BtnBox = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type HeroRes = StrictComponent<fairygui.GComponent, {
				readonly loaderHero: fairygui.GLoader;
			}, undefined, undefined>;
			type BtnActivate = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type AttrCom = StrictComponent<fairygui.GComponent, {
				readonly listHeroAttr: fairygui.GList;
				readonly heroAddAttrTitle: UILib.Components.fontTab_richText.__cmpt__jd7wa3tlqk;
				readonly listAttr: fairygui.GList;
			}, undefined, undefined>;
		}
		namespace Components.render {
			type HeroBiographyRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBox: fairygui.GImage;
				readonly listReward: fairygui.GList;
				readonly listHero: fairygui.GList;
				readonly btnActivate: UILib.Components.btnAct.BtnAct5;
				readonly txtCondition1: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
				readonly txtCondition2: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
				readonly txtAttr: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			}, 'conState', undefined>;
			type HeroBiographySmallRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: fairygui.GLoader;
				readonly loaderMask: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly heroQuality: fairygui.GLoader;
				readonly titleIcon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly imgState: fairygui.GImage;
				readonly starList: fairygui.GList;
				readonly graphAniFrame: fairygui.GGraph;
				readonly graphAniQuality: fairygui.GGraph;
				readonly txtLv: fairygui.GTextField;
				readonly txtFuJiang: fairygui.GTextField;
				readonly txtShangZhen: fairygui.GTextField;
				readonly txtChipNum: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conState' | 'conQuality' | 'conAwake' | 'conNull', 't0'>;
			type HeroBiographyAttrRender = StrictComponent<fairygui.GComponent, {
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			}, 'conGray', undefined>;
		}
	}
	import __pkg__ibti2jg9 = HeroChallenge;
	namespace HeroChallenge {
		type HeroChallengeView = StrictComponent<fairygui.GComponent, {
			readonly list: fairygui.GList;
			readonly numTxt: fairygui.GRichTextField;
			readonly addBtn: UILib.Components.btn.BtnAdd;
		}, undefined, undefined>;
		type HeroChallengeInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly heroImg: fairygui.GLoader;
			readonly btnOk: UILib.Components.btnSpecial.BtnOrang;
			readonly graphAniQuality: fairygui.GGraph;
			readonly list: fairygui.GList;
			readonly targetBar: fairygui.GComponent;
			readonly tarTxt: fairygui.GTextField;
			readonly attTxt: fairygui.GTextField;
			readonly num0: fairygui.GTextField;
			readonly num1: fairygui.GTextField;
			readonly num2: fairygui.GTextField;
			readonly num3: fairygui.GTextField;
			readonly bar0: fairygui.GImage;
			readonly bar1: fairygui.GImage;
			readonly bar2: fairygui.GImage;
			readonly bar3: fairygui.GImage;
			readonly fightTxt: UILibHero.Components.fight.FightPowerRecommendSmall;
			readonly loaderQualityNameBg: fairygui.GLoader;
			readonly loaderName: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly btnClose: UILib.Components.btn.BtnClose3;
			readonly rewardBtn: UILib.Components.btnSpecial.BtnOrang;
			readonly qian: fairygui.GLoader;
			readonly hou: fairygui.GLoader;
		}, 'btnCon', undefined>;
		type HeroChallengeKillWindow = StrictComponent<fairygui.GComponent, {
			readonly numTxt: fairygui.GTextField;
		}, undefined, undefined>;
		type HeroChallengeInfoView = StrictComponent<fairygui.GButton, {
			readonly btnOk: UILib.Components.btn.BtnBig1;
		}, undefined, undefined>;
		namespace Components {
			type HeroChallengeRender = StrictComponent<fairygui.GComponent, {
				readonly bgImg: fairygui.GLoader;
				readonly heroImg: fairygui.GLoader;
				readonly numTxt: fairygui.GRichTextField;
				readonly heroName: fairygui.GRichTextField;
				readonly proBar: HeroChallenge.Components.ProgressRender;
				readonly ani: fairygui.GGraph;
			}, 'bgCon' | 'btnCon', undefined>;
			type ProgressRender = StrictComponent<fairygui.GComponent, {
				readonly ani: fairygui.GGraph;
			}, undefined, undefined>;
		}
	}
	import __pkg__tvjpxphw = HeroDirectory;
	namespace HeroDirectory {
		type HeroDirectoryView = StrictComponent<fairygui.GComponent, {
			readonly heroList: fairygui.GList;
			readonly upArrow: fairygui.GImage;
			readonly downArrow: fairygui.GImage;
		}, undefined, undefined>;
		type HeroDirectoryDetailsView = StrictComponent<fairygui.GComponent, {
			readonly awakeItem: UILib.Components.renderer.RewardRender1;
			readonly costMoney: UILib.Components.btn.Btn7;
			readonly awakeItemList: fairygui.GList;
			readonly awakeItemName: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			readonly buyTxt: fairygui.GRichTextField;
		}, 'conUnlock', undefined>;
		namespace Components {
			type HeroTaskRender = StrictComponent<fairygui.GComponent, {
				readonly heroUnlockList: fairygui.GList;
				readonly heroCom: HeroDirectory.Components.HeroMaskRender;
				readonly graphAniTop: fairygui.GGraph;
				readonly heroNameLoader: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
				readonly btnCheck: UILib.Components.btn.BtnEmpty;
				readonly btnTip: UILib.Components.btn.BtnSearch;
			}, 'conState' | 'conDirection', undefined>;
			type AwakeItemRender = StrictComponent<fairygui.GComponent, {
				readonly reward: UILib.Components.renderer.RewardRender3;
				readonly payBtn: UILib.Components.btn.Btn7;
				readonly taskList: fairygui.GList;
				readonly itemName: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
				readonly heroUnlockList: fairygui.GList;
			}, 'conState' | 'conLock', undefined>;
			type TaskRender = StrictComponent<fairygui.GComponent, {
				readonly goBtn: UILib.Components.btn.BtnSmall2;
				readonly taskDes: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly taskProgress: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
			}, 'conFinish', undefined>;
			type HeroRes = StrictComponent<fairygui.GComponent, {
				readonly graph: fairygui.GGraph;
				readonly heroIcon: fairygui.GLoader;
				readonly mask: fairygui.GImage;
			}, undefined, undefined>;
			type UnlockConditions = StrictComponent<fairygui.GButton, {
				readonly txtCondition: fairygui.GRichTextField;
				readonly txtCondition2: fairygui.GRichTextField;
			}, 'conFinished', undefined>;
			type HeroMaskRender = StrictComponent<fairygui.GComponent, {
				readonly heroIcon: fairygui.GLoader;
			}, undefined, undefined>;
			type tipBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
	}
	import __pkg__873jw47h = HeroFightFormation;
	namespace HeroFightFormation {
		type HeroFightFormationView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly fmKuSubView: HeroFightFormation.SubView.HeroFightFormationKuSubView;
			readonly fmSubView: HeroFightFormation.SubView.HeroFightFormationSubView;
			readonly attrSubView: HeroFightFormation.SubView.HeroFightFormationAttrSubView;
			readonly slotSubView: HeroFightFormation.SubView.HeroFightFormationSlotSubView;
			readonly consumeList: fairygui.GList;
			readonly activationBtn: UILib.Components.btn.BtnBig5;
			readonly btnHelp: fairygui.GButton;
		}, 'specialState', 't0'>;
		type HeroFightFormationWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly fightFmCom: HeroFightFormation.Components.HeroFightFormationCom;
			readonly attrList: fairygui.GList;
			readonly consumeList: fairygui.GList;
			readonly activationBtn: UILib.Components.btn.BtnBig1;
		}, 'activationState' | 'consumeState', undefined>;
		type HeroFightFormationResetWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnHelp: fairygui.GButton;
			readonly btnReset: UILib.Components.btn.BtnBig1;
			readonly resetRewardList: fairygui.GList;
			readonly consumeList: fairygui.GList;
			readonly resetTip: fairygui.GRichTextField;
		}, 'consumeState' | 'fhState', undefined>;
		type HeroFightFormationRestraintWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly bg: fairygui.GLoader;
			readonly fmSlotRender0: HeroFightFormation.Components.HeroFightFmSlotRestraintRender;
			readonly fmSlotRender1: HeroFightFormation.Components.HeroFightFmSlotRestraintRender;
			readonly fmSlotRender2: HeroFightFormation.Components.HeroFightFmSlotRestraintRender;
			readonly fmSlotRender3: HeroFightFormation.Components.HeroFightFmSlotRestraintRender;
			readonly fmSlotRender4: HeroFightFormation.Components.HeroFightFmSlotRestraintRender;
			readonly fmSlotRender5: HeroFightFormation.Components.HeroFightFmSlotRestraintRender;
			readonly fmSlotRender6: HeroFightFormation.Components.HeroFightFmSlotRestraintRender;
			readonly fmSlotRender7: HeroFightFormation.Components.HeroFightFmSlotRestraintRender;
		}, undefined, undefined>;
		namespace SubView {
			type HeroFightFormationSlotSubView = StrictComponent<fairygui.GComponent, {
				readonly fmSlot0: HeroFightFormation.Components.HeroFightFmSlotRender;
				readonly fmSlot2: HeroFightFormation.Components.HeroFightFmSlotRender;
				readonly fmSlot3: HeroFightFormation.Components.HeroFightFmSlotRender;
				readonly fmSpecialSlot0: HeroFightFormation.Components.HeroFightFmSpecialSlotRender;
				readonly fmSlot1: HeroFightFormation.Components.HeroFightFmSlotRender;
				readonly selectEffect: HeroFightFormation.Components.HeroFightFmSlotEffect;
				readonly bg: fairygui.GLoader;
			}, 'selectIndex', 't0'>;
			type HeroFightFormationSubView = StrictComponent<fairygui.GComponent, {
				readonly fightFmCom: HeroFightFormation.Components.HeroFightFormationCom;
				readonly fightFmBtn: UILib.Components.btn.BtnBig5;
				readonly forgetBtn: UILib.Components.btn.BtnBig1;
			}, 'equipmentState' | 'forgetState', 't0'>;
			type HeroFightFormationAttrSubView = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly upAttrRender: HeroFightFormation.Components.AttrRender.HeroFightFmAttrRender;
				readonly breachAttrRender: HeroFightFormation.Components.AttrRender.HeroFightFmAttrBreachRender;
				readonly restraintRender: HeroFightFormation.Components.AttrRender.HeroFightFmRestraintRender;
				readonly passiveAttrRender: HeroFightFormation.Components.AttrRender.HeroFightFmAttrPassiveRender;
			}, undefined, undefined>;
			type HeroFightFormationKuSubView = StrictComponent<fairygui.GComponent, {
				readonly kuBg: fairygui.GLoader;
				readonly fmSlotRender0: HeroFightFormation.Components.HeroFightFmSlotKuRender;
				readonly fmSlotRender1: HeroFightFormation.Components.HeroFightFmSlotKuRender;
				readonly fmSlotRender2: HeroFightFormation.Components.HeroFightFmSlotKuRender;
				readonly fmSlotRender3: HeroFightFormation.Components.HeroFightFmSlotKuRender;
				readonly fmSlotRender4: HeroFightFormation.Components.HeroFightFmSlotKuRender;
				readonly fmSlotRender5: HeroFightFormation.Components.HeroFightFmSlotKuRender;
				readonly fmSlotRender6: HeroFightFormation.Components.HeroFightFmSlotKuRender;
				readonly fmSlotRender7: HeroFightFormation.Components.HeroFightFmSlotKuRender;
			}, undefined, undefined>;
		}
		namespace Components {
			type HeroFightFmSlotRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly fightFmIcon: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly redPoint: fairygui.GImage;
				readonly bzGroup: fairygui.GGroup;
				readonly btnEmpty: UILib.Components.btn.BtnEmpty;
				readonly fightFmName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'addState' | 'lockState' | 'equippingState' | 'button' | 'slotState', undefined>;
			type HeroFightFmSpecialSlotRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly fightFmIcon: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly redPoint: fairygui.GImage;
				readonly btnEmpty: UILib.Components.btn.BtnEmpty;
				readonly fightFmName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly bzGroup: fairygui.GGroup;
			}, 'lockState' | 'equippingState' | 'button' | 'activationState', undefined>;
			type HeroFightFormationCom = StrictComponent<fairygui.GComponent, {
				readonly fmLoader: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroFightFmSlotKuRender = StrictComponent<fairygui.GButton, {
				readonly fightFmIcon: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly redPoint: fairygui.GImage;
				readonly klwGroup: fairygui.GGroup;
				readonly lwGroup: fairygui.GGroup;
				readonly fightFmName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'activationState', undefined>;
			type HeroFightFormationBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type HeroFightFmBzAttrRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly fightFmIcon: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly attrList: fairygui.GList;
				readonly attrBreachList: fairygui.GList;
				readonly restraintTip0: fairygui.GRichTextField;
				readonly restraintTip1: fairygui.GRichTextField;
				readonly fmTip: fairygui.GTextField;
				readonly fmTip1: fairygui.GTextField;
				readonly title: fairygui.GRichTextField;
			}, 'attrState', undefined>;
			type HeroFmItemCheckRender = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly txtName: fairygui.GRichTextField;
			}, 'button', undefined>;
			type HeroFightFmSlotEffect = StrictComponent<fairygui.GComponent, {
				readonly selectEffect: fairygui.GLoader;
			}, undefined, 't0'>;
			type HeroFightFmSlotRestraintRender = StrictComponent<fairygui.GButton, {
				readonly fightFmIcon: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly fightFmName: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, undefined, undefined>;
		}
		namespace Components.AttrRender {
			type HeroFightFmAttrRender = StrictComponent<fairygui.GComponent, {
				readonly attrList: fairygui.GList;
				readonly rewardList: fairygui.GList;
				readonly upBtn: UILib.Components.btn.BtnSmall4;
				readonly upGroup: fairygui.GGroup;
				readonly maxGroup: fairygui.GGroup;
				readonly title: fairygui.GRichTextField;
			}, 'upState' | 'maxedState', undefined>;
			type HeroFightFmAttdispRender = StrictComponent<fairygui.GComponent, {
				readonly arrow: fairygui.GImage;
				readonly effect: fairygui.GGraph;
				readonly txtAttr: fairygui.GRichTextField;
			}, 'showNextState', undefined>;
			type HeroFightFmBreachAttdispRender = StrictComponent<fairygui.GComponent, {
				readonly star: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
				readonly txtAttr: fairygui.GRichTextField;
			}, 'triggerState', undefined>;
			type HeroFightFmRestraintRender = StrictComponent<fairygui.GComponent, {
				readonly fightFmIcon: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly ckBtn: UILib.Components.btn.BtnSmall4;
				readonly restraintTip: fairygui.GTextField;
				readonly restraintTip0: fairygui.GRichTextField;
				readonly restraintTip1: fairygui.GRichTextField;
				readonly title: fairygui.GRichTextField;
			}, 'specialState', undefined>;
			type HeroFightFmAttrPassiveRender = StrictComponent<fairygui.GComponent, {
				readonly attrList: fairygui.GList;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type HeroFightFmAttrBreachRender = StrictComponent<fairygui.GComponent, {
				readonly attrList: fairygui.GList;
				readonly rewardList: fairygui.GList;
				readonly upBtn: UILib.Components.btn.BtnSmall4;
				readonly upGroup: fairygui.GGroup;
				readonly maxGroup: fairygui.GGroup;
				readonly title: fairygui.GRichTextField;
			}, 'upState' | 'maxedState', undefined>;
			type HeroFightFmAttdispRestraintRender = StrictComponent<fairygui.GComponent, {
				readonly effect: fairygui.GGraph;
				readonly txtAttr: fairygui.GRichTextField;
			}, 'showNextState', undefined>;
			type HeroFightFmBreachAttdispRestraintRender = StrictComponent<fairygui.GComponent, {
				readonly star: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
				readonly txtAttr: fairygui.GRichTextField;
			}, 'triggerState', undefined>;
		}
	}
	import __pkg__j58mroyn = HeroFlairTip;
	namespace HeroFlairTip {
		type HeroFlairTipWindow = StrictComponent<fairygui.GComponent, {
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, 't0' | 't1'>;
	}
	import __pkg__zcq5yr0v = HeroGodAwake;
	namespace HeroGodAwake {
		type HeroGodAwakeWindow = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly heroResView: HeroGodAwake.Components.HeroGodAssistant;
			readonly heroSkeleton: UILibHero.Components.SkeletonView;
			readonly btnClose: UILib.Components.btn.BtnClose5;
			readonly playName: fairygui.GTextField;
			readonly heroName: fairygui.GTextField;
		}, undefined, 'openAni'>;
		type HeroGodAwake = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly heroResView: HeroGodAwake.Components.HeroGodAssistant;
			readonly heroSkeleton: UILibHero.Components.SkeletonView;
			readonly heroGod: fairygui.GLoader;
			readonly heroName: fairygui.GLoader;
			readonly playName: fairygui.GRichTextField;
		}, undefined, 'openAni'>;
		namespace Components {
			type HeroGodAssistant = StrictComponent<fairygui.GComponent, {
				readonly heroRes: fairygui.GLoader;
			}, undefined, undefined>;
		}
	}
	
	import __pkg__z3rehe8e = HeroLines;
	namespace HeroLines {
		type HeroLinesView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly btnHelp: fairygui.GButton;
			readonly redPoint0: fairygui.GImage;
		}, 'viewCon', undefined>;
		type HeroLinesBagWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnwear: UILib.Components.btn.BtnBig5;
			readonly btnworn: UILib.Components.btn.BtnBig5;
			readonly btnremove: UILib.Components.btn.BtnBig5;
			readonly btntihuan: UILib.Components.btn.BtnBig5;
			readonly currItem0: HeroLines.Components.HeroLinesItem;
			readonly currItem1: HeroLines.Components.HeroLinesItem1;
			readonly currItem2: HeroLines.Components.HeroLinesItem2;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly slider: UILib.Components.silder.silder_com_3;
			readonly proBar: UILib.Components.progressBar.ProgressBar2;
			readonly currList: fairygui.GList;
			readonly btnCutDown: UILib.Components.btn.BtnCutDown;
			readonly lvBox: fairygui.GGroup;
			readonly lvBtn: UILib.Components.btn.BtnBig4;
			readonly czBtn: UILib.Components.btn.BtnCutDown;
		}, 'btnState' | 'txtCon' | 'isMax', undefined>;
		type HeroLinesDecomposeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly wuImg: fairygui.GLoader;
			readonly txtList: fairygui.GList;
			readonly tab2: HeroLines.Components.HeroLinesTitleBtn;
			readonly tab1: HeroLines.Components.HeroLinesTitleBtn;
			readonly tab0: HeroLines.Components.HeroLinesTitleBtn;
			readonly list: fairygui.GList;
			readonly titleTxt: UILib.Components.fontTab_richText.__cmpt__lxexa3tlqg;
			readonly noItem: fairygui.GImage;
			readonly currItem0: HeroLines.Components.HeroLinesItem;
			readonly currItem1: HeroLines.Components.HeroLinesItem1;
			readonly currItem2: HeroLines.Components.HeroLinesItem2;
			readonly checkBtn1: HeroLines.Components.DrawBtn;
			readonly listDown: fairygui.GList;
			readonly btnremove: UILib.Components.btn.BtnBig1;
		}, 'txtCon' | 'c2', undefined>;
		type HeroLinesOverviewWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly txtSheng: fairygui.GList;
			readonly txtShen: fairygui.GList;
			readonly txtXing: fairygui.GList;
		}, undefined, undefined>;
		type HerolinesLevelWindow = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GLoader;
			readonly currList: fairygui.GList;
			readonly txtName: UILib.Components.fontTab.__cmpt__gsraa3tlly;
			readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly downAtt: UILib.Components.fontTab.__cmpt__f73xa3tlhq;
			readonly Background: fairygui.GGroup;
			readonly light1: fairygui.GLoader;
		}, undefined, 't0'>;
		type HeroLinesSeeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly tab2: HeroLines.Components.HeroLinesTitleBtn;
			readonly tab1: HeroLines.Components.HeroLinesTitleBtn;
			readonly tab0: HeroLines.Components.HeroLinesTitleBtn;
			readonly list: fairygui.GList;
			readonly listGetWay: fairygui.GList;
			readonly currItem0: HeroLines.Components.HeroLinesItem;
			readonly txtList: fairygui.GList;
			readonly currItem1: HeroLines.Components.HeroLinesItem1;
			readonly currItem2: HeroLines.Components.HeroLinesItem2;
		}, 'txtCon', undefined>;
		type HeroLinesResetWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly item: UILib.Components.renderer.RewardRender3;
			readonly okBtn: UILib.Components.btn.BtnBig4;
			readonly noBtn: UILib.Components.btn.BtnBig2;
			readonly titleTxt: UILib.Components.fontTab_richText.__cmpt__lxexa3tlqg;
		}, undefined, undefined>;
		type HeroLinesCompareWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly currItem2: HeroLines.Components.HeroLinesItem;
			readonly currItem1: HeroLines.Components.HeroLinesItem1;
			readonly currItem0: HeroLines.Components.HeroLinesItem2;
			readonly newItem0: HeroLines.Components.HeroLinesItem2;
			readonly newItem1: HeroLines.Components.HeroLinesItem1;
			readonly newItem2: HeroLines.Components.HeroLinesItem;
			readonly list1: fairygui.GList;
			readonly noBtn: UILib.Components.btn.BtnBig2;
			readonly okBtn: UILib.Components.btn.BtnBig4;
			readonly list2: fairygui.GList;
		}, 'txtCon', undefined>;
		namespace subView {
			type HeroLinesItemSubView = StrictComponent<fairygui.GComponent, {
				readonly item8: HeroLines.Components.HeroLinesItem;
				readonly item5: HeroLines.Components.HeroLinesItem1;
				readonly item3: HeroLines.Components.HeroLinesItem2;
				readonly item0: HeroLines.Components.HeroLinesItem2;
				readonly leftBtn: HeroLines.Components.BtnArmyArrow;
				readonly rightBtn: HeroLines.Components.BtnArmyArrow;
				readonly allBtn: UILib.Components.btn.BtnCutDown;
				readonly lvTxt: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
				readonly listGetWay: fairygui.GList;
				readonly item1: HeroLines.Components.HeroLinesItem2;
				readonly item2: HeroLines.Components.HeroLinesItem2;
				readonly item7: HeroLines.Components.HeroLinesItem1;
				readonly item4: HeroLines.Components.HeroLinesItem1;
				readonly item6: HeroLines.Components.HeroLinesItem1;
				readonly item9: HeroLines.Components.HeroLinesItem;
				readonly item11: HeroLines.Components.HeroLinesItem;
				readonly item10: HeroLines.Components.HeroLinesItem;
				readonly list: fairygui.GList;
				readonly allAttBtn: UILib.Components.btn.BtnCutDown;
				readonly decomposeBtn: UILib.Components.btn.BtnCutDown;
				readonly tabList: fairygui.GList;
			}, 'cState' | 'typeCon', undefined>;
			type HeroLinesSynthesisSubView = StrictComponent<fairygui.GComponent, {
				readonly tabList: fairygui.GList;
				readonly item0: HeroLines.Components.HeroLinesItem2;
				readonly item1: HeroLines.Components.HeroLinesItem1;
				readonly item2: HeroLines.Components.HeroLinesItem;
				readonly list: fairygui.GList;
				readonly listBag: fairygui.GList;
				readonly composeBtn: UILib.Components.btn.BtnBig4;
				readonly attList: fairygui.GList;
				readonly listBox: fairygui.GGroup;
				readonly lvTxt: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
			}, 'typeCon' | 'qualityCon' | 'listCon', undefined>;
		}
		namespace Components {
			type HeroLinesTitleItem = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon1: fairygui.GLoader;
				readonly icon0: fairygui.GLoader;
			}, 'button' | 'isRed', undefined>;
			type HeroLinesAttItem = StrictComponent<fairygui.GComponent, {
				readonly downAtt: UILib.Components.fontTab.__cmpt__f73xa3tlhq;
				readonly txtName: UILib.Components.fontTab.__cmpt__gsraa3tlly;
				readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'isMax', undefined>;
			type HeroLinesItem = StrictComponent<fairygui.GButton, {
				readonly bgIcon: fairygui.GLoader;
				readonly iconImg: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
				readonly txt: fairygui.GRichTextField;
				readonly txtBox: fairygui.GGroup;
				readonly heroLinesQuality: fairygui.GLoader;
				readonly txtLv: fairygui.GRichTextField;
				readonly redPoint: fairygui.GImage;
			}, 'con' | 'isRed' | 'btnCon' | 'stageCon' | 'typeCon' | 'state', undefined>;
			type AttItemRander = StrictComponent<fairygui.GComponent, {
				readonly txtName: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CircularHead = StrictComponent<fairygui.GComponent, {
				readonly iconImg: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroLinesIcon = StrictComponent<fairygui.GButton, {
				readonly txt: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly item: UILib.Components.renderer.RewardRender2;
				readonly isSelect: fairygui.GImage;
				readonly loaderBg: fairygui.GLoader;
				readonly head: HeroLines.Components.CircularHead;
				readonly loaderFrame: fairygui.GLoader;
			}, 'button' | 'isSelect', undefined>;
			type titleBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type GetWayRender = StrictComponent<fairygui.GComponent, {
				readonly btnGo: UILib.Components.btn.BtnIcon;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type HeroLinesItem1 = StrictComponent<fairygui.GButton, {
				readonly bgIcon: fairygui.GLoader;
				readonly iconImg: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
				readonly txt: fairygui.GRichTextField;
				readonly txtBox: fairygui.GGroup;
				readonly heroLinesQuality: fairygui.GLoader;
				readonly txtLv: fairygui.GRichTextField;
				readonly redPoint: fairygui.GImage;
			}, 'con' | 'isRed' | 'btnCon' | 'stageCon' | 'typeCon' | 'state', undefined>;
			type HeroLinesItem2 = StrictComponent<fairygui.GButton, {
				readonly bgIcon: fairygui.GLoader;
				readonly iconImg: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
				readonly txt: fairygui.GRichTextField;
				readonly txtBox: fairygui.GGroup;
				readonly heroLinesQuality: fairygui.GLoader;
				readonly txtLv: fairygui.GRichTextField;
				readonly redPoint: fairygui.GImage;
			}, 'con' | 'isRed' | 'btnCon' | 'stageCon' | 'typeCon' | 'state', undefined>;
			type AllAttItemRander = StrictComponent<fairygui.GComponent, {
				readonly attTxt: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, undefined, undefined>;
			type HeroLinesLevelAttRander = StrictComponent<fairygui.GComponent, {
				readonly downAtt: UILib.Components.fontTab.__cmpt__f73xa3tlhq;
				readonly txtName: UILib.Components.fontTab.__cmpt__gsraa3tlly;
				readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
			type BtnArmyArrow = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type DrawBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type ViewTypeBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type HeroLinesIcon1 = StrictComponent<fairygui.GButton, {
				readonly txt: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly item: UILib.Components.renderer.RewardRender1;
				readonly isSelect: fairygui.GImage;
				readonly loaderBg: fairygui.GLoader;
				readonly head: HeroLines.Components.CircularHead;
				readonly loaderFrame: fairygui.GLoader;
			}, 'button' | 'isSelect', undefined>;
			type HeroLinesTitleBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type SyntheslsTxtTRender = StrictComponent<fairygui.GComponent, {
				readonly txtName: fairygui.GRichTextField;
				readonly txtNum: fairygui.GRichTextField;
			}, undefined, undefined>;
			type AttCompareRender = StrictComponent<fairygui.GComponent, {
				readonly txtName: fairygui.GRichTextField;
				readonly txtNum: fairygui.GRichTextField;
			}, undefined, undefined>;
			type SynthesisItem = StrictComponent<fairygui.GComponent, {
				readonly item: UILib.Components.renderer.RewardRender1;
				readonly txtName: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__1jifdvnl = HeroLinesDraw;
	namespace HeroLinesDraw {
		type HeroLinesDrawView = StrictComponent<fairygui.GComponent, {
			readonly drawBtn: UILib.Components.btn.BtnCutDown;
			readonly mianfei: UILib.Components.btn.BtnBig1;
			readonly ciTxt: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly list: fairygui.GList;
			readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp6;
			readonly rewardBox: fairygui.GGroup;
			readonly tenBtn: HeroLinesDraw.Components.HeroLinesDrawBtn;
			readonly oneBtn: HeroLinesDraw.Components.HeroLinesDrawBtn;
		}, undefined, 't0' | 't1'>;
		type HeroLinesDropWindow = StrictComponent<fairygui.GComponent, {
			readonly tab1: HeroLinesDraw.Components.titleBtb;
			readonly tab2: HeroLinesDraw.Components.titleBtb;
			readonly tab3: HeroLinesDraw.Components.titleBtb;
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type titleBtb = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type HeroLinesDrawIcon = StrictComponent<fairygui.GButton, {
				readonly item: UILib.Components.renderer.RewardRender2;
				readonly wTxt: fairygui.GRichTextField;
			}, undefined, undefined>;
			type HeroLinesDrawBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly numImg: fairygui.GLoader;
				readonly btnItem: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__v3garn31 = HeroResetActivity;
	namespace HeroResetActivity {
		type HeroResetActivityWindow = StrictComponent<fairygui.GComponent, {
			readonly time: fairygui.GTextField;
			readonly gotoBtn: UILib.Components.btn.BtnBig1;
			readonly close: HeroResetActivity.Comp.BtnClose;
		}, 'c1', undefined>;
		namespace Comp {
			type BtnClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
	}
	import __pkg__eadwtxhv = HeroSelect;
	namespace HeroSelect {
		type HeroSelectWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnGo: UILib.Components.btn.BtnBig5;
			readonly listHero: fairygui.GList;
			readonly textTip: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
		}, 'heroEmpty', undefined>;
		type HeroPbbzWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly listHero: fairygui.GList;
			readonly txtFightPower: UILibHero.Components.fight.FightPowerBig;
			readonly heroCount: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conIsMine' | 'conGoBtnName', undefined>;
		type HeroMultipleChoiceWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnGo: UILib.Components.btn.BtnBig3;
			readonly listHero: fairygui.GList;
			readonly txtPutNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			readonly textTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtDesc: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtFightPower: UILibHero.Components.fight.FightPowerBig;
			readonly txtFight: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
		}, 'heroEmpty' | 'conPveType' | 'conIsShowFight', undefined>;
		type HeroSelectCurrencyWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnGo: UILib.Components.btn.BtnBig3;
			readonly listHero: fairygui.GList;
			readonly txtPutNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDesc: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly textTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtFightPower: UILibHero.Components.fight.FightPowerBig;
			readonly txtFight: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
		}, 'heroEmpty' | 'conIsShowFight', undefined>;
	}
	import __pkg__vhuy8ke8 = HeroStrategy;
	namespace HeroStrategy {
		type HeroStrategyView = StrictComponent<fairygui.GComponent, {
			readonly loaderHero: fairygui.GLoader;
			readonly btnBack: MainUI.Components.viewUI.btnback;
			readonly heroinfoCom: HeroStrategy.Compoments.heroInfoCom;
			readonly listBtn: fairygui.GList;
			readonly subViewContainer: fairygui.GComponent;
		}, 'tagCL' | 'conIsShowBack', undefined>;
		namespace Compoments {
			type HeroStrategyRender = StrictComponent<fairygui.GComponent, {
				readonly listItem0: fairygui.GList;
				readonly listItem1: fairygui.GList;
				readonly listItem2: fairygui.GList;
				readonly listItem3: fairygui.GList;
			}, 'conType', undefined>;
			type ItemRender = StrictComponent<fairygui.GComponent, {
				readonly render: UILib.Components.renderer.RewardRender4;
			}, 'conIsTab', undefined>;
			type StrategyRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GImage;
				readonly list: fairygui.GList;
			}, 'conType', undefined>;
			type Button1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'conIsRed' | 'button', undefined>;
			type HeroAppraiseRender = StrictComponent<fairygui.GComponent, {
				readonly serverName: fairygui.GTextField;
				readonly playerName: fairygui.GTextField;
				readonly time: fairygui.GTextField;
				readonly txt: fairygui.GTextField;
				readonly zanBtn: HeroStrategy.Compoments.Button3;
				readonly caiBtn: HeroStrategy.Compoments.Button3;
			}, 'isHot', undefined>;
			type RankHeroRender = StrictComponent<fairygui.GButton, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly txtFight: UILibHero.Components.fight.FightPowerBig;
				readonly listStar: fairygui.GList;
				readonly txtRanking: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtHeroName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conIsOwn' | 'conIsShowRank' | 'conRanking' | 'conQuality' | 'conIsLight', undefined>;
			type Button2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsRight' | 'conIsCanRed', undefined>;
			type Button3 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type InscriptionRender = StrictComponent<fairygui.GButton, {
				readonly render: UILib.Components.renderer.RewardRender2;
				readonly txtName: fairygui.GRichTextField;
			}, undefined, undefined>;
			type likeBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type heroInfoCom = StrictComponent<fairygui.GComponent, {
				readonly nameQuality: fairygui.GLoader;
				readonly heroQualtiy: fairygui.GLoader;
				readonly graphAniQuality: fairygui.GGraph;
				readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljv;
			}, undefined, undefined>;
		}
		namespace Compoments.SubView {
			type HeroStrategySubView = StrictComponent<fairygui.GComponent, {
				readonly txtDes1: fairygui.GRichTextField;
				readonly txtDes2: fairygui.GRichTextField;
				readonly txtDes3: fairygui.GRichTextField;
				readonly infoList: fairygui.GList;
			}, undefined, undefined>;
			type HeroStrategyRankSubView = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
				readonly helpBtn: fairygui.GButton;
			}, undefined, undefined>;
			type HeroStrategyAppraiseSubView = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
				readonly likeValue: fairygui.GRichTextField;
				readonly likeBtn: HeroStrategy.Compoments.likeBtn;
				readonly tag1: HeroStrategy.Compoments.Button2;
				readonly tag2: HeroStrategy.Compoments.Button2;
				readonly emptyImage: fairygui.GLoader;
				readonly btnSend: UILib.Components.btn.BtnSmall2;
				readonly txtInput: fairygui.GTextField;
				readonly btnInput: UILib.Components.btn.BtnEmpty;
				readonly groupInput: fairygui.GGroup;
				readonly black: UILib.Components.btn.BtnEmpty;
				readonly okBtn: UILib.Components.btn.BtnSmall2;
				readonly txtInputBig: fairygui.GTextField;
			}, 'c1' | 'isShowInputWin', undefined>;
		}
	}
	import __pkg__05cg6bmc = HeroTrain;
	namespace HeroTrain {
		type HeroTrainView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnCousume: UILib.Components.renderer.ConsumeRender;
			readonly btnGold: UILib.Components.btn.Btn7;
			readonly btnTime: UILib.Components.btn.Btn6;
			readonly btnAbandon: UILib.Components.btn.BtnSmall3;
			readonly btnOutput: HeroTrain.Components.render.CityEstateOutPutBtn;
			readonly weiZhi: HeroTrain.Components.HeroUTrainRender;
			readonly listHero: fairygui.GList;
			readonly listReward: fairygui.GList;
			readonly listDesc: fairygui.GList;
			readonly txtConsume: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtRemainTimes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTime: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtOutputType: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpv;
			readonly txtAbandonTime: fairygui.GRichTextField;
		}, 'unknownState' | 'conHero', undefined>;
		type HeroTrainSpeedView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly rewardList: fairygui.GList;
			readonly trainSpeedRender: HeroTrain.Components.HeroTrainSpeedRender;
			readonly btnSpeed: UILib.Components.btn.BtnBig4;
			readonly btnOutput: HeroTrain.Components.render.CityEstateOutPutBtn;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			readonly txtNameLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conState', undefined>;
		namespace Components {
			type HeroTrainSpeedRender = StrictComponent<fairygui.GComponent, {
				readonly headRender: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderLvBg: fairygui.GLoader;
				readonly proBar: UILib.Components.proBar.ProgressBarAffair;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpg;
				readonly cityName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtContent: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtSkillLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
				readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtSkill: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly txtLv: fairygui.GRichTextField;
			}, undefined, undefined>;
			type HeroTrainRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly comTime: UILibHero.Components.render.cityHeroRender.HeroBusyTimeRender;
				readonly txtState: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly txtSkill: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly txtSkillLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			}, 'button' | 'trainState' | 'conShowTime', undefined>;
			type HeroUTrainRender = StrictComponent<fairygui.GComponent, {
				readonly iconQuality: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroTrainDescRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly btngo: UILib.Components.btn.BtnSmall2;
				readonly txtTitle: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6z;
				readonly txtDesc: fairygui.GRichTextField;
			}, 'conIsHave' | 'IsActive', undefined>;
		}
		namespace Components.render {
			type CityEstateOutPutBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
		}
	}
	import __pkg__8jiui98o = HeroVisit;
	namespace HeroVisit {
		type WorldVisitCompleteView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnOK: UILib.Components.btn.BtnBig1;
			readonly btnAward: UILib.Components.renderer.RewardRender1;
			readonly btnSearch: UILib.Components.btn.BtnSearch;
			readonly progressBar0: HeroVisit.Components.ProgressBarFinish2;
			readonly progressBar1: HeroVisit.Components.ProgressBarFinish1;
			readonly progressBar2: HeroVisit.Components.ProgressBarFinish;
			readonly txtDesc: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtInfo: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
		}, 'conQuality', undefined>;
		type WorldVisitView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnConsume: UILib.Components.renderer.ConsumeRender;
			readonly btnMoney: UILib.Components.btn.Btn7;
			readonly btnTime: UILib.Components.btn.Btn6;
			readonly btnReward: UILib.Components.renderer.RewardRender4;
			readonly btnSearch: UILib.Components.btn.BtnSearch;
			readonly listDesc: fairygui.GList;
			readonly listHero: fairygui.GList;
			readonly txtVisitNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
			readonly txtAttr: fairygui.GRichTextField;
		}, 'conAttr' | 'conHero', undefined>;
		type CityAffairView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly proTime: UILib.Components.proBar.ProgressBarAffair;
			readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly btnSearch: UILib.Components.btn.BtnSearch;
			readonly btnAward: UILib.Components.renderer.RewardRender1;
			readonly btnOK: UILib.Components.btn.BtnBig1;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
			readonly txtHeroName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpg;
			readonly txtStatus: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtCityName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtSkillName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtTalkLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
			readonly txtMainAttr: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
			readonly txtAttrNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
		}, 'conType' | 'conQuality' | 'conAttr', undefined>;
		namespace Components {
			type WorldVisitRender = StrictComponent<fairygui.GButton, {
				readonly comHeroHead: UILibHero.Components.render.HeroTroopRender;
				readonly comTime: UILibHero.Components.render.cityHeroRender.HeroBusyTimeRender;
				readonly txtSkillName: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly txtTalkLv: fairygui.GTextField;
				readonly txtMainAttr: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
				readonly txtAttrNum: fairygui.GTextField;
				readonly txtStateDesc: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, 'button' | 'conIsFate' | 'conIsGray' | 'conIsTime', undefined>;
			type ProgressBarFinish = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBarFinish1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBarFinish2 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type WorldVisitDescRender = StrictComponent<fairygui.GComponent, {
				readonly btnHave: HeroVisit.Components.Button_Check;
				readonly txtTitle: fairygui.GTextField;
				readonly txtDesc: fairygui.GRichTextField;
			}, 'conIsHave', undefined>;
			type Button_Check = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
	}
	import __pkg__bvj8ew6d = History;
	namespace History {
		type HistoryView = StrictComponent<fairygui.GComponent, {
			readonly topzlBg: fairygui.GLoader;
			readonly topBg: fairygui.GLoader;
			readonly loaderLight: fairygui.GLoader;
			readonly imgLight2: fairygui.GImage;
			readonly listHistory: fairygui.GList;
			readonly listTotalHistory: fairygui.GList;
			readonly listGroup: fairygui.GGroup;
			readonly listSelect: fairygui.GList;
			readonly topJt: fairygui.GImage;
			readonly bottomJt: fairygui.GImage;
			readonly totleProgress: UILib.Components.proBar.ProgressBarYellow;
			readonly chengCProgress: UILib.Components.proBar.ProgressBarBlue1;
			readonly battlefieldProgress: UILib.Components.proBar.ProgressBarGreen1;
			readonly administrasionProgress: UILib.Components.proBar.ProgressBarRed;
			readonly thrillingProgress: UILib.Components.proBar.ProgressBarOrange;
			readonly btnTips: fairygui.GButton;
			readonly effectFire: fairygui.GGraph;
			readonly totalGroup: fairygui.GGroup;
		}, 'conIsNoHistory' | 'conIsTotal' | 'btnState', 'aniFire'>;
		namespace Components {
			type HistoryRender = StrictComponent<fairygui.GComponent, {
				readonly redPoint: fairygui.GImage;
				readonly progress: UILib.Components.proBar.ProgressBarBlue;
				readonly getBtn: History.Components.BtnBoxState;
				readonly reachIcon: fairygui.GLoader;
				readonly historyName: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
				readonly historyDis: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly historyTime: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
			}, 'conIsReward', undefined>;
			type BtnBoxState = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnStateType = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
			}, 'button', undefined>;
		}
	}
	import __pkg__kapfnkcq = HistoryTaskTip;
	namespace HistoryTaskTip {
		type HistoryTaskTipWindow = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly aniGra: fairygui.GGraph;
			readonly taskName: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly taskTime: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly taskStr: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly text: fairygui.GGroup;
			readonly reachIcon_01: fairygui.GLoader;
			readonly reachIcon_05: fairygui.GLoader;
			readonly reachIcon_02: fairygui.GLoader;
			readonly reachIcon: fairygui.GLoader;
			readonly reachIcon_03: fairygui.GLoader;
			readonly reachIcon_04: fairygui.GLoader;
		}, undefined, 'ani'>;
	}
	import __pkg__5f2dglyf = ImmortalTarget;
	namespace ImmortalTarget {
		type ImmortalTargetView = StrictComponent<fairygui.GComponent, {
			readonly listTarget: fairygui.GList;
			readonly txtTime: fairygui.GTextField;
		}, undefined, undefined>;
		namespace Components {
			type ImmortalTargetRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly btnGo: UILib.Components.btnAct.BtnAct6;
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly txtTip: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
				readonly txtName: fairygui.GTextField;
				readonly txtRale: fairygui.GTextField;
				readonly txtRemainCount: fairygui.GTextField;
			}, 'conState', undefined>;
		}
	}
	import __pkg__lc1szb0f = Information;
	namespace Information {
		type InformationWindow = StrictComponent<fairygui.GComponent, {
			readonly listInformation: fairygui.GList;
			readonly listTokenNotice: fairygui.GList;
			readonly btnInformation: Information.Componts.Button_Radio0;
			readonly btnTokenNotice: Information.Componts.Button_Radio0;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
		}, 'conIsInformation' | 'conIsNull', undefined>;
		namespace Componts {
			type InformationRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly btnGoTo: UILib.Components.btn.BtnSmall2;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtDesc: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpv;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
			}, 'conIsType', undefined>;
			type Button_Radio0 = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
		}
	}
	import __pkg__q9hu66wd = InputText;
	namespace InputText {
		type InputTextWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly inputFaceView: InputText.InputFaceView;
			readonly btnCom: InputText.Components.BtnCom;
			readonly txtInput: fairygui.GTextField;
		}, undefined, undefined>;
		type InputFaceView = StrictComponent<fairygui.GComponent, {
			readonly listFace: fairygui.GList;
			readonly listFaceSpecial: fairygui.GList;
			readonly btnTip: UILib.Components.btn.BtnEmpty;
		}, 'conType' | 'conLock', undefined>;
		namespace Components {
			type FaceRender = StrictComponent<fairygui.GButton, {
				readonly anim: fairygui.GGraph;
			}, 'button', undefined>;
			type FaceSpecialRender = StrictComponent<fairygui.GButton, {
				readonly anim: fairygui.GGraph;
			}, 'button', undefined>;
			type BtnTab = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnFace = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnCom = StrictComponent<fairygui.GComponent, {
				readonly btnOk: UILib.Components.btn.BtnSmall1;
				readonly btnFace: InputText.Components.BtnFace;
				readonly btnSel: UILib.Components.button_checkbox.Button_Check4;
				readonly bulletTimeTxt: fairygui.GRichTextField;
			}, 'bulletCon' | 'bulletTxtCon' | 'conFaceBtn', undefined>;
		}
	}
	import __pkg__pt9pgjed = JingZhou;
	namespace JingZhou {
		type JingZhouMainView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly listType: fairygui.GList;
		}, 'conOpenSel', 't0'>;
		type JingZhouApplyWindow = StrictComponent<fairygui.GComponent, {
			readonly btnGo: UILib.Components.btnSpecial.BtnOrang;
			readonly btnApply: UILib.Components.btnSpecial.BtnOrang;
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
			readonly comDes: JingZhou.Components.jingZhouApplyDesCom;
			readonly listHero: fairygui.GList;
			readonly listType: fairygui.GList;
			readonly txtMyTroop: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			readonly txtDes: fairygui.GTextField;
		}, 'conState' | 'conIsCanPlay' | 'conType', undefined>;
		type JingZhouRuneTipWindow = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly txt1: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txt2: UILib.Components.fontTab.__cmpt__kyk1a3tljk;
		}, undefined, undefined>;
		namespace SubViews {
			type JingZhouHegemonySubView = StrictComponent<fairygui.GComponent, {
				readonly txtTitle: fairygui.GLoader;
				readonly loaderCity: fairygui.GLoader;
				readonly loaderMap: fairygui.GLoader;
				readonly listType: fairygui.GList;
				readonly renderRune1: JingZhou.Components.RunCom;
				readonly renderRune2: JingZhou.Components.RunCom;
				readonly renderRune3: JingZhou.Components.RunCom;
				readonly btnTroop: fairygui.GLoader;
				readonly graphChange1: fairygui.GGraph;
				readonly graphChange2: fairygui.GGraph;
				readonly graphChange3: fairygui.GGraph;
				readonly btnGo1: UILib.Components.btn.BtnSmall1;
				readonly btnGo2: UILib.Components.btn.BtnSmall1;
				readonly btnGo3: UILib.Components.btn.BtnSmall1;
				readonly txtTime: UILib.Components.fontTab.__cmpt__kyk1a3tljm;
				readonly txtcityName: fairygui.GTextField;
				readonly txtDes1: fairygui.GRichTextField;
				readonly txtDes2: fairygui.GRichTextField;
				readonly txtDes3: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'conCountry' | 'conCity' | 'conIsRune', undefined>;
			type JingzhouScoreSubView = StrictComponent<fairygui.GComponent, {
				readonly listRank: fairygui.GList;
				readonly listRankReward: fairygui.GList;
				readonly listRender: fairygui.GList;
				readonly listBtn: fairygui.GList;
				readonly selfRank: JingZhou.Components.JingzhouScoreRankRender;
				readonly selfReward: JingZhou.Components.JingzhouScoreRewardRender;
				readonly titleRender1: JingZhou.Components.titleRender;
				readonly titleRender2: JingZhou.Components.titleRender2;
				readonly titleRender3: JingZhou.Components.titleRender2;
				readonly titleRender4: JingZhou.Components.titleRender2;
				readonly titleRender5: JingZhou.Components.titleRender2;
				readonly txtDes2: fairygui.GTextField;
				readonly txtDes3: fairygui.GTextField;
				readonly txtDes: fairygui.GTextField;
			}, 'conType', undefined>;
			type JingZhouCountryTaskSubView = StrictComponent<fairygui.GComponent, {
				readonly taskCom: JingZhou.Components.JingZhouTaskGroupRender;
				readonly imgArrows: fairygui.GImage;
				readonly txtTitle: fairygui.GLoader;
				readonly scoreCount: fairygui.GTextField;
			}, undefined, undefined>;
			type JingZhouPersonalTaskSubView = StrictComponent<fairygui.GComponent, {
				readonly taskCom: JingZhou.Components.JingZhouTaskGroupRender;
				readonly txtTitle: fairygui.GLoader;
				readonly imgArrows: fairygui.GImage;
				readonly scoreCount: fairygui.GTextField;
			}, undefined, undefined>;
			type JingZhouChallengeTaskSubView = StrictComponent<fairygui.GComponent, {
				readonly taskCom: JingZhou.Components.JingZhouTaskGroupRender;
				readonly txtTitle: fairygui.GLoader;
				readonly imgArrows: fairygui.GImage;
				readonly scoreCount: fairygui.GTextField;
				readonly txtChallenge: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
		}
		namespace Components {
			type JingzhouScoreRankRender = StrictComponent<fairygui.GComponent, {
				readonly loaderCountry: UILib.Components.countryRender.CountryFightSmallRender;
				readonly listReward: fairygui.GList;
				readonly txtRanking: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtFight: fairygui.GTextField;
				readonly txtFigh: UILib.Components.fontTab_text.__cmpt__qmdq1no8u64;
			}, 'conRank' | 'conIsSelf' | 'conIsShowRank', undefined>;
			type JingzhouScoreRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtRank: fairygui.GTextField;
			}, 'conRank' | 'conIsSelf' | 'conIsShowRank', undefined>;
			type BtnType = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type JingZhouTaskRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly cityBg: fairygui.GLoader;
				readonly cityIcon: fairygui.GLoader;
				readonly listReward: fairygui.GList;
				readonly btnGoTo: UILib.Components.btn.BtnSmall2;
				readonly btnGet: UILib.Components.btn.BtnSmall4;
				readonly txtRound: fairygui.GRichTextField;
				readonly txtName: fairygui.GRichTextField;
				readonly cityName: fairygui.GTextField;
				readonly txtDes: fairygui.GRichTextField;
				readonly taskPro: fairygui.GRichTextField;
			}, 'finishState' | 'bgState' | 'cityNameState' | 'conIsShowRound', undefined>;
			type BtnPage = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conIsShowRed', undefined>;
			type jingZhouApplyRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.dragHeroRender.DragTroopHeroRender;
				readonly blackBg: fairygui.GImage;
			}, 'conIsNotFight', undefined>;
			type jingZhouApplyDesCom = StrictComponent<fairygui.GComponent, {
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
			type JingZhouTaskDesRender = StrictComponent<fairygui.GComponent, {
				readonly rewardDes: fairygui.GRichTextField;
			}, undefined, undefined>;
			type JingZhouTaskGroupRender = StrictComponent<fairygui.GComponent, {
				readonly listTask: fairygui.GList;
				readonly smallTagList: fairygui.GList;
				readonly txtTitle: fairygui.GTextField;
			}, undefined, undefined>;
			type titleRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender1;
				readonly loaderCountry: UILib.Components.countryRender.CountryFightSmallRender;
				readonly txtName: fairygui.GTextField;
			}, 'conIsNull' | 'conIsRight' | 'conType', undefined>;
			type titleRender2 = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender2;
				readonly loaderCountry: UILib.Components.countryRender.CountryFightSmallRender;
				readonly txtName: fairygui.GTextField;
			}, 'conIsRight' | 'conType' | 'conIsNull', undefined>;
			type territoryRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conType', undefined>;
			type BtnType2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type RunCom = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
			}, 'conCountry', undefined>;
			type TabBtn = StrictComponent<fairygui.GButton, {
				readonly imgRed: fairygui.GImage;
				readonly title1: fairygui.GTextField;
				readonly title2: fairygui.GTextField;
			}, 'button' | 'conIsShowRed', undefined>;
		}
	}
	import __pkg__6wer0a04 = JingzhouBattle;
	namespace JingzhouBattle {
		type JingzhouBattleTrailerWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly txtTip: UILib.Components.fontTab.__cmpt__9i4xa3tll4;
		}, undefined, undefined>;
		type JingZhouNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly closeBtn: UILib.Components.btn.BtnWindowClose;
			readonly btn3: JingzhouBattle.Components.TitleButton;
			readonly btn0: JingzhouBattle.Components.TitleButton;
			readonly btn2: JingzhouBattle.Components.TitleButton;
			readonly btn1: JingzhouBattle.Components.TitleButton;
		}, 'viewCon', 't0'>;
		type JingZhouExchangeShopSubWindow = StrictComponent<fairygui.GComponent, {
			readonly list: fairygui.GList;
			readonly timeTxt: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly jfTxt: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly listBtn: fairygui.GList;
		}, 'c1', undefined>;
		type JingZhouOfficerSubWindow = StrictComponent<fairygui.GComponent, {
			readonly item0: JingzhouBattle.Components.HeroRank2;
			readonly item1: JingzhouBattle.Components.HeroRank1;
			readonly item2: JingzhouBattle.Components.HeroRank1;
			readonly item4: JingzhouBattle.Components.HeroRank0;
			readonly item3: JingzhouBattle.Components.HeroRank0;
			readonly title3: JingzhouBattle.Components.HeroTitle;
			readonly title4: JingzhouBattle.Components.HeroTitle;
			readonly title2: JingzhouBattle.Components.HeroTitle;
			readonly title1: JingzhouBattle.Components.HeroTitle;
			readonly title0: JingzhouBattle.Components.HeroTitle;
		}, undefined, undefined>;
		type JingZhouPaytributeSubWindow = StrictComponent<fairygui.GComponent, {
			readonly gotoBtn: UILib.Components.btn.BtnBig1;
			readonly txtDe: fairygui.GRichTextField;
		}, undefined, undefined>;
		type JingZhouTerritorySubWindow = StrictComponent<fairygui.GComponent, {
			readonly listRender: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type HeroRank0 = StrictComponent<fairygui.GComponent, {
				readonly heroImg: JingzhouBattle.Components.HeroHead;
				readonly titleBox: fairygui.GGraph;
			}, 'c1', undefined>;
			type JingZhouShopItem = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly buyBtn: JingzhouBattle.Components.JingZhouShopBtn;
				readonly reward: UILib.Components.renderer.RewardRender3;
				readonly numTxt: fairygui.GRichTextField;
				readonly nameTxt: fairygui.GRichTextField;
			}, 'isFlip' | 'noNum', undefined>;
			type HeroHead = StrictComponent<fairygui.GComponent, {
				readonly loaderHero: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroRank1 = StrictComponent<fairygui.GComponent, {
				readonly heroImg: JingzhouBattle.Components.HeroHead;
				readonly titleBox: fairygui.GGraph;
			}, 'c1', undefined>;
			type HeroRank2 = StrictComponent<fairygui.GComponent, {
				readonly loaderHero: fairygui.GLoader;
				readonly titleBox: fairygui.GGraph;
			}, 'c1', undefined>;
			type HeroTitle = StrictComponent<fairygui.GComponent, {
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly roleName: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly btnRoleFight: fairygui.GTextField;
			}, undefined, undefined>;
			type HeroRank3 = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly heroImg: JingzhouBattle.Components.HeroHead;
				readonly bgMask: fairygui.GLoader;
				readonly roleBox: fairygui.GGraph;
				readonly titleBox: fairygui.GGraph;
			}, 'c1', undefined>;
			type HeroRank4 = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly heroImg: JingzhouBattle.Components.HeroHead;
				readonly bgMask: fairygui.GLoader;
				readonly roleBox: fairygui.GGraph;
				readonly titleBox: fairygui.GGraph;
			}, 'c1', undefined>;
			type TitleButton = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type JingZhouShopBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type HeroEffect = StrictComponent<fairygui.GComponent, {
				readonly titleBox: fairygui.GGraph;
				readonly roleBox: fairygui.GGraph;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly roleName: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly btnRoleFight: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly nameBox: fairygui.GGroup;
			}, undefined, undefined>;
			type territoryRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conType', undefined>;
			type ShopBtnRender = StrictComponent<fairygui.GButton, {
				readonly titleNo: fairygui.GLoader;
				readonly titleYes: fairygui.GLoader;
			}, 'button', undefined>;
		}
	}
	import __pkg__x4l5tfs7 = JingZhouResult;
	namespace JingZhouResult {
		type JingZhouResultWindow = StrictComponent<fairygui.GComponent, {
			readonly rankRender0: JingZhouResult.Components.JingZhouRankResultMaxRender;
			readonly rankRender1: JingZhouResult.Components.JingZhouRankResultRender;
			readonly rankRender2: JingZhouResult.Components.JingZhouRankResultRender;
			readonly rankRender3: JingZhouResult.Components.JingZhouRankResultRender;
			readonly rankRender4: JingZhouResult.Components.JingZhouRankResultRender;
			readonly rewardList: fairygui.GList;
			readonly cityName: fairygui.GRichTextField;
			readonly resultStr: fairygui.GRichTextField;
			readonly resultDes: fairygui.GRichTextField;
		}, 'c1', 't0'>;
		type JingZhouResultNewWindow = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly btn0: JingZhouResult.Components.TitleButton;
			readonly btn1: JingZhouResult.Components.TitleButton;
			readonly closeBtn: UILib.Components.btn.BtnWindowClose;
			readonly btn2: JingZhouResult.Components.TitleButton;
		}, 'viewCon', undefined>;
		namespace SubViews {
			type JingZhouTerritorySubView = StrictComponent<fairygui.GComponent, {
				readonly listRender: fairygui.GList;
				readonly btnGet: UILib.Components.btnSpecial.BtnOrang;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conType' | 'conState', undefined>;
			type JingZhouScoreSubWindow = StrictComponent<fairygui.GComponent, {
				readonly btnRank: JingZhouResult.Components.BtnType;
				readonly btnTitle: JingZhouResult.Components.BtnType;
				readonly btnRankGet: UILib.Components.btnSpecial.BtnOrang;
				readonly listRank: fairygui.GList;
				readonly selfRank: JingZhouResult.Components.JingzhouScoreRankRender;
				readonly btnTitleGet: UILib.Components.btnSpecial.BtnOrang;
				readonly titleRender1: JingZhouResult.Components.titleRender;
				readonly titleRender2: JingZhouResult.Components.titleRender2;
				readonly titleRender3: JingZhouResult.Components.titleRender2;
				readonly titleRender4: JingZhouResult.Components.titleRender2;
				readonly titleRender5: JingZhouResult.Components.titleRender2;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conType' | 'conRankState' | 'conTitleState', undefined>;
		}
		namespace Components {
			type JingZhouRankResultRender = StrictComponent<fairygui.GButton, {
				readonly countryRender: UILib.Components.countryRender.CountryFightSmallRender;
				readonly playName: fairygui.GRichTextField;
			}, 'notEmptyState', undefined>;
			type JingZhouRankResultMaxRender = StrictComponent<fairygui.GButton, {
				readonly countryRender: UILib.Components.countryRender.CountryFightSmallRender;
				readonly playName: fairygui.GRichTextField;
			}, 'notEmptyState', undefined>;
			type TitleButton = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conIsShowRed', undefined>;
			type territoryRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conType', undefined>;
			type BtnType = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conIsShowRed', undefined>;
			type JingzhouScoreRankRender = StrictComponent<fairygui.GComponent, {
				readonly loaderCountry: UILib.Components.countryRender.CountryFightSmallRender;
				readonly listReward: fairygui.GList;
				readonly txtRanking: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly txtFight: fairygui.GTextField;
				readonly txtFigh: UILib.Components.fontTab_text.__cmpt__qmdq1no8u64;
			}, 'conRank' | 'conIsSelf' | 'conIsShowRank', undefined>;
			type titleRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender1;
				readonly loaderCountry: UILib.Components.countryRender.CountryFightSmallRender;
				readonly txtName: fairygui.GTextField;
			}, 'conIsNull' | 'conIsRight' | 'conType', undefined>;
			type titleRender2 = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender2;
				readonly loaderCountry: UILib.Components.countryRender.CountryFightSmallRender;
				readonly txtName: fairygui.GTextField;
			}, 'conIsRight' | 'conType' | 'conIsNull', undefined>;
		}
	}
	import __pkg__68f5wq1z = KillingArmies;
	namespace KillingArmies {
		type KillingArmiesView = StrictComponent<fairygui.GComponent, {
			readonly diffRender1: KillingArmies.Components.Renderer.KillingArmiesDifRender;
			readonly diffRender3: KillingArmies.Components.Renderer.KillingArmiesDifRender;
			readonly diffRender2: KillingArmies.Components.Renderer.KillingArmiesDifRender;
			readonly beginChallengeBtn: UILib.Components.btn.BtnBig4;
			readonly btnReward: KillingArmies.Components.btnPreviewReward;
			readonly rankAwardBtn: UILib.Components.btn.BtnSmall4;
			readonly addTimeBtn: UILib.Components.btn.BtnAdd;
			readonly btnTip: fairygui.GButton;
			readonly btnEasy: UILib.Components.btn.BtnEmpty;
			readonly btnNormal1: UILib.Components.btn.BtnEmpty;
			readonly btnNormal2: UILib.Components.btn.BtnEmpty;
			readonly btnNormal3: UILib.Components.btn.BtnEmpty;
			readonly btnHard1: UILib.Components.btn.BtnEmpty;
			readonly btnHard2: UILib.Components.btn.BtnEmpty;
			readonly btnHard3: UILib.Components.btn.BtnEmpty;
			readonly btnPray1: UILib.Components.btn.BtnEmpty;
			readonly txtWeatherName: KillingArmies.Components.btnWeather;
			readonly loaderWeather: fairygui.GLoader;
			readonly btnPray: UILib.Components.btn.BtnEmpty;
			readonly txtWeatherDes: fairygui.GTextField;
			readonly previewText: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTimes: UILib.Components.fontTab_text.__cmpt__qmdq1no8u71;
			readonly txtKilledNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u71;
			readonly txtRankNum: fairygui.GTextField;
			readonly listReward: fairygui.GList;
		}, 'conState' | 'conWeather', 'FX01'>;
		type RankRewardView = StrictComponent<fairygui.GComponent, {
			readonly stateChooseList: fairygui.GList;
			readonly selfAwardList: fairygui.GList;
			readonly selfRewardList: fairygui.GList;
			readonly txtSelfRank: fairygui.GRichTextField;
			readonly rankList: fairygui.GList;
			readonly rewardList: fairygui.GList;
			readonly countryNameRender: UILib.Components.countryRender.CountryCityRender;
			readonly txtRoleName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			readonly txtKilledNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			readonly rankBg: fairygui.GLoader;
			readonly txtRankNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
		}, 'conSelfOrRank' | 'conSelfRank' | 'conHasReward', undefined>;
		type RankRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly stateChooseList: fairygui.GList;
			readonly curKilledNum: KillingArmies.Components.Renderer.SelfAwardRender;
			readonly selfAwardList: fairygui.GList;
			readonly curSelfRank: KillingArmies.Components.Renderer.RankAwardRender;
			readonly rankList: fairygui.GList;
		}, 'conSelfOrRank', undefined>;
		type KillingArmiesPrayWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly btnPray: UILib.Components.btn.BtnBig1;
			readonly weatherDes: KillingArmies.Components.btnPrayDes;
			readonly txtConsumeNum: fairygui.GTextField;
			readonly nameBg: fairygui.GLoader;
			readonly txtWeatherName: UILib.Components.fontTab.__cmpt__9i4xa3tll4;
			readonly txtWeatherDes: fairygui.GTextField;
		}, 'conShowWeather', undefined>;
		namespace Components {
			type rankBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type heroRes = StrictComponent<fairygui.GComponent, {
				readonly diffHeroRes: fairygui.GLoader;
			}, undefined, undefined>;
			type btnPreviewReward = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type chooseRadioBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type btnGo = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type btnWeather = StrictComponent<fairygui.GButton, {
				readonly weatherBg: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type beginChallengeBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray' | 'conState', undefined>;
			type btnPrayDes = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.Renderer {
			type SelfAwardRender = StrictComponent<fairygui.GComponent, {
				readonly rewardList: fairygui.GList;
				readonly txtBottomRankRange: fairygui.GRichTextField;
				readonly headLoader: fairygui.GLoader;
				readonly txtKilledNum: fairygui.GTextField;
			}, 'conRank', undefined>;
			type RankAwardRender = StrictComponent<fairygui.GComponent, {
				readonly bgLoader: fairygui.GLoader;
				readonly rewardList: fairygui.GList;
				readonly countryNameRender: UILib.Components.countryRender.CountryCityRender;
				readonly txtRoleName: UILib.Components.fontTab_richText.__cmpt__i098a3tlpk;
				readonly txtKilledNum: UILib.Components.fontTab_richText.__cmpt__i098a3tlpk;
				readonly txtRankNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly btnRoleInfo: UILib.Components.btn.BtnEmpty;
			}, 'conRank', undefined>;
			type KillingArmiesDifRender = StrictComponent<fairygui.GComponent, {
				readonly diffBg: fairygui.GLoader;
				readonly chosenBgLoader: fairygui.GLoader;
				readonly txtLevel: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly rewardList: fairygui.GList;
				readonly txtKilledTroopsNum: fairygui.GTextField;
				readonly txtDiffLock: fairygui.GTextField;
			}, 'button' | 'conIsLocked' | 'conDif', undefined>;
		}
	}
	import __pkg__dz7f5x7q = LeaderZD;
	namespace LeaderZD {
		type LeaderZDJoinSubView = StrictComponent<fairygui.GComponent, {
			readonly selectView: LeaderZD.SubView.LeaderZDSelectSubView;
			readonly rewardView: LeaderZD.SubView.LeaderZDRewardSubView;
			readonly bMingBtn: UILib.Components.btn.BtnBig1;
			readonly bmTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u66;
			readonly tipStr: fairygui.GRichTextField;
			readonly cyTipStr: fairygui.GRichTextField;
			readonly playerLabel: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpy;
		}, 'leaderState', undefined>;
		type LeaderCampRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly bg: fairygui.GLoader;
			readonly bg1: fairygui.GLoader;
			readonly slWinList: fairygui.GList;
			readonly zdList: fairygui.GList;
			readonly explainTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly extraStr: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpg;
		}, 'receiveState' | 'resultState' | 'posState' | 'grayedState', undefined>;
		type LeaderZDResultSubView = StrictComponent<fairygui.GComponent, {
			readonly roleSubView: LeaderZD.SubView.LeaderZDSelecRoleSubView;
			readonly leaderView: LeaderZD.SubView.LeaderZDPlayerSubView;
			readonly lineUpView: LeaderZD.SubView.LeaderLineUpSubView;
			readonly rewardView: LeaderZD.SubView.LeaderZDRewardSubView;
			readonly detailsView: LeaderZD.SubView.LeaderDetailsView;
			readonly receiveBtn: UILib.Components.btn.BtnBig4;
			readonly tzBtn: UILib.Components.btn.BtnBig3;
			readonly group1: fairygui.GGroup;
			readonly detailsBtn: UILib.Components.btn.BtnBig1;
			readonly detailsBtn2: UILib.Components.btn.BtnBig1;
			readonly detailsBtn3: UILib.Components.btn.BtnBig1;
			readonly bmTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'leaderState' | 'resultState' | 'helpState', undefined>;
		type LeaderScoreRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly jfList: fairygui.GList;
		}, undefined, undefined>;
		type LeaderZDView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly helpBtn: fairygui.GButton;
			readonly subViewContainer: fairygui.GComponent;
		}, 'leaderState', undefined>;
		type LeaderDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly detailsList: fairygui.GList;
			readonly tipStr: fairygui.GRichTextField;
		}, 'isEmpty', undefined>;
		namespace SubView {
			type LeaderLineUpSubView = StrictComponent<fairygui.GComponent, {
				readonly leaderGroup: fairygui.GGroup;
				readonly moneyList: fairygui.GList;
				readonly playerLabel: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpy;
				readonly playerLabel2: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpy;
			}, 'leaderState' | 'resultState', undefined>;
			type LeaderZDSelectSubView = StrictComponent<fairygui.GComponent, {
				readonly roleSubView: LeaderZD.SubView.LeaderZDSelecRoleSubView;
				readonly followList: fairygui.GList;
			}, 'followState', undefined>;
			type LeaderZDRewardSubView = StrictComponent<fairygui.GComponent, {
				readonly winList: fairygui.GList;
				readonly canYuView: LeaderZD.SubView.LeaderZDCYRewardSubView;
				readonly winBtn: UILib.Components.btn.BtnSmall1;
			}, 'leaderState' | 'resultState', undefined>;
			type LeaderZDPlayerSubView = StrictComponent<fairygui.GComponent, {
				readonly leaderRender: LeaderZD.Components.LeaderRender;
				readonly followList: fairygui.GList;
				readonly txtArr: fairygui.GRichTextField;
				readonly txtCount: fairygui.GRichTextField;
			}, 'followState', undefined>;
			type LeaderZDCYRewardSubView = StrictComponent<fairygui.GComponent, {
				readonly rewardList: fairygui.GList;
				readonly zyWinList: fairygui.GList;
				readonly zyFailList: fairygui.GList;
				readonly group: fairygui.GGroup;
				readonly resultTip: fairygui.GRichTextField;
			}, 'resultState', undefined>;
			type LeaderZDSelecRoleSubView = StrictComponent<fairygui.GComponent, {
				readonly leaderList: fairygui.GList;
			}, 'followState', undefined>;
			type LeaderDetailsView = StrictComponent<fairygui.GComponent, {
				readonly leftRender: LeaderZD.Components.LeaderDetailsHeroRender;
				readonly rightRender: LeaderZD.Components.LeaderDetailsHeroRender;
				readonly btnFight: LeaderZD.Components.BtnSmall1;
				readonly heroRender: LeaderZD.Components.LeaderDetailsHeroRender;
				readonly roundCount: fairygui.GTextField;
			}, 'resultState' | 'leaderState', undefined>;
		}
		namespace Components {
			type LeaderBetsRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: LeaderZD.Components.LeaderAttrRender;
				readonly addBtn: fairygui.GLoader;
			}, 'maxState', undefined>;
			type LeaderFollowRender = StrictComponent<fairygui.GComponent, {
				readonly heroRender: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly fight: UILibHero.Components.fight.FightPowerSmall;
				readonly playerName: fairygui.GRichTextField;
			}, undefined, undefined>;
			type LeaderRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly heroRender: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly fight: UILibHero.Components.fight.FightPowerSmall;
				readonly playerName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'button' | 'bmState' | 'myState' | 'isRandom', undefined>;
			type LeaderHeroRender = StrictComponent<fairygui.GButton, {
				readonly headRender: UILibHero.Components.render.headRender.HeroHeadRender;
			}, 'button' | 'addState', undefined>;
			type LZDRewardRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly rewardList: fairygui.GList;
				readonly receiveLoader: fairygui.GLoader;
				readonly jfCount: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'receiveState', undefined>;
			type LeaderHeadRender = StrictComponent<fairygui.GButton, {
				readonly headRender: UILibHero.Components.render.headRender.MaskCircleRender;
			}, 'button', undefined>;
			type LeaderAttrRender = StrictComponent<fairygui.GButton, {
				readonly iconReward: fairygui.GLoader;
				readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
			type LeaderDetailsRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly leftRender: LeaderZD.Components.LeaderDetailsHeroRender;
				readonly rightRender: LeaderZD.Components.LeaderDetailsHeroRender;
				readonly btnFight: LeaderZD.Components.BtnSmall1;
				readonly leftFollowList: fairygui.GList;
				readonly rightFollowList: fairygui.GList;
				readonly roundCount: fairygui.GTextField;
				readonly beginTime: fairygui.GTextField;
				readonly leftFollow: fairygui.GTextField;
				readonly rightFollow: fairygui.GTextField;
			}, 'isFight' | 'resultState', undefined>;
			type LeaderDetailsHeroRender = StrictComponent<fairygui.GComponent, {
				readonly heroRender: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly fight: UILibHero.Components.fight.FightPowerSmall;
				readonly playerName: fairygui.GRichTextField;
			}, undefined, undefined>;
			type LeaderDetailsSmallHeroRender = StrictComponent<fairygui.GComponent, {
				readonly heroRender: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly fight: UILibHero.Components.fight.FightPowerSmall;
				readonly playerName: fairygui.GRichTextField;
			}, undefined, undefined>;
			type LeaderPlayerBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnSmall1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
		}
	}
	import __pkg__s1ggv79o = LimitedBox;
	namespace LimitedBox {
		type LimitedPushOutGiftWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderBg: fairygui.GLoader;
			readonly loaderTitle: fairygui.GLoader;
			readonly loaderAttr: fairygui.GLoader;
			readonly btnBuy: UILib.Components.btnSpecial.BtnBuy;
			readonly btnLeft: UILib.Components.btnArrows.BtnArrows2;
			readonly btnRight: UILib.Components.btnArrows.BtnArrows2;
			readonly btnClose: UILib.Components.btn.BtnWindowClose;
			readonly listReward: fairygui.GList;
			readonly listBox: fairygui.GList;
			readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
			readonly txtPricePre: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTimeLeft: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, 'conShowPricePre' | 'conCurrencyType', undefined>;
		namespace Components {
			type BoxRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly txtTime: fairygui.GTextField;
			}, 'button' | 'conRed', undefined>;
		}
	}
	import __pkg__cupbvuh9 = LimitFreeActivity;
	namespace LimitFreeActivity {
		type LimitFreeActivityWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: fairygui.GLoader;
			readonly btnRecord: UILib.Components.btnAct.BtnAct5;
			readonly item1: LimitFreeActivity.Render.BuyItemRender;
			readonly item2: LimitFreeActivity.Render.BuyItemRender;
			readonly item3: LimitFreeActivity.Render.BuyItemRender;
			readonly item4: LimitFreeActivity.Render.BuyItemRender;
			readonly item5: LimitFreeActivity.Render.BuyItemRender;
			readonly item6: LimitFreeActivity.Render.BuyItemRender;
			readonly proRecord: LimitFreeActivity.Components.ProgressBar;
			readonly listReward: fairygui.GList;
			readonly txtTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			readonly txtDes: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
			readonly txtNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			readonly title: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
		}, undefined, 't1'>;
		type LimitFreeActivityRecordWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly imgIcon: fairygui.GLoader;
			readonly listRecord: fairygui.GList;
			readonly freeNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6v;
		}, undefined, undefined>;
		type LimitFreeActivityFreewWindow = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GLoader;
			readonly light1: fairygui.GLoader;
			readonly graphAniTop: fairygui.GGraph;
			readonly reward: UILib.Components.renderer.RewardRender1;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljp;
		}, undefined, undefined>;
		namespace Render {
			type BuyItemRender = StrictComponent<fairygui.GComponent, {
				readonly reward: UILib.Components.renderer.RewardRender2;
				readonly btnBuy: LimitFreeActivity.Render.Btn7;
				readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u70;
				readonly txtNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6y;
			}, 'conState', undefined>;
			type RecordRender = StrictComponent<fairygui.GComponent, {
				readonly imgIcon: fairygui.GLoader;
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
				readonly txtTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6r;
				readonly txtName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtMoney: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6s;
			}, 'conIsFree', undefined>;
			type ItemRewardRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly graphEffect: fairygui.GGraph;
				readonly txtNum: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conState', undefined>;
			type Btn7 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
		}
		namespace Components {
			type ProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: LimitFreeActivity.Components.TaskActiveBar;
			}, undefined, undefined>;
			type TaskActiveBar = StrictComponent<fairygui.GComponent, {
				readonly barMask: fairygui.GGraph;
			}, undefined, undefined>;
		}
	}
	import __pkg__vpqthbhl = LimitRechargeBuy;
	namespace LimitRechargeBuy {
		type LimitRechargeBuyView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly banner: fairygui.GLoader;
			readonly tishidi: fairygui.GLoader;
			readonly titleImg: fairygui.GLoader;
			readonly rewardDiList: fairygui.GList;
			readonly rewardList: fairygui.GList;
			readonly tabList: fairygui.GList;
			readonly btnHelp: fairygui.GButton;
			readonly timeTxt: fairygui.GRichTextField;
			readonly tipTxt: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Components {
			type LimitRechargeBuyRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly btnBuy: LimitRechargeBuy.Components.LimitRechargeBuyBtn;
				readonly rewardList: fairygui.GList;
				readonly boxName: fairygui.GRichTextField;
				readonly limitedTimes: fairygui.GRichTextField;
			}, 'sellOutState' | 'limitState', undefined>;
			type LimitRechargeBuyBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type LimitRechargeBuyTab = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly iconDown: fairygui.GLoader;
				readonly titleUp: fairygui.GLoader;
				readonly titleDown: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type LimitRechargeRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
	}
	import __pkg__6cgs92p8 = Loader;
	namespace Loader {
		type LoginView = StrictComponent<fairygui.GComponent, {
			readonly bgLoader: fairygui.GLoader;
			readonly bottomLoader: fairygui.GLoader;
			readonly titleLoader: fairygui.GLoader;
			readonly btnNotice: Loader.Components.selectBtn.BtnNotice;
			readonly btnAge: Loader.Components.selectBtn.BtnNotice;
			readonly btnUser: Loader.Components.selectBtn.BtnNotice;
			readonly btnLoginOut: Loader.Components.selectBtn.BtnNotice;
			readonly btnEnterGame: Loader.Components.selectBtn.BtnEnterGame;
			readonly txtVersion: fairygui.GTextField;
			readonly textPath: fairygui.GTextField;
			readonly gDebug: fairygui.GGroup;
			readonly serverState: fairygui.GLoader;
			readonly btnSelectServer: Loader.Components.selectBtn.BtnchangeServer;
			readonly selectServerName: fairygui.GRichTextField;
			readonly stateServerName: fairygui.GTextField;
			readonly selectServerGroup: fairygui.GGroup;
			readonly tipGroup: fairygui.GGroup;
			readonly touchLoginLayer: fairygui.GGraph;
			readonly versionTxt: fairygui.GTextField;
			readonly btnconsole: fairygui.GButton;
			readonly versionGroup: fairygui.GGroup;
			readonly agreementSelect: Loader.Components.selectBtn.BtnAgreement;
			readonly strAgreement: fairygui.GRichTextField;
			readonly userBtn: Loader.Components.BtnEmpty;
			readonly userPrivacBtn: Loader.Components.BtnEmpty;
			readonly agreementGroup: fairygui.GGroup;
			readonly agreementCom: Loader.Components.LoginAgreementSubView;
		}, 'c1', undefined>;
		namespace Components {
			type BtnEmpty = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type LoginAgreementSubView = StrictComponent<fairygui.GComponent, {
				readonly agreementTitle: fairygui.GTextField;
				readonly agreementContent: fairygui.GTextField;
				readonly qualificationContent: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace ManyNotice {
			type ManyNoticeView = StrictComponent<fairygui.GComponent, {
				readonly closeBg: fairygui.GGraph;
				readonly noticeWindow: Loader.ManyNotice.SubView.ManyNoticeSubView;
			}, undefined, undefined>;
		}
		namespace ServerView {
			type ServerView = StrictComponent<fairygui.GComponent, {
				readonly closebg: fairygui.GButton;
				readonly windowBg: Loader.Components.render.WindowFrame2;
				readonly btnOwn: Loader.Components.render.ServerRender;
				readonly btnRecommend: Loader.Components.render.ServerRender;
				readonly optionList: fairygui.GList;
				readonly serverList: fairygui.GList;
				readonly imgNew: fairygui.GImage;
				readonly imgOk: fairygui.GImage;
				readonly imgNo: fairygui.GImage;
				readonly xf: fairygui.GTextField;
				readonly kyjz: fairygui.GTextField;
				readonly bkjz: fairygui.GTextField;
				readonly stateServerGroup1: fairygui.GGroup;
				readonly hb: fairygui.GTextField;
				readonly lc: fairygui.GTextField;
				readonly wh: fairygui.GTextField;
				readonly stateServerGroup: fairygui.GGroup;
				readonly newWindow: fairygui.GGroup;
			}, 'conHaveAccount', undefined>;
		}
		namespace MiniGameView {
			type MiniGameAnimView = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
		}
		namespace Components.render {
			type ServerRender = StrictComponent<fairygui.GButton, {
				readonly imgNew: fairygui.GImage;
				readonly serverState1: fairygui.GLoader;
				readonly serverState2: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type PayServerRender = StrictComponent<fairygui.GButton, {
				readonly loaderState: fairygui.GLoader;
				readonly serverState1: fairygui.GLoader;
				readonly serverState2: fairygui.GLoader;
				readonly loaderCountry: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
				readonly roleName: fairygui.GTextField;
				readonly txtInfo: fairygui.GTextField;
				readonly txtCountry: fairygui.GTextField;
			}, 'button' | 'conState', undefined>;
			type WindowFrame2 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace ManyNotice.SubView {
			type ManyNoticeSubView = StrictComponent<fairygui.GComponent, {
				readonly topBg: fairygui.GLoader;
				readonly close: Loader.Components.selectBtn.BtnClose;
				readonly btnList: fairygui.GList;
				readonly noticeView: Loader.Components.manyNotice.ManyNoticeScrool;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.selectBtn {
			type BtnNotice = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type BtnchangeServer = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnEnterGame = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnAgreement = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnLoginOut = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.manyNotice {
			type ManyNoticeBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
				readonly titleDown: fairygui.GRichTextField;
			}, 'button', undefined>;
			type ManyNoticeScrool = StrictComponent<fairygui.GComponent, {
				readonly noticeTip: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__s1sk9nk5 = LoaderProgress;
	namespace LoaderProgress {
		type ProgressMaskAniView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GImage;
			readonly aniSubView: LoaderProgress.Components.Progress.SubView.ProgressLoadingMask;
			readonly logStr: fairygui.GTextField;
		}, undefined, undefined>;
		type ProgressView = StrictComponent<fairygui.GComponent, {
			readonly bgLoader: fairygui.GLoader;
			readonly bottomLoader: fairygui.GLoader;
			readonly loaderLogo: fairygui.GLoader;
			readonly progressBar: LoaderProgress.Images.proBar.ProgressBar;
			readonly bar_icon: fairygui.GImage;
			readonly bar_icon2: fairygui.GMovieClip;
			readonly log: fairygui.GRichTextField;
			readonly txtTitle: fairygui.GRichTextField;
			readonly txtDesc: fairygui.GRichTextField;
			readonly loaderBg: fairygui.GImage;
			readonly heroHeadLoader: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly txtTips: fairygui.GTextField;
			readonly proGroup: fairygui.GGroup;
		}, 'conIsShowHero', undefined>;
		namespace Components {
			type LoginAgreementSubView = StrictComponent<fairygui.GComponent, {
				readonly agreementTitle: fairygui.GTextField;
				readonly agreementContent: fairygui.GTextField;
				readonly qualificationContent: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace Images.proBar {
			type ProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
		}
		namespace Components.Progress {
			type ProgressAniView = StrictComponent<fairygui.GComponent, {
				readonly graphBg: fairygui.GGraph;
				readonly groupLoading: fairygui.GGroup;
				readonly aniSubView: LoaderProgress.Components.Progress.SubView.ProgressAniSubView;
			}, undefined, 't0'>;
			type ProgressLoaderView = StrictComponent<fairygui.GComponent, {
				readonly bgLoader: fairygui.GLoader;
				readonly bottomLoader: fairygui.GLoader;
				readonly titleLoader: fairygui.GLoader;
				readonly versionTxt: fairygui.GTextField;
				readonly btnconsole: fairygui.GButton;
				readonly versionGroup: fairygui.GGroup;
				readonly agreementCom: LoaderProgress.Components.LoginAgreementSubView;
			}, undefined, undefined>;
		}
		namespace Components.Progress.SubView {
			type ProgressAniSubView = StrictComponent<fairygui.GComponent, undefined, undefined, 'ani'>;
			type ProgressLoadingMask = StrictComponent<fairygui.GComponent, {
				readonly maskCom: fairygui.GImage;
			}, undefined, 'loop'>;
		}
	}
	import __pkg__2rv8revb = Mail;
	namespace Mail {
		type MailView = StrictComponent<fairygui.GComponent, {
			readonly btnClickRead: UILib.Components.btn.BtnBig3;
			readonly btnClickRemove: UILib.Components.btn.BtnBig5;
			readonly btnClickReceive: UILib.Components.btn.BtnBig4;
			readonly btnScreen: UILib.Components.btn.BtnSmall2;
			readonly btnChooseAll: UILib.Components.btn.BtnSmall4;
			readonly listMail: fairygui.GList;
			readonly txtNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u77;
		}, 'conIsScreen' | 'conIsShow', undefined>;
		type MailDeailsWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: fairygui.GLoader;
			readonly btnGet: UILib.Components.btn.BtnBig1;
			readonly listAward: fairygui.GList;
			readonly textContent: Mail.Components.ComDes;
			readonly textDate: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
			readonly textTitle: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly titleName: UILib.Components.fontTab.__cmpt__9i4xa3tll4;
			readonly textFrom: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
			readonly textExpiration: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6h;
			readonly textName: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
		}, 'isHaveReward' | 'conIsAuction', undefined>;
		namespace Components {
			type MailRender = StrictComponent<fairygui.GButton, {
				readonly textTitle: fairygui.GTextField;
				readonly textDate: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
				readonly textDesc: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
				readonly txtInvalidDate: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtExpirationTime: UILib.Components.fontTab_text.__cmpt__qmdq1no8u66;
				readonly listReward: fairygui.GList;
			}, 'conIsScreen' | 'button' | 'conIsRead' | 'conIsHaveReward' | 'conIsShowRed' | 'conIsExpirationTime', undefined>;
			type OrderRender = StrictComponent<fairygui.GButton, {
				readonly textTitle: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly textDesc: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtOrder: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
			}, 'conHaveOrder' | 'conOrderType', undefined>;
			type BtnAgreement = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ComDes = StrictComponent<fairygui.GComponent, {
				readonly textContent: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__owrnjrsn = MainUI;
	namespace MainUI {
		type MainUIView = StrictComponent<fairygui.GComponent, {
			readonly middleLeft: MainUI.Views.MiddleLeftView;
			readonly everyDay: MainUI.Components.left.EveryBtn;
			readonly stableCity: MainUI.Components.left.StableCityBtn;
			readonly middleRight: MainUI.Views.MiddleRightView;
			readonly bottom: MainUI.Views.BottomView;
			readonly top: MainUI.Views.TopView;
			readonly effectView: MainUI.Views.EffectView;
			readonly effectLayerView: MainUI.Views.EffectLayerView;
			readonly groupLoading: fairygui.GGroup;
		}, undefined, 't0' | 'animLoading'>;
		namespace Views {
			type TopView = StrictComponent<fairygui.GComponent, {
				readonly worldMapParentCom: MainUI.Components.top.MainUIMapParentView;
				readonly topAttrCom: MainUI.Components.top.topAttrCom;
				readonly heroHeadRender: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: fairygui.GLoader;
				readonly listToken: fairygui.GList;
				readonly btnFreeReset: MainUI.Components.top.btn_freeReset;
				readonly txtFight: fairygui.GTextField;
				readonly txtChanye: fairygui.GTextField;
				readonly txtChanye1: fairygui.GTextField;
				readonly btnFight: MainUI.Components.top.BtnEmpty;
				readonly btnChanye: MainUI.Components.top.BtnEmpty;
				readonly btnFightMeritorious: MainUI.Components.top.btn_func;
				readonly topListCom: fairygui.GComponent;
				readonly btnCountryEdict: MainUI.Components.top.btn_func1;
				readonly topListComTxt: fairygui.GComponent;
			}, 'conChangeScene' | 'conShowHead', undefined>;
			type BottomView = StrictComponent<fairygui.GComponent, {
				readonly chatBg: fairygui.GImage;
				readonly loaderBottomBg: fairygui.GImage;
				readonly btnHeroCompare: MainUI.Components.bottom.BtnHeroCompare;
				readonly btnBuilding: MainUI.Components.bottom.BtnBuilding;
				readonly redEnvelopeBtn: MainUI.Components.bottom.RedEnvelopeBtn;
				readonly task: MainUI.Components.bottom.MainUITaskView;
				readonly btnJingzhou: MainUI.Components.bottom.JingZhouBtn;
				readonly btnMayor: MainUI.Components.bottom.BtnSide_h;
				readonly funcNoticBtn: MainUI.Components.bottom.FuncNoticBtn;
				readonly noticeButtonView: MainUI.Components.bottom.NoticeButton.NoticeButtonView;
				readonly btnList: fairygui.GList;
				readonly chatView: MainUI.Components.bottom.ChatView;
			}, 'conSeason' | 'conScene' | 'conBottomBgState', 'traClose' | 'traOpen' | 'redEnvelopeTra' | 'traOpenJingzhou'>;
			type MiddleLeftView = StrictComponent<fairygui.GComponent, {
				readonly parent: MainUI.Components.top.BtnEmpty;
				readonly btnArrow: MainUI.Components.viewUI.btnback1;
			}, 'conState', undefined>;
			type MiddleRightView = StrictComponent<fairygui.GComponent, {
				readonly btnSummary: MainUI.Components.right.btnSummary;
				readonly imgBg: fairygui.GImage;
				readonly imgBg1: fairygui.GImage;
				readonly btnRank: MainUI.Components.bottom.BtnSide_v1;
				readonly btnMiniGame: MainUI.Components.right.BtnMiniGame;
				readonly btnMore: MainUI.Components.bottom.BtnSide_v1;
				readonly btnSeason: MainUI.Components.bottom.BtnSeason;
				readonly txtTeamNum: fairygui.GTextField;
				readonly listFunc: fairygui.GList;
				readonly heroListCom: MainUI.Components.right.HeroListCom;
			}, 'conChangeScene' | 'conSeason', undefined>;
			type ViewUIView = StrictComponent<fairygui.GComponent, {
				readonly imgAdaptation: fairygui.GGraph;
				readonly touchLayer: fairygui.GGraph;
				readonly rectLeft: fairygui.GGraph;
				readonly rectRight: fairygui.GGraph;
				readonly bgPointBottom: fairygui.GGraph;
				readonly bgPointTop: fairygui.GLoader;
				readonly loaderBg: fairygui.GLoader;
				readonly btnBlankBack: UILib.Components.btn.BtnEmpty;
				readonly menuRoot: fairygui.GComponent;
				readonly imgTitle: fairygui.GLoader;
				readonly nameLoader: fairygui.GLoader;
				readonly imgTitleGroup: fairygui.GGroup;
				readonly funcTitle: fairygui.GTextField;
				readonly btnBack: MainUI.Components.viewUI.btnback2;
			}, 'conIsShowTitle' | 'conIsPoint' | 'conArrowLight' | 'conShowBack', undefined>;
			type EffectView = StrictComponent<fairygui.GComponent, {
				readonly a0: fairygui.GLoader;
				readonly a1: fairygui.GLoader;
				readonly a2: fairygui.GLoader;
				readonly a3: fairygui.GLoader;
				readonly a4: fairygui.GLoader;
				readonly a5: fairygui.GLoader;
				readonly a6: fairygui.GLoader;
				readonly a7: fairygui.GLoader;
				readonly a8: fairygui.GLoader;
				readonly a9: fairygui.GLoader;
				readonly a10: fairygui.GLoader;
				readonly b0: fairygui.GLoader;
				readonly b1: fairygui.GLoader;
				readonly b2: fairygui.GLoader;
				readonly b3: fairygui.GLoader;
				readonly b4: fairygui.GLoader;
				readonly b5: fairygui.GLoader;
				readonly b6: fairygui.GLoader;
				readonly b7: fairygui.GLoader;
				readonly b8: fairygui.GLoader;
				readonly b9: fairygui.GLoader;
				readonly b10: fairygui.GLoader;
				readonly c0: fairygui.GLoader;
				readonly c1: fairygui.GLoader;
				readonly c2: fairygui.GLoader;
				readonly c3: fairygui.GLoader;
				readonly c4: fairygui.GLoader;
				readonly c5: fairygui.GLoader;
				readonly c6: fairygui.GLoader;
				readonly c7: fairygui.GLoader;
				readonly c8: fairygui.GLoader;
				readonly c9: fairygui.GLoader;
			}, undefined, 'CloudShow' | 'CloudClose'>;
			type EffectLayerView = StrictComponent<fairygui.GComponent, {
				readonly comLeft: fairygui.GComponent;
				readonly comTop: fairygui.GComponent;
			}, undefined, 't2'>;
		}
		namespace ViewsDebug {
			type CitySelectPosView = StrictComponent<fairygui.GComponent, {
				readonly fireSelect: UILib.Components.button_checkbox.Button_Check3;
				readonly posX: fairygui.GTextField;
				readonly posY: fairygui.GTextField;
			}, undefined, undefined>;
			type GameDebugView = StrictComponent<fairygui.GComponent, {
				readonly btnGMHelp: UILib.Components.btn.BtnSmall1;
				readonly btnTestHide: MainUI.Components.top.TestHideViewCom;
				readonly btnFuncView: MainUI.Components.top.FuncViewCom;
			}, undefined, undefined>;
		}
		namespace Components.top {
			type btnTopMainRes = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, undefined, 'Harvest'>;
			type MainUIMapView = StrictComponent<fairygui.GComponent, {
				readonly bgLoader: fairygui.GLoader;
				readonly mapBtn: UILib.Components.btn.BtnEmpty;
				readonly imgBox: fairygui.GImage;
			}, undefined, undefined>;
			type CountryTokenRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type btnNationalWar = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type FuncViewCom = StrictComponent<fairygui.GComponent, {
				readonly btnOpen: UILib.Components.btn.BtnSmall1;
				readonly testCombSideType: MainUI.Components.test.ComboBox1;
				readonly testHero1: fairygui.GTextField;
				readonly testHero2: fairygui.GTextField;
				readonly testHeroHurt: fairygui.GTextField;
				readonly testFight: fairygui.GGroup;
				readonly btnMiniTest: UILib.Components.btn.BtnSmall1;
				readonly txtMiniLv: fairygui.GTextField;
				readonly groupMini: fairygui.GGroup;
				readonly fightFmName: fairygui.GTextField;
				readonly groupFightFm: fairygui.GGroup;
				readonly btnFight: UILib.Components.btn.BtnSmall1;
				readonly btnFight2: UILib.Components.btn.BtnSmall1;
				readonly btnPort: UILib.Components.btn.BtnSmall1;
				readonly btnChangeServer: UILib.Components.btn.BtnSmall1;
				readonly btnReloginImperception: UILib.Components.btn.BtnSmall1;
				readonly btnArtifactFight: UILib.Components.btn.BtnSmall1;
				readonly btnPrintMemory: UILib.Components.btn.BtnSmall1;
				readonly btnPrintCompareMemory: UILib.Components.btn.BtnSmall1;
			}, 'conState', undefined>;
			type topAttrCom = StrictComponent<fairygui.GComponent, {
				readonly btnBack1: MainUI.Components.viewUI.btnback2;
				readonly btnCoin: MainUI.Components.top.btnTopMainRes;
				readonly btnCrop: MainUI.Components.top.btnTopMainRes;
				readonly btnWood: MainUI.Components.top.btnTopMainRes;
				readonly btnIron: MainUI.Components.top.btnTopMainRes;
				readonly btnMoney: MainUI.Components.top.btnTopMainResMoney;
				readonly effect: fairygui.GGraph;
			}, 'conShowBack', undefined>;
			type btnCountryBoss = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly textIcon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', 't0'>;
			type btnTopMainResMoney = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, undefined, 'Harvest'>;
			type btn_func = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type WorldMapEffect = StrictComponent<fairygui.GComponent, undefined, undefined, 't0' | 't1'>;
			type btn_freeReset = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type btn_func1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type MainUIMapParentView = StrictComponent<fairygui.GComponent, {
				readonly imgMapBox: fairygui.GImage;
				readonly fightRecord: MainUI.Components.left.FightRecordBtn;
			}, undefined, undefined>;
			type BtnEmpty = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type TestHideViewCom = StrictComponent<fairygui.GComponent, {
				readonly btnOpen: UILib.Components.btn.BtnSmall1;
				readonly btnHideFightUI: MainUI.Components.viewUI.btnTestHideUI;
				readonly btnHideFightUI1: MainUI.Components.viewUI.btnTestHideUI;
				readonly btnHideMainUI: MainUI.Components.viewUI.btnTestHideUI;
				readonly btnHideCountryUI: MainUI.Components.viewUI.btnTestHideUI;
				readonly btnHideHeroUI: MainUI.Components.viewUI.btnTestHideUI;
			}, 'conState', undefined>;
			type BtnCountryBossTxt = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.test {
			type ComboBox1_item = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type ComboBox1_popup = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type ComboBox1 = StrictComponent<fairygui.GComboBox, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.left {
			type ActBtnRender = StrictComponent<fairygui.GButton, {
				readonly actBtn: MainUI.Components.left.ActBtn;
			}, 'button' | 'bgCL', undefined>;
			type FightRecordBtn = StrictComponent<fairygui.GButton, {
				readonly recordRed: fairygui.GImage;
				readonly recordCount: fairygui.GTextField;
				readonly txtMore: fairygui.GTextField;
			}, 'button', undefined>;
			type ActBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redpoint: fairygui.GImage;
				readonly textIcon: fairygui.GLoader;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'conRed' | 'button' | 'conShowTime', undefined>;
			type EveryBtn = StrictComponent<fairygui.GComponent, undefined, 'isWorld' | 'isRed', undefined>;
			type StableCityBtn = StrictComponent<fairygui.GComponent, {
				readonly btn: MainUI.Components.left.StableCityCom;
				readonly imgRed: fairygui.GImage;
			}, 'con', undefined>;
			type StableCityCom = StrictComponent<fairygui.GButton, undefined, 'button', 't0'>;
		}
		namespace Components.right {
			type HeroFightRender = StrictComponent<fairygui.GButton, {
				readonly loaderAdd: fairygui.GLoader;
				readonly proRemainNum: MainUI.Components.right.ProgressBar4;
				readonly btnRelive: MainUI.Components.right.BtnSmall4;
				readonly fightEffectGro: fairygui.GGraph;
				readonly txtDes: fairygui.GRichTextField;
				readonly txtName: fairygui.GRichTextField;
				readonly txtReviveTime: fairygui.GTextField;
			}, 'conTroopState' | 'button', 'traName'>;
			type ProgressBar4 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
			}, 'conIsRed', undefined>;
			type btnBuild = StrictComponent<fairygui.GButton, {
				readonly imgTimeBg: fairygui.GImage;
				readonly idleEff: fairygui.GMovieClip;
				readonly levelEff: fairygui.GMovieClip;
				readonly trainEff: fairygui.GMovieClip;
				readonly btnIcon: fairygui.GLoader;
				readonly btnLoaderIcon: MainUI.Components.right.btnBuildIcon;
				readonly btnLoader: fairygui.GLoader;
				readonly icon2: fairygui.GLoader;
				readonly imgLock: fairygui.GImage;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
				readonly txtConduct: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'button' | 'conIsOpreation' | 'conIsFree', 'traName' | 'maifei'>;
			type ProgressBar5 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type HeroSpeedSub = StrictComponent<fairygui.GComponent, {
				readonly imgAddF: fairygui.GImage;
				readonly imgAddB: fairygui.GImage;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly btnDismiss: UILib.Components.btn.BtnSmall3;
				readonly btnAdd: UILib.Components.btn.BtnSmall1;
				readonly btnInfo: UILib.Components.btn.BtnSearch;
				readonly btnRetreat: UILib.Components.btn.BtnSmall3;
				readonly btnTuJin: UILib.Components.btn.BtnSmall1;
				readonly btnGroup: fairygui.GGroup;
				readonly textName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
				readonly textFHP: fairygui.GTextField;
				readonly textBHP: fairygui.GTextField;
				readonly textFHPmax: UILib.Components.fontTab_richText.__cmpt__sxsxa3tlq7;
				readonly textBHPmax: UILib.Components.fontTab_richText.__cmpt__sxsxa3tlq7;
				readonly txtAddFHP: UILib.Components.fontTab.__cmpt__f73xa3tlhy;
				readonly txtAddBHP: UILib.Components.fontTab.__cmpt__f73xa3tlhy;
				readonly txtFight: UILib.Components.fontTab.__cmpt__v5p1a3tlh8;
				readonly btnSpeed1: UILib.Components.btn.BtnSmall2;
				readonly btnSpeed2: UILib.Components.btn.BtnSmall4;
				readonly progressTime: UILib.Components.proBar.ProgressBarGreen;
				readonly txtRemainTime: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtNum2: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtNum1: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conState' | 'conIsCanBack' | 'conIsRetreat' | 'conType', 't0' | 't1'>;
			type HeroSpeedCom = StrictComponent<fairygui.GComponent, {
				readonly heroSpeedSub: MainUI.Components.right.HeroSpeedSub;
			}, 'c1', undefined>;
			type btnSummary = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type HeroListCom = StrictComponent<fairygui.GComponent, {
				readonly heroListHead: fairygui.GList;
				readonly heroList: fairygui.GList;
			}, undefined, undefined>;
			type HeroInfoJingzhouCom = StrictComponent<fairygui.GComponent, {
				readonly heroInfoRender: MainUI.Components.right.HeroInfoJingzhouSub;
			}, 'conIsShow', undefined>;
			type HeroInfoJingzhouSub = StrictComponent<fairygui.GComponent, {
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly btnBack: UILib.Components.btn.BtnSmall3;
				readonly btnStop: UILib.Components.btn.BtnSmall1;
				readonly btnInfo: UILib.Components.btn.BtnSearch;
				readonly proFHp: MainUI.Components.right.ProgressBar3;
				readonly proBHp: MainUI.Components.right.ProgressBar3;
				readonly btnRetreat: UILib.Components.btn.BtnSmall3;
				readonly btnTuJin: UILib.Components.btn.BtnSmall1;
				readonly btnGroup: fairygui.GGroup;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
				readonly txtFHP: fairygui.GTextField;
				readonly txtBHP: fairygui.GTextField;
				readonly txtFight: UILib.Components.fontTab.__cmpt__v5p1a3tlh8;
				readonly txtAoqi: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conState', undefined>;
			type BtnMiniGame = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redpoint: fairygui.GImage;
				readonly textIcon: fairygui.GLoader;
			}, 'button' | 'conShowTime' | 'isRed', 'transMini'>;
			type btnBuildIcon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type HeroAddTipsCom = StrictComponent<fairygui.GComponent, {
				readonly txtDes: fairygui.GRichTextField;
			}, 'conIsShow', undefined>;
			type BtnSmall4 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type ProgressBar3 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, 'conColor', undefined>;
			type HeroFightHeadRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, 'conType', undefined>;
			type Component1 = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, undefined, undefined>;
		}
		namespace Components.middle {
			type TroopInfoCom = StrictComponent<fairygui.GComponent, {
				readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountrySmallRender;
				readonly btnARole: UILib.Components.btn.BtnSearch;
				readonly pro: MainUI.Components.middle.ProgressBar6;
				readonly textName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly textHeroName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly textCity: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly textTime: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
				readonly textCity2: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly txtFight: UILib.Components.fontTab.__cmpt__v5p1a3tlh8;
			}, undefined, undefined>;
			type ProgressBar6 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type TroopInfoListCom = StrictComponent<fairygui.GComponent, {
				readonly heroList: fairygui.GList;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'conIsShow', undefined>;
			type TroopInfoRender = StrictComponent<fairygui.GButton, {
				readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountrySmallRender;
				readonly pro: MainUI.Components.middle.ProgressBar6;
				readonly textName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly textCity: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly textTime: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
				readonly textCity2: UILib.Components.fontTab.__cmpt__f73xa3tlhc;
				readonly btnInfo: fairygui.GLoader;
			}, 'conType', undefined>;
		}
		namespace Components.viewUI {
			type btnback = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type btnarrow = StrictComponent<fairygui.GButton, undefined, 'button', 't0'>;
			type btnback1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type btnback2 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type btnTestHideUI = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
		namespace Components.bottom {
			type BottomChatRender = StrictComponent<fairygui.GComponent, {
				readonly txtContent: fairygui.GRichTextField;
			}, undefined, undefined>;
			type FuncBtnRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly loaderText: fairygui.GLoader;
			}, 'button' | 'isred', undefined>;
			type ChatView = StrictComponent<fairygui.GComponent, {
				readonly loader1: fairygui.GLoader;
				readonly loader2: fairygui.GLoader;
				readonly listChat: fairygui.GList;
			}, 'conRed', undefined>;
			type BtnHide = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnBuilding = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly iconGray: fairygui.GLoader;
			}, 'button' | 'conSeason' | 'conGray', undefined>;
			type BtnSide_h = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly effectMovie: fairygui.GMovieClip;
			}, 'button' | 'isred' | 'inspireState', undefined>;
			type BtnSide_v1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', 'zhuan' | 'zhuan2'>;
			type BottomBubbleCom = StrictComponent<fairygui.GComponent, {
				readonly btnCity: MainUI.Components.top.btnNationalWar;
				readonly btnBarbaricInvade: MainUI.Components.top.btnNationalWar;
			}, undefined, undefined>;
			type MainUITaskView = StrictComponent<fairygui.GComponent, {
				readonly btnAc: MainUI.Components.bottom.BottomTaskBarCom;
				readonly btnTask: MainUI.Components.top.BtnEmpty;
				readonly btnOtherTask: MainUI.Components.top.BtnEmpty;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderName: fairygui.GLoader;
				readonly txtTaskState: fairygui.GRichTextField;
			}, 'button' | 'conIsRed' | 'conIsFinishBtn' | 'conIsPtask' | 'conIsShow', undefined>;
			type BottomTaskBarCom = StrictComponent<fairygui.GComponent, {
				readonly imgArrow: fairygui.GImage;
				readonly btnMainTask: MainUI.Components.top.BtnEmpty;
				readonly btnPut: MainUI.Components.top.BtnEmpty;
				readonly txtTaskDesc: fairygui.GRichTextField;
			}, 'conIsFinish' | 'conIsPut', 'traClose' | 'traOpen' | 'award'>;
			type BtnSeason = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type BtnHeroCompare = StrictComponent<fairygui.GButton, {
				readonly imgDirection: fairygui.GImage;
				readonly icon: fairygui.GLoader;
				readonly btnCompare: MainUI.Components.top.BtnEmpty;
			}, undefined, undefined>;
			type FuncNoticBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly name: fairygui.GTextField;
				readonly openLevel: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly des: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'button' | 'isReceiveCL', undefined>;
			type BtnFuncNotice = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type JingZhouBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type RedEnvelopeBtn = StrictComponent<fairygui.GButton, undefined, 'button', 't0'>;
			type FuncDescriptionBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly loaderText: fairygui.GLoader;
			}, 'button' | 'isred', undefined>;
		}
		namespace Components.bottom.NoticeButton {
			type NoticeButtonView = StrictComponent<fairygui.GComponent, {
				readonly listButtons: fairygui.GList;
			}, undefined, undefined>;
			type NoticeButtonItem = StrictComponent<fairygui.GButton, {
				readonly imgBg: fairygui.GLoader;
				readonly imgName: fairygui.GLoader;
				readonly effect: fairygui.GMovieClip;
			}, 'button' | 'conIsShowRed', 't1' | 't2' | 't0' | 't4' | 't5'>;
			type NoticeFX = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
		}
	}
	import __pkg__23lodctr = Mall;
	namespace Mall {
		type MallView = StrictComponent<fairygui.GComponent, {
			readonly loader0: fairygui.GLoader;
			readonly skeletonView1: UILibHero.Components.SkeletonView;
			readonly skeletonView2: UILibHero.Components.SkeletonView;
			readonly loader1: fairygui.GLoader;
			readonly loaderImg0: fairygui.GLoader;
			readonly loaderImg1: fairygui.GLoader;
			readonly loaderImg2: fairygui.GLoader;
			readonly loaderImg3: fairygui.GLoader;
			readonly loaderImg4: fairygui.GLoader;
			readonly loaderImg5: fairygui.GLoader;
			readonly listMall: fairygui.GList;
			readonly listGoods: fairygui.GList;
			readonly btnProp: Mall.Components.btnProp;
			readonly btnFresh: Mall.Components.BtnRefresh1;
			readonly btnFreshFree: Mall.Components.BtnRefresh;
			readonly btnLeft: UILib.Components.btnArrows.BtnArrows1;
			readonly btnRight: UILib.Components.btnArrows.BtnArrows1;
			readonly textFreshDate: fairygui.GTextField;
			readonly txtRefNum: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			readonly txtBuyNum: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
		}, 'conMall', 'switched'>;
		type MallSpecialView = StrictComponent<fairygui.GComponent, {
			readonly listGoods: fairygui.GList;
			readonly iconTitle: fairygui.GLoader;
			readonly listMall: fairygui.GList;
			readonly btnProp: Mall.Components.BtnSpecial2;
			readonly btnFresh: UILib.Components.btn.BtnCutDown;
			readonly btnFreshFree: UILib.Components.btn.BtnCutDown;
			readonly btnMoney: Mall.Components.BtnSpecial;
			readonly txtRefNum: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtBuyNum: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			readonly txtBtn: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			readonly textFreshDate: fairygui.GTextField;
		}, 'conMall' | 'coIsShowBtn' | 'conType', undefined>;
		namespace Components {
			type btnProp = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type MallRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly loaderUp: fairygui.GLoader;
				readonly loaderDown: fairygui.GLoader;
			}, 'button', undefined>;
			type MallItemRender = StrictComponent<fairygui.GComponent, {
				readonly renReward: UILib.Components.renderer.RewardRender2;
				readonly btnBuy: Mall.Components.BtnBuy;
				readonly txtSale: fairygui.GTextField;
				readonly txtSale1: fairygui.GTextField;
				readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly btnEmpty: UILib.Components.btn.BtnEmpty;
			}, 'conIsLock' | 'conIsHero' | 'conSale' | 'conSellOut' | 'conPos', undefined>;
			type MallStageRender = StrictComponent<fairygui.GComponent, {
				readonly listItem: fairygui.GList;
			}, undefined, undefined>;
			type BtnRefresh = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnRefresh1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type BtnBuy = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type MallSpecialItemRender = StrictComponent<fairygui.GComponent, {
				readonly renReward: UILib.Components.renderer.RewardRender2;
				readonly btnBuy: Mall.Components.BtnSpecial;
				readonly txtSale: fairygui.GTextField;
				readonly txtSale1: fairygui.GTextField;
				readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly btnEmpty: UILib.Components.btn.BtnEmpty;
			}, 'conIsLock' | 'conIsHero' | 'conSale' | 'conSellOut' | 'conPos' | 'conType', undefined>;
			type BtnSpecial = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conColor', undefined>;
			type MallSpecialStageRender = StrictComponent<fairygui.GComponent, {
				readonly listItem: fairygui.GList;
			}, 'conType', undefined>;
			type MallSpecialRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly loaderUp: fairygui.GLoader;
				readonly loaderDown: fairygui.GLoader;
			}, 'button' | 'conIsRight', undefined>;
			type BtnSpecial2 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conColor', undefined>;
		}
	}
	import __pkg__qdgtabfh = ManyNotice;
	namespace ManyNotice {
		type ManyNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly topBg: fairygui.GLoader;
			readonly close: ManyNotice.Components.BtnClose;
			readonly btnList: fairygui.GList;
			readonly noticeView: ManyNotice.Components.ManyNoticeScrool;
			readonly title: fairygui.GRichTextField;
		}, undefined, undefined>;
		type ManyNoticeView = StrictComponent<fairygui.GComponent, {
			readonly closeBg: fairygui.GGraph;
			readonly noticeWindow: ManyNotice.ManyNoticeWindow;
		}, undefined, undefined>;
		namespace Components {
			type ManyNoticeBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
				readonly titleDown: fairygui.GRichTextField;
			}, 'button', undefined>;
			type ManyNoticeScrool = StrictComponent<fairygui.GComponent, {
				readonly noticeTip: fairygui.GRichTextField;
			}, undefined, undefined>;
			type BtnClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
	}
	import __pkg__zuv0wg4j = MilitaryRank;
	namespace MilitaryRank {
		type MilitaryRankView = StrictComponent<fairygui.GComponent, {
			readonly topCom: MilitaryRank.Components.MilitaryRankTopCom;
			readonly bottomCom: MilitaryRank.Components.MilitaryRankBottomCom;
		}, undefined, undefined>;
		type MilitaryRankTrialWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderIcon: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly listTask: fairygui.GList;
			readonly btnFight: UILib.Components.btn.BtnBig1;
			readonly progress: MilitaryRank.Components.TrialProgress;
			readonly txtTip: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			readonly close: UILib.Components.btn.BtnClose1;
		}, undefined, undefined>;
		type MilitaryRankGiftView = StrictComponent<fairygui.GComponent, {
			readonly listGift: fairygui.GList;
			readonly loaderDailyReward: fairygui.GLoader;
			readonly redPoint: fairygui.GImage;
			readonly imgFinish: fairygui.GImage;
			readonly btnRewardPre: MilitaryRank.Components.BtnReward;
			readonly graphAni: fairygui.GGraph;
		}, undefined, undefined>;
		type MilitaryRankPrivilegeActivateWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderBg: fairygui.GLoader;
			readonly close: UILib.Components.btn.BtnWindowClose1;
			readonly privilegeRender: MilitaryRank.Components.MilitaryRankPrivilegeRender;
			readonly btnActivate: UILib.Components.btnAct.BtnAct5;
			readonly btnGo: UILib.Components.btnAct.BtnAct6;
			readonly listConsume: fairygui.GList;
			readonly btnFeat: UILib.Components.renderer.ConsumeRender;
			readonly txtEffectsDes: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpt;
			readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpi;
		}, 'conState', undefined>;
		type MilitaryRankFightHeroView = StrictComponent<fairygui.GComponent, {
			readonly loaderLevel: fairygui.GLoader;
			readonly listMyHero: fairygui.GList;
			readonly listNpcAttr: fairygui.GList;
			readonly btnGo: UILib.Components.btn.BtnBig4;
			readonly txtMyTroop: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'trialLevelState', undefined>;
		type MilitaryRankActivateWindow = StrictComponent<fairygui.GComponent, {
			readonly rectMask: fairygui.GGraph;
			readonly bg: fairygui.GLoader;
			readonly cloud1: MilitaryRank.Components.cloud02;
			readonly loaderIcon: fairygui.GLoader;
			readonly cloud2: MilitaryRank.Components.cloud01;
			readonly bg2: fairygui.GLoader;
			readonly cloud3: MilitaryRank.Components.cloud01;
			readonly cloud4: MilitaryRank.Components.cloud02;
			readonly cloud5: MilitaryRank.Components.cloud02;
			readonly bg3: fairygui.GLoader;
			readonly bg4: fairygui.GLoader;
			readonly loaderTitle: fairygui.GLoader;
			readonly loaderFont: fairygui.GLoader;
			readonly loaderFont1: fairygui.GLoader;
			readonly bg5: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly btnGet: UILib.Components.btnAct.BtnAct2;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly groupBg: fairygui.GGroup;
		}, undefined, 't0' | 'fadeout' | 'fadein'>;
		type MilitaryRankDailyRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderIcon: fairygui.GLoader;
			readonly listDailyReward: fairygui.GList;
			readonly txtName: fairygui.GTextField;
		}, undefined, undefined>;
		type MilitaryRankCeFengWindow = StrictComponent<fairygui.GComponent, undefined, undefined, 't0' | 't1'>;
		namespace Components {
			type MilitaryRankTopCom = StrictComponent<fairygui.GComponent, {
				readonly loaderCorner1: fairygui.GLoader;
				readonly loaderCorner2: fairygui.GLoader;
				readonly listMilitaryRank: fairygui.GList;
				readonly listPrivilege: fairygui.GList;
				readonly loaderCorner4: fairygui.GLoader;
				readonly loaderCorner3: fairygui.GLoader;
				readonly btnGift: MilitaryRank.Components.GiftBtn;
				readonly bubbleCom: MilitaryRank.Components.MilitaryRankBubbleCom;
				readonly selectedCom: MilitaryRank.Components.PrivilegeSelectedCom;
				readonly txtTip: fairygui.GTextField;
			}, undefined, 't0'>;
			type MilitaryRankBottomCom = StrictComponent<fairygui.GComponent, {
				readonly imgTip: fairygui.GImage;
				readonly btnAcvitate: UILib.Components.btn.BtnBig4;
				readonly listTask: fairygui.GList;
				readonly listReward: fairygui.GList;
				readonly txtCount: fairygui.GTextField;
			}, 'conState', undefined>;
			type MilitaryRankRender = StrictComponent<fairygui.GButton, {
				readonly loaderIcon: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly imgRed: fairygui.GImage;
				readonly txtCondition: fairygui.GRichTextField;
			}, 'conState' | 'button', undefined>;
			type MilitaryRankCorePrivilegeRender = StrictComponent<fairygui.GButton, {
				readonly loaderText: fairygui.GLoader;
				readonly loaderIcon: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly imgRed: fairygui.GImage;
			}, 'conCore', 't0'>;
			type MilitaryRankTaskRender = StrictComponent<fairygui.GButton, {
				readonly listReward: fairygui.GList;
				readonly graphAni: fairygui.GGraph;
				readonly imgRed: fairygui.GImage;
				readonly progress: UILib.Components.progressBar.ProgressBar2;
				readonly btnGo: MilitaryRank.Components.BtnTaskDes;
				readonly btnGet: UILib.Components.btn.BtnEmpty;
			}, 'conState', undefined>;
			type MilitaryRankPrivilegeRender = StrictComponent<fairygui.GButton, {
				readonly loaderBgCore: fairygui.GLoader;
				readonly loaderBg: fairygui.GLoader;
				readonly btnPrivilege: UILib.Components.btn.BtnEmpty;
				readonly imgRed: fairygui.GImage;
				readonly graphAni: fairygui.GGraph;
				readonly title: fairygui.GTextField;
			}, 'conActivate' | 'conCore', undefined>;
			type MilitaryRankCirclePrivilegeRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly btnPrivilege: UILib.Components.btn.BtnEmpty;
				readonly imgRed: fairygui.GImage;
				readonly graphAni: fairygui.GGraph;
			}, 'conActivate', undefined>;
			type MilitaryRankTrialTaskRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GImage;
				readonly btnGo: UILib.Components.btn.BtnSmall2;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
			}, 'conFinish', undefined>;
			type MilitaryRankGiftRender = StrictComponent<fairygui.GComponent, {
				readonly btnBuy: UILib.Components.btn.BtnEmpty;
				readonly listReward: fairygui.GList;
				readonly txtName: fairygui.GTextField;
				readonly txtTip: fairygui.GRichTextField;
				readonly txtPrice: fairygui.GTextField;
			}, 'conState', undefined>;
			type TrialProgress = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly imgPoint0: fairygui.GImage;
				readonly imgPoint1: fairygui.GImage;
				readonly imgPoint2: fairygui.GImage;
				readonly imgPoint3: fairygui.GImage;
				readonly bg: fairygui.GLoader;
				readonly loaderDiff: fairygui.GLoader;
				readonly listAttr: fairygui.GList;
			}, 'conDiff', undefined>;
			type MilitaryRankFightHeroMask = StrictComponent<fairygui.GComponent, {
				readonly npcLoader: fairygui.GLoader;
			}, undefined, undefined>;
			type GiftBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type ProgressAttrRender = StrictComponent<fairygui.GComponent, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'conFinish' | 'c1', undefined>;
			type MilitaryRankFightAttrRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
				readonly title1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp6;
				readonly title2: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			}, 'c1', undefined>;
			type BtnArrows = StrictComponent<fairygui.GButton, {
				readonly imgRed: fairygui.GImage;
			}, 'button', undefined>;
			type MilitaryRankBubbleCom = StrictComponent<fairygui.GComponent, {
				readonly btnClose: UILib.Components.btn.BtnEmpty;
				readonly btnTip: MilitaryRank.Components.BtnTip;
				readonly listReward: fairygui.GList;
			}, undefined, undefined>;
			type BtnTip = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnReward = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type cloud01 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type cloud02 = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type MilitaryRankDailyRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtName: fairygui.GRichTextField;
				readonly txtId: fairygui.GRichTextField;
			}, undefined, undefined>;
			type MilitaryRankGiftLayerRender = StrictComponent<fairygui.GComponent, {
				readonly listRender: fairygui.GList;
			}, undefined, undefined>;
			type BtnTaskDes = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type PrivilegeSelectedCom = StrictComponent<fairygui.GComponent, undefined, undefined, 'circle'>;
		}
	}
	import __pkg__pbw92lrc = MiniGameRank;
	namespace MiniGameRank {
		type MiniGameRankWindow = StrictComponent<fairygui.GComponent, {
			readonly btnServer1: MiniGameRank.Components.BtnTab;
			readonly btnServer2: MiniGameRank.Components.BtnTab;
			readonly listRank: fairygui.GList;
			readonly btnMyRank: MiniGameRank.Components.render.MiniGameRankRender;
			readonly btnMap: MiniGameRank.Components.TitleLeftBtn;
			readonly btnAll: MiniGameRank.Components.TitleRightBtn;
			readonly btnClose: MiniGameRank.Components.BtnClose;
			readonly btnMapChoose: MiniGameRank.Components.ComboBox1;
			readonly btnTip: MiniGameRank.Components.BtnTip;
			readonly txtLv: fairygui.GTextField;
			readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
		}, 'conType' | 'conServerType', undefined>;
		type MiniGameMapChooseWindow = StrictComponent<fairygui.GComponent, {
			readonly listChoose: fairygui.GList;
			readonly btnClose: MiniGameRank.Components.BtnClose;
		}, undefined, undefined>;
		namespace Components {
			type ComboBox1 = StrictComponent<fairygui.GButton, undefined, 'button' | 'conIsGray', undefined>;
			type TitleLeftBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type TitleRightBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnTip = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnTab = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conComplete' | 'isRed', undefined>;
		}
		namespace Components.render {
			type MiniGameRankRender = StrictComponent<fairygui.GButton, {
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountrySmallRender;
				readonly txtRanking: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtScore: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtLv: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtServer: fairygui.GTextField;
				readonly txtRanking1: fairygui.GTextField;
			}, 'conIsOwn' | 'conIsShowRank' | 'conRanking', undefined>;
			type RankChooseBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__7jjdhshl = MiniGameReward;
	namespace MiniGameReward {
		type MiniGameRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly listReward: fairygui.GList;
		}, undefined, undefined>;
	}
	import __pkg__4qyj09pm = MiniGameTip;
	namespace MiniGameTip {
		type MiniGameTipWindow = StrictComponent<fairygui.GComponent, {
			readonly uiAnimHolder: fairygui.GGraph;
			readonly timeProgress: MiniGameTip.Components.CircleProgressCom;
			readonly txtTime2: fairygui.GTextField;
			readonly modalLayer: fairygui.GGraph;
		}, undefined, undefined>;
		namespace Components {
			type CircleProgressCom = StrictComponent<fairygui.GComponent, {
				readonly maskcd: MiniGameTip.Components.MaskCdRender;
				readonly maskGraph: fairygui.GGraph;
				readonly txtNum: fairygui.GRichTextField;
			}, undefined, undefined>;
			type MaskCdRender = StrictComponent<fairygui.GComponent, {
				readonly grap: fairygui.GGraph;
			}, undefined, undefined>;
		}
	}
	import __pkg__b31ncdah = MiniGameUI;
	namespace MiniGameUI {
		type MiniGameUIView = StrictComponent<fairygui.GComponent, {
			readonly touchLayer: fairygui.GGraph;
			readonly middleView: MiniGameUI.Views.MiniGameUIMiddleView;
			readonly bottomView: MiniGameUI.Views.MiniGameUIBottomView;
			readonly topView: MiniGameUI.Views.MiniGameUITopView;
			readonly btnMiniTest: MiniGameUI.Components.BtnCommon3;
			readonly txtMiniLv: fairygui.GTextField;
			readonly groupMini: fairygui.GGroup;
			readonly xinShouBox: fairygui.GGroup;
			readonly btnBack: MiniGameUI.Components.BtnBack;
			readonly btnRePlay: MiniGameUI.Components.BtnBack;
			readonly txtCity: fairygui.GTextField;
			readonly bossIcon: fairygui.GImage;
			readonly gameOverAnimView: MiniGameUI.Views.MiniGameOverAnimView;
			readonly tiaoGuo: fairygui.GTextField;
		}, 'gameUiType', 't0' | 'bossAnim' | 'bossMax' | 't3'>;
		namespace Views {
			type MiniGameUITopView = StrictComponent<fairygui.GComponent, {
				readonly btnBackTop: MiniGameUI.Components.BtnBack;
				readonly btnGold: MiniGameUI.Components.BtnGold;
				readonly btnRank: MiniGameUI.Components.BtnMiniFunc;
				readonly listLevel: fairygui.GList;
				readonly txtCity: fairygui.GTextField;
				readonly gameRewardCom: MiniGameUI.Components.GameRewardCom;
			}, 'conShowReward', undefined>;
			type MiniGameUIMiddleView = StrictComponent<fairygui.GComponent, {
				readonly btnDiffculty1: MiniGameUI.Components.BtnTab;
				readonly btnDiffculty2: MiniGameUI.Components.BtnTab;
				readonly btnDiffculty3: MiniGameUI.Components.BtnTab;
				readonly integralTxt: fairygui.GTextField;
				readonly numBox: fairygui.GGroup;
				readonly actionView: MiniGameUI.Views.MiniGameUIActionView;
				readonly listReward: fairygui.GList;
				readonly txtLv: fairygui.GTextField;
				readonly maxIntegralTxt: fairygui.GTextField;
			}, 'conDifficulty', undefined>;
			type MiniGameUIBottomView = StrictComponent<fairygui.GComponent, {
				readonly btnStart: MiniGameUI.Components.BtnCommon2;
				readonly btnMap: MiniGameUI.Components.BtnMiniFunc;
				readonly btnHero: MiniGameUI.Components.BtnMiniFunc;
				readonly guideFinger: MiniGameUI.Components.GuideFingerCom;
			}, 'grayedCon', undefined>;
			type MiniGameUIActionView = StrictComponent<fairygui.GComponent, {
				readonly armyAction0: MiniGameUI.Components.render.ArmyActionRender;
				readonly armyAction1: MiniGameUI.Components.render.ArmyActionRender;
				readonly armyAction2: MiniGameUI.Components.render.ArmyActionRender;
				readonly armyAction3: MiniGameUI.Components.render.ArmyActionRender;
				readonly armyAction4: MiniGameUI.Components.render.ArmyActionRender;
				readonly armyAction5: MiniGameUI.Components.render.ArmyActionRender;
				readonly heroAction: MiniGameUI.Components.render.HeroActionRender;
			}, 'conDifficulty', undefined>;
			type MiniGameTempGuideView = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly bgDialog: fairygui.GLoader;
				readonly skeletonHoldor: fairygui.GGraph;
				readonly loaderRole: fairygui.GLoader;
				readonly bgDialog2: fairygui.GLoader;
				readonly touchLayer: fairygui.GComponent;
			}, undefined, 't0' | 't1'>;
			type MiniGameOverAnimView = StrictComponent<fairygui.GComponent, {
				readonly icon1: fairygui.GLoader;
				readonly icon2: fairygui.GLoader;
				readonly icon3: fairygui.GLoader;
				readonly roleNum1: fairygui.GTextField;
				readonly roleNum3: fairygui.GTextField;
				readonly roleNum2: fairygui.GTextField;
				readonly scoreNum1: fairygui.GTextField;
				readonly scoreNum3: fairygui.GTextField;
				readonly scoreNum2: fairygui.GTextField;
				readonly text4: fairygui.GTextField;
				readonly t3: fairygui.GTextField;
				readonly t4: fairygui.GTextField;
				readonly t5: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace Components {
			type BtnCommon1 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnCommon2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'greyCon', undefined>;
			type BtnBack = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnGold = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnCommon3 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnCommon4 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type GetGoldTipCom = StrictComponent<fairygui.GComponent, {
				readonly txtLv: fairygui.GTextField;
				readonly txtMoney: fairygui.GTextField;
			}, undefined, undefined>;
			type BtnMiniFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'isRed', undefined>;
			type BtnTab = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conComplete' | 'isRed', undefined>;
			type BtnMap = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type rewardBox = StrictComponent<fairygui.GButton, {
				readonly btnBox: fairygui.GLoader;
				readonly btnBox1: fairygui.GLoader;
				readonly boxGraph: fairygui.GGraph;
				readonly imgRed: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'conIsOpen' | 'conIsLast', 'aniRota'>;
			type GameRewardCom = StrictComponent<fairygui.GComponent, {
				readonly proActive: MiniGameUI.Components.ProgressBar;
				readonly btnBase0: MiniGameUI.Components.rewardBox;
				readonly btnBase1: MiniGameUI.Components.rewardBox;
				readonly txtNum: fairygui.GRichTextField;
				readonly btnMask: fairygui.GGraph;
				readonly listReward: fairygui.GList;
			}, 'conType' | 'conTips', undefined>;
			type GuideFingerCom = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type BtnCommon5 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type MiniHongqiScore = StrictComponent<fairygui.GComponent, {
				readonly lbl: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace Components.render {
			type MiniGameUILevelRender = StrictComponent<fairygui.GButton, {
				readonly loaderHero: fairygui.GLoader;
				readonly txtLv: fairygui.GTextField;
				readonly imgRed: fairygui.GImage;
				readonly textOpen: fairygui.GRichTextField;
			}, 'button' | 'conLvType' | 'conCanGet' | 'grayedCon', undefined>;
			type StarRender = StrictComponent<fairygui.GComponent, undefined, 'conComplete', undefined>;
			type HeroActionRender = StrictComponent<fairygui.GComponent, {
				readonly graphAni: fairygui.GGraph;
			}, undefined, undefined>;
			type ArmyActionRender = StrictComponent<fairygui.GComponent, {
				readonly graphAni: fairygui.GGraph;
			}, undefined, undefined>;
			type MiniRewardRender = StrictComponent<fairygui.GComponent, {
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderIcon: fairygui.GLoader;
				readonly txtNum: fairygui.GTextField;
			}, 'conIsGet', 't0'>;
		}
	}
	import __pkg__71oj4is0 = MiniHero;
	namespace MiniHero {
		type MiniHeroWindow = StrictComponent<fairygui.GComponent, {
			readonly btnClose: MiniHero.Components.BtnClose;
			readonly have: MiniHero.Components.TitleLeftBtn;
			readonly noHave: MiniHero.Components.TitleRightBtn;
			readonly list: fairygui.GList;
			readonly txtLv: fairygui.GTextField;
			readonly redPoint: fairygui.GImage;
		}, 'c1' | 'isRed', undefined>;
		type HeroSkillTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderFrame: fairygui.GLoader;
			readonly nameTxt: fairygui.GTextField;
			readonly desTxt: fairygui.GTextField;
			readonly skillIcon: fairygui.GLoader;
			readonly upLvBtn: MiniHero.Components.BtnCommon2;
			readonly list: fairygui.GList;
			readonly btnClose: MiniHero.Components.BtnClose;
			readonly numTxt: fairygui.GRichTextField;
			readonly txtBox: fairygui.GGroup;
		}, 'btnCon', undefined>;
		type MiniNewHeroWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderFrame: fairygui.GLoader;
			readonly skillNameTxt: fairygui.GTextField;
			readonly desTxt: fairygui.GTextField;
			readonly skillIcon: fairygui.GLoader;
			readonly nameTxt: fairygui.GTextField;
			readonly heroAni: fairygui.GGraph;
		}, undefined, undefined>;
		namespace Components {
			type TitleLeftBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type TitleRightBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type HeroItem = StrictComponent<fairygui.GButton, {
				readonly heroAni: fairygui.GGraph;
				readonly txtName: fairygui.GTextField;
				readonly skillIcon: MiniHero.Components.HeroSkillIcon;
				readonly redPoint: fairygui.GImage;
			}, 'c1' | 'stateCon' | 'skillCon' | 'isRed', 't0'>;
			type BtnClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type HeroSkillIcon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type SkillItem = StrictComponent<fairygui.GComponent, {
				readonly star0: fairygui.GImage;
				readonly starTxt: fairygui.GTextField;
				readonly star1: fairygui.GImage;
				readonly star2: fairygui.GImage;
				readonly star3: fairygui.GImage;
				readonly star4: fairygui.GImage;
				readonly defTxt: fairygui.GTextField;
				readonly star5: fairygui.GImage;
			}, undefined, undefined>;
			type BtnCommon2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'greyCon', undefined>;
		}
	}
	import __pkg__n1tfkd2m = MiniMapLevel;
	namespace MiniMapLevel {
		type MiniMapLevelWindow = StrictComponent<fairygui.GComponent, {
			readonly bgLoader: fairygui.GLoader;
			readonly listMap: fairygui.GList;
			readonly btnClose: MiniMapLevel.Components.MiniMapLevelClose;
			readonly leftBtn: MiniMapLevel.Components.MiniMapLevelClose;
			readonly rightBtn: MiniMapLevel.Components.MiniMapLevelClose;
		}, undefined, undefined>;
		type MiniMapLevelWindowEdit = StrictComponent<fairygui.GComponent, {
			readonly lineBg: fairygui.GLoader;
			readonly mapRender0: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender1: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender2: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender3: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender4: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender5: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender6: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender7: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender8: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender9: MiniMapLevel.Components.MiniMapLevelRender;
			readonly close: MiniMapLevel.Components.MiniMapLevelClose;
			readonly title: fairygui.GRichTextField;
			readonly mapLevelTip: fairygui.GRichTextField;
			readonly txtImg: fairygui.GLoader;
		}, undefined, undefined>;
		type MiniMapLevelWindowEdit1 = StrictComponent<fairygui.GComponent, {
			readonly lineBg: fairygui.GLoader;
			readonly mapRender0: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender1: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender2: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender3: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender4: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender5: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender6: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender7: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender8: MiniMapLevel.Components.MiniMapLevelRender;
			readonly mapRender9: MiniMapLevel.Components.MiniMapLevelRender;
			readonly close: MiniMapLevel.Components.MiniMapLevelClose;
			readonly title: fairygui.GRichTextField;
			readonly mapLevelTip: fairygui.GRichTextField;
			readonly txtImg: fairygui.GLoader;
		}, undefined, undefined>;
		namespace Components {
			type MiniMapLevelRender = StrictComponent<fairygui.GComponent, {
				readonly qizi: fairygui.GLoader;
				readonly cityIcon: fairygui.GLoader;
				readonly cityName: fairygui.GTextField;
				readonly cityMaxName: fairygui.GTextField;
				readonly mapStep: fairygui.GRichTextField;
				readonly imgRed: fairygui.GImage;
			}, 'bossState' | 'atkCityState' | 'lockState' | 'conRed', undefined>;
			type MiniMapLevelClose = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type MiniMapLevelSubView = StrictComponent<fairygui.GButton, {
				readonly bgImg: fairygui.GLoader;
				readonly lineBg: fairygui.GLoader;
				readonly treeImg: fairygui.GLoader;
				readonly txtImg: fairygui.GLoader;
				readonly chapterTxt: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__lw5dqug6 = MiniRoleBlood;
	namespace MiniRoleBlood {
		type MiniRoleBloodInfo = StrictComponent<fairygui.GComponent, {
			readonly barBoss: MiniRoleBlood.Components.MiniRoleBloodBarRed;
			readonly barHero: MiniRoleBlood.Components.MiniRoleBloodBarYellow;
			readonly barSkill: MiniRoleBlood.Components.MiniRoleBloodBarBlue;
			readonly list: fairygui.GList;
			readonly img: fairygui.GLoader;
			readonly lbl: fairygui.GTextField;
		}, 'c1', undefined>;
		namespace Components {
			type MiniRoleBloodBarRed = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type MiniRoleBloodBarYellow = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type MiniRoleBloodBarBlue = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
		}
	}
	import __pkg__h82bfgxv = MiniRoleBuff;
	namespace MiniRoleBuff {
		type MiniRoleBuffInfo = StrictComponent<fairygui.GComponent, {
			readonly img: fairygui.GLoader;
		}, 'c1', undefined>;
	}
	import __pkg__m8oifn40 = MiniSettlement;
	namespace MiniSettlement {
		type WinSettlementWindow = StrictComponent<fairygui.GComponent, {
			readonly txtCurLv: fairygui.GRichTextField;
			readonly listReward: fairygui.GList;
			readonly integralTxt: fairygui.GTextField;
			readonly maxIntegral: fairygui.GTextField;
			readonly currIntegral: fairygui.GTextField;
		}, 'repeat', undefined>;
		type FailSettlementWindow = StrictComponent<fairygui.GComponent, {
			readonly txtCurLv: fairygui.GRichTextField;
			readonly replayBtn: MiniSettlement.Components.BtnCommon2;
			readonly skipBtn: MiniSettlement.Components.BtnCommon1;
		}, 'con', 't0'>;
		namespace Components {
			type BtnCommon1 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type BtnCommon2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'greyCon', undefined>;
		}
		namespace Components.render {
			type TitleRender = StrictComponent<fairygui.GComponent, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type SettlementRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly txtNum: fairygui.GTextField;
				readonly txtScore: fairygui.GTextField;
				readonly graphAni: fairygui.GGraph;
			}, undefined, undefined>;
			type SettlementStarCom = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGet', 't1' | 't2'>;
		}
	}
	import __pkg__sobourfd = Minqing;
	namespace Minqing {
		type MinqingAcceptView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly bg: UILib.Components.frame.Frame6;
			readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
			readonly cityTypeLoader: fairygui.GLoader;
			readonly proTask: UILib.Components.progressBar.ProgressBar4;
			readonly listReward: fairygui.GList;
			readonly comTask: Minqing.Components.render.MinqingTaskRender;
			readonly txtComplete: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpa;
			readonly txtDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtCity: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type CityOpenRewardView = StrictComponent<fairygui.GComponent, {
			readonly loader0: fairygui.GLoader;
			readonly loader1: fairygui.GLoader;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly listReward: fairygui.GList;
			readonly loader2: fairygui.GLoader;
			readonly imgDoorEffect1: fairygui.GImage;
			readonly imgDoor1: fairygui.GImage;
			readonly imgDoor2: fairygui.GImage;
			readonly imgDoor3: fairygui.GImage;
			readonly imgDoor4: fairygui.GImage;
			readonly imgDoorEffect2: fairygui.GImage;
			readonly imgDoorEffect3: fairygui.GImage;
			readonly imgTip: fairygui.GImage;
			readonly guideTouch: fairygui.GGraph;
		}, undefined, 't0' | 't1'>;
		type MinqingAcceptWindow = StrictComponent<fairygui.GComponent, {
			readonly btnGo: UILib.Components.btn.BtnBig1;
			readonly listReward: fairygui.GList;
			readonly title: fairygui.GTextField;
			readonly btnClose: UILib.Components.btn.BtnWindowClose1;
		}, undefined, undefined>;
		type CityOpenRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly loaderBg1: fairygui.GLoader;
			readonly loaderBg2: fairygui.GLoader;
			readonly loaderBg3: fairygui.GLoader;
			readonly loaderBg4: fairygui.GLoader;
			readonly guideTouch: fairygui.GGraph;
			readonly img_js: fairygui.GImage;
			readonly img_js2: fairygui.GImage;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly listReward: fairygui.GList;
		}, undefined, 't0'>;
		namespace Components.render {
			type MinqingTaskRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly listReward: fairygui.GList;
				readonly btnGet: UILib.Components.btn.BtnBig1;
				readonly btnGoTo: UILib.Components.btn.BtnBig4;
				readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
				readonly txtDesc: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly descList: fairygui.GList;
			}, 'conTaskState' | 'conTaskType', undefined>;
			type MinqingTaskDescRender = StrictComponent<fairygui.GComponent, {
				readonly desc: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, 'conState', undefined>;
		}
	}
	import __pkg__7b8o1ost = More;
	namespace More {
		type MoreBtnUIWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listBtn: fairygui.GList;
		}, undefined, 't0' | 't1'>;
		namespace Components {
			type MoreBtnRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly iconText: fairygui.GLoader;
			}, 'button' | 'conRed', undefined>;
		}
	}
	import __pkg__g058ym64 = MsConvert;
	namespace MsConvert {
		type MsConvertView = StrictComponent<fairygui.GComponent, {
			readonly loaderHero: fairygui.GLoader;
			readonly listConvert: fairygui.GList;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtTime2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtStr: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
		}, undefined, undefined>;
		namespace Components {
			type MsConvertRender = StrictComponent<fairygui.GComponent, {
				readonly rewardConvert: UILib.Components.renderer.RewardRenderForEffect2;
				readonly btnConvert: UILib.Components.btn.BtnSmall4;
				readonly listItem: fairygui.GList;
				readonly txtLimitNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			}, 'conState', undefined>;
			type MsConvertItemRender = StrictComponent<fairygui.GComponent, {
				readonly itemRender: UILib.Components.renderer.RewardRenderForEffect4;
			}, 'conLast', undefined>;
		}
	}
	import __pkg__7nks6p7c = MsExchangeShop;
	namespace MsExchangeShop {
		type MsExchangeShopView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly shopBgLoader: fairygui.GLoader;
			readonly shopAttrLoader: fairygui.GLoader;
			readonly titleLoader: fairygui.GLoader;
			readonly centerAttrLoader: fairygui.GLoader;
			readonly sada: fairygui.GLoader;
			readonly attrIcon: fairygui.GLoader;
			readonly skillBtn: MsExchangeShop.Components.MsExchangeLoaderBtn;
			readonly suitBtn: MsExchangeShop.Components.MsExchangeLoaderBtn;
			readonly rechargeBtn: MsExchangeShop.Components.MsExchangeLoaderBtn;
			readonly shopGoodsList: fairygui.GList;
			readonly downLoader: fairygui.GLoader;
			readonly shopSuitList: fairygui.GList;
			readonly shopTabList: fairygui.GList;
			readonly heroGraph: fairygui.GGraph;
			readonly scoreCount: fairygui.GRichTextField;
			readonly attrName: UILib.Components.fontTab_richText.__cmpt__sxsxa3tlqa;
		}, 'showSuitState' | 'centerState' | 'showSkillState', 'listAni'>;
		type MsEncoreShopOpenView = StrictComponent<fairygui.GComponent, {
			readonly leftMen: fairygui.GLoader;
			readonly rightMen: fairygui.GLoader;
		}, undefined, 'openAni'>;
		type BuyAlertWindow = StrictComponent<fairygui.GComponent, {
			readonly ok: UILib.Components.btn.BtnBig1;
			readonly cancel: UILib.Components.btn.BtnBig5;
			readonly money: UILib.Components.renderer.RewardRender3;
			readonly recharge: UILib.Components.renderer.RewardRender3;
			readonly checkBtn: UILib.Components.button_checkbox.Button_Check1;
			readonly txtName: fairygui.GRichTextField;
		}, undefined, undefined>;
		type MsExchangeWindow = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly bg1: fairygui.GLoader;
			readonly actitivityName: fairygui.GLoader;
			readonly timeDes: fairygui.GTextField;
			readonly time: fairygui.GTextField;
			readonly shopBtn: MsExchangeShop.Components.MsExchangeLoaderBtn;
			readonly rechargeValue: MsExchangeShop.Components.ProgressBar;
			readonly receiveEffect: fairygui.GGraph;
			readonly receiveBtn: MsExchangeShop.Components.Btn;
			readonly receiveTextEffect: fairygui.GGraph;
			readonly close: UILib.Components.btn.BtnClose2;
			readonly rechargeBtn: UILib.Components.btnAct.BtnAct2;
			readonly time: fairygui.GTextField;
		}, 'showEffect' | 'stateCL', undefined>;
		namespace Components {
			type MsExchangeSuitRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly iconDown: fairygui.GLoader;
				readonly loaderName: fairygui.GLoader;
				readonly loaderNameDown: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type MsExchangeLoaderBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type MsExchangeShopRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly curRender: UILib.Components.renderer.RewardRender3;
				readonly newRender: UILib.Components.renderer.RewardRender3;
				readonly btnBuy: UILib.Components.btn.BtnSmall2;
				readonly checkbtn: UILib.Components.button_checkbox.Button_Check4;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, 'canBuyState', undefined>;
			type MsExchangeShopTab = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly loaderName: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type ProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type Btn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type Btn1 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__0di5rucb = MsFixedRecharge;
	namespace MsFixedRecharge {
		type MsFixedRechargeView = StrictComponent<fairygui.GComponent, {
			readonly loaderHero: fairygui.GLoader;
			readonly listRecharge: fairygui.GList;
			readonly txtNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
		}, undefined, undefined>;
		namespace Components {
			type MsFixedRechargeRender = StrictComponent<fairygui.GComponent, {
				readonly rewardSpecial: UILib.Components.renderer.RewardRenderForEffect2;
				readonly progressNum: UILib.Components.progressBar.ProgressBar4;
				readonly listReward: fairygui.GList;
				readonly txtMoney: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
				readonly graphAni: fairygui.GGraph;
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
			}, 'conState', undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__mgg7tp55 = Mufu;
	namespace Mufu {
		type MufuView = StrictComponent<fairygui.GComponent, {
			readonly btnMufu: Mufu.Components.render.MufuRender;
			readonly listChooice: fairygui.GList;
			readonly btnTip: fairygui.GButton;
			readonly btnHero1: Mufu.Components.render.MufuPutRender;
			readonly btnHero3: Mufu.Components.render.MufuPutRender;
			readonly btnHero2: Mufu.Components.render.MufuPutRender;
			readonly btnHero4: Mufu.Components.render.MufuPutRender;
			readonly btnHero5: Mufu.Components.render.MufuPutRender;
			readonly btnBattle: UILib.Components.btn.BtnBig4;
			readonly btnUpgrade: UILib.Components.btn.BtnBig1;
			readonly btnLast: UILib.Components.btnArrows.BtnArrows1;
			readonly btnNext: UILib.Components.btnArrows.BtnArrows1;
			readonly imgRed: fairygui.GImage;
			readonly imgArrows1: fairygui.GImage;
			readonly imgArrows: fairygui.GImage;
		}, undefined, undefined>;
		type MufuHeroScreenWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listScreenHero: fairygui.GList;
			readonly btnBattle: UILib.Components.btn.BtnBig4;
			readonly btnBattleGo: UILib.Components.btn.BtnBig3;
			readonly txtPutNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
			readonly textTip: fairygui.GTextField;
		}, 'conIsHave', undefined>;
		type MufuUpgradeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly loaderBg: fairygui.GLoader;
			readonly btnUpgrade: UILib.Components.btn.BtnBig4;
			readonly btnClose: UILib.Components.btn.BtnBig2;
			readonly txtNextLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtCurLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtCost: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNextScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtCurScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly loaderMaxText: fairygui.GLoader;
			readonly btnCostResNum: UILib.Components.renderer.ConsumeRender;
			readonly btnBookNum: UILib.Components.renderer.ConsumeRender;
			readonly effect: fairygui.GGraph;
		}, 'conIsMax', undefined>;
		type MufuScoreDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listCondition: fairygui.GList;
			readonly listScore: fairygui.GList;
			readonly txtAllScore: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
		}, undefined, undefined>;
		type MufuTipWindow = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GLoader;
			readonly txtNextLv: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly txtCurLv: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly txtName: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			readonly txtNextScore: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly txtCurScore: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly Background: fairygui.GGroup;
			readonly light1: fairygui.GLoader;
		}, undefined, 't0'>;
		type MufuScoreExpainWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly comHero: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly loaderScore: fairygui.GLoader;
			readonly listScore: fairygui.GList;
			readonly listTreasureScore: fairygui.GList;
			readonly txtScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtBaseScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtRatio: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
		}, 'conIsHaveTreasure' | 'conIsMax', undefined>;
		type MufuMoreInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderBg: fairygui.GLoader;
			readonly listMufu: fairygui.GList;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
		}, undefined, undefined>;
		namespace Components {
			type MufuScore = StrictComponent<fairygui.GComponent, {
				readonly loaderScore: fairygui.GLoader;
				readonly imgRed: fairygui.GImage;
			}, 'conIsLock' | 'conIsBigView', undefined>;
			type BtnMufuUpgradeHero = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsShowRed', undefined>;
			type BtnMufuSpecial = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly iconDown: fairygui.GLoader;
			}, 'button' | 'conIsShowRed', undefined>;
			type BtnMufuInfo = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type MufuRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly imgUp: fairygui.GImage;
				readonly listScore: fairygui.GList;
				readonly txtSpecialGrade: fairygui.GTextField;
				readonly txtMufuName: fairygui.GTextField;
				readonly txtMufuLevel: fairygui.GTextField;
				readonly txtAttrName0: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
				readonly txtAttr0: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttrName2: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
				readonly txtAttr1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttrName1: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
				readonly txtAttr2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttrName3: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6m;
				readonly txtAttr3: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtNextAttr0: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtNextAttr1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtNextAttr2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtNextAttr3: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtGrade: fairygui.GTextField;
				readonly txtNextGrade: fairygui.GTextField;
				readonly groScore: fairygui.GGroup;
			}, 'button', undefined>;
			type MufuScreenRender = StrictComponent<fairygui.GButton, {
				readonly txtType: fairygui.GTextField;
				readonly comHero: UILibHero.Components.render.HeroTroopRender;
				readonly mufuQuality: Mufu.Components.MufuScore;
				readonly txtScore: fairygui.GTextField;
			}, 'button' | 'conIsBattle' | 'conIsMaxScore', undefined>;
			type MufuPutRender = StrictComponent<fairygui.GButton, {
				readonly btnChangeHero: UILib.Components.btn.BtnEmpty;
				readonly comHero: UILibHero.Components.render.HeroTroopRender;
				readonly mufuQuality: Mufu.Components.MufuScore;
				readonly btnUpgrade: UILib.Components.btn.BtnSmall4;
				readonly btnRemoveHero: UILib.Components.btn.BtnSmall2;
				readonly btnDetail: UILib.Components.btn.BtnEmpty;
				readonly txtScore: fairygui.GTextField;
				readonly txtCost: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly imgLock: fairygui.GImage;
				readonly txtLockTip: UILib.Components.fontTab.__cmpt__f73xa3tlht;
				readonly txtCostNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'button' | 'conState' | 'isMaxScore', 'addEffect'>;
			type MufuScoreRender = StrictComponent<fairygui.GComponent, {
				readonly btnArrow: fairygui.GLoader;
				readonly listTask: fairygui.GList;
				readonly imgArrows: fairygui.GImage;
				readonly imgArrows1: fairygui.GImage;
				readonly txtTitle: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
				readonly milepostRed1: fairygui.GImage;
			}, 'conShowNext' | 'conIsShowRed', undefined>;
			type MufuChooiceRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly imgRed: fairygui.GImage;
				readonly txtLv: fairygui.GTextField;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conState' | 'conIsShowRed', undefined>;
			type BtnMufuChooice = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type MufuScoreTaskRender = StrictComponent<fairygui.GComponent, {
				readonly btnGet: UILib.Components.btn.BtnSmall1;
				readonly btnGetScore: UILib.Components.btn.BtnSmall4;
				readonly progress: UILib.Components.proBar.ProgressBarBlue;
				readonly txtDesc: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
				readonly txtCondition: UILib.Components.fontTab.__cmpt__f73xa3tlhb;
				readonly txtScore: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
			}, 'conIsEnough' | 'conIsLock', undefined>;
			type ScoreTreasureInfoRender = StrictComponent<fairygui.GComponent, {
				readonly txtScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
				readonly txtLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtQuality: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsShowBg', undefined>;
			type ScoreInfoRender = StrictComponent<fairygui.GComponent, {
				readonly txtScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpf;
				readonly txtLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsShowBg', undefined>;
			type MufuMoreInfoRender = StrictComponent<fairygui.GComponent, {
				readonly txtLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtScore: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttr1: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtAttr2: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtAttr3: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtAttr4: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtAttrName1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttrName2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttrName3: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtAttrName4: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsShowBg' | 'conIsCurLv', undefined>;
		}
	}
	import __pkg__bmo1tunn = MysteryStore;
	namespace MysteryStore {
		type MysteryStoreView = StrictComponent<fairygui.GComponent, {
			readonly progressRate: MysteryStore.Components.Progress1;
			readonly btnExchange: MysteryStore.Components.BtnExchange;
			readonly btnCoin: UILib.Components.renderer.ConsumeRender;
			readonly btnRecharge: MysteryStore.Components.BtnRecharge;
			readonly listItem: fairygui.GList;
			readonly txtTip: fairygui.GTextField;
			readonly txtRate: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
		}, undefined, undefined>;
		type MysteryStoreBuyWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnCutDown: UILib.Components.btn.BtnCutDown;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly btnBuy: MysteryStore.Components.BtnBreakMoney;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly loaderFrame: fairygui.GLoader;
			readonly slider: UILib.Components.silder.silder_com_3;
			readonly txtInputNum: fairygui.GTextField;
			readonly txtName: fairygui.GTextField;
			readonly txtDes: fairygui.GTextField;
		}, undefined, undefined>;
		namespace Components {
			type Progress1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type BtnBreakMoney = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type BtnRecharge = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnExchange = StrictComponent<fairygui.GButton, {
				readonly btnExchange: fairygui.GLoader;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type MysteryStoreRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly txtName: fairygui.GRichTextField;
				readonly txtTip: fairygui.GTextField;
				readonly title: fairygui.GTextField;
				readonly icon: fairygui.GLoader;
			}, 'conIsLimit' | 'conSellOut', undefined>;
			type MysteryStoreListRender = StrictComponent<fairygui.GComponent, {
				readonly listItem: fairygui.GList;
			}, undefined, undefined>;
		}
	}
	import __pkg__2oni43st = Notice;
	namespace Notice {
		type NoticeView = StrictComponent<fairygui.GComponent, {
			readonly fixedNotice: fairygui.GComponent;
			readonly firstBillboardNotice: Notice.FirstBillboardNoticeView;
			readonly fightNoticeView: Notice.FightNoticeView;
			readonly secondBillboardNotice: Notice.SecondBillboardNoticeView;
			readonly touchNotice: fairygui.GComponent;
			readonly notFixedNotice: fairygui.GComponent;
			readonly levelUpNoticeView: Notice.LevelUpNoticeView;
			readonly explainNoticeView: fairygui.GComponent;
			readonly fightSettlementView: fairygui.GComponent;
			readonly fightStrongerView: Notice.FightResultStrongerView;
			readonly mantleNoticeView: Notice.MantleNoticeView;
			readonly mainTaskTipsView: Notice.MainTaskNoticeView;
			readonly TroopArriveView: fairygui.GComponent;
			readonly cityCaptureNotice: Notice.CityCaptureNoticeView;
		}, undefined, undefined>;
		type FirstBillboardNoticeView = StrictComponent<fairygui.GComponent, {
			readonly firstBillBoardCom: Notice.Components.FirstBillBoardNoticeItem;
		}, undefined, 'FX01' | 'Fadeout'>;
		type LevelUpNoticeView = StrictComponent<fairygui.GComponent, undefined, 'conType', 't0' | 't1'>;
		type MantleNoticeView = StrictComponent<fairygui.GComponent, {
			readonly btnMantle: UILib.Components.btn.BtnEmpty;
			readonly btnMoney: UILib.Components.btn.BtnEmpty;
		}, undefined, undefined>;
		type CityCaptureNoticeView = StrictComponent<fairygui.GComponent, undefined, undefined, 'Show'>;
		type SecondBillboardNoticeView = StrictComponent<fairygui.GComponent, {
			readonly SecondBillBoardCom: Notice.Components.SecondBillBoardNoticeItem;
			readonly SecondBillBoardCom1: Notice.Components.SecondBillBoardNoticeItem;
		}, undefined, undefined>;
		type MainTaskNoticeView = StrictComponent<fairygui.GComponent, {
			readonly comTask: Notice.Components.MainTaskNoticeItem;
		}, undefined, 't0'>;
		type BulletChat = StrictComponent<fairygui.GComponent, {
			readonly txtContent: fairygui.GRichTextField;
		}, undefined, undefined>;
		type FightResultStrongerView = StrictComponent<fairygui.GComponent, {
			readonly closeGh: fairygui.GGraph;
			readonly strongerItem: Notice.Components.FightResultStrongerItem;
		}, undefined, undefined>;
		type FightNoticeView = StrictComponent<fairygui.GComponent, {
			readonly txtFight: fairygui.GTextField;
			readonly graphAni1: fairygui.GGraph;
			readonly graphAni: fairygui.GGraph;
		}, 'isFightUp', 'In' | 'Out'>;
		namespace Components {
			type FixedNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly bg1: fairygui.GImage;
				readonly title1: fairygui.GRichTextField;
			}, undefined, undefined>;
			type TouchNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly bg1: fairygui.GGraph;
				readonly icon1: fairygui.GLoader;
				readonly title1: fairygui.GRichTextField;
			}, undefined, undefined>;
			type NotFixedNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly title1: fairygui.GTextField;
			}, undefined, 'baoji'>;
			type FirstBillBoardNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GImage;
				readonly lblText: fairygui.GRichTextField;
			}, undefined, undefined>;
			type TroopArriveItem = StrictComponent<fairygui.GComponent, {
				readonly effect: fairygui.GGraph;
				readonly btnGo: UILib.Components.btn.BtnSmall2;
				readonly txtHeroName: UILib.Components.fontTab.__cmpt__kyk1a3tljq;
				readonly txtCity: fairygui.GTextField;
				readonly effect1: fairygui.GGraph;
			}, 'conArriveOrFight', 't0' | 't1'>;
			type FightSettlementNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly J1: fairygui.GImage;
				readonly J2: fairygui.GImage;
				readonly winGro: fairygui.GGroup;
				readonly s1: fairygui.GImage;
				readonly j1: fairygui.GImage;
				readonly s2: fairygui.GImage;
				readonly j2: fairygui.GImage;
				readonly s3: fairygui.GImage;
				readonly j3: fairygui.GImage;
				readonly loseGro: fairygui.GGroup;
			}, undefined, 'fightLose' | 't3' | 'fightWin'>;
			type ExplainNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly contentArea: UILib.Components.frame.Frame4;
				readonly txtExplainList: fairygui.GList;
			}, undefined, undefined>;
			type explainRender = StrictComponent<fairygui.GComponent, {
				readonly txtExplain: fairygui.GRichTextField;
			}, undefined, undefined>;
			type SecondBillBoardNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly bg1: fairygui.GImage;
				readonly bg: fairygui.GImage;
				readonly lblText: fairygui.GRichTextField;
				readonly btnClick: UILib.Components.btn.BtnEmpty;
			}, undefined, 'FX01' | 'FadeOut'>;
			type MainTaskNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly txtDesc: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpy;
			}, undefined, undefined>;
			type FightResultStrongerRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
				readonly effectRes: fairygui.GGraph;
			}, 'button', undefined>;
			type FightResultStrongerItem = StrictComponent<fairygui.GComponent, {
				readonly s1: fairygui.GImage;
				readonly j1: fairygui.GImage;
				readonly s2: fairygui.GImage;
				readonly j2: fairygui.GImage;
				readonly s3: fairygui.GImage;
				readonly j3: fairygui.GImage;
				readonly loseGro: fairygui.GGroup;
				readonly bg: fairygui.GLoader;
				readonly strongerList: fairygui.GList;
				readonly tipStr: fairygui.GRichTextField;
				readonly strongerStr: fairygui.GTextField;
				readonly strongerGroup: fairygui.GGroup;
			}, undefined, 'loseAni' | 'strongerAni'>;
		}
	}
	import __pkg__re1ltfnl = Office;
	namespace Office {
		type OfficePrivilegeUIWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnPrivilege: Office.Components.OfficePrivilegeRender;
			readonly btnActivate: UILib.Components.btn.BtnBig1;
			readonly btnFeats: UILib.Components.renderer.ConsumeRender;
			readonly btnSilvers: UILib.Components.renderer.ConsumeRender;
			readonly officeName: UILib.Components.fontTab.__cmpt__9i4xa3tll4;
			readonly activeGroup: fairygui.GGroup;
			readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			readonly txtEffectsDes: UILib.Components.fontTab.__cmpt__tr9ia3tlku;
			readonly txtName: UILib.Components.fontTab.__cmpt__9i4xa3tll4;
		}, 'conIsShowTip' | 'conIsActivate', undefined>;
		type OfficeView = StrictComponent<fairygui.GComponent, {
			readonly aniView: Office.OfficeAniView;
			readonly listBg: fairygui.GImage;
			readonly listTask: fairygui.GList;
			readonly explainList: fairygui.GList;
			readonly leftBtn: Office.Components.OfficeLeftBtn;
			readonly rightBtn: Office.Components.OfficeRightBtn;
			readonly leftPre: fairygui.GImage;
			readonly rightPre: fairygui.GImage;
			readonly openTip: fairygui.GLoader;
			readonly priBg: fairygui.GLoader;
			readonly imgActivated: fairygui.GLoader;
			readonly select: fairygui.GImage;
			readonly listPrivilege: fairygui.GList;
			readonly btnUp: UILib.Components.btn.BtnBig1;
			readonly btnGroup: fairygui.GGroup;
			readonly txtShowOffice: fairygui.GRichTextField;
			readonly txtUpLv: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			readonly txtDownLv: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
			readonly guanDiGroup: fairygui.GGroup;
			readonly officeReward: Office.Components.OfficeReward;
			readonly ybReward: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			readonly moneyGroup: fairygui.GGroup;
			readonly group: fairygui.GGroup;
		}, 'conIsActivate' | 'stateOpen' | 'mergeOpen' | 'showReward' | 'oneState', 'selectAni'>;
		type OfficeAniView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly listUIRender: fairygui.GList;
			readonly lianzi: fairygui.GLoader;
			readonly menRight2: fairygui.GLoader;
			readonly menLeft2: fairygui.GLoader;
			readonly menRight: fairygui.GLoader;
			readonly menLeft: fairygui.GLoader;
			readonly bg1: fairygui.GLoader;
		}, undefined, 'playAni' | 't1' | 'resetAni'>;
		namespace Components {
			type OfficePrivilegeRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly preIcon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
				readonly redPoint: fairygui.GImage;
				readonly graphEffect: fairygui.GGraph;
			}, 'conIsActivate' | 'conIsLock' | 'preview', undefined>;
			type OfficeTaskRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly szbg: fairygui.GLoader;
				readonly select: fairygui.GImage;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly titleStr: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtNum: UILib.Components.fontTab.__cmpt__kyk1a3tljl;
				readonly txtCurNum: UILib.Components.fontTab.__cmpt__kyk1a3tljl;
				readonly retrieveBtn: UILib.Components.btn.BtnSmall2;
			}, 'conIsComplete', 'selectAni'>;
			type OfficeUIRender = StrictComponent<fairygui.GButton, {
				readonly loaderIcon: fairygui.GLoader;
				readonly officeName: fairygui.GRichTextField;
			}, 'conIsOpen' | 'button', undefined>;
			type OfficeLeftBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type OfficeRightBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type OfficeReward = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly effect: fairygui.GGraph;
			}, undefined, undefined>;
			type OfficeExplainRender = StrictComponent<fairygui.GComponent, {
				readonly txtExplain: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
		}
	}
	import __pkg__fs2va11n = OnlineRewards;
	namespace OnlineRewards {
		type OnlineRewardsWindow = StrictComponent<fairygui.GComponent, {
			readonly box1: OnlineRewards.Render.BoxLoader;
			readonly box2: OnlineRewards.Render.BoxLoader;
			readonly box3: OnlineRewards.Render.BoxLoader;
			readonly box4: OnlineRewards.Render.BoxLoader;
			readonly box5: OnlineRewards.Render.BoxLoader;
			readonly btnGet: UILib.Components.btnAct.BtnAct2;
			readonly btnreCharge: UILib.Components.btnAct.BtnAct3;
			readonly btnClose: OnlineRewards.Render.BtnClose;
			readonly startPoint: fairygui.GGraph;
			readonly moveState: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
			readonly listReward: fairygui.GList;
			readonly extraListReward: fairygui.GList;
			readonly txtDes: fairygui.GRichTextField;
			readonly txtContent: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
			readonly recordRewardList: fairygui.GList;
		}, 'conCanGet' | 'conExtra' | 'conHeroPos' | 'conHasRecharged' | 'conDrawer' | 'conGetBtnPos', undefined>;
		type OnlineRewardsShowWindow = StrictComponent<fairygui.GComponent, {
			readonly rewardList: fairygui.GList;
			readonly timeLeft: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		namespace Render {
			type OnlineRewardsRender = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender2;
			}, 'conIsExtra', undefined>;
			type BtnClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BoxLoader = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conLoader', undefined>;
			type BtnOrang = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
	}
	import __pkg__xpe73zgc = OpenServerTarget;
	namespace OpenServerTarget {
		type OpenServerTargetView = StrictComponent<fairygui.GComponent, {
			readonly list: fairygui.GList;
			readonly btnList: fairygui.GList;
			readonly titleBg: fairygui.GLoader;
			readonly titleTxt: fairygui.GLoader;
			readonly btnGo: UILib.Components.btnAct.BtnAct2;
			readonly timeTxt: fairygui.GTextField;
		}, 'c1', undefined>;
		namespace Render {
			type OpenServerRender = StrictComponent<fairygui.GButton, {
				readonly nameTxt: fairygui.GRichTextField;
				readonly rewardList: fairygui.GList;
				readonly proBar: UILib.Components.progressBar.ProgressBar2;
				readonly btnGet: UILib.Components.btnAct.BtnAct6;
				readonly btnGetInto: UILib.Components.btnAct.BtnAct5;
				readonly effect: fairygui.GGraph;
			}, 'stateCon', undefined>;
			type OpenServerBtnRender = StrictComponent<fairygui.GButton, {
				readonly iconup: fairygui.GLoader;
				readonly icondown: fairygui.GLoader;
				readonly titledown: fairygui.GLoader;
				readonly titleup: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'isRed' | 'isEnd', undefined>;
			type ProgressBarBlue = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, undefined, undefined>;
		}
	}
	import __pkg__yknp76g0 = PlatFunc;
	namespace PlatFunc {
		type RealNameGiftWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnRealName: UILib.Components.btn.BtnBig1;
			readonly btnGet: UILib.Components.btn.BtnBig1;
			readonly rewardList: fairygui.GList;
			readonly tipStr: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
		}, 'stateCtrl', undefined>;
	}
	import __pkg__qjuh47rr = PopInfo;
	namespace PopInfo {
		type PopInfo = StrictComponent<fairygui.GComponent, {
			readonly img: fairygui.GImage;
			readonly img: fairygui.GImage;
			readonly text: fairygui.GRichTextField;
		}, 'c1' | 'popType', 't0' | 't1'>;
	}
	import __pkg__6ec5iav7 = PrivilegeCard;
	namespace PrivilegeCard {
		type PrivilegeCardView = StrictComponent<fairygui.GComponent, {
			readonly loaderDay: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly listWeeklyDay: fairygui.GList;
			readonly listWeekly: fairygui.GList;
			readonly btnBuyCard1: UILib.Components.btnAct.BtnAct2;
			readonly btnBuyCard2: UILib.Components.btnAct.BtnAct2;
			readonly btnTips: fairygui.GButton;
			readonly btnBox: UILib.Components.btn.BtnCutDown;
			readonly funcTitle: fairygui.GTextField;
		}, 'conIsOpen1' | 'conIsOpen2' | 'conIsGet1' | 'conIsGet2', 'transBox' | 'transBox1'>;
		type PrivilegeDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listRewardDetails: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type btnCardType = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type PrivilegeRewardRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly title2: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
			type PrivilegeItemRender = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly imgIcon: fairygui.GLoader;
				readonly txtCount: fairygui.GRichTextField;
			}, 'button', undefined>;
			type btnBuy = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
				readonly effectAni: fairygui.GGraph;
				readonly redPoint: fairygui.GImage;
			}, 'conIsGray', undefined>;
			type btnBox = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type buyBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__mr0hrc9w = Rank;
	namespace Rank {
		type RankView = StrictComponent<fairygui.GComponent, {
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly btnCountry: Rank.Components.BtnCountry;
			readonly btnWorld: UILib.Components.button_radio.Button_Radio3;
			readonly loader0: fairygui.GLoader;
			readonly loader1: fairygui.GLoader;
			readonly listBtn: fairygui.GList;
			readonly listRankFight: fairygui.GList;
			readonly listRankHero: fairygui.GList;
			readonly btnOwn: Rank.Components.RankFightRender;
			readonly btnHeroOwn: Rank.Components.RankHeroRender;
			readonly txtTime: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, 'conRankState' | 'conCountryOrWorld', undefined>;
		namespace Components {
			type RankFightRender = StrictComponent<fairygui.GButton, {
				readonly loader2: fairygui.GLoader;
				readonly loader1: fairygui.GLoader;
				readonly loader0: fairygui.GLoader;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly txtFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtGuandiLv: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtRanking: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtRankNum: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			}, 'conIsOwn' | 'conIsShowRank' | 'conRanking' | 'conRankState' | 'conIsLight', undefined>;
			type RankHeroRender = StrictComponent<fairygui.GButton, {
				readonly loader2: fairygui.GLoader;
				readonly loader1: fairygui.GLoader;
				readonly loader0: fairygui.GLoader;
				readonly listStar: fairygui.GList;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly txtFight: UILibHero.Components.fight.FightPowerBig;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly txtRanking: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtHeroName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			}, 'conIsOwn' | 'conIsShowRank' | 'conRanking' | 'conQuality' | 'conIsLight', undefined>;
			type BtnCountry = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
				readonly iconDi: fairygui.GLoader;
			}, 'button' | 'conIsRight' | 'conIsCanRed' | 'conType', undefined>;
			type Button_Radio1 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
	}
	import __pkg__l409cazs = Recharge;
	namespace Recharge {
		type RechargeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnHelp: fairygui.GButton;
			readonly bg: fairygui.GLoader;
			readonly goldIcon: fairygui.GLoader;
			readonly extraIcon: fairygui.GLoader;
			readonly bannerSubView: Recharge.Components.RechargeBannerSubView;
			readonly listRecharge: fairygui.GList;
			readonly txtGold: fairygui.GRichTextField;
			readonly txtExtra: fairygui.GRichTextField;
			readonly txtGoldNum: fairygui.GRichTextField;
			readonly txtExtraNum: fairygui.GRichTextField;
		}, 'conGive', undefined>;
		namespace Components {
			type RechargeRender = StrictComponent<fairygui.GButton, {
				readonly imgBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly zengbg: fairygui.GLoader;
				readonly zeng: fairygui.GLoader;
				readonly giveIcon: fairygui.GLoader;
				readonly extraIcon: fairygui.GLoader;
				readonly moneyBtn: UILib.Components.btn.BtnEmpty;
				readonly moneyStr: fairygui.GRichTextField;
				readonly title: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, 'conFirst' | 'conGive', undefined>;
			type RechargeBannerRadio = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type RechargeBannerRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly titleIcon: fairygui.GLoader;
			}, undefined, undefined>;
			type RechargeBannerSubView = StrictComponent<fairygui.GComponent, {
				readonly bannerList: fairygui.GList;
				readonly radioList: fairygui.GList;
			}, undefined, undefined>;
		}
	}
	import __pkg__xsgc6aq4 = RechargeBuy;
	namespace RechargeBuy {
		type RechargeBuyView = StrictComponent<fairygui.GComponent, {
			readonly rewardList: fairygui.GList;
			readonly bigTagList: fairygui.GList;
			readonly smallTagList: fairygui.GList;
			readonly graphAniTop: fairygui.GGraph;
			readonly timeTxt: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Components {
			type RechargeBuyRender = StrictComponent<fairygui.GButton, {
				readonly iconLoader: fairygui.GLoader;
				readonly limitedTimes: fairygui.GRichTextField;
				readonly boxName: fairygui.GTextField;
				readonly price: fairygui.GTextField;
				readonly czTxt: fairygui.GTextField;
				readonly buyBtn: UILib.Components.btn.BtnEmpty;
				readonly rewardList: fairygui.GList;
				readonly redPoint: fairygui.GImage;
				readonly receiveEffect: fairygui.GGraph;
				readonly boxEffect: fairygui.GGraph;
			}, 'isCom' | 'isPre', undefined>;
			type TabRender = StrictComponent<fairygui.GButton, {
				readonly spot: fairygui.GLoader;
				readonly iconLoader: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly iconImg: fairygui.GLoader;
				readonly spot2: fairygui.GLoader;
			}, 'button' | 'redCon', 't0'>;
			type TabBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__biadz7a1 = RedEnvelope;
	namespace RedEnvelope {
		namespace Comp {
			type Btn1 = StrictComponent<fairygui.GButton, undefined, 'button', 't0'>;
			type RedEnvelopeRecordingRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GLoader;
				readonly numDes: fairygui.GRichTextField;
			}, 'c1' | 'c2', undefined>;
			type RedEnvelopeRewardRender = StrictComponent<fairygui.GComponent, {
				readonly roleIcon: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly roleName: fairygui.GTextField;
				readonly num: fairygui.GTextField;
			}, undefined, undefined>;
			type RedEnvelopeRewardWindow = StrictComponent<fairygui.GComponent, {
				readonly head: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly roleName: fairygui.GTextField;
				readonly numTxt: fairygui.GTextField;
				readonly roleList: fairygui.GList;
				readonly openClick: fairygui.GGraph;
			}, 'state' | 'type', 't0'>;
			type RedEnvelopeTaskRender = StrictComponent<fairygui.GComponent, {
				readonly des: fairygui.GRichTextField;
				readonly value: fairygui.GRichTextField;
				readonly receiveBtn: RedEnvelope.Comp.BtnSmall;
				readonly receiveGetBtn: RedEnvelope.Comp.BtnSmallRed;
			}, 'state', undefined>;
			type RedEnvelopeTaskWindow = StrictComponent<fairygui.GComponent, {
				readonly rewardRedBtn: RedEnvelope.Comp.BtnTag;
				readonly countryRedBtn: RedEnvelope.Comp.BtnTag;
				readonly btnTips: fairygui.GButton;
				readonly yearRecordingList: fairygui.GList;
				readonly recordingDes: fairygui.GTextField;
				readonly desText: fairygui.GTextField;
				readonly tag2Group: fairygui.GGroup;
				readonly dayNum: fairygui.GRichTextField;
				readonly itemGroup: fairygui.GGroup;
				readonly dayRecordingList: fairygui.GList;
				readonly dayGroup: fairygui.GGroup;
				readonly list: fairygui.GList;
				readonly tag1Group: fairygui.GGroup;
				readonly close: UILib.Components.btn.BtnClose5;
				readonly numDes: fairygui.GTextField;
				readonly recordingDes1: fairygui.GTextField;
				readonly yearNum: fairygui.GTextField;
				readonly yearItemGroup: fairygui.GGroup;
			}, 'c1', 't0'>;
			type RedEnvelopeTipsWindow = StrictComponent<fairygui.GComponent, {
				readonly contentArea: UILib.Components.frame.Frame4;
				readonly cancel: UILib.Components.btn.BtnBig2;
				readonly ok: UILib.Components.btn.BtnBig1;
				readonly darkBg: fairygui.GImage;
				readonly txtInfo: fairygui.GRichTextField;
			}, 'conShowSecond', undefined>;
			type RedEnvelopeDayRecordingRender = StrictComponent<fairygui.GButton, {
				readonly roleName: fairygui.GTextField;
				readonly num: fairygui.GTextField;
				readonly des: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CountryRedEnvelopeWindow = StrictComponent<fairygui.GComponent, {
				readonly close: UILib.Components.btn.BtnClose5;
				readonly rewardRedBtn: RedEnvelope.Comp.BtnTag;
				readonly countryRedBtn: RedEnvelope.Comp.BtnTag;
				readonly listPac2: fairygui.GList;
				readonly listPac: fairygui.GList;
				readonly num: fairygui.GTextField;
				readonly count: fairygui.GTextField;
				readonly btnGetReward: UILib.Components.btnAct.BtnAct2;
			}, 'c1' | 'c2', undefined>;
			type CountryRedEnvelopeRender = StrictComponent<fairygui.GComponent, {
				readonly btn1: fairygui.GLoader;
				readonly receiveBtn: RedEnvelope.Comp.Btn2;
				readonly textName: fairygui.GRichTextField;
				readonly des: fairygui.GRichTextField;
				readonly time: fairygui.GRichTextField;
				readonly timeDes: fairygui.GTextField;
				readonly num: fairygui.GTextField;
			}, 'state', undefined>;
			type Btn2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
			type BtnTag = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'c1', undefined>;
			type BtnSmall = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type CountryExchequerPacRender = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly btnHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly txtName: fairygui.GTextField;
			}, 'c1' | 'conType', undefined>;
			type BtnSmallRed = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
		}
		namespace Components.render {
			type CountryExchequerPacRender = StrictComponent<fairygui.GComponent, {
				readonly btnHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderTitle: fairygui.GLoader;
				readonly txtName: fairygui.GRichTextField;
			}, 'c1' | 'conType', undefined>;
		}
	}
	import __pkg__959dflhu = RewardNotice;
	namespace RewardNotice {
		type RewardItemWindow = StrictComponent<fairygui.GComponent, {
			readonly loader0: fairygui.GLoader;
			readonly loader1: fairygui.GLoader;
			readonly bg1: fairygui.GImage;
			readonly graphAniTop: fairygui.GGraph;
			readonly graphAniBottom: fairygui.GGraph;
			readonly graphAniParticle: fairygui.GGraph;
			readonly loader2: fairygui.GLoader;
			readonly alterLoader: fairygui.GLoader;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly rewardList: fairygui.GList;
		}, undefined, 't0'>;
		namespace Components {
			type RewardRender = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender1;
				readonly txtTitle: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__ugw511ae = Rolling;
	namespace Rolling {
		type RollingWindow = StrictComponent<fairygui.GComponent, {
			readonly newRolling: Rolling.Components.NewRolling;
			readonly skipAnimBtn: UILib.Components.button_checkbox.Button_Check4;
			readonly rollBtn: UILib.Components.btn.BtnBig1;
			readonly tenBtn: UILib.Components.btn.BtnBig4;
			readonly closeBtn: Rolling.Components.RollingBtn;
			readonly skillBtn: Rolling.Components.RollingBtn;
			readonly tzBtn: Rolling.Components.RollingBtn;
			readonly recordBtn: Rolling.Components.RollingBtn;
			readonly glBtn: Rolling.Components.RollingBtn;
			readonly ljBtn: Rolling.Components.RollingBtn;
			readonly notice0: Rolling.Components.RollingNotice;
			readonly notice1: Rolling.Components.RollingNotice;
			readonly btnTip: fairygui.GButton;
			readonly txt0: fairygui.GRichTextField;
			readonly txt1: fairygui.GRichTextField;
		}, 'conIsTreasure', 't0'>;
		type RewardHistoryWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly rewardHistoryList: fairygui.GList;
		}, undefined, undefined>;
		type RollingRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly rewardList: fairygui.GList;
			readonly closeBtn: UILib.Components.btn.BtnWindowClose;
			readonly txtTimeLeft: UILib.Components.fontTab.__cmpt__f73xa3tlhy;
		}, undefined, undefined>;
		type RollingProbabilityWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		type RollingView = StrictComponent<fairygui.GComponent, {
			readonly rewardList: fairygui.GList;
			readonly treasureCom: Rolling.Components.TreasureCom;
			readonly skillCom: Rolling.Components.SkillCom;
			readonly btnTip: fairygui.GButton;
			readonly skipAnimBtn: UILib.Components.button_checkbox.Button_Check4;
			readonly recordBtn: UILib.Components.btn.BtnSmall1;
			readonly txtTimeLeft: UILib.Components.fontTab.__cmpt__f73xa3tlhy;
			readonly accumutiveTimes: UILib.Components.fontTab.__cmpt__cv0fa3tlld;
			readonly proBar0: Rolling.Components.ProgressBar1;
			readonly proBar1: Rolling.Components.ProgressBar1;
			readonly proBar2: Rolling.Components.ProgressBar1;
			readonly proBar3: Rolling.Components.ProgressBar2;
		}, 'conIsTreasure', undefined>;
		namespace Components {
			type TreasureCom = StrictComponent<fairygui.GComponent, {
				readonly pointAreaGraph: fairygui.GGraph;
				readonly reward0: UILib.Components.renderer.RewardRender2;
				readonly reward1: UILib.Components.renderer.RewardRender2;
				readonly reward2: UILib.Components.renderer.RewardRender2;
				readonly reward3: UILib.Components.renderer.RewardRender2;
				readonly reward4: UILib.Components.renderer.RewardRender2;
				readonly reward5: UILib.Components.renderer.RewardRender2;
				readonly reward6: UILib.Components.renderer.RewardRender2;
				readonly reward7: UILib.Components.renderer.RewardRender2;
				readonly arrow: fairygui.GImage;
				readonly pointAnimGraph: fairygui.GGraph;
				readonly rollBtn: Rolling.Components.RollBtn;
			}, undefined, undefined>;
			type SkillCom = StrictComponent<fairygui.GComponent, {
				readonly rollBtn: Rolling.Components.RollBtn;
				readonly reward0: UILib.Components.renderer.RewardRender2;
				readonly reward1: UILib.Components.renderer.RewardRender2;
				readonly reward2: UILib.Components.renderer.RewardRender2;
				readonly reward3: UILib.Components.renderer.RewardRender2;
				readonly reward4: UILib.Components.renderer.RewardRender2;
				readonly reward5: UILib.Components.renderer.RewardRender2;
				readonly reward6: UILib.Components.renderer.RewardRender2;
				readonly reward7: UILib.Components.renderer.RewardRender2;
				readonly light: fairygui.GImage;
			}, undefined, undefined>;
			type RewardCom = StrictComponent<fairygui.GButton, {
				readonly gotIcon: fairygui.GImage;
				readonly canGetTime: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly listReward: fairygui.GList;
				readonly reward: UILib.Components.btn.BtnSmall4;
			}, 'button', undefined>;
			type RollBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type TreasureAttrRender = StrictComponent<fairygui.GComponent, {
				readonly loaderQuality: fairygui.GLoader;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhs;
			}, undefined, undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBar2 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type rewardBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type RewardHistoryRender = StrictComponent<fairygui.GComponent, {
				readonly txtDate: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtTime: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly reward: UILib.Components.renderer.RewardRender4;
			}, undefined, undefined>;
			type NewRolling = StrictComponent<fairygui.GComponent, {
				readonly pointAreaGraph: fairygui.GGraph;
				readonly reward7: UILib.Components.renderer.RewardRender4;
				readonly reward0: UILib.Components.renderer.RewardRender4;
				readonly reward1: UILib.Components.renderer.RewardRender4;
				readonly reward2: UILib.Components.renderer.RewardRender4;
				readonly reward3: UILib.Components.renderer.RewardRender4;
				readonly reward4: UILib.Components.renderer.RewardRender4;
				readonly reward5: UILib.Components.renderer.RewardRender4;
				readonly reward6: UILib.Components.renderer.RewardRender4;
				readonly arrow: fairygui.GImage;
			}, undefined, 't0'>;
			type RollingBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'isRed', undefined>;
			type ProbabilityItem = StrictComponent<fairygui.GButton, {
				readonly titleTxt: fairygui.GRichTextField;
				readonly reward: UILib.Components.renderer.RewardRender2;
			}, undefined, undefined>;
			type RollingNotice = StrictComponent<fairygui.GComponent, {
				readonly txtG: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__vzbetzko = ScoreActivityRank;
	namespace ScoreActivityRank {
		type ScoreActivityRankView = StrictComponent<fairygui.GComponent, {
			readonly loaderHero: fairygui.GLoader;
			readonly desLoader: fairygui.GLoader;
			readonly listRank: fairygui.GList;
			readonly btnOwn: ScoreActivityRank.Render.ScoreActivityRankRender;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly txtScore: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			readonly txtTime: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtDes: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Render {
			type ScoreActivityRankRender = StrictComponent<fairygui.GButton, {
				readonly txtRanking: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpy;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly listReward: fairygui.GList;
				readonly txtName1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtScoreNum1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtDes1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtScoreNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsOwn' | 'conIsShowRank' | 'conRanking' | 'conRankState', undefined>;
		}
	}
	import __pkg__ffnezdza = Season;
	namespace Season {
		type SeasonView = StrictComponent<fairygui.GComponent, {
			readonly chooseBtnList: fairygui.GList;
			readonly actList: fairygui.GList;
			readonly imgLine: fairygui.GImage;
			readonly btnLeft: UILib.Components.btnArrows.BtnArrows4;
			readonly btnRight: UILib.Components.btnArrows.BtnArrows4;
			readonly txtYear: fairygui.GTextField;
		}, 'conSeason', undefined>;
		namespace Components {
			type Button_Radio1 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type SeasonActCom = StrictComponent<fairygui.GComponent, {
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type Button1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.Renderer {
			type SeasonActRender = StrictComponent<fairygui.GButton, {
				readonly detailsCom: Season.Components.SeasonActCom;
				readonly listReward: fairygui.GList;
				readonly txtName: fairygui.GRichTextField;
				readonly txtTime: fairygui.GRichTextField;
				readonly btnGo: UILib.Components.btn.BtnSmall2;
			}, 'button' | 'conState', undefined>;
		}
	}
	import __pkg__z5lz7m4l = SeasonActivity;
	namespace SeasonActivity {
		type SeasonActivityView = StrictComponent<fairygui.GComponent, {
			readonly listBtn: fairygui.GList;
			readonly titleBg: fairygui.GLoader;
			readonly subViewContainer: fairygui.GComponent;
			readonly heroInfoBtn: SeasonActivity.Components.Btn;
			readonly nameQuality: fairygui.GLoader;
			readonly heroQualtiy: fairygui.GLoader;
			readonly loaderHeroType: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljv;
			readonly graphAniQuality: fairygui.GGraph;
			readonly heroTitle: fairygui.GGroup;
		}, 'conBtnSel', undefined>;
		namespace Components {
			type SeasonActivityRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly change: fairygui.GLoader;
				readonly change2: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'isEnd' | 'changeName' | 'conRed', undefined>;
			type Btn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
		}
	}
	import __pkg__0lwlr7wj = ServerWindow;
	namespace ServerWindow {
		type ServerView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOwn: ServerWindow.Components.ServerRender;
			readonly optionList: fairygui.GList;
			readonly serverList: fairygui.GList;
			readonly imgNew: fairygui.GImage;
			readonly imgOk: fairygui.GImage;
			readonly imgNo: fairygui.GImage;
			readonly xf: fairygui.GTextField;
			readonly kyjz: fairygui.GTextField;
			readonly bkjz: fairygui.GTextField;
			readonly stateServerGroup1: fairygui.GGroup;
			readonly hb: fairygui.GTextField;
			readonly lc: fairygui.GTextField;
			readonly wh: fairygui.GTextField;
			readonly stateServerGroup: fairygui.GGroup;
			readonly newWindow: fairygui.GGroup;
		}, undefined, undefined>;
		namespace Components {
			type PayServerRender = StrictComponent<fairygui.GButton, {
				readonly loaderState: fairygui.GLoader;
				readonly serverState1: fairygui.GLoader;
				readonly serverState2: fairygui.GLoader;
				readonly loaderCountry: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
				readonly roleName: fairygui.GTextField;
				readonly txtInfo: fairygui.GTextField;
				readonly txtCountry: fairygui.GTextField;
			}, 'button' | 'conState', undefined>;
			type ServerRender = StrictComponent<fairygui.GButton, {
				readonly imgNew: fairygui.GImage;
				readonly serverState1: fairygui.GLoader;
				readonly serverState2: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__8us7hgpq = Settlement;
	namespace Settlement {
		type BattleSettlementWindow = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly left1: fairygui.GLoader;
			readonly right1: fairygui.GLoader;
			readonly winBg1: fairygui.GLoader;
			readonly winBg: fairygui.GLoader;
			readonly jiesuan: fairygui.GLoader;
			readonly resultLoader: fairygui.GLoader;
			readonly atkCount: fairygui.GTextField;
			readonly defCount: fairygui.GTextField;
			readonly atkLoseCount: fairygui.GTextField;
			readonly defLoseCount: fairygui.GTextField;
			readonly atkHead: Settlement.Components.SettlementHeroHeadRender;
			readonly defHead: Settlement.Components.SettlementHeroHeadRender;
			readonly atkHeroList: fairygui.GList;
			readonly defHeroList: fairygui.GList;
			readonly atkPlayerName: fairygui.GRichTextField;
			readonly defPlayerName: fairygui.GRichTextField;
		}, 'resultState', undefined>;
		type BattleClearanceWindow = StrictComponent<fairygui.GComponent, {
			readonly clearanceView: Settlement.SubView.BattleSettlementClearance;
			readonly hsjlGroup: fairygui.GGroup;
			readonly listReward: fairygui.GList;
			readonly loaderAni: fairygui.GGraph;
			readonly graphAniBottom: fairygui.GGraph;
		}, undefined, undefined>;
		namespace SubView {
			type BattleSettlementClearance = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly bg1: fairygui.GLoader;
				readonly qianceng: fairygui.GLoader;
				readonly qizi1: fairygui.GLoader;
				readonly qizi2: fairygui.GLoader;
				readonly ren: fairygui.GLoader;
				readonly piaodai: fairygui.GLoader;
				readonly imgStar0: fairygui.GImage;
				readonly imgStar1: fairygui.GImage;
				readonly imgStar2: fairygui.GImage;
				readonly starGroup: fairygui.GGroup;
				readonly listSettlement: fairygui.GList;
				readonly graphAniParticle: fairygui.GGraph;
			}, undefined, 'starFly'>;
		}
		namespace Components {
			type SettlementArmyBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly titleCount: fairygui.GRichTextField;
			}, undefined, undefined>;
			type StarGradeRender = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conIsFinish', undefined>;
			type SettlementHeroRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly result: fairygui.GLoader;
				readonly ditu: fairygui.GGroup;
				readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly armyRender: Settlement.Components.SettlementArmyRender;
				readonly defHeroName: fairygui.GRichTextField;
				readonly atkHeroName: fairygui.GRichTextField;
				readonly fontGroup: fairygui.GGroup;
			}, 'posState' | 'resultState' | 'islockState', undefined>;
			type SettlementHeroHeadRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly heroHead: UILibHero.Components.render.headRender.MaskCircleRender;
			}, 'button', undefined>;
			type SettlementArmyRender = StrictComponent<fairygui.GComponent, {
				readonly fArmy: fairygui.GLoader;
				readonly bArmy: fairygui.GLoader;
				readonly fBar: Settlement.Components.SettlementArmyBar;
				readonly bBar: Settlement.Components.SettlementArmyBar;
			}, undefined, undefined>;
		}
	}
	import __pkg__5hwrw0jq = SevenDayAct;
	namespace SevenDayAct {
		type SevenDayActView = StrictComponent<fairygui.GComponent, {
			readonly progressLiveness: SevenDayAct.Components.ProgressBar;
			readonly btnTip: fairygui.GButton;
			readonly listTaskName: fairygui.GList;
			readonly listDay: fairygui.GList;
			readonly listTask: fairygui.GList;
			readonly txtTime: UILib.Components.fontTab.__cmpt__dkjpa3tll8;
			readonly txtLiveness: fairygui.GTextField;
			readonly arrowDown: fairygui.GImage;
			readonly arrowUp: fairygui.GImage;
		}, 'conDay', 't0'>;
		type SevenDayLogInView = StrictComponent<fairygui.GComponent, {
			readonly dayLoader: fairygui.GLoader;
			readonly btnGetReward: UILib.Components.btnSpecial.BtnRecharge;
			readonly rewardList: fairygui.GList;
			readonly day1: SevenDayAct.Components.render.SevenDayRewardRender;
			readonly day2: SevenDayAct.Components.render.SevenDayRewardRender;
			readonly day3: SevenDayAct.Components.render.SevenDayRewardRender;
			readonly day5: SevenDayAct.Components.render.SevenDayRewardRender;
			readonly day4: SevenDayAct.Components.render.SevenDayRewardRender;
			readonly day6: SevenDayAct.Components.render.SevenDayRewardRender;
			readonly day7: SevenDayAct.Components.render.SevenDayRewardRender;
			readonly txtTimeLeft: UILib.Components.fontTab.__cmpt__e9fra3tlk5;
			readonly rewardDes: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
		}, 'conRewardAvailable', 'FX01'>;
		type SevenDayStateRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GImage;
			readonly rewardList: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type BtnTask = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conRed', undefined>;
			type BtnDay = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly taskNum: fairygui.GTextField;
			}, 'button' | 'conRed' | 'conLock', undefined>;
			type ProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly btn1: SevenDayAct.Components.render.SevenDayActRateRender;
				readonly btn2: SevenDayAct.Components.render.SevenDayActRateRender;
				readonly btn3: SevenDayAct.Components.render.SevenDayActRateRender;
				readonly btn4: SevenDayAct.Components.render.SevenDayActRateRender;
				readonly btn5: SevenDayAct.Components.render.SevenDayActRateRender;
			}, undefined, undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, 'conGrayed', undefined>;
		}
		namespace Components.render {
			type SevenDayActRateRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly chestLoader: fairygui.GLoader;
			}, 'button' | 'conState' | 'conIsNormal', undefined>;
			type SevenDayActTaskRender = StrictComponent<fairygui.GComponent, {
				readonly btnGo: UILib.Components.btn.BtnSmall1;
				readonly btnGet: UILib.Components.btn.BtnSmall4;
				readonly progressRata: SevenDayAct.Components.ProgressBar1;
				readonly listReward: fairygui.GList;
				readonly txtTask: UILib.Components.fontTab.__cmpt__kyk1a3tljh;
				readonly txtRate: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'conState', undefined>;
			type SevenDayActLoginRender = StrictComponent<fairygui.GComponent, {
				readonly btnGet: UILib.Components.btn.BtnSmall4;
				readonly listReward: fairygui.GList;
				readonly txtDay: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
			}, 'conState', undefined>;
			type SevenDayRewardRender = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly reward: UILib.Components.renderer.RewardRender4;
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly dayLoader: fairygui.GLoader;
			}, 'button' | 'conIsGot', 'idel' | 'idle2'>;
		}
	}
	import __pkg__lhkyh1dz = SevenStar;
	namespace SevenStar {
		type SevenStarView = StrictComponent<fairygui.GComponent, {
			readonly comStar0: SevenStar.Components.render.SevenStarBtn;
			readonly comStar1: SevenStar.Components.render.SevenStarBtn;
			readonly comStar2: SevenStar.Components.render.SevenStarBtn;
			readonly comStar3: SevenStar.Components.render.SevenStarBtn;
			readonly comStar4: SevenStar.Components.render.SevenStarBtn;
			readonly comStar5: SevenStar.Components.render.SevenStarBtn;
			readonly comStar6: SevenStar.Components.render.SevenStarBtn;
			readonly bg: fairygui.GLoader;
			readonly loaderBg: fairygui.GLoader;
			readonly loaderName: fairygui.GLoader;
			readonly btnShowAll: SevenStar.Components.SevenStarAttrBtn;
			readonly txtLv: fairygui.GTextField;
			readonly attrList: fairygui.GList;
			readonly listAttr: fairygui.GList;
			readonly btnUpGrade1: UILib.Components.btn.BtnBig4;
			readonly btnCost1: UILib.Components.renderer.ConsumeRender;
			readonly btnUpGrade: UILib.Components.btn.BtnBig4;
			readonly btnCost: UILib.Components.renderer.ConsumeRender;
			readonly btnUpGrade2: UILib.Components.btn.BtnBig4;
			readonly btnCost2: UILib.Components.renderer.ConsumeRender;
			readonly btnReset: SevenStar.Components.SevenStarAttrBtn;
			readonly txtLevel: fairygui.GTextField;
			readonly tipsBtn: SevenStar.Components.SevenStarAttrBtn;
			readonly resetTxt: fairygui.GTextField;
			readonly txtBox: fairygui.GGroup;
			readonly effect1: fairygui.GGraph;
			readonly effect2: fairygui.GGraph;
			readonly effect3: fairygui.GGraph;
			readonly levelTxt: fairygui.GTextField;
		}, 'conStar' | 'isLvMax' | 'isRefineMax' | 'isLevel', undefined>;
		type SevenStarAttrWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listAttr0: fairygui.GList;
			readonly listAttr1: fairygui.GList;
			readonly listAttr2: fairygui.GList;
			readonly no0: fairygui.GImage;
			readonly no1: fairygui.GImage;
			readonly no2: fairygui.GImage;
		}, undefined, undefined>;
		type SevenStarForgetWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnResetAll: UILib.Components.btn.BtnBig1;
			readonly btnSel: UILib.Components.btn.BtnEmpty;
			readonly btnConsume: UILib.Components.renderer.RewardRender4;
			readonly btnReset: UILib.Components.btn.BtnBig5;
			readonly listItem: fairygui.GList;
			readonly graphAni: fairygui.GGraph;
			readonly txtTip1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpa;
			readonly txtFreeTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly titleTxt: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conState' | 'conFree', undefined>;
		type AttrWindow = StrictComponent<fairygui.GComponent, {
			readonly listAttr: fairygui.GList;
			readonly titleTxt: fairygui.GRichTextField;
			readonly closeBtn: SevenStar.Components.SevenStarAttrBtn;
		}, undefined, undefined>;
		type SevenStarClearWindow = StrictComponent<fairygui.GComponent, {
			readonly listAttrLeft: fairygui.GList;
			readonly listAttrRight: fairygui.GList;
			readonly btnUpGrade: UILib.Components.btn.BtnBig4;
			readonly btnBack: UILib.Components.btn.BtnBig2;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnCost: UILib.Components.renderer.ConsumeRender;
			readonly closeBtn: SevenStar.Components.SevenStarAttrBtn;
		}, 'conIsHaveAttr', 't0'>;
		namespace Components {
			type SevenStarAttrBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type Button_Radio = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsRed', undefined>;
			type BtnReset = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type AttrTextRender = StrictComponent<fairygui.GButton, {
				readonly txtCurDesc: fairygui.GRichTextField;
				readonly txtNextDesc: fairygui.GRichTextField;
				readonly effect: fairygui.GGraph;
			}, undefined, undefined>;
			type AttrWindowRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.render {
			type SevenStarBtn = StrictComponent<fairygui.GButton, {
				readonly loaderLight: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly txtName: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly txtLv: fairygui.GRichTextField;
			}, 'button' | 'conIsUp' | 'conIsRed' | 'conState', 't0'>;
			type SevenStarAttrRender = StrictComponent<fairygui.GComponent, {
				readonly loaderQuality: fairygui.GLoader;
				readonly txtAttr: fairygui.GTextField;
				readonly effect: fairygui.GGraph;
				readonly attrBtn: UILib.Components.btn.BtnSmall3;
				readonly btnTxt: fairygui.GRichTextField;
			}, 'conIsLock' | 'conIsRefine', undefined>;
			type SevenStarRefineRender = StrictComponent<fairygui.GComponent, {
				readonly txtAttr: fairygui.GTextField;
				readonly effect: fairygui.GGraph;
			}, 'conIsLock', 't0'>;
			type SevenStarAllAttrRender = StrictComponent<fairygui.GComponent, {
				readonly loaderQuality: fairygui.GLoader;
				readonly txtAttr: fairygui.GRichTextField;
			}, 'conIsLock' | 'conIsRefine', undefined>;
		}
		namespace Components.subView {
			type SevenStarUpgradeView = StrictComponent<fairygui.GComponent, {
				readonly listAttr: fairygui.GList;
				readonly btnUpGrade: UILib.Components.btn.BtnBig4;
				readonly btnCost: UILib.Components.renderer.ConsumeRender;
			}, 'conIsMax', undefined>;
			type SevenStarRefineView = StrictComponent<fairygui.GComponent, {
				readonly listAttr: fairygui.GList;
				readonly btnUpGrade: UILib.Components.btn.BtnBig4;
				readonly btnCost: UILib.Components.renderer.ConsumeRender;
				readonly loaderSamllName: fairygui.GLoader;
				readonly txtLv: fairygui.GTextField;
			}, 'conIsMax', undefined>;
			type SevenStarClearView = StrictComponent<fairygui.GComponent, {
				readonly contentArea: UILib.Components.frame.Frame1;
				readonly listAttrLeft: fairygui.GList;
				readonly listAttrRight: fairygui.GList;
				readonly btnUpGrade: UILib.Components.btn.BtnBig4;
				readonly btnBack: UILib.Components.btn.BtnBig2;
				readonly btnOk: UILib.Components.btn.BtnBig1;
				readonly btnCost: UILib.Components.renderer.ConsumeRender;
			}, 'conIsHaveAttr', undefined>;
		}
	}
	import __pkg__vz2aqz6w = ShockRecharge;
	namespace ShockRecharge {
		type ShockRechargeSubView = StrictComponent<fairygui.GComponent, {
			readonly iconBg: fairygui.GLoader;
			readonly listReward: fairygui.GList;
			readonly txtTime: fairygui.GTextField;
			readonly btnGet: UILib.Components.btnAct.BtnAct2;
			readonly iconTitle: fairygui.GLoader;
			readonly txtNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly ybTxt: fairygui.GTextField;
			readonly titleTxt: fairygui.GRichTextField;
		}, 'conState', undefined>;
	}
	import __pkg__7ns3k2tj = ShowRole;
	namespace ShowRole {
		type ShowHeroInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly heroInfoCom: ShowRole.Components.ShowRoleHeroInfoCom;
			readonly treasureCom: ShowRole.Components.ShowRoleHeroTreasureCom;
			readonly listSkill: fairygui.GList;
			readonly listFunc: fairygui.GList;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
		}, undefined, undefined>;
		type ShowRoleInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame7;
			readonly txtFight: UILibHero.Components.fight.FightPowerBig;
			readonly loaderCountry: UILib.Components.countryRender.CountrySmallRender;
			readonly chatBtn: ShowRole.Components.chatBtn;
			readonly shieldBtn: ShowRole.Components.shieldBtn;
			readonly unShieldBtn: ShowRole.Components.unShieldBtn;
			readonly posLoader: fairygui.GLoader;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__lj961no8tzg;
			readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly listHero: fairygui.GList;
			readonly list: fairygui.GList;
			readonly txtMayorName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly downArrow: fairygui.GImage;
			readonly btnChange: ShowRole.Components.changeBtn;
		}, 'conIsHaveTitle' | 'conState', undefined>;
		type RoleChangeNameWindow = StrictComponent<fairygui.GComponent, {
			readonly btnReward: UILib.Components.renderer.RewardRender1;
			readonly btnOk: UILib.Components.btn.BtnBig3;
			readonly createName: ShowRole.Components.render.CreateName;
			readonly txtNum: fairygui.GRichTextField;
		}, undefined, undefined>;
		type RoleChangeHeadWindow = StrictComponent<fairygui.GComponent, {
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly btnCurHead: ShowRole.Components.HeroHeadChange;
			readonly collectSelect: UILib.Components.button_checkbox.Button_Check5;
			readonly listHead: fairygui.GList;
			readonly txtName: fairygui.GRichTextField;
			readonly txtDes: fairygui.GRichTextField;
			readonly txtTime: fairygui.GTextField;
		}, 'conState', undefined>;
		type ShowHeroSkillDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly loaderFrame: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly conEffectDes: ShowRole.Components.HeroSkillDetailsCom;
			readonly txtName: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			readonly txtType: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTiming: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtConnectAttr: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conQuality' | 'conMaxLevel', undefined>;
		type ShowTreasureDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly img_bg: fairygui.GLoader;
			readonly reward: UILib.Components.renderer.RewardRender1;
			readonly btnSuit: UILibHero.Components.render.other.BtnHeroSuit;
			readonly btnTreasureStrengthSuit: UILibHero.Components.render.other.BtnTreasureStrengthSuit;
			readonly type: fairygui.GLoader;
			readonly detailsViewUI: ShowRole.Components.ShowTreasureDetailsInfoViewUI;
			readonly txtheroName: fairygui.GRichTextField;
			readonly txtName: fairygui.GRichTextField;
			readonly txtQua: fairygui.GRichTextField;
			readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
		}, 'conType', undefined>;
		type ShowHeroTitleArrWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly attList: fairygui.GList;
		}, undefined, undefined>;
		type ShowHeroArmyArrWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly arrList: fairygui.GList;
		}, undefined, undefined>;
		type ShowNPCHeroInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly loaderQuality: fairygui.GLoader;
			readonly loaderType: fairygui.GLoader;
			readonly imgAttr1: fairygui.GImage;
			readonly imgAttr2: fairygui.GImage;
			readonly imgAttr3: fairygui.GImage;
			readonly imgAttr4: fairygui.GImage;
			readonly loaderFront: fairygui.GLoader;
			readonly loaderBack: fairygui.GLoader;
			readonly loaderArmyFront: fairygui.GLoader;
			readonly loaderArmyLater: fairygui.GLoader;
			readonly listStar: fairygui.GList;
			readonly listSkill: fairygui.GList;
			readonly btnFight: UILibHero.Components.fight.FightPowerSmall;
			readonly txtWuli: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtZhili: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtTongshuai: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtMeili: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtName: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			readonly txtArmyFront: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtArmyBack: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
		}, undefined, undefined>;
		type HeroAuctionHeroInfoWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly heroTalent: Hero.Components.HeroTalentListCom;
			readonly heroInfoCom: ShowRole.Components.ShowRoleHeroInfoCom;
			readonly listSkill: fairygui.GList;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
			readonly resolveRewardList: fairygui.GList;
		}, undefined, undefined>;
		type ShowRoleInfoCSWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame7;
			readonly txtFight: UILibHero.Components.fight.FightPowerBig;
			readonly close: UILib.Components.btn.BtnWindowClose;
			readonly loaderCountry: UILib.Components.countryRender.CountrySmallRender;
			readonly txtName: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly listHero: fairygui.GList;
			readonly downArrow: fairygui.GImage;
		}, undefined, undefined>;
		type RoleChangeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly subViewContainer: fairygui.GComponent;
			readonly btnHead: ShowRole.Components.render.BtnPage;
			readonly btnHeadFrame: ShowRole.Components.render.BtnPage;
			readonly btnName: ShowRole.Components.render.BtnPage;
		}, 'conOpenSel' | 'conIsOpen', undefined>;
		type RoleChangeHeadFrameWindow = StrictComponent<fairygui.GComponent, {
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly collectSelect: UILib.Components.button_checkbox.Button_Check5;
			readonly btnCurHead: ShowRole.Components.HeroHeadChange;
			readonly listHead: fairygui.GList;
			readonly txtName: fairygui.GRichTextField;
			readonly txtTime: fairygui.GRichTextField;
			readonly txtDes: fairygui.GRichTextField;
			readonly attList: fairygui.GList;
		}, 'conState' | 'conShowAtt', undefined>;
		type ShowHeroGodSoldierWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list0: fairygui.GList;
			readonly reIcon: fairygui.GLoader;
			readonly iconQuality: fairygui.GLoader;
			readonly loaderTreasureQuality: fairygui.GLoader;
			readonly txtName: fairygui.GRichTextField;
			readonly imgIcon: fairygui.GLoader;
			readonly qualityImg: fairygui.GLoader;
			readonly loaderBg: fairygui.GLoader;
			readonly head: ShowRole.Components.CircularHead;
			readonly loaderFrame: fairygui.GLoader;
			readonly currStage: fairygui.GTextField;
			readonly list1: fairygui.GList;
			readonly list2: fairygui.GList;
			readonly bzBtn: UILibHero.Components.render.other.BtnHeroSuit;
			readonly rName: fairygui.GRichTextField;
		}, 'starCon', undefined>;
		type ShowHeroLinesWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly txtSheng: fairygui.GList;
			readonly txtShen: fairygui.GList;
			readonly txtXing: fairygui.GList;
			readonly btn0: ShowRole.Components.button.TitleBtn;
			readonly btn1: ShowRole.Components.button.TitleBtn;
			readonly btn2: ShowRole.Components.button.TitleBtn;
			readonly list: fairygui.GList;
		}, 'titleCon', undefined>;
		namespace Components {
			type HeroTreasure = StrictComponent<fairygui.GButton, {
				readonly loaderType: fairygui.GLoader;
				readonly reward: UILib.Components.renderer.RewardRender3;
				readonly loaderTitle: fairygui.GLoader;
				readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			}, 'button' | 'conHave', undefined>;
			type chatBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, 'button', undefined>;
			type changeHeadBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'button', undefined>;
			type changeNameBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'button', undefined>;
			type shieldBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'button', undefined>;
			type unShieldBtn = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
			}, 'button', undefined>;
			type HeroSkillDetailsCom = StrictComponent<fairygui.GComponent, {
				readonly baseCom: ShowRole.Components.SkillDesCom;
				readonly txtNextLevelDes: fairygui.GRichTextField;
				readonly seniorCom: ShowRole.Components.SkillDesCom;
				readonly advanceCom: ShowRole.Components.SkillDesCom;
			}, 'conIsShowNextLevelDes' | 'conIsShowAdvancedDes' | 'conIsShowSeniorDes', undefined>;
			type ShowTreasureDetailsInfoViewUI = StrictComponent<fairygui.GComponent, {
				readonly listBreakAttr: fairygui.GList;
				readonly listStrengthenAttr: fairygui.GList;
				readonly listRefineAttr: fairygui.GList;
			}, 'conIsShow', undefined>;
			type ShowRoleHeroAttrCom = StrictComponent<fairygui.GComponent, {
				readonly loaderFront: fairygui.GImage;
				readonly loaderArmyLogo: fairygui.GLoader;
				readonly assistantHero: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly txtAtk: fairygui.GTextField;
				readonly txtDef: fairygui.GTextField;
				readonly txtSpeed: fairygui.GTextField;
				readonly txtHp: fairygui.GTextField;
				readonly txtArmyLv: fairygui.GRichTextField;
				readonly txtArmyTrainLv: fairygui.GRichTextField;
			}, 'conArmy' | 'conAssistantState', undefined>;
			type ShowRoleHeroInfoCom = StrictComponent<fairygui.GComponent, {
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly attrComF: ShowRole.Components.ShowRoleHeroAttrCom;
				readonly attrComB: ShowRole.Components.ShowRoleHeroAttrCom;
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly imgAttr1: fairygui.GImage;
				readonly imgAttr2: fairygui.GImage;
				readonly imgAttr3: fairygui.GImage;
				readonly imgAttr4: fairygui.GImage;
				readonly txtWuli: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtZhili: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtTongshuai: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
				readonly txtMeili: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6a;
			}, undefined, undefined>;
			type ShowRoleHeroTreasureCom = StrictComponent<fairygui.GComponent, {
				readonly btnSuit: UILibHero.Components.render.other.BtnHeroSuit;
				readonly btnStrengthSuit: UILibHero.Components.render.other.BtnTreasureStrengthSuit;
				readonly listTreasure: fairygui.GList;
			}, 'conIsHaveSuit', undefined>;
			type ShowRoleHeroSkillCom = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly listSkill: fairygui.GList;
			}, undefined, undefined>;
			type changeBtn = StrictComponent<fairygui.GButton, {
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conIsShowRed', undefined>;
			type GodSoldierRender = StrictComponent<fairygui.GComponent, {
				readonly txt: fairygui.GRichTextField;
				readonly txtNum: fairygui.GRichTextField;
			}, undefined, undefined>;
			type CircularHead = StrictComponent<fairygui.GComponent, {
				readonly iconImg: fairygui.GLoader;
			}, undefined, undefined>;
			type AllAttItemRander = StrictComponent<fairygui.GComponent, {
				readonly attTxt: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			}, undefined, undefined>;
			type SkillDesCom = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.title.CommonTitleDark;
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
			type HeroHeadRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
			}, 'showEffectCL' | 'isGrayed', undefined>;
			type HeroHeadChange = StrictComponent<fairygui.GButton, {
				readonly heroHead: ShowRole.Components.HeroHeadRender;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conNew' | 'conHave' | 'conRed', 't0'>;
		}
		namespace Components.button {
			type btnTitle = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsWear', undefined>;
			type TitleBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type RoleHeroRender = StrictComponent<fairygui.GButton, {
				readonly comHero: UILibHero.Components.render.HeroTroopRender;
				readonly txtFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtSuitName: fairygui.GTextField;
			}, 'button' | 'isHaveSuit', undefined>;
			type CreateName = StrictComponent<fairygui.GComponent, {
				readonly btnRandom: ShowRole.Components.render.Button_UIicon;
				readonly txtName: fairygui.GTextField;
			}, undefined, undefined>;
			type Button_UIicon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
			}, 'button', undefined>;
			type ShowRoleRender = StrictComponent<fairygui.GButton, {
				readonly txtGuandiLv: UILib.Components.fontTab_richText.__cmpt__lj961no8tzf;
				readonly title: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			}, 'button', undefined>;
			type HeroDesRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'button', undefined>;
			type titleAttrRender = StrictComponent<fairygui.GComponent, {
				readonly txtAtt: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
			type ArmyArrRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtCurNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtName: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
			type ShowRoleHeroSkillRender = StrictComponent<fairygui.GComponent, {
				readonly loaderQuality: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly txtLevel: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
				readonly txtName: UILib.Components.fontTab.__cmpt__f73xa3tlhf;
			}, 'conNull', undefined>;
			type BtnFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conRed', undefined>;
			type HeroInitSkillRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderHeroSkillLogo: fairygui.GLoader;
				readonly loaderArmyTalentLogo: fairygui.GLoader;
				readonly txtLv: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conType', undefined>;
			type BtnPage = StrictComponent<fairygui.GButton, {
				readonly imgRed: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsShowRed', undefined>;
			type HeadframeAttrRender = StrictComponent<fairygui.GComponent, {
				readonly txtAtt: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__lo0muhxz = SignIn;
	namespace SignIn {
		type SignInView = StrictComponent<fairygui.GComponent, {
			readonly comHeroQuality: SignIn.Components.render.HeroQualityRender;
			readonly listReward: fairygui.GList;
			readonly btnSkill: SignIn.Components.SignBtn;
			readonly btnInfo: SignIn.Components.SignBtn;
			readonly txtDay: fairygui.GTextField;
			readonly txtDesc: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
			readonly btnTip: fairygui.GButton;
		}, undefined, 't0'>;
		namespace Components {
			type SignBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type SignInRender = StrictComponent<fairygui.GComponent, {
				readonly effect1: fairygui.GGraph;
				readonly effect2: fairygui.GGraph;
				readonly listReward: fairygui.GList;
				readonly btnClick: UILib.Components.btn.BtnEmpty;
			}, 'conType' | 'conState', 't0'>;
			type HeroQualityRender = StrictComponent<fairygui.GComponent, {
				readonly nameQuality: fairygui.GLoader;
				readonly heroQualtiy: fairygui.GLoader;
				readonly loaderHeroType: fairygui.GLoader;
				readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljv;
				readonly heroTitle: fairygui.GGroup;
			}, undefined, undefined>;
		}
	}
	import __pkg__jy5wjds3 = SimpleNotice;
	namespace SimpleNotice {
		type AlertSimple = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly btnOK: SimpleNotice.Components.ButtonOK;
			readonly btnOKOne: SimpleNotice.Components.ButtonOK;
			readonly btnCancel: SimpleNotice.Components.ButtonCancel;
			readonly txt_info: fairygui.GRichTextField;
			readonly title: fairygui.GTextField;
			readonly group: fairygui.GGroup;
		}, 'cancelState', undefined>;
		type NoticeView = StrictComponent<fairygui.GComponent, {
			readonly fixedNotice: fairygui.GComponent;
		}, undefined, undefined>;
		type AlertScrollSimple = StrictComponent<fairygui.GComponent, {
			readonly bgScrollClose: fairygui.GGraph;
			readonly contentArea: SimpleNotice.Components.WindowFrame;
			readonly txtCom: SimpleNotice.Components.AlertScrollCom;
			readonly group: fairygui.GGroup;
		}, undefined, undefined>;
		namespace Components {
			type ButtonOK = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type FixedNoticeItem = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly title1: fairygui.GRichTextField;
			}, undefined, undefined>;
			type ButtonCancel = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type AlertScrollCom = StrictComponent<fairygui.GComponent, {
				readonly txtScrollInfo: fairygui.GRichTextField;
			}, undefined, undefined>;
			type BtnWindowClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type WindowFrame = StrictComponent<fairygui.GComponent, {
				readonly close: SimpleNotice.Components.BtnWindowClose;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__ft2so0ja = SingleRecharge;
	namespace SingleRecharge {
		type SingleRechargeSubView = StrictComponent<fairygui.GComponent, {
			readonly btnRecharge: UILib.Components.btn.BtnSmall1;
			readonly listRecharge: fairygui.GList;
			readonly txtTime: fairygui.GRichTextField;
			readonly txtRule: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Components {
			type SingleRechargeRender = StrictComponent<fairygui.GComponent, {
				readonly btnGet: UILib.Components.btn.BtnBig1;
				readonly listReward: fairygui.GList;
				readonly txtMoney: fairygui.GTextField;
			}, 'conState', undefined>;
		}
	}
	import __pkg__8qilkdfd = SkillBuffDes;
	namespace SkillBuffDes {
		type SkillBuffDesWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly txtName: fairygui.GTextField;
			readonly txtDes: UILib.Components.fontTab.__cmpt__kyk1a3tljr;
		}, undefined, undefined>;
	}
	import __pkg__7gcuph4u = StableExtra;
	namespace StableExtra {
		type StableExtraWindow = StrictComponent<fairygui.GComponent, {
			readonly list: fairygui.GList;
			readonly titleTxt: fairygui.GRichTextField;
		}, undefined, 't0'>;
		type OneStableExtraWindow = StrictComponent<fairygui.GComponent, {
			readonly nameTxt: fairygui.GLoader;
			readonly zzTxt: fairygui.GTextField;
			readonly titleTxt: fairygui.GRichTextField;
			readonly sendBtn: StableExtra.Components.lqBtnCom;
		}, undefined, 't0'>;
		type StableHeroWindow = StrictComponent<fairygui.GComponent, {
			readonly heroEff: StableExtra.StableDrinkWindow;
		}, undefined, undefined>;
		type StableDrinkWindow = StrictComponent<fairygui.GComponent, {
			readonly btnCard1: StableExtra.Components.StableHeroRender;
			readonly btnCard2: StableExtra.Components.StableHeroRender;
			readonly btnCard3: StableExtra.Components.StableHeroRender;
			readonly btnCard4: StableExtra.Components.StableHeroRender;
			readonly btnCard5: StableExtra.Components.StableHeroRender;
			readonly btnCard6: StableExtra.Components.StableHeroRender;
			readonly btnCard7: StableExtra.Components.StableHeroRender;
			readonly spot01: fairygui.GImage;
			readonly spot02: fairygui.GImage;
			readonly spot03: fairygui.GImage;
			readonly spot04: fairygui.GImage;
			readonly spot05: fairygui.GImage;
			readonly spot06: fairygui.GImage;
			readonly spot07: fairygui.GImage;
		}, undefined, 't0' | 't1' | 't2' | 't3' | 't4' | 't5' | 't6'>;
		type StableTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly title: fairygui.GRichTextField;
			readonly title: fairygui.GRichTextField;
			readonly title: fairygui.GRichTextField;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
			readonly item: UILib.Components.renderer.RewardRender3;
		}, undefined, undefined>;
		type StableCityWindow = StrictComponent<fairygui.GComponent, {
			readonly close: UILib.Components.btn.BtnWindowClose1;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type StableItem = StrictComponent<fairygui.GButton, {
				readonly nameTxt: fairygui.GLoader;
				readonly zzTxt: fairygui.GTextField;
				readonly gBtn: UILib.Components.btn.BtnCutDown;
				readonly titleTxt: fairygui.GRichTextField;
				readonly sendBtn: StableExtra.Components.lqBtnCom;
			}, 'bgCon', 't0'>;
			type lqBtnCom = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly graphAniTop: fairygui.GGraph;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type StableHeroRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: UILibHero.Components.render.other.HerohalfMaskCom;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderQualityBg: fairygui.GLoader;
				readonly loaderQualityFrame: fairygui.GLoader;
				readonly loaderQuality: fairygui.GLoader;
				readonly loaderName: fairygui.GLoader;
				readonly txtAddNum: fairygui.GTextField;
				readonly groCard: fairygui.GGroup;
				readonly maskIcon: fairygui.GImage;
				readonly fireEffect: fairygui.GGraph;
				readonly QualityEffect: fairygui.GGraph;
				readonly BoomEffect: fairygui.GGraph;
			}, 'conQuality', 'CardScale' | 'CardTurn'>;
			type StableCityRender = StrictComponent<fairygui.GComponent, {
				readonly com: StableExtra.Components.StableCityCom;
				readonly imgFinish: fairygui.GImage;
				readonly imgCanGet: fairygui.GImage;
				readonly listReward: fairygui.GList;
			}, undefined, undefined>;
			type StableCityCom = StrictComponent<fairygui.GButton, {
				readonly city: fairygui.GGraph;
				readonly imgCity: fairygui.GLoader;
				readonly lblCity: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__68f3j0c0 = SurpriseRedemption;
	namespace SurpriseRedemption {
		type SurpriseRedemptionView = StrictComponent<fairygui.GComponent, {
			readonly iconBg: fairygui.GLoader;
			readonly iconTitle: fairygui.GLoader;
			readonly txtName: fairygui.GRichTextField;
			readonly txtTime: fairygui.GRichTextField;
			readonly list: fairygui.GList;
			readonly helpBtn: fairygui.GButton;
			readonly dropBtn: UILib.Components.btn.BtnSmall4;
		}, undefined, undefined>;
		type SurpriseDropTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		namespace Com {
			type SurpriseRedemptionRender = StrictComponent<fairygui.GButton, {
				readonly limitCount: fairygui.GRichTextField;
				readonly rewardRender0: UILib.Components.renderer.RewardRender3;
				readonly rewardRender1: UILib.Components.renderer.RewardRender4;
				readonly rewardRender2: UILib.Components.renderer.RewardRender4;
				readonly rewardRender3: UILib.Components.renderer.RewardRender4;
				readonly buyBtn: UILib.Components.btn.BtnSmall5;
				readonly nullImage: fairygui.GImage;
			}, 'showCount' | 'c1', undefined>;
			type SurpriseDropRender = StrictComponent<fairygui.GButton, {
				readonly rewardRender: UILib.Components.renderer.RewardRender3;
				readonly gotoBtn: UILib.Components.btn.BtnSmall2;
				readonly des: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__g2kcfp5o = SysSetting;
	namespace SysSetting {
		type SysSettingView = StrictComponent<fairygui.GComponent, {
			readonly listFuncBtn: fairygui.GList;
			readonly btnLogout: SysSetting.Components.BtnCommon;
			readonly versionTxt: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpa;
		}, undefined, undefined>;
		type FeedBackWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly serverID: fairygui.GTextField;
			readonly serverName: fairygui.GTextField;
			readonly playerName: fairygui.GTextField;
			readonly serverGroup: fairygui.GGroup;
			readonly txtTip: fairygui.GTextField;
		}, undefined, undefined>;
		type SysExchangeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly bg: fairygui.GLoader;
			readonly btnOk: UILib.Components.btn.BtnBig4;
			readonly txtPut: fairygui.GTextField;
		}, undefined, undefined>;
		type SysMusicWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnOneKey: UILib.Components.btn.BtnBig1;
			readonly sliderMusic: SysSetting.Components.slider_com1;
			readonly sliderAudio: SysSetting.Components.slider_com2;
			readonly btnMusic: SysSetting.Components.btnSel;
			readonly btnAudio: SysSetting.Components.btnSel;
		}, undefined, undefined>;
		type SysAgreeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnSmall1;
			readonly comDesc: SysSetting.Components.render.SysAgreeCom;
		}, undefined, undefined>;
		type SysMessagePushWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnSwitch: SysSetting.Components.ButtonSwitch;
			readonly listNotice: fairygui.GList;
			readonly btnExpedtition: SysSetting.Components.ButtonSwitch;
			readonly title: fairygui.GTextField;
		}, undefined, undefined>;
		type SysChangeLangWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnOk: UILib.Components.btn.BtnBig1;
			readonly comboLang: SysSetting.Components.ComboBox1;
		}, undefined, undefined>;
		type SysAppNoticeWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly bg: fairygui.GImage;
			readonly goToBtn: UILib.Components.btn.BtnSmall2;
			readonly noticeTimeList: fairygui.GList;
			readonly noticeList: fairygui.GList;
			readonly tipStr: fairygui.GRichTextField;
			readonly timeStr: fairygui.GRichTextField;
		}, 'openState', undefined>;
		namespace Components {
			type slider_com1 = StrictComponent<fairygui.GSlider, {
				readonly bar: fairygui.GImage;
				readonly grip: SysSetting.Components.slider_com1_grip;
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsOpen', undefined>;
			type slider_com1_grip = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type btnSel = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ButtonSwitch = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ComboBox1_item = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type ComboBox1_popup = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
			}, undefined, undefined>;
			type ComboBox1 = StrictComponent<fairygui.GComboBox, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type MoreBtnRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly loaderSysSetting: fairygui.GLoader;
			}, 'button' | 'conRed', undefined>;
			type ScrollBar1_arrow1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ScrollBar1_arrow2 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ScrollBar1_grip = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ScrollBar1 = StrictComponent<fairygui.GScrollBar, {
				readonly bar: fairygui.GGraph;
				readonly arrow1: SysSetting.Components.ScrollBar1_arrow1;
				readonly arrow2: SysSetting.Components.ScrollBar1_arrow2;
				readonly grip: SysSetting.Components.ScrollBar1_grip;
			}, undefined, undefined>;
			type slider_com2 = StrictComponent<fairygui.GSlider, {
				readonly bar: fairygui.GImage;
				readonly grip: SysSetting.Components.slider_com1_grip;
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsOpen', undefined>;
			type BtnArrows1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnCommon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
		namespace Components.views {
			type MusicSettingViewUI = StrictComponent<fairygui.GComponent, {
				readonly sliderMusic: SysSetting.Components.slider_com1;
				readonly sliderAudio: SysSetting.Components.slider_com1;
				readonly btnMusic: SysSetting.Components.btnSel;
				readonly btnAudio: SysSetting.Components.btnSel;
				readonly groupAll: fairygui.GGroup;
			}, undefined, undefined>;
			type NoticeSettingViewUI = StrictComponent<fairygui.GComponent, {
				readonly btnSwitch: SysSetting.Components.ButtonSwitch;
				readonly listNotice: fairygui.GList;
				readonly groupAll: fairygui.GGroup;
			}, undefined, undefined>;
			type GiftCodeViewUI = StrictComponent<fairygui.GComponent, {
				readonly btnOk: UILib.Components.btn.BtnSmall1;
				readonly txtInput: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.render {
			type NoticeSettingRender = StrictComponent<fairygui.GButton, {
				readonly btnSwitch: SysSetting.Components.ButtonSwitch;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type NoticeTypeRender = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
				readonly listNotice: fairygui.GList;
			}, undefined, undefined>;
			type SysAgreeCom = StrictComponent<fairygui.GComponent, {
				readonly txtDesc: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace Components.appNotice {
			type AppNoticeRadio = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type AppNoticeRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly noticeRadio: SysSetting.Components.appNotice.AppNoticeRadio;
				readonly noticeStr: fairygui.GRichTextField;
			}, undefined, undefined>;
			type AppNoticeTimeRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly noticeRadio: SysSetting.Components.appNotice.AppNoticeRadio;
				readonly noticeTimeStr: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__er3sfeau = Task;
	namespace Task {
		type TaskView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly listBtn: fairygui.GList;
		}, 'conTaskSel', 't0'>;
		type ActiveTaskRewardsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnGet: UILib.Components.btn.BtnBig2;
			readonly listReward: fairygui.GList;
			readonly txtActive: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conIsGet', undefined>;
		type PTaskDonateWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnDonate: UILib.Components.btn.BtnBig4;
			readonly loaderIcon1: fairygui.GLoader;
			readonly txtDonateDesc: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtChooseNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, undefined, undefined>;
		type TaskChapterFinishWindow = StrictComponent<fairygui.GComponent, {
			readonly rectMask: fairygui.GGraph;
			readonly rectMask1: fairygui.GGraph;
			readonly bg: fairygui.GLoader;
			readonly taskText: fairygui.GLoader;
			readonly taskIcon: fairygui.GLoader;
			readonly taskIcon1: fairygui.GLoader;
			readonly btnClose: UILib.Components.btn.BtnEmpty;
		}, 'conChapter', 't0' | 'breathing' | 'fadeout'>;
		type TaskAffairFightView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea1: UILib.Components.frame.Frame6;
			readonly loaderCity: fairygui.GLoader;
			readonly loaderFightPreview: fairygui.GLoader;
			readonly btnFight: UILib.Components.btn.BtnBig4;
			readonly btnGo: UILib.Components.btn.BtnBig1;
			readonly listHero: fairygui.GList;
			readonly btnFightPower: UILibHero.Components.fight.FightPowerRecommendBig;
			readonly txtNpcName: UILib.Components.fontTab_text.__cmpt__qmdq1no8u67;
			readonly txtLevel: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtDesc: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			readonly txtCity: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly txtInfo: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtTroopNum: fairygui.GTextField;
		}, 'conIsHaveTroop' | 'conFightType', undefined>;
		type PtaskSubmitUIWindow = StrictComponent<fairygui.GComponent, {
			readonly light1: fairygui.GLoader;
			readonly light2: fairygui.GLoader;
			readonly bg1: fairygui.GLoader;
			readonly graphAniTop: fairygui.GGraph;
			readonly graphAniBottom: fairygui.GGraph;
			readonly graphAniParticle: fairygui.GGraph;
			readonly loaderEvaluate: fairygui.GLoader;
			readonly listRewardOut: fairygui.GList;
			readonly listReward: fairygui.GList;
			readonly specialReward: UILib.Components.renderer.RewardRender1;
			readonly btnGet: UILib.Components.btn.BtnBig4;
		}, 'conIsOutReward', 't0'>;
		type PTaskTreasureHuntView = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly btnFight: UILib.Components.btn.BtnBig3;
			readonly btnGo: UILib.Components.btn.BtnBig3;
			readonly btnTime: UILib.Components.btn.BtnBig1;
			readonly listHero: fairygui.GList;
			readonly darkBg: fairygui.GImage;
			readonly txtDesc: UILib.Components.fontTab.__cmpt__f73xa3tlhe;
			readonly txtInfo: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtTroopNum: fairygui.GTextField;
		}, 'conIsHaveTroop' | 'conState', undefined>;
		namespace Components {
			type ProgressBar3 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBar5 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: Task.Components.TaskActiveBar;
			}, undefined, undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type RadioBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly imgLine: fairygui.GImage;
			}, 'button' | 'conIsCanRed' | 'conType', undefined>;
			type ComMilepostTask = StrictComponent<fairygui.GComponent, {
				readonly listTask: fairygui.GList;
			}, undefined, 'tweenUp' | 'tweenDown'>;
			type TaskActiveBar = StrictComponent<fairygui.GComponent, {
				readonly barMask: fairygui.GGraph;
			}, undefined, undefined>;
			type TaskRewardBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GLoader;
				readonly loaderBtnUp: fairygui.GLoader;
			}, 'button' | 'conState', 't0'>;
			type TaskActiveBase = StrictComponent<fairygui.GButton, {
				readonly btnBox: fairygui.GLoader;
				readonly btnBox1: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsOpen' | 'conIsLast', 'aniRota'>;
			type BtnNewBig1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnNewBig4 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type PtaskRender = StrictComponent<fairygui.GButton, {
				readonly loader: fairygui.GLoader;
				readonly loaderState: fairygui.GLoader;
				readonly loaderBar: fairygui.GLoader;
				readonly btnGiveUp: UILib.Components.btn.BtnSmall1;
				readonly btnGo: UILib.Components.btn.BtnSmall2;
				readonly btnRemove: UILib.Components.btn.BtnSmall3;
				readonly btnGiveMax: UILib.Components.btn.BtnSmall4;
				readonly btnFinish: UILib.Components.btn.BtnSmall2;
				readonly btnMaxFinish: UILib.Components.btn.BtnSmall4;
				readonly btnCost: UILib.Components.renderer.ConsumeRender;
				readonly listReward: fairygui.GList;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtType: fairygui.GTextField;
				readonly txtPro: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpc;
			}, 'conTaskState' | 'button', undefined>;
			type TaskRender = StrictComponent<fairygui.GButton, {
				readonly progressBarNum: Task.Components.ProgressBar1;
				readonly listReward: fairygui.GList;
				readonly btnGetInto: UILib.Components.btn.BtnSmall4;
				readonly btnGet: UILib.Components.btn.BtnSmall1;
				readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtActive: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
			}, 'conButton' | 'conType', 't0'>;
			type BtnTaskLock = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsLast', undefined>;
			type MainTaskRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly btnGetInto: UILib.Components.btn.BtnBig4;
				readonly btnGet: UILib.Components.btn.BtnBig3;
				readonly txtName: fairygui.GTextField;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conButton', undefined>;
			type BtnTask = StrictComponent<fairygui.GButton, undefined, 'button' | 'conIsLast', undefined>;
		}
		namespace Components.subview {
			type TaskSubAffairView = StrictComponent<fairygui.GComponent, {
				readonly loader0: fairygui.GLoader;
				readonly loader1: fairygui.GLoader;
				readonly loader2: fairygui.GLoader;
				readonly loader3: fairygui.GLoader;
				readonly loader4: fairygui.GLoader;
				readonly loaderBg: fairygui.GImage;
				readonly loader5: fairygui.GLoader;
				readonly loaderName: fairygui.GLoader;
				readonly loaderCurIcon: fairygui.GLoader;
				readonly btnGoOffice: UILib.Components.btn.BtnBig3;
				readonly btnBuyTime: UILib.Components.btn.BtnBig4;
				readonly btnHelp: fairygui.GButton;
				readonly btnFeat: UILib.Components.renderer.ConsumeRender;
				readonly btnFresh: UILib.Components.btn.BtnBig4;
				readonly btnRetrieve: Task.Components.render.BtnTask;
				readonly listTask: fairygui.GList;
				readonly txtFreshTime: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtRemainNum: UILib.Components.fontTab_richText.__cmpt__sxsxa3tlq9;
				readonly txtNoTimeTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			}, 'conIsNoTime' | 'conIsMax' | 'conIsCanBack', undefined>;
			type TaskSubActiveView = StrictComponent<fairygui.GComponent, {
				readonly proActive: Task.Components.ProgressBar5;
				readonly btnBase0: Task.Components.TaskActiveBase;
				readonly btnBase1: Task.Components.TaskActiveBase;
				readonly btnBase2: Task.Components.TaskActiveBase;
				readonly btnBase3: Task.Components.TaskActiveBase;
				readonly btnBase4: Task.Components.TaskActiveBase;
				readonly listTask: fairygui.GList;
				readonly imgArrows: fairygui.GImage;
				readonly imgArrowsUp: fairygui.GImage;
				readonly txtNum: fairygui.GTextField;
			}, undefined, 'list'>;
			type TaskSubMilepostView = StrictComponent<fairygui.GComponent, {
				readonly btnHeroTask: fairygui.GLoader;
				readonly milepostRed1: fairygui.GImage;
				readonly btnBuildTask: fairygui.GLoader;
				readonly milepostRed2: fairygui.GImage;
				readonly btnCampTask: fairygui.GLoader;
				readonly milepostRed3: fairygui.GImage;
				readonly btnTitleTask: fairygui.GLoader;
				readonly milepostRed4: fairygui.GImage;
				readonly comTask: Task.Components.ComMilepostTask;
				readonly imgArrows: fairygui.GImage;
				readonly imgArrows1: fairygui.GImage;
				readonly btnOnkey: UILib.Components.btn.BtnBig4;
			}, 'conTaskType', 't5' | 't6'>;
			type TaskSubChapterView = StrictComponent<fairygui.GComponent, {
				readonly imgBox: fairygui.GImage;
				readonly listReward: fairygui.GList;
				readonly listLockFunc: fairygui.GList;
				readonly effectText: fairygui.GGraph;
				readonly effectLight: fairygui.GGraph;
				readonly imgLight1: fairygui.GImage;
				readonly btnTake: Task.Components.TaskRewardBtn;
				readonly taskCom: Task.Components.render.MainTaskRender;
				readonly txtTaskPro: fairygui.GRichTextField;
				readonly txtCurChapter: fairygui.GTextField;
			}, 'conIsMax', 'aniReward'>;
		}
	}
	import __pkg__r35oltps = Tavern;
	namespace Tavern {
		type TavernDropRateUIWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listSelect: fairygui.GList;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		type TavernView = StrictComponent<fairygui.GComponent, {
			readonly loader0: fairygui.GLoader;
			readonly comOrdinary: Tavern.Components.render.TavernOrdinaryRender;
			readonly comSpecial: Tavern.Components.render.TavernSpecialRender;
			readonly btnIsSkip: UILib.Components.button_checkbox.Button_Check2;
			readonly btnProbability: Tavern.Components.BtnShowProbability;
			readonly btnEmpty: UILib.Components.btn.BtnEmpty;
			readonly btnComplete: UILib.Components.btn.BtnEmpty;
		}, 'conIsOpen', 'open' | 'Loop' | 'click' | 'close'>;
		type TavernDrinkWindow2 = StrictComponent<fairygui.GComponent, {
			readonly btnCard1: Tavern.Components.render.TavernChipCardRender;
			readonly btnCard2: Tavern.Components.render.TavernChipCardRender;
			readonly btnCard3: Tavern.Components.render.TavernChipCardRender;
			readonly btnCard4: Tavern.Components.render.TavernChipCardRender;
			readonly btnCard5: Tavern.Components.render.TavernChipCardRender;
			readonly btnCard6: Tavern.Components.render.TavernChipCardRender;
			readonly btnCard7: Tavern.Components.render.TavernChipCardRender;
			readonly spot01: fairygui.GImage;
			readonly spot02: fairygui.GImage;
			readonly spot03: fairygui.GImage;
			readonly spot04: fairygui.GImage;
			readonly spot05: fairygui.GImage;
			readonly spot06: fairygui.GImage;
			readonly spot07: fairygui.GImage;
			readonly loader: fairygui.GLoader;
		}, undefined, 't0' | 't1' | 't2' | 't3' | 't4' | 't5' | 't6'>;
		type TavernDrinkWindow = StrictComponent<fairygui.GComponent, {
			readonly clickBtn: Tavern.Components.BtnClickTransCard;
			readonly btnComplete: Tavern.Components.BtnClickTransCard;
			readonly loaderIcon: fairygui.GLoader;
			readonly txtRecruit: fairygui.GRichTextField;
			readonly groCost: fairygui.GGroup;
			readonly btnRecruit: Tavern.Components.BtnTavern1;
			readonly tmpWindow: Tavern.TavernDrinkWindow2;
		}, undefined, undefined>;
		type TavernDrinkListWindow = StrictComponent<fairygui.GComponent, {
			readonly clickBtn: Tavern.Components.BtnClickTransCard;
			readonly btnComplete: Tavern.Components.BtnClickTransCard;
			readonly loaderIcon: fairygui.GLoader;
			readonly txtRecruit: fairygui.GRichTextField;
			readonly groCost: fairygui.GGroup;
			readonly btnRecruit: Tavern.Components.BtnTavern1;
			readonly listCard: fairygui.GList;
		}, undefined, undefined>;
		namespace Components {
			type BtnHeroType = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conType', undefined>;
			type ProgressBarBlue = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type BtnTavern = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnShowProbability = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnClickTransCard = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnTavern1 = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type TavernBgView = StrictComponent<fairygui.GComponent, {
				readonly loader0: fairygui.GLoader;
				readonly comHero0: Tavern.Components.FlagMaskLeft;
				readonly comHero1: Tavern.Components.FlagMaskRight;
				readonly comHero2: Tavern.Components.FlagMaskLeft;
				readonly comHero3: Tavern.Components.FlagMaskRight;
				readonly comHero4: Tavern.Components.FlagMaskLeft;
				readonly comHero5: Tavern.Components.FlagMaskRight;
				readonly comHero6: Tavern.Components.FlagMaskLeft;
				readonly comHero7: Tavern.Components.FlagMaskRight;
				readonly loader1: fairygui.GLoader;
				readonly loader2: fairygui.GLoader;
				readonly loader3: fairygui.GLoader;
				readonly comCloud: Tavern.Components.TavernCloudBgView;
				readonly loader4: fairygui.GLoader;
			}, undefined, 't0'>;
			type FlagMaskLeft = StrictComponent<fairygui.GComponent, {
				readonly comHero: Tavern.Components.FlagMaskCom;
			}, undefined, undefined>;
			type FlagMaskCom = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type FlagMaskRight = StrictComponent<fairygui.GComponent, {
				readonly comHero: Tavern.Components.FlagMaskCom;
			}, undefined, undefined>;
			type TavernCloudBgView = StrictComponent<fairygui.GComponent, {
				readonly loader0: fairygui.GLoader;
				readonly loader1: fairygui.GLoader;
				readonly loader2: fairygui.GLoader;
				readonly loader3: fairygui.GLoader;
				readonly loader4: fairygui.GLoader;
				readonly loader5: fairygui.GLoader;
				readonly loader6: fairygui.GLoader;
				readonly loader7: fairygui.GLoader;
				readonly loader8: fairygui.GLoader;
				readonly loader9: fairygui.GLoader;
				readonly loader10: fairygui.GLoader;
				readonly loader11: fairygui.GLoader;
				readonly loader12: fairygui.GLoader;
				readonly loader13: fairygui.GLoader;
				readonly loader14: fairygui.GLoader;
			}, undefined, 't0'>;
		}
		namespace Components.button {
			type BtnTalent = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.render {
			type TavernHeroHeadRender = StrictComponent<fairygui.GButton, {
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderQuality: fairygui.GLoader;
				readonly txtName: fairygui.GTextField;
			}, 'button', undefined>;
			type TavernOrdinaryRender = StrictComponent<fairygui.GComponent, {
				readonly loader: fairygui.GLoader;
				readonly btnRecruitTen: Tavern.Components.BtnTavern;
				readonly btnRecruit: Tavern.Components.BtnTavern;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderIconTen: fairygui.GLoader;
				readonly txtRewardNum: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly txtCardNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtTenCount: fairygui.GTextField;
				readonly txtRecruit: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtRecruitTen: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
			type TavernSpecialRender = StrictComponent<fairygui.GComponent, {
				readonly loader: fairygui.GLoader;
				readonly btnRecruit: Tavern.Components.BtnTavern1;
				readonly btnRecruitTen: Tavern.Components.BtnTavern1;
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderIconTen: fairygui.GLoader;
				readonly txtRewardNum: UILib.Components.fontTab.__cmpt__f73xa3tlhx;
				readonly txtCardNum: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtTenCount: fairygui.GTextField;
				readonly txtRecruit: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
				readonly txtRecruitTen: UILib.Components.fontTab.__cmpt__f73xa3tlhd;
			}, undefined, undefined>;
			type TavernDropRender = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
				readonly btn: fairygui.GLoader;
				readonly titleName: fairygui.GTextField;
				readonly titleNum: fairygui.GTextField;
			}, 'isShow', undefined>;
			type TavernChipCardRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: UILibHero.Components.render.other.HerohalfMaskCom;
				readonly loaderFrame: fairygui.GLoader;
				readonly groCard: fairygui.GGroup;
				readonly maskIcon: fairygui.GImage;
				readonly QualityEffect: fairygui.GGraph;
				readonly loaderQuality: fairygui.GLoader;
				readonly txtAddNum: fairygui.GTextField;
				readonly txtCurNum: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly groCard1: fairygui.GGroup;
				readonly bloom: fairygui.GImage;
				readonly eff01: fairygui.GGraph;
				readonly eff02: fairygui.GGraph;
				readonly lightning: fairygui.GGraph;
			}, 'conQuality', 'eff01' | 'eff02'>;
			type TavernChipCardRender1 = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: UILibHero.Components.render.other.HerohalfMaskCom;
				readonly loaderFrame: fairygui.GLoader;
				readonly groCard: fairygui.GGroup;
				readonly maskIcon: fairygui.GImage;
				readonly QualityEffect: fairygui.GGraph;
				readonly loaderQuality: fairygui.GLoader;
				readonly txtAddNum: fairygui.GTextField;
				readonly txtCurNum: fairygui.GTextField;
				readonly txtName: fairygui.GRichTextField;
				readonly groCard1: fairygui.GGroup;
				readonly bloom: fairygui.GImage;
				readonly eff01: fairygui.GGraph;
				readonly eff02: fairygui.GGraph;
				readonly lightning: fairygui.GGraph;
			}, 'conQuality' | 'conIsFinish', 'eff01' | 'eff02'>;
		}
	}
	import __pkg__ef3xwnev = Technology;
	namespace Technology {
		type TechnologyUpLevelWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly btnCostByGold: UILib.Components.btn.Btn7;
			readonly btnCostByTime: UILib.Components.btn.Btn6;
			readonly loaderType: fairygui.GLoader;
			readonly loaderIcon: fairygui.GLoader;
			readonly desCom: Technology.Components.TechnologyDesCom;
			readonly condiitonCom: Technology.Components.TechnologyConditionCom;
			readonly emptyCom: fairygui.GComponent;
			readonly listConsume: fairygui.GList;
			readonly btnFeat: UILib.Components.renderer.ConsumeRender;
			readonly txtConsume1: UILib.Components.fontTab_richText.__cmpt__uj3e1no8u0x;
			readonly txtConsume: UILib.Components.fontTab_richText.__cmpt__uj3e1no8u0x;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__su2va3tlqc;
			readonly txtCurLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNextLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlpe;
			readonly txtType: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtEffectType: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conState', undefined>;
		type TechnologyView = StrictComponent<fairygui.GComponent, {
			readonly chapterRoot: fairygui.GComponent;
			readonly btnLeft: UILib.Components.btnArrows.BtnArrows4;
			readonly btnRight: UILib.Components.btnArrows.BtnArrows4;
		}, undefined, undefined>;
		namespace Components {
			type TechnologyDesCom = StrictComponent<fairygui.GComponent, {
				readonly imgBg: fairygui.GImage;
				readonly curDes: Technology.Components.render.TechnologyDesRender;
				readonly nextDes: Technology.Components.render.TechnologyDesRender;
			}, 'conMaxLv', undefined>;
			type TechnogolyUpdateCom = StrictComponent<fairygui.GComponent, {
				readonly loaderType: fairygui.GLoader;
				readonly loaderIcon: fairygui.GLoader;
				readonly btnSpeed: UILib.Components.btn.BtnSmall2;
				readonly txtName: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
				readonly txtTime: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			}, undefined, undefined>;
			type TechnologyConditionCom = StrictComponent<fairygui.GComponent, {
				readonly listCondition: fairygui.GList;
				readonly groupCondition: fairygui.GGroup;
			}, undefined, undefined>;
		}
		namespace Components.render {
			type TechnologyRender = StrictComponent<fairygui.GButton, {
				readonly loaderType: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly loaderNameBg: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly imgUp: fairygui.GImage;
				readonly listAttr: fairygui.GList;
				readonly txtName: fairygui.GTextField;
				readonly txtMaxLv: fairygui.GTextField;
				readonly txtState: fairygui.GTextField;
				readonly txtLv: fairygui.GTextField;
			}, 'conLvType' | 'conState', 'tCanlearn'>;
			type TechnologyDesRender = StrictComponent<fairygui.GButton, {
				readonly txtDes: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly title: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp8;
			}, 'button', undefined>;
			type TechnologyAttrRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type ConditionRender = StrictComponent<fairygui.GComponent, {
				readonly txtCondition: fairygui.GTextField;
			}, 'conIsOk', undefined>;
		}
		namespace Components.chapterView {
			type TechnologyChapterView1 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly render19: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
			type TechnologyChapterView2 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly render19: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
			type TechnologyChapterView3 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly render19: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
			type TechnologyChapterView4 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly render19: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
			type TechnologyChapterView5 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly render19: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
			type TechnologyChapterView7 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly render19: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
			type TechnologyChapterView8 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly render19: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
			type TechnologyChapterView6 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly render19: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
			type TechnologyChapterView9 = StrictComponent<fairygui.GComponent, {
				readonly loaderTitle: fairygui.GLoader;
				readonly groupLine: fairygui.GGroup;
				readonly render0: Technology.Components.render.TechnologyRender;
				readonly render1: Technology.Components.render.TechnologyRender;
				readonly render2: Technology.Components.render.TechnologyRender;
				readonly render3: Technology.Components.render.TechnologyRender;
				readonly render4: Technology.Components.render.TechnologyRender;
				readonly render5: Technology.Components.render.TechnologyRender;
				readonly render6: Technology.Components.render.TechnologyRender;
				readonly render7: Technology.Components.render.TechnologyRender;
				readonly render8: Technology.Components.render.TechnologyRender;
				readonly render9: Technology.Components.render.TechnologyRender;
				readonly render10: Technology.Components.render.TechnologyRender;
				readonly render11: Technology.Components.render.TechnologyRender;
				readonly render12: Technology.Components.render.TechnologyRender;
				readonly render13: Technology.Components.render.TechnologyRender;
				readonly render14: Technology.Components.render.TechnologyRender;
				readonly render15: Technology.Components.render.TechnologyRender;
				readonly render16: Technology.Components.render.TechnologyRender;
				readonly render17: Technology.Components.render.TechnologyRender;
				readonly render18: Technology.Components.render.TechnologyRender;
				readonly groupRender: fairygui.GGroup;
			}, undefined, undefined>;
		}
	}
	import __pkg__1vtbn3hf = ThemeActivity;
	namespace ThemeActivity {
		type ThemeActivityView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly listBtn: fairygui.GList;
		}, 'conOpenSel', undefined>;
		type ThemeTreasureExpainWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly comHero: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly listScore: fairygui.GList;
			readonly txtBaseScore: fairygui.GTextField;
			readonly txtRank: fairygui.GTextField;
		}, undefined, undefined>;
		type ThemeTreasureHeroLinesWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly comHero: UILibHero.Components.render.headRender.HeroHeadRender;
			readonly txtBaseScore: fairygui.GTextField;
			readonly txtRank: fairygui.GTextField;
			readonly listScore0: fairygui.GList;
			readonly listScore1: fairygui.GList;
			readonly listScore2: fairygui.GList;
		}, undefined, undefined>;
		namespace Views {
			type ThemeRankSubView = StrictComponent<fairygui.GComponent, {
				readonly comSecond: ThemeActivity.Components.render.ThemeRankTitleRender;
				readonly comThird: ThemeActivity.Components.render.ThemeRankTitleRender;
				readonly comFirst: ThemeActivity.Components.render.ThemeRankTitleRender;
				readonly listBtn: fairygui.GList;
				readonly listRank: fairygui.GList;
				readonly listReward: fairygui.GList;
				readonly comMy: ThemeActivity.Components.render.ThemeRankRender;
				readonly txtTime: fairygui.GRichTextField;
			}, 'conType' | 'curWeekTypeCon', undefined>;
			type ThemeTaskSubView = StrictComponent<fairygui.GComponent, {
				readonly titleIcon: fairygui.GLoader;
				readonly titleImg: fairygui.GLoader;
				readonly listTask: fairygui.GList;
				readonly txtTime: fairygui.GRichTextField;
				readonly listBtn: fairygui.GList;
			}, 'conType' | 'curWeekTypeCon', undefined>;
			type ThemeShopSubView = StrictComponent<fairygui.GComponent, {
				readonly titleIcon: fairygui.GLoader;
				readonly titleImg: fairygui.GLoader;
				readonly listShop: fairygui.GList;
				readonly txtTime: fairygui.GRichTextField;
			}, 'curWeekTypeCon', undefined>;
		}
		namespace Components {
			type ThemeRadioBtn = StrictComponent<fairygui.GButton, {
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conIsRed' | 'conType', undefined>;
			type ThemeRankRadioBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type ThemeShopBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type ThemeTaskBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type ThemeTaskRadioBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly icon1: fairygui.GLoader;
				readonly imgRed: fairygui.GImage;
			}, 'button' | 'conIsRed', undefined>;
		}
		namespace Components.render {
			type ThemeRankTitleRender = StrictComponent<fairygui.GComponent, {
				readonly roleHead: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
				readonly countryBtn: UILib.Components.countryRender.CountryCityRender;
				readonly txtName: fairygui.GTextField;
			}, 'conRanking' | 'conIsHaveRank', undefined>;
			type ThemeRewardRender = StrictComponent<fairygui.GComponent, {
				readonly listReward: fairygui.GList;
				readonly txtRank: fairygui.GTextField;
			}, 'conRank', undefined>;
			type ThemeRankRender = StrictComponent<fairygui.GComponent, {
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly btnShow: UILib.Components.btn.BtnSmall4;
				readonly comHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly btnShowRole: UILib.Components.btn.BtnEmpty;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtValue: fairygui.GTextField;
				readonly txtName1: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtValue1: fairygui.GTextField;
				readonly txtRank: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtNeed: fairygui.GTextField;
				readonly rankTj1: fairygui.GTextField;
				readonly rankJf1: fairygui.GTextField;
				readonly rankTj: fairygui.GTextField;
				readonly rankJf: fairygui.GTextField;
			}, 'conRank' | 'conIsOwn' | 'conIsHave' | 'conIsShowScore', undefined>;
			type ThemeTaskRender = StrictComponent<fairygui.GButton, {
				readonly listReward: fairygui.GList;
				readonly txtDes: fairygui.GRichTextField;
				readonly btnGo: UILib.Components.btnAct.BtnAct6;
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly effect: fairygui.GGraph;
			}, 'conTaskState' | 'button', undefined>;
			type ThemeShopRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly listReward: fairygui.GList;
				readonly btnBuy: UILib.Components.btnAct.BtnAct5;
				readonly txtValue: fairygui.GTextField;
				readonly txtTime: fairygui.GTextField;
			}, 'conIsNull', undefined>;
			type ScoreInfoRender = StrictComponent<fairygui.GComponent, {
				readonly txtScore: fairygui.GTextField;
				readonly txtLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsShowBg', undefined>;
			type HeroLinesRankRender = StrictComponent<fairygui.GComponent, {
				readonly txtScore: fairygui.GTextField;
				readonly txtLv: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsShowBg', undefined>;
		}
	}
	import __pkg__eweyvsod = ThreeKings;
	namespace ThreeKings {
		type ThreeKingsView = StrictComponent<fairygui.GComponent, {
			readonly subViewContainer: fairygui.GComponent;
			readonly btn0: ThreeKings.Components.TitleBtn;
			readonly btn1: ThreeKings.Components.TitleBtn1;
			readonly shopBtn: ThreeKings.Components.TitleBtn2;
		}, 'subCon', undefined>;
		type ThreeKingsHeroWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly head0: ThreeKings.Components.HeroHandRender;
			readonly head2: ThreeKings.Components.HeroHandRender;
			readonly head1: ThreeKings.Components.HeroHandRender;
			readonly title: fairygui.GRichTextField;
			readonly noBtn: UILib.Components.btn.BtnBig5;
			readonly okBtn: UILib.Components.btn.BtnBig1;
			readonly heroName: fairygui.GRichTextField;
		}, undefined, undefined>;
		type ThreeKingsGlWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly list: fairygui.GList;
		}, undefined, undefined>;
		type ThreeKingsShopWindow = StrictComponent<fairygui.GComponent, {
			readonly list: fairygui.GList;
			readonly limitedTimes0: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace subView {
			type ThreeKingsFallSubView = StrictComponent<fairygui.GComponent, {
				readonly heroCom: ThreeKings.Components.ThreeKingHero;
				readonly heroHead: UILibHero.Components.render.headRender.HeroHeadRender;
				readonly addHero: fairygui.GLoader;
				readonly glBtn: ThreeKings.Components.ShopBtn;
				readonly btnCost0: UILib.Components.renderer.ConsumeRender;
				readonly btnCost1: UILib.Components.renderer.ConsumeRender;
				readonly numTxt: ThreeKings.Components.KingsBtnConsume;
				readonly oneBtn: UILib.Components.btnAct.BtnAct2;
				readonly tenBtn: UILib.Components.btnAct.BtnAct2;
				readonly btnSkill: ThreeKings.Components.ShopBtn;
				readonly btnInfo: ThreeKings.Components.ShopBtn;
			}, 'isHero' | 'heroCon', 't0'>;
		}
		namespace Components {
			type TitleBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'isRed' | 'button', undefined>;
			type ThreeKingsGlRender = StrictComponent<fairygui.GComponent, {
				readonly list: fairygui.GList;
				readonly btn: fairygui.GLoader;
				readonly titleName: fairygui.GRichTextField;
				readonly titleNum: fairygui.GRichTextField;
			}, 'isShow', undefined>;
			type ThreeKingsShopRender = StrictComponent<fairygui.GButton, {
				readonly list0: fairygui.GList;
				readonly limitedTimes0: fairygui.GRichTextField;
				readonly buyBtn0: UILib.Components.btnAct.BtnAct5;
				readonly name0: fairygui.GRichTextField;
				readonly list1: fairygui.GList;
				readonly limitedTimes1: fairygui.GRichTextField;
				readonly buyBtn1: UILib.Components.btnAct.BtnAct5;
				readonly name1: fairygui.GRichTextField;
			}, 'isCon0' | 'isCon1' | 'isOne', undefined>;
			type TitleBtn1 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'isRed' | 'button', undefined>;
			type ShopBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroHandRender = StrictComponent<fairygui.GButton, {
				readonly heroHeadLoader: fairygui.GLoader;
			}, 'isHero' | 'button', undefined>;
			type ThreeKingsShopBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type KingsBtnConsume = StrictComponent<fairygui.GButton, {
				readonly item: UILib.Components.renderer.ConsumeMask;
				readonly title: fairygui.GRichTextField;
				readonly nameTxt: fairygui.GRichTextField;
			}, 'button', undefined>;
			type TitleBtn2 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'isRed' | 'button', undefined>;
			type ThreeKingHero = StrictComponent<fairygui.GComponent, {
				readonly heroImg: fairygui.GLoader;
			}, undefined, undefined>;
		}
	}
	import __pkg__73hyhv8q = ThreeKingsRelic;
	namespace ThreeKingsRelic {
		type ThreeKingsRelicView = StrictComponent<fairygui.GComponent, {
			readonly gridLayerCom: ThreeKingsRelic.Components.GridLayerCom;
			readonly btnConsume: ThreeKingsRelic.Components.BtnConsume;
			readonly btnExcavate: UILib.Components.btnAct.BtnAct2;
			readonly btnEmpty: UILib.Components.btn.BtnEmpty;
			readonly btnUnlock: UILib.Components.btnAct.BtnAct2;
			readonly listHero: fairygui.GList;
			readonly txtCondition: fairygui.GTextField;
			readonly btnRate: ThreeKingsRelic.Components.BtnRate;
		}, 'conState', undefined>;
		type ThreeKingsRelicRateWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listReward: fairygui.GList;
			readonly txtTip1: fairygui.GRichTextField;
			readonly txtTip2: fairygui.GRichTextField;
		}, undefined, undefined>;
		namespace Components {
			type BtnRate = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnConsume = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type GridLayerCom = StrictComponent<fairygui.GComponent, {
				readonly layer0: ThreeKingsRelic.Components.render.ThreeKingsRelicLayerRender;
				readonly layer1: ThreeKingsRelic.Components.render.ThreeKingsRelicLayerRender;
				readonly layer2: ThreeKingsRelic.Components.render.ThreeKingsRelicLayerRender;
				readonly layer3: ThreeKingsRelic.Components.render.ThreeKingsRelicLayerRender;
				readonly layer4: ThreeKingsRelic.Components.render.ThreeKingsRelicLayerRender;
				readonly graphAni: fairygui.GGraph;
			}, undefined, undefined>;
		}
		namespace Components.render {
			type ThreeKingsRelicGridRender = StrictComponent<fairygui.GButton, {
				readonly graphAni: fairygui.GGraph;
				readonly loaderBlock: fairygui.GLoader;
			}, 'conState', undefined>;
			type ThreeKingsRelicLayerRender = StrictComponent<fairygui.GComponent, {
				readonly listGrid: fairygui.GList;
				readonly btnEmpty: UILib.Components.btn.BtnEmpty;
			}, undefined, undefined>;
			type ThreeKingsRelicRewardRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRenderForEffect2;
				readonly txtRate: fairygui.GTextField;
			}, 'conState', undefined>;
			type ThreeKingsRelicHeroRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GImage;
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__ep2ncm6l = Treasure;
	namespace Treasure {
		type TreasureMakeEndWindow = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GImage;
			readonly light1: fairygui.GLoader;
			readonly listAttr: fairygui.GList;
			readonly loaderType: fairygui.GLoader;
			readonly reward: UILib.Components.renderer.RewardRender1;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljp;
			readonly groupTreasure: fairygui.GGroup;
		}, undefined, undefined>;
		type TreasureRefineSureWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly bg: fairygui.GLoader;
			readonly bg2: fairygui.GLoader;
			readonly btnOk: UILib.Components.btn.BtnBig4;
			readonly btnNo: UILib.Components.btn.BtnBig1;
			readonly btnRefine: Treasure.Components.render.TreasureRefineBtn;
			readonly btnCurAttr: fairygui.GRichTextField;
			readonly btnNextAttr: fairygui.GRichTextField;
			readonly btnCost: Treasure.Components.render.TreasureMakeConsumeRender;
			readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
		}, 'conIsRefine', undefined>;
		type TreasureResolveWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnResolveSel: UILib.Components.btn.BtnBig1;
			readonly btnConsumeSel: UILib.Components.renderer.ConsumeRender;
			readonly btnGetSel: UILib.Components.renderer.ConsumeRender;
			readonly btnResolveAll: UILib.Components.btn.BtnBig1;
			readonly btnConsumeAll: UILib.Components.renderer.ConsumeRender;
			readonly btnGetAll: UILib.Components.renderer.ConsumeRender;
			readonly listChip: fairygui.GList;
		}, 'conIsSelResolve' | 'conIsHaveChip', undefined>;
		type TreasureChipSelWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnSel: UILib.Components.btn.BtnBig1;
			readonly item: UILib.Components.renderer.RewardRender1;
			readonly btnAdd: UILib.Components.btn.BtnAdd;
			readonly btnCutDown: UILib.Components.btn.BtnCutDown;
			readonly slider: UILib.Components.silder.silder_com_3;
			readonly txtName: fairygui.GTextField;
			readonly txtCount: fairygui.GTextField;
		}, undefined, undefined>;
		type ItemTreasureTipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly type: fairygui.GLoader;
			readonly reward: UILib.Components.renderer.RewardRender1;
			readonly btnSuit: UILibHero.Components.render.other.BtnHeroSuit;
			readonly listAttr: fairygui.GList;
			readonly getWayCom: UILib.Components.GetWayCom;
			readonly txtName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtSubView: Treasure.Components.DesSubView;
			readonly txtHeroName: fairygui.GTextField;
			readonly txtQua: fairygui.GRichTextField;
		}, 'conType' | 'conIsShowDes' | 'conShowGetWay', undefined>;
		type TreasureSuitWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly loaderBg: fairygui.GLoader;
			readonly btnTreasure: Treasure.Components.btnGoActive;
			readonly btnTreasure1: UILib.Components.renderer.RewardRender1;
			readonly btnTreasure2: UILib.Components.renderer.RewardRender1;
			readonly btnTreasure3: UILib.Components.renderer.RewardRender1;
			readonly btnTreasure4: UILib.Components.renderer.RewardRender1;
			readonly btnTreasure5: UILib.Components.renderer.RewardRender1;
			readonly btnTreasure6: UILib.Components.renderer.RewardRender1;
			readonly btnSuit: UILibHero.Components.render.other.BtnHeroSuit;
			readonly listAttr: fairygui.GList;
		}, 'conIsBtn', undefined>;
		type TreasureSuitTipsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly graphAni: fairygui.GGraph;
			readonly loaderName: fairygui.GLoader;
			readonly listTreasure: fairygui.GList;
			readonly listSuit: fairygui.GList;
		}, undefined, undefined>;
		type TreasureDetailsWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly img_bg: fairygui.GLoader;
			readonly type: fairygui.GLoader;
			readonly reward: UILib.Components.renderer.RewardRender1;
			readonly btnBreak: UILib.Components.btn.BtnCutDown;
			readonly btnRefine: UILib.Components.btn.BtnCutDown;
			readonly btnStrengthen: UILib.Components.btn.BtnCutDown;
			readonly btnChange: UILib.Components.btn.BtnCutDown;
			readonly btnSuit: UILibHero.Components.render.other.BtnHeroSuit;
			readonly btnTreasureStrengthSuit: UILibHero.Components.render.other.BtnTreasureStrengthSuit;
			readonly detailsViewUI: Treasure.Views.TreasureDetailsInfoViewUI;
			readonly listTreasure: fairygui.GList;
			readonly txtName: fairygui.GTextField;
			readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			readonly txtheroName: fairygui.GTextField;
			readonly txtQua: fairygui.GRichTextField;
		}, 'conState' | 'conFromTreasure' | 'conShowName' | 'conType', undefined>;
		type TreasureView = StrictComponent<fairygui.GComponent, {
			readonly loaderTreasureQuality: fairygui.GLoader;
			readonly loaderTreasureIcon: fairygui.GLoader;
			readonly subViewContainer: fairygui.GComponent;
			readonly listTreasure: fairygui.GList;
			readonly btnLeft: Treasure.Components.BtnArrows;
			readonly btnRight: Treasure.Components.BtnArrows;
			readonly listTreasureType: fairygui.GList;
			readonly listType: fairygui.GList;
			readonly loaderTreasureType: fairygui.GLoader;
			readonly comHero: Treasure.Components.HeroBigCom;
			readonly btnSuit: UILibHero.Components.render.other.BtnHeroSuit;
			readonly groSuit: fairygui.GGroup;
			readonly busyTipBg: fairygui.GImage;
			readonly txtBusyTip: UILib.Components.fontTab.__cmpt__rq3da3tlmy;
			readonly txtStrengthen: fairygui.GTextField;
			readonly groStrengthen: fairygui.GGroup;
			readonly txtTreasure: fairygui.GTextField;
			readonly txtTreasureType: fairygui.GRichTextField;
		}, 'conOpenSel' | 'conIsNone', 't0'>;
		type TreasureBreakEndWindow = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GImage;
			readonly listAttr: fairygui.GList;
			readonly Background: fairygui.GGroup;
			readonly listRes: fairygui.GList;
			readonly fail: fairygui.GGroup;
			readonly reward: UILib.Components.renderer.RewardRender1;
			readonly loaderType: fairygui.GLoader;
			readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljo;
			readonly light1: fairygui.GLoader;
		}, 'conResult', 'success' | 'fail'>;
		type TreasureStrengthenEndWindow = StrictComponent<fairygui.GComponent, {
			readonly bg1: fairygui.GLoader;
			readonly txtStrengthenExDis: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly Background: fairygui.GGroup;
			readonly txtStrenghthenRate: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			readonly fail: fairygui.GGroup;
			readonly loaderType: fairygui.GLoader;
			readonly reward: UILib.Components.renderer.RewardRender1;
			readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljo;
			readonly light1: fairygui.GLoader;
		}, 'conIsSucceed', 'success' | 'fail'>;
		type ItemTreasureChipWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame5;
			readonly qualityCom: UILib.Components.QualityDarkCom;
			readonly itemRender: UILib.Components.renderer.RewardRender1;
			readonly btnSuit: UILibHero.Components.render.other.BtnHeroSuit;
			readonly type: fairygui.GLoader;
			readonly imgBg1: fairygui.GImage;
			readonly listBreakAttr: fairygui.GList;
			readonly groupBreak: fairygui.GGroup;
			readonly txtItemName: UILib.Components.fontTab_text.__cmpt__lrlo1no8u7o;
			readonly txtSubView: Treasure.Components.DesSubView;
			readonly txtItemNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u7c;
		}, 'conType', undefined>;
		type TreasureStrengthenSuitWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly listTreasure: fairygui.GList;
			readonly listAttr: fairygui.GList;
			readonly btnTop: UILib.Components.btnArrows.BtnArrows3;
			readonly btnBottom: UILib.Components.btnArrows.BtnArrows3;
		}, undefined, undefined>;
		type TreasureSuitSkillAniWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly skillGrap: fairygui.GGraph;
			readonly tagList: fairygui.GList;
		}, undefined, undefined>;
		namespace Views {
			type TreasureMakeSubView = StrictComponent<fairygui.GComponent, {
				readonly listAttr: fairygui.GList;
				readonly btnMakeByGold: UILib.Components.btn.Btn7;
				readonly btnMakeByTime: UILib.Components.btn.Btn6;
				readonly btnMake: UILib.Components.btn.BtnBig1;
				readonly listCost: fairygui.GList;
				readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'conIsShowTip' | 'conCanMake' | 'conShowBtn', undefined>;
			type TreasureBreakSubView = StrictComponent<fairygui.GComponent, {
				readonly listConsume: fairygui.GList;
				readonly listAttr: fairygui.GList;
				readonly btnBreakByGold: UILib.Components.btn.Btn7;
				readonly btnBreakByTime: UILib.Components.btn.Btn6;
				readonly btnItNow: UILib.Components.btn.BtnBig1;
				readonly txtTip: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly btnGoMake: UILib.Components.btn.BtnBig1;
			}, 'conIsCanBreak' | 'conIsNone', undefined>;
			type TreasureStrengthenSubView = StrictComponent<fairygui.GComponent, {
				readonly btnCost: Treasure.Components.render.TreasureMakeConsumeRender;
				readonly nextTreasure: Treasure.Components.render.TreasureRender;
				readonly strenghthenBtn: UILib.Components.btn.BtnBig4;
				readonly btnGoMake: UILib.Components.btn.BtnBig1;
				readonly arrList: fairygui.GList;
				readonly strengthenRateTxt: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly curStrenghthenLv: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly nextStrenghthenLv: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly curLv: fairygui.GTextField;
				readonly nextLv: fairygui.GTextField;
				readonly guideAttr: fairygui.GGraph;
			}, 'isNone' | 'conIsMax', undefined>;
			type TreasureDetailsInfoViewUI = StrictComponent<fairygui.GComponent, {
				readonly imgBg1: fairygui.GImage;
				readonly listBreakAttr: fairygui.GList;
				readonly groupBreak: fairygui.GGroup;
				readonly imgBg2: fairygui.GImage;
				readonly listRefineAttr: fairygui.GList;
				readonly groupRefine: fairygui.GGroup;
				readonly imgBg3: fairygui.GImage;
				readonly listStrengthenAttr: fairygui.GList;
				readonly groupStreng: fairygui.GGroup;
			}, 'conIsShow', undefined>;
			type TreasureResolveSubView = StrictComponent<fairygui.GComponent, {
				readonly listTreasure: fairygui.GList;
				readonly listReward: fairygui.GList;
				readonly imgArrowLeft: fairygui.GImage;
				readonly imgArrowRight: fairygui.GImage;
				readonly imgBg: fairygui.GImage;
				readonly reward: fairygui.GLoader;
				readonly btnResolve: UILib.Components.btn.BtnBig1;
				readonly btnCutDown: UILib.Components.btn.BtnCutDown;
				readonly btnAdd: UILib.Components.btn.BtnCutDown;
				readonly txtCount: fairygui.GTextField;
				readonly slider: UILib.Components.silder.silder_com_3;
			}, 'conIsHave', undefined>;
			type TreasureRefineSubView = StrictComponent<fairygui.GComponent, {
				readonly listRefine: fairygui.GList;
				readonly btnOk: UILib.Components.btn.BtnBig1;
				readonly btnNo: UILib.Components.btn.BtnBig2;
				readonly btnRefine: UILib.Components.btn.BtnBig4;
				readonly btnGoMake: UILib.Components.btn.BtnBig1;
				readonly btnCost: Treasure.Components.render.TreasureMakeConsumeRender;
			}, 'conRefineState' | 'conIsNone', undefined>;
		}
		namespace Components {
			type btnQuenchinSelect = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnArrows = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type HeroCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, undefined, undefined>;
			type btnGoActive = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly effectAni: fairygui.GGraph;
			}, 'button', undefined>;
			type Button1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsRight' | 'conIsCanRed', undefined>;
			type silder_com_3 = StrictComponent<fairygui.GSlider, {
				readonly bg: fairygui.GImage;
				readonly bar: fairygui.GImage;
				readonly gripBg: fairygui.GImage;
				readonly grip1: fairygui.GImage;
				readonly grip: UILib.Components.btn.BtnEmpty;
				readonly curNum: UILib.Components.fontTab.__cmpt__tr9ia3tlkw;
			}, undefined, undefined>;
			type HeroBigCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly comHead: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly loaderFrame: fairygui.GLoader;
			}, undefined, undefined>;
			type DesSubView = StrictComponent<fairygui.GComponent, {
				readonly txtDes: UILib.Components.fontTab.__cmpt__kyk1a3tljr;
			}, undefined, undefined>;
			type BtnTag = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type TreasureTypeRender = StrictComponent<fairygui.GButton, {
				readonly imgRed: fairygui.GImage;
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsShowRed', undefined>;
			type TreasureRender = StrictComponent<fairygui.GButton, {
				readonly imgSel: fairygui.GImage;
				readonly loaderIcon: fairygui.GLoader;
				readonly reward: UILib.Components.renderer.RewardRender2;
				readonly imgLock: fairygui.GImage;
				readonly comHero: Treasure.Components.HeroCom;
				readonly imgGet: fairygui.GImage;
				readonly imgRed: fairygui.GImage;
				readonly txtName: fairygui.GTextField;
				readonly txtTip: fairygui.GTextField;
				readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			}, 'button' | 'conGrayed' | 'conLock' | 'conCanMake' | 'conIsShowRed' | 'conIsHaveHero', undefined>;
			type TreasureBreakAttrSmallRender = StrictComponent<fairygui.GComponent, {
				readonly loaderQuality: fairygui.GLoader;
				readonly txtDes: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly effectAni: fairygui.GGraph;
			}, 'c1', undefined>;
			type TreasureRefineRender = StrictComponent<fairygui.GComponent, {
				readonly txtCurRefine: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly txtNextRefine: UILib.Components.fontTab.__cmpt__f73xa3tlha;
				readonly btnReset: fairygui.GLoader;
				readonly btnLock: fairygui.GLoader;
				readonly btnLock1: fairygui.GLoader;
				readonly effect: fairygui.GGraph;
			}, 'conIsLock' | 'conState', undefined>;
			type TreasureChipRender = StrictComponent<fairygui.GButton, {
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderIcon: fairygui.GLoader;
				readonly txtCount: fairygui.GTextField;
				readonly txtName: fairygui.GRichTextField;
				readonly txtSelCount: fairygui.GTextField;
			}, 'button' | 'conIsSel', undefined>;
			type TreasureRefineMainRender = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab.__cmpt__kyk1a3tljo;
			}, 'conState', undefined>;
			type TreasureBreakTipsRender = StrictComponent<fairygui.GComponent, {
				readonly loaderQuality: fairygui.GLoader;
				readonly txtContent: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, undefined, undefined>;
			type TreasureStrenghthenTipsRender = StrictComponent<fairygui.GComponent, {
				readonly txtContent: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, undefined, undefined>;
			type TreasureSuitTipsRender = StrictComponent<fairygui.GComponent, {
				readonly txtTitle: fairygui.GTextField;
				readonly txtAttr: fairygui.GRichTextField;
			}, undefined, undefined>;
			type TreasureSuitAttrRender = StrictComponent<fairygui.GComponent, {
				readonly txtAttr: fairygui.GRichTextField;
			}, 'c1', undefined>;
			type TreasureSelRender = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender2;
				readonly comHero: Treasure.Components.HeroCom;
				readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljn;
				readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			}, 'button' | 'conWear', undefined>;
			type TreasureOperationRender = StrictComponent<fairygui.GButton, {
				readonly reward: UILib.Components.renderer.RewardRender1;
				readonly txtHeroName: UILib.Components.fontTab.__cmpt__f73xa3tlhq;
				readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tljo;
				readonly txtLv: UILib.Components.fontTab.__cmpt__e9fra3tlk8;
			}, 'button', undefined>;
			type TreasureBreakAttrRender = StrictComponent<fairygui.GComponent, {
				readonly loaderQuality: fairygui.GLoader;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'c1', undefined>;
			type TreasureRefineTipsRender = StrictComponent<fairygui.GComponent, {
				readonly txtContent: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, undefined, undefined>;
			type TreasureResolveRender = StrictComponent<fairygui.GButton, {
				readonly btnTreasure: UILib.Components.renderer.RewardRender2;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type TreasureSuitAttrRender1 = StrictComponent<fairygui.GComponent, {
				readonly txtSuitName: fairygui.GRichTextField;
				readonly txtSuitAttr: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type TreasureMakeConsumeRender = StrictComponent<fairygui.GComponent, {
				readonly imgBg: fairygui.GImage;
				readonly reward: UILib.Components.renderer.RewardRender4;
				readonly txtCount: fairygui.GRichTextField;
			}, 'conEnough', undefined>;
			type consumeRender = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly graphAniBg: fairygui.GGraph;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
			}, 'conChip', undefined>;
			type TreasureFuncTypeRender = StrictComponent<fairygui.GButton, {
				readonly imgRed: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsShowRed', undefined>;
			type TreasureStrenghthenSuitRender = StrictComponent<fairygui.GButton, {
				readonly loaderIcon: fairygui.GLoader;
				readonly reward: UILib.Components.renderer.RewardRender4;
				readonly txtLv: fairygui.GTextField;
			}, undefined, undefined>;
			type TreasureStrenghthenSuitAttrRender = StrictComponent<fairygui.GButton, {
				readonly txtDes: fairygui.GRichTextField;
				readonly txtNum: fairygui.GRichTextField;
			}, undefined, undefined>;
			type TreasureRefineBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
	}
	import __pkg__fdu8byuz = Troop;
	namespace Troop {
		type TroopSpeedWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly btnSpeed2: UILib.Components.btn.BtnBig4;
			readonly btnSpeed1: UILib.Components.btn.BtnBig1;
			readonly progressTime: Troop.Components.Components.ProgressBarTime;
			readonly txtRemainTime: fairygui.GTextField;
			readonly txtNum1: fairygui.GRichTextField;
			readonly txtNum2: fairygui.GRichTextField;
		}, undefined, undefined>;
		type TroopCreateView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly loaderLine1: fairygui.GLoader;
			readonly loaderLine2: fairygui.GLoader;
			readonly loaderLogo1: fairygui.GLoader;
			readonly loaderLogo2: fairygui.GLoader;
			readonly bg1: fairygui.GLoader;
			readonly bg2: fairygui.GLoader;
			readonly loaderIcon1: fairygui.GLoader;
			readonly loaderIcon2: fairygui.GLoader;
			readonly listTroopHero: fairygui.GList;
			readonly btnCreate: UILib.Components.btn.BtnBig1;
			readonly btnSearch: UILib.Components.btn.BtnSearch;
			readonly btnFight: UILibHero.Components.fight.FightPowerBig;
			readonly progressArmyHp1: UILib.Components.progressBar.ProgressBar1;
			readonly progressArmyHp2: UILib.Components.progressBar.ProgressBar1;
			readonly txtHeroName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			readonly txtLevel: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtName1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtName2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNum1: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly txtNum2: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			readonly btnGo: UILib.Components.btn.BtnBig1;
			readonly loaderCountry: UILib.Components.countryRender.CountrySmallRender;
		}, 'conHasHero', 'FadeIn'>;
		namespace Components.Components {
			type ProgressBarTime = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBarHp = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly txtBar: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type TroopHeroRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
			}, 'button', undefined>;
			type SpeedRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
		}
	}
	import __pkg__xbc7z4wr = TwelveStars;
	namespace TwelveStars {
		type WorldTwelveStarsView = StrictComponent<fairygui.GComponent, {
			readonly skeletonView: UILibHero.Components.SkeletonView;
			readonly contentArea: UILib.Components.frame.Frame6;
			readonly troopFightSelectCom: UILib.Components.TroopFightSelectCom;
			readonly listReward: fairygui.GList;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpu;
			readonly txtCount: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlps;
			readonly txtLevel: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
			readonly txtFightPower: fairygui.GTextField;
		}, undefined, undefined>;
		type TwelveStarsView = StrictComponent<fairygui.GComponent, {
			readonly s0: fairygui.GLoader;
			readonly s1: fairygui.GLoader;
			readonly s2: fairygui.GLoader;
			readonly s3: fairygui.GLoader;
			readonly s4: fairygui.GLoader;
			readonly s5: fairygui.GLoader;
			readonly s6: fairygui.GLoader;
			readonly s7: fairygui.GLoader;
			readonly currTxt: fairygui.GRichTextField;
			readonly clearanceList: fairygui.GList;
			readonly stageBox: fairygui.GGroup;
			readonly allTxt: fairygui.GRichTextField;
			readonly allNum: fairygui.GRichTextField;
			readonly stageList: fairygui.GList;
			readonly rankNum: fairygui.GRichTextField;
			readonly rankTxt: fairygui.GRichTextField;
			readonly rankList: fairygui.GList;
			readonly BtnBox: fairygui.GGroup;
			readonly line1: fairygui.GLoader;
			readonly line2: fairygui.GLoader;
			readonly line3: fairygui.GLoader;
			readonly p1: fairygui.GLoader;
			readonly p2: fairygui.GLoader;
			readonly line4: fairygui.GLoader;
			readonly p3: fairygui.GLoader;
			readonly line5: fairygui.GLoader;
			readonly p4: fairygui.GLoader;
			readonly line6: fairygui.GLoader;
			readonly p5: fairygui.GLoader;
			readonly line7: fairygui.GLoader;
			readonly p6: fairygui.GLoader;
			readonly line8: fairygui.GLoader;
			readonly p7: fairygui.GLoader;
			readonly line9: fairygui.GLoader;
			readonly p8: fairygui.GLoader;
			readonly line10: fairygui.GLoader;
			readonly p9: fairygui.GLoader;
			readonly line11: fairygui.GLoader;
			readonly p10: fairygui.GLoader;
			readonly p11: fairygui.GLoader;
			readonly p0: fairygui.GLoader;
			readonly name0: TwelveStars.Components.TwelveStarsCityName;
			readonly name1: TwelveStars.Components.TwelveStarsCityName;
			readonly name2: TwelveStars.Components.TwelveStarsCityName;
			readonly name3: TwelveStars.Components.TwelveStarsCityName;
			readonly name4: TwelveStars.Components.TwelveStarsCityName;
			readonly name5: TwelveStars.Components.TwelveStarsCityName;
			readonly name6: TwelveStars.Components.TwelveStarsCityName;
			readonly name7: TwelveStars.Components.TwelveStarsCityName;
			readonly name8: TwelveStars.Components.TwelveStarsCityName;
			readonly name9: TwelveStars.Components.TwelveStarsCityName;
			readonly name10: TwelveStars.Components.TwelveStarsCityName;
			readonly name11: TwelveStars.Components.TwelveStarsCityName;
			readonly timeTxt: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
			readonly activityTime: UILib.Components.fontTab.__cmpt__kyk1a3tlji;
			readonly rankBtn: UILib.Components.btn.BtnEmpty;
			readonly btnOk: UILib.Components.btn.BtnEmpty;
			readonly tgTxt: fairygui.GRichTextField;
			readonly btnHelp: fairygui.GButton;
		}, 'c1', 't0' | 't1'>;
		type TwelveStarsRankWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly listRank: fairygui.GList;
			readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
		}, undefined, undefined>;
		type TwelveStarsDownWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame4;
			readonly txtDes: UILib.Components.fontTab.__cmpt__e9fra3tlk6;
			readonly btnGo: UILib.Components.btn.BtnBig3;
			readonly btnJj: UILib.Components.btn.BtnBig4;
		}, undefined, undefined>;
		namespace Components {
			type TwelveStarsRankItem = StrictComponent<fairygui.GButton, {
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
				readonly txtRanking: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly clearanceList: fairygui.GList;
				readonly rankTime: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpx;
				readonly txtName: fairygui.GRichTextField;
			}, 'con' | 'conRanking', undefined>;
			type TwelveStarsCityName = StrictComponent<fairygui.GComponent, {
				readonly cityTxt: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'c1', undefined>;
		}
	}
	import __pkg__v8r15bds = UILib;
	namespace UILib {
		namespace Components {
			type TroopFightSelectCom = StrictComponent<fairygui.GComponent, {
				readonly btnAdd: UILib.Components.btn.BtnBig1;
				readonly btnOk: UILib.Components.btn.BtnBig1;
				readonly troopList: fairygui.GList;
				readonly txtSelect: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
				readonly TxtConsume2: fairygui.GRichTextField;
				readonly TxtConsume1: fairygui.GRichTextField;
			}, 'conIsShowConsume', undefined>;
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
				readonly title: UILib.Components.fontTab.__cmpt__v5p1a3tlgz;
				readonly txtDes: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
		namespace Components.btn {
			type BtnEmpty = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
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
			type BtnBig1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnSearch = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnWindowClose = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
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
			type BtnClose1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnSmall6 = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GImage;
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GRichTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnStar = StrictComponent<fairygui.GButton, undefined, 'button' | 'conHaveStar', undefined>;
			type BtnClose2 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnClose3 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnWindowClose1 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnIcon = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnClose5 = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
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
		namespace Components.frame {
			type Frame1 = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpi;
			}, undefined, undefined>;
			type Frame4 = StrictComponent<fairygui.GButton, {
				readonly close: UILib.Components.btn.BtnWindowClose1;
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpi;
			}, undefined, undefined>;
			type Frame5 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'conIsVisibleImg', undefined>;
			type Frame6 = StrictComponent<fairygui.GButton, {
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlpi;
			}, 'conShowTitle', undefined>;
			type Frame7 = StrictComponent<fairygui.GButton, {
				readonly close: UILib.Components.btn.BtnWindowClose;
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
		namespace Components.silder {
			type silder_com_3 = StrictComponent<fairygui.GSlider, {
				readonly bg: fairygui.GImage;
				readonly bar: fairygui.GImage;
				readonly gripBg: fairygui.GImage;
				readonly grip1: UILib.Components.silder.silder_com_3_grip;
				readonly grip: UILib.Components.btn.BtnEmpty;
				readonly curNum: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, undefined, undefined>;
			type silder_com_3_grip = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
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
				readonly title: UILib.Components.fontTab_richText.__cmpt__i098a3tlph;
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
			type __cmpt__jyc6a3tlkz = StrictComponent<fairygui.GLabel, {
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
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__oeaia3tlp9;
			}, 'button', undefined>;
			type ConsumeRender = StrictComponent<fairygui.GButton, {
				readonly imgBg: fairygui.GLoader;
				readonly btnItem: UILib.Components.renderer.ConsumeMask;
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
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
			}, 'button', undefined>;
			type RewardRenderForEffect1 = StrictComponent<fairygui.GButton, {
				readonly rewardRender: UILib.Components.renderer.RewardRender1;
			}, 'button', undefined>;
			type RewardRenderForEffect2 = StrictComponent<fairygui.GButton, {
				readonly rewardRender: UILib.Components.renderer.RewardRender2;
			}, 'button', undefined>;
			type GetWayRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly btnGo: UILib.Components.btn.BtnIcon;
				readonly listHero: fairygui.GList;
				readonly txtName: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly txtTip: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
				readonly yyTxt: fairygui.GTextField;
				readonly numTxt: fairygui.GTextField;
			}, 'conShowHero' | 'conOpen' | 'conBtnIcon' | 'numCon', undefined>;
			type RewardRenderForEffect3 = StrictComponent<fairygui.GButton, {
				readonly rewardRender: UILib.Components.renderer.RewardRender3;
			}, 'button', undefined>;
		}
		namespace Components.selectBtn {
			type SelectBtn = StrictComponent<fairygui.GComponent, undefined, undefined, 'loop' | 'select'>;
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
		namespace Components.btnSpecial {
			type BtnRecharge = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnBuy = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', undefined>;
			type BtnGoToRecharge = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type BtnOrang = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly icon: fairygui.GLoader;
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
			type __cmpt__lrlo1no8u7m = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__lrlo1no8u7n = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__lrlo1no8u7o = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__fdx41no8u7v = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__fdx41no8u7w = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type __cmpt__fdx41no8u7x = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GTextField;
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
			type __cmpt__fdx41no8u7p = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__fdx41no8u7q = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__fdx41no8u7r = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__fdx41no8u7s = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__fdx41no8u7t = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type __cmpt__fdx41no8u7u = StrictComponent<fairygui.GLabel, {
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
		}
	}
	
	
	
	import __pkg__6nrj9u2x = UILibHero;
	namespace UILibHero {
		namespace Components {
			type SkeletonView = StrictComponent<fairygui.GComponent, {
				readonly skeletonHoldor: fairygui.GGraph;
				readonly touchLayer: fairygui.GGraph;
			}, undefined, undefined>;
			type SkeletonDeviationView = StrictComponent<fairygui.GComponent, {
				readonly skeletonView: UILibHero.Components.SkeletonView;
			}, undefined, undefined>;
		}
		namespace Components.fight {
			type FightPowerBig = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type FightPowerRecommendSmall = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type FightPowerSmall = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type FightPowerRecommendBig = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type FightPowerRecommendSmallBig = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.render {
			type HeroTroopRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: UILibHero.Components.render.other.HerohalfMaskCom;
				readonly titleBg: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderQuality: fairygui.GLoader;
				readonly lvBg: fairygui.GLoader;
				readonly loaderHeroType: fairygui.GLoader;
				readonly graphAniAwake: fairygui.GGraph;
				readonly graphAniQuality: fairygui.GGraph;
				readonly listStar: fairygui.GList;
				readonly txtLv: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conQuality' | 'conAwake', undefined>;
			type HeroMultipleChoiceRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly progressFront: UILibHero.Components.render.other.ProgressArmy;
				readonly progressBack: UILibHero.Components.render.other.ProgressArmy;
				readonly blackBg: fairygui.GImage;
			}, 'conIsNotFight' | 'button', undefined>;
			type HeroMultipleChoiceTroopRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly progressFront: UILibHero.Components.render.other.ProgressArmy;
				readonly progressBack: UILibHero.Components.render.other.ProgressArmy;
				readonly blackBg: fairygui.GImage;
				readonly StatusTxt: fairygui.GRichTextField;
			}, 'conIsNotFight' | 'button' | 'conIsFight', undefined>;
		}
		namespace Components.render.other {
			type HeroViewStarRender = StrictComponent<fairygui.GComponent, undefined, 'conStarColor' | 'conIsGray', undefined>;
			type ProgressArmy_H = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly txtMaxCount: fairygui.GTextField;
				readonly txtCurCount: fairygui.GTextField;
				readonly title: fairygui.GRichTextField;
			}, undefined, undefined>;
			type HerohalfMaskCom = StrictComponent<fairygui.GComponent, {
				readonly heroRes: fairygui.GLoader;
			}, undefined, undefined>;
			type HeroSkillSmallRender = StrictComponent<fairygui.GComponent, {
				readonly loaderIcon: fairygui.GLoader;
				readonly loaderHeroSkillLogo: fairygui.GLoader;
				readonly loaderArmyTalentLogo: fairygui.GLoader;
				readonly txtLv: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
			}, 'conType', undefined>;
			type BtnHeroSuit = StrictComponent<fairygui.GButton, {
				readonly bgLoader: fairygui.GLoader;
				readonly titleLoader: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
			}, undefined, undefined>;
			type BtnTreasureStrengthSuit = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type HeroEffectStarRender = StrictComponent<fairygui.GComponent, undefined, 'conStarColor' | 'conIsGray', undefined>;
			type ProgressArmy = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly bar1: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
				readonly txtMaxCount: fairygui.GTextField;
				readonly txtCurCount: fairygui.GTextField;
			}, 'c1', undefined>;
			type HeroDesRender = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly txtDes: fairygui.GRichTextField;
			}, 'button', undefined>;
		}
		namespace Components.render.headRender {
			type HeroHeadRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly loaderRoleFrame: fairygui.GLoader;
				readonly graphAni: fairygui.GGraph;
				readonly redPoint: fairygui.GImage;
				readonly loaderLvQuality: fairygui.GLoader;
				readonly txtName: UILib.Components.fontTab.__cmpt__kyk1a3tlju;
				readonly txtLv: fairygui.GTextField;
			}, 'hasLvState' | 'conIsAwaken' | 'conShowName' | 'conShoweffect' | 'conType' | 'conIsRed' | 'isHeroFrame', undefined>;
			type MaskCircleRender = StrictComponent<fairygui.GComponent, {
				readonly comHead: UILibHero.Components.render.headRender.MaskCricleCom;
			}, 'conIsAwaken', undefined>;
			type HeroQualityHeadRender = StrictComponent<fairygui.GComponent, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
			}, undefined, undefined>;
			type MaskCricleCom = StrictComponent<fairygui.GComponent, {
				readonly loaderHead: fairygui.GLoader;
			}, undefined, undefined>;
		}
		namespace Components.render.dragHeroRender {
			type DragHeroRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly fightLv: UILibHero.Components.fight.FightPowerBig;
				readonly txtLv: fairygui.GTextField;
			}, 'button' | 'conIsEmpty', undefined>;
			type DragTroopHeroRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.dragHeroRender.DragChoiceRender;
				readonly txtOpenCondition: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpq;
				readonly imgAdd: fairygui.GImage;
				readonly blackBg: fairygui.GImage;
				readonly tips: fairygui.GRichTextField;
			}, 'conIsLimit' | 'conIsEmpty' | 'conIsAdd' | 'viceState', undefined>;
			type DragChoiceRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly progressFront: UILibHero.Components.render.other.ProgressArmy;
				readonly progressBack: UILibHero.Components.render.other.ProgressArmy;
				readonly blackBg: fairygui.GImage;
			}, 'conIsNotFight' | 'button', undefined>;
			type DragHeroSmallRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly fightLv: UILibHero.Components.fight.FightPowerBig;
				readonly txtLv: fairygui.GTextField;
			}, 'button' | 'conIsEmpty', undefined>;
			type NewDragTroopHeroRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly heroRes: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly heroQuality: fairygui.GLoader;
				readonly graphAniQuality: fairygui.GGraph;
				readonly graphAniAwake: fairygui.GGraph;
				readonly starList: fairygui.GList;
				readonly txtLv: fairygui.GTextField;
				readonly txtName: fairygui.GTextField;
				readonly fightLv: UILibHero.Components.fight.FightPowerBig;
			}, 'conQuality' | 'conAwake' | 'state', undefined>;
		}
		namespace Components.render.cityHeroRender {
			type CityGoHeroRender = StrictComponent<fairygui.GButton, {
				readonly heroRender: UILibHero.Components.render.HeroTroopRender;
				readonly loaderCurCity: fairygui.GLoader;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly loaderDis: fairygui.GLoader;
				readonly progressFront: UILibHero.Components.render.other.ProgressArmy;
				readonly progressBack: UILibHero.Components.render.other.ProgressArmy;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly txtEnoughLv: UILib.Components.fontTab_richText.__cmpt__m8naa3tlqw;
				readonly txtCity: fairygui.GRichTextField;
				readonly txtState: fairygui.GRichTextField;
				readonly txtTip2: fairygui.GTextField;
				readonly txtTip: fairygui.GTextField;
			}, 'button' | 'conIsNoRoad' | 'conIsCurCity' | 'conDis' | 'conShowTip' | 'conState', undefined>;
			type CityFightHeroRender = StrictComponent<fairygui.GButton, {
				readonly comHero: UILibHero.Components.render.HeroTroopRender;
				readonly loaderFrontArmy: fairygui.GLoader;
				readonly loaderBackArmy: fairygui.GLoader;
				readonly btnFight: UILibHero.Components.fight.FightPowerBig;
				readonly progressFront: UILibHero.Components.render.other.ProgressArmy;
				readonly progressBack: UILibHero.Components.render.other.ProgressArmy;
				readonly StatusTxt: fairygui.GRichTextField;
				readonly txtCity: fairygui.GRichTextField;
				readonly txtIdel: fairygui.GTextField;
			}, 'button' | 'conIsShowArrow', undefined>;
			type HeroBusyTimeRender = StrictComponent<fairygui.GComponent, {
				readonly txtTime: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__sfrc8tc8 = WarMarks;
	namespace WarMarks {
		type WarMarksView = StrictComponent<fairygui.GComponent, {
			readonly topLoader: fairygui.GLoader;
			readonly txtLoader: fairygui.GLoader;
			readonly rewardView: WarMarks.WarMarksSubView;
			readonly taskView: WarMarks.WarMarksTaskSubView;
			readonly heroGraph: fairygui.GGraph;
			readonly btnBuy: UILib.Components.btnAct.BtnAct2;
			readonly btnBuyExp: WarMarks.Components.WarMarksBuyExpBtn;
			readonly btnOneKey: UILib.Components.btnAct.BtnAct2;
			readonly btnRightReward: WarMarks.Components.WarMarksRightRewardBtn;
			readonly btnLeftReward: WarMarks.Components.WarMarksRightRewardBtn;
			readonly btnAllReward: WarMarks.Components.WarMarksRightRewardBtn;
			readonly btnReward: WarMarks.Components.WarMarksTabBtn;
			readonly btnDailyTask: WarMarks.Components.WarMarksTabBtn1;
			readonly levelCom: WarMarks.Components.LevelCom;
			readonly receiveGroup: fairygui.GGroup;
			readonly lvEffect: fairygui.GGraph;
			readonly btnOneKeyEffectAni: fairygui.GGraph;
			readonly txtLv: fairygui.GTextField;
			readonly timeStr: fairygui.GTextField;
			readonly txtExp: fairygui.GTextField;
		}, 'conIsType' | 'activeState', 't0'>;
		type WarMarksSubView = StrictComponent<fairygui.GComponent, {
			readonly listReward: fairygui.GList;
			readonly warMarksRender: WarMarks.Components.WarMarksPreRender;
			readonly preGroup: fairygui.GGroup;
		}, 'conIsMax', undefined>;
		type WarMarksTaskSubView = StrictComponent<fairygui.GComponent, {
			readonly listDailyTask: fairygui.GList;
			readonly listSessionTask: fairygui.GList;
		}, 'conState', undefined>;
		type WarMarksShopSubView = StrictComponent<fairygui.GComponent, {
			readonly loaderMoney: fairygui.GLoader;
			readonly listShop: fairygui.GList;
			readonly txtMoney: fairygui.GRichTextField;
		}, undefined, undefined>;
		type WarMarksBuyExpWindow = StrictComponent<fairygui.GComponent, {
			readonly contentArea: UILib.Components.frame.Frame1;
			readonly titleBg: fairygui.GLoader;
			readonly titleLoader: fairygui.GLoader;
			readonly leftLoader: fairygui.GLoader;
			readonly rightLoader: fairygui.GLoader;
			readonly levelLoader: fairygui.GLoader;
			readonly buyBtn: UILib.Components.btn.BtnBig1;
			readonly rewardRender: UILib.Components.renderer.ConsumeRender;
			readonly reduceAdd: WarMarks.Components.WarMarksExpAdd;
			readonly addBtn: WarMarks.Components.WarMarksExpAdd;
			readonly sliderBar: UILib.Components.silder.silder_com_3;
			readonly curLevel: fairygui.GRichTextField;
			readonly nextLevel: fairygui.GRichTextField;
			readonly level: fairygui.GRichTextField;
			readonly explain: fairygui.GRichTextField;
		}, undefined, undefined>;
		type WarMarksRewardWindow = StrictComponent<fairygui.GComponent, {
			readonly arrowImage0: fairygui.GImage;
			readonly arrowImage1: fairygui.GImage;
			readonly allRewardList: fairygui.GList;
			readonly curRewardList: fairygui.GList;
			readonly btnBuy: UILib.Components.btnAct.BtnAct2;
			readonly title: UILib.Components.fontTab.__cmpt__v5p1a3tlh4;
		}, 'activeState', undefined>;
		namespace Components {
			type WarMarksRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly bg2: fairygui.GLoader;
				readonly advanceLoader: UILib.Components.btn.BtnEmpty;
				readonly listCommon: fairygui.GList;
				readonly listAdvance: fairygui.GList;
				readonly btnCommon: UILib.Components.btn.BtnEmpty;
				readonly btnAdvance: UILib.Components.btn.BtnEmpty;
				readonly lvEffect: fairygui.GGraph;
				readonly txtLv: fairygui.GTextField;
			}, 'button' | 'lvState' | 'seniorState' | 'lvStateNext', undefined>;
			type WarMarksItemRender = StrictComponent<fairygui.GButton, {
				readonly item: UILib.Components.renderer.RewardRender2;
			}, 'button' | 'conIsLock' | 'conIsState', undefined>;
			type WarMarksTaskRender = StrictComponent<fairygui.GComponent, {
				readonly bg: fairygui.GLoader;
				readonly progressRata: UILib.Components.proBar.ProgressBar1;
				readonly btnGet: UILib.Components.btn.BtnSmall2;
				readonly btnReceive: UILib.Components.btn.BtnSmall4;
				readonly expReward: UILib.Components.renderer.RewardRender4;
				readonly rewardList: fairygui.GList;
				readonly txtName: fairygui.GTextField;
				readonly txtTask: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpw;
			}, 'conState' | 'posState', undefined>;
			type WarMarksBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
				readonly title: fairygui.GRichTextField;
			}, 'button', undefined>;
			type WarMarksShopRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly item: UILib.Components.renderer.RewardRender3;
				readonly loaderMoney: fairygui.GLoader;
				readonly btnBuy: WarMarks.Components.WarMarksBuyBtn;
				readonly txtLimit: fairygui.GTextField;
				readonly txtMoney: UILib.Components.fontTab.__cmpt__v5p1a3tlh3;
				readonly itemName: UILib.Components.fontTab.__cmpt__f73xa3tlha;
			}, 'finshSate', undefined>;
			type WarMarksExpRender = StrictComponent<fairygui.GButton, {
				readonly iconQuality: fairygui.GLoader;
				readonly imgIcon: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly txtCount: fairygui.GRichTextField;
			}, undefined, undefined>;
			type WarMarksReceiveBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly effectAni: fairygui.GGraph;
			}, 'button', undefined>;
			type WarMarksBuyBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button', undefined>;
			type WarMarksPreRender = StrictComponent<fairygui.GButton, {
				readonly bg: fairygui.GLoader;
				readonly listCommon: fairygui.GList;
				readonly listAdvance: fairygui.GList;
				readonly lvEffect: fairygui.GGraph;
				readonly txtLv: fairygui.GTextField;
			}, 'seniorState' | 'conIsOpen', undefined>;
			type WarMarksExpAdd = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type WarMarksBuyExpBtn = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type WarMarksTabBtn = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsShowRed', undefined>;
			type WarMarksTabBtn1 = StrictComponent<fairygui.GButton, {
				readonly redPoint: fairygui.GImage;
			}, 'button' | 'conIsShowRed', undefined>;
			type WarMarksRewardBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly effect: fairygui.GImage;
				readonly loaderReward: fairygui.GLoader;
			}, 'button', 't0'>;
			type WarMarksLeftRewardBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type WarMarksRightRewardBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type WarMarkActTabRender = StrictComponent<fairygui.GButton, {
				readonly iconLoader: fairygui.GLoader;
				readonly redPoint: fairygui.GImage;
				readonly iconUp: fairygui.GLoader;
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type circleProgressCom = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type LevelCom = StrictComponent<fairygui.GButton, {
				readonly circleProgressCom: WarMarks.Components.circleProgressCom;
			}, 'conRed', undefined>;
			type rewardRender = StrictComponent<fairygui.GComponent, {
				readonly rewardRender: UILib.Components.renderer.RewardRender4;
				readonly maskLoader: fairygui.GImage;
				readonly maskLoader2: fairygui.GImage;
				readonly cReceive: fairygui.GImage;
			}, 'lvState' | 'seniorState' | 'conIsGet', undefined>;
		}
	}
	import __pkg__3nw7ql0x = Weather;
	namespace Weather {
		type CommonLight = StrictComponent<fairygui.GComponent, undefined, undefined, 'Light'>;
	}
	import __pkg__fg0edpzv = WorldCity;
	namespace WorldCity {
		type WorldCityUI = StrictComponent<fairygui.GComponent, {
			readonly emptyCom: fairygui.GGraph;
			readonly loaderCountryBg: fairygui.GLoader;
			readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
			readonly meCity: fairygui.GImage;
		}, 'conIsFortress', undefined>;
		type WorldCityText = StrictComponent<fairygui.GComponent, {
			readonly txtCity: fairygui.GTextField;
			readonly txtName: fairygui.GTextField;
		}, undefined, undefined>;
		type WorldExpeditionUI = StrictComponent<fairygui.GComponent, {
			readonly proTime: WorldCity.Components.ProgressBarChip;
		}, 'conShowTime', undefined>;
		type WorldEstateText = StrictComponent<fairygui.GComponent, {
			readonly txtLv: fairygui.GTextField;
		}, undefined, undefined>;
		type WorldNPCUI = StrictComponent<fairygui.GComponent, {
			readonly emptyCom: fairygui.GGraph;
			readonly imgTextBg: fairygui.GLoader;
			readonly imgBgFrame: fairygui.GLoader;
			readonly npcHead: WorldCity.Components.worldNpc.BubbleSquareCom;
			readonly graphEffect: fairygui.GGraph;
			readonly imgFinish: fairygui.GImage;
			readonly proBlood: WorldCity.Components.ProgressBarChip1;
			readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
			readonly btnEmpty: UILib.Components.btn.BtnEmpty;
			readonly graphFightEffect: fairygui.GGraph;
			readonly groupUI: fairygui.GGroup;
		}, 'conShowType' | 'conNpcType' | 'conBgColor' | 'fanbangCL' | 'conIsLangText', undefined>;
		type WorldEstateBubble = StrictComponent<fairygui.GComponent, {
			readonly btnIcon: WorldCity.Components.BtnBubble;
			readonly loaderIcon: fairygui.GLoader;
			readonly operationGro: fairygui.GGroup;
			readonly txtEstateNum: fairygui.GTextField;
		}, 'conIsOperation' | 'conRed' | 'conIsCanGet', 'transMinqing'>;
		type WorldExpeditionText = StrictComponent<fairygui.GComponent, {
			readonly txtTime: fairygui.GTextField;
		}, 'conShowTime', undefined>;
		type WorldExpedtionLineView = StrictComponent<fairygui.GComponent, {
			readonly imgArrow: fairygui.GImage;
		}, undefined, undefined>;
		type WorldNPCText = StrictComponent<fairygui.GComponent, {
			readonly txtNpcName: fairygui.GTextField;
			readonly txtItemNum: fairygui.GTextField;
			readonly groupUI: fairygui.GGroup;
		}, 'conShowType' | 'conIsShowVal' | 'conIsLangText', undefined>;
		namespace SecretRoad {
			type SecretRoadText = StrictComponent<fairygui.GComponent, {
				readonly txtName: fairygui.GTextField;
				readonly txtSecretRoadNum: fairygui.GTextField;
			}, undefined, undefined>;
		}
		namespace Components {
			type BtnBuildingFunc = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsFight', 'unfold' | 'away' | 'donateTip'>;
			type CityFuncView = StrictComponent<fairygui.GComponent, {
				readonly fightInfoCom: WorldCity.Components.CityFighInfoView;
				readonly listBtnFunc1: fairygui.GList;
				readonly defArmyNum: fairygui.GRichTextField;
				readonly groTitle: fairygui.GGroup;
				readonly listBtnFunc: fairygui.GList;
				readonly groBottom: fairygui.GGroup;
				readonly btnShare: WorldCity.Components.BtnShare;
				readonly prefectBtn: WorldCity.Components.BtnBuildingFunc2;
				readonly btnCountryToken: WorldCity.Components.BtnToken;
			}, 'showFuncCtr' | 'conIsCity' | 'conIsFight', 'bottomUnfold' | 'bottomAway' | 'share' | 'share1' | 'guard1' | 'guard2'>;
			type CityTroopRender = StrictComponent<fairygui.GButton, {
				readonly loaderBg: fairygui.GLoader;
				readonly loaderFrame: fairygui.GLoader;
				readonly heroHeadLoader: fairygui.GLoader;
				readonly progressHp: WorldCity.Components.ProgressBar1;
				readonly imgAwake: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
			}, 'conIsRed', undefined>;
			type WorldHeroHead = StrictComponent<fairygui.GComponent, {
				readonly heroHeadLoader: fairygui.GLoader;
			}, 'conIsGray', undefined>;
			type CityTokenRender = StrictComponent<fairygui.GComponent, {
				readonly graphAni: fairygui.GGraph;
			}, 'button', undefined>;
			type WorldInteriorBtn = StrictComponent<fairygui.GButton, {
				readonly iconCom: WorldCity.Components.WorldHeroHeadCom;
				readonly redPoint: fairygui.GImage;
			}, 'conType' | 'conIsFinish' | 'conIsEvent', undefined>;
			type CityFighInfoView = StrictComponent<fairygui.GComponent, {
				readonly loaderAtt: fairygui.GLoader;
				readonly loaderDef: fairygui.GLoader;
				readonly sliderFight: WorldCity.Components.ProgressBar2;
				readonly loaderDefFlag: UILib.Components.countryRender.CountrySmallRender;
				readonly loaderAttFlag: UILib.Components.countryRender.CountrySmallRender;
				readonly textAtt: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly textDef: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, undefined, undefined>;
			type ProgressBar2 = StrictComponent<fairygui.GProgressBar, {
				readonly baratt: fairygui.GLoader;
				readonly bar: fairygui.GLoader;
				readonly grip: fairygui.GLoader;
			}, undefined, undefined>;
			type ProgressBarChip = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type ProgressBar3 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, undefined, undefined>;
			type BtnArrow = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type BtnCityTower = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type WorldHeroHeadCom = StrictComponent<fairygui.GComponent, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type WorldMinqingCom = StrictComponent<fairygui.GComponent, {
				readonly loaderMinqing: fairygui.GLoader;
				readonly loaderMinqing1: fairygui.GLoader;
			}, 'conState' | 'conIsGray', 't0'>;
			type WorldMinqingItemCom = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, undefined, undefined>;
			type WorldPtaskCom = StrictComponent<fairygui.GComponent, {
				readonly iconCom: fairygui.GLoader;
			}, 'conFinish', 't0'>;
			type BtnBuildingFunc1 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsShowTip', 'donateTip' | 'unfold' | 'away'>;
			type CityTokenCom = StrictComponent<fairygui.GComponent, {
				readonly listToken: fairygui.GList;
				readonly graphAniArmy: fairygui.GGraph;
			}, undefined, undefined>;
			type BtnBubble = StrictComponent<fairygui.GButton, {
				readonly headRender: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly loaderItem: fairygui.GLoader;
			}, 'button' | 'conState', undefined>;
			type CityExpeditionCom = StrictComponent<fairygui.GComponent, {
				readonly effectDown: fairygui.GGraph;
				readonly effect: fairygui.GGraph;
			}, undefined, undefined>;
			type BtnShare = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
			type CountryBattleState = StrictComponent<fairygui.GComponent, {
				readonly txtGold: fairygui.GTextField;
				readonly txtTaxSliver: fairygui.GTextField;
				readonly txtTaxGrain: fairygui.GTextField;
				readonly txtDes: UILib.Components.fontTab.__cmpt__f73xa3tlhy;
				readonly btnPlunder: UILib.Components.btn.BtnEmpty;
				readonly btnOrdnance: UILib.Components.btn.BtnEmpty;
			}, 'conIsPlunder' | 'conIsOrdnance' | 'conIsShowGold' | 'conState', undefined>;
			type BtnConstruct = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
			type WorldJingzhouCom = StrictComponent<fairygui.GComponent, {
				readonly iconCom: fairygui.GImage;
			}, undefined, undefined>;
			type FixedNoticeView = StrictComponent<fairygui.GComponent, {
				readonly bg1: fairygui.GImage;
				readonly title1: fairygui.GRichTextField;
			}, undefined, undefined>;
			type GoldCityCom = StrictComponent<fairygui.GComponent, {
				readonly loaderGoldCity: fairygui.GLoader;
			}, undefined, undefined>;
			type CountryBattleQiuState = StrictComponent<fairygui.GComponent, {
				readonly rewardIcon: fairygui.GLoader;
				readonly btnState: UILib.Components.btn.BtnEmpty;
				readonly txtNum: UILib.Components.fontTab_text.__cmpt__qmdq1no8u6q;
				readonly txtDes: fairygui.GRichTextField;
			}, 'conState' | 'conState2', undefined>;
			type BtnBuildingFunc2 = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsFight', 'unfold' | 'away' | 'donateTip'>;
			type BtnToken = StrictComponent<fairygui.GButton, undefined, 'button', 'unfold' | 'away'>;
			type WorldCityUprisingUI = StrictComponent<fairygui.GComponent, {
				readonly txtTime: fairygui.GTextField;
				readonly txtTime2: fairygui.GTextField;
				readonly loaderCountry: UILib.Components.countryRender.CountryCityRender;
			}, 'conState', undefined>;
			type WorldcityInspireUI = StrictComponent<fairygui.GComponent, {
				readonly inspireBtn: WorldCity.Components.worldInspire.BtnWorldInspire;
			}, undefined, undefined>;
			type CityStable = StrictComponent<fairygui.GComponent, {
				readonly numTxt: UILib.Components.fontTab_richText.__cmpt__dr9ba3tlpv;
			}, undefined, 'in' | 't1'>;
			type ProgressBarBoss = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
			type ProgressBarTreasure = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GLoader;
			}, 'conIsHave', undefined>;
			type ProgressBarChip1 = StrictComponent<fairygui.GProgressBar, {
				readonly bar: fairygui.GImage;
			}, 'conIsHave', undefined>;
		}
		namespace WolrdTreasure {
			type WorldTreasureBubble = StrictComponent<fairygui.GComponent, {
				readonly btnIcon: WorldCity.Components.BtnBubble;
				readonly loaderIcon: fairygui.GLoader;
				readonly operationGro: fairygui.GGroup;
				readonly txtEstateNum: fairygui.GTextField;
			}, 'conIsOperation' | 'conRed' | 'conIsCanGet', 'transMinqing'>;
			type WorldTreasureText = StrictComponent<fairygui.GComponent, {
				readonly txtNpcName: fairygui.GTextField;
				readonly txtItemNum: fairygui.GTextField;
			}, undefined, undefined>;
			type WorldTreasureUI = StrictComponent<fairygui.GComponent, {
				readonly imgTextBg: fairygui.GLoader;
				readonly imgBgFrame: fairygui.GLoader;
				readonly proBlood: WorldCity.Components.ProgressBarTreasure;
				readonly npcHead: WorldCity.Components.worldNpc.BubbleSquareCom;
				readonly graphAni: fairygui.GGraph;
			}, 'conQuality', undefined>;
		}
		namespace Components.worldNpc {
			type WorldNpcBubble = StrictComponent<fairygui.GComponent, {
				readonly comCirc: WorldCity.Components.worldNpc.BubbleSquareCom;
				readonly comSquare: WorldCity.Components.worldNpc.BubbleCircCom;
				readonly txtName: fairygui.GTextField;
			}, 'conType' | 'conIsFinish', undefined>;
			type BubbleSquareCom = StrictComponent<fairygui.GComponent, {
				readonly item: fairygui.GLoader;
			}, undefined, undefined>;
			type BubbleCircCom = StrictComponent<fairygui.GComponent, {
				readonly item: fairygui.GLoader;
			}, undefined, undefined>;
		}
		namespace Components.worldMap {
			type WorldMapCom = StrictComponent<fairygui.GComponent, {
				readonly imgWorldMapBg: fairygui.GLoader;
				readonly mapBtn: UILib.Components.btn.BtnEmpty;
				readonly imgBox: fairygui.GImage;
			}, undefined, undefined>;
			type WorldMapScreenCom = StrictComponent<fairygui.GComponent, {
				readonly loaderBig: fairygui.GLoader;
				readonly loaderSmall: fairygui.GLoader;
				readonly loaderIcon2: fairygui.GLoader;
				readonly imgTarget: fairygui.GImage;
				readonly loaderIcon: fairygui.GLoader;
				readonly btnGoto: UILib.Components.btn.BtnEmpty;
				readonly txtHeroName: fairygui.GTextField;
			}, 'conType' | 'conIsGray' | 'conShilian' | 'conIsFinishRune', 'traSnake'>;
			type WorldMapCityCom = StrictComponent<fairygui.GComponent, {
				readonly loaderCity: fairygui.GLoader;
				readonly imgBg: fairygui.GImage;
				readonly txtName1: fairygui.GTextField;
				readonly txtName2: fairygui.GTextField;
				readonly txtName3: fairygui.GTextField;
			}, 'conType', undefined>;
			type CountryQqbyCityCom = StrictComponent<fairygui.GComponent, undefined, 'conIsShow', undefined>;
		}
		namespace Components.worldRune {
			type WorldRuneCom = StrictComponent<fairygui.GComponent, {
				readonly loaderRune: fairygui.GLoader;
				readonly proHp: WorldCity.Components.ProgressBarBoss;
				readonly btnCountry: UILib.Components.countryRender.CountrySmallRender;
				readonly loaderFinish: fairygui.GLoader;
			}, 'conIsFinish' | 'conIsTarget', undefined>;
			type WorldBossCom = StrictComponent<fairygui.GComponent, {
				readonly listBoss: fairygui.GList;
				readonly loaderTips: fairygui.GLoader;
			}, 'conIsMain', undefined>;
			type WorldBossRender = StrictComponent<fairygui.GComponent, {
				readonly comHead: WorldCity.Components.worldRune.WorldBossRenderCom;
			}, 'conIsFight', undefined>;
			type ProgressBarCircle = StrictComponent<fairygui.GProgressBar, {
				readonly proBar: WorldCity.Components.worldRune.ProgressBar;
				readonly title: UILib.Components.fontTab.__cmpt__kyk1a3tljm;
			}, undefined, undefined>;
			type WorldBossFightEffect = StrictComponent<fairygui.GComponent, undefined, 'conIsFight', undefined>;
			type ProgressBar = StrictComponent<fairygui.GComponent, {
				readonly bar: fairygui.GImage;
				readonly maskGraph: fairygui.GGraph;
			}, undefined, undefined>;
			type WorldCityTipsCom = StrictComponent<fairygui.GComponent, {
				readonly comLock: WorldCity.Components.worldRune.WorldCityLockTipsCom;
			}, 'conIsLock', undefined>;
			type WorldCityLockTipsCom = StrictComponent<fairygui.GComponent, undefined, undefined, 't0'>;
			type WorldBossRenderCom = StrictComponent<fairygui.GComponent, {
				readonly heroHead: UILibHero.Components.render.headRender.MaskCircleRender;
				readonly proHp: WorldCity.Components.ProgressBarBoss;
				readonly btnCountry: UILib.Components.countryRender.CountrySmallRender;
			}, undefined, undefined>;
		}
		namespace SecretRoad.Components {
			type SecretFuncView = StrictComponent<fairygui.GComponent, {
				readonly lineCom0: WorldCity.SecretRoad.Components.SecretRoadPointCom;
				readonly lineCom1: WorldCity.SecretRoad.Components.SecretRoadPointCom;
				readonly lineCom2: WorldCity.SecretRoad.Components.SecretRoadPointCom;
				readonly lineCom3: WorldCity.SecretRoad.Components.SecretRoadPointCom;
				readonly listBtnFunc: fairygui.GList;
				readonly groBottom: fairygui.GGroup;
				readonly btnBack: WorldCity.SecretRoad.Components.BtnSecretRoadBack;
				readonly txtOpenTip: UILib.Components.fontTab.__cmpt__rq3da3tlmx;
			}, 'conShowTip', 'bottomUnfold' | 'bottomAway'>;
			type SecretRoadBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
				readonly title: fairygui.GTextField;
			}, 'button' | 'conIsGray', 'unfold' | 'away'>;
			type SecretRoadPointCom = StrictComponent<fairygui.GComponent, {
				readonly proPoint: WorldCity.SecretRoad.Components.ProgressBar;
				readonly proPoint1: WorldCity.SecretRoad.Components.ProgressBar1;
			}, 'conType', 't0'>;
			type ProgressBar = StrictComponent<fairygui.GProgressBar, {
				readonly loaderLine: fairygui.GLoader;
				readonly bar: fairygui.GGraph;
			}, 'conType', undefined>;
			type ProgressBar1 = StrictComponent<fairygui.GProgressBar, {
				readonly loaderLine: fairygui.GLoader;
				readonly bar: fairygui.GGraph;
			}, 'conType', undefined>;
			type SecretFuncNewView = StrictComponent<fairygui.GComponent, {
				readonly listBtnFunc: fairygui.GList;
				readonly txtCountry: fairygui.GRichTextField;
				readonly btnBack: WorldCity.SecretRoad.Components.BtnSecretRoadBack;
				readonly groBottom: fairygui.GGroup;
				readonly txtOpenTip: UILib.Components.fontTab.__cmpt__rq3da3tlmx;
			}, 'conShowTip', 'bottomUnfold' | 'bottomAway'>;
			type BtnSecretRoadBack = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
		namespace Components.worldInspire {
			type BtnWorldInspire = StrictComponent<fairygui.GButton, undefined, 'button', undefined>;
		}
		namespace Components.cityFightEffect {
			type CityFightEffectCom = StrictComponent<fairygui.GComponent, undefined, undefined, 'fightEffect'>;
			type CityFightBeginEffectCom = StrictComponent<fairygui.GComponent, {
				readonly imgFight: fairygui.GImage;
				readonly imgCreate: fairygui.GImage;
			}, undefined, 'beginEffect' | 'createEffect'>;
		}
	}
	import __pkg__xc6zj3in = WorldMap;
	namespace WorldMap {
		type WorldMapWindow = StrictComponent<fairygui.GComponent, {
			readonly mapView: fairygui.GComponent;
			readonly loaderMapBg: fairygui.GLoader;
			readonly listFunc: fairygui.GList;
			readonly imgMinqingBg: fairygui.GImage;
			readonly listMinqing: fairygui.GList;
			readonly comJingzhouTask: WorldMap.Components.JingzhouTaskCom;
		}, 'conState' | 'conIsCanMinqing', undefined>;
		type WorldMapMobileView = StrictComponent<fairygui.GComponent, {
			readonly mapView: fairygui.GComponent;
			readonly loaderMapBg: fairygui.GLoader;
			readonly listFunc: fairygui.GList;
			readonly imgMinqingBg: fairygui.GImage;
			readonly listMinqing: fairygui.GList;
			readonly comJingzhouTask: WorldMap.Components.JingzhouTaskCom;
		}, 'conIsCanMinqing', undefined>;
		namespace Components {
			type WorldMapBtn = StrictComponent<fairygui.GButton, {
				readonly loaderUp: fairygui.GLoader;
				readonly loaderDown: fairygui.GLoader;
				readonly loaderTextUp: fairygui.GLoader;
				readonly loaderTextDown: fairygui.GLoader;
			}, 'button' | 'conIsLock', undefined>;
			type WorldMapMinqingBtn = StrictComponent<fairygui.GButton, {
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
			type JingzhouTaskCom = StrictComponent<fairygui.GComponent, {
				readonly btnRune: UILib.Components.btn.BtnSmall2;
				readonly btnJingzou: UILib.Components.btn.BtnSmall2;
				readonly txtRuneDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
				readonly txtJingzhouDesc: UILib.Components.fontTab.__cmpt__v5p1a3tlh0;
			}, 'conFinishRune' | 'conFinishJingzhou', undefined>;
		}
	}
	import __pkg__e6wzrm6v = YellowBaggage;
	namespace YellowBaggage {
		type YellowScarfWindow = StrictComponent<fairygui.GComponent, {
			readonly lqBtn: UILib.Components.btn.BtnBig4;
			readonly listReward: fairygui.GList;
			readonly titleTxt: UILib.Components.fontTab_richText.__cmpt__lj961no8tzi;
			readonly listCity: fairygui.GList;
			readonly close: UILib.Components.btn.BtnWindowClose;
			readonly djsTime: UILib.Components.fontTab_richText.__cmpt__m8naa3tlqw;
			readonly sendBtn: UILib.Components.btnAct.BtnAct5;
			readonly tipsBtn: fairygui.GButton;
		}, 'stateCon', undefined>;
		namespace Render {
			type CityItemRender = StrictComponent<fairygui.GButton, {
				readonly cityShape: fairygui.GGraph;
				readonly cityName: fairygui.GTextField;
			}, undefined, undefined>;
			type YellowBtn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GImage;
				readonly title: fairygui.GTextField;
			}, 'button', undefined>;
		}
	}
	import __pkg__fot96pam = YuLongRecharge;
	namespace YuLongRecharge {
		type YuLongRechargeSubView = StrictComponent<fairygui.GComponent, {
			readonly bg: fairygui.GLoader;
			readonly bgText: fairygui.GLoader;
			readonly arrow: fairygui.GImage;
			readonly listRecharge: fairygui.GList;
			readonly effectUp: fairygui.GGraph;
			readonly effectDown: fairygui.GGraph;
			readonly heroGraph: fairygui.GGraph;
			readonly skillYLBtn: fairygui.GLoader;
			readonly txtNum: fairygui.GTextField;
			readonly txtTime: fairygui.GTextField;
		}, undefined, undefined>;
		namespace Components {
			type YuLongRechargeRender = StrictComponent<fairygui.GComponent, {
				readonly progressNum: UILib.Components.progressBar.ProgressBar4;
				readonly btnGet: UILib.Components.btnAct.BtnAct5;
				readonly btnGoto: UILib.Components.btnAct.BtnAct6;
				readonly firstReward: UILib.Components.renderer.RewardRenderForEffect1;
				readonly listReward: fairygui.GList;
				readonly txtMoney: fairygui.GTextField;
				readonly targetValue: fairygui.GTextField;
			}, 'conState', undefined>;
			type Btn = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button', undefined>;
		}
	}
	
	
}
