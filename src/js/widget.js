/**
 * Created by Administrator on 2016/7/11 0011.
 */
define(['jquery'], function($) {
    function Widget() {
        this.boundingBox = null;
    }

    Widget.prototype = {
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
        //添加dom
        renderUI: function() {

        },
        //监听事件
        bindUI: function() {

        },
        //初始化组件属性
        syncUI: function () {
            
        },
        //渲染组件
        render: function (container) {
            this.renderUI();
            this.handlers = {};
            this.bindUI();
            this.syncUI();
            $(container || document.body).append(this.boundingBox);
        },
        //销毁前处理方法
        destructor: function () {

        },
        //销毁组件
        destroy: function () {
            this.destructor();
            this.boundingBox.off();
            this.boundingBox.remove();
        }
    };

    return {
        Widget: Widget
    }
});