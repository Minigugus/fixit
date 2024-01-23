import { useSyncExternalStore } from "react"

export interface FixFieldMappingDefinition {
  type: 'field'
  name: string
  required: boolean
}

export interface FixGroupMappingDefinition extends FixGroupDefinition {
  type: 'group'
  name: string
  required: boolean
}

export interface FixComponentMappingDefinition {
  type: 'component'
  name: string
  required: boolean
}

export type FixEntryMappingDefinition =
  | FixFieldMappingDefinition
  | FixGroupMappingDefinition
  | FixComponentMappingDefinition

export interface FixGroupDefinition {
  entries: Map<string, FixEntryMappingDefinition>
}

export interface FixMessageDefinition extends FixGroupDefinition {
  category: 'admin' | 'app' | 'Allocation'
  name: string
  msgType: string
}

export interface FixComponentDefinition extends FixGroupDefinition {
  name: string
}

interface FixFieldDefinition {
  id: number
  name: string
  type: FixFieldType
  valuesByEnum: Map<string, FixFieldValueDefinition>
  valuesByDescription: Map<string, FixFieldValueDefinition>
}

interface FixFieldValueDefinition {
  enum: string
  description: string
}

export type FixFieldType = keyof typeof TYPES_VALIDATORS

export interface FixDefinition {
  beginString: FixSupportedVersions
  major: string
  minor: string
  header: FixGroupDefinition
  trailer: FixGroupDefinition
  messages: Map<string, FixMessageDefinition>
  components: Map<string, FixComponentDefinition>
  fieldsById: Map<number, FixFieldDefinition>
  fieldsByName: Map<string, FixFieldDefinition>
}

const NUMERIC_FIELD_TYPES = ['FLOAT', 'INT', 'PRICE', 'PRICEOFFSET', 'QTY', 'LENGTH', 'SEQNUM'] as FixFieldType[]
const DATETIME_FIELD_TYPES = ['UTCTIMESTAMP'] as FixFieldType[]

export const isNumericFieldType = (type: FixFieldType | undefined) => NUMERIC_FIELD_TYPES.includes(type!)
export const isDateTimeFieldType = (type: FixFieldType | undefined) => DATETIME_FIELD_TYPES.includes(type!)

const TYPES_VALIDATORS = {
  AMT: () => true,
  BOOLEAN: () => true,
  CHAR: () => true,
  COUNTRY: () => true,
  CURRENCY: () => true,
  DATA: () => true,
  DATE: () => true,
  'DAY-OF-MONTH': () => true,
  DAYOFMONTH: () => true,
  EXCHANGE: () => true,
  FLOAT: () => true,
  INT: () => true,
  LENGTH: () => true,
  LOCALMKTDATE: () => true,
  'MONTH-YEAR': () => true,
  MONTHYEAR: () => true,
  MULTIPLECHARVALUE: () => true,
  MULTIPLESTRINGVALUE: () => true,
  MULTIPLEVALUESTRING: () => true,
  NUMINGROUP: () => true,
  PERCENTAGE: () => true,
  PRICE: () => true,
  PRICEOFFSET: () => true,
  QTY: () => true,
  SEQNUM: () => true,
  STRING: () => true,
  TIME: () => true,
  TZTIMEONLY: () => true,
  TZTIMESTAMP: () => true,
  UTCDATE: () => true,
  UTCDATEONLY: () => true,
  UTCTIMEONLY: () => true,
  UTCTIMESTAMP: () => true,
  XMLDATA: () => true,
} satisfies Record<string, (v: string) => boolean>

export type FixSupportedVersions =
  | 'FIX.4.0'
  | 'FIX.4.1'
  | 'FIX.4.2'
  | 'FIX.4.3'
  | 'FIX.4.4'
  | 'FIX.5.0'
  | 'FIXT.1.1'

let definitions: Record<FixSupportedVersions, FixDefinition> = Object.create(null)
const subscribers = new Set<() => void>()

const subscribe = (subscriber: () => void) => {
  subscribers.add(subscriber)
  return () => subscribers.delete(subscriber)
}

export const useFixDefinitions = () => useSyncExternalStore(
  subscribe,
  () => definitions
)

const tt = (window['trustedTypes' as any] as any).createPolicy('XMLPolicy', {
  createHTML: (s: string) => s
})

const DOM_PARSER = new DOMParser()

const parseFieldMappingElement = (root: Element, group: FixGroupDefinition['entries']) => {
  const name = root.getAttribute('name')
  const required = root.getAttribute('required')
  if (name && required)
    group.set(name, { type: 'field', name, required: required === 'Y' })
}

const parseGroupMappingElement = (root: Element, group: FixGroupDefinition['entries']) => {
  const name = root.getAttribute('name')
  const required = root.getAttribute('required')
  const entries: typeof group = new Map()
  if (!(name && required)) return
  parseGroupElement(root, entries)
  group.set(name, {
    type: 'group',
    name,
    required: required === 'Y',
    entries
  })
}

const parseComponentMappingElement = (root: Element, group: FixGroupDefinition['entries']) => {
  const name = root.getAttribute('name')
  const required = root.getAttribute('required') || 'Y'
  if (name && required)
    group.set(name, { type: 'component', name, required: required === 'Y' })
}

const parseMessageElement = (root: Element, messages: Map<string, FixMessageDefinition>) => {
  const name = root.getAttribute('name')
  const msgType = root.getAttribute('msgtype')
  const category = root.getAttribute('msgcat')
  const entries: FixMessageDefinition['entries'] = new Map()
  if (!(name && msgType && (category === 'admin' || category === 'app' || category === 'Allocation'))) return
  parseGroupElement(root, entries)
  messages.set(msgType, {
    category,
    name,
    msgType,
    entries
  })
}

