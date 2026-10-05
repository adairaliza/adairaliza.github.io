import { HeadstoneDiv } from "./HeadstoneOption.styled";
const HeadstoneOption = ({
    title
}: {
    title: string,
}) => {
    return (
        <HeadstoneDiv>{title}</HeadstoneDiv>
    )
}

export default HeadstoneOption;