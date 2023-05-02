export default function BannerImage({ image, alt, height }) {
  const style = {
    height: height,
  };

  return <img className="banner-img" src={image} alt={alt} style={style} />;
}