const parseComponentElement = (root: Element, components: Map<string, FixComponentDefinition>) => {
  const name = root.getAttribute('name')
  const entries: FixMessageDefinition['entries'] = new Map()
  if (!name) return
  parseGroupElement(root, entries)
  components.set(name, {
    name,
    entries
  })
}

const parseFieldValueElement = (root: Element, valuesByEnum: Map<string, FixFieldValueDefinition>, valuesByDescription: Map<string, FixFieldValueDefinition>) => {
  const enum_ = root.getAttribute('enum')
  const description = root.getAttribute('description')
  if (!(enum_ && description)) return
  const value = { enum: enum_, description }
  valuesByEnum.set(enum_, value)
  valuesByDescription.set(description, value)
}

const isTypeValid = (type: string | null): type is FixFieldType => !!type

const parseFieldElement = (root: Element, fieldsById: Map<number, FixFieldDefinition>, fieldsByName: Map<string, FixFieldDefinition>) => {
  const id = Number(root.getAttribute('number') || '-')
  const name = root.getAttribute('name')
  const type = root.getAttribute('type')
  if (isNaN(id) || !name || !isTypeValid(type)) return
  const valuesByEnum: FixFieldDefinition['valuesByEnum'] = new Map()
  const valuesByDescription: FixFieldDefinition['valuesByDescription'] = new Map()
  for (const el of root.children)
    switch (el.localName) {
      case 'value':
        parseFieldValueElement(el, valuesByEnum, valuesByDescription)
        break
    }
  const field = {
    id,
    name,
    type,
    valuesByEnum,
    valuesByDescription
  }
  fieldsById.set(id, field)
  fieldsByName.set(name, field)
}

const parseGroupElement = (root: Element, group: FixGroupDefinition['entries']) => {
  for (const el of root.children)
    switch (el.localName) {
      case 'field':
        parseFieldMappingElement(el, group)
        break
      case 'group':
        parseGroupMappingElement(el, group)
        break
      case 'component':
        parseComponentMappingElement(el, group)
        break
    }
}

const parseMessagesElement = (root: Element, messages: Map<string, FixMessageDefinition>) => {
  for (const el of root.children)
    switch (el.localName) {
      case 'message':
        parseMessageElement(el, messages)
        break
    }
}

const parseComponentsElement = (root: Element, components: Map<string, FixComponentDefinition>) => {
  for (const el of root.children)
    switch (el.localName) {
      case 'component':
        parseComponentElement(el, components)
        break
    }
}

const parseFieldsElement = (root: Element, fieldsById: Map<number, FixFieldDefinition>, fieldsByName: Map<string, FixFieldDefinition>) => {
  for (const el of root.children)
    switch (el.localName) {
      case 'field':
        parseFieldElement(el, fieldsById, fieldsByName)
        break
    }
}

const parseFixElement = (root: Element, beginString: FixSupportedVersions): FixDefinition => {
  const major = root.getAttribute('major') || ''
  const minor = root.getAttribute('minor') || ''
  const headers: FixGroupDefinition['entries'] = new Map()
  const trailers: FixGroupDefinition['entries'] = new Map()
  const messages = new Map<string, FixMessageDefinition>()
  const components = new Map<string, FixComponentDefinition>()
  const fieldsById = new Map<number, FixFieldDefinition>()
  const fieldsByName = new Map<string, FixFieldDefinition>()
  for (const el of root.children)
    switch (el.localName) {
      case 'header':
        parseGroupElement(el, headers)
        break
      case 'trailer':
        parseGroupElement(el, trailers)
        break
      case 'messages':
        parseMessagesElement(el, messages)
        break
      case 'components':
        parseComponentsElement(el, components)
        break
      case 'fields':
        parseFieldsElement(el, fieldsById, fieldsByName)
        break
    }
  return {
    beginString,
    major,
    minor,
    header: { entries: headers },
    trailer: { entries: trailers },
    messages,
    components,
    fieldsById,
    fieldsByName
  }
}

const parseDefinitions = async (url: string, root: URL, beginString: FixSupportedVersions): Promise<FixDefinition[]> => {
  const res = await fetch(new URL(url, root))
  const dom = DOM_PARSER.parseFromString(tt.createHTML(await res.text()), 'application/xml')
  for (const el of dom.children)
    if (el.localName === 'fix')
      return [parseFixElement(el, beginString)]
  return []
}

{
  const ROOT = new URL('./fixdefs/', window.location.href)

  Promise.all([
    parseDefinitions('FIX40.xml', ROOT, 'FIX.4.0'),
    parseDefinitions('FIX41.xml', ROOT, 'FIX.4.1'),
    parseDefinitions('FIX42.xml', ROOT, 'FIX.4.2'),
    parseDefinitions('FIX43.xml', ROOT, 'FIX.4.3'),
    parseDefinitions('FIX44.xml', ROOT, 'FIX.4.4'),
    parseDefinitions('FIX50.xml', ROOT, 'FIX.5.0'),
    parseDefinitions('FIX50SP1.xml', ROOT, 'FIXT.1.1'),
  ]).then(defs => definitions = Object.fromEntries(defs.map(([def]) => [def.beginString, def])) as Record<FixSupportedVersions, FixDefinition>)
    .then(() => subscribers.forEach(s => s()))
}
