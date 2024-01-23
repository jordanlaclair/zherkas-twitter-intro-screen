"use client";
import { Tweet } from "@the-convocation/twitter-scraper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TweetVideo = (props: {
  video: Tweet["videos"];
  blurredPreview: string | undefined;
}) => {
  if (!props.video || !(props.video.length > 0)) return null;

  return (
    <Image
      alt="Media content"
      placeholder="blur"
      blurDataURL="data:image/png;base64,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"
      className="rounded-lg border overflow-hidden object-cover"
      fill={true}
      sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 250px"
      src={props.video[0].preview}
    />
  );
};

export default TweetVideo;
