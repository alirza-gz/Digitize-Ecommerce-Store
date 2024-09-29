import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "../components/UI/TextField";
import { logoDesk } from "../assets";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const registerHandler = (data) => {
    console.log(data);
    reset();
  };
  return (
    <main className="container mx-auto 2xl:max-w-screen-2xl min-h-screen flex pt-48 lg:pt-0 lg:items-center justify-center">
      <div className="flex flex-col items-center lg:border lg:border-gray-300 rounded-md w-full p-5 lg:p-8 max-w-[400px]">
        <Link to="/">
          <img src={logoDesk} alt="logo" className="w-32" />
        </Link>
        <div className="w-full">
          <h1 className="font-bold text-neutral-900 text-right mt-8">
            ورود | ثبت‌نام
          </h1>
          <p className="text-xs text-neutral-700 mt-4 text-right">سلام!</p>
          <p className="text-xs mt-2 text-neutral-700 mb-4 text-right">
            لطفا ایمیل خود را وارد کنید
          </p>
          <form onSubmit={handleSubmit(registerHandler)}>
            <TextField
              name="login"
              register={register}
              validationSchema={{
                required: "لطفا این قسمت را خالی نگذارید.",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "  ایمیل نادرست است.",
                },
              }}
              type="email"
              errors={errors}
              autoFocus
            />
            <button
              type="submit"
              className="rounded-md bg-red-400 py-2 px-4 text-white w-full mt-8"
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
