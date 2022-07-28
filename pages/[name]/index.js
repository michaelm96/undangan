import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Template1 from "../../components/template1";
import Template2 from "../../components/template2";
import Template3 from "../../components/template3";
import { GET } from "../../utils/network/baseRequest.utils";
import api from "../../utils/network/baseUrl.utils";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const index = () => {
  const router = useRouter();
  const name = router.query.name;
  const [store, setStore] = useState({});
  const [tema, setTema] = useState(-1);

  useEffect(() => {
    if (router.isReady) init();
  }, [router.isReady]);

  useEffect(() => {
    console.log(store);
  }, [store]);

  const init = async () => {
    try {
      const theProject = await GET(
        api.BASE_URL +
          api.ENDPOINT.project +
          `?filters[title][$eq]=${name}&` +
          api.ENDPOINT.populate +
          "acaras&" +
          api.ENDPOINT.populate +
          "acaras.audio&" +
          api.ENDPOINT.populate +
          "acaras.hero.background&" +
          api.ENDPOINT.populate +
          "acaras.regard.background&" +
          api.ENDPOINT.populate +
          "acaras.bride_and_groom.background&" +
          api.ENDPOINT.populate +
          "acaras.bride_and_groom.bride_id&" +
          api.ENDPOINT.populate +
          "acaras.bride_and_groom.bride_id.image&" +
          api.ENDPOINT.populate +
          "acaras.bride_and_groom.groom_id&" +
          api.ENDPOINT.populate +
          "acaras.bride_and_groom.groom_id.image&" +
          api.ENDPOINT.populate +
          "acaras.time_and_place.background&" +
          api.ENDPOINT.populate +
          "acaras.countdown.background&" +
          api.ENDPOINT.populate +
          "acaras.project&" +
          api.ENDPOINT.populate +
          "acaras.gallery.background&" +
          api.ENDPOINT.populate +
          "acaras.gallery.images&" +
          api.ENDPOINT.populate +
          "acaras.comment.background&" +
          api.ENDPOINT.populate +
          "acaras.comment.chats&" +
          api.ENDPOINT.populate +
          "acaras.footer.background"
      );
      console.log(theProject.data.data[0].attributes.acaras.data[0], "@17");
      if (theProject.status !== 200 || !theProject.data.data.length) {
        router.push("/404");
      }

      // const urlAcara =
      //   api.ENDPOINT.acara +
      //   `/${theProject.data.data[0].id}?` +
      //   api.ENDPOINT.populate +
      //   "audio&" +
      //   api.ENDPOINT.populate +
      //   "hero.background&" +
      //   api.ENDPOINT.populate +
      //   "regard.background&" +
      //   api.ENDPOINT.populate +
      //   "bride_and_groom.background&" +
      //   api.ENDPOINT.populate +
      //   "bride_and_groom.bride_id&" +
      //   api.ENDPOINT.populate +
      //   "bride_and_groom.bride_id.image&" +
      //   api.ENDPOINT.populate +
      //   "bride_and_groom.groom_id&" +
      //   api.ENDPOINT.populate +
      //   "bride_and_groom.groom_id.image&" +
      //   api.ENDPOINT.populate +
      //   "time_and_place.background&" +
      //   api.ENDPOINT.populate +
      //   "countdown.background&" +
      //   api.ENDPOINT.populate +
      //   "project&" +
      //   api.ENDPOINT.populate +
      //   "gallery.background&" +
      //   api.ENDPOINT.populate +
      //   "gallery.images&" +
      //   api.ENDPOINT.populate +
      //   "comment.background&" +
      //   api.ENDPOINT.populate +
      //   "comment.chats&" +
      //   api.ENDPOINT.populate +
      //   "footer.background";
      // const theAcara = await GET(api.BASE_URL + urlAcara);
      // console.log(theAcara, "@30");
      // if (theAcara.status !== 200) {
      //   return;
      // }

      const dataAcara =
        theProject.data.data[0].attributes.acaras.data[0].attributes;
      let finalData = {};

      if (dataAcara.hero.data === null) {
        finalData["hero"] = {
          id: -1,
          konten: {
            judul: "",
            desc_atas: "",
            desc_bawah: "",
          },
          background: {
            gambar: null,
            warna_bg: "",
          },
          teks: {
            ukuran: 18,
            warna_font: "",
          },
        };
      } else {
        const dataHero = dataAcara.hero.data.attributes;
        finalData["hero"] = {
          id: dataAcara.hero.data.id,
          konten: {
            judul: dataHero.title,
            desc_atas: dataHero.caption_top,
            desc_bawah: dataHero.caption_bottom,
          },
          background: {
            gambar: dataHero.background.data
              ? api.BASE_URL + dataHero.background.data.attributes.url
              : null,
            warna_bg: dataHero.warna_bg,
          },
          teks: {
            ukuran: dataHero.ukuran ? dataHero.ukuran : 18,
            warna_font: dataHero.warna_font,
          },
        };
      }

      if (dataAcara.regard.data === null) {
        finalData["regards"] = {
          id: -1,
          konten: {
            judul: "",
            desc: "",
          },
          background: {
            gambar: null,
            warna_bg: "",
          },
          teks: {
            ukuran: 24,
            warna_font: "",
          },
        };
      } else {
        const dataRegard = dataAcara.regard.data.attributes;
        finalData["regards"] = {
          id: dataAcara.regard.data.id,
          konten: {
            judul: dataRegard.title,
            desc: dataRegard.text,
          },
          background: {
            gambar: dataRegard.background.data
              ? api.BASE_URL + dataRegard.background.data.attributes.url
              : null,
            warna_bg: dataRegard.warna_bg,
          },
          teks: {
            ukuran: dataRegard.ukuran ? dataRegard.ukuran : 24,
            warna_font: dataRegard.warna_font,
          },
        };
      }

      finalData.customer_data = {};

      if (dataAcara.bride_and_groom.data === null) {
        finalData["bride_and_groom"] = {
          id: -1,
          konten: {
            judul: "",
            desc: "",
          },
          background: {
            gambar: null,
            warna_bg: "",
          },
          teks: {
            ukuran: 24,
            warna_font: "",
          },
        };
        finalData.customer_data = {
          bride: {
            name: "Juliet",
            dad: "Juliet Sr.",
            mom: "Ms. Juliet",
            address: "Walking street",
            pic: null,
          },
          groom: {
            name: "Romeo",
            dad: "Romeo Sr.",
            mom: "Ms. Romeo",
            address: "Jalan Jalan",
            pic: null,
          },
        };
      } else {
        const dataBaG = dataAcara.bride_and_groom.data.attributes;
        finalData["bride_and_groom"] = {
          id: dataAcara.bride_and_groom.data.id,
          konten: {
            judul: dataBaG.title,
            desc: dataBaG.text,
          },
          background: {
            gambar: dataBaG.background.data
              ? api.BASE_URL + dataBaG.background.data.attributes.url
              : null,
            warna_bg: dataBaG.warna_bg,
          },
          teks: {
            ukuran: dataBaG.ukuran ? dataBaG.ukuran : 24,
            warna_font: dataBaG.warna_font,
          },
        };

        if (dataBaG.bride_id.data === null) {
          finalData["customer_data"]["bride"] = {
            name: "Juliet",
            dad: "Juliet Sr.",
            mom: "Ms. Juliet",
            address: "Walking street",
            pic: null,
          };
        } else {
          const dataBride = dataBaG.bride_id.data.attributes;
          console.log(dataBride);
          finalData["customer_data"]["bride"] = {
            name: dataBride.name,
            dad: dataBride.father,
            mom: dataBride.mother,
            address: dataBride.address,
            pic:
              dataBride.image.data !== null
                ? dataBride.image.data.attributes.url
                : null,
          };
        }

        if (dataBaG.groom_id.data === null) {
          finalData["customer_data"]["groom"] = {
            name: "Romeo",
            dad: "Romeo Sr.",
            mom: "Ms. Romeo",
            address: "Jalan Jalan",
            pic: null,
          };
        } else {
          const dataGroom = dataBaG.groom_id.data.attributes;
          finalData["customer_data"]["groom"] = {
            name: dataGroom.name,
            dad: dataGroom.father,
            mom: dataGroom.mother,
            address: dataGroom.address,
            pic:
              dataGroom.image.data !== null
                ? dataGroom.image.data.attributes.url
                : null,
          };
        }
      }

      if (dataAcara.time_and_place.data === null) {
        finalData["time_and_place"] = {
          id: -1,
          konten: {
            judul: "",
            desc: "",
          },
          background: {
            gambar: null,
            warna_bg: "",
          },
          teks: {
            ukuran: 24,
            warna_font: "",
          },
        };
      } else {
        const dataTaP = dataAcara.time_and_place.data.attributes;
        finalData["time_and_place"] = {
          id: dataAcara.time_and_place.data.id,
          konten: {
            judul: dataTaP.title,
            desc: dataTaP.text,
          },
          background: {
            gambar: dataTaP.background.data
              ? api.BASE_URL + dataTaP.background.data.attributes.url
              : null,
            warna_bg: dataTaP.warna_bg,
          },
          teks: {
            ukuran: dataTaP.ukuran ? dataTaP.ukuran : 24,
            warna_font: dataTaP.warna_font,
          },
        };
      }

      if (dataAcara.countdown.data === null) {
        finalData["countdown"] = {
          id: -1,
          konten: {
            judul: "",
          },
          background: {
            gambar: null,
            warna_bg: "",
          },
          teks: {
            ukuran: 24,
            warna_font: "",
          },
        };
      } else {
        const dataCountdown = dataAcara.countdown.data.attributes;
        finalData["countdown"] = {
          id: dataAcara.countdown.data.id,
          konten: {
            judul: dataCountdown.title,
          },
          background: {
            gambar: dataCountdown.background.data
              ? api.BASE_URL + dataCountdown.background.data.attributes.url
              : null,
            warna_bg: dataCountdown.warna_bg,
          },
          teks: {
            ukuran: dataCountdown.ukuran ? dataCountdown.ukuran : 24,
            warna_font: dataCountdown.warna_font,
          },
        };
      }

      if (dataAcara.gallery.data === null) {
        finalData["gallery"] = {
          id: -1,
          konten: {
            judul: "",
            desc: "",
            gambar: [],
          },
          background: {
            gambar: null,
            warna_bg: "",
          },
          teks: {
            ukuran: 24,
            warna_font: "",
          },
        };
      } else {
        const dataGallery = dataAcara.gallery.data.attributes;
        finalData["gallery"] = {
          id: dataAcara.gallery.data.id,
          konten: {
            judul: dataGallery.title,
            desc: dataGallery.text,
            gambar: dataGallery.images.data ? dataGallery.images.data : [],
          },
          background: {
            gambar: dataGallery.background.data
              ? api.BASE_URL + dataGallery.background.data.attributes.url
              : null,
            warna_bg: dataGallery.warna_bg,
          },
          teks: {
            ukuran: dataGallery.ukuran ? dataGallery.ukuran : 24,
            warna_font: dataGallery.warna_font,
          },
        };
      }

      if (dataAcara.comment.data === null) {
        finalData["comments"] = {
          id: -1,
          konten: {
            judul: "",
            desc: "",
          },
          background: {
            gambar: null,
            warna_bg: "",
          },
          teks: {
            ukuran: 24,
            warna_font: "",
          },
          chats: [],
        };
      } else {
        const dataComment = dataAcara.comment.data.attributes;
        finalData["comments"] = {
          id: dataAcara.comment.data.id,
          konten: {
            judul: dataComment.title,
            desc: dataComment.desc,
          },
          background: {
            gambar: dataComment.background.data
              ? api.BASE_URL + dataComment.background.data.attributes.url
              : null,
            warna_bg: dataComment.warna_bg,
          },
          teks: {
            ukuran: dataComment.ukuran ? dataComment.ukuran : 24,
            warna_font: dataComment.warna_font,
          },
          chats: dataComment.chats.data ? dataComment.chats.data : [],
        };
      }

      if (dataAcara.footer.data === null) {
        finalData["footer"] = {
          id: -1,
          konten: {
            judul: "",
            desc: "",
          },
          background: {
            gambar: null,
            warna_bg: "",
          },
          teks: {
            ukuran: 24,
            warna_font: "",
          },
        };
      } else {
        const dataFooter = dataAcara.footer.data.attributes;
        finalData["footer"] = {
          id: dataAcara.footer.data.id,
          konten: {
            judul: dataFooter.title,
            desc: dataFooter.text,
          },
          background: {
            gambar: dataFooter.background.data
              ? api.BASE_URL + dataFooter.background.data.attributes.url
              : null,
            warna_bg: dataFooter.warna_bg,
          },
          teks: {
            ukuran: dataFooter.ukuran ? dataFooter.ukuran : 24,
            warna_font: dataFooter.warna_font,
          },
        };
      }

      finalData["lokasi"] = dataAcara.lokasi;
      finalData["tanggal"] = dataAcara.tanggal;
      finalData["lat"] = dataAcara.lat;
      finalData["lng"] = dataAcara.lng;
      finalData["nama_acara"] = dataAcara.nama_acara;
      finalData["jam_mulai"] = dataAcara.waktu_mulai;
      finalData["jam_selesai"] = dataAcara.waktu_selesai;
      finalData["timezone"] = dataAcara.timezone;
      finalData["tema"] = dataAcara.tema ? dataAcara.tema : 1;
      setTema(dataAcara.tema);
      finalData["order"] = dataAcara.order
        ? dataAcara.order
        : [
            { id: "id-Hero", content: "Hero" },
            { id: "id-Regards", content: "Regards" },
            { id: "id-Bride and Groom", content: "Bride and Groom" },
            { id: "id-Time and Place", content: "Time and Place" },
            { id: "id-Countdown", content: "Countdown" },
            { id: "id-Gallery", content: "Gallery" },
            {
              id: "id-Guest Book / Comments",
              content: "Guest Book / Comments",
            },
            { id: "id-Footer", content: "Footer" },
          ];

      console.log(typeof dataAcara.order, dataAcara.order, "@443");

      finalData["audio"] = dataAcara.audio.data
        ? api.BASE_URL + dataAcara.audio.data.attributes.url
        : null;
      finalData["acara_id"] =
        theProject.data.data[0].attributes.acaras.data[0].id;
      finalData["project_id"] = dataAcara.project.data.id;
      console.log(finalData, "@491");
      setStore({ theProject: finalData });
    } catch (error) {
      console.log(error, "@493");
    }
  };

  return (
    <>
      {store.theProject && tema === 1 ? <Template1 store={store} /> : <></>}
      {store.theProject && tema === 2 ? <Template2 store={store} /> : <></>}
      {store.theProject && tema === 3 ? <Template3 store={store} /> : <></>}
      {/* {store ? <Template1 store={store} /> : <></>} */}
    </>
  );
};

export default index;
