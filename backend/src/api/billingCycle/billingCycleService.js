const billingCycle = require('./billingCycle')

billingCycle.methods(['get', 'post', 'put', 'delete'])
billingCycle.updateOptions({new: true, runValidators: true})

billingCycle.route('get', (req, res, next) => {

  billingCycle.find({}, (err, docs) => {

      if(!err) {

          res.json(docs)

      } else {

          res.status(500).json({errors: [error]})

      }

  })

})

module.exports = billingCycle