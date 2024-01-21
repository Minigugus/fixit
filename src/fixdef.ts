import { useSyncExternalStore } from "react"

interface FixFieldMappingDefinition {
  type: 'field'
  name: string
  required: boolean
}

interface FixGroupMappingDefinition {
  type: 'group'
  name: string
  required: boolean
  entries: Map<string, FixEntryMappingDefinition>
}

type FixEntryMappingDefinition =
  | FixFieldMappingDefinition
  | FixGroupMappingDefinition

interface FixGroupDefinition {
  entries: Map<string, FixEntryMappingDefinition>
}

interface FixMessageDefinition extends FixGroupDefinition {
  category: 'admin' | 'app'
  name: string
  msgType: string
}

interface FixFieldDefinition {
  id: number
  name: string
  type: FixFieldType
  values: Map<string, FixFieldValueDefinition>
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
  fieldsById: Map<number, FixFieldDefinition>
  fieldsByName: Map<string, FixFieldDefinition>
}

const TYPES_VALIDATORS = {
  AMT: () => true,
  BOOLEA: () => true,
  BOOLEAN: () => true,
  CHA: () => true,
  CHAR: () => true,
  CURRENCY: () => true,
  DATA: () => true,
  DAYOFMONTH: () => true,
  EXCHANGE: () => true,
  FLOAT: () => true,
  IN: () => true,
  INT: () => true,
  LOCALMKTDATE: () => true,
  MONTHYEAR: () => true,
  MULTIPLEVALUESTRIN: () => true,
  PRICE: () => true,
  PRICEOFFSET: () => true,
  QTY: () => true,
  STRIN: () => true,
  STRING: () => true,
  UTCDATE: () => true,
  UTCTIMEONLY: () => true,
  UTCTIMESTAMP: () => true,
} satisfies Record<string, (v: string) => boolean>

export type FixSupportedVersions =
  | 'FIX.4.0'
  | 'FIX.4.1'
  | 'FIX.4.2'
  | 'FIX.4.3'
  | 'FIX.4.4'

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

const parseMessageElement = (root: Element, messages: Map<string, FixMessageDefinition>) => {
  const name = root.getAttribute('name')
  const msgType = root.getAttribute('msgtype')
  const category = root.getAttribute('msgcat')
  const entries: FixMessageDefinition['entries'] = new Map()
  if (!(name && msgType && (category === 'admin' || category === 'app'))) return
  parseGroupElement(root, entries)
  messages.set(msgType, {
    category,
    name,
    msgType,
    entries
  })
}

const parseFieldValueElement = (root: Element, fields: Map<string, FixFieldValueDefinition>) => {
  const enum_ = root.getAttribute('enum')
  const description = root.getAttribute('description')
  if (enum_ && description)
    fields.set(enum_, { enum: enum_, description })
}

const isTypeValid = (type: string | null): type is FixFieldType => !!(type && Object.prototype.hasOwnProperty.call(TYPES_VALIDATORS, type))

const parseFieldElement = (root: Element, fieldsById: Map<number, FixFieldDefinition>, fieldsByName: Map<string, FixFieldDefinition>) => {
  const id = Number(root.getAttribute('number') || '-')
  const name = root.getAttribute('name')
  const type = root.getAttribute('type')
  if (isNaN(id) || !name || !isTypeValid(type)) return
  const values: FixFieldDefinition['values'] = new Map()
  for (const el of root.children)
    switch (el.localName) {
      case 'value':
        parseFieldValueElement(el, values)
        break
    }
  const field = {
    id,
    name,
    type,
    values
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
  ]).then(defs => definitions = Object.fromEntries(defs.map(([def]) => [def.beginString, def])) as Record<FixSupportedVersions, FixDefinition>)
    .then(() => subscribers.forEach(s => s()))
}
