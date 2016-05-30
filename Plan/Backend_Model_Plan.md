User model = {
username      : {type: string,required: true, unique: true},
firstName     : {type: string},
lastName      : {type: string},
image         : {type: string},
email         : { type: String, required: true, unique: true },
passwordHash  : { type: String }
hobbies       : {type: mongoose.Schema.ObjectId, ref: 'Hobby'}
},{
    timestamps: true
    }
}


Hobby model = {
name        : {type : string},
description : {type : string},
category    : {type: mongoose.Schema.ObjectId, ref: 'Category'},
hobbiesAnswers     : {type: 'HobbiesAnswer', HobbiesAnswerSchema}
}


HobbiesAnswer model = {
 round1 : {type: string},
 round2 : {type: string}
}

Category model  = {
name            : {type : string},
categoryAnswer  : {type: 'CategoryAnswer', CategoryAnswerSchema}
}

CategoryAnswer model = {
round1 : {type: string},
round2 : {type: string}
}
