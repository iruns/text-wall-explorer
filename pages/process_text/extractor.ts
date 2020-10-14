import decodeUriComponent from 'decode-uri-component'
import sectionConfigs from '~/static/tempSectionConfigs'
import {
  PDF2JSONResult,
  PDFLine,
  Section,
  SectionConfig,
} from '~/types/textOrganization'

export function configToRegex(config: SectionConfig) {
  // let regexString = config.prefix? +
}

export function resultToPDFLine(fromPDF: PDF2JSONResult) {
  const result: PDFLine[] = []
  let lineObj: PDFLine | undefined

  fromPDF.formImage.Pages.map((page, idx) => {
    let currentY: number | undefined
    page.Texts.map((part) => {
      // if new OR the y is different
      if (!lineObj || part.y === currentY) {
        // create a new line object
        lineObj = new PDFLine()
        lineObj.page = idx + 1
        result.push(lineObj)
      }
    })
  })

  return result
}

export function extract(text: string) {
  // remove extra spaces
  text = text.replaceAll(/  +/, ' ')

  const sections: Section[] = []

  const lines = text.split(/\r?\n/)
  // for each line, run processor
  for (let l = 0; l < lines.length; l++) {
    // try to find the ordering of a section
    for (let s = 0; s < sectionConfigs.length; s++) {
      const config: SectionConfig = sectionConfigs[s]
      // const regexString: string = config.prefix? +
    }
    // if ordering found
    // run for each line
    //  if another ordering is found
    //    if the order is 0 OR if there's a colon before
    //      save the in between lines to content
    //      start a sub
  }
}

// split to pages
// for each group of text with the same y
//  create a new line object
//  for each text, convert the html encoding
//  save to a new array
//  merge the texts
//  save the x of each part, and the center x of the line
//  if there is a colon, split the line object to two
//
// for each line
//  determine if this is the content, section continuation, a sub, or a continuation of a super using these:
//   - prev line ended by a terminator => subsection+
//   - prev line ended by colon => subsection++
//   - x is =
//    - can be section start
//     - same section config, continued => continuation+++++
//   - x is > => subsection+
//   - x is < => supersection++, find out which

//   if section start not found
//    add to content, but save to possible problems
//   else
//    if has content
//     save the content's x
//     if passes some checks but fail others
//      add to one with highest score, but save to possible problems
