/**
 * Created by 140315 on 2019/5/17.
 */
export default {
  data(){
    return {
      searchKey: {},
      persion: {
        btnAdd:true,
        btnEdit:false
      }
    }
  },
  computed:{
    isAdd(){
      return this.persion.btnAdd;
    }
  },
  methods:{
    log(){
      console.log('this is mixin log')
    },
    write(){
      console.log(this.$data)
    }
  }
}
