import React from "react"
import { Facebook, Twitter, Linkedin, Pocket } from "react-feather"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
} from "react-share"

const sty = {
  width: "200px",
  display: "flex",
  justifyContent: "space-between",
}

const ShareButtons = ({ url, title, description }) => (
  <div style={sty} className="post-meta-share-icons">
    <FacebookShareButton url={url} quote={description}>
      <Facebook strokeWidth={1.25} />
    </FacebookShareButton>

    <LinkedinShareButton url={url} title={title} summary={description}>
      <Linkedin strokeWidth={1.25} />
    </LinkedinShareButton>

    <TwitterShareButton url={url} title={description}>
      <Twitter strokeWidth={1.25} />
    </TwitterShareButton>

    <PocketShareButton url={url} title={description}>
      <Pocket strokeWidth={1.25} />
    </PocketShareButton>
  </div>
)

export default ShareButtons
