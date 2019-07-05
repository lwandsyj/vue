'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _HelloWorld = require('@/components/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: _HelloWorld2.default
  }, {
    path: '/prop',
    name: 'prop',
    component: function component(resolve) {
      return require(['../page/prop/index.vue'], resolve);
    }
  }, {
    path: '/mixin',
    name: 'mixin',
    component: function component(resolve) {
      return require(['../page/mixin/index.vue'], resolve);
    }
  }, {
    path: '/css',
    name: 'css',
    component: function component(resolve) {
      return require(['../page/css/index.vue'], resolve);
    }
  }]
});
//# sourceMappingURL=index.js.map