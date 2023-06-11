import React from 'react';
import { PostDTO } from './api/models/PostDTO';
import BlogPost from './BlogPost';

type Props = {
  blogPosts: PostDTO[];
};

function BlogPosts({ blogPosts }: Props) {
  return (
    <div>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogPosts;
