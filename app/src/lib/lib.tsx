export const angleToRadians = (angleInDeg: number) => (Math.PI / 180) * angleInDeg;

export const percent = (perc:number, scale:number, sign:boolean) => {
    if(!sign){
        if(scale*perc<0) return scale-(scale/perc*100)
        return scale-(scale*perc/100)
    }
    if(scale*perc<0) return scale+(scale/perc*100)
    return scale+(scale*perc/100)
}

export const getStyle = async (job: string) => {
    return await fetch(`https://menumal.it/data/style/${job}/style.txt`).then(async res => await res.json()).catch(()=>{console.log("Errore.")})
}
export const getLogo = async (job: string) => {
    return await fetch(`https://menumal.it/data/img/logo-${job}.png`).then(async res => await res.json()).catch(()=>{console.log("Errore.")})
}
export const getQr = async (job: string) => {
    return await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/${job}`).then(async res => await res.json()).catch(()=>{console.log("Errore.")})
}
export const getQrNoORder = async (job: string) => {
    return await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/${job}@`).then(async res => await res.json()).catch(()=>{console.log("Errore.")})
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