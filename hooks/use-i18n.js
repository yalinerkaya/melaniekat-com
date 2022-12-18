import get from 'lodash/get'
import locales from '../locales'
import { useState } from 'react'

const useI18n = router => {
  const locale = get(router, 'locale', 'en')
  const defaultLocale = get(router, 'defaultLocale', 'en')
  const [loc] = useState(() => locales[locale || defaultLocale])
  return (key, fallback) => get(loc, key, fallback || '')
}

export default useI18n
