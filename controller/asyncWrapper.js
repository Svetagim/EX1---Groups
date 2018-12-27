//returning error when the client can't reach the route

module.exports = (fn) => (req, res, next) => {
    try { fn(req, res, next) } catch(err) {
        console.error('some error occurred', err);
        res.status(500).send(err.message);
    }
}