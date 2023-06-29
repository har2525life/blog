import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <div className="home-margin-side bg-orange-50 h-screen">
        <section className="flex">
          <div className="w-40 h-40 bg-blue-200 rounded-full"></div>
          <div className="flex flex-col justify-center">
            <h3>HIKARU SUGITA</h3>
            <p>mail address : har2525life@gmail.com</p>
          </div>
        </section>
      </div>
    </>
  );
}
