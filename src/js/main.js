/**
 * Created by Administrator on 2016/7/8 0008.
 */
require.config({
    baseUrl: "js",
    paths: {
        'jquery': "./jquery-3.0.0.min"
    }
});

require(['jquery', 'window'], function($, w) {
    $("#alertBtn").on("click", function () {
        var win = new w.Window();
        win.alert({
            width: 300,
            height: 150,
            y: 50,
            title: "提示",
            content: "welcome",
            hasCloseBtn: true,
            handler4AlertBtn: function() {
                alert("alert1 handler");
            },
            handler4CloseBtn: function () {
                alert("close1 handler");
            }
        });
        win.on("alert", function() {
            alert("alert2 handler");
        });

        win.on("close", function() {
            alert("close2 handler");
        });
    });
});