import jsPDF from "jspdf";
import html2canvas from "html2canvas"
import ImagesToPdfPackage from "images-to-pdf-package";
import { saveAs } from "file-saver";

export const stampa = async (job) => {
    window.html2canvas = html2canvas;

    let canvas = document.querySelector(".canvas canvas");
    let url = await canvas.toDataURL("image/jpeg", 1.0);
    const image_obj = {
        src: url,
        height: "100",
        width: "100",
        imageType: "png",
    }
    let pdf = ImagesToPdfPackage([image_obj], "blob", false)
    saveAs(pdf, `cavalierino_${job}.pdf`)
}