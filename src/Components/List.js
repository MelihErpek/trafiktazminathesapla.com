import React from "react";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import PeopleIcon from "@mui/icons-material/People";
import BalanceIcon from "@mui/icons-material/Balance";
import VerifiedIcon from "@mui/icons-material/Verified";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet-async";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },

  // More products...
];

export default function List() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };
  const handlePopoverOpen3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handlePopoverClose3 = () => {
    setAnchorEl3(null);
  };
  const handlePopoverOpen4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handlePopoverClose4 = () => {
    setAnchorEl4(null);
  };
  const handlePopoverOpen5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };

  const handlePopoverClose5 = () => {
    setAnchorEl5(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);
  const open5 = Boolean(anchorEl5);
  return (
    <div className="bg-white">
      <Helmet>
        <title>Trafik Tazminatı Hesaplama - Kazalarınızda Yanınızdayız!</title>
        <meta
          name="description"
          content="Trafik kazası sonrası tazminatınızı kolayca hesaplayın. Güncel blog yazılarıyla bilgilenin ve ücretsiz danışmanlık için formumuzu doldurun!"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="px-4 py-4 sm:px-6   lg:px-8 sm:ml-52  ">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8 ">
          <div
            key="1"
            className="group relative mx-auto"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                Adli tıp raporunuz için en iyi şekilde araştırma yapılarak
                yönetmeliğe uygun olan alınabilecek en yüksek engel oranı
                gösterir rapor alınıp en yüksek sınırdan tazminat alınması
                sağlanıyor.
              </Typography>
            </Popover>
            <div
              className="aspect-h-1 aspect-w-1  sm:w-36 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 sm:mx-auto ml-10
                         "
            >
              <CurrencyLiraIcon sx={{ fontSize: 150 }} />
            </div>
            <div className="mt-4 flex justify-between text-center">
              <div>
                <h3 className="text-lg text-center text-rose-900 font-bold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Maksimum Tazminat Miktarı
                </h3>
              </div>
            </div>
          </div>
          <div
            key="2"
            className="group relative mx-auto"
            aria-owns={open2 ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen2}
            onMouseLeave={handlePopoverClose2}
          >
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open2}
              anchorEl={anchorEl2}
              onClose={handlePopoverClose2}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                Tüm süreciniz ivedilikle yürütülüp mümkün olan en kısa sürede
                dosyanız sonuçlandırılarak tazminatınızı almanız sağlanıyor.
              </Typography>
            </Popover>
            <div className="aspect-h-1 aspect-w-1  sm:w-36 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 sm:mx-auto ml-20  ">
              <HourglassTopIcon sx={{ fontSize: 150 }} />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-center text-rose-900 font-bold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  En Hızlı Şekilde Dosya Sonuçlandırma
                </h3>
              </div>
            </div>
          </div>
          <div
            key="3"
            className="group relative mx-auto"
            aria-owns={open3 ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen3}
            onMouseLeave={handlePopoverClose3}
          >
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open3}
              anchorEl={anchorEl3}
              onClose={handlePopoverClose3}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                Rapor işlemleriniz için birçok adli tıptan görüş alınıyor ve
                kusur durumunuz için gerekli olduğu takdirde uzman
                bilirkişilerden mütalaa alınıyor.
              </Typography>
            </Popover>
            <div className="aspect-h-1 aspect-w-1  sm:w-36 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75  sm:mx-auto ml-24 ">
              <PeopleIcon sx={{ fontSize: 150 }} />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-center text-rose-900 font-bold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Alanında Uzman Adli Tıp, Kusur ve Aktüer Bilirkişi Kadrosu
                </h3>
              </div>
            </div>
          </div>
          <div
            key="4"
            className="group relative mx-auto"
            aria-owns={open4 ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen4}
            onMouseLeave={handlePopoverClose4}
          >
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open4}
              anchorEl={anchorEl4}
              onClose={handlePopoverClose4}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                Alanında uzman olan Sigorta Avukatı kadromuz ile dosyanız birden
                çok avukat ile profesyonel bir şekilde takip ediliyor.
              </Typography>
            </Popover>
            <div className="aspect-h-1 aspect-w-1  sm:w-36 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 sm:mx-auto ml-12  ">
              <BalanceIcon sx={{ fontSize: 150 }} />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-center text-rose-900 font-bold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Uzman Sigorta Avukatı Kadrosu
                </h3>
              </div>
            </div>
          </div>
          <div key="5" className="group relative mx-auto">
            <div className="aspect-h-1 aspect-w-1  sm:w-36 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75  sm:mx-auto ml-6 ">
              <VerifiedIcon sx={{ fontSize: 150 }} />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-center text-rose-900 font-bold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Dosya Masrafsız Tahsilat
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
