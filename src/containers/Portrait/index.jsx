import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BodyPortrait,
  ButtonsPortrait,
  ContentPortrait,
  HeaderPortrait,
  PicturePortrait,
} from "./twinStyle";
import {
  CalypsoLinkButton,
  GreenLinkButton,
} from "../../components/LinkButton";
import TitleWritting from "../../components/TitleWritting";

const subTitle = `¡Bienvenido a nuestro Generador de Citas Inspiradoras! Descubre
una fuente interminable de sabiduría y motivación con solo un
clic. Encuentra la cita perfecta para cada ocasión y compártela
con el mundo. ¡Explora, inspira y transforma tu día con nuestras
palabras significativas!.`;

const Portrait = () => {
  return (
    <BodyPortrait>
      <ContentPortrait>
        <article>
          <HeaderPortrait>
            <h1>
              <b>Fraseando citas Inspiradoras</b> encuentra la motivación
            </h1>
            <div>
              <TitleWritting text={subTitle} delay={10} />
            </div>
          </HeaderPortrait>
          <ButtonsPortrait>
            <section>
              <GreenLinkButton>
                <Link to="#randomQuoteSection">Citas aleatorias</Link>
              </GreenLinkButton>
              <CalypsoLinkButton>
                <NavLink to="/generador">Generar citas</NavLink>
              </CalypsoLinkButton>
            </section>
          </ButtonsPortrait>
        </article>
      </ContentPortrait>
      <PicturePortrait>
        <img alt="Portrait image" src="/img/portrait.jpg" />
      </PicturePortrait>
    </BodyPortrait>
  );
};

export default Portrait;
