import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// Styles
import './LogoMarquee.scss';

const LogoMarquee = () => {
  const { clientLogos } = useStaticQuery(graphql`
    query {
      clientLogos: allFile(
        filter: { relativePath: { regex: "/^client-logo/" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const logosForMarquee = clientLogos.nodes.concat(clientLogos.nodes);
  console.log(logosForMarquee);

  return (
    <section className="logo-marquee">
      <h1 className="logo-marquee__heading">Some Really Wonderful Clients</h1>
      <div className="logo-marquee__marquee-container">
        <div className="inner">
          {logosForMarquee.map(logo => {
            const imgObj = getImage(logo.childImageSharp);
            const alt =
              logo.name
                .split('client-logo--')[1] // remove the 'client-logo--' part of the name
                .split('_') // Get rid of _ charactersin string
                .map(string => string[0].toUpperCase() + string.slice(1)) // Capitalize first letter of each word in string
                .join(' ') + ' Logo'; // Join word array with spaces
            return (
              <div className="logo-marquee__image-wrapper">
                <GatsbyImage image={imgObj} alt={alt} objectFit="contain" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
