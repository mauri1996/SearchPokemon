export default {
  filter(data) {
    return data
      .replace(/[^\w\s]/gi, "")
      .replace(/ /g, "")
      .toLowerCase();
  },
};
