import { Image as IKImage } from "@imagekit/react";

const Image = ({ src, alt, w, h, className = "", ...rest }) => {
  if (!src) {
    return null;
  }

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      src={src}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading="lazy"
      className={className}
      lqip={{ active: true, quality: 20 }}
      {...rest}
    />
  );
};

export default Image;
