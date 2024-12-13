import React, { useMemo } from "react";

const SvgIcons = ({ name, alt='', className = '', ...props}) => {
    const icons = useMemo(() => {
        const importAll = (requireContext) => {
            const iconsMap = {};
            requireContext.keys().forEach((key) => {
                const iconName = key.replace('./', '').replace('.svg', '');
                iconsMap[iconName] = requireContext(key);
            });
            return iconsMap;
        };
        return importAll(require.context('../img/svg', false, /\.svg$/));
    }, []);

    const iconSrc = icons[name];

    if (!iconSrc) {
        console.error('SVG not found');
        return null;
    }

    return <img src={iconSrc} alt={alt || name} className={className} {...props} />;
}

export default SvgIcons;