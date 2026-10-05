export const HeadstoneSvg = ({
    label,
    index,
    count
}: {
    label: string,
    index: number,
    count: number
}) => {
    return (
        <svg
            width={500 + (index * (50 + (count * 10)))}
            height={500 + (index * (50 + (count * 10)))}
            viewBox={`0 0 ${150 + (count * 4)} ${250 + (count * 4)}`}
        >
            <rect
                width="100%" height="100%"
                fill="none" stroke="white" stroke-width="5px"
            />

            <text
                x="50%" y="30%" font-size={`${200 + (count * 4)}%`}
                dominant-baseline="middle" text-anchor="middle"
                fill="white">
                {label.split(" ").map((word, i) => (
                    <tspan
                        key={i}
                        x="50%"
                        dy={i === 0 ? "0" : "1em"}
                    >
                        {word}
                    </tspan>
                ))}
            </text>
        </svg>
    )
}