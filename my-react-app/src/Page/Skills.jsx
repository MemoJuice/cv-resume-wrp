function Skills() {
  return (
    <div className="min-h-screen">
      <div>
        <p className="text-white font-semibold text-center text-4xl mb-15 text-shadow-transparent">
          Skills
        </p>
      </div>
      <div>
        <div className=" bg-linear-to-r from-green-500 via-yellow-300 to-yellow-600 bg-clip-text text-transparent font-semibold text-2xl flex flex-wrap gap-5 text-center items-center justify-center">
          <div className="border-2 border-white px-5 py-2 w-fill">React</div>
          <div className="border-2 border-white px-5 py-2 w-fill">JavaScript</div>
          <div className="border-2 border-white px-5 py-2 w-fill">Tailwind CSS</div>
          <div className="border-2 border-white px-5 py-2 w-fill">Node.js</div>
          <div className="border-2 border-white px-5 py-2 w-fill">MongoDB</div>
          <div className="border-2 border-white px-5 py-2 w-fill">Git</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
