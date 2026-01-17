export default function TextName() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center mt-30 bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        {" "}
        Hi. I'm Worapon.
      </h1>
      <p
        className=" text-center mt-4 mx-auto bg-linear-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent
      text-4xl py-10 lg:w-2/3 font-light leading-relaxed"
      >
        <b className="font-bold">Hello, my name is M</b> Although I did not graduate in a technology-related
        field, I have always had a strong interest in technology. Therefore, I
        began studying and developing my skills independently and continuously,
        with the goal of transitioning into a career in the technology field. I
        am someone who enjoys learning new things, is highly motivated, and
        always ready to improve myself.
      </p>
      <svg
        className="mx-auto mt-10"
        width="700">
        <path
          d="M10,60 C80,20 150,150 180,100 C210,50 250,20 300,60 C350,100 320,150 350,100 C380,50 420,20 500,60 C580,100 620,150 690,60"
          stroke="#8B5CF6"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
