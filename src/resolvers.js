import { tasks } from './sample'

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world with graphql';
        },
        greet(root, { name }) {
            console.log(name);
            return `Dale! - ${name}`
        },
        tasks(){
            return tasks;
        },
    },
    Mutation: {
        createTask(_, { input }) {
            console.log(input);
            return null;
        }
    }
}