
import csv = require('csvtojson');
import PDFDocument = require('pdfkit');
import fs = require('fs');



const csvFilePath='items.csv';


async function test(){
  return csv({noheader:true}).fromFile(csvFilePath);
}

async function test2(){
  const jsonArray= await test();
  var doc = new PDFDocument();

  doc.pipe(fs.createWriteStream('output.pdf'));

  let i;
  for (i = 0; i < jsonArray.length; i += 5) { 

    if(i+5 < jsonArray.length){
      doc.lineWidth(25);

      doc.addPage({'layout': 'landscape'})
      .fontSize(20)
      .text(jsonArray[i].field1 + '  :  ' + jsonArray[i].field2 , 50, 100)
      .moveTo(50, 170)
      .lineTo(500, 170)
      .stroke()
      .moveDown()
      .moveDown()
      .moveDown()
      .moveDown()
      .text(jsonArray[i+1].field1 + '  :  ' + jsonArray[+2].field2)
      .moveTo(50, 270)
      .lineTo(500, 270)
      .stroke()
      .moveDown()
      .moveDown()
      .moveDown()
      .moveDown()
      .text(jsonArray[i+3].field1 + '  :  ' + jsonArray[i+3].field2)
      .moveTo(50, 360)
      .lineTo(500, 360)
      .stroke()
      .moveDown()
      .moveDown()
      .moveDown()
      .text(jsonArray[i+4].field1 + '  :  ' + jsonArray[i+4].field2)
      .moveTo(50, 380)
      .lineTo(500, 380)
      .stroke();
    }

  }

  doc.end();


  console.log(jsonArray);
}
 
// Async / await usage
test2();