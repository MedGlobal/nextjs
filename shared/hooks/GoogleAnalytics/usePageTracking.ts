// from: https://davisgitonga.dev/blog/nextjs-google-analytics
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import pageview from '@/utils/gtag/pageview'

const usePageTracking = () => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

export default usePageTracking;