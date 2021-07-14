import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import HomepageHero from '../components/HomepageHero/HomepageHero';
import ProjectThumbnail from '../components/Projects/ProjectThumbnail';
import Experiments from '../components/Experiments/Experiments';
import LogoMarquee from '../components/LogoMarquee/LogoMarquee';

import projects from '../projects.json';

import Seo from '../components/seo';

import './index.scss';
import '../components/Projects/ProjectThumbnail.scss';

const IndexPage = ({ data }) => {
  const projectThumbnails = data.projThumbs.nodes;

  return (
    <Layout>
      <Seo title="Home" />
      <HomepageHero />
      <section className="project-thumbnails">
        {projects.map(({ name, slug, category, posterPath }) => {
          const projThumb = projectThumbnails.find(
            thumb => thumb.name === posterPath
          ).childImageSharp;

          return (
            <ProjectThumbnail
              name={name}
              category={category}
              slug={slug}
              imgObj={projThumb}
              alt={name}
            />
          );
        })}
      </section>
      <Experiments />
      <LogoMarquee />
    </Layout>
  );
};

export const query = graphql`
  query MyQueryThumbs {
    projThumbs: allFile(filter: { relativePath: { regex: "/^project-/" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;

export default IndexPage;

// Presentational vs layout components 💡
