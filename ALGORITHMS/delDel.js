function delDel(str){
if(str.substring(1,str.length).startsWith("del"))
{return str.substring(0,1)+str.substring(4, str.length)}
  else return str
}