interface GridProps
{
    /**
     * Color of the grid
     */
    color?: string;

    /**
     * Size of the grid in pixels
     */
    size?: number;

    /**
     * Content of the component
     */
    children?: React.ReactNode;

    className?: string;

    style?: React.CSSProperties;
}

function GridPlaceholder({ size = 64 }: Pick<GridProps, "size">)
{
    const widthSpread = 20;
    const heightSpread = 10;
    return (
        <div
            style={{
                // +1 to account for the border
                width: `${widthSpread * size + 1}px`,
                height: `${heightSpread * size + 1}px`,
            }}
            className="flex min-h-screen  items-center justify-center "
        >

        </div>
    );
}

export default function GridWrapper({
    color = "#cacaca",
    children,
    className,
    style = {
        backgroundColor: "white",
    },
}: GridProps)
{
    return (
        <div
            style={{
                ...style,
                backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(to right, ${color} 1px, transparent 1px)`,
                backgroundSize: `${60}px ${60}px`,
            }}
            className={className}
        >
            {children}
        </div>
    );
}
