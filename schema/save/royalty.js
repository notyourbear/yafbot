const _ = require('underscore')

module.exports = [
  {
    type: 'clauses',
    subtype: 'relative'
  },
  {
    type: 'verbs', subtype: 'save', tense: 'present'
  },
  _.sample([{ type: 'clauses', subtype: 'the'},{ type: 'clauses', subtype: 'a'}]),
  {
    type: 'persons', subtype: 'royalty'
  }
]
