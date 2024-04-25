import localFont from "next/font/local";

const Font = localFont({
    src: [
        {
            path: "../../public/fonts/AeonikPro-Thin.woff2",
            weight: "100",
            style: "normal"
        },
        {
            path: "../../public/fonts/AeonikPro-Light.woff2",
            weight: "300",
            style: "normal"
        },
        {
            path: "../../public/fonts/AeonikPro-Regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../../public/fonts/AeonikPro-Medium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../../public/fonts/AeonikPro-Bold.woff2",
            weight: "700",
            style: "normal"
        },
        {
            path: "../../public/fonts/AeonikPro-Black.woff2",
            weight: "900",
            style: "normal"
        }
    ],
    variable: "--font-aeonikpro",
});

export { Font };
