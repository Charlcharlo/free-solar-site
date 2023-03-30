export default function BannerImage({ image, alt }) {
    return  (
            <img 
                className="banner-img"
                src={ image } 
                alt={ alt }
            />
    );
}