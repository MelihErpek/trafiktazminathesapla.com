import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Makaleler1 = () => {
  const [page, setPage] = useState("1");
  const setPagee = (id) => {
    setPage(id);
  };
  if (page === "1") {
    return (
      <div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trafik Kazasından Sonra Sigorta Şirketine Karşı Açılabilecek Maddi
              Tazminat Davası
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazaları, hem maddi hem de manevi açıdan ciddi sonuçlara
              yol açabilen olaylardır. Bu kazaların ardından, maddi zararları
              karşılamak için sigorta poliçelerinden faydalanmak yaygın bir
              uygulamadır. Ancak bazı durumlarda, sigorta şirketinin önerdiği
              tazminat miktarı yeterli olmayabilir veya talep edilen maddi
              zararlar poliçe kapsamında olmayabilir. Bu gibi durumlarda,
              sigorta şirketine karşı maddi tazminat davası açmak gerekebilir.
              Bu makalede, trafik kazasından sonra sigorta şirketine karşı
              açılabilecek maddi tazminat davası hakkında bilgilendirme
              yapacağız.
            </p>
            <div className="mt-8">
              <a
                href="/trafik-kazasindan-sonra-sigorta-sirketine-karsi-acilabilecek-maddi-tazminat-davasi"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trafik Kazası Sonrasında Araç Değer Kaybının Talep Edilmesi
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazaları, araç sahipleri için stresli ve maddi açıdan
              zorlayıcı durumlar yaratabilir. Kazalar sonucunda oluşan araç
              hasarı, sadece onarımla sınırlı kalmayabilir. Araç değerinde
              meydana gelen kayıplar da önemli bir konudur. Bu makalede, trafik
              kazasından sonra meydana gelen araç değer kaybının nasıl talep
              edileceği hakkında bilgilendirme yapacağız.{" "}
            </p>
            <div className="mt-8">
              <a
                href="/trafik-kazasi-sonrasinda-arac-deger-kaybinin-talep-edilmesi"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kaza Kusur Oranına İtiraz: Haklarınızı Korumak İçin Hukuki Adımlar
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazaları, birçok açıdan karmaşık ve stresli durumlar
              yaratabilir. Kaza sonrasında sigorta şirketinin belirlediği kusur
              oranı, tazminat miktarını ve sorumluluğu doğrudan etkiler. Ancak,
              bazen sigorta şirketinin belirlediği kusur oranı hakkaniyete uygun
              olmayabilir veya sizin kusurunuz abartılmış olabilir. Bu durumda,
              kaza kusur oranına itiraz etmek ve haklarınızı korumak için bazı
              hukuki adımlar atmanız gerekebilir. Bu makalede, kaza kusur
              oranına itirazla ilgili önemli bilgileri paylaşacağız.{" "}
            </p>
            <div className="mt-8">
              <a
                href="/kaza-kusur-oranina-itiraz-haklarinizi-korumak-icin-hukuki-adimlar"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trafik Kazasında İkame Araç Bedeli Talebi: Haklarınızı Korumak
              İçin Bilinmesi Gerekenler
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazaları, hem maddi hem de manevi açıdan zorlayıcı durumlar
              yaratabilir. Kazaya karışan araçlardan biri veya her ikisi
              kullanılamaz hale geldiğinde, mağdur taraf, karşı tarafa ikame
              araç bedeli talep etme hakkına sahiptir. Bu makalede, trafik
              kazasından sonra karşı taraftan talep edilen ikame araç bedeli
              hakkında bilgilendirme yapacağız.{" "}
            </p>
            <div className="mt-8">
              <a
                href="/trafik-kazasinda-ikame-arac-bedeli-talebi-haklarinizi-korumak-icin-bilinmesi-gerekenler"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>

        <div class="flex items-center  border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ">
          <div class=" sm:flex sm:flex-1 sm:items-center sm:justify-between ">
            <div className="mx-auto">
              <nav
                class=" inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  aria-current="page"
                  class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={() => setPagee("2")}
                >
                  2
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (page === "2") {
    return (
      <div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Manevi Tazminat Davası
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazaları, maalesef sıkça meydana gelen olaylardır ve bu
              kazalar sonucunda insanlar hem maddi hem de manevi zararlarla
              karşılaşabilirler. Türk hukukunda, trafik kazaları sonrasında
              kusurlu olan araç sürücüsüne karşı manevi tazminat davası açma
              hakkı tanınmaktadır.
            </p>
            <div className="mt-8">
              <a
                href="/manevi-tazminat-davasi"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kalıcı Engel Tazminatı
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazası sonrası kalıcı engel tazminatı, bir trafik kazası
              sonucunda yaralanan kişinin hayatında kalıcı bir engelin oluşması
              durumunda, bu engelin yol açtığı zararların tazmin edilmesini
              amaçlayan bir tazminat türüdür. Hukukumuzda bu tazminat, trafik
              kazası sonucunda kalıcı bir sakatlık veya engel yaşayan kişilere
              tanınan haklardan biridir ve kusurlu aracın zorunlu trafik
              sigortası tarafından tazmin edilir.
            </p>
            <div className="mt-8">
              <a
                href="/kalici-engel-tazminati"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Geçici İş Göremezlik Tazminatı
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazası sonrası geçici iş göremezlik tazminatı, bir trafik
              kazası sonucunda zarar gören kişinin, kazanın yol açtığı yaralanma
              veya sakatlık nedeniyle geçici olarak çalışamaması durumunda, bu
              süre zarfında yaşanan gelir kaybının tazmin edilmesini amaçlayan
              bir tazminat türüdür. Hukukumuzda bu tazminat, trafik kazası
              sonucunda geçici bir iş göremezlik yaşayan kişilere tanınan
              haklardan biridir ve kusurlu aracın zorunlu trafik sigortası
              tarafından tazmin edilir.
            </p>
            <div className="mt-8">
              <a
                href="/gecici-is-göremezlik-tazminati"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bakıcı Gideri
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazası sonrası bakıcı gideri tazminatı, bir trafik kazası
              sonucunda zarar gören kişinin, kazanın yol açtığı yaralanma veya
              sakatlık nedeniyle bakıcıya ihtiyaç duyması durumunda, bakıcı
              giderlerinin tazmin edilmesini amaçlayan bir tazminat türüdür.
              Türk hukukunda bu tazminat, trafik kazası sonucunda bakıcı
              hizmetine ihtiyaç duyan kişilere tanınan haklardan biridir ve
              kusurlu aracın zorunlu trafik sigortası tarafından tazmin edilir.
            </p>
            <div className="mt-8">
              <a
                href="/bakici-gideri"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Faturalandırılamayan Tedavi Gideri
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazası sonrası faturalandırılamayan tedavi gideri
              tazminatı, bir trafik kazası sonucunda zarar gören kişinin tedavi
              masraflarının, sağlık hizmetlerinin faturalandırılamaması veya tam
              olarak belgelendirilememesi durumunda dahi tazmin edilmesini
              amaçlayan bir tazminat türüdür. Türk hukukunda bu tazminat, trafik
              kazası sonucu ortaya çıkan tedavi masraflarının tazmin edilmesini
              sağlamak amacıyla tanınan haklardan biridir.
            </p>
            <div className="mt-8">
              <a
                href="/faturalandirilamayan-tedavi-gideri"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Destekten Yoksun Kalma Tazminatı
            </h2>
            <p className="mt-4 text-gray-500">
              Trafik kazası sonrası destekten yoksun kalma tazminatı, bir trafik
              kazası sonucunda hayatını kaybeden veya sürekli sakat kalan bir
              kişinin, ailesinin veya bakmakla yükümlü olduğu kişilerin, hayatta
              olan kişiden bekledikleri ekonomik ve manevi desteğin kaybı
              nedeniyle yaşadıkları zararların tazmin edilmesini amaçlayan bir
              tazminat türüdür. Türk hukukunda bu tazminat, trafik kazasında
              zarar görenin veya hayatını kaybeden kişinin yakınlarına tanınan
              haklardan biridir.
            </p>
            <div className="mt-8">
              <a
                href="/destekten-yoksun-kalma-tazminati"
                className="bg-blue-900 text-center px-3 py-3 rounded-lg text-white font-bold"
              >
                Yazıyı İncele
              </a>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  hidden sm:block  h-72 sm:w-full"
          />
        </div>

        <div class="flex items-center  border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ">
          <div class=" sm:flex sm:flex-1 sm:items-center sm:justify-between ">
            <div className="mx-auto">
              <nav
                class=" inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={() => setPagee("1")}
                >
                  1
                </a>
                <a
                  href="#"
                  aria-current="page"
                  class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  2
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default function Makaleler() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Trafik Tazminatı Hesaplama - Kazalarınızda Yanınızdayız!</title>
        <meta name="description" content="Trafik kazası sonrası tazminatınızı kolayca hesaplayın. Güncel blog yazılarıyla bilgilenin ve ücretsiz danışmanlık için formumuzu doldurun!" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Makaleler1 />
    </div>
  );
}
