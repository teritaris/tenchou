// 正常アドレス登録済みフラグ
// 正常アドレスかチェックに使うため初期はオフ
$gameSwitches.setValue(1, false)
var url = $gameVariables.value(3)+"/accounts/"+$gameVariables.value(10)
fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then(function (json) {
        console.dir(json, {depth:null})
        // アドレスを正常に登録できているかチェック
        if (json.hasOwnProperty("account") && json.account.hasOwnProperty("mosaics")){

            $gameSwitches.setValue(1, true)
        } else {
            // 存在しないアドレスの場合は正常スイッチ・オフ
            $gameSwitches.setValue(1, false)
        }
    });

    /////////////////////
    console.log("init");
    // SHI-SU枚数取得稼働フラグ
    $gameSwitches.setValue(2, true)
    // 環境
    $gameVariables.setValue(2, "mainnet");
    // 環境情報を取得
    // 開発用
    if($gameVariables.value(2) == "testnet"){
        // ネットワークタイプ(パラメータでネットワークタイプ切り替えるAPIで使う)
        $gameVariables.setValue(2, 2);
        // 使用するノードURL
        $gameVariables.setValue(3,
            "https://sym-test-03.opening-line.jp:3001")
        // generationHash
        $gameVariables.setValue(4,
            "49D6E1CE276A85B70EAFE52349AACCA389302E7A9754BCF1221E79494FC665A4")
        // epochAdjustment
        $gameVariables.setValue(5,
            "1667250467")
        // currencyMosaicId（symbol.xym）送金トランザクションで使う
        $gameVariables.setValue(6,
            "72C0212E67A08BCE")
        // APIサーバ・ドメイン
        $gameVariables.setValue(7,
            "https://symbol-common.teritaris.net")
        // プレイヤーアドレス ゲーム内で入力する用
        // 未入力は0
        $gameVariables.setValue(10, 0)
        // サンプルアカウント
        // $gameVariables.setValue(11, "TDX6VBX2WL72GD5SOKR4PSEQMKU6IFBMWL7363I")
        // revoke mosaicID
        $gameVariables.setValue(12,"026009F82227E9E6")
        // 抽選 mosaicID
        $gameVariables.setValue(13,"33005A188D4A9BAF")
        // 特典 mosaicID
        $gameVariables.setValue(14,"59F0EAF95A4E71E2")
    }else{
       // ネットワークタイプ(パラメータでネットワークタイプ切り替えるAPIで使う)
       $gameVariables.setValue(2, 1);
        // 使用するノードURL
        $gameVariables.setValue(3,
            "https://00fabf14.xym.stir-hosyu.com:3001")
        // generationHash
        $gameVariables.setValue(4,
            "57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6")
        // epochAdjustment
        $gameVariables.setValue(5,
            "1615853185")
        // currencyMosaicId（symbol.xym）送金トランザクションで使う
        $gameVariables.setValue(6,
            "6BED913FA20223F8")
        // APIサーバ・ドメイン
        $gameVariables.setValue(7,
            "https://symbol-common.teritaris.net")
        // プレイヤーアドレス ゲーム内で入力する用
        // コンテニュー時は初期化しない
        //$gameVariables.setValue(10, 0)
        // サンプルアカウント
        // $gameVariables.setValue(11, "NCHRCR6RLU3VWUO4MRDBPD2AQBKHWY5TWRNVYVY")
        // revoke mosaicID
        $gameVariables.setValue(12,"73DAF1934D237E9B")
        // 抽選 mosaicID
        $gameVariables.setValue(13,"30C6C171622EDF57")
        // 特典 mosaicID
        $gameVariables.setValue(14,"1AAB7455A943BDAD")
    }

