const rp = require("request-promise");
const cheerio = require('cheerio')
exports.getAllList = async (req, res, next) => {
    try {
        // data offset 0
        let bodyData = { "filters": { "gender": null, "price_range": [0, 15000000], "tag_ids": [], "rent_type": 2, "property_type": "all", "random_seeds": 166, "booking": 0 }, "sorting": { "fields": "price", "direction": "-" }, "include_promoted": false, "limit": 20, "offset": 0, "location": [[110.38792133331299, -7.771546159551934], [110.4101085662842, -7.740036790436441]] }
        let optionsGetList = {
            method: 'POST',
            uri: 'https://mamikos.com/garuda/stories/cluster',
            body: bodyData,
            json: true
        };

        let body = await rp(optionsGetList)
        let { rooms } = body
        let roomsLength = Array.from(rooms).length

        for (let i = 0; i < roomsLength; i++) {
            let body = await rp(rooms[i].share_url)
            let $ = cheerio.load(body)
            let cmd = $('script').get()[14].children[0].data
            eval(cmd)
            rooms[i].price_card_info = price_card_info
            rooms[i].detail = detail
        }
        res.json(rooms)

    } catch (error) {
        console.log('error :', error);
    }
}

