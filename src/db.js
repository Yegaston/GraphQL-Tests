import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/graphqltest', {
            useNewUrlParser: true
        })
        console.log('>>> db is connected');
    }
    catch (err){
        console.log("Error");
        console.log(err)
    }
}


