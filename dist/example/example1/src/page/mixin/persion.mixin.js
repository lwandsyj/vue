'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by 140315 on 2019/5/17.
 */
exports.default = {
  data: function data() {
    return {
      searchKey: {},
      persion: {
        btnAdd: true,
        btnEdit: false
      }
    };
  },

  computed: {
    isAdd: function isAdd() {
      return this.persion.btnAdd;
    }
  },
  methods: {
    log: function log() {
      console.log('this is mixin log');
    },
    write: function write() {
      console.log(this.$data);
    }
  }
};
//# sourceMappingURL=persion.mixin.js.map