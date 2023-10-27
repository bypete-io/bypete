module.exports = {
    getFrontmatterValue: function (page, pages, key) {
        for (let entry of pages) {
            if (entry.data[key] === page.data[key]) {
                return entry.data[key];
            }
        }
        return null;
    },
};
