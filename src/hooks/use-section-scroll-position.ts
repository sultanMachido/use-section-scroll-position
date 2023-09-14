import { useEffect, useState } from "react";

export const useScrollPosition = (sectionIds: string[]) => {
  const [scrollPosition, setScrollPosition] = useState("");
  const getScrollPosition = (sectionOfPageId: string) => {
    const pageSection = document.getElementById(sectionOfPageId);
    const sectionArea = pageSection?.getBoundingClientRect();
    if (sectionArea && sectionArea?.y <= 0 && sectionArea?.y >= -sectionArea.height) {
      return pageSection?.id;
    }

    return "";
  };
  const scrollHandler = () => {
      const ids = sectionIds.map((id) => {
        return getScrollPosition(id);
      });
      if (ids.every((element) => element === "")) {
        setScrollPosition("");
      } else {
        const sectionId = ids.filter((id) => id !== "");
        if (sectionId[0]) {
          setScrollPosition(`#${sectionId[0]}`);
        }
      }
    }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler );

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return { scrollPosition };
};
