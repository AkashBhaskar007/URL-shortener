const stringGenerator = async () => {
    const string = (Math.random() + 1).toString(36).substring(7);
    return string;
};
module.exports = stringGenerator;
