import React, { useState, useEffect, Fragment } from "react";
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
import backgroundHero from "../public/assets/heroBG.jpg";
import backgroundRegards from "../public/assets/regardsBG.jpg";
import backgroundCountdown from "../public/assets/countdownBG.svg";
import backgroundComments from "../public/assets/commentsBG.svg";
import gallery1 from "../public/assets/gallery1.jpg";
import Itachi from "../public/assets/Itachi.png";
import leafHero from "../public/assets/heroLeaf.svg";
import floral from "../public/assets/floralFrame.svg";
import brownLeaf from "../public/assets/brownLeaf.svg";
import eclipseR from "../public/assets/eclipseR.svg";
import eclipseL from "../public/assets/eclipseL.svg";
import vectorBL from "../public/assets/VectorBL1.svg";
import vectorBR from "../public/assets/VectorBR1.svg";
import vectorTL from "../public/assets/VectorTL1.svg";
import vectorTR from "../public/assets/VectorTR1.svg";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import Head from "next/head";
// import { useSelector } from "react-redux";
import moment from "moment";
import { calculateTimeLeft } from "../utils/helpers/calculateDuration";
import "moment/locale/id";
moment.locale("id");

const Template1 = (props) => {
    const [store, setStore] = useState(props.store);
    const theArr = store.theProject.gallery.konten.gambar;
    const theChats = store.theProject.comments.chats;
  
    useEffect(() => {
      console.log(props.store, "@51");
    }, []);
  
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
  
    const [timeLeft, setTimeLeft] = useState(
      calculateTimeLeft(store.theProject.tanggal, store.theProject.jam_mulai)
    );
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(
          calculateTimeLeft(store.theProject.tanggal, store.theProject.jam_mulai)
        );
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    const hero = () => {
      return (
        <Box
          sx={{
            background: store.theProject.hero.background.gambar
              ? `url(${store.theProject.hero.background.gambar})`
              : store.theProject.hero.background.warna_bg
              ? `${store.theProject.hero.background.warna_bg}`
              : `url(${backgroundHero.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            letterSpacing: 1,
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // width="100vw"
          height={480}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: `${store.theProject.hero.teks.ukuran * 1}px`,
              color: store.theProject.hero.teks.warna_font
                ? `${store.theProject.hero.teks.warna_font}`
                : "#FFF",
            }}
          >
            {store.theProject.hero.konten.desc_atas
              ? store.theProject.hero.konten.desc_atas
              : "The Wedding Of"}
          </Typography>
          <Image src={leafHero} />
          <Typography
            color="white"
            sx={{
              fontFamily: "Alex Brush",
              fontSize: `${store.theProject.hero.teks.ukuran * 4}px`,
              color: store.theProject.hero.teks.warna_font
                ? `${store.theProject.hero.teks.warna_font}`
                : "#FFF",
            }}
          >
            {store.theProject.hero.konten.judul
              ? store.theProject.hero.konten.judul
              : "Romeo &  Juliet"}
          </Typography>
          <Typography
            color="white"
            sx={{
              fontFamily: "Montserrat",
              fontSize: `${store.theProject.hero.teks.ukuran * 1}px`,
              color: store.theProject.hero.teks.warna_font
                ? `${store.theProject.hero.teks.warna_font}`
                : "#FFF",
            }}
          >
            {store.theProject.hero.konten.desc_bawah
              ? store.theProject.hero.konten.desc_bawah
              : "A New Life for Happiness"}
          </Typography>
          <Typography
            color="white"
            sx={{
              fontFamily: "Alex Brush",
              fontSize: `${store.theProject.hero.teks.ukuran * 1.8}px`,
              color: store.theProject.hero.teks.warna_font
                ? `${store.theProject.hero.teks.warna_font}`
                : "#FFF",
            }}
          >
            Kamis, 01 Januari 2022
          </Typography>
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
              : `#fff`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // width="100vw"
          // height={240}
          // mb={4}
          py={3}
        >
          <Image src={brownLeaf} />
          <Typography
            sx={{
              fontFamily: "Alex Brush",
              fontSize: `${store.theProject.regards.teks.ukuran * 2.5}px`,
              // color: `${store.theProject.regards.teks.warna_font}`,
              color: `#C18F7C`,
              textAlign: "center",
            }}
          >
            {store.theProject.regards.konten.judul
              ? store.theProject.regards.konten.judul
              : "Dear Friends"}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: `${store.theProject.regards.teks.ukuran * 1}px`,
              color: store.theProject.regards.teks.warna_font
                ? `${store.theProject.regards.teks.warna_font}`
                : "#000",
              textAlign: "center",
            }}
          >
            {store.theProject.regards.konten.desc
              ? store.theProject.regards.konten.desc
              : "You are invited to our wedding"}
          </Typography>
        </Box>
      );
    };
  
    const brideAndGroom = () => {
      return (
        <Box
          sx={{
            backgroundImage: `url(${eclipseR.src})`,
            backgroundColor: store.theProject.bride_and_groom.background.warna_bg
              ? `${store.theProject.bride_and_groom.background.warna_bg}`
              : "#242424",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // width="100vw"
          // height={1024}
          // mb={5}
          px={5}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Image src={brownLeaf} />
            <Typography
              sx={{
                fontFamily: "Alex Brush",
                fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 3}px`,
                // color: `${store.theProject.bride_and_groom.teks.warna_font}`,
                color: "#C18F7C",
                textAlign: "center",
              }}
            >
              {store.theProject.bride_and_groom.konten.judul
                ? store.theProject.bride_and_groom.konten.judul
                : "Om Swastiastu"}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                width: "60vw",
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
          </Box>
          <Box
            display="flex"
            // flexDirection="column"
            // alignItems="center"
            justifyContent="space-evenly"
            flexWrap="wrap"
            // height={720}
            width="90vw"
          >
            <Box
              // border="5px solid red"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              mb={20}
            >
              {/* <FloralIcon fontSize="small"/> */}
              <img
                src={
                  process.env.NEXT_PUBLIC_BACKEND_API +
                  store.theProject.customer_data.groom.pic
                }
                width={400}
                height={400}
                className="clipped"
              />
              <img
                src={floral.src}
                id="bunga"
                width={400}
                height={400}
                style={{ zIndex: 3000, position: "absolute", marginTop: -83 }}
              />
              <Typography
                sx={{
                  color: "#C18F7C",
                  fontFamily: "Alex Brush",
                  fontSize: "48px",
                }}
              >
                {store.theProject.customer_data.groom.name
                  ? store.theProject.customer_data.groom.name
                  : "Romeo"}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  fontSize: `${
                    store.theProject.bride_and_groom.teks.ukuran * 1
                  }px`,
                  color: store.theProject.bride_and_groom.teks.warna_font
                    ? `${store.theProject.bride_and_groom.teks.warna_font}`
                    : "#FFF",
                  textAlign: "center",
                }}
              >
                Anak dari Pasangan
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: `${
                    store.theProject.bride_and_groom.teks.ukuran * 1
                  }px`,
                  color: store.theProject.bride_and_groom.teks.warna_font
                    ? `${store.theProject.bride_and_groom.teks.warna_font}`
                    : "#FFF",
                  textAlign: "center",
                }}
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
            <Box
              // border="5px solid red"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              mb={20}
            >
              {/* <FloralIcon fontSize="small"/> */}
              <img
                src={
                  process.env.NEXT_PUBLIC_BACKEND_API +
                  store.theProject.customer_data.bride.pic
                }
                width={400}
                height={400}
                className="clipped"
              />
              <img
                src={floral.src}
                id="bunga"
                width={400}
                height={400}
                style={{ zIndex: 3000, position: "absolute", marginTop: -83 }}
              />
              <Typography
                sx={{
                  color: "#C18F7C",
                  fontFamily: "Alex Brush",
                  fontSize: "48px",
                }}
              >
                {store.theProject.customer_data.bride.name
                  ? store.theProject.customer_data.bride.name
                  : "Juliet"}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  fontSize: `${
                    store.theProject.bride_and_groom.teks.ukuran * 1
                  }px`,
                  color: store.theProject.bride_and_groom.teks.warna_font
                    ? `${store.theProject.bride_and_groom.teks.warna_font}`
                    : "#FFF",
                  textAlign: "center",
                }}
              >
                Anak dari Pasangan
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: `${
                    store.theProject.bride_and_groom.teks.ukuran * 1
                  }px`,
                  color: store.theProject.bride_and_groom.teks.warna_font
                    ? `${store.theProject.bride_and_groom.teks.warna_font}`
                    : "#FFF",
                  textAlign: "center",
                }}
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
            backgroundImage: `url(${eclipseL.src})`,
            backgroundColor: store.theProject.time_and_place.background.warna_bg
              ? `${store.theProject.time_and_place.background.warna_bg}`
              : "#242424",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // width="100vw"
          // height={640}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={brownLeaf} />
            <Typography
              sx={{
                fontFamily: "Alex Brush",
                fontSize: `${store.theProject.time_and_place.teks.ukuran * 3}px`,
                // color: `${store.theProject.time_and_place.teks.warna_font}`,
                color: "#C18F7C",
                textAlign: "center",
              }}
            >
              {store.theProject.time_and_place.konten.judul
                ? store.theProject.time_and_place.konten.judul
                : "Waktu dan Tempat"}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                width: "60vw",
                fontSize: `${store.theProject.time_and_place.teks.ukuran * 1}px`,
                color: store.theProject.time_and_place.teks.warna_font
                  ? `${store.theProject.time_and_place.teks.warna_font}`
                  : "#FFF",
                // color: "#E8D3C3",
                textAlign: "center",
              }}
            >
              {store.theProject.time_and_place.konten.desc
                ? store.theProject.time_and_place.konten.desc
                : "lorem ipsum"}
            </Typography>
            <Box display="flex" width="40vw" mt={3} justifyContent="space-around">
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
              <Typography sx={{ fontSize: "36px", color: "#C18F7C" }}>
                {store.theProject.nama_acara
                  ? store.theProject.nama_acara
                  : "Resepsi"}
              </Typography>
              <br />
              <Typography
                sx={{
                  color: store.theProject.time_and_place.teks.warna_font
                    ? `${store.theProject.time_and_place.teks.warna_font}`
                    : "#FFF",
                }}
              >
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
              <Typography
                sx={{
                  color: store.theProject.time_and_place.teks.warna_font
                    ? `${store.theProject.time_and_place.teks.warna_font}`
                    : "#FFF",
                }}
              >
                {store.theProject.jam_mulai &&
                store.theProject.jam_selesai &&
                store.theProject.timezone
                  ? store.theProject.jam_mulai +
                    " - " +
                    store.theProject.jam_selesai +
                    " " +
                    store.theProject.timezone
                  : "07:00 - 19:00 WIB"}
              </Typography>
              <br />
              <Typography
                sx={{
                  textAlign: "center",
                  color: store.theProject.time_and_place.teks.warna_font
                    ? `${store.theProject.time_and_place.teks.warna_font}`
                    : "#FFF",
                }}
              >
                {store.theProject.lokasi
                  ? store.theProject.lokasi
                  : "Surfboards, Jalan Pantai Batu Bolong, Canggu 08456, Bali, Indonesia"}
              </Typography>
              <br />
              <Button
                variant="contained"
                sx={{ backgroundColor: "rgba(193, 143, 124, 1)" }}
              >
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
            <Box display="flex" width="40vw" mb={5} justifyContent="space-around">
              <Image src={vectorBL} />
              <Image src={vectorBR} />
            </Box>
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
              : "#242424",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 200,
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height={240}
        >
          <Typography
            sx={{
              fontSize: `${store.theProject.countdown.teks.ukuran * 2}px`,
              color: store.theProject.countdown.teks.warna_font
                ? `${store.theProject.countdown.teks.warna_font}`
                : "#FFF",
              // color: "#E8D3C3",
              textAlign: "center",
            }}
            fontFamily="Montserrat"
          >
            {store.theProject.countdown.konten.judul
              ? store.theProject.countdown.konten.judul
              : "Hari Bahagia"}
          </Typography>
          <Box display="flex" justifyContent="space-evenly" width="70%">
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
              <Typography
                sx={{
                  fontSize: "48px",
                  color: "#C18F7C",
                  fontFamily: "Alex Brush",
                }}
              >
                {timeLeft
                  ? timeLeft.days.toString().length < 2
                    ? "0" + timeLeft.days
                    : timeLeft.days
                  : "01"}
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
              <Typography
                sx={{
                  fontSize: "48px",
                  color: "#C18F7C",
                  fontFamily: "Alex Brush",
                }}
              >
                {timeLeft
                  ? timeLeft.hours.toString().length < 2
                    ? "0" + timeLeft.hours
                    : timeLeft.hours
                  : "23"}
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
  
            {/* Menit */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              letterSpacing={4}
              mx={3}
            >
              <Typography
                sx={{
                  fontSize: "48px",
                  color: "#C18F7C",
                  fontFamily: "Alex Brush",
                }}
              >
                {timeLeft
                  ? timeLeft.minutes.toString().length < 2
                    ? "0" + timeLeft.minutes
                    : timeLeft.minutes
                  : "45"}
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
                Menit
              </Typography>
            </Box>
  
            {/* Detik */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              letterSpacing={4}
              mx={3}
            >
              <Typography
                sx={{
                  fontSize: "48px",
                  color: "#C18F7C",
                  fontFamily: "Alex Brush",
                }}
              >
                {timeLeft
                  ? timeLeft.seconds.toString().length < 2
                    ? "0" + timeLeft.seconds
                    : timeLeft.seconds
                  : "67"}
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
                Detik
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
            backgroundImage: `url(${eclipseR.src})`,
            backgroundColor: store.theProject.gallery.background.warna_bg
              ? `${store.theProject.gallery.background.warna_bg}`
              : "#242424",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // width="100%"
          // height={1024}
        >
          <Image src={brownLeaf} />
          <Typography
            sx={{
              fontFamily: "Alex Brush",
              fontSize: `${store.theProject.gallery.teks.ukuran * 3}px`,
              // color: `${store.theProject.gallery.teks.warna_font}`,
              color: "#C18F7C",
              textAlign: "center",
            }}
          >
            {store.theProject.gallery.konten.judul
              ? store.theProject.gallery.konten.judul
              : "Momen Bahagia"}
          </Typography>
          <Typography
            color="white"
            sx={{
              fontFamily: "Montserrat",
              // width: "60vw",
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
          <Box display="flex" flexWrap="wrap" width="90%" justifyContent="center">
            {theArr &&
              theArr.map((ele) => {
                return (
                  <Box m={3}>
                    <Image
                      loader={() =>
                        process.env.NEXT_PUBLIC_BACKEND_API + ele.attributes.url
                      }
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_API + ele.attributes.url
                      }
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
              : "#242424",
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
          <Image src={brownLeaf} />
          <Typography
            sx={{
              fontSize: `${store.theProject.comments.teks.ukuran * 3}px`,
              // color: `${store.theProject.comments.teks.warna_font}`,
              color: "#C18F7C",
              textAlign: "center",
              fontFamily: "Alex Brush",
            }}
          >
            {store.theProject.comments.konten.judul
              ? store.theProject.comments.konten.judul
              : "Ucapan / Doa"}
          </Typography>
          <Typography
            color="white"
            sx={{
              fontSize: `${store.theProject.comments.teks.ukuran * 1}px`,
              color: store.theProject.comments.teks.warna_font
                ? `${store.theProject.comments.teks.warna_font}`
                : "#FFF",
              fontFamily: "Montserrat",
              textAlign: "center",
              // width: "60vw",
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
              // fullWidth
              // value={dataLama ? dataLama.judul : ""}
              // onChange={(e) =>
              //   setDataLama((dataLama) => {
              //     return {
              //       ...dataLama,
              //       judul: e.target.value,
              //     };
              //   })
              // }
            />
            <br />
            <FormControl sx={{ mb: "1rem", width: "100%" }}>
              <Typography
                id="modal-modal-title"
                variant="subtitle1"
                sx={{
                  color: store.theProject.comments.teks.warna_font
                    ? `${store.theProject.comments.teks.warna_font}`
                    : "#FFF",
                }}
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
                placeholder="Apakah akan datang?"
                sx={{ width: "100%", backgroundColor: "white" }}
              >
                <MenuItem value="yes" selected>
                  
                </MenuItem>
                <MenuItem value="no"></MenuItem>
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
                backgroundColor: "#C18F7C",
                color: "white",
                display: "flex",
                justifyContent: "space-around",
                width: "110px",
                mt: "1rem",
                "&:hover": {
                  backgroundColor: "#C18F7C",
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
                border="5px solid #A37D6E"
                borderRadius="10px"
                width="100%"
                height={500}
                overflow="auto"
                sx={{ backgroundColor: "transparent" }}
              >
                <List
                  sx={{ width: "100%", bgcolor: "transparent", color: "white" }}
                >
                  {theChats.map((ele, idx) => {
                    return (
                      <>
                        <ListItem alignItems="flex-start" id={idx}>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ backgroundColor: "#A37D6E" }}
                              alt={
                                ele.attributes.nama
                                  ? ele.attributes.nama
                                  : "John Doe"
                              }
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
                                  color="#A37D6E"
                                  fontWeight="bold"
                                  mr={2}
                                >
                                  {ele.attributes.nama
                                    ? ele.attributes.nama
                                    : "John Doe"}
                                </Typography>
                                <Chip
                                  label={
                                    ele.attributes.datang
                                      ? "Akan Datang"
                                      : "Tidak Datang"
                                  }
                                  sx={{
                                    color: "#A37D6E",
                                    backgroundColor: "white",
                                  }}
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
                                    ? moment(ele.attributes.createdAt).format(
                                        "DD MMMM YYYY hh:mm"
                                      )
                                    : "08 Maret 2022 17:03"}
                                </Typography>
                                <Typography
                                  color="white"
                                  backgroundColor="#A37D6E"
                                  borderRadius="8px"
                                  p={1}
                                  mt={1}
                                >
                                  {ele.attributes.ucapan
                                    ? ele.attributes.ucapan
                                    : "Lorem Ipsum"}
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
              : "#242424",
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
          <Image src={brownLeaf} />
          <Typography
            sx={{
              fontSize: `${store.theProject.footer.teks.ukuran * 3}px`,
              // color: `${store.theProject.footer.teks.warna_font}`,
              color: "#C18F7C",
              textAlign: "center",
              fontFamily: "Alex Brush",
            }}
          >
            {store.theProject.footer.konten.judul
              ? store.theProject.footer.konten.judul
              : "Thank You"}
          </Typography>
          <Typography
            sx={{
              fontSize: `${store.theProject.footer.teks.ukuran * 1}px`,
              color: store.theProject.footer.teks.warna_font
                ? `${store.theProject.footer.teks.warna_font}`
                : "#FFF",
              fontStyle: "italic",
              fontFamily: "Montserrat",
              textAlign: "center",
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
            href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Montserrat&family=Ms+Madi&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Box sx={{ overflowX: "hidden" }} p={3}>
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
  
          {/* Bride and Groom */}
  
          {/* Time & Place  */}
  
          {/* Countdown */}
  
          {/* Gallery */}
  
          {/* Comments */}
  
          {/* Footer */}
        </Box>
      </>
    );
  };

// const Template1 = (props) => {
//   useEffect(() => {
//     console.log(props.store, "@47");
//   }, [props.store]);
// };

export default Template1;
