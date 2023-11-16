import PageLayout from "@/components/page-layout";
import languageContent from "@/public/languageContent";

export default function About() {
  return (
    <PageLayout>
      <div className=""></div>
      <div className="flex-col justify-center">
        <div className="inline-flex items-center whitespace-nowrap text-5xl">
          <h1 className="">{languageContent.about[0]}</h1>
        </div>
        <h2 className="">{languageContent.about[1]}</h2>
        <p className="">{languageContent.about[2]}</p>
      </div>
    </PageLayout>
  );
}
          // <div className="about__title__name-box">
          //   <ul className="about__title__name-box__ul">
          //     <li className="about__title__name-box__ul__li">Denis</li>
          //     <li className="about__title__name-box__ul__li">Nazım</li>
          //     <li className="about__title__name-box__ul__li">Hikmet</li>
          //     <li className="about__title__name-box__ul__li">Denis</li>
          //   </ul>
          // </div>
