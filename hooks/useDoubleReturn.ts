import { ToastAndroid } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";

const useDoubleReturn = () => {
    const [isGoingBack, setIsGoingBack] = useState(false);
    const nav = useNavigation();

    useEffect(() => {
        const listener = (e: any) => {
            if (e.data.action.type !== "GO_BACK") return;
            if (!isGoingBack) {
                e.preventDefault();
            } else {
                return;
            }

            ToastAndroid.show("Go back twice to return", ToastAndroid.SHORT);
            setIsGoingBack(true);
            setTimeout(() => setIsGoingBack(false), 1000);
        };
        nav.addListener("beforeRemove", listener);

        return () => {
            nav.removeListener("beforeRemove", listener);
        };
    }, [isGoingBack]);
};

export default useDoubleReturn;
