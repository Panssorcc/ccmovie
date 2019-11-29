import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){

    return function( opts ){  //配置参数

        var defaults = {   //默认值
            title : '',
            content : '',
            cancel : '',
            ok : '',
            handleCancel : null,
            handleOk : null
        };
    
        var MyComponent = Vue.extend(MessageBox);

        for(var attr in opts){ 
            defaults[attr] = opts[attr];
        }

        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                title : defaults.title,
                content : defaults.content,
                cancel : defaults.cancel,
                ok : defaults.ok
            },
            methods : {
                handleCancel(){
                    console.log(defaults.handleCancel);//handleCancel() {console.log(1); }
                    console.log(defaults.handleCancel.call(this));
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild( vm.$el );//移除弹窗
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild( vm.$el );
                }
            }
        });

        document.body.appendChild( vm.$el );    //添加弹窗到DOM

    };

})();