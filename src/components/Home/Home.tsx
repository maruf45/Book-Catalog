export default function Home() {
  return (
    <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 h-[60vh]">
          <div>
            <h2 className="text-3xl font-bold leading-10 text-gray-900 sm:text-4xl lg:text-5xl">
              Find the book you're looking for easier to read right away
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-loose text-gray-600 md:mt-8">
              The most appropriate book site to search for books.
            </p>
          </div>

          <div className="relative">
            <img
              className="relative w-full rounded-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://i.ibb.co/mvM3hD9/default.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
