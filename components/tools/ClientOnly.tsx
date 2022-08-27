import { useEffect, useState } from "react"

interface ClientOnlyProps {
  children: React.ReactNode
}

// NOTE: Wrap elements with apollo hooks to this one. The hooks are for things that don't need to be
// crawled by the SEO systems
export default function ClientOnly({ children }: ClientOnlyProps): JSX.Element {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return (<>{null}</>)

  return (<>{children}</>)
}
