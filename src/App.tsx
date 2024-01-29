import vectorImg from "./assets/vector.svg"
import useFetchCoffee from "./hooks/useFetchCoffee"
import Coffee from "./components/Coffee."

function App() : JSX.Element {
  const data = useFetchCoffee()

  return (
    <main className="min-h-screen max-w-[1300px]">
      <div className='bg-hero w-full h-full bg-contain bg-no-repeat absolute top-0 z-0'/>

      <div className="relative z-10 w-4/5 bg-[#1B1D1F] rounded-md mx-auto mt-12 py-14 mb-8">
        <h1 
          className="text-white text-center font-bold text-2xl mb-4 relative z-10"
        >
          Our Collection
        </h1>
        <p className="text-[#6F757C] font-semibold text-center text-balance max-w-[90%] mx-auto sm:max-w-[70%] mb-5 relative z-10">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className="flex justify-center gap-1 mb-10">
          <a 
            href="#" 
            className="bg-[#6F757C] rounded-md py-1 px-3 text-white font-semibold"
          >
            All Products
          </a>
          <a 
            href="#"
            className="py-1 px-3 text-white font-semibold"
          >
            Available Now
          </a>
        </div>
        <img 
          src={vectorImg}
          alt="vector image"
          className="absolute top-6 right-1 z-0 sm:right-[20%]"
        />

        <section className="flex justify-center">
          <ul className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {data.map(coffee => (
              <Coffee
                key={coffee.id}
                name={coffee.name}
                image={coffee.image}
                available={coffee.available}
                popular={coffee.popular}
                price={coffee.price}
                rating={coffee.rating}
                votes={coffee.votes}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default App
