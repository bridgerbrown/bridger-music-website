import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Landing } from '@/components/landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Landing />
      <Footer />
    </main>
  )
}
