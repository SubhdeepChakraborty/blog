import {Image, ImageKitProvider} from "@imagekit/react"

const Img = ({src, width, height, alt}) => {
  return (
    <>
      <ImageKitProvider urlEndpoint={import.meta.env.VITE_YOUR_IMAGEKIT_ID}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          loading = 'lazy'
          lqip={{active : true, quality : 20}}
        />
      </ImageKitProvider>
    </>
  );
}

export default Img
