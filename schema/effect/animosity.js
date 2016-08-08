// restlessness creates animosity, and animosity leads to violence. Who gets hurt?
// political situation has created animosity in place.

module.exports = [
  { type: 'clauses', subtype: 'adverb' },
  { type: 'clauses', subtype: 'a' },
  [{ type: 'nouns', subtype: 'calamityWar' }, { type: 'nouns', subtype: 'calamityNatural' }],
  {
    type: 'verbs',
    subtype: 'cause',
    tense: 'present'
  },
  {
    type: 'nouns', subtype: 'animosity'
  },
  {
    type: 'verbs',
    subtype: 'grow',
    tense: 'perfect'
  },
  { type: 'clauses', subtype: 'amongst'},
  { type: 'clauses', subtype: 'the'},
  [{ type: 'groupings', subtype: 'townfolk' },{ type: 'groupings', subtype: 'society' }]
];
