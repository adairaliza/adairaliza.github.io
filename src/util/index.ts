export const typewriter = async (text: string, textId: string): Promise<boolean> => {
    return new Promise((resolve) => {
        let textPos = 0;
        let contents = '';
        const destination = document.getElementById(textId);

        let typeSpeed = 120;
        if (text.length > 10) {
            typeSpeed = 60;
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
        }, 130);
    });
}