import{d as O,z as U,h as l,x as M,c as C,f as e,i as a,A as h,v as c,b as N,w as T,o as j,e as A,_ as D}from"./index-By7hHe-i.js";import{u as z,B as E}from"./Button-DJbLl46T.js";const K={class:"flex flex-col gap-4"},R=e("h1",null,"Settings",-1),W={class:"flex gap-2"},q=e("p",null,"With how many bits do you want to play?",-1),F={class:"flex gap-2"},G=e("p",null,"Show the amount of your own input?",-1),H={class:"flex gap-2"},I=e("p",null,"Show the value of every input?",-1),J={class:"flex gap-2"},L=e("p",null,"Allow skips of the current target?",-1),P={class:"flex gap-2"},Q=e("p",null,"Do you want a true binary display?",-1),X={class:"flex gap-2"},Y=e("p",null,"Key bindings?",-1),Z=O({__name:"Settings",props:{amountOfBits:{type:Number},amountOfBitsModifiers:{},showSwitchValues:{type:Boolean},showSwitchValuesModifiers:{},showUserScore:{type:Boolean},showUserScoreModifiers:{},allowSkips:{type:Boolean},allowSkipsModifiers:{},reversedOrder:{type:Boolean},reversedOrderModifiers:{},keybindings:{type:String},keybindingsModifiers:{}},emits:["update:amountOfBits","update:showSwitchValues","update:showUserScore","update:allowSkips","update:reversedOrder","update:keybindings"],setup(o){const{showUserScore:w,showSwitchValues:f,trackMoves:m,limitMoves:S,allowSkips:y,gameTime:g,amountOfBits:k,updateSettings:V,reversedOrder:x,keybindings:b}=z(),_=U(),n=l(o,"amountOfBits"),i=l(o,"showSwitchValues"),u=l(o,"showUserScore"),d=l(o,"allowSkips"),r=l(o,"reversedOrder"),p=l(o,"keybindings");M(()=>{n.value=k,i.value=f,u.value=w,d.value=y,r.value=x,p.value=b.join(",")});const B=()=>{var v;V({amountOfBits:n.value,showSwitchValues:i.value,showUserScore:u.value,trackMoves:m,limitMoves:S,allowSkips:d.value,gameTime:g,reversedOrder:r.value,keybindings:(v=p.value)==null?void 0:v.split(",")}),_.push({name:"game"})};return(v,s)=>(j(),C("div",K,[R,e("div",W,[q,a(e("input",{type:"number",min:"1",step:"1","onUpdate:modelValue":s[0]||(s[0]=t=>n.value=t)},null,512),[[h,n.value]])]),e("div",F,[G,a(e("input",{type:"checkbox","onUpdate:modelValue":s[1]||(s[1]=t=>u.value=t)},null,512),[[c,u.value]])]),e("div",H,[I,a(e("input",{type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=t=>i.value=t)},null,512),[[c,i.value]])]),e("div",J,[L,a(e("input",{type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=t=>d.value=t)},null,512),[[c,d.value]])]),e("div",P,[Q,a(e("input",{type:"checkbox","onUpdate:modelValue":s[4]||(s[4]=t=>r.value=t)},null,512),[[c,r.value]])]),e("div",X,[Y,a(e("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=t=>p.value=t)},null,512),[[h,p.value]])]),N(E,{onClick:B},{default:T(()=>[A("Save")]),_:1})]))}}),se=D(Z,[["__file","/Users/remcohorters/projects/binary/src/Views/Settings.vue"]]);export{se as default};