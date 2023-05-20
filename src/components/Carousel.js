import { Children, cloneElement, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useResize } from "@/hooks/useResize";

export default function Carousel({ children }) {
  const [pageWidth, setPageWidth] = useState(800);
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const { width } = useResize();

  useEffect(() => {
    if (width <= 626) {
      setPageWidth(300);
    } else if (width > 540 && width <= 1000) {
      setPageWidth(540);
    } else {
      setPageWidth(800);
    }
  }, [width, pageWidth]);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageWidth - 80;
      console.log(newOffset);
      return newOffset > 0
        ? -((pageWidth - 80) * (pages.length - 1))
        : newOffset;
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageWidth + 80;
      return newOffset < -(pageWidth * (pages.length - 1)) ? 0 : newOffset;
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${pageWidth - 80}px`,
            maxWidth: `${pageWidth - 80}px`,
          },
        });
      })
    );
  }, [pageWidth]);

  return (
    <div className="carousel">
      <FaChevronLeft
        className="carousel__arrow"
        onClick={handleLeftArrowClick}
      />
      <div className="carousel__window">
        <div
          className="carousel__items-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight
        className="carousel__arrow"
        onClick={handleRightArrowClick}
      />
    </div>
  );
}
