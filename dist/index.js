const objectKeys = Object.keys;
const main = {
    base: { hex: "191724", rgb: [25, 23, 36], hsl: [249, 22, 12] },
    surface: { hex: "1f1d2e", rgb: [31, 29, 46], hsl: [247, 23, 15] },
    overlay: { hex: "26233a", rgb: [38, 35, 58], hsl: [248, 25, 18] },
    muted: { hex: "6e6a86", rgb: [110, 106, 134], hsl: [249, 12, 47] },
    subtle: { hex: "908caa", rgb: [144, 140, 170], hsl: [248, 15, 61] },
    text: { hex: "e0def4", rgb: [224, 222, 244], hsl: [245, 50, 91] },
    love: { hex: "eb6f92", rgb: [235, 111, 146], hsl: [343, 76, 68] },
    gold: { hex: "f6c177", rgb: [246, 193, 119], hsl: [35, 88, 72] },
    rose: { hex: "ebbcba", rgb: [235, 188, 186], hsl: [2, 55, 83] },
    pine: { hex: "31748f", rgb: [49, 116, 143], hsl: [197, 49, 38] },
    foam: { hex: "9ccfd8", rgb: [156, 207, 216], hsl: [189, 43, 73] },
    iris: { hex: "c4a7e7", rgb: [196, 167, 231], hsl: [267, 57, 78] },
    highlightLow: {
        hex: "21202e",
        rgb: [33, 32, 46],
        hsl: [244, 18, 15],
        alpha: {
            hex: "6e6a861a",
            rgb: [110, 106, 134, 0.1],
            hsl: [249, 12, 47, 0.1],
        },
    },
    highlightMed: {
        hex: "403d52",
        rgb: [64, 61, 82],
        hsl: [249, 15, 28],
        alpha: {
            hex: "6e6a8633",
            rgb: [110, 106, 134, 0.2],
            hsl: [249, 12, 47, 0.2],
        },
    },
    highlightHigh: {
        hex: "524f67",
        rgb: [82, 79, 103],
        hsl: [248, 13, 36],
        alpha: {
            hex: "6e6a8666",
            rgb: [110, 106, 134, 0.4],
            hsl: [249, 12, 47, 0.4],
        },
    },
};
const moon = {
    base: { hex: "232136", rgb: [35, 33, 54], hsl: [246, 24, 17] },
    surface: { hex: "2a273f", rgb: [42, 39, 63], hsl: [248, 24, 20] },
    overlay: { hex: "393552", rgb: [57, 53, 82], hsl: [248, 21, 26] },
    muted: { hex: "6e6a86", rgb: [110, 106, 134], hsl: [249, 12, 47] },
    subtle: { hex: "908caa", rgb: [144, 140, 170], hsl: [248, 15, 61] },
    text: { hex: "e0def4", rgb: [224, 222, 244], hsl: [245, 50, 91] },
    love: { hex: "eb6f92", rgb: [235, 111, 146], hsl: [343, 76, 68] },
    gold: { hex: "f6c177", rgb: [246, 193, 119], hsl: [35, 88, 72] },
    rose: { hex: "ea9a97", rgb: [234, 154, 151], hsl: [2, 66, 75] },
    pine: { hex: "3e8fb0", rgb: [62, 143, 176], hsl: [197, 48, 47] },
    foam: { hex: "9ccfd8", rgb: [156, 207, 216], hsl: [189, 43, 73] },
    iris: { hex: "c4a7e7", rgb: [196, 167, 231], hsl: [267, 57, 78] },
    highlightLow: {
        hex: "2a283e",
        rgb: [42, 40, 62],
        hsl: [245, 22, 20],
        alpha: {
            hex: "817c9c14",
            rgb: [129, 124, 156, 0.08],
            hsl: [249, 14, 55, 0.08],
        },
    },
    highlightMed: {
        hex: "44415a",
        rgb: [68, 65, 90],
        hsl: [247, 16, 30],
        alpha: {
            hex: "817c9c26",
            rgb: [129, 124, 156, 0.15],
            hsl: [249, 14, 55, 0.15],
        },
    },
    highlightHigh: {
        hex: "56526e",
        rgb: [86, 82, 110],
        hsl: [249, 15, 38],
        alpha: {
            hex: "817c9c4d",
            rgb: [129, 124, 156, 0.3],
            hsl: [249, 14, 55, 0.3],
        },
    },
};
const dawn = {
    base: { hex: "faf4ed", rgb: [250, 244, 237], hsl: [32, 57, 95] },
    surface: { hex: "fffaf3", rgb: [255, 250, 243], hsl: [35, 100, 98] },
    overlay: { hex: "f2e9e1", rgb: [242, 233, 222], hsl: [33, 43, 91] },
    muted: { hex: "9893a5", rgb: [152, 147, 165], hsl: [257, 9, 61] },
    subtle: { hex: "797593", rgb: [121, 117, 147], hsl: [248, 12, 52] },
    text: { hex: "575279", rgb: [87, 82, 121], hsl: [248, 19, 40] },
    love: { hex: "b4637a", rgb: [180, 99, 122], hsl: [343, 35, 55] },
    gold: { hex: "ea9d34", rgb: [234, 157, 52], hsl: [35, 81, 56] },
    rose: { hex: "d7827e", rgb: [215, 130, 126], hsl: [3, 53, 67] },
    pine: { hex: "286983", rgb: [40, 105, 131], hsl: [197, 53, 34] },
    foam: { hex: "56949f", rgb: [86, 148, 159], hsl: [189, 30, 48] },
    iris: { hex: "907aa9", rgb: [144, 122, 169], hsl: [268, 21, 57] },
    highlightLow: {
        hex: "f4ede8",
        rgb: [244, 237, 232],
        hsl: [25, 35, 93],
        alpha: {
            hex: "6e6a860d",
            rgb: [110, 106, 134, 0.05],
            hsl: [249, 12, 47, 0.05],
        },
    },
    highlightMed: {
        hex: "dfdad9",
        rgb: [223, 218, 217],
        hsl: [10, 9, 86],
        alpha: {
            hex: "6e6a8614",
            rgb: [110, 106, 134, 0.08],
            hsl: [249, 12, 47, 0.08],
        },
    },
    highlightHigh: {
        hex: "cecacd",
        rgb: [206, 202, 205],
        hsl: [315, 4, 80],
        alpha: {
            hex: "6e6a8626",
            rgb: [110, 106, 134, 0.15],
            hsl: [249, 12, 47, 0.15],
        },
    },
};
const variantColors = { main, moon, dawn };
const roleColors = {
    base: { main: main.base, moon: moon.base, dawn: dawn.base },
    surface: { main: main.surface, moon: moon.surface, dawn: dawn.surface },
    overlay: { main: main.overlay, moon: moon.overlay, dawn: dawn.overlay },
    muted: { main: main.muted, moon: moon.muted, dawn: dawn.muted },
    subtle: { main: main.subtle, moon: moon.subtle, dawn: dawn.subtle },
    text: { main: main.text, moon: moon.text, dawn: dawn.text },
    love: { main: main.love, moon: moon.love, dawn: dawn.love },
    gold: { main: main.gold, moon: moon.gold, dawn: dawn.gold },
    rose: { main: main.rose, moon: moon.rose, dawn: dawn.rose },
    pine: { main: main.pine, moon: moon.pine, dawn: dawn.pine },
    foam: { main: main.foam, moon: moon.foam, dawn: dawn.foam },
    iris: { main: main.iris, moon: moon.iris, dawn: dawn.iris },
    highlightLow: {
        main: main.highlightLow,
        moon: moon.highlightLow,
        dawn: dawn.highlightLow,
    },
    highlightMed: {
        main: main.highlightMed,
        moon: moon.highlightMed,
        dawn: dawn.highlightMed,
    },
    highlightHigh: {
        main: main.highlightHigh,
        moon: moon.highlightHigh,
        dawn: dawn.highlightHigh,
    },
};
const variants = {
    main: {
        id: "rose-pine",
        key: "main",
        name: "Rosé Pine",
        colors: main,
    },
    moon: {
        id: "rose-pine-moon",
        key: "moon",
        name: "Rosé Pine Moon",
        colors: moon,
    },
    dawn: {
        id: "rose-pine-dawn",
        key: "dawn",
        name: "Rosé Pine Dawn",
        colors: dawn,
    },
};
const roles = {
    base: { id: "base", key: "base", name: "Base", colors: roleColors.base },
    surface: {
        id: "surface",
        key: "surface",
        name: "Surface",
        colors: roleColors.surface,
    },
    overlay: {
        id: "overlay",
        key: "overlay",
        name: "Overlay",
        colors: roleColors.overlay,
    },
    muted: {
        id: "muted",
        key: "muted",
        name: "Muted",
        colors: roleColors.muted,
    },
    subtle: {
        id: "subtle",
        key: "subtle",
        name: "Subtle",
        colors: roleColors.subtle,
    },
    text: { id: "text", key: "text", name: "Text", colors: roleColors.text },
    love: { id: "love", key: "love", name: "Love", colors: roleColors.love },
    gold: { id: "gold", key: "gold", name: "Gold", colors: roleColors.gold },
    rose: { id: "rose", key: "rose", name: "Rose", colors: roleColors.rose },
    pine: { id: "pine", key: "pine", name: "Pine", colors: roleColors.pine },
    foam: { id: "foam", key: "foam", name: "Foam", colors: roleColors.foam },
    iris: { id: "iris", key: "iris", name: "Iris", colors: roleColors.iris },
    highlightLow: {
        id: "highlight-low",
        key: "highlightLow",
        name: "Highlight Low",
        colors: roleColors.highlightLow,
    },
    highlightMed: {
        id: "highlight-med",
        key: "highlightMed",
        name: "Highlight Med",
        colors: roleColors.highlightMed,
    },
    highlightHigh: {
        id: "highlight-high",
        key: "highlightHigh",
        name: "Highlight High",
        colors: roleColors.highlightHigh,
    },
};
const variantKeys = objectKeys(variants);
const variantIds = [
    "rose-pine",
    "rose-pine-moon",
    "rose-pine-dawn",
];
const variantNames = [
    "Rosé Pine",
    "Rosé Pine Moon",
    "Rosé Pine Dawn",
];
const roleKeys = objectKeys(roles);
const roleIds = roleKeys.map((role) => {
    if (role === "highlightLow")
        return "highlight-low";
    if (role === "highlightMed")
        return "highlight-med";
    if (role === "highlightHigh")
        return "highlight-high";
    return role;
});
const roleNames = [
    "Base",
    "Surface",
    "Overlay",
    "Muted",
    "Subtle",
    "Text",
    "Love",
    "Gold",
    "Rose",
    "Pine",
    "Foam",
    "Iris",
    "Highlight Low",
    "Highlight Med",
    "Highlight High",
];
const colorFormats = ["hex", "rgb", "hsl"];
export { variants, variantIds, variantKeys, variantNames, variantColors, roles, roleIds, roleKeys, roleNames, roleColors, colorFormats, };
