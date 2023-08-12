import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
import draggable from 'vuedraggable'
let id = 3;
export default {
  name: 'manage-watchlist',
  components: {mCustomScrollBar, draggable},
  
  props: ["parent" , "child"],
  data () {
    return {
      selected: [],
      emailEnabled: false,
      watchlistName:"Watchlist",
      watchlistId:1,
      deleteStock:false,
      parentProp:this.parent,
      childProp:this.child,
      // watchlistName:[
      //   {
      //     id: 1,
      //     name:"Watchlist",
      //     disable:true,
      //     action:false
      //   }
      // ],
      checkList:[
        {
          id:1,
          name:"RELI",
          compName:"Reliance Global Group",
          
        },
        {
          id:2,
          name:"HEROMOTOCORP",
          compName:"Hero Motocorp Limited",
         
        },
        {
          id:3,
          name:"PVR",
          compName:"PVR Cinemas",
          
        },
        
      ],
      dragging: false,
    }
  },
  computed: {
    draggingInfo() {
      console.log("hi")
      return this.dragging ? "under drag" : "";
     
    },
    selectAll: {
      get: function () {
          return this.checkList ? this.selected.length == this.checkList.length : false;
         
      },
      set: function (value) {
          var selected = [];
          
          if (value) {
              this.checkList.forEach(function (user) {
              selected.push(user.id);
                  //var len = selected.length;
                  //console.log(len)
              });
          }

          this.selected = selected;
      }
  }
  },
  mounted () {
    $(".select-check-list ").mCustomScrollbar();
    console.log("parent" ,this.parentProp);
    console.log("child" ,this.childProp);
  },
  methods: {
    removeAt(idx) {
      console.log("remove")
      this.watchlist.splice(idx, 1);
    },
    add: function() {
      id++;
      this.watchlist.push({ name: "Juan " + id, id, text: "" });
    },
    rename(){
      this.emailEnabled = true
    },
    save(){
      this.emailEnabled = false
    },
    cancel(){
      this.emailEnabled = false
    },
    backFunc(){
      console.log("back");
      this.parentProp = true;
      this.childProp = false;
     
      this.$emit('parent' , this.parentProp);
      this.$emit('child' , this.childProp);
      console.log("parent1" ,this.parentProp);
      console.log("child1" ,this.childProp);
    }
    // back(){
    //   // this.$emit('parent', this.parentProp)
		//   // this.$emit('child', this.childProp)
    // }
   
  }
}


