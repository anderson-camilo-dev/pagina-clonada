"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SemConteudoPage() {
  return (
    <main className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
     
        <div className="pb-20">
          <h1 className="font-light max-w-7xl mx-auto text-center pt-50 text-5xl  text-black">
           Registro de Garantia
          </h1>
          <p className="text-center max-w-4xl mx-auto pt-10 text-xl text-black">
           O registro de clientes é limitado às compras feitas por nossos
                canais oficiais (bigme.vip.bigmestore.com, Amazon, Walmart,
                eBay, AliExpress, Alibaba, TEMU e distribuidores Bigme).
          </p>
          <p className="text-black text-xl pt-3 font-bold max-w-2xl mx-auto text-center ">
            Tel: +8618676387863
          </p>
          <p className="text-black text-xl pt-2 font-bold max-w-2xl mx-auto text-center ">
            Whatsapp: +8619076158262
          </p>
          <p className="text-black text-xl pt-2 font-bold max-w-2xl mx-auto text-center ">
            Email: aftersales@bigme.vip
          </p>
        </div>
        <div className="max-w-7xl mx-auto rounded-lg bg-white/80  border-white border">
          <div className="m-10 pt-5">
            <div className="border-b-2 border-black ">
              <h1 className="text-black font-bold  text-2xl">Registro</h1>
              <p className="text-black/30">
                O registro de clientes é limitado às compras feitas por nossos
                canais oficiais (bigme.vip.bigmestore.com, Amazon, Walmart,
                eBay, AliExpress, Alibaba, TEMU e distribuidores Bigme).
              </p>
            </div>

           
  {/* Nome */}
  <div className="pt-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Nome*
    </label>
    <input
      type="text"
      placeholder="Digite seu nome"
      className="w-full h-[42px] px-4 rounded-full bg-gray-100 border border-gray-300 text-gray-700
      placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
    />
  </div>

  {/* Email */}
  <div className="pt-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email*
    </label>
    <input
      type="email"
      placeholder="Digite seu email"
      className="w-full h-[42px] px-4 rounded-full bg-gray-100 border border-gray-300 text-gray-700
      placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
    />
  </div>

  {/* Telefone */}
  <div className="pt-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Telefone*
    </label>
   <PhoneInput
  country="br"
  enableSearch
  placeholder="Digite o telefone"
  inputClass="
    !w-full !h-[42px] !rounded-full !bg-gray-100 
    !border !border-gray-300 !pl-14
    !text-gray-900 placeholder:!text-gray-600
    focus:!ring-2 focus:!ring-blue-400 focus:!border-blue-400
  "
  containerClass="!w-full"
  buttonClass="
    !rounded-l-full !bg-gray-100 
    !border !border-gray-300
  "
  searchClass="
    !bg-gray-100 
    !text-gray-900 
    placeholder:!text-gray-600
    !border !border-gray-300
  "
  dropdownClass="
    !bg-white 
    !text-gray-900
  "
/>

  </div>

  {/* Modelo */}
  <div className="pt-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Modelo do Item
    </label>
    <input
      type="text"
      placeholder="Digite o modelo"
      className="w-full h-[42px] px-4 rounded-full bg-gray-100 border border-gray-300 text-gray-700
      placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
    />
  </div>

  {/* Endereço */}
  <div className="pt-4 col-span-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Endereço*
    </label>
    <input
      type="text"
      placeholder="Digite seu endereço"
      className="w-full h-[42px] px-4 rounded-full bg-gray-100 border border-gray-300 text-gray-700
      placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
    />
  </div>

  {/* Botão */}
  <div className="col-span-2 flex pb-20 justify-end pt-6">
    <button className="px-8 h-[42px] rounded-full bg-blue-500 text-white font-medium
      hover:bg-blue-600 transition shadow-sm">
      Próximo
    </button>
  </div>
</div>
</div>
<div className="pt-100"></div>
    </main>
  );
}
