import get from 'lodash/get'
import locales from '../utils/locales'
import { useState } from 'react'

const useI18n = ({ locale, defaultLocale }) => {
  const [loc] = useState(() => locales[locale || defaultLocale])
  return (key) => get(loc, key, '')
}

export default useI18n
