import jsPDF from "jspdf";
import html2canvas from "html2canvas"

export const stampa = async (job, pezzi) => {
    window.html2canvas = html2canvas;

    let canvas = document.querySelector(".canvas canvas");
    let url = await canvas.toDataURL("image/png", 1.0);    

    let pdf = new jsPDF({
        format: [500, 1350]
    })
    pdf.addImage(url, "JPEG", 18, 20, 140, 0)
    pdf.save(`cavalierino_${job}.pdf`)
}