"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv = require("csvtojson");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const csvFilePath = 'items.csv';
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        return csv({ noheader: true }).fromFile(csvFilePath);
    });
}
function test2() {
    return __awaiter(this, void 0, void 0, function* () {
        const jsonArray = yield test();
        var doc = new PDFDocument();
        doc.pipe(fs.createWriteStream('output.pdf'));
        let i;
        for (i = 0; i < jsonArray.length; i += 5) {
            if (i + 5 < jsonArray.length) {
                doc.lineWidth(25);
                doc.addPage({ 'layout': 'landscape' })
                    .fontSize(20)
                    .text(jsonArray[i].field1 + '  :  ' + jsonArray[i].field2, 50, 100)
                    .moveTo(50, 170)
                    .lineTo(500, 170)
                    .stroke()
                    .moveDown()
                    .moveDown()
                    .moveDown()
                    .moveDown()
                    .text(jsonArray[i + 1].field1 + '  :  ' + jsonArray[+2].field2)
                    .moveTo(50, 270)
                    .lineTo(500, 270)
                    .stroke()
                    .moveDown()
                    .moveDown()
                    .moveDown()
                    .moveDown()
                    .text(jsonArray[i + 3].field1 + '  :  ' + jsonArray[i + 3].field2)
                    .moveTo(50, 360)
                    .lineTo(500, 360)
                    .stroke()
                    .moveDown()
                    .moveDown()
                    .moveDown()
                    .text(jsonArray[i + 4].field1 + '  :  ' + jsonArray[i + 4].field2)
                    .moveTo(50, 380)
                    .lineTo(500, 380)
                    .stroke();
            }
        }
        doc.end();
        console.log(jsonArray);
    });
}
// Async / await usage
test2();
//# sourceMappingURL=index.js.map