const fs = require('fs')
const PDFParser = require('pdf2json')

const pdfParser = new PDFParser()

pdfParser.on('pdfParser_dataError', (errData) =>
  // console.error(errData.parserError)
)
pdfParser.on('pdfParser_dataReady', (pdfData) => {
  fs.writeFileSync(
    './static/ciptaker.json',
    JSON.stringify(pdfData)
  )
})

pdfParser.loadPDF('./static/ciptaker.pdf')
