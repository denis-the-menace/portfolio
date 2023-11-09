import RouteLayout from "@/components/route-layout";
import languageContent from "@/public/languageContent";

export default function About() {
  return (
  <>
      <div className="main-panel__left"></div>
      <div className="main-panel__right">
        <div className="about__title">
          <h1 className="about__h1">{languageContent.about[0]}</h1>
          <div className="about__title__name-box">
            <ul className="about__title__name-box__ul">
              <li className="about__title__name-box__ul__li">Denis</li>
              <li className="about__title__name-box__ul__li">Nazım</li>
              <li className="about__title__name-box__ul__li">Hikmet</li>
              <li className="about__title__name-box__ul__li">Denis</li>
            </ul>
          </div>
        </div>
        <h2 className="about__h2">{languageContent.about[1]}</h2>
        <p className="about__details">{languageContent.about[2]}</p>
      </div>
      </>
  );
}
