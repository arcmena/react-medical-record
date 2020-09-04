// export const pageTransition = {
//     type: 'tween',
//     ease: 'anticipate',
//     duration: 0.5,
// };

export const landingVariants = {
    initial: {
        opacity: 0,
        x: '100vw',
    },
    in: {
        opacity: 1,
        x: '0',
    },
    out: {
        opacity: 0,
        x: '-100vw',
    },
};

export const mainVariants = {
    initial: {
        opacity: 0,
        y: '-100vw',
    },
    in: {
        opacity: 1,
        y: '0',
    },
    out: {
        opacity: 0,
        y: '100vw',
    },
};

export const headerBackgroundVariants = {
    initial: {
        opacity: 0,
        y: '100vw',
    },
    in: {
        opacity: 1,
        y: '0',
    },
    out: {
        opacity: 0,
        y: '-100vw',
    },
};
