(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{313:function(e,t,l){"use strict";l.r(t);var r=l(0).a.extend({props:{item:{type:Object,required:!0},flat:{type:Boolean},clearable:{type:Boolean},readonly:{type:Boolean}},data:function(){return{}},mounted:function(){},methods:{},computed:{itemValue:{get:function(){return this.item},set:function(e){this.$emit("update:item",e)}}}}),n=l(76),o=l(94),c=l.n(o),d=l(337),m=l(311),v=l(374),V=l(368),f=l(309),_=l(334),y=l(369),w=l(370),h=l(371),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-card",{attrs:{color:"transparent",flat:e.flat}},[l("v-card-title",{staticClass:"pb-0"},[e._t("default"),e._v("\n    "+e._s(e.itemValue.name)+"\n    "),l("v-spacer"),e._v(" "),null!==e.itemValue.reward1?l("v-chip",{attrs:{outlined:"",color:"cyan"}},[l("v-icon",{attrs:{left:""}},[e._v("mdi-diamond")]),e._v("\n      "+e._s(e.itemValue.reward1)+"\n    ")],1):e._e(),e._v(" "),null!==e.itemValue.reward2?l("v-chip",{attrs:{outlined:"",color:"purple"}},[l("v-icon",{attrs:{left:""}},[e._v("mdi-cards-diamond")]),e._v("\n      "+e._s(e.itemValue.reward2)+"\n    ")],1):e._e()],2),e._v(" "),l("v-card-text",{staticClass:"pb-0"},[l("v-container",[l("v-row",{attrs:{dense:""}},[l("v-col",[l("v-text-field",{attrs:{type:"number","prepend-icon":"mdi-trophy-variant",label:"Trophy",clearable:e.clearable,readonly:e.readonly},model:{value:e.itemValue.score,callback:function(t){e.$set(e.itemValue,"score",t)},expression:"itemValue.score"}})],1),e._v(" "),l("v-col",[l("v-text-field",{attrs:{type:"number","prepend-icon":"mdi-format-list-checks",label:"Task",clearable:e.clearable,readonly:e.readonly},model:{value:e.itemValue.task,callback:function(t){e.$set(e.itemValue,"task",t)},expression:"itemValue.task"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardText:m.a,VCardTitle:m.b,VChip:v.a,VCol:V.a,VContainer:f.a,VIcon:_.a,VRow:y.a,VSpacer:w.a,VTextField:h.a})}}]);