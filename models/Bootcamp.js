const mongoose  = require('mongoose')


const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'name cannot be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'please you have to add a description'],
        maxlength: [500, 'you have reached you character limit for this option']
    },
    wensite: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'please use a valid Url with http or Https'
        ]
    },
    address: {
        type: String,
        required: [true, 'please add an address'],
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
          },
          coordinates: {
            type: [Number],
            required: true,
          },
          country: String,
          state: String,
          zipcode: String,
          street: String,
          formattedAddress: String,
          country: String,
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other',
        ]
    },
 averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'rating cannot be more than 10']
    },
    averageCost: Number,

});

module.exports = mongoose.model('bootcamp', BootcampSchema)


