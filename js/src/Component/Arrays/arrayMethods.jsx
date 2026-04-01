import React from 'react'
import Sort from './sort'
import Slice from './slice'
import { ArrayLength } from './arrayLenght'
import { Splice } from './splice'
import { Filter } from './filter'
import { Include } from './include'

const ArrayMethods = () => {
  return (
    <main>
      <Sort />
      <ArrayLength />
      <Slice />
      <Splice />
      <Filter />
      <Include />
    </main>
  )
}

export default ArrayMethods