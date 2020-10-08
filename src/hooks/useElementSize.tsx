import React, {
    RefObject,
    useState,
    useEffect,
    useRef,
    useCallback,
} from "react";

// See: https://usehooks-typescript.com/use-event-listener
import { useEventListener } from "./useEventListener";

interface ISize {
    width: number;
    height: number;
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(
    elementRef: RefObject<T>,
): ISize {
    const [size, setSize] = useState<ISize>({
        width: 0,
        height: 0,
    });

    // Prevent too many rendering using useCallback
    const updateSize = useCallback(() => {
        const node = elementRef?.current;
        if (node) {
            setSize({
                width: node.offsetWidth || 0,
                height: node.offsetHeight || 0,
            });
        }
    }, [elementRef]);

    // Initial size on mount
    useEffect(() => {
        updateSize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEventListener("resize", updateSize);

    return size;
}

export default useElementSize;
