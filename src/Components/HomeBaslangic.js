import React from "react";
import { Helmet } from "react-helmet-async";

const links = [
  { name: "Kalıcı Engel Tazminatı ", href: "/kalici-engel-tazminati" },
  {
    name: "Geçici İş Göremezlik Tazminatı ",
    href: "/gecici-is-göremezlik-tazminati",
  },
  { name: "Bakıcı Gideri ", href: "/bakici-gideri" },
  { name: "Tedavi Gideri ", href: "/faturalandirilamayan-tedavi-gideri" },
  {
    name: "Destekten Yoksun Kalma Tazminatı ",
    href: "/destekten-yoksun-kalma-tazminati",
  },
  {
    name: "Değer Kaybı Tazminatı  ",
    href: "/trafik-kazasi-sonrasinda-arac-deger-kaybinin-talep-edilmesi",
  },
];
const stats = [
  { name: "Sonuçlandırılan Dosyalar", value: "843+" },
  { name: "Devam Eden Dosyalar", value: "624+" },
];
const url = "";

export default function HomeBaslangic() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-16">
      <Helmet>
        <title>Trafik Tazminatı Hesaplama - Kazalarınızda Yanınızdayız!</title>
        <meta
          name="description"
          content="Trafik kazası sonrası tazminatınızı kolayca hesaplayın. Güncel blog yazılarıyla bilgilenin ve ücretsiz danışmanlık için formumuzu doldurun!"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="text-4xl font-bold  text-white sm:text-6xl">
            TÜM TAZMİNAT HAKLARINIZI EN DOĞRU HALİ İLE HESAPLIYORUZ
          </h1>
          {/* <p className="mt-6 text-lg leading-8 text-gray-200">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p> */}
          <div className="bg-blue-300 rounded-lg px-1 py-1 sm:w-max  mt-10">
            <a
              href="/tazminat-hesapla"
              className="text-lg font-semibold leading-6 text-white "
            >
              TAZMİNATINIZI HESAPLAMAK İÇİN TIKLAYIN
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-max">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-800 text-gray-800"
              >
                {link.name}
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 font-bold text-gray-800">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9  text-gray-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
