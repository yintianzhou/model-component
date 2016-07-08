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
        new w.Window().alert("alert!");
    })
});