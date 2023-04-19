import jsPDF from "jspdf";

export const stampa = () => {
    const data = document.querySelector(".canvas canvas")
    console.log(data)
    let pdf = new jsPDF()
    pdf.html(data, {
        callback: function (pdf) {
          pdf.save('cavalierino.pdf');
        }
     })
}