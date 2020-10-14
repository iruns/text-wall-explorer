import writtenNumber from 'written-number'
import {
  OrderingCasing,
  OrderingSystem,
  SectionConfig,
} from '~/types/textOrganization'

const configs: SectionConfig[] = [
  {
    system: OrderingSystem.Roman,
    orderingCasing: OrderingCasing.Uppercase,
    prefix: 'BAB',
    hasTitle: true,
    maxOrderingEmptyLines: 1,
  },
  {
    system: OrderingSystem.Number,
    prefix: 'Pasal',
    hasContent: true,
    maxOrderingEmptyLines: 2,
  },
  {
    system: OrderingSystem.Number,
    prefix: 'Paragraf',
    hasContent: true,
    maxOrderingEmptyLines: 2,
  },
  {
    system: OrderingSystem.Number,
    suffix: '.',
    hasContent: true,
  },
  {
    system: OrderingSystem.Number,
    orderingCasing: OrderingCasing.Lowercase,
    suffix: '.',
    hasContent: true,
  },
  {
    system: OrderingSystem.Number,
    prefix: '(',
    suffix: ')',
    hasContent: true,
  },
  {
    system: OrderingSystem.Number,
    orderingCasing: OrderingCasing.Lowercase,
    prefix: '(',
    suffix: ')',
    hasContent: true,
  },
  {
    system: OrderingSystem.Custom,
    getOrderingOfIdx: (idx) => {
      return writtenNumber(idx, { lang: 'id' })
    },
    prefix: 'Bagian Ke',
    orderingCasing: OrderingCasing.Lowercase,
    hasContent: true,
    maxOrderingEmptyLines: 1,
  },
]

export default configs
