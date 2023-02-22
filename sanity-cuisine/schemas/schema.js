
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import recette from './recette'
import banner from './banner'
import about from './about'



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([recette, banner, about]),
})
