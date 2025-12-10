// convex/users.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const user = await ctx.db.query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .collect();

    if (!user[0]) {
      const userData={
        name: args.name,
        email: args.email,
        picture: args.picture, // match the args
        credits: 3
      }
      // Insert new user
      const result = await ctx.db.insert("users", userData);
      return userData;
    }

    // If user exists, return existing user
    return user[0];
  },
});
