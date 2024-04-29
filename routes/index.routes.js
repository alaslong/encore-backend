const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking.model")
const Company = require("../models/Company.model")
const Event = require("../models/Event.model")
const Team = require("../models/Team.model")
const Provider = require("../models/Provider.model")
const User = require("../models/User.model")

// GET /api/ - TEST
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// Company API routes

// GET /api/company/ - get all companies
router.get("/company" , (req, res, next) => {
  Company
    .find()
    .then(companies => {
      res.status(200).json(companies);
    })
    .catch(err => {
      next(err);
    })
})

// GET /api/company/:id - get company by ID
router.get("/company/:id", (req, res, next) => {
  
  const {id} = req.params;

  Company
    .findById(id)
    .then(company => {
      res.status(200).json(company);
    })
    .catch(err => {
      next(err);
    })

})

// GET /api/company/:id/teams - get teams of company
router.get("/company/:id/teams", (req, res, next) => {
  
  const {id} = req.params;

  Team
    .find({company: id})
    .then(teams => {
      res.status(200).json(teams);
    })
    .catch(err => {
      next(err);
    })

})

// GET /api/company/:id/bookings - get bookings of company
router.get("/company/:id/bookings", (req, res, next) => {
  
  const {id} = req.params;

  Booking
    .find({company: id})
    .then(bookings => {
      res.status(200).json(bookings);
    })
    .catch(err => {
      next(err);
    })

})

// POST /api/company/ - create new company
router.post("/company", (req, res, next) => {

  const {name, description} = req.body;

  Company
    .create({name, description})
    .then(newCompany => {
      res.status(201).json(newCompany)
    })
    .catch(err => {
      next(err);
    })

})


// Team API routes

// GET /api/teams/ - get all teams
router.get("/team" , (req, res, next) => {
  Team
    .find()
    .then(teams => {
      res.status(200).json(teams);
    })
    .catch(err => {
      next(err);
    })
})

// GET /api/team/:id - get team by ID
router.get("/team/:id", (req, res, next) => {
  
  const {id} = req.params;

  Team
    .findById(id)
    .then(team => {
      res.status(200).json(team);
    })
    .catch(err => {
      next(err);
    })

})

// GET /api/team/:id/members - get members of team
router.get("/team/:id/members", (req, res, next) => {
  
  const {id} = req.params;

  User
    .find({team: id})
    .then(members => {
      res.status(200).json(members);
    })
    .catch(err => {
      next(err);
    })

})

// GET /api/team/:id/bookings - get bookings of team
router.get("/team/:id/bookings", (req, res, next) => {
  
  const {id} = req.params;

  Booking
    .find({company: id})
    .then(bookings => {
      res.status(200).json(bookings);
    })
    .catch(err => {
      next(err);
    })

})

// POST /api/team/ - create new team
router.post("/team", (req, res, next) => {

  const {name, description, budget_per_member} = req.body;

  Team
    .create({name, description, budget_per_member})
    .then(newTeam => {
      res.status(201).json(newTeam)
    })
    .catch(err => {
      next(err);
    })

})

// Provider API routes

// GET /api/provider/ - get all providers
router.get("/provider" , (req, res, next) => {
  Provider
    .find()
    .then(serviceProviders => {
      res.status(200).json(serviceProviders);
    })
    .catch(err => {
      next(err);
    })
})

// GET /api/provider/:id - get provider by ID
router.get("/provider/:id", (req, res, next) => {
  
  const {id} = req.params;

  Provider
    .findById(id)
    .then(provider => {
      res.status(200).json(provider);
    })
    .catch(err => {
      next(err);
    })

})

// GET /api/provider/:id/events - get events of provider
router.get("/provider/:id/events", (req, res, next) => {
  
  const {id} = req.params;

  Event
    .find({provider: id})
    .then(events => {
      res.status(200).json(events);
    })
    .catch(err => {
      next(err);
    })

})

// GET /api/provider/:id/bookings - get bookings of provider
router.get("/provider/:id/bookings", (req, res, next) => {
  
  const {id} = req.params;

  Booking
    .find({provider: id})
    .then(bookings => {
      res.status(200).json(bookings);
    })
    .catch(err => {
      next(err);
    })

})

// POST /api/provider/ - create new provider
router.post("/provider", (req, res, next) => {

  const {name, description, address, image} = req.body;

  Provider
    .create({name, description, address, image})
    .then(newProvider => {
      res.status(201).json(newProvider)
    })
    .catch(err => {
      next(err);
    })

})

// Event API routes

// GET /api/event/ - get all events
router.get("/event" , (req, res, next) => {
  Event
    .find()
    .then(events => {
      res.status(200).json(events);
    })
    .catch(err => {
      next(err);
    })
})

// GET /api/event/:id - get event by ID
router.get("/event/:id", (req, res, next) => {
  
  const {id} = req.params;

  Event
    .findById(id)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      next(err);
    })

})

// GET /api/event/:id/bookings - get bookings of event
router.get("/event/:id/bookings", (req, res, next) => {
  
  const {id} = req.params;

  Booking
    .find({event: id})
    .then(bookings => {
      res.status(200).json(bookings);
    })
    .catch(err => {
      next(err);
    })

})

// POST /api/event/ - create new event
router.post("/event", (req, res, next) => {

  const {name, description, price_per_person, provider} = req.body;

  Event
    .create({name, description, price_per_person, provider})
    .then(newEvent => {
      res.status(201).json(newEvent)
    })
    .catch(err => {
      next(err);
    })

})

// Booking API routes

// GET /api/booking/ - get all bookings
router.get("/booking" , (req, res, next) => {
  Booking
    .find()
    .then(bookings => {
      res.status(200).json(bookings);
    })
    .catch(err => {
      next(err);
    })
})

// GET /api/booking/:id - get booking by ID
router.get("/booking/:id", (req, res, next) => {
  
  const {id} = req.params;

  Booking
    .findById(id)
    .then(booking => {
      res.status(200).json(booking);
    })
    .catch(err => {
      next(err);
    })

})

// POST /api/booking/ - create new booking
router.post("/booking", (req, res, next) => {

  const {company, team, manager, attendees, provider, event, date, time} = req.body;

  Booking
    .create({company, team, manager, attendees, provider, event, date, time})
    .then(newBooking => {
      res.status(201).json(newBooking)
    })
    .catch(err => {
      next(err);
    })

})




module.exports = router;
