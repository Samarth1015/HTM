import Section from "./card";
import { Link } from "react-router-dom";
export default function Hero_section() {
  return (
    <div className="md:flex  flex-wrap justify-around">
      <div>
        <Link to="/neet">
          {" "}
          <Section
            imageurl="https://mycareersview.com/afile/mcv14596_neet-logo.jpg"
            subject_name="NEET"
            logo="/public/Dr logo.webp"
          ></Section>
        </Link>
      </div>
      <div>
        <Link to="/jee">
          <Section
            imageurl="https://images.shiksha.com/mediadata/images/articles/1654055166php38xDbh.jpeg"
            subject_name="JEE"
            logo="/public/Eng.webp"
          ></Section>
        </Link>
      </div>
    </div>
  );
}
