function startOz(str){
  if(str.substring(0,2).startsWith('oz'))
                                   {return('oz')}
else if(str.substring(0,1).startsWith('o'))
                                   {return('o')}
  else if(str.substring(1,2).startsWith('z'))
                                   {return('z')}
  else return ('')
  
}