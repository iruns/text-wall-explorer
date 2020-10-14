export enum OrderingSystem {
  'Number',
  'Letter',
  'Roman',
  'Custom',
}

export enum OrderingCasing {
  'Lowercase',
  'Uppercase',
  'Capitalized',
}

export type PDF2JSONResult = {
  formImage: {
    Pages: {
      Texts: {
        x: number
        y: number
        w: number
        R: {
          T: string
        }[]
      }[]
    }[]
  }
}

export type PDFLinePart = {
  text: string
  x: number
  width: number
}

export class PDFLine {
  text: string = ''
  parts: PDFLinePart[] = []
  page: number = 0
  x: number = 0
  y: number = 0
  width: number = 0
  centerX: number = 0
}

export type Section = {
  config: SectionConfig
  order: number
  orderIdentifier: string
  title?: string
  content?: string
  subsections?: Section[]
}

export type SectionConfig = {
  /** The basis of the ordering e.g Number(1, 2, ...), LetterUppercase ('I', 'II', ...) */
  system: OrderingSystem
  /** A function that will produce an ordering string of a given index (starting from 1) */
  getOrderingOfIdx?: (idx: number) => string
  /** Casing for ordering with letters */
  orderingCasing?: OrderingCasing
  /** The string before the ordering string (including spaces) */
  prefix?: string
  /** The string after the ordering string (including spaces) */
  suffix?: string
  /** Does the ordering has a title */
  hasTitle?: boolean
  /** Max number of lines after the ordering for title (or content if has no title) */
  maxOrderingEmptyLines?: number
  /** Max number of empty lines within the title.
   * Anything after that will not be considered the title anymore */
  maxTitleEmptyLines?: number
  /** Does the ordering content */
  hasContent?: boolean
  /** Max number of empty lines within the content, excluding the subsections.
   * Anything after that will not be considered the content anymore */
  maxContentEmptyLines?: number
  /** The possible strings that might mark the content's ending  */
  contentEndings?: string[]
}
