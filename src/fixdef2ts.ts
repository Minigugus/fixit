import type { FixDefinition, FixEntryMappingDefinition, FixFieldType, FixGroupDefinition, FixMessageDefinition } from "./fixdef";

const NUMERIC_FIELD_TYPES = ['FLOAT', 'INT', 'PRICE', 'PRICEOFFSET', 'QTY', 'LENGTH', 'SEQNUM'] as FixFieldType[]

const generateGroupEntry = (entry: FixEntryMappingDefinition, definition: FixDefinition) => {
  const { name, required } = entry
  let returnType = 'string'
  if (name === 'BeginString') returnType = `'${definition.beginString}'`
  else if (entry.type === 'field') {
    const fd = definition.fieldsByName.get(name)
    if (fd) {
      const isNumericField = NUMERIC_FIELD_TYPES.includes(fd.type)
      if (fd.values.size) {
        const formatAsString = (v: string) => v.includes("'") ? `"${v}"` : `'${v}'`
        const formatValue = !isNumericField
          ? formatAsString
          : (v: string) => v
        returnType = [...fd.values.values()]
          .flatMap(v => `/** ${v.description} */ ${formatValue(v.enum)}`)
          .join(' | ')
      } else if (isNumericField)
        returnType = 'number'
    }
  } else if (entry.type === 'group')
    returnType = `{ ${[...entry.entries.values()].map(e => generateGroupEntry(e, definition)).join(', ')} }[]`
  return `${name}${required ? '' : '?'}: ${returnType}`
}

const generateDefinitionName = (definition: FixDefinition) => definition.beginString.replace(/[^a-z0-9]/gi, '')
const generateMessageName = (message: FixMessageDefinition) => `${message.name}Message`

const generateGroup = (header: string, group: FixGroupDefinition, definition: FixDefinition) => `  ${header}
    ${[...group.entries.values()].map(e => generateGroupEntry(e, definition)).join('\n    ')}
  }`

const generate = (definition: FixDefinition) => `export namespace ${generateDefinitionName(definition)} {
  ${generateGroup(`export interface Header {`, definition.header, definition)}

  ${[...definition.messages.values()].map(m => generateGroup(`interface ${generateMessageName(m)} {
    MsgType: '${m.msgType}'`, m, definition)).join('\n\n')}

  ${generateGroup(`export interface Trailer {`, definition.trailer, definition)}

  export type Messages =${[...definition.messages.values()].map(m => `\n    | ${m.name}Message`).join('')}
}`

export const generateAll = (definitions: FixDefinition[]) => `${definitions.map(generate).join('\n\n')}

export interface HeadersByVersion {
  ${definitions.map(d => `'${d.beginString}': ${generateDefinitionName(d)}.Header`).join('\n  ')}
}

export interface MessagesByVersion {
  ${definitions.map(d => `'${d.beginString}': ${generateDefinitionName(d)}.Messages`).join('\n  ')}
}

export interface TrailersByVersion {
  ${definitions.map(d => `'${d.beginString}': ${generateDefinitionName(d)}.Trailer`).join('\n  ')}
}
`
