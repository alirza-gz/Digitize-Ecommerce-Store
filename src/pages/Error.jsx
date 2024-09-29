

import { Link } from "react-router-dom";

function Error(){
  return (
    <main className="flex min-h-[calc(100vh-9rem)] items-center justify-center pt-10">
      <div>
        <h1 className="mb-6 text-center text-xl text-slate-800 md:text-2xl">
          صفحه موردنظر پیدا نشد.
        </h1>

        <li className="list-none text-center text-red-400 md:text-xl">
          <Link to="/" className="text-sm">بازگشت به خانه &gt;</Link>
        </li>
      </div>
    </main>
  );
};

export default Error;
