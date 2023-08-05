//=============================================================================
// Tatsu_BlackJack.js
// 内容：ブラックジャックをプレイするためのプラグインです。
// 製作者：タツノコ
// バージョン：Ver1.0.2
//=============================================================================
/*:
 * @target MZ
 * @plugindesc ブラックジャックのプラグイン
 * @author タツノコ
 * 
 * @help Tatsu_BlackJack.js
 * @command start
 * @text ブラックジャックの開始
 * @desc ブラックジャックを開始します。
 * 
 * @arg arg1
 * @text 難易度
 * @desc 難易度(EASY/NORMAL/HARD)
 * 
 * @param coinVariable
 * @text コイン枚数保持用変数番号
 * @desc コイン枚数保持用変数番号
 * @type variable
 * 
 * @param reapeatMode
 * @text リピートモード有効化スイッチ
 * @desc 最初に選択したBET枚数を続けて再度BETしたいモードで起動するスイッチ
 * @type switch
 * @default 0
 * 
 * @param trumpFolderName
 * @text トランプの画像が入ったフォルダ名
 * @desc トランプの画像が入ったフォルダ名（タツノコの他のトランププラグインで使っている画像をそのまま参照したい場合に変更してください）
 * @type string
 * @default tBlackJack
 * 
 * @param backgroundImage
 * @text 背景画像ファイル設定
 * @desc 利用したい背景画像を設定してください。
 * @type String
 * @default background
 * 
 * @param betCoinList
 * @text BETする際に選択ができるコインの枚数
 * @desc BETする際に選択ができるコインの枚数(最大3行)
 * @type Number[]
 * @default ["1","10","100"]
 * 
 * @param useBGM
 * @text ゲームBGM鳴動設定
 * @desc ゲームプレイ中に設定した専用のBGMを流すかを設定することができます。
 * @type Boolean
 * @on 専用BGMを流す
 * @off 専用BGMを流さない
 * @default false
 * 
 * @param backBGM
 * @text ゲームBGM設定
 * @desc ゲームプレイ中に流したい専用のBGMのファイル名を入力してください。
 * @type String
 * @default bgm_kajino
 * 
 * @param winSe
 * @text 勝利したときに流したいSE
 * @desc 勝利したときに流したいSEのファイル名を入力してください。
 * @type String
 * @default seWin
 * 
 * @param loseSe
 * @text 負けたときに流したいSE
 * @desc 負けたときに流したいファイル名を入力してください。
 * @type String
 * @default seLose
 * 
 * @param burstSe
 * @text バーストした時に流したいSE
 * @desc バーストした時に流したいファイル名を入力してください。
 * @type String
 * @default seBurst
 * 
 * @param drawSe
 * @text 引き分けの時に流したいSE
 * @desc 引き分けたときに流したいSEのファイル名を入力してください。
 * @type String
 * @default seDraw
 * 
 * @param blackJackSe
 * @text ブラックジャックが揃って勝った時のSE
 * @desc ブラックジャックが揃って勝った時のSEのファイル名を入力してください。
 * @type String
 * @default seBlackJack
 * 
 * @param sixCardSe
 * @text シックスカードが揃って勝った時のSE
 * @desc シックスカードが揃って勝った時のSEのファイル名を入力してください。
 * @type String
 * @default seSixCard
 * 
 * @param modeInfoStruct
 * @text 難易度による勝った時の配当倍率
 * @desc 難易度による勝った時の配当倍率（変更したい場合にお使いください）
 * @type struct<ModeInfo>[]
 * @default ["{\"difficulty\":\"EASY\",\"magni\":\"1.5\"}","{\"difficulty\":\"NORMAL\",\"magni\":\"2.0\"}","{\"difficulty\":\"HARD\",\"magni\":\"3.0\"}"]
 * 
 * @param roleInfoStruct
 * @text 役が上がれた時の追加の配当倍率
 * @desc 役が上がれた時の追加の配当倍率（変更したい場合にお使いください）
 * @type struct<RoleInfo>[]
 * @default ["{\"role\":\"ブラックジャック \",\"magni\":\"2.0\"}","{\"role\":\"シックスカード\",\"magni\":\"3.0\"}"]
 * 
 * @param windowPosition
 * @text -> 各種ウィンドウの位置情報 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param nowCoinPosX
 * @text 手持ちコインの表示ウィンドウのX座標
 * @desc 手持ちコインの表示ウィンドウのX座標
 * @type number
 * @default 23
 * @parent windowPosition
 * 
 * @param nowCoinPosY
 * @text 手持ちコインの表示ウィンドウのY座標
 * @desc 手持ちコインの表示ウィンドウのY座標
 * @type number
 * @default 542
 * @parent windowPosition
 * 
 * @param nowCoinWindowWidth
 * @text 手持ちコインの表示ウィンドウの幅
 * @desc 手持ちコインの表示ウィンドウの幅
 * @type number
 * @default 235
 * @parent windowPosition
 * 
 * @param nowCoinPosHeight
 * @text 手持ちコインの表示ウィンドウの高さ
 * @desc 手持ちコインの表示ウィンドウの高さ
 * @type number
 * @default 70
 * @parent windowPosition
 * 
 * @param betCoinPosX
 * @text BETコインの表示ウィンドウのX座標
 * @desc BETコインの表示ウィンドウのX座標
 * @type number
 * @default 565
 * @parent windowPosition
 * 
 * @param betCoinPosY
 * @text BETコインの表示ウィンドウのY座標
 * @desc BETコインの表示ウィンドウのY座標
 * @type number
 * @default 542
 * @parent windowPosition
 * 
 * @param betCoinWindowWidth
 * @text BETコインの表示ウィンドウの幅
 * @desc BETコインの表示ウィンドウの幅
 * @type number
 * @default 235
 * @parent windowPosition
 * 
 * @param betCoinPosHeight
 * @text BETコインの表示ウィンドウの高さ
 * @desc BETコインの表示ウィンドウの高さ
 * @type number
 * @default 70
 * @parent windowPosition
 * 
 * @param betCoinListWindowWidth
 * @text BETコイン枚数選択ウィンドウの幅
 * @desc BETコイン枚数選択ウィンドウの幅
 * @type number
 * @default 100
 * @parent windowPosition
 * 
 * @param betCoinListWindowHeight
 * @text BETコイン枚数選択ウィンドウの高さ
 * @desc BETコイン枚数選択ウィンドウの高さ
 * @type number
 * @default 145
 * @parent windowPosition
 * 
 * @param actionWindowXpos
 * @text アクション確認ウィンドウのX座標
 * @desc ヒット/スタンド/ダブルダウンを確認するウィンドウのX座標
 * @type number
 * @default 10
 * @parent windowPosition
 * 
 * @param actionWindowYpos
 * @text アクション確認ウィンドウのY座標
 * @desc ヒット/スタンド/ダブルダウンを確認するウィンドウのY座標
 * @type number
 * @default 350
 * @parent windowPosition
 * 
 * @param actionWindowWidth
 * @text アクション確認ウィンドウの幅
 * @desc ヒット/スタンド/ダブルダウンを確認するウィンドウの幅
 * @type number
 * @default 210
 * @parent windowPosition
 * 
 * @param actionWindowHeight
 * @text アクション確認ウィンドウの高さ
 * @desc ヒット/スタンド/ダブルダウンを確認するウィンドウの高さ
 * @type number
 * @default 145
 * @parent windowPosition
 * 
 * @param yesNoWindowWidth
 * @text はい/いいえ選択ウィンドウの幅
 * @desc はい/いいえ選択ウィンドウの幅
 * @type number
 * @default 120
 * @parent windowPosition
 * 
 * @param yesNoWindowHeight
 * @text はい/いいえ選択ウィンドウの高さ
 * @desc はい/いいえ選択ウィンドウの高さ
 * @type number
 * @default 110
 * @parent windowPosition
 * 
 * @param numWindowXpos
 * @text 自分の手札の合計値を表示するウィンドウのX座標
 * @desc 自分の手札の合計値を表示するウィンドウのX座標
 * 自動で設定する場合は「-1」を入力してください。
 * @type number
 * @default -1
 * @parent windowPosition
 * 
 * @param numWindowYpos
 * @text 自分の手札の合計値を表示するウィンドウのY座標
 * @desc 自分の手札の合計値を表示するウィンドウのX座標
 * 自動で設定する場合は「-1」を入力してください。
 * @type number
 * @default -1
 * @parent windowPosition
 * 
 * @param enemyNumWindowXpos
 * @text 相手の手札の合計値を表示するウィンドウのX座標
 * @desc 相手の手札の合計値を表示するウィンドウのX座標
 * 自動で設定する場合は「-1」を入力してください。
 * @type number
 * @default -1
 * @parent windowPosition
 * 
 * @param enemyNumWindowYpos
 * @text 相手の手札の合計値を表示するウィンドウのY座標
 * @desc 相手の手札の合計値を表示するウィンドウのY座標
 * 自動で設定する場合は「-1」を入力してください。
 * @type number
 * @default -1
 * @parent windowPosition
 * 
 * @param languageInfo
 * @text -> メッセージ関連の情報（他言語化向け） <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param actionLanguageList
 * @text アクションの種類
 * @desc アクションの種類の言語を変更したい場合にお使いください
 * 1行目：ヒット、2行目、スタンド、3行目ダブルダウン
 * @type String[]
 * @default ["ヒット","スタンド","ダブルダウン"]
 * @parent languageInfo
 * 
 * @param betInfoStr
 * @text BET時の説明文
 * @desc BET時の説明文
 * @type String
 * @default BET枚数を選んでください
 * @parent languageInfo
 * 
 * @param winMessage1
 * @text 勝利時メッセージ1
 * @desc 勝利時に1行目に表示するメッセージです。
 * @type String
 * @default YOU WIN!!%d枚獲得です!
 * @parent languageInfo
 * 
 * @param notCoinMessage
 * @text コインが足りない時用のメッセージ
 * @desc コインが足りない時用のメッセージです。
 * @type String
 * @default コインが足りません
 * @parent languageInfo
 * 
 * @param loseMessage2
 * @text 勝利時・敗北時次プレイを確認するときの共通メッセージ
 * @desc 勝利時に1行目、敗北時に2行目に表示するメッセージ
 * @type String
 * @default 続けてブラックジャックを行いますか？
 * @parent languageInfo
 * 
 * @param yesLanguage
 * @text はい/いいえ選択肢の「はい」の文言
 * @desc はい/いいえ選択肢の「はい」の文言
 * @type String
 * @default はい
 * @parent languageInfo
 * 
 * @param noLanguage
 * @text はい/いいえ選択肢の「いいえ」の文言
 * @desc はい/いいえ選択肢の「いいえ」の文言
 * @type String
 * @default いいえ
 * @parent languageInfo
 * 
 * @help
 *-----------------------------------------------------------------------------
 * 概要
 *-----------------------------------------------------------------------------
 * 本プラグインは、ゲーム内にてブラックジャックゲームを実装するプラグインです。
 * 
 * 【プラグインインストール方法】
 *   1.解凍後、出来上がった以下のフォルダを所定の位置に配置してください
 *     1-1.audio/bgm/bgm_kajino.ogg
 *     配置場所※1：RPGツクールのプロジェクト/audio/bgm/
 *
 *     1-2.audio/se/seWin.ogg
 *         audio/se/seLose.ogg
 *         audio/se/seDraw.ogg
 *         audio/se/seBurst.ogg
 *         audio/se/seBlackJack.ogg
 *         audio/se/seSixCard.ogg
 *         audio/se/slide.ogg
 *     配置場所※1：RPGツクールのプロジェクト/audio/se/
 *     ※slide.oggのみプラグインパラメータからの変更は不可能です（カードを引く時のSE）
 *      
 * 
 *
 *     1-3.jsファイルの配置場所
 *     配置場所：js/plugins
 *
 *     1-4.画像ファイルの配置場所
 *     配置場所：img/tBlackJack
 *     配置場所※1：RPGツクールのプロジェクト/img/の直下に「tBlackJack」フォルダごと配置してください
 *     ※トランプ画像に限りプラグインパラメータにて、画像の参照先を変えられます。
 * 
 * 【プラグイン設定方法】
 *    1.RPGツクールMV(RPGツクールMZ)を起動
 *    2.メニュー画面より、「プラグイン管理」を選択
 *    3.プラグイン管理画面にて「Tatsu_BlackJack」を追加後、「有効」に設定
 *    4.プラグインパラメータのコイン枚数保持用変数の設定をしてください
 * 
 * 【プラグイン呼び出し方法】
 *    ・イベントの「プラグインコマンド」に以下を入力
 *      RPGツクールMVの場合
 *        Tatsu_BlackJack start 難易度
 *
 *      RPGツクールMZの場合
 *        プラグイン名：Tatsu_BlackJack
 *        コマンド名：ブラックジャックの開始
 *        引数：「・引数の説明」にて記述
 *
 *    ・引数の説明
 *     ・難易度（必須項目）：「EASY」「NORMAL」「HARD」
 *      （相手の手札の数字による思考確率と勝った時の配当倍率が変わります）
 * 
 * 【プラグインパラメータの説明】
 *   1.コイン枚数保持用変数番号
 *     所持コインを保持する変数
 *     必ず設定をしてください。
 * 
 *   2.リピートモード有効化スイッチ
 *     最初に選択したBET枚数を続けて自動BETする機能を有効化するためのスイッチです。
 *     スイッチがONになっている状態でゲームを開始した場合、
 *     最初の一回で選択したBET枚数が次ゲーム以降自動BETされます
 *
 *   3.トランプの画像が入ったフォルダ名
 *     トランプの画像が入ったフォルダ名
 *     既存のタツノコの作ったトランプ画像を使いたい場合、または他のフォルダに
 *     スイッチがONになっている状態でゲームを開始した場合、
 *     最初の一回で選択したBET枚数が次ゲーム以降自動BETされます。
 *
 *   4.背景画像ファイル設定
 *     利用したい背景画像のファイル名を指定してください
 *
 *   5.BETする際に選択ができるコインの枚数
 *     BETする際に選択ができるコインの枚数をリストで設定してください
 *
 *   6.ゲームBGM鳴動設定
 *     ゲームプレイ中に設定した専用のBGMを流すかを設定することができます
 *     true : 専用BGMを流す
 *     false: 専用BGMを流さない
 *
 *   7.ゲームBGM設定
 *     ゲームプレイ中に流したい専用のBGMのファイル名を入力してください
 *     ※専用BGMを使わない場合は、空で大丈夫です
 *
 *   8.勝利したときに流したいSE
 *     勝利したときに流したいSEのファイル名を入力してください
 *
 *   9.負けたときに流したいSE
 *     勝利したときに流したいSEのファイル名を入力してください
 *
 *   10.バーストした時に流したいSE
 *     バーストした時に流したいSEのファイル名を入力してください
 *
 *   11.引き分けの時に流したいSE
 *     バーストした時に流したいSEのファイル名を入力してください
 *
 *   12.ブラックジャックが揃って勝った時のSE
 *     ブラックジャックが揃って勝った時のSEのファイル名を入力してください
 *
 *   13.シックスカードが揃って勝った時のSE
 *     シックスカードが揃って勝った時のSEのファイル名を入力してください
 *
 *   14.難易度による勝った時の配当倍率
 *     難易度による勝った時の配当倍率を設定してください
 *      ※EASY〜HARDのリストの順番は変更しないでください
 *
 *   15.役が上がれた時の追加の配当倍率
 *     ブラックジャックまたはシックスカードが上がれた時の追加の配当倍率
 *      ※リストの順番は変更しないでください
 *
 *   ----ここから下はゲーム画面サイズを変更した場合の設定です----
 *
 *   16.手持ちコインの表示ウィンドウのX座標
 *     左下に表示される手持ちコインのウィンドウのX座標
 * 
 *   17.手持ちコインの表示ウィンドウのY座標
 *     左下に表示される手持ちコインのウィンドウのY座標
 * 
 *   18.手持ちコインの表示ウィンドウの幅
 *     左下に表示される手持ちコインのウィンドウの幅
 * 
 *   19.手持ちコインの表示ウィンドウの高さ
 *     左下に表示される手持ちコインのウィンドウの高さ
 * 
 *   20.BETコインの表示ウィンドウのX座標
 *     右下に表示されるBETコインのウィンドウのX座標
 * 
 *   21.BETコインの表示ウィンドウのY座標
 *     右下に表示されるBETコインのウィンドウのY座標
 * 
 *   22.BETコインの表示ウィンドウの幅
 *     右下に表示されるBETコインのウィンドウの幅
 * 
 *   23.BETコインの表示ウィンドウの高さ
 *     右下に表示されるBETコインのウィンドウの高さ
 * 
 *   24.BETコイン枚数選択ウィンドウの幅
 *    コインをBETする時に表示される選択肢ウィンドウの幅
 * 
 *   25.BETコイン枚数選択ウィンドウの高さ
 *    コインをBETする時に表示される選択肢ウィンドウの高さ
 * 
 *   26.アクション確認ウィンドウのX座標
 *    「ヒット/スタンド/ダブルダウン」の選択ウィンドウのX座標
 * 
 *   27.アクション確認ウィンドウのY座標
 *    「ヒット/スタンド/ダブルダウン」の選択ウィンドウのY座標
 * 
 *   28.アクション確認ウィンドウの幅
 *    「ヒット/スタンド/ダブルダウン」の選択ウィンドウの幅
 * 
 *   29.アクション確認ウィンドウの高さ
 *    「ヒット/スタンド/ダブルダウン」の選択ウィンドウの高さ
 * 
 *   30.はい/いいえ選択ウィンドウの幅
 *    「はい/いいえ」の選択ウィンドウの幅
 * 
 *   31.はい/いいえ選択ウィンドウの高さ
 *    「はい/いいえ」の選択ウィンドウの高さ
 * 
 *   32.自分の手札の合計値を表示するウィンドウのX座標
 *    自分の手札の合計値を表示するウィンドウのX座標
 *    ※自動で位置調整をしたい場合は「-1」を入力してください
 * 
 *   33.自分の手札の合計値を表示するウィンドウのY座標
 *    自分の手札の合計値を表示するウィンドウのY座標
 *    ※自動で位置調整をしたい場合は「-1」を入力してください
 * 
 *   34.相手の手札の合計値を表示するウィンドウのY座標
 *    相手の手札の合計値を表示するウィンドウのY座標
 *    ※自動で位置調整をしたい場合は「-1」を入力してください
 * 
 *   35.相手の手札の合計値を表示するウィンドウのX座標
 *    相手の手札の合計値を表示するウィンドウのX座標
 *    ※自動で位置調整をしたい場合は「-1」を入力してください
 * 
 * ----ここからは言語関連の設定になります。表示されている言語を別言語にしたい場合
 *
 *   36.アクションの種類
 *    「ヒット/スタンド/ダブルダウン」を別の言葉に置き換えたい場合にご利用ください
 *    ※リスト順番は変更しないでくださいにご利用してください----
 *
 *   37.BET時の説明文
 *     ※別添えの添付画像(1番の項目)にて該当箇所を説明
 * 
 *   38.勝利時メッセージ1
 *     コインを入力したい場合は文字列に「%d」を入れてください
 *     ※別添えの添付画像(2番の項目)にて該当箇所を説明
 *
 *   39.コインが足りない時用のメッセージ
 *     ※別添えの添付画像(3番の項目)にて該当箇所を説明
 *
 *   40.勝利時・敗北時次プレイを確認するときの共通メッセージ
 *     ※別添えの添付画像(4番の項目)にて該当箇所を説明
 *
 *   41.はい/いいえ選択肢の「はい」の文言
 *     ※別添えの添付画像(5番の項目)にて該当箇所を説明
 *
 *   42.はい/いいえ選択肢の「いいえ」の文言
 *     ※別添えの添付画像(6番の項目)にて該当箇所を説明
 * 
 * 【ルール】
 *   ・ブラックジャック 
 *    1.BET枚数を選択してください
 *    2.手札にカードが配られます
 *    3.ヒット(もう一枚引く)/スタンド(引かない)/ダブルダウン(BETした枚数を上乗せして一度だけ引く)を選択してください
 *    4.ヒットを繰り返して数字が22以上になった場合は、相手の手札に関係なく「バースト」となり負けになります
 *    5.スタンドのボタンを押すかシックスカードになった場合、相手が手札を引くターンになります
 *    6.相手がカードを引き終わったら自動で勝負が開始されます
 *    7.カードの合計値が21に近いプレイヤーの勝ちになります
 *    8.役は「ブラックジャック」「シックスカード」を採用しております
 *    9.役で上がった場合、通常の倍率に加えて、役に応じた倍率が上乗せされます
 * 
 * 【操作方法】
 *    ・十字キーを使う場合
 *      ↑キー : カーソルの移動
 *      ↓キー : カーソルの移動
 *      決定キー : 選択肢の決定
 * 
 *    ・マウスを使う場合
 *      選択肢のみに利用できます
 * 
 *-----------------------------------------------------------------------------
 * 変更履歴
 *-----------------------------------------------------------------------------
 * 
 * Ver 1.0.0 初版
 * Ver 1.0.1 選択肢ウィンドウの高さのデフォルト値を微調整
 *           難易度EASYの難易度調整
 * Ver 1.0.2 不要なパラメータの削除
 *
 *-----------------------------------------------------------------------------
 *-----------------------------------------------------------------------------
 * 素材著作権
 *-----------------------------------------------------------------------------
 * 
 * 【デフォルトで使用している音楽、および効果音】
 * 　->魔王魂樣
 * 【URL】
 * 　->https://maoudamashii.jokersounds.com/
 * 
 *
 * 【トランプ素材/背景画像】
 * 　->タツノコ
 * 【URL】
 * 　-> https://layerprogram.com/
 * 
 *-----------------------------------------------------------------------------
 * スペシャルサンクス
 *-----------------------------------------------------------------------------
 * 
 * ことりっぽ
 * aya
 * 
 *-----------------------------------------------------------------------------
 * その他利用規約
 *-----------------------------------------------------------------------------
 * その他利用規約については添付の「readme.txt」をご覧ください。
 *
 */

