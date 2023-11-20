
import React from 'react';
import './Post.scss'; 

import postsData from './Post.json';

const Posts = () => {
    return (
        <div className="Posts">
            <div className='totalpost'>
                <h2>{postsData.length} Posts</h2>
            </div>

            <div className="postlist">
                {postsData.map((post) => (
                    <div className="post-cards" key={post.id}>
                        <div className="head-like">
                            <h1>{post.title}</h1>
                            <p>👍</p>
                        </div>
                        <p>{post.content}</p>
                        <div className="post-footer">
                            <p>
                                <span>{post.author}</span> By Shakshi Kumari
                            </p>
                            <p>
                                {post.date} - <span>{post.readTime}</span> -{' '}
                                <span>{post.views} Views</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
