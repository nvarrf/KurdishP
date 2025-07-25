import { Image } from '@imagekit/react';
const image = ({ path, src, alt, className, w, h, onClick }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={path}
      src={src}

      transformation={[{ width: w, height: h }]}

      lqip={{ active: true, quality: 20 }}
      className={className}
      alt={alt}

      onClick={onClick}
    />
  )
}

export default image