import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Admin() {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const YaralanmaComponent = () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetchData();
        }, [data]);

        const fetchData = async () => {
            try {
                const response = await axios.get("https://trafikcezasorgulama.vercel.app/yaralanmaget");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <div className="w-full overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="text-left bg-gray-200 py-2 px-4">Kaza Türü</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Kaza Tarihi</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Kusur Durumunu</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Maluliyet Durumu</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Doğum Yılı</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Cinsiyeti</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Geliri</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Adı Soyadı</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Telefon Numarası</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Yaşadığı İl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-200 py-2 px-4">{item.kazaturu}</td>
                                <td className="border border-gray-200 py-2 px-4"> {item.kazatarihi}</td>
                                <td className="border border-gray-200 py-2 px-4"> {item.kusurdurumu}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.maluliyetdurumu}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.dogumyili}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.cinsiyet}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.gelir}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.name}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.telno}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.il}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    const VefatComponent = () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetchData();
        }, [data]);

        const fetchData = async () => {
            try {
                const response = await axios.get("https://trafikcezasorgulama.vercel.app/vefatget");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <div className="w-full overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="text-left bg-gray-200 py-2 px-4">Kaza Türü</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Kaza Tarihi</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Vefat Eden Kusur Durumu</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Vefat Eden Doğum Yılı</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Vefat Eden Cinsiyeti</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Vefat Eden Geliri</th>
                            <th className="text-left bg-gray-200 py-2 px-4"> Hak Sahibi Yakınlık Durumu</th>
                            <th className="text-left bg-gray-200 py-2 px-4"> Hak Sahibi Adı Soyadı</th>
                            <th className="text-left bg-gray-200 py-2 px-4"> Hak Sahibi Telefon Numarası</th>
                            <th className="text-left bg-gray-200 py-2 px-4"> Hak Sahibi Doğum Yılı</th>
                            <th className="text-left bg-gray-200 py-2 px-4"> Hak Sahibi Yaşadığı İl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-200 py-2 px-4">{item.kazaturu}</td>
                                <td className="border border-gray-200 py-2 px-4"> {item.kazatarihi}</td>
                                <td className="border border-gray-200 py-2 px-4"> {item.kusurdurumu}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.dogumyili}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.cinsiyet}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.gelir}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.yakinlik}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.name}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.telno}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.dogumyiliHakSahibi}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.il}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    const MaddiComponent = () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetchData();
        }, [data]);

        const fetchData = async () => {
            try {
                const response = await axios.get("https://trafikcezasorgulama.vercel.app/maddihasarget");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <div className="w-full overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="text-left bg-gray-200 py-2 px-4">Kaza Türü</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Kaza Tarihi</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Kusur Durumunu</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Doğum Yılı</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Cinsiyeti</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Adı Soyadı</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Telefon Numarası</th>
                            <th className="text-left bg-gray-200 py-2 px-4">Yaşadığı İl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-200 py-2 px-4">{item.kazaturu}</td>
                                <td className="border border-gray-200 py-2 px-4"> {item.kazatarihi}</td>
                                <td className="border border-gray-200 py-2 px-4"> {item.kusurdurumu}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.dogumyili}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.cinsiyet}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.name}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.telno}</td>
                                <td className="border border-gray-200 py-2 px-4">{item.il}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    return (
        <div className=" text-xs mt-4" >

            <div className=" sm:mx-52 mx-0" >


                <div className='flex justify-center mb-2'>
                    <div className={`px-3 rounded-lg font-semibold py-1 cursor-pointer ' ${checked1 ? "bg-blue-400 outline outline-1 outline-gray-400" : "bg-white"} `} onClick={() => { setChecked1(true); setChecked2(false); setChecked3(false) }}>Yaralanma</div>
                    <div className={` px-3 rounded-lg font-semibold mx-5 py-1 cursor-pointer ' ${checked2 ? "bg-blue-400 outline outline-1 outline-gray-400" : "bg-white"}`} onClick={() => { setChecked1(false); setChecked2(true); setChecked3(false) }}>Vefat</div>
                    <div className={` px-3 rounded-lg font-semibold py-1 cursor-pointer ' ${checked3 ? "bg-blue-400 outline outline-1 outline-gray-400" : "bg-white"}`} onClick={() => { setChecked1(false); setChecked2(false); setChecked3(true) }}>Maddi Hasar</div>
                </div>
                {checked1 && (
                    <div>
                        <YaralanmaComponent />
                    </div>
                )}
                {checked2 && (
                    <div>
                        <VefatComponent />
                    </div>
                )}
                {checked3 && (
                    <div>
                        <MaddiComponent />
                    </div>
                )}





            </div>

        </div>
    )
}
