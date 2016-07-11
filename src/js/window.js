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
            hasCloseBtn: false,
            hasMask: true
        };

        //组件的事件对象
        this.handlers = {};
    }
    
    Window.prototype = {
        //绑定事件
        on: function(type, handler) {
            if(typeof this.handlers[type] == "undefined") {
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);

            return this;
        },
        //触发事件
        fire: function(type, data) {
            if(this.handlers[type] instanceof Array) {
                var handlers = this.handlers[type];
                for(var i = 0, len = handlers.length; i<len; i++) {
                    handlers[i](data);
                }
            }
        },
        //弹窗方法
        alert: function (config) {
            var CFG = $.extend(this.config, config),
                that = this;

            var alertBox = $(
                '<div class="alert-box">' +
                    '<div class="alert-header">' + CFG.title + '</div>' +
                    '<div class="alert-body">' + CFG.content + '</div>' +
                    '<div class="alert-footer"><input class="alert-btn" type="button" value="确定"/></div>' +
                '</div>'
            );
            alertBox.appendTo("body");

            var btn = alertBox.find(".alert-footer input"),
                mask = null;

            if(CFG.hasMask){
                mask = $('<div class="window-mask"></div>');
                mask.appendTo("body");
            }
            btn.on("click", function() {
                alertBox.remove();
                mask && mask.remove();
                that.fire("alert");
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
                    alertBox.remove();
                    mask && mask.remove();
                    that.fire("close");
                });
            }

            //换肤功能
            if(CFG.skinClassName) {
                alertBox.addClass(CFG.skinClassName);
            }

            if(CFG.handler4AlertBtn) {
                this.on("alert", CFG.handler4AlertBtn);
            }
            if(CFG.handler4CloseBtn) {
                this.on("close", CFG.handler4CloseBtn);
            }

            return this;
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