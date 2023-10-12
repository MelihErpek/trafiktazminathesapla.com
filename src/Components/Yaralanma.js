import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Yaralanma() {
  const [name, setName] = useState();
  const [errorField, SetErrorField] = useState("");
  const [success, SetSuccess] = useState(false);
  const [kazaturu, setKazaTuru] = useState("");
  const [kazatarihi, setKazaTarihi] = useState();
  const [kusurdurumu, setKusurDurumu] = useState();
  const [maluliyetdurumu, setMaluliyetDurumu] = useState();
  const [dogumyili, setDogumYili] = useState();
  const [cinsiyet, setCinsiyet] = useState();
  const [gelir, setGelir] = useState();
  const [telno, setTelNo] = useState();
  const [il, setIl] = useState();
  const [isLoading, setLoading] = useState(false);
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
  const history = useHistory();
  const handleSelectChange = (e) => {
    setKazaTuru(e.target.value);
  };
  const handleSelectChangeKusur = (e) => {
    setKusurDurumu(e.target.value);
  };
  const handleSelectChangeCinsiyet = (e) => {
    setCinsiyet(e.target.value);
  };
  const handleSelectChangeIl = (e) => {
    setIl(e.target.value);
  };

  const submit = async (e) => {
    setLoading(true);
    SetSuccess(false);
    // SetErrorField("")
    e.preventDefault();
    try {
      // const response = await axios.post("http://localhost:5000/yaralanma", { kazaturu, kazatarihi, kusurdurumu, maluliyetdurumu, dogumyili, cinsiyet, gelir, telno, il, name });
      const response = await axios.post(
        "https://trafikcezasorgulama.vercel.app/yaralanma",
        {
          kazaturu,
          kazatarihi,
          kusurdurumu,
          maluliyetdurumu,
          dogumyili,
          cinsiyet,
          gelir,
          telno,
          il,
          name,
        }
      );
      if (response.data.success) {
        history.push("/basarili");
        // SetSuccess(true)
        // setKazaTuru("");
        // setKazaTarihi("");
        // setKusurDurumu("");
        // setMaluliyetDurumu("");
        // setDogumYili("");
        // setCinsiyet("");
        // setGelir("");
        // setTelNo("");
        // setIl("");
        // setName("");
      }
    } catch (error) {
      setLoading(false);
      SetErrorField(error.response.data);
    }
  };
  const Error = (props) => {
    const message = props.ErrorType;
    return (
      <div className="my-3">
        <div className="text-xs text-red-500 font-bold">{message}</div>
      </div>
    );
  };
  const Success = () => {
    if (success === true) {
      return (
        <div className="my-2">
          <div className="text-xs text-green-500 font-bold">
            Kaydınız oluşturuldu.
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <div className="mt-4 mb-2">
        <select
          value={kazaturu}
          onChange={handleSelectChange}
          className="shadow  px-1 text-xs border rounded w-full  text-gray-400 leading-tight focus:outline-none focus:shadow-outline h-6"
        >
          <option>Kaza Türü</option>
          <option value="Trafik Kazası">Trafik Kazası</option>
          <option value="İş Kazası">İş Kazası</option>
          <option value="Malpraktis">Malpraktis</option>
        </select>
      </div>
      <input
        className="shadow  border rounded w-full my-2 py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline h-6"
        id="firstName"
        type="text"
        placeholder="Kaza Tarihi"
        value={kazatarihi}
        onChange={(event) => setKazaTarihi(event.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
      <div className="my-2">
        <select
          value={kusurdurumu}
          onChange={handleSelectChangeKusur}
          className="shadow  px-1 text-xs border rounded w-full  text-gray-400 leading-tight focus:outline-none focus:shadow-outline h-6"
        >
          <option>Kusur Durumunuz</option>
          <option value="0/8">0/8(%0)</option>
          <option value="2/8">2/8(%25)</option>
          <option value="4/8">4/8(%50)</option>
          <option value="6/8">6/8(%75)</option>
          <option value="8/8">8/8(%100)</option>
        </select>
      </div>
      <input
        className="shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-6"
        id="firstName"
        type="number"
        placeholder="Maluliyet Durumu (1-99 Arası)"
        value={maluliyetdurumu}
        onChange={(event) => setMaluliyetDurumu(event.target.value)}
      />
      <input
        className="shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-6"
        id="firstName"
        type="number"
        placeholder="Doğum Yılınız"
        value={dogumyili}
        onChange={(event) => setDogumYili(event.target.value)}
      />
      <div className="my-2">
        <select
          value={cinsiyet}
          onChange={handleSelectChangeCinsiyet}
          className="shadow  px-1 text-xs border rounded w-full  text-gray-400 leading-tight focus:outline-none focus:shadow-outline h-6"
        >
          <option>Cinsiyetiniz</option>
          <option value="Kadın">Kadın</option>
          <option value="Erkek">Erkek</option>
        </select>
      </div>
      <input
        className="shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-6"
        id="firstName"
        type="number"
        placeholder="Geliriniz"
        value={gelir}
        onChange={(event) => setGelir(event.target.value)}
      />
      <input
        className="shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-6"
        id="firstName"
        type="text"
        placeholder="Adınız ve Soyadınız"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-6"
        id="firstName"
        type="text"
        placeholder="Telefon Numaranız"
        value={telno}
        onChange={(event) => setTelNo(event.target.value)}
      />
      <div className="my-2">
        <select
          value={il}
          onChange={handleSelectChangeIl}
          className="shadow  px-1 text-xs border rounded w-full  text-gray-400 leading-tight focus:outline-none focus:shadow-outline h-6"
        >
          <option>Yaşadığınız İl</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <Error ErrorType={errorField.ErrorMessage} />
      <Success />
      {isLoading ? (
        <div className="flex items-center justify-between mt-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={submit}
          >
            <span className="animate-spin inline-block mr-2">
              {/* Basit bir Tailwind spinner. Daha detaylı spinnerlar için 3. parti kütüphaneleri veya özel CSS kullanabilirsiniz. */}
              <svg
                className="w-4 h-4 border-t-2 border-white border-solid rounded-full"
                viewBox="0 0 24 24"
              ></svg>
            </span>
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between mt-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={submit}
          >
            Hesapla
          </button>
        </div>
      )}
    </div>
  );
}
