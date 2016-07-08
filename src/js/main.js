/**
 * Created by Administrator on 2016/7/8 0008.
 */
require.config({
    baseUrl: "js",
    paths: {
        'jquery': "./jquery-3.0.0.min"
    }
});

require(['jquery'], function($) {
    $("#main").append($('<input type="button" value="alertModel">'));
});