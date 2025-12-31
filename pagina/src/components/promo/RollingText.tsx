"use client";

export default function RollingText() {
  return (
    <div className="bg-black overflow-hidden py-3">
      <div className="whitespace-nowrap animate-scroll text-red-500 font-semibold">
        {Array(100)
          .fill(
            "🔥 DARK SALE • FRETE GRÁTIS • ATÉ 40% OFF • PAGAMENTO FLEXÍVEL 🔥"
          )
          .map((text, i) => (
            <span key={i} className="mx-6">
              {text}
            </span>
          ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-block;
          min-width: 200%;
          animation: scroll 300s linear infinite;
        }
      `}</style>
    </div>
  );
}
