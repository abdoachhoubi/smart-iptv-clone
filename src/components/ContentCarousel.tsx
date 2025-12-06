const movies = [
  { title: "Action Movie 1", color: "from-red-500 to-orange-500" },
  { title: "Drama Series", color: "from-blue-500 to-purple-500" },
  { title: "Comedy Film", color: "from-green-500 to-teal-500" },
  { title: "Thriller", color: "from-purple-500 to-pink-500" },
  { title: "Sci-Fi Epic", color: "from-cyan-500 to-blue-500" },
  { title: "Romance", color: "from-pink-500 to-rose-500" },
  { title: "Documentary", color: "from-amber-500 to-yellow-500" },
  { title: "Animation", color: "from-indigo-500 to-violet-500" },
];

const ContentCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Films et <span className="text-primary">Séries</span> à la demande
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Accédez à des milliers de films et séries récents en VOD, disponibles 24h/24.
        </p>
      </div>

      {/* Movie carousel */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left-fast">
          {[...movies, ...movies, ...movies, ...movies].map((movie, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 group cursor-pointer"
            >
              <div
                className={`w-40 h-56 md:w-48 md:h-72 rounded-xl bg-gradient-to-br ${movie.color} flex items-end p-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl`}
              >
                <span className="text-white font-semibold text-sm drop-shadow-lg">
                  {movie.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
