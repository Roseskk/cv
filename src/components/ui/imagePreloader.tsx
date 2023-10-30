import ContentLoader from "react-content-loader";
import { useEffect, useState } from "react";

const MyLoader = () => {
    const [height, setHeight] = useState(545);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth <= 768) {
                setHeight(300);
            } else {
                setHeight(545);
            }
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <ContentLoader
            className="my-loader" // Добавляем класс для CSS анимации
            speed={2}
            width="100%"
            height={height}
            viewBox={`0 0 900 ${height}`}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height={height} />
        </ContentLoader>
    );
};

export default MyLoader;
