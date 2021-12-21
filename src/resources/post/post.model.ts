import { Schema , model } from 'mongoose';
import Post from '@/resources/post/post.interface';

const PostSchema = new Schema({
    title:{}, 
    body: {}, 
    
},
{ timestamps: true }
);

export default model<Post>('Post', PostSchema);