/*~struct~ModeInfo:
 * @param difficulty
 * @text 難易度
 * @desc 難易度
 * @type text
 * 
 * @param magni
 * @text 倍率
 * @desc 倍率
 * @decimals 1
 * @type Number
*/

/*~struct~RoleInfo:
 * @param role
 * @text 役
 * @desc 役
 * @type text
 * 
 * @param magni
 * @text 倍率
 * @desc 倍率
 * @decimals 1
 * @type Number
*/


(function(){

    'use strict';

    // データクラス周り
    function CardInfo (){
        this.initialize.apply(this,arguments);
    };

    CardInfo.prototype.initialize = function(sprite, num, mark, isOpen) {
        this._sprite = sprite;
        if (isOpen) {
            this._sprite.setFrame(0,320*6,200,320);
        } else{
            this._sprite.setFrame(0,0,200,320);
        }
        this._num = num;
        this._mark = mark;
        this._isOpen = isOpen;
        this._isHand = false;
        this._isFinish = false;
    };

    CardInfo.prototype.getSprite = function() {
        return this._sprite;
    };

    CardInfo.prototype.getImgWidth = function() {
        return this._sprite.width;
    };

    CardInfo.prototype.getImgHeight = function() {
        return this._sprite.height;
    };

    CardInfo.prototype.getMark = function() {
        return this._mark;
    };

    CardInfo.prototype.getNum = function() {
        return this._num;
    };

    CardInfo.prototype.getMarkNum = function() {
        return this._mark + this._num;
    };

    CardInfo.prototype.getIsOpen = function() {
        return this._isOpen;
    };

    CardInfo.prototype.setIsOpen = function(isOpen) {
        this._isOpen = isOpen;
    };

    CardInfo.prototype.setIsHand = function(isHand) {
        return this._isHand;
    };

    CardInfo.prototype.getIsHand = function() {
        return this._isHand;
    };

    CardInfo.prototype.getInitFinish = function() {
        return this._initFinish;
    };

    CardInfo.prototype.setInitFinish = function(isFinish) {
        this._initFinish = isFinish;
    };

    CardInfo.prototype.open = function() {
        this._isOpen = true;
        this._sprite.setFrame(0,320*6,200,320);
    };

    CardInfo.prototype.close = function() {
        this._isOpen = false;
        this._sprite.setFrame(0,0,200,320);
    };
    //

    // ==CONST周り-start==================================================
    const TATSU_BLACKJACK_PLUGIN_NAME = 'Tatsu_BlackJack';
    const TURN_FADEIN = 'faein';
    const TURN_NOTCOIN = 'notCoin';
    const TURN_SELECTBET = 'selectBet';
    const TURN_REPEATBET = "repeatBet";
    const TURN_DISTRIBUTE = 'distribute';
    const TURN_DISTRIBUTE_ANIMATION = 'distributeAnimation';
    const TURN_ACTION = 'action';
    const TURN_HIT = "hit";
    const TURN_STAND = "stand";
    const TURN_DOUBLEDOWN = "doubledown";
    const TURN_DRAW_ANIMATION = "drawAnimation";
    const TURN_ENEMYDRAW_ANIMATION = "enemyDrawAnimation";
    const TURN_ACTION_CHECK = "actionCheck";
    const TURN_ENEMYACTION_CHECK = "enemyActionCheck";
    const TURN_BURST_ANIMARION = "burstAnimation";
    const TURN_NUMCHECK = "numCheck";
    const TURN_ENEMY_ACTION = "enemyAction";
    const TURN_NUMCHECKANIMATION = "numCheckAnimation";
    const TURN_RESULT_ANIMATION = "resultAnimation";
    const TURN_NEXT_CONFIRM = "nextConfirm";
    const TURN_INIT = 'init';
    const TURN_START = 'start';

    const SELECT_ACTION_HIT_INDEX = 0;
    const SELECT_ACTION_STAND_INDEX = 1;
    const SELECT_ACTION_DOUBLEDOWN_INDEX = 2;

    const ROLE_BURST = -1;
    const ROLE_NORMAL = 0;
    const ROLE_BLACKJACK = 1;
    const ROLE_SIX_CARD = 2;

    const STR_WIN = "win";
    const STR_LOSE = "lose";
    const STR_SIX_CARD = "sixCard";
    const STR_DRAW = "draw";
    const STR_BLACK_JACK = "blackJack";
    const STR_BURST = "burst";

    const ROLE_LEVEL_NORMAL = 0;
    const ROLE_LEVEL_BLACKJACK = 1;
    const ROLE_LEVEL_SIXCARD = 2;

    const RESULT_LOSE = -1;
    const RESULT_DRAW = 0;
    const RESULT_WIN = 1;

    const TATSU_BLACKJACK_MSG_KAKEKINWO = "BET枚数を選んでください";
    const TATSU_BLACKJACK_MSG_WINMESSA1 = "YOU WIN!!コイン%d枚獲得です!!";
    const TATSU_BLACKJACK_MSG_WINMESSA2 = "続けてブラックジャックを行いますか？";
    const TATSU_BLACKJACK_MSG_NOTCOIN = "コインが足りません";

    const TATSU_BLACKJACK_MSG_LOSE_MESSAGE2 = "続けてブラックジャックを行いますか？";

    const MODE_EASY = "EASY";
    const MODE_NORMAL = "NORMAL";
    const MODE_HARD = "HARD";

    // 難易度の確率
    const MODE_EASY_PROBABILITY = {
        1:100,
        2:100,
        3:100,
        4:100,
        5:100,
        6:100,
        7:100,
        8:100,
        9:100,
        10:100,
        11:100,
        12:100,
        13:100,
        14:100,
        15:100,
        16:100,
        17:100,
        18:30,
        19:30,
        20:10,
        21:5
    };

    const MODE_NORMAL_PROBABILITY = {
        1:100,
        2:100,
        3:100,
        4:100,
        5:100,
        6:100,
        7:100,
        8:100,
        9:100,
        10:100,
        11:100,
        12:100,
        13:100,
        14:100,
        15:100,
        16:100,
        17:30,
        18:30,
        19:10,
        20:10,
        21:0
    };

    const MODE_HARD_PROBABILITY = {
        1:100,
        2:100,
        3:100,
        4:100,
        5:100,
        6:100,
        7:100,
        8:100,
        9:100,
        10:100,
        11:100,
        12:100,
        13:100,
        14:100,
        15:50,
        16:50,
        17:50,
        18:30,
        19:0,
        20:0,
        21:0
    };
    // ==CONST周り-end==================================================

    // ==プラグインパラメータ周り-start==================================================
    let getArgJson = function(arg, defaultValue) {
        try {
            arg = JSON.parse(arg || null);
            if (arg === null) {
                arg = defaultValue;
            }
        } catch (e) {
            alert(`!!!Plugin param is wrong.!!!\nPlugin:${TATSU_BLACKJACK_PLUGIN_NAME}.js\nValue:${arg}`);
            arg = defaultValue;
        }
        return arg;
    };

    let listObjectGetJson = function(parameter){
        if (parameter == undefined || parameter == null) {
            return null;
        }

        var paramReplacer = function(key, value) {
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        };
        let parse1 = JSON.parse(parameter);
        let parse2 = JSON.stringify(parse1,paramReplacer);
        let parse3 = JSON.parse(parse2);
        return parse3;
    };

    let isRpgMakerMV = function(){
        return (Utils.RPGMAKER_NAME == "MV");
    };

    var parameterNotNull = function(){
        var para = null;
        if (isRpgMakerMV()) {
            para = PluginManager.parameters(TATSU_BLACKJACK_PLUGIN_NAME);
        } else {
            var para = PluginManager.parameters(decodeURIComponent(document.currentScript.src).match(/^.*\/js\/plugins\/(.+)\.js$/)[1]);
            if (!para["nowCoinPosX"]) {
                para = PluginManager.parameters(TATSU_BLACKJACK_PLUGIN_NAME);
            }
        }
        return para;
    };

    function getWindowMessage(){
        let wm = null;
        if (isRpgMakerMV()) {
            wm = new Window_Message();
        } else {
            wm = new Window_Message(getWindowMessageRect());
            wm.setGoldWindow(new Window_Gold(getdummyWindowRect()));
            wm.setNameBoxWindow(new Window_NameBox());
            wm.setChoiceListWindow(new Window_ChoiceList());
            wm.setNumberInputWindow(new Window_NumberInput());
            wm.setEventItemWindow(new Window_EventItem(getdummyWindowRect()));
        }

        return wm;
    };
    
    function getWindowMessageRect(){
        var rect = new Rectangle();
        var width = Graphics.boxWidth;
        var height = 4*36+18;
        var x = (Graphics.boxWidth - width) / 2;
        rect.x = x;
        rect.y = Graphics.boxHeight - height;
        rect.width = width;
        rect.height = height;
        return rect;
    };
    
    function getWindowBaseRect(x,y,width,height){
        if (isRpgMakerMV()) {
            return new Window_Base(x,y,width,height);
        } else {
            return new Window_Base(getdummyWindowRectParameter(x,y,width,height));
        }
    };
    
    function getdummyWindowRectParameter(x,y,width,height){
        var rect = new Rectangle();
        rect.x = x;
        rect.y = y;
        rect.width = width;
        rect.height = height;
        return rect;
    };

    function getdummyWindowRect(){
        var rect = new Rectangle();
        var width = 1;
        var height = 1;
        rect.x = 0;
        rect.y = 0;
        rect.width = width;
        rect.height = height;
        return rect;
    };

    function getCenterPos(arg1width,arg2width){
        return (arg1width/2) - (arg2width/2)
    };

    function playBGM(){
        $gameSystem.saveBgm();
        AudioManager.fadeOutBgm(1);
        AudioManager.playBgm({"name":TatsuBlackJackGameP.backBGM,"volume":80,"pitch":100,"pan":0});
    };

    function globalPlaySe(seName){
        AudioManager.playSe({"name":seName,"volume":80,"pitch":100,"pan":0});
    };

    function playCardSe(){
        globalPlaySe("slide");
    };

    function winSe(){
        globalPlaySe(TatsuBlackJackGameP.winSe);
    };

    function loseSe(){
        globalPlaySe(TatsuBlackJackGameP.loseSe);
    };

    function blackJackSe(){
        globalPlaySe(TatsuBlackJackGameP.blackJackSe);
    };

    function sixCardSe(){
        globalPlaySe(TatsuBlackJackGameP.sixCardSe);
    };

    function drawSe(){
        globalPlaySe(TatsuBlackJackGameP.drawSe);
    };

    function burstSe(){
        globalPlaySe(TatsuBlackJackGameP.burstSe);
    };

    function stopBGM(){
        if (TatsuBlackJackGameP.useBGM) {
            AudioManager.fadeOutBgm(1);
            $gameSystem.replayBgm();
        }
    };

    var TatsuBlackJackGameP = TatsuBlackJackGameP || {};
    var parameters = parameterNotNull();
    TatsuBlackJackGameP.coinVariable = Number(parameters['coinVariable'] || 0);
    TatsuBlackJackGameP.modeInfoStruct = listObjectGetJson(parameters['modeInfoStruct']);
    TatsuBlackJackGameP.roleInfoStruct = listObjectGetJson(parameters['roleInfoStruct']);
    
    TatsuBlackJackGameP.notCoinMessage = String(parameters['notCoinMessage'] || TATSU_BLACKJACK_MSG_NOTCOIN);
    
    TatsuBlackJackGameP.trumpFolderName = String(parameters['trumpFolderName'] || 'tBlackJack');
    TatsuBlackJackGameP.backgroundImage = String(parameters['backgroundImage'] || null);

    TatsuBlackJackGameP.nowCoinPosX = Number(parameters['nowCoinPosX'] || 23);
    TatsuBlackJackGameP.nowCoinPosY = Number(parameters['nowCoinPosY'] || 542);
    TatsuBlackJackGameP.nowCoinWindowWidth = Number(parameters['nowCoinWindowWidth'] || 235);
    TatsuBlackJackGameP.nowCoinPosHeight = Number(parameters['nowCoinPosHeight'] || 70);

    TatsuBlackJackGameP.betCoinPosX = Number(parameters['betCoinPosX'] || 565);
    TatsuBlackJackGameP.betCoinPosY = Number(parameters['betCoinPosY'] || 542);
    TatsuBlackJackGameP.betCoinWindowWidth = Number(parameters['betCoinWindowWidth'] || 235);
    TatsuBlackJackGameP.betCoinPosHeight = Number(parameters['betCoinPosHeight'] || 70);
    
    TatsuBlackJackGameP.betCoinList = getArgJson(parameters['betCoinList'] || [1,10,100]);
    TatsuBlackJackGameP.betCoinListWindowWidth = Number(parameters['betCoinListWindowWidth'] || 100);
    TatsuBlackJackGameP.betCoinListWindowHeight = Number(parameters['betCoinListWindowHeight'] || 150);

    TatsuBlackJackGameP.actionWindowXpos = Number(parameters['actionWindowXpos'] || 10);
    TatsuBlackJackGameP.actionWindowYpos = Number(parameters['actionWindowYpos'] || 400);
    TatsuBlackJackGameP.actionWindowHeight = Number(parameters['actionWindowHeight'] || 180);
    TatsuBlackJackGameP.actionWindowWidth = Number(parameters['actionWindowWidth'] || 120);
    
    TatsuBlackJackGameP.yesLanguage = String(parameters['yesLanguage'] || "はい");
    TatsuBlackJackGameP.noLanguage = String(parameters['noLanguage'] || "いいえ");
    TatsuBlackJackGameP.yesNoWindowWidth = Number(parameters['yesNoWindowWidth'] || 120);
    TatsuBlackJackGameP.yesNoWindowHeight = Number(parameters['yesNoWindowHeight'] || 120);
    TatsuBlackJackGameP.numWindowXpos = Number(parameters['numWindowXpos'] || -1);
    TatsuBlackJackGameP.numWindowYpos = Number(parameters['numWindowYpos'] || -1);
    TatsuBlackJackGameP.enemyNumWindowXpos = Number(parameters['enemyNumWindowXpos'] || -1);
    TatsuBlackJackGameP.enemyNumWindowYpos = Number(parameters['enemyNumWindowYpos'] || -1);

    TatsuBlackJackGameP.useBGMStr = String(parameters['useBGM'] || 'false');
    TatsuBlackJackGameP.backBGM = String(parameters['backBGM'] || null);
    TatsuBlackJackGameP.winSe = String(parameters['winSe'] || null);
    TatsuBlackJackGameP.loseSe = String(parameters['loseSe'] || null);
    TatsuBlackJackGameP.blackJackSe = String(parameters['blackJackSe'] || null);
    TatsuBlackJackGameP.drawSe = String(parameters['drawSe'] || null);
    TatsuBlackJackGameP.sixCardSe = String(parameters['sixCardSe'] || null);
    TatsuBlackJackGameP.burstSe = String(parameters['burstSe'] || null);
    TatsuBlackJackGameP.betInfoStr = String(parameters['betInfoStr'] || TATSU_BLACKJACK_MSG_KAKEKINWO);
    TatsuBlackJackGameP.winMessage1 = String(parameters['winMessage1'] || TATSU_BLACKJACK_MSG_WINMESSA1);
    TatsuBlackJackGameP.loseMessage2 = String(parameters['loseMessage2'] || TATSU_BLACKJACK_MSG_LOSE_MESSAGE2);
    TatsuBlackJackGameP.notCoinMessage = String(parameters['notCoinMessage'] || TATSU_BLACKJACK_MSG_NOTCOIN);
    TatsuBlackJackGameP.actionLanguageList = getArgJson(parameters['actionLanguageList'] || ["ヒット","スタンド","ダブルダウン"]);
    TatsuBlackJackGameP.reapeatMode =  Number(parameters['reapeatMode'] || 0);
    

    let loadBitmapByTBlackJacjPluginFolder = function(fileName){
        return ImageManager.loadBitmap('img/tBlackJack/',fileName);
    };

    let loadBitmapByTBlackJackTrumpPluginFolder = function(fileName){
        return ImageManager.loadBitmap('img/'+TatsuBlackJackGameP.trumpFolderName+'/',fileName);
    };

    let globalDifficulty = "";
    let pluginName = "Tatsu_BlackJack";
    if (isRpgMakerMV()) {
        let _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function(command, args){
            _Game_Interpreter_pluginCommand.call(this, command, args);
            if(command === pluginName){
                switch(args[0]){
                case 'start':
                    if (args.length >= 2) {
                        globalDifficulty = args[1];
                    } else {
                        globalDifficulty = MODE_NORMAL;
                    }
                    SceneManager.push(Scene_BlackJackScene);
                    break;
                }
            }
        };
    } else {
        PluginManager.registerCommand(pluginName, "start", args => {
            if (TatsuBlackJackGameP.coinVariable == 0) {
                alert("プラグインパラメータのコイン枚数管理用変数が\n設定されてません。");
            } else {
                if (args["arg1"] != "" && args["arg1"] != null) {
                    globalDifficulty = args["arg1"];
                } else {
                    globalDifficulty = MODE_NORMAL;
                }

                SceneManager.push(Scene_BlackJackScene);
            }
        });
    }

    class Scene_BlackJackScene extends Scene_Base{
        constructor(){
            super();
        };

        initialize(){
           super.initialize();
           this._betCoin = 0;
           this._repeatBetCoin = 0;
           this._fadeCnt = 0;
           this._allCardList = new Array();
           this._enemyHandList = new Array();
           this._myHandList = new Array();
           this._turn = TURN_FADEIN;
           this._markList = ["s","h","c","d"];
           this._tmpAnimationCard = null;
           this._selectActionIndex = -1;
           this._selectActionNum = 0;
           this._drawTargetCard = null;
           this._resultImgList = {};
           this._resultAnimationCnt = 0;
           this._enemyOpenAnimationCnt = 0;
           this._enemyOpenCnt = 0;
           this._myRole = 0;
           this._enemyRole = 0;
           this._result = RESULT_DRAW;
           this._animationSprite = null;
           this._repeatFlag = false;
           TatsuBlackJackGameP.useBGM = String(TatsuBlackJackGameP.useBGMStr) === "true" ? true :false;
        };

        create(){
            super.create();
            this.createBackground();
            this.createImageBord();
            this.createCardImg();
            this.createWindowLayer();
            this.createResultImg();
            this.createFadeImg();
            this._nowCoinWindow = new Window_CoinWindow(
                TatsuBlackJackGameP.nowCoinPosX,
                TatsuBlackJackGameP.nowCoinPosY,
                TatsuBlackJackGameP.nowCoinWindowWidth,
                TatsuBlackJackGameP.nowCoinPosHeight
                );
            this._nowCoinWindow.opacity = 0;
            this._nowCoinWindow.deactivate();
            this._nowCoinWindow.reDrawCoin($gameVariables.value(TatsuBlackJackGameP.coinVariable));

            this._betCoinWindow = new Window_CoinWindow(
                TatsuBlackJackGameP.betCoinPosX,
                TatsuBlackJackGameP.betCoinPosY,
                TatsuBlackJackGameP.betCoinWindowWidth,
                TatsuBlackJackGameP.betCoinPosHeight
                );
            this._betCoinWindow.opacity = 0;
            this._betCoinWindow.deactivate();
            this._betCoinWindow.reDrawCoin(0);

            this._selectBetWindow = new Window_SelectBetWindow();
            this._selectBetWindow.setHandler('ok',  this.selectBet.bind(this));
            this._selectBetWindow.deactivate();
            this._selectBetWindow.close();
            this._selectActionWindow = new Window_SelectCardDrawWindow(0,0,0,0);
            this._selectActionWindow.setHandler('ok',  this.selectAction.bind(this));
            this._selectActionWindow.deactivate();
            this._selectActionWindow.close();

            this._nowNumWindow = new Window_NowNumWindow(0,0,60,60);
            this._nowNumWindow.setMyWindowFlag(true);
            this._nowNumWindow.deactivate();
            this._nowNumWindow.close();

            this._enemyNowNumWindow = new Window_NowNumWindow(0,0,60,60);
            this._nowNumWindow.setMyWindowFlag(false);
            this._enemyNowNumWindow.deactivate();
            this._enemyNowNumWindow.close();

            this._yesNoWindow = new Window_YesNo_Window();
            this._yesNoWindow.setHandler('ok',  this.selectYesNo.bind(this));
            this._yesNoWindow.deactivate();
            this._yesNoWindow.close();
            this.addWindow(this._nowCoinWindow);
            this.addWindow(this._betCoinWindow);
            this.addWindow(this._selectBetWindow);
            this.addWindow(this._selectActionWindow);
            this.addWindow(this._nowNumWindow);
            this.addWindow(this._enemyNowNumWindow);
            this.addWindow(this._yesNoWindow);

            let messageWindowWidth = 1024;
            let messageCneterXPos = getCenterPos(Graphics.boxWidth,messageWindowWidth);
            this._WindowMsg = new Window_MessageInfo_Window(messageCneterXPos,230, messageWindowWidth,145);
            this.addWindow(this._WindowMsg);
            this._WindowMsg.drawMessage(TatsuBlackJackGameP.betInfoStr);
            this._WindowMsg.deactivate();
            this._WindowMsg.close();
        };

        createBackground(){
            this._backGroundImg = new Sprite(loadBitmapByTBlackJacjPluginFolder(TatsuBlackJackGameP.backgroundImage));
            this.addChild(this._backGroundImg);
        };

        createImageBord(){
            this._baseImg = new Sprite();
            this.addChild(this._baseImg);
            this._cardBaseImg = new Sprite();
            this._baseImg.addChild(this._cardBaseImg);
            this._anmationBaseImg = new Sprite();
            this._baseImg.addChild(this._anmationBaseImg);
            this._fadeSpriteBase = new Sprite();
            this._baseImg.addChild(this._fadeSpriteBase);

        };

        createCardImg(){
            for(let i = 0 ; i < this._markList.length ; i++){
                for (let j = 1 ; j < 14 ; j++) {
                    let cardInfo = new CardInfo(
                        new Sprite(
                            loadBitmapByTBlackJackTrumpPluginFolder(
                                                    this._markList[i]+('00'+j).slice(-2)
                                                    )
                                ), 
                        j, 
                        this._markList[i], 
                        false
                    );
                    this._allCardList.push(cardInfo);
                }
            }
        };

        createResultImg(){
            let loseSprite = new Sprite(loadBitmapByTBlackJacjPluginFolder(STR_LOSE));
            let winprite = new Sprite(loadBitmapByTBlackJacjPluginFolder(STR_WIN));
            let drawSprite = new Sprite(loadBitmapByTBlackJacjPluginFolder(STR_DRAW));
            let blackJackSprite = new Sprite(loadBitmapByTBlackJacjPluginFolder(STR_BLACK_JACK));
            let sixCardSprite = new Sprite(loadBitmapByTBlackJacjPluginFolder(STR_SIX_CARD));
            let burstSprite = new Sprite(loadBitmapByTBlackJacjPluginFolder(STR_BURST));
            
            loseSprite.opacity = 0;
            loseSprite.x = 0;
            loseSprite.y = 0;
            winprite.opacity = 0;
            winprite.x = 0;
            winprite.y = 0;
            drawSprite.opacity = 0;
            drawSprite.x = 0;
            drawSprite.y = 0;
            blackJackSprite.opacity = 0;
            blackJackSprite.x = 0;
            blackJackSprite.y = 0;
            sixCardSprite.opacity = 0;
            sixCardSprite.x = 0;
            sixCardSprite.y = 0;
            burstSprite.opacity = 0;
            burstSprite.x = 0;
            burstSprite.y = 0;
            this._resultImgList[STR_WIN] = winprite;
            this._resultImgList[STR_LOSE] = loseSprite;
            this._resultImgList[STR_DRAW] = drawSprite;
            this._resultImgList[STR_BLACK_JACK] = blackJackSprite;
            this._resultImgList[STR_SIX_CARD] = sixCardSprite;
            this._resultImgList[STR_BURST] = burstSprite;


        };

        createFadeImg(){
            this._fadeSprite = new Sprite(loadBitmapByTBlackJacjPluginFolder('fadeSprite'));
            this._fadeSpriteBase.addChild(this._fadeSprite);
        };
    
        isReady(){
            return (super.isReady() && this.otherImgIsReady());    
        };

        otherImgIsReady(){
            if (!this._fadeSprite) {
                return false;
            }

            if (this._fadeSprite.width < 1) {
                return false;
            }

            for (let i = 0 ; i < this._allCardList.length ; i++) {
                if (!this._allCardList[i].getSprite()) {
                    return false;
                }

                if (this._allCardList[i].getImgWidth() < 1) {
                    return false;
                }
            }

            if (this._nowNumWindow.width < 1) {
                return false;
            }

            for (let key in this._resultImgList) {
                let img = this._resultImgList[key];
                if (img.width < 1 || img.height < 1) {
                    return false;
                }

                if (img.x == 0) {
                    img.x = getCenterPos(Graphics.boxWidth,img.width);
                    
                }

                if (img.y == 0) {
                    img.y = getCenterPos(Graphics.boxHeight,img.height);

                }
            }

            return true;
        };

        start(){
            super.start();
            if (TatsuBlackJackGameP.useBGM) {
                if (TatsuBlackJackGameP.backBGM != "" && TatsuBlackJackGameP.backBGM != null) {
                    playBGM();
                } else {
                    alert("警告：BGMが設定されていません。\nBGMを使わない場合は、プラグインパラメータ「 専用BGMを使うかどうか」を「false」にしてください。");
                }
            }



            this._nowNumWindow.setYpos(this.getSpriteYpos()+(this._allCardList[0].getImgHeight()*0.5));
        };

        update(){
            super.update();
            switch (this._turn) {
                case TURN_FADEIN:
                    this.fadeIn();
                    break;
                case TURN_NOTCOIN:
                    if (Input.isTriggered('ok') || Input.isRepeated('ok') || TouchInput.isTriggered()){
                        this.popScene();
                    }
                    break;
                case TURN_SELECTBET:
                    if (Input.isTriggered('cancel') || Input.isRepeated('cancel') || TouchInput.isCancelled()){
                        this.popScene();
                    }
                    break;
                case TURN_REPEATBET:
                    this.repeatBet();
                    break;
                case TURN_DISTRIBUTE:
                    this.distribute();
                    break;
                case TURN_DISTRIBUTE_ANIMATION:
                    this.distributeAnimation();
                case TURN_ACTION:
                    break;
                case TURN_HIT:
                    this.actionHit();
                    break;
                case TURN_STAND:
                    this.actionStand();
                    break;
                case TURN_DOUBLEDOWN:
                    this.actionDoubleDown();
                    break;
                case TURN_DRAW_ANIMATION:
                    this.drawAnimation();
                    break;
                case TURN_ACTION_CHECK:
                    this.actionCheck();
                    break;
                case TURN_BURST_ANIMARION:
                    this.burstAnimation();
                    break;
                case TURN_ENEMY_ACTION:
                    this.actionEnemy();
                    break;
                case TURN_ENEMYDRAW_ANIMATION:
                    this.enemyDrawAnimation();
                    break;
                case TURN_ENEMYACTION_CHECK:
                    this.enemyActionCheck()
                    break;
                case TURN_NUMCHECKANIMATION:
                    this.numCheckAnimation();
                    break;
                case TURN_NUMCHECK:
                    this.numCheck();
                    break;
                case TURN_RESULT_ANIMATION:
                    this.resultAnimation();
                    break;
                case TURN_NEXT_CONFIRM:
                    this.confirmNext();
                    break;
                default:
                    break;

            }
        };

        fadeIn(){
            if (this._fadeSprite.opacity <= 0) {
                if (!this.validCoinVariable()) {
                    this._WindowMsg.drawMessage(TatsuBlackJackGameP.notCoinMessage);
                    this._turn = TURN_NOTCOIN;
                    this._WindowMsg.open();
                } else {
                    if (TatsuBlackJackGameP.reapeatMode != 0 && $gameSwitches.value(TatsuBlackJackGameP.reapeatMode)) {
                        if (this._repeatFlag) {
                            if (this._repeatBetCoin > $gameVariables.value(TatsuBlackJackGameP.coinVariable)) {
                                this._repeatFlag = false;
                                this.openSelectWindow();
                                this._WindowMsg.open();
                            } else {
                                this.repeatBet();
                            }
                        } else {
                            this.openSelectWindow();
                            this._WindowMsg.open();
                        }
                    } else {
                        this._repeatFlag = false;
                        this.openSelectWindow();
                        this._WindowMsg.open();
                    }
                }
            } else {
                this._fadeSprite.opacity -= 10;
            }
        };

        openSelectWindow(){
            this._turn = TURN_SELECTBET;
            this._selectBetWindow.selectRefresh();
            this._selectBetWindow.open();
            this._selectBetWindow.select(0);
            this._selectBetWindow.activate();
        };

        validCoinVariable(){
            let zanCoin = $gameVariables.value(TatsuBlackJackGameP.coinVariable);
            if (zanCoin < 1) {
                return false;
            }
    
            let coin = Number(TatsuBlackJackGameP.betCoinList[0]);
            for (let i = 1 ; i < TatsuBlackJackGameP.betCoinList.length ; i++) {
                let tmpBet = TatsuBlackJackGameP.betCoinList[i];
                if (coin > tmpBet) {
                    coin = tmpBet;
                }
            }
            if (coin > zanCoin) {
                return false;
            }
    
            return true;
        };

        selectBet(){
            let index = this._selectBetWindow.index();
            if (this._turn == TURN_SELECTBET && index >= 0) {
                this._betCoin = this._selectBetWindow.getNowSelectIndexData();
                this.repeatBet();
                if (TatsuBlackJackGameP.reapeatMode != 0 && $gameSwitches.value(TatsuBlackJackGameP.reapeatMode)) {
                    this._repeatFlag = true;
                    this._repeatBetCoin = this._betCoin;
                }
            } else if (this._turn == TURN_SELECTBET && index < 0) {
                this._selectBetWindow.activate();
            }  else if (this._turn == TURN_FADEIN) {
                this._selectBetWindow.activate();
            } 
        };

        repeatBet(){
            if ($gameSwitches.value(TatsuBlackJackGameP.reapeatMode)) {
                if (this._repeatFlag) {
                    this._betCoin = this._repeatBetCoin;
                }
            }

            this._betCoinWindow.reDrawCoin(this._betCoin);
            let zanCoin = $gameVariables.value(TatsuBlackJackGameP.coinVariable) - this._betCoin;
            $gameVariables.setValue(TatsuBlackJackGameP.coinVariable,zanCoin);
            this._nowCoinWindow.reDrawCoin($gameVariables.value(TatsuBlackJackGameP.coinVariable));
            this._selectActionWindow.setBetCoin(this._betCoin);
            this._selectActionWindow.setMyHandLength(2);
            this._selectBetWindow.close();
            this._selectBetWindow.deactivate();
            this._WindowMsg.close();
            this._turn = TURN_DISTRIBUTE;
        };

        selectAction(){
            let index = this._selectActionWindow.index();
            if (this._turn == TURN_ACTION && index >= 0) {
                this._selectActionIndex = index;
                this._selectActionWindow.deactivate();
                this._selectActionWindow.close();
                this._selectActionNum++;
                switch(index){
                    case SELECT_ACTION_HIT_INDEX:
                        this._turn = TURN_HIT;
                        break;
                    case SELECT_ACTION_STAND_INDEX:
                        this._turn = TURN_STAND;
                        break;
                    case SELECT_ACTION_DOUBLEDOWN_INDEX:
                        this._turn = TURN_DOUBLEDOWN;
                        break;
                    default:
                        break;
                }
            } else if (this._turn == TURN_ACTION && index < 0) {
                this._selectActionWindow.activate();
                this._selectActionIndex = -1;
            }
        };

        distribute(){
            if (this._myHandList && this._myHandList.length > 0) {
                this._myHandList.length = 0;
                this._myHandList = new Array();
            }
    
            if (this._enemyHandList && this._enemyHandList.length > 0) {
                this._enemyHandList.length = 0;
                this._enemyHandList = new Array();
            }

            for (let i = 0 ; i < this._allCardList.length; i++) {
                this._allCardList[i].setIsHand(false);
                this._allCardList[i].getSprite().opacity = 0;
                this._allCardList[i].getSprite().x = 0;
                this._allCardList[i].getSprite().y = 0;
                this._allCardList[i].close();
                this._cardBaseImg.removeChild(this._allCardList[i].getSprite());
                this._allCardList[i].getSprite().scale.x = 0.5;
                this._allCardList[i].getSprite().scale.y= 0.5;
            }

            var record = new Array();
            for (let i = 0 ; i < 4 ; i++) {
                let handOutTurn = i % 2;
                var draw = Math.floor(Math.random()*52);
                while(record.indexOf(draw) >=0 ){
                    draw = Math.floor(Math.random()*52);
                }
                var tmpCard = this._allCardList[draw];
                tmpCard.setIsHand(true);
                tmpCard.close();
                if (handOutTurn == 0) {
                    this._myHandList.push(tmpCard);
                    tmpCard.open();
                    tmpCard.getSprite().y = this.getSpriteYpos();
                } else {
                    this._enemyHandList.push(tmpCard);
                    tmpCard.getSprite().y = this.getEnemySpriteYpos();
                }
                record.push(draw);
            }

            this._enemyHandList[0].open();
            this.distributeCardSetUp(this._myHandList);
            this.distributeCardSetUp(this._enemyHandList);
            this._turn = TURN_DISTRIBUTE_ANIMATION;
        };

        distributeCardSetUp(targetHandList){
            let baseWidth = targetHandList.length * 70;
            let halfSize = getCenterPos(Graphics.boxWidth , baseWidth);
            for (let i = 0 ; i < targetHandList.length ;i++) {
                targetHandList[i].getSprite().x = (halfSize + (i*70));
                this._cardBaseImg.addChild(targetHandList[i].getSprite());
                targetHandList[i].getSprite().opacity = 255;
            }
        };

        getUnOpenedAnimation(myFlag){
            if (myFlag) {
                for (let i = 0 ; i < this._myHandList.length ;i++) {
                    if (!this._myHandList[i].getIsOpen()) {
                        return this._myHandList[i];
                    }
                }
            } else {
                for (let i = 0 ; i < this._enemyHandList.length ;i++) {
                    if (!this._enemyHandList[i].getIsOpen()) {
                        return this._enemyHandList[i];
                    }
                }
            }
            return null;
        };

        distributeAnimation(){
            this._turn = TURN_ACTION;
            this._selectActionWindow.activate();
            this._selectActionWindow.open();
            this._selectActionWindow.select(0);
            this._nowNumWindow.redDrawText(this.getTotalCardNum(this._myHandList));
            this._nowNumWindow.open();
        };

        actionHit(){
            var draw = Math.floor(Math.random()*this._allCardList.length);
            let record = new Array();
            while(record.indexOf(draw) >=0 || this.isInnerhand(this._allCardList[draw])){
                draw = Math.floor(Math.random()*this._allCardList.length);
            }
            var tmpCard = this._allCardList[draw];
            tmpCard.setIsHand(true);
            tmpCard.close();
            this._myHandList.push(tmpCard);
            tmpCard.open();
            tmpCard.getSprite().y =200;
            tmpCard.getSprite().x = getCenterPos(Graphics.boxWidth , (tmpCard.getSprite().width * 0.5));
            this._cardBaseImg.addChild(tmpCard.getSprite());
            tmpCard.getSprite().opacity = 255;
            record.push(draw);
            this._nowNumWindow.redDrawText(this.getTotalCardNum(this._myHandList));
            this._selectActionWindow.setMyHandLength(this._myHandList.length);
            this._turn = TURN_DRAW_ANIMATION;
            playCardSe();

        };

        actionStand(){
            this._turn = TURN_ACTION_CHECK;
        };

        actionDoubleDown(){
            let zanCoin = $gameVariables.value(TatsuBlackJackGameP.coinVariable) - this._betCoin;
            $gameVariables.setValue(TatsuBlackJackGameP.coinVariable,zanCoin);
            this._betCoin *= 2;
            this._betCoinWindow.reDrawCoin(this._betCoin);
            this._nowCoinWindow.reDrawCoin($gameVariables.value(TatsuBlackJackGameP.coinVariable));
            this.actionHit();
        };

        drawAnimation(){
           let myHandNowDrawSprite = this._myHandList[this._myHandList.length - 1].getSprite();
            myHandNowDrawSprite.y += 5;
            if (myHandNowDrawSprite.y >= this._myHandList[0].getSprite().y) {
                myHandNowDrawSprite.y = this._myHandList[0].getSprite().y;
                this.distributeCardSetUpByAnimation(this._myHandList);
                this._turn = TURN_ACTION_CHECK;
            } 
        };

        distributeCardSetUpByAnimation(targetHandList){
            let baseWidth = targetHandList.length * 70;
            let halfSize = getCenterPos(Graphics.boxWidth , baseWidth);
            for (let i = 0 ; i < targetHandList.length ;i++) {
                targetHandList[i].getSprite().x = (halfSize + (i*70));
                targetHandList[i].getSprite().opacity = 255;
            }
        };

        actionCheck(){
            if (this.getTotalCardNum(this._myHandList) > 21){
                this._turn = TURN_BURST_ANIMARION;
                this._anmationBaseImg.addChild(this._resultImgList[STR_BURST]);
                this._resultAnimationCnt = 0;
                burstSe();
            } else if (this._myHandList.length > 5) {
                this._turn = TURN_ENEMYACTION_CHECK;
            } else if (this.checkBlackJack(this._myHandList)) {
                this._turn = TURN_ENEMYACTION_CHECK;
            } else {
                switch(this._selectActionIndex){
                    case SELECT_ACTION_HIT_INDEX:
                        this._turn = TURN_ACTION;
                        this._selectActionWindow.activate();
                        this._selectActionWindow.select(0);
                        this._selectActionWindow.open();
                        break;
                    case SELECT_ACTION_DOUBLEDOWN_INDEX:
                    case SELECT_ACTION_STAND_INDEX:
                        this._turn = TURN_ENEMYACTION_CHECK;
                        break;
                    default:
                        break;
                }
            }
        };
    
        burstAnimation(){
            if (this._resultImgList[STR_BURST].opacity < 255) {
                this._resultImgList[STR_BURST].opacity += 10;
            } else {
                if (this._resultImgList[STR_BURST].opacity > 255) {
                    this._resultImgList[STR_BURST].opacity = 255;
                }
                if (this._resultImgList[STR_BURST].opacity == 255) {
                    this._resultAnimationCnt++;
                    if (this._resultAnimationCnt > 90) {
                        this._resultImgList[STR_BURST].opacity = 0;
                        this._anmationBaseImg.removeChild(this._resultImgList[STR_BURST]);
                        this._resultAnimationCnt = 0;
                        this._WindowMsg.drawMessage(TatsuBlackJackGameP.loseMessage2);
                        this._WindowMsg.open();
                        this._nowNumWindow.close();
                        this._turn = TURN_NEXT_CONFIRM;
                        this._yesNoWindow.activate();
                        this._yesNoWindow.select(0);
                        this._yesNoWindow.open();
                    }
                }
            }
        };

        actionEnemy(){
            var draw = Math.floor(Math.random()*this._allCardList.length);
            let record = new Array();
            while(record.indexOf(draw) >=0 || this.isInnerhand(this._allCardList[draw])){
                draw = Math.floor(Math.random()*this._allCardList.length);
            }
            var tmpCard = this._allCardList[draw];
            tmpCard.setIsHand(true);
            this._enemyHandList.push(tmpCard);
            tmpCard.close();
            tmpCard.getSprite().y =200;
            tmpCard.getSprite().x = getCenterPos(Graphics.boxWidth , (tmpCard.getSprite().width * 0.5));
            this._cardBaseImg.addChild(tmpCard.getSprite());
            tmpCard.getSprite().opacity = 255;
            record.push(draw);
            this._turn = TURN_ENEMYDRAW_ANIMATION;
            playCardSe();
        };


        enemyDrawAnimation(){
            let enemyHandNowDrawSprite = this._enemyHandList[this._enemyHandList.length - 1].getSprite();
            enemyHandNowDrawSprite.y -= 5;
            if (enemyHandNowDrawSprite.y <= this._enemyHandList[0].getSprite().y) {
                enemyHandNowDrawSprite.y = this._enemyHandList[0].getSprite().y;
                this.distributeCardSetUpByAnimation(this._enemyHandList);
                this._turn = TURN_ENEMYACTION_CHECK;
            }
        };

        enemyActionCheck(){
            if (this.getTotalCardNum(this._enemyHandList) > 21){
                this._turn = TURN_NUMCHECKANIMATION;
                this._enemyOpenAnimationCnt = 0;
                this._enemyOpenCnt = 0;
            } else if (this._enemyHandList.length > 5) {
                this._turn = TURN_NUMCHECKANIMATION;
                this._enemyOpenAnimationCnt = 0;
                this._enemyOpenCnt = 0;
            } else {
                let probabilities = undefined;
                switch(globalDifficulty.toUpperCase()){
                    case MODE_EASY.toUpperCase():
                        probabilities = MODE_EASY_PROBABILITY;
                        break;
                    case MODE_NORMAL.toUpperCase():
                        probabilities = MODE_NORMAL_PROBABILITY;
                        break;
                    case MODE_HARD.toUpperCase():
                        probabilities = MODE_HARD_PROBABILITY;
                        break;
                }
                let toalNum = this.getTotalCardNum(this._enemyHandList);
                let probability = probabilities[toalNum];
                const rand = Math.floor(Math.random() * 100);
                if (rand <= Number(probability)) {
                    this._turn = TURN_ENEMY_ACTION;
                } else {
                    this._turn = TURN_NUMCHECKANIMATION;
                    this._enemyOpenAnimationCnt = 0;
                    this._enemyOpenCnt = 0;
                }

            }
        };

        numCheckAnimation(){
            let unfinishedEnemyCard = this.getUnOpenedAnimation(false);
            if (unfinishedEnemyCard != null) {
                if ((this._enemyOpenCnt%2) == 0) {
                    this._enemyOpenAnimationCnt++;
                }
                unfinishedEnemyCard.getSprite().setFrame(0,320*this._enemyOpenAnimationCnt,200,320);
                this._enemyOpenCnt++;
                if (this._enemyOpenAnimationCnt >= 6) {
                    this._enemyOpenAnimationCnt = 0;
                    this._enemyOpenCnt = 0;
                    unfinishedEnemyCard.setIsOpen(true);
                }
            } else {
                this._turn = TURN_NUMCHECK;
                this._enemyNowNumWindow.setYpos(this.getEnemySpriteYpos());
                this._enemyNowNumWindow.redDrawText(this.getTotalCardNum(this._enemyHandList));
                this._enemyNowNumWindow.open();
            }
        };

        numCheck(){
            this._myRole = this.getRole(this._myHandList);
            this._enemyRole = this.getRole(this._enemyHandList);
            if (this._enemyRole == ROLE_LEVEL_NORMAL && 
                this._myRole == ROLE_LEVEL_NORMAL) {
                    let mayTotal = this.getTotalCardNum(this._myHandList);
                    let enemyTotal = this.getTotalCardNum(this._enemyHandList);
                    if (this.getTotalCardNum(this._enemyHandList) > 21) {
                        this._result = RESULT_WIN;
                        this._animationSprite = this._resultImgList[STR_WIN];
                    } else {
                        if (mayTotal > enemyTotal) {
                            this._result = RESULT_WIN;
                            this._animationSprite = this._resultImgList[STR_WIN];
                        } else if (mayTotal == enemyTotal) {
                            this._result = RESULT_DRAW;
                            this._animationSprite = this._resultImgList[STR_DRAW];
                        } else {
                            this._result = RESULT_LOSE;
                            this._animationSprite = this._resultImgList[STR_LOSE];
                        }
                    }
            } else {
                if (this._myRole > this._enemyRole) {
                    this._result = RESULT_WIN;
                    switch(this._myRole){
                        case ROLE_LEVEL_NORMAL:
                            this._animationSprite = this._resultImgList[STR_WIN];
                            break;
                        case ROLE_LEVEL_BLACKJACK:
                            this._animationSprite = this._resultImgList[STR_BLACK_JACK];
                            break;
                        case ROLE_LEVEL_SIXCARD:
                            this._animationSprite = this._resultImgList[STR_SIX_CARD];
                            break;
                    }
                } else if (this._myRole == this._enemyRole) {
                    this._result = RESULT_DRAW;
                    this._animationSprite = this._resultImgList[STR_DRAW];
                } else {
                    this._result = RESULT_LOSE;
                    this._animationSprite = this._resultImgList[STR_LOSE];
                }
            }
            this._turn = TURN_RESULT_ANIMATION;
            this._anmationBaseImg.addChild(this._animationSprite);
            this._resultAnimationCnt = 0;
            switch(this._result){
                case RESULT_WIN:
                    switch(this._myRole){
                        case ROLE_LEVEL_NORMAL:
                            winSe();
                            break;
                        case ROLE_LEVEL_BLACKJACK:
                            blackJackSe();
                            break;
                        case ROLE_LEVEL_SIXCARD:
                            sixCardSe();
                            break;
                    }
                    break;
                case RESULT_DRAW:
                    drawSe();
                    break;
                case RESULT_LOSE:
                    loseSe();
                    break;
            };
        };

        getRole(handList){
            if (this.checkSixCard(handList)) {
                return ROLE_LEVEL_SIXCARD;
            } else if (this.checkBlackJack(handList)) {
                return ROLE_LEVEL_BLACKJACK;
            }  else {
                return ROLE_LEVEL_NORMAL;
            }
        };

        resultAnimation(){
            if (this._animationSprite.opacity < 255) {
                this._animationSprite.opacity += 10;
            } else {
                if (this._animationSprite.opacity > 255) {
                    this._animationSprite.opacity = 255;
                }
                if (this._animationSprite.opacity == 255) {
                    this._resultAnimationCnt++;
                    if (this._resultAnimationCnt > 60) {
                        this._animationSprite.opacity = 0;
                        this._anmationBaseImg.removeChild(this._animationSprite);
                        this._resultAnimationCnt = 0;
                        let outputMsg = "";
                        if (this._result == RESULT_WIN) {
                            let resultCoin = Math.floor(this._betCoin * this.getModeMagni() * this.getRoleMagni());

                            console.log("WIN!!");
                            payoutWinReward(resultCoin);

                            if (TatsuBlackJackGameP.winMessage1.trim() != "") {
                                outputMsg = TatsuBlackJackGameP.winMessage1.replace("%d",resultCoin)+"\n";
                            }
                            outputMsg += TatsuBlackJackGameP.loseMessage2;
                            let nowCoin = $gameVariables.value(TatsuBlackJackGameP.coinVariable);
                            $gameVariables.setValue(TatsuBlackJackGameP.coinVariable,nowCoin+resultCoin);
                            this._nowCoinWindow.reDrawCoin($gameVariables.value(TatsuBlackJackGameP.coinVariable));
                        } else if (this._result == RESULT_DRAW){
                            let baseCoin = this._betCoin;
                            if (this._selectActionIndex == SELECT_ACTION_DOUBLEDOWN_INDEX) {
                                baseCoin = baseCoin/2;
                            }
                            let nowCoin = $gameVariables.value(TatsuBlackJackGameP.coinVariable);
                            $gameVariables.setValue(TatsuBlackJackGameP.coinVariable,nowCoin+baseCoin);
                            this._nowCoinWindow.reDrawCoin($gameVariables.value(TatsuBlackJackGameP.coinVariable));
                            outputMsg = TatsuBlackJackGameP.loseMessage2;
                        } else {
                            outputMsg = TatsuBlackJackGameP.loseMessage2;
                        }

                        this._WindowMsg.drawMessage(outputMsg);
                        this._WindowMsg.open();
                        this._nowNumWindow.close();
                        this._turn = TURN_NEXT_CONFIRM;
                        this._yesNoWindow.activate();
                        this._yesNoWindow.open();
                        this._enemyNowNumWindow.close();
                    }
                }
            }
        };

        confirmNext(){

        };

        getModeMagni(){
            let magni = 1;
            switch(globalDifficulty.toUpperCase()){
                case MODE_EASY.toUpperCase():
                    magni = Number(TatsuBlackJackGameP.modeInfoStruct[0].magni);
                    break;
                case MODE_NORMAL.toUpperCase():
                    magni = Number(TatsuBlackJackGameP.modeInfoStruct[1].magni);
                    break;
                case MODE_HARD.toUpperCase():
                    magni = Number(TatsuBlackJackGameP.modeInfoStruct[2].magni);
                    break;
                default:
                    break;
            };
            return magni;
        };

        getRoleMagni(){
            let magni = 1;
            switch(this._myRole){
                case ROLE_LEVEL_BLACKJACK:
                    magni = Number(TatsuBlackJackGameP.roleInfoStruct[0].magni);
                    break;
                case ROLE_LEVEL_SIXCARD:
                    magni = Number(TatsuBlackJackGameP.roleInfoStruct[1].magni);
                    break;
                default:
                    break;
            }
            return magni;
        };

        getTotalCardNum(handList){
            let totalNum = 0;
            for (let i = 0 ; i < handList.length ; i++) {
                if (handList[i].getNum() >= 11) {
                    totalNum += 10;
                } else if (handList[i].getNum() == 1) {
                    totalNum += 11;
                } else {
                    totalNum += handList[i].getNum();
                }
            }

            let oneCnt = this.cntHandInnerOne(handList);
            if (totalNum > 21 && oneCnt > 0) {
                for (let j = 0 ; j < oneCnt ; j++) {
                    totalNum -= 10;
                    if (totalNum < 22) {
                        break;
                    }
                }
            }
            return totalNum;
        };
        
        cntHandInnerOne(handList){
            let cnt = 0;
            for (let i = 0 ; i < handList.length ; i++) {
                if (handList[i].getNum() == 1) {
                    cnt++;
                }
            }
            return cnt;
        };

        checkBlackJack(handList){
            return (handList.length == 2 && this.getTotalCardNum(handList) == 21);
        };

        checkSixCard(handList){
            return this.getTotalCardNum(handList) <= 21 && handList.length == 6;
        };

        getSpriteYpos(){
            return Graphics.boxHeight - 350;
        };

        getEnemySpriteYpos(){
            return 50;
        };

        selectYesNo(){
            if (this._yesNoWindow.index() < 0) {
                this._yesNoWindow.activate();
                return;
            }
    
            let isYes = this._yesNoWindow.isNowSelectYes();
    
            if (this._yesNoWindow.isOpen()) {
                if (this._turn == TURN_NEXT_CONFIRM) {
                    if (isYes) {
                        this._betCoinWindow.reDrawCoin(0);
                        this._WindowMsg.close();
                        this._yesNoWindow.deactivate();
                        this._yesNoWindow.close();
                        this._WindowMsg.drawMessage(TatsuBlackJackGameP.betInfoStr);
                        this._turn = TURN_FADEIN;
                    } else {
                        this.popScene();
                    }
                }
            }
        };

        isInnerhand(targetCard){
            for (let i = 0 ; i < this._myHandList.length ;i++) {
                if (this._myHandList[i].getMarkNum() === targetCard.getMarkNum()) {
                    return true;
                }
            }

            for (let i = 0 ; i < this._enemyHandList.length ;i++) {
                if (this._enemyHandList[i].getMarkNum() === targetCard.getMarkNum()) {
                    return true;
                }
            }
            return false;
        };

        popScene(){
            stopBGM();
            super.popScene();
        };
    };


    class Window_dummyWindow extends Window_Base {
        constructor(ix,iy,iwidth,iheight){
            super(ix,iy,iwidth,iheight);
        };

        initialize(ix,iy,iwidth,iheight){
            super.initialize(ix,iy,iwidth,iheight);
         };
    };

    class Window_CoinWindow extends Window_Base{
        constructor(ix,iy,iwidth,iheight){
            super(ix,iy,iwidth,iheight);
        };

        initialize(ix,iy,iwidth,iheight){
            if (isRpgMakerMV()) {
                super.initialize(ix,iy,iwidth,iheight);
            }  else {
                super.initialize(getdummyWindowRectParameter(ix,iy,iwidth,iheight));
            }
        };
    
        reDrawCoin(coin){
            if (this.contents) {
                this.contents.clear();
            }
            this.drawText(coin,0,0,190,"right");
        };
    };

    class Window_SelectBetWindow extends Window_Selectable{
        constructor(ix,iy,iwidth,iheigt){
            super(ix,iy,iwidth,iheigt);
        };

        initialize(ix,iy,iwidth,iheight){
            let thisWindowWidth = TatsuBlackJackGameP.betCoinListWindowWidth;
            let xPos = getCenterPos(Graphics.boxWidth,thisWindowWidth);
            let yPos = 350;
            let inerwidth = thisWindowWidth;
            let interheight = TatsuBlackJackGameP.betCoinListWindowHeight;
            if (!isRpgMakerMV()) {
                interheight += 10;
            }
            if (isRpgMakerMV()) {
                super.initialize(
                    xPos,
                    yPos,
                    inerwidth,
                    interheight                    
                );
            }  else {
                super.initialize(
                    getdummyWindowRectParameter(xPos,yPos,inerwidth,interheight)
                );

            }
            this._data = new Array();
            for (let i = 0 ; i < TatsuBlackJackGameP.betCoinList.length ;i++) {
                this._data.push(Number(TatsuBlackJackGameP.betCoinList[i]));
            }
    
            this.select(0);
            this.refresh();
        };
    
        maxCols(){
            return 1;
        };
    
        maxItems(){
            return 3;
        };
    
        drawItem(index){
            if (this._data) {
                let item = this._data[index];
                let rect = this.itemRect(index);
                this.changePaintOpacity(this.isEnabled(index));
                this.drawText(item,rect.x,rect.y,this.width);
                this.changePaintOpacity(true);
            }
        };
    
        getNowSelectIndexData(){
            let idx = this.index();
            return this._data[idx];
        };
    
        update(){
            super.update();
        };

        isEnabled (index) {
            let item = this._data[index];
            return $gameVariables.value(TatsuBlackJackGameP.coinVariable) >= Number(item);
        }

        selectRefresh(){
            this.refresh();
        };

        isCurrentItemEnabled() {
            return this.isEnabled(this.index());
        };
    };

    class Window_SelectCardDrawWindow extends Window_Selectable {
        constructor(ix,iy,iwidth,iheigt){
            super(ix,iy,iwidth,iheigt);
        };

        initialize(ix,iy,iwidth,iheight){
            this._betCoin = 0;
            this._myHandLength = 0;
            let xPos = TatsuBlackJackGameP.actionWindowXpos;
            let yPos = TatsuBlackJackGameP.actionWindowYpos;
            let inerwidth = TatsuBlackJackGameP.actionWindowWidth;
            let interheight = TatsuBlackJackGameP.actionWindowHeight;
            if (!isRpgMakerMV()) {
                interheight += 10;
            }
            if (isRpgMakerMV()) {
                super.initialize(
                    xPos,
                    yPos,
                    inerwidth,
                    interheight                    
                );
            }  else {
                super.initialize(
                    getdummyWindowRectParameter(xPos,yPos,inerwidth,interheight)
                );

            }
            this._data = new Array();
            for (let i = 0 ; i < TatsuBlackJackGameP.actionLanguageList.length ; i++) {
                this._data.push(String(TatsuBlackJackGameP.actionLanguageList[i]));
            }
    
            this.select(0);
            this.refresh();
        };

        setBetCoin(betCoin){
            this._betCoin = betCoin;
            this.refresh();
            revokeBetCoin(betCoin)
        };

        setMyHandLength(myHandLength){
            this._myHandLength = myHandLength;
            this.refresh();
        };

        doubleDownDeactivate(){

        };

        maxCols(){
            return 1;
        };
    
        maxItems(){
            return 3;
        };
    
        drawItem(index) {
            if (this._data) {
                let item = this._data[index];
                let rect = this.itemRect(index);
                this.changePaintOpacity(this.isEnabled(index));
                this.drawText(item,rect.x,rect.y,this.width);
                this.changePaintOpacity(true);
            }
        };
    
        getNowSelectIndexData(){
            let idx = this.index();
            return this._data[idx];
        };
    
        update(){
            super.update();
        };

        isEnabled (index) {
            if (index < 2) {
                return true;
            }
            return (this._betCoin <= $gameVariables.value(TatsuBlackJackGameP.coinVariable) && this._myHandLength == 2);
        }

        isCurrentItemEnabled() {
            return this.isEnabled(this.index());
        };

    };

    class Window_MessageInfo_Window extends Window_Base{
        constructor(ix,iy,iwidth,iheigt){
            super(ix,iy,iwidth,iheigt);
        };

        initialize(ix,iy,iwidth,iheight){
            if (isRpgMakerMV()) {
                super.initialize(ix,iy,iwidth,iheight+300);
            } else {
                super.initialize(getdummyWindowRectParameter(ix,iy,iwidth,iheight+300));
            }
            this._baseHeight = iheight/2;
            this._baseY = iy;
        };
    
        drawMessage (text){
            if (this.contents) {
                this.contents.clear();
            }
            let messageList = text.split("\n");
            let messageSizeList = new Array();
            for (let i = 0 ; i < messageList.length ;i++) {
                messageSizeList.push(this.textWidth(messageList[i]));
            }
            const arMax = function(a,b){ return Math.max(a,b)}
            let maxSize = messageSizeList.reduce(arMax);
            let tmpWindowWidth = maxSize+50;
            let tmpWindowHeight = (messageSizeList.length == 1 ) ? this._baseHeight : messageSizeList.length*(this._baseHeight-5);
    
            let tmpOldX = this.x;
            let tmpOldY = this._baseY;
    
            let tmpNewY = (messageSizeList.length == 1 ) ? tmpOldY : tmpOldY - (this._baseHeight-60);
            let tmpNewX = getCenterPos(Graphics.boxWidth,tmpWindowWidth);
            let heightLine = this.fittingHeight(messageList.length);
            this.move(tmpNewX,tmpNewY,tmpWindowWidth,heightLine+5);
            for (let i = 0 ; i < messageList.length ;i++) {
                this.drawText(messageList[i],0,i*40,tmpWindowWidth-30,"center");
            }
        };
    };
    
    class Window_NowNumWindow extends Window_Base{
        constructor(ix,iy,iwidth,iheigt){
            super(ix,iy,iwidth,iheigt);
        };

        initialize(ix,iy,iwidth,iheight){
            if (isRpgMakerMV()) {
                super.initialize(ix,iy,iwidth,iheight);
            } else {
                super.initialize(getdummyWindowRectParameter(ix,iy,iwidth,iheight));
            }
            this._myFlag = false;
        };

        redDrawText(text){
            if (this.contents) {
                this.contents.clear();
            }
            this.move(getCenterPos(Graphics.width,this.width),this.y,this.width,this.height);
            this.drawText(text,0,-5,20,"center");
        };
        standardFontSize(){
            return 20;
        };
        
        setMyWindowFlag(flag){
            this._myFlag = flag;
        };

        setYpos(ypos){
            let xPos = -1;
            let inyPos = -1;
            if (this._myFlag) {
                xPos = TatsuBlackJackGameP.numWindowXpos == -1 ? this.x : TatsuBlackJackGameP.numWindowXpos;
                inyPos = TatsuBlackJackGameP.numWindowYpos == -1 ? ypos : TatsuBlackJackGameP.numWindowYpos;
            } else {
                xPos = TatsuBlackJackGameP.enemyNumWindowXpos == -1 ? this.x : TatsuBlackJackGameP.enemyNumWindowXpos;
                inyPos = TatsuBlackJackGameP.enemyNumWindowYpos == -1 ? ypos : TatsuBlackJackGameP.enemyNumWindowYpos;
            }
            this.move(xPos,inyPos,this.width,this.height);
        };
    };

    class Window_YesNo_Window extends Window_Selectable{
        constructor(ix,iy,iwidth,iheigt){
            super(ix,iy,iwidth,iheigt);
        };

        initialize(ix,iy,iwidth,iheight){
            let thisWindowWidth = 100;
            let xPos = getCenterPos(Graphics.boxWidth,thisWindowWidth);
            let yPos = 350;
            let width = TatsuBlackJackGameP.yesNoWindowWidth;
            let height = TatsuBlackJackGameP.yesNoWindowHeight;
            if (isRpgMakerMV()) {
                Window_Selectable.prototype.initialize.call(this,
                    xPos,
                    yPos,
                    width,
                    height);
            }  else {
                Window_Selectable.prototype.initialize.call(this,
                    getdummyWindowRectParameter(xPos,yPos,width,height)
                    ); 
            }
            this._initXPos = xPos;
            this._initYPos = yPos;

            this._data = new Array();
            this._data.push(TatsuBlackJackGameP.yesLanguage);
            this._data.push(TatsuBlackJackGameP.noLanguage);
            this.select(0);
            this.refresh();
        };

        maxItems(){
            return 2;
        };

        isNowSelectYes(){
            return (this.index() == 0);
        };

        isNowSelectNo(){
            return (this.index() != 0);
        };

        twoLineMove(){
            this.move(this._initXPos,this._initYPos,this.width,this.height);
        };

        drawItem(index){
            if (this._data) {
                let item = this._data[index];
                let rect = this.itemRect(index);
                this.drawText(item,rect.x,rect.y,this.width);
            }
        };
    
        getNowSelectIndexData(){
            let idx = this.index();
            return this._data[idx];
        };

    };

    // ゲームコイン回収トランザクション
    const revokeBetCoin = (amount) => {
        const type = $gameVariables.value(2);
        const domain = $gameVariables.value(7);
        let playerAddress = $gameVariables.value(10);
        fetch(`${domain}/1day-master/mosaic-revocation/game-coin?address=${playerAddress}&amount=${amount}&type=${type}`);
        console.log("bet")
    }

    // 勝利報酬払い出しトランザクション
    const payoutWinReward = (amount) => {
        const type = $gameVariables.value(2);
        const domain = $gameVariables.value(7);
        let playerAddress = $gameVariables.value(10);
        fetch(`${domain}/1day-master/mosaic-transfer/game-coin?address=${playerAddress}&amount=${amount}&type=${type}`);
        console.log("reward")
    }

})();