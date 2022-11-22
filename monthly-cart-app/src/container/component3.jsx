import React from 'react'

import { css } from '@emotion/css'

const color = 'darkgreen'

const component3 = () => {
  return (
    <div
    className={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur hic fuga laudantium a esse eveniet dolorem, in earum doloremque optio accusantium tempora, quisquam fugiat eaque! Enim molestias sint ipsa.
  </div>
  )
}

export default component3