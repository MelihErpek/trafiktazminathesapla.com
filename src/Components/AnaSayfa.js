import React from "react";
import Baslangic from "./HomeBaslangic";
import List from "./List";
import Makaleler from "./Makaleler";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";

export default function AnaSayfa() {
  return (
    <div>
      <Helmet>
        <title>Trafik Tazminatı Hesaplama - Kazalarınızda Yanınızdayız!</title>
        <meta name="description" content="Trafik kazası sonrası tazminatınızı kolayca hesaplayın. Güncel blog yazılarıyla bilgilenin ve ücretsiz danışmanlık için formumuzu doldurun!" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <Baslangic />
      <List />
      <Makaleler />
    </div>
  );
}
