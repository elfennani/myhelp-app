import { useWindowDimensions } from "react-native";
import {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";

export default function useSidebarAnimate() {
    const transformX = useSharedValue(0);
    const { width } = useWindowDimensions();

    const gestureEventHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { started: boolean; start: number }
    >({
        onStart: (ev, ctx) => {
            if (
                ev.absoluteX < 30 ||
                transformX.value > 30 ||
                transformX.value < -290 ||
                ev.absoluteX > width - 30
            )
                ctx.started = true;
            ctx.start = transformX.value;
        },
        onActive: (ev, ctx) => {
            if (ctx.started) {
                transformX.value = ev.translationX + ctx.start;
            }
            if (transformX.value < -336) transformX.value = -336;
            if (transformX.value > 336) transformX.value = 336;
        },
        onEnd: (ev, ctx) => {
            let newVal;
            if (transformX.value < -width / 2) newVal = -(width - width + 320);
            else newVal = transformX.value < 320 / 2 ? 0 : 320;
            transformX.value = withSpring(newVal, {
                velocity: 5,
                damping: 12,
            });
            ctx.started = false;
        },
    });

    const leftSideBarAnimStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: transformX.value - 320 }],
        elevation: 15 * (transformX.value / 320),
    }));

    const rightSideBarAnimStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: transformX.value + 320 }],
        elevation: 15 * (-transformX.value / 320),
    }));

    const mainContentAnimStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: transformX.value }],
    }));

    return {
        leftStyle: leftSideBarAnimStyle,
        rightStyle: rightSideBarAnimStyle,
        contentStyle: mainContentAnimStyle,
        gestureHandler: gestureEventHandler,
        openHistory: () =>
            (transformX.value = withSpring(320, {
                velocity: 5,
                damping: 15,
            })),
        openPersons: () =>
            (transformX.value = withSpring(-320, {
                velocity: 5,
                damping: 15,
            })),
    };
}
