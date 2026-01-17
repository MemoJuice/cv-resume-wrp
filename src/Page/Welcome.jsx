export default function TextName() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center mt-30 bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        {" "}
        Hi. I,m Worapon.
      </h1>
      <p
        className=" text-center mt-4 mx-auto bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent
      text-4xl py-10 lg:w-2/3 font-light leading-relaxed"
      >
        <b className="font-bold text-white">Hello, my name is EM</b> Although I did not graduate in a technology-related
        field, I have always had a strong interest in technology. Therefore, I
        began studying and developing my skills independently and continuously,
        with the goal of transitioning into a career in the technology field. I
        am someone who enjoys learning new things, is highly motivated, and
        always ready to improve myself.
      </p>
      <svg
        className="mx-auto mt-10"
        width="700"
        height="200"
        viewBox="0 0 700 200">

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#db0e9a" />
            <stop offset="50%" stopColor="#dc1b1b" />
            <stop offset="75%" stopColor="#b01dc3" />
            <stop offset="100%" stopColor="#7074ef" />
          </linearGradient>
        </defs>
        <path
          d="M10,60 C80,20 150,150 180,100 C210,50 250,20 300,60 C350,100 320,150 350,100 C380,50 420,20 500,60 C580,100 620,150 690,60"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
