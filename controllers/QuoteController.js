var QuoteModel = require('../models/QuoteModel.js');

/**
 * QuoteController.js
 *
 * @description :: Server-side logic for managing Quotes.
 */
module.exports = {

    /**
     * QuoteController.list()
     */
    list: function (req, res) {
        QuoteModel.find(function (err, Quotes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Quote.',
                    error: err
                });
            }
            return res.json(Quotes);
        });
    },

    /**
     * QuoteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        QuoteModel.findOne({_id: id}, function (err, Quote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Quote.',
                    error: err
                });
            }
            if (!Quote) {
                return res.status(404).json({
                    message: 'No such Quote'
                });
            }
            return res.json(Quote);
        });
    },

    /**
     * QuoteController.random()
     */
     random: function (req, res) {
         QuoteModel.find(function (err, Quotes) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Quote.',
                     error: err
                 });
             }
             return res.render('index', Quotes[Math.floor(Math.random()*Quotes.length)]);
         });
     },

    /**
     * QuoteController.create()
     */
    create: function (req, res) {
        var Quote = new QuoteModel({			content : req.body.content,
      author  : req.body.author
        });

        Quote.save(function (err, Quote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Quote',
                    error: err
                });
            }
            return res.status(201).json(Quote);
        });
    },

    /**
     * QuoteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        QuoteModel.findOne({_id: id}, function (err, Quote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Quote',
                    error: err
                });
            }
            if (!Quote) {
                return res.status(404).json({
                    message: 'No such Quote'
                });
            }

            Quote.content = req.body.content ? req.body.content : Quote.content;
            Quote.save(function (err, Quote) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Quote.',
                        error: err
                    });
                }

                return res.json(Quote);
            });
        });
    },

    /**
     * QuoteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        QuoteModel.findByIdAndRemove(id, function (err, Quote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Quote.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
