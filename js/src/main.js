function openModal($modal, msg) {
    $modal.open({
        template: '<div class="md">' + msg + '</div>'
    });
}

angular.module('myApp', ['ui.bootstrap'])
    .controller('MyController', ['$modal', function ($modal) {
        var milkform = new MilkForm('eggiwqfz3do', function (isSupported) {
            // ロード完了時処理を書きたい場合はここ
            // isSupportedにはMilkcocoaにブラウザが対応しているかが帰ってくるので
            // milkform-fallbackを使わずに、サポートの有無に応じてこちらに自由に処理を書くことも出来ます
        });
        milkform.onSuccess(function (datum) {
            console.log(datum);
            openModal($modal, '送信しました。');
        });
        milkform.onFailure(function (error) {
            console.log(error);
            openModal($modal, error);
        });

        this.onsubmit = function () {
            milkform.submit();
        };
    }]);
