// app/page.jsx
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Image 
        src="/logo.svg" 
        alt="SilentVerse Logo" 
        width={200}
        height={200}
      />
    </main>
  )
}
