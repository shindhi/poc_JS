import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=5"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postList" >
        {posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    )
  }
}

export default PostList;