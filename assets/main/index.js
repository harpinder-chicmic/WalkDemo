System.register("chunks:///_virtual/GamePlay.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,i,e,n,r,l,s,a,u,h,d,g;return{setters:[function(t){o=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,n=t.assertThisInitialized,r=t.defineProperty},function(t){l=t.cclegacy,s=t._decorator,a=t.Sprite,u=t.UITransform,h=t.Vec3,d=t.Animation,g=t.Component}],execute:function(){var c,p,v,m,C,y,f;l._RF.push({},"e913fHnOU5CcJ1/h2lgHnF1","GamePlay",void 0);var M,w=s.ccclass,b=s.property;!function(t){t[t.NONE=0]="NONE",t[t.LEFT=1]="LEFT",t[t.RIGHT=2]="RIGHT",t[t.UP=3]="UP",t[t.DOWN=4]="DOWN"}(M||(M={}));t("GamePlay",(c=w("GamePlay"),p=b(a),v=b(a),c((y=o((C=function(t){function o(){for(var o,i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return o=t.call.apply(t,[this].concat(l))||this,e(n(o),"girl",y,n(o)),e(n(o),"bg",f,n(o)),r(n(o),"girlMovement",M.NONE),r(n(o),"xSpeed",2),r(n(o),"ySpeed",1),r(n(o),"totalMoveCount",0),r(n(o),"curentMoveCount",0),o}i(o,t);var l=o.prototype;return l.start=function(){var t,o=this,i=(600-this.girl.node.position.y)/(null===(t=this.girl.node.getComponent(u))||void 0===t?void 0:t.contentSize.height);this.girl.node.setScale(new h(i,i,1)),window.up=function(t){var i;o.stopAnimationAndWalk(),o.girlMovement=M.UP,o.totalMoveCount=10*t,null===(i=o.girl.getComponent(d))||void 0===i||i.play("up"),o.schedule(o.moveGirl,.001,o.totalMoveCount)},window.down=function(t){var i;o.stopAnimationAndWalk(),o.girlMovement=M.DOWN,o.totalMoveCount=10*t,null===(i=o.girl.getComponent(d))||void 0===i||i.play("down"),o.schedule(o.moveGirl,.001,o.totalMoveCount)},window.left=function(t){var i;o.stopAnimationAndWalk(),o.girlMovement=M.LEFT,o.totalMoveCount=10*t,null===(i=o.girl.getComponent(d))||void 0===i||i.play("left"),o.schedule(o.moveGirl,.001,o.totalMoveCount)},window.right=function(t){var i;o.stopAnimationAndWalk(),o.girlMovement=M.RIGHT,o.totalMoveCount=10*t,null===(i=o.girl.getComponent(d))||void 0===i||i.play("right"),o.schedule(o.moveGirl,.001,o.totalMoveCount)}},l.moveGirl=function(){if(!this.checkBound(this.girlMovement))return this.curentMoveCount=0,this.totalMoveCount=0,void this.stopAnimationAndWalk();switch(this.girlMovement){case M.LEFT:this.girl.node.setPosition(new h(this.girl.node.position.x-this.xSpeed,this.girl.node.position.y,0));break;case M.RIGHT:this.girl.node.setPosition(new h(this.girl.node.position.x+this.xSpeed,this.girl.node.position.y,0));break;case M.UP:var t;this.girl.node.setPosition(new h(this.girl.node.position.x,this.girl.node.position.y+this.ySpeed,0));var o=(600-this.girl.node.position.y)/(null===(t=this.girl.node.getComponent(u))||void 0===t?void 0:t.contentSize.height);this.girl.node.setScale(new h(o,o,1));break;case M.DOWN:var i;this.girl.node.setPosition(new h(this.girl.node.position.x,this.girl.node.position.y-this.ySpeed,0));var e=(600-this.girl.node.position.y)/(null===(i=this.girl.node.getComponent(u))||void 0===i?void 0:i.contentSize.height);this.girl.node.setScale(new h(e,e,1))}this.curentMoveCount++,this.curentMoveCount>=this.totalMoveCount&&(this.curentMoveCount=0,this.totalMoveCount=0,this.stopAnimationAndWalk())},l.stopAnimationAndWalk=function(){var t;this.unschedule(this.moveGirl),null===(t=this.girl.getComponent(d))||void 0===t||t.stop()},l.checkBound=function(t){var o=!0,i=this.bg.node.getComponent(u).width,e=this.bg.node.getComponent(u).height,n=this.girl.node.getComponent(u).getBoundingBox().width,r=this.girl.node.getComponent(u).getBoundingBox().height,l=this.girl.node.position.x,s=this.girl.node.position.y;switch(t){case M.LEFT:o=!(l<=-i/2+n/2);break;case M.RIGHT:o=!(l>=i/2-n/2);break;case M.UP:o=!(s>=e/2-r/2);break;case M.DOWN:o=!(s<=-e/2+r/2)}return o},o}(g)).prototype,"girl",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=o(C.prototype,"bg",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=C))||m));l._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GamePlay.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});