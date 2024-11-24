'use client'

import { Button } from '@/components/ui/button'
import { ShoppingBag, Package } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/check')
        const data = await response.json()
        if (data.isAuthenticated) {
          router.push('/dashboard')
        }
      } catch (error) {
        console.log('Authentication check failed:', error)
      }
    }
    checkAuth()
  }, [router])

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CampusChain
          </Link>
          <nav className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          블록체인 기반의 안전한 중고거래 플랫폼
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          블록체인 기반의 Escrow 시스템을 통해 안심하고 사고 팔 수 있습니다.
          <br />
          배송이 완료될 때까지 결제가 안전하게 보호됩니다
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/feed" className="flex items-center">
              <Package className="mr-2 h-5 w-5" />
              등록된 상품 찾아보기
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/auth/signup">판매하기</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">동작 방식</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                1. 판매자의 상품 등록
              </h3>
              <p className="text-muted-foreground">
                판매자는 상품 이미지 및 가격의 작성을 통해 <br />
                피드에 등록합니다.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">2. 안전한 결제</h3>
              <p className="text-muted-foreground">
                블록체인 기반의 결제 시스템을 이용함으로써
                <br /> 안전한 결제가 가능합니다.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">3. 사기 방지</h3>
              <p className="text-muted-foreground">
                에스크로 시스템을 이용하며,
                <br /> 배송을 확인 후 결제가 진행됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
