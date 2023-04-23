

module.exports.home = async (req, res) => {

    return res.render('home', {
        title: "Placement Cell App"
    });
    
}

