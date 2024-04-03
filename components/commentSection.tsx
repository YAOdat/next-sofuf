'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Spacer, Link, Textarea, Input, Image, Badge, CardFooter, Button, Avatar } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { DocumentData, addDoc, collection, getDocs, deleteDoc, getDoc, doc } from 'firebase/firestore';
import { app } from '../config/firebase';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Linkify from 'react-linkify';

interface CommentSectionProps {
    commenterName: string;
    comment: string;
    commentDate: string;
    postID: string;
}
const auth = getAuth();
const db = getFirestore();


const CommentSection: React.FC<CommentSectionProps> = ({ postID }) => {
    const [commentDetails, setCommentDetails] = useState({ commenterName: '', comment: '', commentDate: new Date().toISOString().split('T')[0], postID: '' });
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [commentsList, setCommentsList] = useState<DocumentData[]>([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Store any errors during deletion

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const db = getFirestore(app);
        const commentCollection = collection(db, 'comments');

        try {
            await addDoc(commentCollection, commentDetails);
            console.log('Comment submitted successfully!');
            // refresh the page and scroll to the comment section
            window.location.reload();

        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    // request comments from the database

    useEffect(() => {
        const fetchComments = async () => {
            setIsLoading(true);
            const commentSnapshot = await getDocs(collection(db, 'comments')); // Declare commentSnapshot variable
            const commentsList: { id: string; postID: string }[] = commentSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id, // Include doc ID in each comment object
                postID: doc.data().postID, // Include postID in each comment object
            }));
            // setCommentsList(commentsList.filter((commentsList) => commentsList.postID === postID)); // Filter by postID
            setCommentsList(commentsList);
        };

        fetchComments();
    }, [postID]); // Re-fetch on postID change



    const handleDelete = async (comment: DocumentData) => {
        if (!window.confirm('Are you sure you want to delete this comment?')) return; // Confirmation prompt

        setIsLoading(true);
        setError(null);

        try {
            const db = getFirestore(app);
            const commentRef = doc(db, 'comments', comment.id); // Use doc reference with ID
            await deleteDoc(commentRef);
            setCommentsList(commentsList.filter((c) => c.id !== comment.id)); // Update local state
            console.log('Comment deleted successfully!');
        }
        finally {
            setIsLoading(false);
        }
    };


    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // User is signed in
            const userDoc = doc(db, 'users', user.uid);
            const userSnapshot = await getDoc(userDoc);

            if (userSnapshot.exists()) {
                const userData = userSnapshot.data();
                const email = userData.email;
                const role = userData.role;
                setIsAdmin(role === 'admin');
            } else {
                console.error('User document not found:', user.uid);
            }
        }
    });

    return (
        <div>
            <div className="overflow-auto break-words">
                <h3 className="text-2xl font-bold mt-8 my-2">Comments:</h3>
                <Button onPress={onOpen} color="primary" variant="flat" className="my-1">
                    Write a Comment
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Write a Comment</ModalHeader>
                                <ModalBody>
                                    <form onSubmit={handleSubmit}>

                                        <Input placeholder="Name" className="my-2" value={commentDetails.commenterName} onChange={(e) => setCommentDetails({ ...commentDetails, commenterName: e.target.value })} />
                                        <Textarea
                                            label="Comment"
                                            placeholder="Enter your comment"
                                            className="max-w-xs my-2"
                                            value={commentDetails.comment}
                                            onChange={(e) => setCommentDetails({ ...commentDetails, comment: e.target.value })}
                                        />
                                        <Button color="primary" variant="flat" className="my-1" onPress={onClose} type="submit">
                                            Post Comment
                                        </Button>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Cancel
                                        </Button>
                                    </form>
                                </ModalBody>

                            </>
                        )}
                    </ModalContent>
                </Modal>
                <Spacer y={1} />
                {commentsList.map((comment: DocumentData, index: React.Key | null | undefined) => (
                    <Card key={index} className="p-1 mt-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <CardHeader>
                            <Badge
                                content="Guest"
                                size="md"
                                color="warning"
                                className="font-bold text-xs py-1 px-2"
                            >
                                <Avatar isBordered color="warning" showFallback src='https://images.unsplash.com/broken' />
                            </Badge>
                            <Spacer x={0.5} />
                            <div className="pl-4">
                                <div className="font-bold text-[12.5px]">{comment.commenterName}</div>
                                <div className="text-small text-default-500">
                                    {comment.commentDate}
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody>
                        <Linkify
                            linkDecorator={(decoratedHref, decoratedText, key) => (
                                <a
                                    href={decoratedHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={key}
                                    style={{ fontSize: '12px', color: 'red' }}
                                >
                                    {decoratedText}
                                </a>
                            )}
                        >
                            <p className="text-[13px]">{comment.comment}</p>
                        </Linkify>                     </CardBody>
                        <CardFooter>
                            {isAdmin && (
                                <Button color="danger" onClick={() => handleDelete(comment)}>
                                    Delete
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;