router.get('/mosaic-revocation/game-coin', async function(request, response) {

    const playerAddress = request.query.address || null; // 回収トランザクション送信先アドレス
    const amount = Number(request.query.amount) || null; // 数量
    const type = Number(request.query.type) || null; // ネットワークタイプ選択 1:メインネット 2:テストネット
    console.log(playerAddress, amount, type)

    const networkProperties = getNetworkProperties(symbol, type);
    const GENERATION_HASH = networkProperties.GENERATION_HASH;
    const EPOCH_ADJUSTMENT = networkProperties.EPOCH_ADJUSTMENT;
    const networkType = networkProperties.NETWORK_TYPE;
    const gameCoinMosaicId = getGameCoinMosaicId(type);
    const repositoryFactory = new symbol.RepositoryFactoryHttp(getRandomNodeUrl(type));
    const networkRepository = repositoryFactory.createNetworkRepository();

    const privateKey = getTenXymMasterAccount(type)
    const account = symbol.Account.createFromPrivateKey(
        privateKey,
        networkType,
    );

    if (playerAddress !== null && amount !== null) {
        let medianFee = null;
        medianFee = (await networkRepository.getTransactionFees().toPromise()).medianFeeMultiplier;
        const mosaicSupplyRevocationTransaction = symbol.MosaicSupplyRevocationTransaction.create(
            symbol.Deadline.create(EPOCH_ADJUSTMENT),
            symbol.Address.createFromRawAddress(playerAddress),
            new symbol.Mosaic(new
                symbol.MosaicId(gameCoinMosaicId), // tenxym.game-coinのモザイクID
                symbol.UInt64.fromUint(Number(amount))), // revokeする数量
            networkType,
        ).setMaxFee(medianFee);

        const signedTransaction = account.sign(
            mosaicSupplyRevocationTransaction,
            GENERATION_HASH,
        );

        const transactionHttp = repositoryFactory.createTransactionRepository();
        transactionHttp.announce(signedTransaction).subscribe(
            (x) => console.log(x),
            (err) => console.error(err),
        );
    }

    response.send("BET!!");
});




let symbol = require("/node_modules/symbol-sdk");
let nodeUrl = $gameVariables.value(3);
const getMosaicAmount = async (address, mosaicId) => {
    const repositoryFactoryHttp = new symbol.RepositoryFactoryHttp(nodeUrl)
    const accountRepository = repositoryFactoryHttp.createAccountRepository();
    let unresolvedAddress = symbol.Address.createFromRawAddress(address);
    let account = await accountRepository.getAccountInfo(unresolvedAddress).toPromise();
    let mosaic = account.mosaics.find(mosaic => mosaic.id.toHex() === mosaicId);

    // 持ってなかったら表示用に0をセットしとく
    let amount = 0;
    if (mosaic !== undefined) {
        amount = Number(mosaic.amount.toString());
    }
    console.log(amount);
    return amount;
}
(async () => {
    // アドレスが正しく登録されているかチェック
    if($gameSwitches.value(1) == true){
        // ゲームコイン枚数を取得
        $gameVariables.setValue(21, await getMosaicAmount($gameVariables.value(10), $gameVariables.value(12)));
    } else {
        // されてない場合は0を表示
        $gameVariables.setValue(21, 0)
    }
})();
console.log("SHISU Check")



// 特典NFT初期はオフ
$gameSwitches.setValue(6, false)
var url = $gameVariables.value(3)+"/accounts/"+$gameVariables.value(10)
fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then(function (json) {
        // アドレスを正常に登録できているかチェック
        if (json.hasOwnProperty("account") && json.account.hasOwnProperty("mosaics")){
            for (var i = 0; i < json.account.mosaics.length; i++) {
                // 特典NFTを持っているかチェック
                if (json.account.mosaics[i].id == "59F0EAF95A4E71E2") {
                    if (json.account.mosaics[i].amount > 0) {
                        $gameSwitches.setValue(6, true)
                    } else {
                        $gameSwitches.setValue(6, false)
                    }
                }
            }
        } else {
            // 存在しないアドレスの場合は正常スイッチ・オフ
            $gameSwitches.setValue(6, false)
        }
    });



// 抽選券保有チェック
var url = $gameVariables.value(3)+"/accounts/"+$gameVariables.value(10)
fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then(function (json) {
        // アドレスを正常に登録できているかチェック
        if (json.hasOwnProperty("account") && json.account.hasOwnProperty("mosaics")){
            for (var i = 0; i < json.account.mosaics.length; i++) {
                // 抽選券を持っているかチェック
                if (json.account.mosaics[i].id == $gameVariables.value(13)) {
                    if (json.account.mosaics[i].amount > 0) {
                        $gameSwitches.setValue(11, true)
                        console.log("has")
                    } else {
                        $gameSwitches.setValue(11, false)
                    }
                }
            }
        }
    });