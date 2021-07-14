import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './Experiments.scss';

const Experiments = () => {
  const { experimentThumbs } = useStaticQuery(graphql`
    query {
      experimentThumbs: allFile(
        filter: { relativePath: { regex: "/^experiment/" } }
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

  const thumbsForExperiments = experimentThumbs.nodes;
  console.log(thumbsForExperiments);

  return (
    <section className="experiment-bar">
      <h1 className="experiment-bar__heading">Always Tinkering Forwards</h1>
      <div className="experiment-bar__bar-container">
        <div className="bar-inner">
          {thumbsForExperiments.map(thumb => {
            const imgObj = getImage(thumb.childImageSharp);
            return (
              <Link
                className="experiment-thumbnail"
                to="https://github.com/chakra-digital"
              >
                <GatsbyImage image={imgObj} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiments;

// const ProjectThumbnail = ({ imgObj, name, category, slug, alt }) => {
//   const image = getImage(imgObj);

//   return (
//     <Link className="project-thumbnail" to={slug}>
//       <GatsbyImage image={image} alt={alt} />
//       <h3>{name}</h3>
//       <h5>{category}</h5>
//     </Link>
//   );
// };
