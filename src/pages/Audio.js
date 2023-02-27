import Typography from "@mui/material/Typography";

const Audio = () => {
  return (
    <>
      <Typography paragraph>
        Al-Kahf is the 18th chapter of the Quran with 110 verses. Regarding the
        timing and contextual background of the revelation, it is an earlier
        "Meccan surah", which means it was revealed in Mecca, instead of Medina.
      </Typography>

      <iframe
        title="This is a unique title"
        width="100%"
        height={166}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/98803111&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
      <div
        style={{
          fontSize: 10,
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/djoudi-1"
          title="Faouzi DJOUDI"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
          rel="noreferrer"
        >
          Faouzi DJOUDI
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/djoudi-1/rfdrrn1nmjzx"
          title="سورة الكهف كاملة عبد الرحمن السديس"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
          rel="noreferrer"
        >
          سورة الكهف كاملة عبد الرحمن السديس
        </a>
      </div>
    </>
  );
};

export default Audio;
