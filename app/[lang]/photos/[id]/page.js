import PhotoDetails from "@/components/PhotoDetails";
import { getDictionary } from "../../disctionaries";

const PhotoDetailsPage = async ({ params: { id, lang } }) => {
    return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailsPage;
