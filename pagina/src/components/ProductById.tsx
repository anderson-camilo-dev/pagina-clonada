'use client'

import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/types/product'

interface ProductByIdProps {
  id: number | string
}

export default function ProductById({ id }: ProductByIdProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`)
        if (!res.ok) {
          console.error('Produto não encontrado')
          return
        }

        const data: Product = await res.json()
        setProduct(data)
      } catch (error) {
        console.error('Erro ao buscar produto', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="aspect-square rounded bg-gray-200 animate-pulse" />
    )
  }

  if (!product) return null

  return <ProductCard product={product} />
}
