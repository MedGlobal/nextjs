async function getSomeData() {
  const res = await fetch('https://www.anapioficeandfire.com/api/', {
    cache: 'no-store', // SSR
    next: { revalidate: 420 }, // ISR
  })
  return res.json()
}

export default async function Home() {
  const data = await getSomeData()
  return <h1>Hello</h1>
}
