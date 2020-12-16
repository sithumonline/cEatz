import { Image } from "@chakra-ui/react";

export default function Parallax() {
  return (
    <Image
      h="20vh"
      w="100vw"
      src="https://cdn.asiatatler.com/asiatatler/i/hk/2020/02/12125015-louise-hong-kong-instagrammable-restaurants-2020-hong-kong-tatler_cover_1800x1200.jpg"
      alt="Cover Image"
      objectFit="cover"
      filter="blur(1px)"
    />
  );
}
