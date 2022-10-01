function frontBack(str){
  if (str.length!=1){
    let a = str.substring(0,1)
    let b = str.substring(1,str.length-1)
    let c = str.substring(str.length,str.length-1)
    let d = c+b+a
   return d
}
else {return str}
  
}