import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
          avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          image {
              childImageSharp {
              fluid(maxWidth: 60) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fluid={avatarImage.image.childImageSharp.fluid} />
}

export default Avatar
