import { Home, LastPage, EventGridPage } from "@/components/eventPages";
import LoadingPage from "@/components/eventPages/LoadingPage";

export default function Page() {
  return (
    <LoadingPage>
      <main className="overflow-x-scroll overflow-y-hidden bg-black h-svh flex flex-row scroll-smooth scrollbar-event-page snap-x snap-mandatory gap-x-16">
        <div className="min-w-screen h-svh snap-center">
          <Home />
        </div>
        <div className="min-w-screen h-svh snap-center">
          <EventGridPage day={1} />
        </div>
        <div className="min-w-screen h-svh snap-center">
          <EventGridPage day={2} />
        </div>
        <div className="min-w-screen h-svh snap-center">
          <EventGridPage day={3} />
        </div>
        <div className="min-w-screen h-svh snap-center">
          <LastPage />
        </div>
      </main>
    </LoadingPage>
  );
}
