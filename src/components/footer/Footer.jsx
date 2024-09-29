import React from "react";
import Badge from "../UI/Badge";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../data";
import { map, logoDesk, line, phone, email } from "../../assets";
import { useCartContext } from "../../store/context/CartContext";

function Footer() {
  const { totalItems } = useCartContext();
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 right-0 md:static z-30">
      {/* mobile */}
      <section className="flex w-full items-center justify-between rounded-tr-lg rounded-tl-lg bg-white px-[10%] py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
        {links.map((link) => {
          const { id, path, title, icon } = link;

          return (
            <li key={id} className="list-none">
              <NavLink to={path}>
                <div className="relative flex items-center">
                  <span
                    className={`${
                      location.pathname === path
                        ? "fill-slate-800"
                        : "fill-[#afafaf]"
                    }`}
                  >
                    {React.cloneElement(icon)}
                  </span>
                  {id === 3 && totalItems > 0 && <Badge />}
                  <p
                    className={`mr-2 text-sm font-bold text-slate-800 ${
                      location.pathname === path ? "block" : "hidden"
                    }`}
                  >
                    {title}
                  </p>
                </div>
              </NavLink>
            </li>
          );
        })}
      </section>

      {/* desktop */}
      <section className="bg-white">
        <section className="hidden container mx-auto 2xl:max-w-screen-2xl grid-cols-4 grid-rows-1 px-4 py-6 text-slate-800 md:grid">
          {/* right */}
          <div className="col-span-2 flex flex-col p-2">
            <div className="mb-6 flex gap-1">
              <img src={logoDesk} alt="Digitize" className="w-24" />
              <img src={line} alt="red-line" className="mr-1 w-8" />
            </div>
            <p className="font-normal leading-8">
              دیجی‌ تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر
              <br /> لپ تاپ، گوشی هوشمند و ساعت هوشمند می‌باشد.
              <br /> دیجی تایز افتخار این را داشته که به
              <span className="font-bold text-[#ff765d]"> ۱۲۲,۲۳۲ نفر</span> تا
              به اکنون خدمت رسانی داشته باشد.
            </p>
          </div>

          {/* middle */}
          <div className="col-span-1 mr-12 flex flex-col justify-center gap-2 text-slate-800">
            <p className="text-lg font-bold">محصولات</p>
            <p>تلفن همراه</p>
            <p>لپ تاپ</p>
            <p>ساعت هوشمند</p>
          </div>

          {/* left */}
          <div className="col-span-1 flex flex-col items-end justify-center">
            <div>
              <img src={map} alt="map" className="mb-6 h-40 w-40" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-end gap-x-1">
                <span>۰۲۱-۱۲۳۴۵۶</span>
                <img src={phone} alt="phone" className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-end gap-x-1">
                <span>info@digitize.com</span>
                <img src={email} alt="email" className="w-6 h-6"/>
              </div>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
