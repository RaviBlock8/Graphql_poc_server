import { BlogPosts } from "../entity/BlogPosts";
import { Writer } from "../entity/Writer";
import { getRepository } from "typeorm";

export const resolvers = {
  Query: {
    //get posts query
    BlogPosts: async () => {
      console.log("we are hitting query end point");
      const blogRepository = await getRepository(BlogPosts);
      const blogs = blogRepository.find();
      return blogs;
    },
    //get writer query
    Writer: async (parent, args) => {
      const WriterRepo = await getRepository(Writer);
      let nwid = parseInt(args.wid);
      let writer = await WriterRepo.find({ wid: nwid });
      return writer[0];
    },
  },
  Mutation: {
    //addBlog mutation
    addBlog: async (parent, args) => {
      const blogRepository = await getRepository(BlogPosts);
      let post = args.post;
      let newObj = {
        wid: args.wid,
        post: post,
        postDate: Date.now().toLocaleString(),
      };
      let res = await blogRepository.save(newObj);
      return res;
    },
    //add writer mutation
    addWriter: async (parent, args): Promise<Writer> => {
      let newObj = {
        name: args.name,
        password: args.password,
        joiningDate: Date.now().toLocaleString(),
      };
      const WriterRepo = await getRepository(Writer);
      let res: Writer = await WriterRepo.save(newObj);
      return res;
    },
  },
  //resolve writer field of BlogPostType
  BlogPostType: {
    writer: async (parent, args) => {
      const WriterRepo = await getRepository(Writer);
      const nwid = parseInt(parent.wid);
      const res = await WriterRepo.findOne({ wid: nwid });
      return res;
    },
  },
  //resolve posts field of WriterType
  WriterType: {
    posts: async (parent, args) => {
      const blogRepository = await getRepository(BlogPosts);
      let wid = parent.wid;
      let blogs = await blogRepository.find({ wid: wid });
      return blogs;
    },
  },
};
