import React, { Fragment, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Box,
  Chip,
  Divider,
  FormControl,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  NativeSelect,
  Select,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import blueFlowerL from "../public/assets/blueFlowerL.svg";
import blueFlowerR from "../public/assets/blueFlowerR.svg";
import backWave from "../public/assets/backWave.svg";
import middleWave from "../public/assets/middleWave.svg";
import frontWave from "../public/assets/frontWave.svg";
import blueFlower from "../public/assets/blueFlower.svg";
import bngFlower from "../public/assets/bngFlower.svg";
import vectorBL from "../public/assets/VectorBL2.svg";
import vectorBR from "../public/assets/VectorBR2.svg";
import vectorTL from "../public/assets/VectorTL2.svg";
import vectorTR from "../public/assets/VectorTR2.svg";
import backgroundCountdown from "../public/assets/countdownBG.svg";
import backgroundComments from "../public/assets/commentsBG.svg";
import FlowerClip from "../public/assets/flowerClip.svg";
import FlowerTP from "../public/assets/flowerTP.svg";
import normalRect from "../public/assets/normalRect.svg";
import slantedRect from "../public/assets/slantedRect.svg";
import LoveRing from "../public/assets/LoveRing.svg";
import gallery1 from "../public/assets/gallery1.jpg";
import curve from "../public/assets/curve.svg";
import tilted from "../public/assets/tiltedPolygon.svg";
import Itachi from "../public/assets/Itachi.png";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import Head from "next/head";
// import { useSelector } from "react-redux";
import { calculateTimeLeft } from "../utils/helpers/calculateDuration";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const Template3 = (props) => {
  const [store, setStore] = useState(props.store);
  const theArr = store.theProject.gallery.konten.gambar;
  const theChats = store.theProject.comments.chats;

  const hari = {
    0: "Minggu",
    1: "Senin",
    2: "Selasa",
    3: "Rabu",
    4: "Kamis",
    5: "Jumat",
    6: "Sabtu",
  };

  const bulan = {
    0: "Januari",
    1: "Februari",
    2: "Maret",
    3: "April",
    4: "Mei",
    5: "Juni",
    6: "Juli",
    7: "Agustus",
    8: "September",
    9: "Oktober",
    10: "November",
    11: "Desember",
  };
  // const countdown = [
  //   { name: "Hari", amount: "24" },
  //   { name: "Jam", amount: "01" },
  //   { name: "Menit", amount: "25" },
  //   { name: "Detik", amount: "50" },
  // ];

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(store.theProject.tanggal, store.theProject.jam_mulai)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(store.theProject.tanggal, store.theProject.jam_mulai));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const hero = () => {
    return (
      <Box
        sx={{
          // background: `radial-gradient(white, #696969)`,
          background: store.theProject.hero.background.gambar
            ? `url(${store.theProject.hero.background.gambar})`
            : store.theProject.hero.background.warna_bg
            ? `radial-gradient(white, ${store.theProject.hero.background.warna_bg})`
            : "radial-gradient(white, #696969)",
          // backgroundImage: `url(${store.theProject.hero.background.gambar})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mb={0}
        pt={10}
      >
        <Box width="100%" display="flex" justifyContent="space-between">
          <Image src={blueFlowerL.src} width="100%" height="100%" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Typography
              fontFamily="Poppins"
              sx={{
                fontSize: `${store.theProject.hero.teks.ukuran * 1}px`,
                color: `${store.theProject.hero.teks.warna_font}`,
              }}
            >
              {store.theProject.hero.konten.desc_atas
                ? store.theProject.hero.konten.desc_atas
                : "The Wedding Of"}
            </Typography>
            <Typography
              textAlign="center"
              fontFamily="Allura"
              sx={{
                fontSize: `${store.theProject.hero.teks.ukuran * 5}px`,
                color: store.theProject.hero.teks.warna_font
                  ? `${store.theProject.hero.teks.warna_font}`
                  : "#1C2537",
              }}
            >
              {store.theProject.hero.konten.judul
                ? store.theProject.hero.konten.judul
                : "Romeo &  Juliet"}
            </Typography>
            <Typography
              fontFamily="Poppins"
              sx={{
                fontSize: `${store.theProject.hero.teks.ukuran * 1}px`,
                color: `${store.theProject.hero.teks.warna_font}`,
              }}
            >
              {store.theProject.hero.konten.desc_bawah
                ? store.theProject.hero.konten.desc_bawah
                : "A New Life for Happiness"}
            </Typography>
            <Typography
              textAlign="center"
              fontFamily="Allura"
              sx={{
                fontSize: `${store.theProject.hero.teks.ukuran * 2}px`,
                color: `${store.theProject.hero.teks.warna_font}`,
              }}
            >
              Kamis, 01 Januari 2022
            </Typography>
          </Box>
          <Image src={blueFlowerR.src} width="100%" height="100%" />
        </Box>
        <Box
          position="relative"
          width="100%"
          height="160px"
          sx={{
            background: "linear-gradient(to bottom, transparent 80%, rgba(28, 37, 54, 1)100%)",
          }}
        >
          <Box
            position="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            height="100%"
          >
            <img style={{ zIndex: "10", width: "100%" }} src={backWave.src} />
          </Box>
          <Box
            position="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            height="100%"
          >
            <img style={{ zIndex: "20", width: "100%" }} src={middleWave.src} />
          </Box>
          <Box
            position="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            height="100%"
          >
            <img style={{ zIndex: "30", width: "100%" }} src={frontWave.src} />
          </Box>
          {/* <Image position="absolute" src={middleWave.src} width="1000px" height="100%"/>
    <Image position="absolute" src={frontWave.src} width="100%" height="100%"/> */}
        </Box>
      </Box>
    );
  };

  const regard = () => {
    return (
      <Box
        sx={{
          backgroundImage: store.theProject.regards.background.gambar
            ? `url(${store.theProject.regards.background.gambar})`
            : `url(${backgroundCountdown.src})`,
          backgroundColor: store.theProject.regards.background.warna_bg
            ? `${store.theProject.regards.background.warna_bg}`
            : `#rgba(28, 37, 54, 1)`,
          // backgroundImage: `url(${store.theProject.hero.background.gambar})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        py={5}
      >
        <img src={blueFlower.src} />
        <Typography
          fontFamily="Allura"
          sx={{
            fontSize: `${store.theProject.regards.teks.ukuran * 3}px`,
            // color: `${store.theProject.regards.teks.warna_font}`,
            color: `#E8D3C3`,
            textAlign: "center",
          }}
        >
          {store.theProject.regards.konten.judul
            ? store.theProject.regards.konten.judul
            : "Dear Friends"}
        </Typography>
        <Typography
          fontFamily="Poppins"
          px={10}
          sx={{
            fontSize: `${store.theProject.regards.teks.ukuran * 1}px`,
            color: store.theProject.regards.teks.warna_font
              ? `${store.theProject.regards.teks.warna_font}`
              : "#FFF",
            textAlign: "center",
          }}
        >
          {store.theProject.regards.konten.desc
            ? store.theProject.regards.konten.desc
            : "You are invited to our wedding"}
        </Typography>
        {/* <Typography color="#E8D3C3" fontFamily="Allura" fontSize="48px">
          Dear John Doe
        </Typography>
        <Typography color="#FFF" fontFamily="Poppins" fontSize="18px">
          You are invited to our Wedding Party
        </Typography> */}
      </Box>
    );
  };

  const brideAndGroom = () => {
    return (
      <Box
        sx={{
          background: store.theProject.bride_and_groom.background.gambar
            ? `url(${store.theProject.bride_and_groom.background.gambar})`
            : store.theProject.bride_and_groom.background.warna_bg
            ? `${store.theProject.bride_and_groom.background.warna_bg}`
            : "rgba(28, 37, 54, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        py={5}
      >
        <img src={blueFlower.src} />
        <Typography
          fontFamily="Allura"
          sx={{
            fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 3}px`,
            // color: `${store.theProject.bride_and_groom.teks.warna_font}`,
            color: "#E8D3C3",
            textAlign: "center",
          }}
        >
          {store.theProject.bride_and_groom.konten.judul
            ? store.theProject.bride_and_groom.konten.judul
            : "Om Swastiastu"}
        </Typography>
        <Typography
          fontFamily="Poppins"
          px={10}
          sx={{
            fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 1}px`,
            color: store.theProject.bride_and_groom.teks.warna_font
              ? `${store.theProject.bride_and_groom.teks.warna_font}`
              : "#FFF",
            textAlign: "center",
          }}
        >
          {store.theProject.bride_and_groom.konten.desc
            ? store.theProject.bride_and_groom.konten.desc
            : "Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa"}
        </Typography>
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          height="100%"
          mt={10}
        >
          <Box position="absolute" left="0" top="20%">
            <img src={blueFlowerL.src} />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box position="relative">
              <img
                src={process.env.NEXT_PUBLIC_BACKEND_API + store.theProject.customer_data.groom.pic}
                className="circle"
                width="300px"
                height="300px"
              />
              <Box position="absolute" top="60%" left="10%">
                <img src={bngFlower.src} />
              </Box>
            </Box>
            <Typography color="#E8D3C3" fontFamily="Allura" fontSize="48px">
              {store.theProject.customer_data.groom.name
                ? store.theProject.customer_data.groom.name
                : "Romeo"}
            </Typography>
            <Typography
              sx={{
                fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 1}px`,
                color: store.theProject.bride_and_groom.teks.warna_font
                  ? `${store.theProject.bride_and_groom.teks.warna_font}`
                  : "#FFF",

                textAlign: "center",
              }}
              fontFamily="Poppins"
              fontStyle="italic"
            >
              Anak dari Pasangan
            </Typography>
            <Typography
              sx={{
                fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 1}px`,
                color: store.theProject.bride_and_groom.teks.warna_font
                  ? `${store.theProject.bride_and_groom.teks.warna_font}`
                  : "#FFF",

                textAlign: "center",
              }}
              fontFamily="Poppins"
            >
              {store.theProject.customer_data.groom.dad
                ? store.theProject.customer_data.groom.dad
                : "Romeo Sr."}{" "}
              &{" "}
              {store.theProject.customer_data.groom.mom
                ? store.theProject.customer_data.groom.mom
                : "Ms. Romeo Sr."}
            </Typography>
          </Box>
          <Box py={5}>
            <Typography color="#E8D3C3" fontFamily="Allura" fontSize="64px">
              &
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box position="relative">
              <img
                src={process.env.NEXT_PUBLIC_BACKEND_API + store.theProject.customer_data.bride.pic}
                className="circle"
                width="300px"
                height="300px"
              />
              <Box position="absolute" top="60%" left="10%">
                <img src={bngFlower.src} />
              </Box>
            </Box>
            <Typography color="#E8D3C3" fontFamily="Allura" fontSize="48px">
              {store.theProject.customer_data.bride.name
                ? store.theProject.customer_data.bride.name
                : "Juliet"}
            </Typography>
            <Typography
              sx={{
                fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 1}px`,
                color: store.theProject.bride_and_groom.teks.warna_font
                  ? `${store.theProject.bride_and_groom.teks.warna_font}`
                  : "#FFF",
                textAlign: "center",
              }}
              fontFamily="Poppins"
              fontStyle="italic"
            >
              Anak dari Pasangan
            </Typography>
            <Typography
              sx={{
                fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 1}px`,
                color: store.theProject.bride_and_groom.teks.warna_font
                  ? `${store.theProject.bride_and_groom.teks.warna_font}`
                  : "#FFF",
                textAlign: "center",
              }}
              fontFamily="Poppins"
              fontSize="20px"
            >
              {store.theProject.customer_data.bride.dad
                ? store.theProject.customer_data.bride.dad
                : "Mr. Juliet"}{" "}
              &{" "}
              {store.theProject.customer_data.bride.mom
                ? store.theProject.customer_data.bride.mom
                : "Ms. Juliet Sr."}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  const timeAndPlace = () => {
    return (
      <Box
        sx={{
          // background: "rgba(28, 37, 54, 1)",
          background: store.theProject.time_and_place.background.gambar
            ? `url(${store.theProject.time_and_place.background.gambar})`
            : store.theProject.time_and_place.background.warna_bg
            ? `${store.theProject.time_and_place.background.warna_bg}`
            : "rgba(28, 37, 54, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        position="relative"
        py={5}
      >
        <img src={blueFlower.src} />
        <Typography
          sx={{
            fontSize: `${store.theProject.time_and_place.teks.ukuran * 3}px`,
            // color: `${store.theProject.time_and_place.teks.warna_font}`,
            color: "#E8D3C3",
            textAlign: "center",
          }}
          fontFamily="Allura"
        >
          {store.theProject.time_and_place.konten.judul
            ? store.theProject.time_and_place.konten.judul
            : "Waktu dan Tempat"}
        </Typography>
        <Typography
          sx={{
            fontSize: `${store.theProject.time_and_place.teks.ukuran * 1}px`,
            color: store.theProject.time_and_place.teks.warna_font
              ? `${store.theProject.time_and_place.teks.warna_font}`
              : "#FFF",
            // color: "#E8D3C3",
            textAlign: "center",
          }}
          px={10}
          fontFamily="Poppins"
        >
          {store.theProject.time_and_place.konten.desc
            ? store.theProject.time_and_place.konten.desc
            : "lorem ipsum"}
        </Typography>
        <Box position="absolute" right="0">
          <img src={blueFlowerR.src} />
        </Box>
        <Box display="flex" width="60vw" mt={5} justifyContent="space-around">
          <Image src={vectorTL} />
          <Image src={vectorTR} />
        </Box>
        <Box
          sx={{
            color: "white",
            width: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "36px", color: "rgba(232, 211, 195, 1)" }}>
            {store.theProject.nama_acara ? store.theProject.nama_acara : "Resepsi"}
          </Typography>
          <br />
          <Typography>
            {store.theProject.tanggal
              ? hari[new Date(store.theProject.tanggal).getDay()] +
                ", " +
                new Date(store.theProject.tanggal).getDate() +
                " " +
                bulan[new Date(store.theProject.tanggal).getMonth()] +
                " " +
                new Date(store.theProject.tanggal).getFullYear()
              : "Sabtu, 1 Januari 2022"}
          </Typography>
          <Typography>
            {store.theProject.jam_mulai && store.theProject.jam_selesai && store.theProject.timezone
              ? store.theProject.jam_mulai +
                " - " +
                store.theProject.jam_selesai +
                " " +
                store.theProject.timezone
              : "07:00 - 19:00 WIB"}
          </Typography>
          <br />
          <Typography sx={{ textAlign: "center" }}>
            {store.theProject.lokasi
              ? store.theProject.lokasi
              : "Surfboards, Jalan Pantai Batu Bolong, Canggu 08456, Bali, Indonesia"}
          </Typography>
          <br />
          <Button variant="contained" sx={{ backgroundColor: "rgba(177, 145, 121, 1)" }}>
            <a
              href={`https://www.google.com/maps/search/${store.theProject.lokasi}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Buka Peta
            </a>
          </Button>
        </Box>
        <Box display="flex" width="60vw" mb={5} justifyContent="space-around">
          <Image src={vectorBL} />
          <Image src={vectorBR} />
        </Box>
      </Box>
    );
  };

  const countdown = () => {
    return (
      <Box
        sx={{
          backgroundImage: store.theProject.countdown.background.gambar
            ? `url(${store.theProject.countdown.background.gambar})`
            : `url(${backgroundCountdown.src})`,
          backgroundColor: store.theProject.countdown.background.warna_bg
            ? `${store.theProject.countdown.background.warna_bg}`
            : "rgba(28, 37, 54, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // zIndex: 200,
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        py={4}
        // height={240}
      >
        <img src={blueFlower.src} />
        <Typography
          sx={{
            fontSize: `${store.theProject.countdown.teks.ukuran * 2}px`,
            color: store.theProject.countdown.teks.warna_font
              ? `${store.theProject.countdown.teks.warna_font}`
              : "#FFF",
            // color: "#E8D3C3",
            textAlign: "center",
          }}
          fontFamily="Allura"
        >
          {store.theProject.countdown.konten.judul
            ? store.theProject.countdown.konten.judul
            : "Hari Bahagia"}
        </Typography>
        <Box width="70%" display="flex" justifyContent="space-evenly">

          {/* Hari */}
          <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              letterSpacing={4}
              mx={3}
            >
              <Typography sx={{ fontSize: "48px", color: "#C18F7C", fontFamily: "Alex Brush" }}>
                {timeLeft ? timeLeft.days.toString().length < 2 ? "0" + timeLeft.days : timeLeft.days : "01"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: store.theProject.countdown.teks.warna_font
                    ? `${store.theProject.countdown.teks.warna_font}`
                    : "#FFF",
                  fontFamily: "Montserrat",
                }}
              >
                Hari
              </Typography>
            </Box>

            {/* Jam */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              letterSpacing={4}
              mx={3}
            >
              <Typography sx={{ fontSize: "48px", color: "#C18F7C", fontFamily: "Alex Brush" }}>
                {timeLeft ? timeLeft.hours.toString().length < 2 ? "0" + timeLeft.hours : timeLeft.hours : "23"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: store.theProject.countdown.teks.warna_font
                    ? `${store.theProject.countdown.teks.warna_font}`
                    : "#FFF",
                  fontFamily: "Montserrat",
                }}
              >
                Jam
              </Typography>
            </Box>

            {/* Minutes */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              letterSpacing={4}
              mx={3}
            >
              <Typography sx={{ fontSize: "48px", color: "#C18F7C", fontFamily: "Alex Brush" }}>
                {timeLeft ? timeLeft.minutes.toString().length < 2 ? "0" + timeLeft.minutes : timeLeft.minutes : "45"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: store.theProject.countdown.teks.warna_font
                    ? `${store.theProject.countdown.teks.warna_font}`
                    : "#FFF",
                  fontFamily: "Montserrat",
                }}
              >
                Minutes
              </Typography>
            </Box>

            {/* Seconds */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              letterSpacing={4}
              mx={3}
            >
              <Typography sx={{ fontSize: "48px", color: "#C18F7C", fontFamily: "Alex Brush" }}>
                {timeLeft ? timeLeft.seconds.toString().length < 2 ? "0" + timeLeft.seconds : timeLeft.seconds : "67"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: store.theProject.countdown.teks.warna_font
                    ? `${store.theProject.countdown.teks.warna_font}`
                    : "#FFF",
                  fontFamily: "Montserrat",
                }}
              >
                Seconds
              </Typography>
            </Box>
        </Box>
      </Box>
    );
  };

  const gallery = () => {
    return (
      <Box
        sx={{
          background: store.theProject.gallery.background.gambar
            ? `url(${store.theProject.gallery.background.gambar})`
            : store.theProject.gallery.background.warna_bg
            ? `${store.theProject.gallery.background.warna_bg}`
            : "rgba(28, 37, 54, 1)",
        }}
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        position="relative"
        py={5}
      >
        <img src={blueFlower.src} />
        <Typography
          sx={{
            fontSize: `${store.theProject.gallery.teks.ukuran * 3}px`,
            // color: `${store.theProject.gallery.teks.warna_font}`,
            color: "#E8D3C3",
            textAlign: "center",
          }}
          fontFamily="Allura"
        >
          {store.theProject.gallery.konten.judul
            ? store.theProject.gallery.konten.judul
            : "Momen Bahagia"}
        </Typography>
        <Typography
          px={10}
          fontStyle="italic"
          fontFamily="Poppins"
          sx={{
            fontSize: `${store.theProject.gallery.teks.ukuran * 1}px`,
            color: store.theProject.gallery.teks.warna_font
              ? `${store.theProject.gallery.teks.warna_font}`
              : "#FFF",
            // color: "#E8D3C3",
            textAlign: "center",
          }}
        >
          {store.theProject.gallery.konten.desc
            ? store.theProject.gallery.konten.desc
            : "lorem ipsum"}
        </Typography>

        <Box display="flex" flexWrap="wrap" width="90%" justifyContent="center" mt={5}>
          {theArr &&
            theArr.map((ele) => {
              return (
                <Box m={3}>
                  <Image
                    loader={() => process.env.NEXT_PUBLIC_BACKEND_API + ele.attributes.url}
                    src={process.env.NEXT_PUBLIC_BACKEND_API + ele.attributes.url}
                    width={300}
                    height={500}
                  />
                  ;
                </Box>
              );
            })}
        </Box>
      </Box>
    );
  };

  const guestBook = () => {
    return (
      <Box
        sx={{
          backgroundImage: store.theProject.comments.background.gambar
            ? `url(${store.theProject.comments.background.gambar})`
            : `url(${backgroundComments.src})`,
          backgroundColor: store.theProject.comments.background.warna_bg
            ? `${store.theProject.comments.background.warna_bg}`
            : "rgba(28, 37, 54, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // height={1024}
        p={5}
      >
        <Image src={blueFlower} />
        <Typography
          sx={{
            fontSize: `${store.theProject.comments.teks.ukuran * 3}px`,
            // color: `${store.theProject.comments.teks.warna_font}`,
            color: "#E8D3C3",
            textAlign: "center",
            fontFamily: "Alex Brush",
          }}
        >
          {store.theProject.comments.konten.judul
            ? store.theProject.comments.konten.judul
            : "Ucapan / Doa"}
        </Typography>
        <Typography
          sx={{
            fontSize: `${store.theProject.comments.teks.ukuran * 1}px`,
            color: store.theProject.comments.teks.warna_font
              ? `${store.theProject.comments.teks.warna_font}`
              : "#FFF",
            // color: "#E8D3C3",
            textAlign: "center",
            fontFamily: "Montserrat",
          }}
        >
          {store.theProject.comments.konten.desc
            ? store.theProject.comments.konten.desc
            : "lorem ipsum"}
        </Typography>
        <Box
          mt={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          width="60vw"
        >
          <Typography
            id="modal-modal-title"
            variant="subtitle1"
            width="100%"
            display="flex"
            justifyContent="flex-start"
            sx={{
              color: store.theProject.comments.teks.warna_font
                ? `${store.theProject.comments.teks.warna_font}`
                : "#FFF",
            }}
          >
            Nama
          </Typography>
          <Input
            type="text"
            sx={{
              width: "100%",
              background: "rgba(255,255,255,1)",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <br />
          <FormControl sx={{ mb: "1rem", width: "100%" }}>
            <Typography
              sx={{
                color: store.theProject.comments.teks.warna_font
                  ? `${store.theProject.comments.teks.warna_font}`
                  : "#FFF",
              }}
              id="modal-modal-title"
              variant="subtitle1"
            >
              Kedatangan
            </Typography>
            <NativeSelect
              defaultValue={"yes"}
              inputProps={{
                name: "datang",
                id: "uncontrolled-native",
              }}
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "0 6px",
              }}
            >
              <option value={"yes"}>Ya, Saya akan datang</option>
              <option value={"no"}>Maaf, Saya tidak bisa datang</option>
            </NativeSelect>
            {/* <Select
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // value={age}
              // label="Age"
              // onChange={handleChange}
              dafaultValue="yes"
              sx={{ width: "100%", backgroundColor: "white" }}
            >
              <MenuItem value="yes">Ya, Saya akan datang</MenuItem>
              <MenuItem value="no">Maaf, Saya tidak bisa datang</MenuItem>
            </Select> */}
          </FormControl>
          <Typography
            id="modal-modal-title"
            variant="subtitle1"
            color="white"
            width="100%"
            display="flex"
            justifyContent="flex-start"
            sx={{
              color: store.theProject.comments.teks.warna_font
                ? `${store.theProject.comments.teks.warna_font}`
                : "#FFF",
            }}
          >
            Pesan / Doa
          </Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            style={{
              width: "100%",
              height: 100,
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <Button
            sx={{
              backgroundColor: "#B19179",
              color: "white",
              display: "flex",
              justifyContent: "space-around",
              width: "110px",
              mt: "1rem",
              "&:hover": {
                backgroundColor: "#B19179",
              },
            }}
          >
            Kirim
            <SendIcon />
          </Button>
          <Box
            display="flex"
            justifyContent="center"
            // px={{
            //   md: 33,
            //   sm: 16,
            //   xs: 5,
            // }}
            mt={5}
            width="60vw"
          >
            <Box
              border="5px solid #B19179"
              borderRadius="10px"
              width="100%"
              height={500}
              overflow="auto"
              sx={{ backgroundColor: "transparent" }}
            >
              <List sx={{ width: "100%", bgcolor: "transparent", color: "white" }}>
                {theChats.map((ele, idx) => {
                  return (
                    <>
                      <ListItem alignItems="flex-start" id={idx}>
                        <ListItemAvatar>
                          <Avatar
                            sx={{ backgroundColor: "#B19179" }}
                            alt={ele.attributes.nama ? ele.attributes.nama : "John Doe"}
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                fontSize="20px"
                                color="#B19179"
                                fontWeight="bold"
                                mr={2}
                              >
                                {ele.attributes.nama ? ele.attributes.nama : "John Doe"}
                              </Typography>
                              <Chip
                                label={ele.attributes.datang ? "Akan Datang" : "Tidak Datang"}
                                sx={{ color: "#B19179", backgroundColor: "white" }}
                              />
                            </Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="gray"
                                mr={2}
                              >
                                {ele.attributes.createdAt
                                  ? moment(ele.attributes.createdAt).format("DD MMMM YYYY hh:mm")
                                  : "08 Maret 2022 17:03"}
                              </Typography>
                              <Typography
                                color="white"
                                backgroundColor="#B19179"
                                borderRadius="8px"
                                p={1}
                                mt={1}
                              >
                                {ele.attributes.ucapan ? ele.attributes.ucapan : "Lorem Ipsum"}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  const footer = () => {
    return (
      <Box
        sx={{
          background: store.theProject.footer.background.gambar
            ? `url(${store.theProject.footer.background.gambar})`
            : store.theProject.footer.background.warna_bg
            ? `${store.theProject.footer.background.warna_bg}`
            : "rgba(28, 37, 54, 1)",
        }}
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        position="relative"
        py={5}
      >
        <img src={blueFlower.src} />
        <Typography
          sx={{
            fontSize: `${store.theProject.footer.teks.ukuran * 3}px`,
            // color: `${store.theProject.footer.teks.warna_font}`,
            color: "#E8D3C3",
            textAlign: "center",
            fontFamily: "Allura",
          }}
        >
          {store.theProject.footer.konten.judul
            ? store.theProject.footer.konten.judul
            : "Thank You"}
        </Typography>
        <Typography
          px={10}
          sx={{
            fontSize: `${store.theProject.footer.teks.ukuran * 1}px`,
            color: store.theProject.footer.teks.warna_font
              ? `${store.theProject.footer.teks.warna_font}`
              : "#FFF",
            fontStyle: "italic",
            textAlign: "center",
            fontFamily: "Poppins",
          }}
        >
          {store.theProject.footer.konten.desc
            ? store.theProject.footer.konten.desc
            : "lorem ipsum"}
        </Typography>
      </Box>
    );
  };

  const mapping = {
    Hero: hero(),
    Regards: regard(),
    "Bride and Groom": brideAndGroom(),
    "Time and Place": timeAndPlace(),
    Countdown: countdown(),
    Gallery: gallery(),
    "Guest Book / Comments": guestBook(),
    Footer: footer(),
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Poppins&family=Alex+Brush&family=Montserrat&family=Ms+Madi&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box p={3}>
        <audio src={store.theProject.audio} autoPlay loop>
          <embed
            name="GoodEnough"
            src={store.theProject.audio}
            loop="true"
            hidden="true"
            autostart="true"
          />
        </audio>
        {store.theProject.order.map((ele, idx) => {
          return mapping[ele.content];
        })}
        {/* Hero */}

        {/* Regards */}

        {/* Bride & Groom */}

        {/* Time & Place */}

        {/* Countdown */}

        {/* Gallery */}

        {/* Comments */}

        {/* Footer */}
      </Box>
    </>
  );
};

export default Template3;
