import User from '../models/index.js';
// const User = models.User
import { signToken } from '../utils/auth.js';

const resolvers = {
  Query: {
    getSingleUser: async (_parent: any, _args: any, context: any) => {
      const foundUser = await User.findOne({
        _id: context.user._id
      });

      if (!foundUser) {
        return null;
      }

      return (foundUser);
    }
  },

  Mutation: {
    createUser: async (_parent: any, args: any) => {
      const user = await User.create(args);

      if (!user) {
        return null;
      }
      const token = signToken(user.username, user.password, user._id);
      return ({ token, user })
    },

    login: async (_parent: any, args: any) => {
      const user = await User.findOne({ $or: [{ email: args.email }] });
      if (!user) {
        return null;
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        return null;
      }
      const token = signToken(user.username, user.password, user._id);
      return ({ token, user })
    },

    saveBook: async (_parent: any, args: any, context: any) => {
      console.log(args);
      
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: args.bookData } },
          { new: true, runValidators: true }
        );
        return (updatedUser);
      } catch (err) {
        console.log(err);
        return null;
      }
    },

    deleteBook: async (_parent: any, args: any, context: any) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: args.bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        return null;
      }
      return (updatedUser)
    }
  }
}

export default resolvers;
