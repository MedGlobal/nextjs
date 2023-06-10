import { useEffect, useState } from 'react'

// NOTE: Wrap elements with apollo hooks to this one. The hooks are for things that don't need to be
// crawled by the SEO systems
export default function useClientOnly(): boolean {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}
