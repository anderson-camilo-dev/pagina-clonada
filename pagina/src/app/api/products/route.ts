import { NextResponse } from 'next/server';
import { products } from '@/data/products'; // Ajuste o caminho se necessário

// Esta função lida com requisições do tipo GET
export async function GET() {
  // Retorna a lista de produtos como JSON
  return NextResponse.json(products);
}