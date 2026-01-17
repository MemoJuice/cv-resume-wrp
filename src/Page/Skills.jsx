function Skills() {
  return (
    <div className="min-h-screen">
      <div>
        <p className="text-white font-semibold text-center text-6xl mb-15 text-shadow-transparent">
          Skills
        </p>
      </div>
      <div>
        <div className=" bg-linear-to-r from-green-500 via-yellow-300 to-yellow-600 bg-clip-text text-transparent font-semibold text-2xl flex flex-wrap gap-5 text-center items-center justify-center">
          <div className="border-1 border-white px-5 py-2  w-fill">React</div>
          <div className="border-1 border-white px-5 py-2 w-fill">
            JavaScript
          </div>
          <div className="border-1 border-white px-5 py-2 w-fill">
            Tailwind CSS
          </div>
          <div className="border-1 border-white px-5 py-2 w-fill">Node.js</div>
          <div className="border-1 border-white px-5 py-2 w-fill">MongoDB</div>
          <div className="border-1 border-white px-5 py-2 w-fill">Git</div>
        </div>
        <div className="mt-15 flex justify-center">
          <svg
            width="600"
            height="500"
            viewBox="0 0 200 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* การตั้งค่าไล่เฉดสีจากส้มไปม่วงตามรูปต้นฉบับ */}
              <linearGradient
                id="pathGradient"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="25%" stopColor="#ffffff" /> {/* สีส้มพีช */}
                <stop offset="50%" stopColor="#ffffff" /> {/* สีชมพูม่วง */}
                <stop offset="100%" stopColor="#ffffff" /> {/* สีม่วงฟ้า */}
              </linearGradient>

              {/* หัวลูกศร (Arrowhead) */}
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 7 L 0 10 z" fill="#ffffff" />
              </marker>
            </defs>

            {/* เส้น Path หลัก */}
            <path
              d="M150 20
         C190 60, 60 70, 80 110
         C100 150, 160 160, 120 200
         C100 220, 90 220, 80 240"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              markerEnd="url(#arrow)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Skills;
