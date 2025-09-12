export default function ChatButton() {
  return (
    <button
      onClick={() => window.open("https://wa.me/8801780327282", "_blank")}
      className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-2xl shadow-lg animate-bounce-dance"
    >
      💬
      <style>
        {`
          @keyframes bounce-dance {
            0%, 100% { transform: translateY(0); }
            10% { transform: translateY(-4px) rotate(-5deg); }
            20% { transform: translateY(-6px) rotate(5deg); }
            30% { transform: translateY(-4px) rotate(-3deg); }
            40% { transform: translateY(-2px) rotate(2deg); }
            50% { transform: translateY(-4px) rotate(-2deg); }
            60% { transform: translateY(-6px) rotate(3deg); }
            70% { transform: translateY(-4px) rotate(-1deg); }
            80% { transform: translateY(-2px) rotate(1deg); }
            90% { transform: translateY(-3px) rotate(0deg); }
          }
          .animate-bounce-dance {
            animation: bounce-dance 1.5s infinite;
          }
        `}
      </style>
    </button>
  );
}
