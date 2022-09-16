import React from 'react';
import banner from "../img/banner.jpg";
import Logo from "./Logo";
import ButtonSubscribe from "./ButtonSubscribe";

function Header(props) {
    return (
        <header style={{backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8)), url(${banner})`}}>
            <nav>
                <section className="navbar-item">
                    <div className="logo">
                        <a href="#">
                            <Logo/>
                        </a>
                    </div>
                    <div className="menu-item">
                        <select name="#" id="language">
                            <option value="id">Bahasa Indonesia</option>
                            <option value="en">English</option>
                        </select>
                        <a href="#">Masuk</a>
                    </div>
                </section>
            </nav>
            <div className="tagline">
                <h1>Film, acara TV tak terbatas, dan lebih banyak lagi.</h1>
                <h2>Tonton di mana pun. Batalkan kapan pun.</h2>
                <p>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                <ButtonSubscribe name="Mulai" label="Alamat Email" />
            </div>
        </header>
    );
}

export default Header;