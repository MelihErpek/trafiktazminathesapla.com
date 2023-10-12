import React from 'react'
import {
    BrowserRouter as Routers,
    Switch,
    Route
} from "react-router-dom";

import Home from "../Components/Home"
import Admin from "../Components/Admin"
import AnaSayfa from "../Components/AnaSayfa"
import Nav from "../Components/NavBar"
import Footer from "../Components/Footer"
import Yazi1 from "../Components/Yazi1"
import Yazi2 from "../Components/Yazi2"
import Yazi3 from "../Components/Yazi3"
import Yazi4 from "../Components/Yazi4"
import ManeviTazminat from "../Components/ManeviTazminat"
import KaliciEngel from "../Components/KaliciEngel"
import Geciciİs from "../Components/Geciciİs"
import BakiciGideri from "../Components/BakiciGideri"
import Fatura from "../Components/Fatura"
import Destek from "../Components/Destek"
import Basarili from "../Components/Basarili"


export default function Router() {
    return (
        <div>
            <Routers >
                <Nav />
                <Switch>
                    <Route path="/" exact component={AnaSayfa} />

                    {/* <Route path="/admin" exact component={Admin} /> */}
                    <Route path="/tazminat-hesapla" exact component={Home} />
                    <Route path="/trafik-kazasindan-sonra-sigorta-sirketine-karsi-acilabilecek-maddi-tazminat-davasi" exact component={Yazi1} />
                    <Route path="/trafik-kazasi-sonrasinda-arac-deger-kaybinin-talep-edilmesi" exact component={Yazi2} />
                    <Route path="/kaza-kusur-oranina-itiraz-haklarinizi-korumak-icin-hukuki-adimlar" exact component={Yazi3} />
                    <Route path="/trafik-kazasinda-ikame-arac-bedeli-talebi-haklarinizi-korumak-icin-bilinmesi-gerekenler" exact component={Yazi4} />
                    <Route path="/manevi-tazminat-davasi" exact component={ManeviTazminat} />
                    <Route path="/kalici-engel-tazminati" exact component={KaliciEngel} />
                    <Route path="/gecici-is-göremezlik-tazminati" exact component={Geciciİs} />
                    <Route path="/bakici-gideri" exact component={BakiciGideri} />
                    <Route path="/faturalandirilamayan-tedavi-gideri" exact component={Fatura} />
                    <Route path="/destekten-yoksun-kalma-tazminati" exact component={Destek} />
                    <Route path="/basarili" exact component={Basarili} />

                </Switch>
                <Footer/>

            </Routers>


        </div>
    )
}
