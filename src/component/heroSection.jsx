import Section from "./card";
export default function Hero_section() {
  return (
    <div className="md:flex  justify-around ">
      <Section
        imageurl="https://mycareersview.com/afile/mcv14596_neet-logo.jpg"
        subject_name="NEET"
        logo="/public/Dr logo.webp"
      ></Section>
      <Section
        imageurl="https://images.shiksha.com/mediadata/images/articles/1654055166php38xDbh.jpeg"
        subject_name="JEE"
        logo="/public/Eng.webp"
      ></Section>
    </div>
  );
}
