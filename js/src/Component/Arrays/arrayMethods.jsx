import React from 'react'
import Sort from './sort'
import Slice from './slice'
import { ArrayLength } from './arrayLenght'
import { Splice } from './splice'
import { Filter } from './filter'
import { Include } from './include'
import { Closures } from './closures'


const ArrayMethods = () => {
  return (
    <main>
      <Sort />
      <ArrayLength />
      <Slice />
      <Splice />
      <Filter />
      <Include />
      <Closures />
    </main>
  )
}

export default ArrayMethods