function posNeg(a, b, negative){
  if(a>0 && b<0 && negative===false){return true};
  if(a<0 && b>0 && negative===false){return true};
  if(a<0 && b<0 && negative===true){return true};
  else{return false}
  
}