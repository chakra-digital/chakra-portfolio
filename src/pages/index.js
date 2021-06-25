import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import HomepageHero from '../components/HomepageHero/HomepageHero';
import ProjectThumbnail from '../components/Projects/ProjectThumbnail';
import LogoMarquee from '../components/LogoMarquee/LogoMarquee';

import Seo from '../components/seo';

import './index.scss';
import '../components/Projects/ProjectThumbnail.scss';

const IndexPage = () => {
  const { projThumbs } = useStaticQuery(graphql`
    query MyQueryThumbs {
      projThumbs: allFile(filter: { relativePath: { regex: "/^project-/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  /**
   * So, because Gatsby won't let us pass file paths into StaticImage as a
   * prop of our <ProjectThumbnail /> component, we will do what we did with
   * icons and query them all (as you had already done) and pass the childImageSharp
   * object into GatsbyImage as you were previously doing.  However, now i've added
   * a request for "relativePath" to our query which we can use to extract
   * data like the name, slug, and category for each prjoect.  If you take a
   * look at the file names for these project thumbnails now, you'll see I changed
   * them so that they are formatted like so:
   *
   * <common prefix>--<number>--<name>--<category>
   *
   * Common Prefix we use so that we can use it in our query filter
   *
   * Number lets us control the ordering for how they will show up, since graphql will
   * return us the items we're querying for in order of filename
   *
   * Name is just that.  It's the name of the project dash separated. We'll use this
   * as our slug in it's raw form, but then transform it into a readable format with a
   * custom util function we've written called "wordify" (see the component itself)
   *
   * Category is the category
   *
   * While this is absolutely NOT how you'd ship a project to a client, it's a creative
   * way to get around a technical limitation which Gatsby has imposed on us.  Ideally, if
   * we could pass paths in as props, then i would have preferred to just do this:
   *
   * <ProjectThumbnail
   *    path="../../assets/project-thumb--palm-tree.jpg"
   *    name="Palm Tree"
   *    slug="palm-tree"
   *    category="Marketing Content"
   *    alt="A project for Palm Tree, inc." />
   *
   * This would have beeen much more declarative and would have let us compose our
   * project with more control over the properties versus having to embed all of that
   * data inside our filenames..but alas.  Hope this helps!  And also - if we were using
   * a CMS like Sanity, we'd be able to avoid this entire method.
   */

  return (
    <Layout>
      <Seo title="Home" />
      <HomepageHero />
      <section className="project-thumbnails">
        {projThumbs.nodes.map(({ childImageSharp, relativePath }) => {
          return (
            <ProjectThumbnail
              imgObj={childImageSharp}
              relativePath={relativePath}
            />
          );
        })}
      </section>

      <LogoMarquee />
    </Layout>
  );
};

export default IndexPage;

// Presentational vs layout components 💡
