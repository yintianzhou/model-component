/**
 * Created by Administrator on 2016/7/8 0008.
 */
define(['jquery'], function($) {
    function Window() {
        this.config = {
            width: 500,
            height: 300,
            content: "",
            title: "系统消息",
            skinClassName: null,
            handler4AlertBtn: null,
            handler4CloseBtn: null,
            hasCloseBtn: false
        };
    }
    
    Window.prototype = {
        alert: function (config) {
            var CFG = $.extend(this.config, config);

            var alertBox = $(
                '<div class="alert-box">' +
                    '<div class="alert-header">' + CFG.title + '</div>' +
                    '<div class="alert-body">' + CFG.content + '</div>' +
                    '<div class="alert-footer"><input class="alert-btn" type="button" value="确定"/></div>' +
                '</div>'
            );
            alertBox.appendTo("body");

            var btn = alertBox.find(".alert-footer input");
            btn.on("click", function() {
                CFG.handler4AlertBtn && CFG.handler4AlertBtn();
                alertBox.remove();
            });

            alertBox.css({
                width: this.config.width + "px",
                height: this.config.height + "px",
                left: (this.config.x || (window.innerWidth - this.config.width)/2) + "px",
                top: (this.config.y || (window.innerHeight - this.config.height)/2) + "px"
            });

            if(CFG.hasCloseBtn) {
                var closeBtn = $('<span class="alert-closeBtn">X</span>');
                closeBtn.appendTo(alertBox);
                closeBtn.on("click", function() {
                    CFG.handler4CloseBtn && CFG.handler4CloseBtn();
                    alertBox.remove();
                });
            }

            if(CFG.skinClassName) {
                alertBox.addClass(CFG.skinClassName);
            }
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