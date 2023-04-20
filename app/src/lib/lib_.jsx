import jsPDF from "jspdf";
import html2canvas from "html2canvas"

export const stampa = async (job, pezzi) => {
    window.html2canvas = html2canvas;

    let canvas = document.querySelector(".canvas canvas");
    let url = await canvas.toDataURL("image/png", 1.0);    
    console.log(pezzi)
    /*const image_obj = {
        src: url,
        height: "800",
        width: "800",
        imageType: "png",
    }
    let pdf = ImagesToPdfPackage([image_obj], "blob", false)*/
    //saveAs(pdf, `cavalierino_${job}.pdf`)

    /*let image = Jimp.read(url, (err, img) => {
        if(err) throw err;
        img.resize(256, 256).quality(50)
    })*/
    let pdf = new jsPDF({
        orientation: "p",
        format: [800, 2250]
    })
    pdf.addImage(url, "JPEG", 22, 0)
    pdf.save(`cavalierino_${job}.pdf`)
}