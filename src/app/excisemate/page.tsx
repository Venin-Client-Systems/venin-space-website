import Image from 'next/image';

export default function ExciseMateComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center px-4">
        <div className="mb-8 opacity-90">
          <Image
            src="/logo-light.png"
            alt="ExciseMate"
            width={120}
            height={120}
            className="mx-auto mb-8 opacity-80"
          />
          <div className="text-6xl font-bold text-white mb-2">ExciseMate</div>
          <div className="text-xl text-gray-400 font-light">coming soon</div>
        </div>
      </div>
    </div>
  );
}
