import jsPDF from "jspdf";
import html2canvas from "html2canvas"

export const stampa = async (job, pezzi) => {
    window.html2canvas = html2canvas;

    let canvas = document.querySelector(".canvas canvas");
    let url = await canvas.toDataURL("image/png", 1.0);    

    let pdf = new jsPDF()
    pdf.addImage(url, "JPEG", 50, 50, 0, 0)
    pdf.save(`cavalierino_${job}.pdf`)
}