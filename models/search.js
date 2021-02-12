const db = require('./conn.js');

class Search {
    constructor(id, search_url) {
        this.id = id;
        this.search_url = search_url;
    }

    async getShortSearch() {
        try {
            const query = `SELECT * FROM search WHERE short_id = ${this.short_id}`;
            const response = await db.any(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = Search;