/**
 * Created by Administrator on 2016/7/8 0008.
 */
define(['jquery', 'widget'], function($, widget) {
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
            hasMask: true,
        };
    }
    
    Window.prototype = $.extend({}, new widget.Widget(), {
        renderUI: function () {
            this.boundingBox = $(
                '<div class="alert-box">' +
                '<div class="alert-header">' + this.config.title + '</div>' +
                '<div class="alert-body">' + this.config.content + '</div>' +
                '<div class="alert-footer"><input class="alert-btn" type="button" value="确定"/></div>' +
                '</div>'
            );

            if(this.config.hasMask){
                this._mask = $('<div class="window-mask"></div>');
                this._mask.appendTo("body");
            }

            if(this.config.hasCloseBtn) {
                this._closeBtn = $('<span class="alert-closeBtn">X</span>');
                this._closeBtn.appendTo(this.boundingBox);
            }


        },
        bindUI: function() {
            var btn = this.boundingBox.find(".alert-footer input"),
                that = this;
            btn.on("click", function() {
                that.destroy();
                that.fire("alert");
            });

            this._closeBtn.on("click", function(){
                that.destroy();
                that.fire("close");
            });

            if(this.config.handler4AlertBtn) {
                this.on("alert", this.config.handler4AlertBtn);
            }
            if(this.config.handler4CloseBtn) {
                this.on("close", this.config.handler4CloseBtn);
            }

            window.onresize = function() {
                that.position();
            }
        },
        syncUI: function () {
            this.position();

            //换肤功能
            if(this.config.skinClassName) {
                this.boundingBox.addClass(CFG.skinClassName);
            }
        },
        destructor: function () {
            this._mask && this._mask.remove();
        },
        //弹窗方法
        alert: function (config) {
            this.config = $.extend(this.config, config);
            this.render();
            return this;
        },
        confirm: function () {

        },
        prompt: function () {
            
        },
        position: function () {
            this.boundingBox.css({
                width: this.config.width + "px",
                height: this.config.height + "px",
                left: (this.config.x || (window.innerWidth - this.config.width)/2) + "px",
                top: (this.config.y || (window.innerHeight - this.config.height)/2) + "px"
            });
        }
    });

    return {
        Window: Window
    }
});