import { useMemo } from 'react'

import getClient from '@/config/apollo'
import type { CacheState } from '@/config/apollo'
import { useRouter } from 'next/router'

const useApollo = (initialState: CacheState) => {
  const router = useRouter()
  const store = useMemo(
    () => getClient({ language: router.locale as LanguageCode, initialState }),
    [router.locale, initialState],
  )
  return store
}

export default useApollo
