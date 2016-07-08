/**
 * Created by Administrator on 2016/7/8 0008.
 */
define(['jquery'], function($) {
    function Window() {

    }
    
    Window.prototype = {
        alert: function (content) {
            var alertBox = $('<div class="alert-box"></div>');
            alertBox.appendTo("body");
            alertBox.html(content);
        },
        confirm: function () {

        },
        prompt: function () {
            
        }
    };

    return {
        Window: Window
    }
});