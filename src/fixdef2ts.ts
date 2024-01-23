import {
  isNumericFieldType,
  type FixDefinition,
  type FixEntryMappingDefinition,
  type FixGroupDefinition,
  type FixMessageDefinition,
  type FixComponentDefinition,
  type FixComponentMappingDefinition
} from "./fixdef";

const generateGroupEntry = (entry: FixEntryMappingDefinition, definition: FixDefinition, referencedComponents: Set<string>) => {
  const { name, required } = entry
  let returnType = 'string'
  if (name === 'BeginString') returnType = `'${definition.beginString}'`
  else if (entry.type === 'field') {
    const fd = definition.fieldsByName.get(name)
    if (fd) {
      const isNumericField = isNumericFieldType(fd.type)
      if (fd.valuesByEnum.size) {
        const formatAsString = (v: string) => v.includes("'") ? `"${v}"` : `'${v}'`
        const formatValue = !isNumericField
          ? formatAsString
          : (v: string) => v
        returnType = [...fd.valuesByEnum.values()]
          .flatMap(v => `/** ${v.description} */ ${formatValue(v.enum)}`)
          .join(' | ')
      } else if (isNumericField)
        returnType = 'number'
    }
  } else if (entry.type === 'group')
    returnType = `{ ${[...entry.entries.values()].map(e => generateGroupEntry(e, definition, referencedComponents)).join(', ')} }[]`
  else if (entry.type === 'component') {
    referencedComponents.add(entry.name)
    returnType = generateComponentName(entry)
  }
  return `${name}${required ? '' : '?'}: ${returnType}`
}

const generateDefinitionName = (definition: FixDefinition) => definition.beginString.replace(/[^a-z0-9]/gi, '')
const generateComponentName = (component: FixComponentDefinition | FixComponentMappingDefinition) => `${component.name}Component`
const generateMessageName = (message: FixMessageDefinition) => `${message.name}Message`

const generateGroup = (header: string, group: FixGroupDefinition, definition: FixDefinition, referencedComponents: Set<string>) => `  ${header}
    ${[...group.entries.values()].map(e => generateGroupEntry(e, definition, referencedComponents)).join('\n    ')}
  }`

const generate = (definition: FixDefinition) => {
  const referencedComponents = new Set<string>()

  const header = definition.header.entries.size
    ? definition.header
    : {
      entries: new Map<string, FixEntryMappingDefinition>([
        ['BeginString', { type: 'field', name: 'BeginString', required: true }]
      ])
    }

  return `export namespace ${generateDefinitionName(definition)} {
    ${generateGroup(`export interface Header {`, header, definition, referencedComponents)}
  
    ${[...definition.messages.values()].map(m => generateGroup(`interface ${generateMessageName(m)} {
      MsgType: '${m.msgType}'`, m, definition, referencedComponents)).join('\n\n')}
  
    ${generateGroup(`export interface Trailer {`, definition.trailer, definition, referencedComponents)}
  
    ${[...definition.components.values()]
      .map(c => [c.name, generateGroup(`interface ${generateComponentName(c)} {`, c, definition, referencedComponents)] as const)
      .filter(([n]) => referencedComponents.has(n))
      .map(([, s]) => s)
      .join('\n\n')}
  
    export type Messages =${[...definition.messages.values()].map(m => `\n    | ${m.name}Message`).join('')}
  }`
}

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
