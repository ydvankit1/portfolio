import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { FaBlackTie } from "react-icons/fa";
import "./styles.scss";
import ImageOne from "../../images/pexels-cottonbro-5483077.jpg";
import ImageTwo from "../../images/pexels-jorge-jesus-614117.jpg";
import ImageThree from "../../images/pexels-kevin-ku-577585.jpg";
import ImageFour from "../../images/pexels-karolina-grabowska-4195324.jpg";
import ImageFive from "../../images/pexels-picjumbocom-196644.jpg";
import ImageSix from "../../images/pexels-miguel-á-padriñán-68562.jpg";
import ImageSeven from "../../images/pexels-pixabay-39284.jpg";
import ImageEight from "../../images/pexels-pixabay-261705.jpg";
import ImageNine from "../../images/pexels-tirachard-kumtanom-733857.jpg";
import ImageTen from "../../images/pexels-pixabay-276514.jpg";

const portfolioData = [
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageThree,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageFour,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageFive,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageSeven,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageSix,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageEight,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageNine,
  },
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageTen,
  },
];

const filteroptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "Design",
    id: 2,
  },
  {
    label: "Development",
    id: 3,
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaBlackTie color="white" size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filteroptions.map((option) => (
            <li key={option.id}>{option.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData.map((item) => (
            <div className="portfolio__content__cards__item" >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
