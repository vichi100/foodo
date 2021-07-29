export const camalize = function camalize(mySentence) {
    const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return finalSentence;
}