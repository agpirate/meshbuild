var e="";const t={group:{type:String,default:"client"},profile:{group:{type:String,default:"client",role:{xrole:[],clients:["likes","comment"],upgraded:["clients","likes","comment"],creatorrw:2001,creator:2001,admin:2001},enum:["upgraded","client","creator","admin","xrole"]},role:[{type:String,default:"",enum:["likes","comments","clients","*","***",""]}],capability:{type:String,default:"1010"},accstage:{type:Array,default:[]}},profileMeta:{type:String,default:"client",role:{client:["clients","likes","comments"]},enum:["upgraded","client","creator","admin"]},saleit:{group:{type:String,default:"client",role:{xrole:[],client:["likes","comments","clients"],upgraded:["clients","likes","comments"],creatorrw:2001,creator:2001,admin:2001},enum:["upgraded","client","creator","admin","xrole"]},role:[{type:String,default:"",enum:["likes","comments","clients","*","***",""]}],capability:{type:String,default:"1010"},accstage:{type:Array,default:[]}},saleclient:{group:{type:String,default:"client",role:{xrole:[],client:["likes","comments","clients"],upgraded:["clients","likes","comments"],creatorrw:2001,creator:2001,admin:2001},enum:["upgraded","client","creator","admin","xrole"]},role:[{type:String,default:"",enum:["likes","comments","clients","*","***",""]}],capability:{type:String,default:"1010"},accstage:{type:Array,default:[]}}},l={acctype_group:{type:String,default:"clients"}},i={_stage_:{type:Number,default:1,$ifNull:1},profile:{type:Array,default:["/saleitgr/saleitpng.png"],$ifNull:["/saleitgr/saleitpng.png"],vtype:"file"},cover:{type:String,default:"/saleitgr/saleitpng.png",$ifNull:"/saleitgr/saleitpng.png",vtype:"file"},profileMeta:{type:Array,default:[{mimetype:"",encoding:"",originalname:"",destination:"",fieldname:"",filename:"",size:"",path:"",geoLocation:""}],ifNull:[{mimetype:"",encoding:"",originalname:"",destination:"",fieldname:"",filename:"",size:"",path:"",geoLocation:""}]},userName:{type:String,Vtype:"String",default:"",$ifNull:""},name:{type:String,Vtype:"String",default:"",$ifNull:"",validRuleset:"[ val => val && val.length > 0 || 'Please type something']"},lastName:{type:String,Vtype:"String",default:"",$ifNull:""},enrollKey:{type:String,vtype:"String",default:"",$ifNull:""},password:{type:String,vtype:"String",default:"",$ifNull:""},phone:{type:Number,vtype:"Number",default:0,$ifNull:0,required:!0,index:{unique:!0,dropDups:!0,length:10},rules:[{type:"required"},{type:"minLength",value:9},{type:"maxLength",value:10},{type:"pattern",value:"^0[97]\\d+|^[97]\\d+$"}]},phoneCode:{type:Array,vtype:"Array",default:["",""],$ifNull:["",""],required:!0,rules:[{type:"required"}]},location:{country:{type:String,default:"",$ifNull:""},provinance:{type:String,default:"",$ifNull:""},city:{type:String,default:"",$ifNull:""},street:{type:String,default:"",$ifNull:""}},geolocation:{lat:{type:Number,vtype:"Number",default:0,$ifNull:0},long:{type:Number,vtype:"Number",default:0,$ifNull:0}},verified:{type:String,Vtype:"String",default:"0",$ifNull:"",enum:["0","1"]},cart:{type:Array,Vtype:"Array",default:[],$ifNull:[]},contacts:{type:Array,vtype:"Array",default:[],$ifNull:[],index:{length:10}},queryWeight:{1:{type:Array,Vtype:"Array",default:[1,50,50,50],$ifNull:[1,50,50,50]},2:{type:String,Vtype:"String",default:"1.1.1.1",$ifNull:"1.1.1.1"},3:{type:String,Vtype:"String",default:"1.1.1.1",$ifNull:"1.1.1.1"}},acckey:{type:e,ref:"acctypes"}},r={userID:{type:String,default:""},location:{type:String,default:""},activities:{name:{type:String,default:""},amount:{type:Number,vtype:"Number",default:0}},interests:{type:String,default:""}};export{t as _permission,l as _userPermissions,r as profileMetaSchema,i as profileSchema};
