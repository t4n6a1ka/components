import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#4392cd" fill-rule="nonzero" r="16"/><path d="M16.858 25.5h-1.716c-1.288 0-1.653-1.194-1.653-2.106s.065-1.325.065-1.737c0-.65-.328-2.273-.923-2.953-1.159-1.325-1.889-2.512-1.889-4.234-1.008-.521-2.79-.999-3.476-1.78S6 10.8 6 9.214c0-.405.086-.977.258-1.715.395 1.234 1.003 2.08 1.824 2.54 1.201.674 2.555 1.173 3.712 1.173h8.412c1.157 0 2.51-.5 3.712-1.173.82-.46 1.429-1.306 1.824-2.54.172.738.258 1.31.258 1.715 0 1.585-.58 2.693-1.266 3.474s-2.468 1.26-3.476 1.78c0 1.723-.73 2.91-1.889 4.235-.595.68-.923 2.303-.923 2.953 0 .412.065.825.065 1.737s-.365 2.106-1.653 2.106z" fill="#fff"/></g>
  </>
)

export const CryptoOx = withStyle(InnerSvg, 32, 32, 'CryptoOx', true)