window.addEventListener('load', function () {
    var $submitBtn = document.getElementById('submitBtn');
    var milkform = new MilkForm('eggiwqfz3do', function (isSupported) {
        // ロード完了時処理を書きたい場合はここ
        // isSupportedにはMilkcocoaにブラウザが対応しているかが帰ってくるので
        // milkform-fallbackを使わずに、サポートの有無に応じてこちらに自由に処理を書くことも出来ます
    });
    milkform.onSuccess(function (datum) {
        //送信成功時処理を書きたい場合はここ
        console.log(datum);
    });
    milkform.onFailure(function (error) {
        //送信失敗時処理を書きたい場合はここ
        console.log(error);
    });

    $submitBtn.addEventListener('click', function () {
        // ここにバリデーションとか
        milkform.submit();
    });
});
