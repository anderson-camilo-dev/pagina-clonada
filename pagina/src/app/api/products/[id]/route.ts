import { NextResponse } from "next/server";
import { products } from "@/data/products";

// No arquivo: src/app/api/products/[id]/route.ts

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const idDaUrl = id;

  // ESTES LOGS VÃO APARECER NO SEU TERMINAL (VS CODE), NÃO NO NAVEGADOR
  console.log("--- TESTE DE ROTA ---");
  console.log("ID que veio na URL:", idDaUrl);
  console.log("Tipo do ID da URL:", typeof idDaUrl);
  console.log("Primeiro produto da lista:", products[0]);

  const product = products.find((p) => String(p.id) === String(idDaUrl));

  if (!product) {
    console.log("Resultado: Produto NÃO encontrado");
    return NextResponse.json(
      { error: "Produto não encontrado" },
      { status: 404 }
    );
  }

  console.log("Resultado: Produto ENCONTRADO!");
  return NextResponse.json(product);
}
