import { VscLoading } from "react-icons/vsc";

function Loading() {
  return (
    <main className="col-span-full m-auto mt-40 md:col-start-4">
      <div className="animate-spin text-5xl text-slate-800">
        <VscLoading />
      </div>
    </main>
  );
}

export default Loading;