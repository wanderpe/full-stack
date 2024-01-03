"use client"

import React, { useState } from 'react'

export default function PostForm ({ }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    async function handleSubmit (e) {
        e.preventDefault();

        const response = await fetch('/api/addpost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({title, content}),
        });
    
        if (response.ok) {
            console.log("Post submitted successfully")
    
        } else {
            console.error('Error submitting post:', response.statusText);
        }
    
        
        setTitle('');
        setContent('');
    };

   
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <br />
            <label>
                Content:
                <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}