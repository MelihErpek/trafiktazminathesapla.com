import React, { useEffect, useState } from "react";
import Yaralanma from "./Yaralanma.js";
import Vefat from "./Vefat.js";
import MaddiHasar from "./MaddiHasar.js";
import { Helmet } from "react-helmet-async";

import axios from "axios";
const App = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [errorField, SetErrorField] = useState("");
  const [success, SetSuccess] = useState(false);
  const [data, setData] = useState();
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [selected1, setSelected1] = useState("");
  const cities = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Aksaray",
    "Amasya",
    "Ankara",
    "Antalya",
    "Ardahan",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bartın",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Düzce",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkâri",
    "Hatay",
    "Iğdır",
    "Isparta",
    "İstanbul",
    "İzmir",
    "Kahramanmaraş",
    "Karabük",
    "Karaman",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kilis",
    "Kırıkkale",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Şanlıurfa",
    "Siirt",
    "Sinop",
    "Sivas",
    "Şırnak",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Uşak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
  ];

  const handleSelectChange = (e) => {
    setSelected1(e.target.value);
  };

  return (
    <div className="bg-gray-100 ">
      <Helmet>
        <title>
          Trafik Kazası Tazminatı Hesaplama - Yaralanma, Vefat & Maddi Hasar
        </title>
        <meta
          name="description"
          content="Trafik kazası sonucu yaralanma, vefat ya da maddi hasar durumlarınız için tazminatınızı hızlıca hesaplayın. Uygun formu doldurarak ücretsiz danışmanlık alın!"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1 className="text-center mr-5 font-bold text-xl text-blue-600">Trafik Tazminatınızı Hızlıca Hesaplayın</h1>
      <form
        className=" px-8 pt-6 pb-8  mt-2 text-xs mx-8 sm:mx-0"
        style={{ height: "600px" }}
      >
        {/* <div className='flex justify-center  mb-2 bg-red-300 rounded-lg mx-auto'>
                        <a href="/admin" className='text-base font-bold'>Müşteri Listesi</a>
                    </div> */}
        <div className="flex justify-center mb-2">
          <div
            className={`px-3 rounded-lg font-semibold py-1 cursor-pointer ' ${
              checked1
                ? "bg-blue-400 outline outline-1 outline-gray-400"
                : "bg-white"
            } `}
            onClick={() => {
              setChecked1(true);
              setChecked2(false);
              setChecked3(false);
            }}
          >
            Yaralanma
          </div>
          <div
            className={` px-3 rounded-lg font-semibold mx-5 py-1 cursor-pointer ' ${
              checked2
                ? "bg-blue-400 outline outline-1 outline-gray-400"
                : "bg-white"
            }`}
            onClick={() => {
              setChecked1(false);
              setChecked2(true);
              setChecked3(false);
            }}
          >
            Vefat
          </div>
          <div
            className={` px-3 rounded-lg font-semibold py-1 cursor-pointer ' ${
              checked3
                ? "bg-blue-400 outline outline-1 outline-gray-400"
                : "bg-white"
            }`}
            onClick={() => {
              setChecked1(false);
              setChecked2(false);
              setChecked3(true);
            }}
          >
            Maddi Hasar
          </div>
        </div>
        {checked1 && (
          <div>
            <Yaralanma />
          </div>
        )}
        {checked2 && (
          <div>
            <Vefat />
          </div>
        )}
        {checked3 && (
          <div>
            <MaddiHasar />
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
