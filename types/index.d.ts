export namespace variants {
    export { main };
    export { moon };
    export { dawn };
}
export namespace roles {
    namespace base {
        import main_1 = main.base;
        export { main_1 as main };
        import moon_1 = moon.base;
        export { moon_1 as moon };
        import dawn_1 = dawn.base;
        export { dawn_1 as dawn };
    }
    namespace surface {
        import main_2 = main.surface;
        export { main_2 as main };
        import moon_2 = moon.surface;
        export { moon_2 as moon };
        import dawn_2 = dawn.surface;
        export { dawn_2 as dawn };
    }
    namespace overlay {
        import main_3 = main.overlay;
        export { main_3 as main };
        import moon_3 = moon.overlay;
        export { moon_3 as moon };
        import dawn_3 = dawn.overlay;
        export { dawn_3 as dawn };
    }
    namespace muted {
        import main_4 = main.muted;
        export { main_4 as main };
        import moon_4 = moon.muted;
        export { moon_4 as moon };
        import dawn_4 = dawn.muted;
        export { dawn_4 as dawn };
    }
    namespace subtle {
        import main_5 = main.subtle;
        export { main_5 as main };
        import moon_5 = moon.subtle;
        export { moon_5 as moon };
        import dawn_5 = dawn.subtle;
        export { dawn_5 as dawn };
    }
    namespace text {
        import main_6 = main.text;
        export { main_6 as main };
        import moon_6 = moon.text;
        export { moon_6 as moon };
        import dawn_6 = dawn.text;
        export { dawn_6 as dawn };
    }
    namespace love {
        import main_7 = main.love;
        export { main_7 as main };
        import moon_7 = moon.love;
        export { moon_7 as moon };
        import dawn_7 = dawn.love;
        export { dawn_7 as dawn };
    }
    namespace gold {
        import main_8 = main.gold;
        export { main_8 as main };
        import moon_8 = moon.gold;
        export { moon_8 as moon };
        import dawn_8 = dawn.gold;
        export { dawn_8 as dawn };
    }
    namespace rose {
        import main_9 = main.rose;
        export { main_9 as main };
        import moon_9 = moon.rose;
        export { moon_9 as moon };
        import dawn_9 = dawn.rose;
        export { dawn_9 as dawn };
    }
    namespace pine {
        import main_10 = main.pine;
        export { main_10 as main };
        import moon_10 = moon.pine;
        export { moon_10 as moon };
        import dawn_10 = dawn.pine;
        export { dawn_10 as dawn };
    }
    namespace foam {
        import main_11 = main.foam;
        export { main_11 as main };
        import moon_11 = moon.foam;
        export { moon_11 as moon };
        import dawn_11 = dawn.foam;
        export { dawn_11 as dawn };
    }
    namespace iris {
        import main_12 = main.iris;
        export { main_12 as main };
        import moon_12 = moon.iris;
        export { moon_12 as moon };
        import dawn_12 = dawn.iris;
        export { dawn_12 as dawn };
    }
    namespace highlightLow {
        import main_13 = main.highlightLow;
        export { main_13 as main };
        import moon_13 = moon.highlightLow;
        export { moon_13 as moon };
        import dawn_13 = dawn.highlightLow;
        export { dawn_13 as dawn };
    }
    namespace highlightMed {
        import main_14 = main.highlightMed;
        export { main_14 as main };
        import moon_14 = moon.highlightMed;
        export { moon_14 as moon };
        import dawn_14 = dawn.highlightMed;
        export { dawn_14 as dawn };
    }
    namespace highlightHigh {
        import main_15 = main.highlightHigh;
        export { main_15 as main };
        import moon_15 = moon.highlightHigh;
        export { moon_15 as moon };
        import dawn_15 = dawn.highlightHigh;
        export { dawn_15 as dawn };
    }
}
export default palette;
declare namespace main {
    export namespace base_1 {
        const hex: string;
        const rgb: number[];
        const hsl: number[];
    }
    export { base_1 as base };
    export namespace surface_1 {
        const hex_1: string;
        export { hex_1 as hex };
        const rgb_1: number[];
        export { rgb_1 as rgb };
        const hsl_1: number[];
        export { hsl_1 as hsl };
    }
    export { surface_1 as surface };
    export namespace overlay_1 {
        const hex_2: string;
        export { hex_2 as hex };
        const rgb_2: number[];
        export { rgb_2 as rgb };
        const hsl_2: number[];
        export { hsl_2 as hsl };
    }
    export { overlay_1 as overlay };
    export namespace muted_1 {
        const hex_3: string;
        export { hex_3 as hex };
        const rgb_3: number[];
        export { rgb_3 as rgb };
        const hsl_3: number[];
        export { hsl_3 as hsl };
    }
    export { muted_1 as muted };
    export namespace subtle_1 {
        const hex_4: string;
        export { hex_4 as hex };
        const rgb_4: number[];
        export { rgb_4 as rgb };
        const hsl_4: number[];
        export { hsl_4 as hsl };
    }
    export { subtle_1 as subtle };
    export namespace text_1 {
        const hex_5: string;
        export { hex_5 as hex };
        const rgb_5: number[];
        export { rgb_5 as rgb };
        const hsl_5: number[];
        export { hsl_5 as hsl };
    }
    export { text_1 as text };
    export namespace love_1 {
        const hex_6: string;
        export { hex_6 as hex };
        const rgb_6: number[];
        export { rgb_6 as rgb };
        const hsl_6: number[];
        export { hsl_6 as hsl };
    }
    export { love_1 as love };
    export namespace gold_1 {
        const hex_7: string;
        export { hex_7 as hex };
        const rgb_7: number[];
        export { rgb_7 as rgb };
        const hsl_7: number[];
        export { hsl_7 as hsl };
    }
    export { gold_1 as gold };
    export namespace rose_1 {
        const hex_8: string;
        export { hex_8 as hex };
        const rgb_8: number[];
        export { rgb_8 as rgb };
        const hsl_8: number[];
        export { hsl_8 as hsl };
    }
    export { rose_1 as rose };
    export namespace pine_1 {
        const hex_9: string;
        export { hex_9 as hex };
        const rgb_9: number[];
        export { rgb_9 as rgb };
        const hsl_9: number[];
        export { hsl_9 as hsl };
    }
    export { pine_1 as pine };
    export namespace foam_1 {
        const hex_10: string;
        export { hex_10 as hex };
        const rgb_10: number[];
        export { rgb_10 as rgb };
        const hsl_10: number[];
        export { hsl_10 as hsl };
    }
    export { foam_1 as foam };
    export namespace iris_1 {
        const hex_11: string;
        export { hex_11 as hex };
        const rgb_11: number[];
        export { rgb_11 as rgb };
        const hsl_11: number[];
        export { hsl_11 as hsl };
    }
    export { iris_1 as iris };
    export namespace highlightLow_1 {
        const hex_12: string;
        export { hex_12 as hex };
        const rgb_12: number[];
        export { rgb_12 as rgb };
        const hsl_12: number[];
        export { hsl_12 as hsl };
        export namespace alpha {
            const hex_13: string;
            export { hex_13 as hex };
            const rgb_13: number[];
            export { rgb_13 as rgb };
            const hsl_13: number[];
            export { hsl_13 as hsl };
        }
    }
    export { highlightLow_1 as highlightLow };
    export namespace highlightMed_1 {
        const hex_14: string;
        export { hex_14 as hex };
        const rgb_14: number[];
        export { rgb_14 as rgb };
        const hsl_14: number[];
        export { hsl_14 as hsl };
        export namespace alpha_1 {
            const hex_15: string;
            export { hex_15 as hex };
            const rgb_15: number[];
            export { rgb_15 as rgb };
            const hsl_15: number[];
            export { hsl_15 as hsl };
        }
        export { alpha_1 as alpha };
    }
    export { highlightMed_1 as highlightMed };
    export namespace highlightHigh_1 {
        const hex_16: string;
        export { hex_16 as hex };
        const rgb_16: number[];
        export { rgb_16 as rgb };
        const hsl_16: number[];
        export { hsl_16 as hsl };
        export namespace alpha_2 {
            const hex_17: string;
            export { hex_17 as hex };
            const rgb_17: number[];
            export { rgb_17 as rgb };
            const hsl_17: number[];
            export { hsl_17 as hsl };
        }
        export { alpha_2 as alpha };
    }
    export { highlightHigh_1 as highlightHigh };
}
declare namespace moon {
    export namespace base_2 {
        const hex_18: string;
        export { hex_18 as hex };
        const rgb_18: number[];
        export { rgb_18 as rgb };
        const hsl_18: number[];
        export { hsl_18 as hsl };
    }
    export { base_2 as base };
    export namespace surface_2 {
        const hex_19: string;
        export { hex_19 as hex };
        const rgb_19: number[];
        export { rgb_19 as rgb };
        const hsl_19: number[];
        export { hsl_19 as hsl };
    }
    export { surface_2 as surface };
    export namespace overlay_2 {
        const hex_20: string;
        export { hex_20 as hex };
        const rgb_20: number[];
        export { rgb_20 as rgb };
        const hsl_20: number[];
        export { hsl_20 as hsl };
    }
    export { overlay_2 as overlay };
    export namespace muted_2 {
        const hex_21: string;
        export { hex_21 as hex };
        const rgb_21: number[];
        export { rgb_21 as rgb };
        const hsl_21: number[];
        export { hsl_21 as hsl };
    }
    export { muted_2 as muted };
    export namespace subtle_2 {
        const hex_22: string;
        export { hex_22 as hex };
        const rgb_22: number[];
        export { rgb_22 as rgb };
        const hsl_22: number[];
        export { hsl_22 as hsl };
    }
    export { subtle_2 as subtle };
    export namespace text_2 {
        const hex_23: string;
        export { hex_23 as hex };
        const rgb_23: number[];
        export { rgb_23 as rgb };
        const hsl_23: number[];
        export { hsl_23 as hsl };
    }
    export { text_2 as text };
    export namespace love_2 {
        const hex_24: string;
        export { hex_24 as hex };
        const rgb_24: number[];
        export { rgb_24 as rgb };
        const hsl_24: number[];
        export { hsl_24 as hsl };
    }
    export { love_2 as love };
    export namespace gold_2 {
        const hex_25: string;
        export { hex_25 as hex };
        const rgb_25: number[];
        export { rgb_25 as rgb };
        const hsl_25: number[];
        export { hsl_25 as hsl };
    }
    export { gold_2 as gold };
    export namespace rose_2 {
        const hex_26: string;
        export { hex_26 as hex };
        const rgb_26: number[];
        export { rgb_26 as rgb };
        const hsl_26: number[];
        export { hsl_26 as hsl };
    }
    export { rose_2 as rose };
    export namespace pine_2 {
        const hex_27: string;
        export { hex_27 as hex };
        const rgb_27: number[];
        export { rgb_27 as rgb };
        const hsl_27: number[];
        export { hsl_27 as hsl };
    }
    export { pine_2 as pine };
    export namespace foam_2 {
        const hex_28: string;
        export { hex_28 as hex };
        const rgb_28: number[];
        export { rgb_28 as rgb };
        const hsl_28: number[];
        export { hsl_28 as hsl };
    }
    export { foam_2 as foam };
    export namespace iris_2 {
        const hex_29: string;
        export { hex_29 as hex };
        const rgb_29: number[];
        export { rgb_29 as rgb };
        const hsl_29: number[];
        export { hsl_29 as hsl };
    }
    export { iris_2 as iris };
    export namespace highlightLow_2 {
        const hex_30: string;
        export { hex_30 as hex };
        const rgb_30: number[];
        export { rgb_30 as rgb };
        const hsl_30: number[];
        export { hsl_30 as hsl };
        export namespace alpha_3 {
            const hex_31: string;
            export { hex_31 as hex };
            const rgb_31: number[];
            export { rgb_31 as rgb };
            const hsl_31: number[];
            export { hsl_31 as hsl };
        }
        export { alpha_3 as alpha };
    }
    export { highlightLow_2 as highlightLow };
    export namespace highlightMed_2 {
        const hex_32: string;
        export { hex_32 as hex };
        const rgb_32: number[];
        export { rgb_32 as rgb };
        const hsl_32: number[];
        export { hsl_32 as hsl };
        export namespace alpha_4 {
            const hex_33: string;
            export { hex_33 as hex };
            const rgb_33: number[];
            export { rgb_33 as rgb };
            const hsl_33: number[];
            export { hsl_33 as hsl };
        }
        export { alpha_4 as alpha };
    }
    export { highlightMed_2 as highlightMed };
    export namespace highlightHigh_2 {
        const hex_34: string;
        export { hex_34 as hex };
        const rgb_34: number[];
        export { rgb_34 as rgb };
        const hsl_34: number[];
        export { hsl_34 as hsl };
        export namespace alpha_5 {
            const hex_35: string;
            export { hex_35 as hex };
            const rgb_35: number[];
            export { rgb_35 as rgb };
            const hsl_35: number[];
            export { hsl_35 as hsl };
        }
        export { alpha_5 as alpha };
    }
    export { highlightHigh_2 as highlightHigh };
}
declare namespace dawn {
    export namespace base_3 {
        const hex_36: string;
        export { hex_36 as hex };
        const rgb_36: number[];
        export { rgb_36 as rgb };
        const hsl_36: number[];
        export { hsl_36 as hsl };
    }
    export { base_3 as base };
    export namespace surface_3 {
        const hex_37: string;
        export { hex_37 as hex };
        const rgb_37: number[];
        export { rgb_37 as rgb };
        const hsl_37: number[];
        export { hsl_37 as hsl };
    }
    export { surface_3 as surface };
    export namespace overlay_3 {
        const hex_38: string;
        export { hex_38 as hex };
        const rgb_38: number[];
        export { rgb_38 as rgb };
        const hsl_38: number[];
        export { hsl_38 as hsl };
    }
    export { overlay_3 as overlay };
    export namespace muted_3 {
        const hex_39: string;
        export { hex_39 as hex };
        const rgb_39: number[];
        export { rgb_39 as rgb };
        const hsl_39: number[];
        export { hsl_39 as hsl };
    }
    export { muted_3 as muted };
    export namespace subtle_3 {
        const hex_40: string;
        export { hex_40 as hex };
        const rgb_40: number[];
        export { rgb_40 as rgb };
        const hsl_40: number[];
        export { hsl_40 as hsl };
    }
    export { subtle_3 as subtle };
    export namespace text_3 {
        const hex_41: string;
        export { hex_41 as hex };
        const rgb_41: number[];
        export { rgb_41 as rgb };
        const hsl_41: number[];
        export { hsl_41 as hsl };
    }
    export { text_3 as text };
    export namespace love_3 {
        const hex_42: string;
        export { hex_42 as hex };
        const rgb_42: number[];
        export { rgb_42 as rgb };
        const hsl_42: number[];
        export { hsl_42 as hsl };
    }
    export { love_3 as love };
    export namespace gold_3 {
        const hex_43: string;
        export { hex_43 as hex };
        const rgb_43: number[];
        export { rgb_43 as rgb };
        const hsl_43: number[];
        export { hsl_43 as hsl };
    }
    export { gold_3 as gold };
    export namespace rose_3 {
        const hex_44: string;
        export { hex_44 as hex };
        const rgb_44: number[];
        export { rgb_44 as rgb };
        const hsl_44: number[];
        export { hsl_44 as hsl };
    }
    export { rose_3 as rose };
    export namespace pine_3 {
        const hex_45: string;
        export { hex_45 as hex };
        const rgb_45: number[];
        export { rgb_45 as rgb };
        const hsl_45: number[];
        export { hsl_45 as hsl };
    }
    export { pine_3 as pine };
    export namespace foam_3 {
        const hex_46: string;
        export { hex_46 as hex };
        const rgb_46: number[];
        export { rgb_46 as rgb };
        const hsl_46: number[];
        export { hsl_46 as hsl };
    }
    export { foam_3 as foam };
    export namespace iris_3 {
        const hex_47: string;
        export { hex_47 as hex };
        const rgb_47: number[];
        export { rgb_47 as rgb };
        const hsl_47: number[];
        export { hsl_47 as hsl };
    }
    export { iris_3 as iris };
    export namespace highlightLow_3 {
        const hex_48: string;
        export { hex_48 as hex };
        const rgb_48: number[];
        export { rgb_48 as rgb };
        const hsl_48: number[];
        export { hsl_48 as hsl };
        export namespace alpha_6 {
            const hex_49: string;
            export { hex_49 as hex };
            const rgb_49: number[];
            export { rgb_49 as rgb };
            const hsl_49: number[];
            export { hsl_49 as hsl };
        }
        export { alpha_6 as alpha };
    }
    export { highlightLow_3 as highlightLow };
    export namespace highlightMed_3 {
        const hex_50: string;
        export { hex_50 as hex };
        const rgb_50: number[];
        export { rgb_50 as rgb };
        const hsl_50: number[];
        export { hsl_50 as hsl };
        export namespace alpha_7 {
            const hex_51: string;
            export { hex_51 as hex };
            const rgb_51: number[];
            export { rgb_51 as rgb };
            const hsl_51: number[];
            export { hsl_51 as hsl };
        }
        export { alpha_7 as alpha };
    }
    export { highlightMed_3 as highlightMed };
    export namespace highlightHigh_3 {
        const hex_52: string;
        export { hex_52 as hex };
        const rgb_52: number[];
        export { rgb_52 as rgb };
        const hsl_52: number[];
        export { hsl_52 as hsl };
        export namespace alpha_8 {
            const hex_53: string;
            export { hex_53 as hex };
            const rgb_53: number[];
            export { rgb_53 as rgb };
            const hsl_53: number[];
            export { hsl_53 as hsl };
        }
        export { alpha_8 as alpha };
    }
    export { highlightHigh_3 as highlightHigh };
}
declare namespace palette {
    namespace variants { }
    namespace roles { }
}
