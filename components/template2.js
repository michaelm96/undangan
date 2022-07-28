import React, { useState, useEffect, Fragment, useRef } from "react";
import {
  Alert as MuiAlert,
  Avatar,
  Backdrop,
  Button,
  Box,
  Chip,
  Divider,
  Fade,
  FormControl,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Modal,
  NativeSelect,
  Select,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import FlowerL from "../public/assets/FlowerL.svg";
import FlowerR from "../public/assets/FlowerR.svg";
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
import { POST } from "../utils/network/baseRequest.utils";
import api from "../utils/network/baseUrl.utils";
import { modal } from "../utils/helpers/modal";
import { successAlert } from "../utils/helpers/alert";

import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  // backgroundColor: "red",
  backgroundImage: "linear-gradient(to right, #b92b27, #1565c0)",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};

const Template2 = (props) => {
  const [store, setStore] = useState(props.store);
  const theArr = store.theProject.gallery.konten.gambar;
  const theChats = store.theProject.comments.chats;
  const audioRef = useRef();
  const [nama, setNama] = useState("");
  const [comment, setComment] = useState("");
  const [datang, setDatang] = useState(true);
  const [open, setOpen] = useState(true);
  const [openSnack, setOpenSnack] = useState(false);
  const [msg, setMsg] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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

  const send = async (id) => {
    if (!nama || !comment) {
      console.log("gak lengkap");
      return;
    }
    try {
      const sendComment = await POST(api.BASE_URL + api.ENDPOINT.chat, {
        data: {
          nama: nama,
          datang: datang,
          ucapan: comment,
          comment: id,
        },
      });
      if(sendComment.status === 200) {
        setMsg("Sukses dikirim");
        setOpenSnack(true);
        setTimeout(() => {
          setOpenSnack(false);
        }, 3000);
      }
      // console.log(sendComment, "@131");
    } catch (error) {
      console.log(error, "@89");
    }
  };

  const hero = () => {
    return (
      <Box
        sx={{
          background: store.theProject.hero.background.gambar
            ? `url(${store.theProject.hero.background.gambar})`
            : store.theProject.hero.background.warna_bg
            ? `linear-gradient(180deg, ${store.theProject.hero.background.warna_bg} 0%, rgba(240, 244, 247, 0) 100%)`
            : `linear-gradient(180deg, #E1F2FF 0%, rgba(240, 244, 247, 0) 100%)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // background: `linear-gradient(180deg, #E1F2FF 0%, rgba(240, 244, 247, 0) 100%)`,
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          // height: "100%",
        }}
        pb={20}
      >
        <Image src={FlowerL.src} width={300} height={300} />
        <Image src={LoveRing.src} width={300} height={300} />
        <Image src={FlowerR.src} width={300} height={300} />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Image src={curve.src} width={180} height={100} />
            <Typography
              sx={{
                fontSize: `${store.theProject.hero.teks.ukuran * 1}px`,
                color: store.theProject.hero.teks.warna_font
                  ? `${store.theProject.hero.teks.warna_font}`
                  : "#B07778",
                fontFamily: "Montserrat",
              }}
            >
              {store.theProject.hero.konten.desc_atas
                ? store.theProject.hero.konten.desc_atas
                : "The Wedding Of"}
            </Typography>
            <Typography
              sx={{
                fontSize: `${store.theProject.hero.teks.ukuran * 4}px`,
                color: store.theProject.hero.teks.warna_font
                  ? `${store.theProject.hero.teks.warna_font}`
                  : "#B07778",
                fontFamily: "Ms Madi",
              }}
            >
              {store.theProject.hero.konten.judul
                ? store.theProject.hero.konten.judul
                : "Romeo &  Juliet"}
            </Typography>
            <Typography
              sx={{
                fontSize: `${store.theProject.hero.teks.ukuran * 1}px`,
                color: store.theProject.hero.teks.warna_font
                  ? `${store.theProject.hero.teks.warna_font}`
                  : "#B07778",
                fontFamily: "Montserrat",
              }}
            >
              {store.theProject.hero.konten.desc_bawah
                ? store.theProject.hero.konten.desc_bawah
                : "A New Life for Happiness"}
            </Typography>
            <Typography
              sx={{
                fontSize: `${store.theProject.hero.teks.ukuran * 2}px`,
                color: store.theProject.hero.teks.warna_font
                  ? `${store.theProject.hero.teks.warna_font}`
                  : "#B07778",
                fontFamily: "Ms Madi",
              }}
            >
              Kamis, 01 Januari 2022
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  const regard = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: store.theProject.regards.background.gambar
            ? `url(${store.theProject.regards.background.gambar})`
            : store.theProject.regards.background.warna_bg
            ? `${store.theProject.regards.background.warna_bg}`
            : "rgba(255, 255, 255, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        // my={10}
        py={5}
      >
        <Image src={curve.src} width={100} height={50} />
        <Typography
          sx={{
            fontSize: `${store.theProject.regards.teks.ukuran * 3}px`,
            // color: `${store.theProject.regards.teks.warna_font}`,
            color: "#B07778",
            textAlign: "center",
            fontFamily: "Ms Madi",
          }}
        >
          {store.theProject.regards.konten.judul
            ? store.theProject.regards.konten.judul
            : "Dear Friends"}
        </Typography>
        <Typography
          sx={{
            fontSize: `${store.theProject.regards.teks.ukuran * 1}px`,
            color: store.theProject.regards.teks.warna_font
              ? `${store.theProject.regards.teks.warna_font}`
              : "#2b2b2b",
            textAlign: "center",
            fontStyle: "italic",
            fontFamily: "Montserrat",
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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: store.theProject.bride_and_groom.background.gambar
            ? `url(${store.theProject.bride_and_groom.background.gambar})`
            : store.theProject.bride_and_groom.background.warna_bg
            ? `${store.theProject.bride_and_groom.background.warna_bg}`
            : "rgba(28, 37, 54, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        py={5}
      >
        <Image src={curve.src} width={100} height={70} />

        <Typography
          sx={{
            fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 3}px`,
            // color: `${store.theProject.bride_and_groom.teks.warna_font}`,
            color: "#B07778",
            textAlign: "center",
            fontFamily: "Ms Madi",
          }}
        >
          {store.theProject.bride_and_groom.konten.judul
            ? store.theProject.bride_and_groom.konten.judul
            : "Om Swastiastu"}
        </Typography>
        <Typography
          sx={{
            fontSize: `${store.theProject.bride_and_groom.teks.ukuran * 1}px`,
            color: store.theProject.bride_and_groom.teks.warna_font
              ? `${store.theProject.bride_and_groom.teks.warna_font}`
              : "#2b2b2b",
            textAlign: "center",
            fontStyle: "italic",
            fontFamily: "Montserrat",
          }}
          px={10}
        >
          {store.theProject.bride_and_groom.konten.desc
            ? store.theProject.bride_and_groom.konten.desc
            : "Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: {
              lg: "column",
              sm: "row",
              md: "row",
              lg: "row",
            },
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
            // flex:"2 1 2"
            flexWrap: "wrap",
          }}
          mt={9}
          // px={20}
        >
          <Box
            sx={{
              width: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              className="poligon"
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_BACKEND_API +
                  store.theProject.customer_data.groom.pic
                }
                width={400}
                height={400}
                className="clippedHexagon"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "100%",
              }}
            >
              <img
                style={{
                  position: "relative",
                  margin: "0 auto",
                  width: "100%",
                  height: "330px",
                }}
                src={tilted.src}
                width={300}
                height={400}
                className="clippedHexagon"
              />
              <img
                style={{
                  position: "relative",
                  top: "-80px",
                  margin: "0 auto",
                  width: "100%",
                  height: "100px",
                }}
                src={FlowerClip.src}
                width={300}
                height={400}
                className="clippedHexagon"
              />
            </Box>
            <Box
              mt={5}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="#B07778" fontSize={48} fontFamily="Ms Madi">
                {store.theProject.customer_data.groom.name
                  ? store.theProject.customer_data.groom.name
                  : "Romeo"}
              </Typography>
              <Typography
                sx={{
                  fontSize: `${
                    store.theProject.bride_and_groom.teks.ukuran * 1.2
                  }px`,
                  color: store.theProject.bride_and_groom.teks.warna_font
                    ? `${store.theProject.bride_and_groom.teks.warna_font}`
                    : "#FFF",

                  textAlign: "center",
                  fontStyle: "italic",
                  fontFamily: "Montserrat",
                }}
              >
                Anak dari Pasangan
              </Typography>
              <Typography
                sx={{
                  fontSize: `${
                    store.theProject.bride_and_groom.teks.ukuran * 1.2
                  }px`,
                  color: store.theProject.bride_and_groom.teks.warna_font
                    ? `${store.theProject.bride_and_groom.teks.warna_font}`
                    : "#FFF",

                  textAlign: "center",
                  fontFamily: "Montserrat",
                  fontStyle: "bold",
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
          </Box>
          <Box
            sx={{
              width: {
                // xs: "100%",
                // sm: "100%",
                md: "100px",
                lg: "400px",
                xl: "100px",
              },
              "@media (min-width: 840px)": {
                width: "80%",
              },
              "@media (min-width: 520px) and (max-width: 600px)": {
                width: "80%",
              },
              display: "flex",
              justifyContent: "center",
              // position: "absolute",
              fontFamily: "Ms Madi",
              fontSize: "128px",
              color: "#B07778",
              // top: "50px",
            }}
            mx={{
              sm: 20,
              md: 10,
            }}
            pb={{
              sm: "0px",
              md: "0px",
              // lg: "150px"
            }}
          >
            &
          </Box>
          <Box
            sx={{
              width: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              className="poligon"
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_BACKEND_API +
                  store.theProject.customer_data.bride.pic
                }
                width={400}
                height={400}
                className="clippedHexagon"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                // width: "100%",
              }}
            >
              <img
                style={{
                  position: "relative",
                  margin: "0 auto",
                  width: "100%",
                  height: "330px",
                }}
                src={tilted.src}
                width={300}
                height={400}
                className="clippedHexagon"
              />
              <img
                style={{
                  position: "relative",
                  top: "-80px",
                  margin: "0 auto",
                  width: "100%",
                  height: "100px",
                }}
                src={FlowerClip.src}
                width={300}
                height={400}
                className="clippedHexagon"
              />
            </Box>
            <Box
              mt={5}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="#B07778" fontSize={48} fontFamily="Ms Madi">
                {store.theProject.customer_data.bride.name
                  ? store.theProject.customer_data.bride.name
                  : "Juliet"}
              </Typography>
              <Typography
                sx={{
                  fontSize: `${
                    store.theProject.bride_and_groom.teks.ukuran * 1.2
                  }px`,
                  color: store.theProject.bride_and_groom.teks.warna_font
                    ? `${store.theProject.bride_and_groom.teks.warna_font}`
                    : "#FFF",
                  textAlign: "center",
                  fontStyle: "italic",
                  fontFamily: "Montserrat",
                }}
              >
                Anak dari Pasangan
              </Typography>
              <Typography
                sx={{
                  fontSize: `${
                    store.theProject.bride_and_groom.teks.ukuran * 1
                  }px`,
                  color: store.theProject.bride_and_groom.teks.warna_font
                    ? `${store.theProject.bride_and_groom.teks.warna_font}`
                    : "#FFF",
                  textAlign: "center",
                  fontStyle: "bold",
                  fontFamily: "Montserrat",
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
      </Box>
    );
  };

  const timeAndPlace = () => {
    return (
      <Box
        sx={{
          width: "100%",
          // height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(white 90%,#E1F2FF 100%)",
          background: store.theProject.time_and_place.background.gambar
            ? `url(${store.theProject.time_and_place.background.gambar})`
            : store.theProject.time_and_place.background.warna_bg
            ? `linear-gradient(white 90%, ${store.theProject.time_and_place.background.warna_bg} 100%)`
            : "linear-gradient(white 90%,#E1F2FF 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        mt={10}
        px={15}
        pb={15}
      >
        <Image src={curve.src} width={100} height={50} />
        <Typography
          sx={{
            fontSize: `${store.theProject.time_and_place.teks.ukuran * 3}px`,
            // color: `${store.theProject.time_and_place.teks.warna_font}`,
            color: "#B07778",
            textAlign: "center",
            fontFamily: "Ms Madi",
          }}
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
              : "#2b2b2b",
            // color: "#E8D3C3",
            textAlign: "center",
            fontStyle: "italic",
            fontFamily: "Montserrat",
          }}
        >
          {store.theProject.time_and_place.konten.desc
            ? store.theProject.time_and_place.konten.desc
            : "lorem ipsum"}
        </Typography>

        <Box
          width="100%"
          // height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={15}
          position="relative"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="2px solid #B07778"
            p={10}
            width="50vw"
          >
            <Typography
              zIndex="200"
              fontSize="24px"
              fontWeight="500"
              color="#B07778"
              fontFamily="MontSerrat"
            >
              {store.theProject.nama_acara
                ? store.theProject.nama_acara
                : "Resepsi"}
            </Typography>
            <br />
            <Typography
              fontFamily="MontSerrat"
              sx={{
                color: store.theProject.time_and_place.teks.warna_font
                  ? `${store.theProject.time_and_place.teks.warna_font}`
                  : "#2b2b2b",
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
              fontFamily="MontSerrat"
              sx={{
                color: store.theProject.time_and_place.teks.warna_font
                  ? `${store.theProject.time_and_place.teks.warna_font}`
                  : "#2b2b2b",
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
              textAlign="center"
              px={10}
              fontFamily="MontSerrat"
              sx={{
                color: store.theProject.time_and_place.teks.warna_font
                  ? `${store.theProject.time_and_place.teks.warna_font}`
                  : "#2b2b2b",
              }}
            >
              {store.theProject.lokasi
                ? store.theProject.lokasi
                : "Surfboards, Jalan Pantai Batu Bolong, Canggu 08456, Bali, Indonesia"}
            </Typography>
            <br />
            <Button
              variant="contained"
              fontFamily="MontSerrat"
              sx={{ backgroundColor: "#B07778", color: "white" }}
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
          <Box
            display="flex"
            flexDirection="column"
            position="absolute"
            alignItems="center"
            border="2px solid #B07778"
            p={10}
            width="50vw"
            height="100%"
            marginLeft="auto"
            marginRight="auto"
            left={0}
            right={0}
            textAlign="center"
            sx={{
              transform: {
                md: "skew(-10deg, 5deg)",
                sm: "skew(-5deg, 1deg)",
                xs: "skew(0deg, 0deg)",
              },
              opacity: {
                md: 1,
                sm: 1,
                xs: 0,
              },
            }}
          >
            <Typography sx={{ opacity: 0 }}>Resepsi</Typography>
            <br />
            <Typography sx={{ opacity: 0 }}>Kamis, 1 Januari 2022</Typography>
            <Typography sx={{ opacity: 0 }}>08:00 - 21:00 WITA</Typography>
            <br />
            <Typography sx={{ opacity: 0 }}>
              Dsn. Wanasari Tengah Desa Wanasari Tabanan
            </Typography>
            <br />
            <Button sx={{ opacity: 0 }} variant="contained">
              Buka Peta
            </Button>
          </Box>
          <Box sx={{ position: "absolute", top: "-20%", zIndex: "100" }}>
            {/* <Image src={FlowerTP.src} width="100%" height="100%" /> */}
            <img style={{ width: "160px" }} src={FlowerTP.src} />
          </Box>
        </Box>
      </Box>
    );
  };

  const countdown = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: store.theProject.countdown.background.gambar
            ? `url(${store.theProject.countdown.background.gambar})`
            : store.theProject.countdown.background.warna_bg
            ? `${store.theProject.countdown.background.warna_bg}`
            : "#E1F2FF",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        py={10}
        px={15}
      >
        <Image src={curve.src} width={100} height={50} />
        <Typography
          sx={{
            color: store.theProject.countdown.teks.warna_font
              ? `${store.theProject.countdown.teks.warna_font}`
              : "#B07778",
            fontSize: `${store.theProject.countdown.teks.ukuran * 3}px`,
            fontFamily: "Ms Madi",
          }}
        >
          {store.theProject.countdown.konten.judul
            ? store.theProject.countdown.konten.judul
            : "Hari Bahagia"}
        </Typography>
        <Box display="flex" justifyContent="center" width="100%" mt={5}>
          <Box
            display="flex"
            justifyContent="space-around"
            width="100%"
            flexWrap="wrap"
          >
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
                Seconds
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  const gallery = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: store.theProject.gallery.background.gambar
            ? `url(${store.theProject.gallery.background.gambar})`
            : store.theProject.gallery.background.warna_bg
            ? `${store.theProject.gallery.background.warna_bg}`
            : "#E1F2FF",
        }}
        // my={10}
        px={10}
        py={15}
      >
        <Image src={curve.src} width={100} height={50} />
        <Typography
          sx={{
            fontSize: `${store.theProject.gallery.teks.ukuran * 3}px`,
            // color: `${store.theProject.gallery.teks.warna_font}`,
            color: "#B07778",
            fontFamily: "Ms Madi",
            textAlign: "center",
          }}
        >
          {store.theProject.gallery.konten.judul
            ? store.theProject.gallery.konten.judul
            : "Momen Bahagia"}
        </Typography>
        <Typography
          sx={{
            fontSize: `${store.theProject.gallery.teks.ukuran * 1}px`,
            color: store.theProject.gallery.teks.warna_font
              ? `${store.theProject.gallery.teks.warna_font}`
              : "#000",
            // color: "#E8D3C3",
            textAlign: "center",
            fontStyle: "italic",
            fontFamily: "Montserrat",
          }}
        >
          {store.theProject.gallery.konten.desc
            ? store.theProject.gallery.konten.desc
            : "lorem ipsum"}
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          width="100%"
          justifyContent="center"
        >
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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: store.theProject.comments.background.gambar
            ? `url(${store.theProject.comments.background.gambar})`
            : store.theProject.comments.background.warna_bg
            ? `${store.theProject.comments.background.warna_bg}`
            : "#E1F2FF",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        // my={10}
        p={10}
      >
        <Image src={curve.src} width={100} height={50} />
        <Typography
          sx={{
            fontSize: `${store.theProject.comments.teks.ukuran * 3}px`,
            // color: `${store.theProject.comments.teks.warna_font}`,
            textAlign: "center",
            color: "#B07778",
            fontFamily: "Ms Madi",
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
              : "#000",
            // color: "#E8D3C3",
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "18px",
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
                : "#B07778",
            }}
          >
            Nama
          </Typography>
          <Input
            type="text"
            disableUnderline
            sx={{
              width: "100%",
              background: "rgba(255,255,255,1)",
              padding: "10px",
              borderRadius: "10px",
            }}
            onChange={(e) => {
              setNama(e.target.value);
            }}
            value={nama}
          />
          <br />
          <FormControl sx={{ mb: "1rem", width: "100%" }}>
            <Typography
              id="modal-modal-title"
              variant="subtitle1"
              sx={{
                color: store.theProject.comments.teks.warna_font
                  ? `${store.theProject.comments.teks.warna_font}`
                  : "#B07778",
              }}
            >
              Kedatangan
            </Typography>
            <NativeSelect
              defaultValue={datang}
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
              onChange={(e) => {
                setDatang(e.target.value === "false" ? false : true)
                console.log(e.target.value, "@985");
              }}
            >
              <option value={true}> Ya, Saya akan datang</option>
              <option value={false}> Maaf, Saya tidak bisa datang</option>
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
            width="100%"
            display="flex"
            justifyContent="flex-start"
            sx={{
              color: store.theProject.comments.teks.warna_font
                ? `${store.theProject.comments.teks.warna_font}`
                : "#B07778",
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
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          />
          <Button
            sx={{
              backgroundColor: "#B07778",
              color: "white",
              display: "flex",
              justifyContent: "space-around",
              width: "110px",
              mt: "1rem",
              "&:hover": {
                backgroundColor: "#e65602",
              },
            }}
            onClick={() => send(store.theProject.comments.id)}
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
            position="relative"
          >
            <Box
              border="5px solid #B07778"
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
                            sx={{ backgroundColor: "#B07778" }}
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
                                color="#B07778"
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
                                  color: "#B07778",
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
                                  ? moment(ele.attributes.createdAt).local().format(
                                      "DD MMMM YYYY HH:mm"
                                    )
                                  : "08 Maret 2022 17:03"}
                              </Typography>
                              <Typography
                                color="white"
                                backgroundColor="#B07778"
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
            <img
              style={{ position: "absolute", left: "-10%", top: "90%" }}
              src={FlowerTP.src}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  const footer = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: store.theProject.footer.background.gambar
            ? `url(${store.theProject.footer.background.gambar})`
            : store.theProject.footer.background.warna_bg
            ? `${store.theProject.footer.background.warna_bg}`
            : "#E1F2FF",
        }}
        p={10}
      >
        <Image src={curve.src} width={100} height={50} />
        <Typography
          sx={{
            fontSize: `${store.theProject.footer.teks.ukuran * 3}px`,
            // color: `${store.theProject.footer.teks.warna_font}`,
            textAlign: "center",
            color: "#B07778",
            fontFamily: "Ms Madi",
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
              : "#000",
            textAlign: "center",
            fontStyle: "italic",
            fontFamily: "Montserrat",
          }}
        >
          {store.theProject.footer.konten.desc
            ? store.theProject.footer.konten.desc
            : "lorem ipsum"}
        </Typography>
      </Box>
    );
  };

  function playSound(url) {
    // const audio = new Audio(url);
    audioRef.current.play();
    audioRef.current.loop = true;
  }

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
      <Box p={0}>
        <Box
          sx={{
            display: "none",
          }}
        >
          <audio ref={audioRef} src={store.theProject.audio} autoPlay loop>
            <embed
              name="GoodEnough"
              src={store.theProject.audio}
              loop="true"
              hidden="true"
              autostart="true"
            />
          </audio>
        </Box>
        {modal(
          open,
          handleClose,
          Backdrop,
          style,
          setOpen,
          playSound,
          Modal,
          Fade,
          Box,
          Typography,
          Button,
          "Ms Madi"
        )}
        {store.theProject.order.map((ele, idx) => {
          return mapping[ele.content];
        })}
        {openSnack ? successAlert(openSnack, Alert, msg) : <></>}

        {/* Hero */}

        {/* Regard */}

        {/* Bride & Groom */}

        {/* Time & Place */}

        {/* Countdown */}

        {/* Gallery */}

        {/* GuestBook */}

        {/* Footer */}
      </Box>
    </>
  );
};

export default Template2;
