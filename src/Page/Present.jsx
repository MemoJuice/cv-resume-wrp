export default function Present() {
  return (
    <div className="min-h-screen bg-black border-10 border-purple-600 p-4 md:p-4 font-sans">
      <div>
        <div className="w-50 h-50 bg-yellow-200 rounded-full mx-auto mb-4 border-10 border-green-400 my-15"></div>
      </div>
      <p className="bg-linear-to-r from-green-500 via-50% via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold text-center text-8xl mb-15">
        Profilo
      </p>
      <div className="bg-linear-to-l from-green-400 via-50% via-green-500 to-yellow-600 bg-clip-text text-transparent font-bold text-8xl text-center">
        Worapon Choonuansri
      </div>
    </div>
  );
}
