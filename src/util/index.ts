export const typewriter = async (text: string, textId: string): Promise<boolean> => {
    return new Promise((resolve) => {
        let textPos = 0;
        let contents = '';
        const destination = document.getElementById(textId);

        let typeSpeed = 120;
        if (text.length > 10) {
            typeSpeed = 90;
        }

        const typeInterval = setInterval(() => {
            if (destination) {
                destination.innerHTML = contents + text.substring(0, textPos);
                if (textPos >= text.length) {
                    clearInterval(typeInterval);
                    resolve(true);
                } else {
                    textPos++;
                }
            }
        }, typeSpeed);
    });
}

export const getRandomNumber = (min: number, max: number, positiveOnly: boolean): number => {
    const number = Math.floor(Math.random() * (max - min) + min);
    return positiveOnly || number % 2 == 0 ? number : -number
}