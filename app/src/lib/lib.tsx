export const angleToRadians = (angleInDeg: number) => (Math.PI / 180) * angleInDeg;

export const percent = (perc:number, scale:number, sign:boolean) => {
    if(!sign){
        if(scale*perc<0) return scale-(scale/perc*100)
        return scale-(scale*perc/100)
    }
    if(scale*perc<0) return scale+(scale/perc*100)
    return scale+(scale*perc/100)
}
      /*function httpGet(theUrl: string)
      {
          const xmlhttp=new XMLHttpRequest();
          xmlhttp.onreadystatechange=function()
          {
              if (xmlhttp.readyState==4 && xmlhttp.status==200)
              {
                  console.log(xmlhttp.responseText);
              }
          }
          xmlhttp.open("GET", theUrl, false );
          xmlhttp.send();    
      }
      httpGet("https://menumal.it/data/style/test/style.txt")*/