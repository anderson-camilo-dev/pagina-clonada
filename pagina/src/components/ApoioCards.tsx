"use cient"

export default function ApoioCard(){
    return(
    <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 max-w-7xl  h-100 gap-5 mx-auto ">
<div className="rounded-2xl  bg-gray-800">
  
<img className="mx-auto rounded-full pt-5"
  src="/icone/caminhao.gif"
  alt=""
  width={120}
  height={120}
  draggable={false}
  style={{ pointerEvents: "none" }}
/>
<h1 className="text-4xl text-center pt-5 font-bold text-gray-400">Envio rápido</h1>
<p className="text-xl text-gray-300 text-center pt-11 mx-2 font-semibold">Envio dentro de 72 horas por DHL, Fedex ou UPS e 3 a 7 dias para chegar</p>

</div>
<div className="rounded-2xl bg-gray-800">
<img className="mx-auto rounded-full pt-5"
  src="/icone/presente.gif"
  alt=""
  width={120}
  height={120}
  draggable={false}
  style={{ pointerEvents: "none" }}
/>
<h1 className="text-4xl text-center pt-5 font-bold text-gray-400">Suporte ao Cliente</h1>
<p className="text-xl text-gray-300 text-center pt-2 mx-3 font-semibold">Responde rapidamente e comprometido em resolver os problemas dos clientes.</p>


</div>
<div className="rounded-2xl bg-gray-800">
<img className="mx-auto rounded-full pt-5"
  src="/icone/seta.gif"
  alt=""
  width={120}
  height={120}
  draggable={false}
  style={{ pointerEvents: "none" }}
/>
<h1 className="text-4xl text-center pt-5 font-bold text-gray-400">Garantia</h1>
<p className="text-xl text-gray-300 text-center pt-11 mx-3 font-semibold">A garantia de 1 ano para hardware garante todas as compras e experiências...</p>

</div>
<div className="rounded-2xl bg-gray-800">
<img className="mx-auto rounded-full pt-5"
  src="/icone/16-number.gif"
  alt=""
  width={120}
  height={120}
  draggable={false}
  style={{ pointerEvents: "none" }}
/>
<h1 className="text-4xl text-center pt-5 font-bold text-gray-400">Anos de experiência</h1>
<p className="text-xl text-gray-300 text-center pt-2 mx-3 font-semibold">Garantimos a qualidade dos produtos e a pontualidade das atualizações de software...</p>
</div>
   </div>
  
  </main>
    )

}