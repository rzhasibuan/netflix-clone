import React from "react";

import  {createRoot} from "react-dom/client";
import  './style/style.css';

import tv from './img/tv.png';
import mobileDownload from './img/mobile-0819.jpg';
import cardPoster from './img/boxshot.png';
import cardDownload from './img/download-icon.gif';
import SectionPertanyaan from "./components/SectionPertanyaan";
import Header from "./components/Header";
import SectionLeft from "./components/SectionLeft";
import SectionRight from "./components/SectionRight";
import SectionEmailSubscraibe from "./components/SectionEmailSubscraibe";
import Footer from "./components/Footer";

const root = createRoot(
  document.getElementById('root')
);

const containt = [
    {
        id: 1,
        title:'Apa itu netflix ?' ,
        body : 'Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun – semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!'
    },
    {
        id : 2,
        title: 'Berapa biaya berlanganan netflix ?',
        body: 'Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp54.000 hingga Rp186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak.'
    }
];
const bahasa = [
    {
        id: 1,
        value: 'Bahasa Indonesia'
    },
    {
        id: 2,
        value: 'English'
    },
];
const linkFooterTanyaJawab = [
    {
        id: 1,
        link: "#",
        title: "Tanya Jawab",
        catagory : 1
    },
    {
        id: 2,
        link: "#",
        title: "Cara Menonton",
        catagory :1
    },
    {
        id: 3,
        link: "#",
        title: "Hubungan Investor",
        catagory : 1
    },
    {
        id: 4,
        link: "#",
        title: "Informasi Perusahaan",
        catagory : 1
    },
    {
        id: 5,
        link: "#",
        title: "Hanya di Netflix",
        catagory : 1
    }
];
const linkFooterPusatBantuan = [
    {
        id: 1,
        link: "#",
        title: "Pusat Bantuan",
        catagory : 2
    },
    {
        id: 2,
        link: "#",
        title: "Lowongan Kerja",
        catagory : 2
    },
    {
        id: 3,
        link: "#",
        title: "Ketentuan Penggunaan",
        catagory : 2
    },
    {
        id: 4,
        link: "#",
        title: "Hubungi Kami",
        catagory : 2
    }
];
const linkFooterAkun = [
    {
        id: 1,
        link: "#",
        title: "Akun",
        catagory : 3
    },
    {
        id: 2,
        link: "#",
        title: "Tukar Kartu Hadiah",
        catagory : 3
    },
    {
        id: 3,
        link: "#",
        title: "Privasi",
        catagory : 3
    },
    {
        id: 4,
        link: "#",
        title: "Uji Kecepatan",
        catagory : 3
    }
];
const linkFooterPusatMedia = [
    {
        id: 1,
        link: "#",
        title: "Pusat Media",
        catagory : 4
    },
    {
        id: 2,
        link: "#",
        title: "Beli Kartu Hadiah",
        catagory : 4
    },
    {
        id: 3,
        link: "#",
        title: "Preferensi Cookie",
        catagory : 4
    },
    {
        id: 4,
        link: "#",
        title: "Informasi Legal",
        catagory : 4
    },
];


root.render(
    <div>
        <Header/>
        <main>
            <SectionLeft
                title="Nikmati di TV-mu."
                content="Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi."
                image={tv} />
            <SectionRight
                cardImgPoster={cardPoster}
                imgDownload={mobileDownload}
                iconCardDownload={cardDownload}
                titleCard="Stranger Things"
                linkCardDownload="#"
                title="Download acara TV untuk menontonnya secara offline."
                content="Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton" />
            <SectionPertanyaan
                title="Tanya jawab umum"
                query={containt}/>
            <SectionEmailSubscraibe
                title="Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu."/>
        </main>
        <Footer
            title="Ada pertanyaan? Hubungi 007-803-321-2148"
            bahasa={bahasa}
            copyRight="Netflix Indonesia"
            data1={linkFooterTanyaJawab}
            data2={linkFooterPusatBantuan}
            data3={linkFooterAkun}
            data4={linkFooterPusatMedia}
        />
    </div>
)