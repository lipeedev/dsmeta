import { Heading, NotificationButton, SalesCard } from './components/';

export function App() {

  return (
    <>
      <Heading />

      <main>
        <section className="mt-10 mx-11">
          <div className="w-full mt-0 mr-auto">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );

}

