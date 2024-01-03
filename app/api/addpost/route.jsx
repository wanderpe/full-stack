import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  //const { title, content } = request.body;
  const {title, content} = await request.json() 
  console.log({ title, content })
  
  const post = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: 'harvy'
        }
      }
      
    }
  })
  return NextResponse.json({post}, { status: 200 })
  


  // if (req.method === 'POST') {
  //   const { title, content } = req.body;

  //   try {
  //     // Use Prisma to create a new post in the database
  //     const newPost = await prisma.post.create({
  //       data: {
  //         title,
  //         content,
  //       },
  //     });

  //     res.status(201).json({ success: true, data: newPost });
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //     res.status(500).json({ success: false, error: 'Internal Server Error' });
  //   }
  // } else {
  //   res.status(405).json({ success: false, error: 'Method Not Allowed' });
  // }
}