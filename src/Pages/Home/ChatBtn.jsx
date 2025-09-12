export default function ChatButton() {
  return (
    <button
      onClick={() => window.open("https://wa.me/8801780327282", "_blank")}
      className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-2xl shadow-lg"
    >
      💬
    </button>
  );
}
