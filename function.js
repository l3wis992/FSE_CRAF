function generatePDF(){
    const element = document.getElementById("Form");

    html2pdf()
    .from(element)
    .save();
}