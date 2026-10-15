import { type SchemaTypeDefinition } from 'sanity'
import { profileType } from './profile'
import { projectType } from './project'
import { skillCategoryType } from './skillCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileType, projectType, skillCategoryType],
}
