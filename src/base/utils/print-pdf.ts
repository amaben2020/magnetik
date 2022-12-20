import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

export const printPDF = async (id: string) => {
  try {
    const domElement: HTMLElement = document.getElementById(id);

    const canvas = await html2canvas(domElement, {
      onclone: (document) => {
        document.getElementById('print').style.visibility = 'hidden';
      },
    })

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPdf();
    pdf.addImage(imgData, 'JPEG', 10, 10);
    pdf.save(`${new Date().toISOString()}.pdf`);
  } catch (error) {
    console.log(`There was an error with the download: ${error}`);
  }

};