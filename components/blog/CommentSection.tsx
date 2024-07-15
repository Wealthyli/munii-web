"use client"
import React, { useState, useEffect } from 'react';
import { CommentCard } from '../cards';
import CustomButton from '../CustomButton';
import { addComment, fetchComments } from '@/utils';
import { Comment } from '@/types';



interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const fetchPostComments = async () => {
      try {
        const fetchedComments = await fetchComments(postId);
        setComments(fetchedComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchPostComments();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addComment({ name, email, comment: commentText, post: postId });
      const newComment: Comment = {
        _id: '',
        name,
        email,
        comment: commentText,
        createdAt: new Date().toISOString(),
      };
      setComments([...comments, newComment]);
      setName('');
      setEmail('');
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <section className='mt-8'>
      <h1 className='text-2xl'>Comments ({comments.length})</h1>
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment._id} name={comment.name} date={comment.createdAt} comment={comment.comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      <div className='mt-8'>
        <h1 className='text-2xl'>Post Your Comment</h1>
        <form className='flex flex-col gap-4 mt-8 items-start max-w-[715px]' onSubmit={handleSubmit}>
          <div className='flex sm:flex-row flex-col items-start justify-between gap-4 w-full'>
            <input
              type="text"
              placeholder='Enter Your Name Here'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[348px] border border-[#c9c4c4cc] p-4 rounded-3xl"
              required
            />
            <input
              type="email"
              placeholder='Enter Your Email Here'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[348px] border border-[#c9c4c4cc] p-4 rounded-3xl"
              required
            />
          </div>
          <textarea
            name=""
            id=""
            className='w-full h-[192px] border border-[#c9c4c4cc] p-4 rounded-3xl'
            placeholder='Write Your Comment'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          ></textarea>
          <CustomButton color='default' action={() => { }}>
            Post Comment
          </CustomButton>
        </form>
      </div>
    </section>
  );
}

export default CommentSection;
