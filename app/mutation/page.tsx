"use client"

import { useRouter } from "next/navigation"

async function updateSomeData({
  id,
  refresh,
}) {
  await fetch('https://www.anapioficeandfire.com/api/', {
    method: 'PUT',
    body: JSON.stringify({ id, completed: true }),
  })

  // Refresh the current route and fetch new data from the server
  refresh()
}

export default async function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>Mutate</h1>
      <button onClick={() => updateSomeData({ id: 1, refresh: router.refresh })}>
        Click me
      </button>
    </div>
  )
}
