import React from 'react'
import useClientOnly from '@/hooks/Next/useClientOnly'

interface ClientOnlyProps {
  children: React.ReactNode
}

// NOTE: Wrap elements with apollo hooks to this one. The hooks are for things that don't need to be
// crawled by the SEO systems
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const hasMounted = useClientOnly()

  if (!hasMounted) return (<>{null}</>)

  return (<>{children}</>)
}

export default ClientOnly
