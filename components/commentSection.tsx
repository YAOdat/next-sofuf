'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
    Card, CardBody, CardHeader, Spacer, Link, Textarea, Input, Badge, CardFooter, Button, Avatar
} from "@nextui-org/react";
import {
    Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure
} from "@nextui-org/react";
import {
    addDoc, collection, getDocs, deleteDoc, getDoc, doc, DocumentData, FirestoreError
} from 'firebase/firestore';
import { app } from '../config/firebase';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import Linkify from 'react-linkify';

// Define the comment type
interface Comment {
    id: string;
    commenterName: string;
    comment: string;
    commentDate: string;
    postID: string;
}

interface CommentSectionProps {
    postID: string;
}

const auth = getAuth();
const db = getFirestore(app);

const CommentSection: React.FC<CommentSectionProps> = ({ postID }) => {
    const [commentDetails, setCommentDetails] = useState<Omit<Comment, 'id'>>({
        commenterName: '',
        comment: '',
        commentDate: new Date().toISOString().split('T')[0],
        postID
    });
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [commentsList, setCommentsList] = useState<Comment[]>([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const db = getFirestore(app);
        const commentCollection = collection(db, 'comments');

        try {
            await addDoc(commentCollection, commentDetails);
            console.log('Comment submitted successfully!');
            window.location.reload();
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const fetchComments = useCallback(async () => {
        setIsLoading(true);
        try {
            const commentSnapshot = await getDocs(collection(db, 'comments'));
            const fetchedComments = commentSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })) as Comment[];
            setCommentsList(fetchedComments.filter((comment) => comment.postID === postID));
        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setIsLoading(false);
        }
    }, [postID]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    const handleDelete = async (comment: Comment) => {
        if (!window.confirm('Are you sure you want to delete this comment?')) return;

        setIsLoading(true);
        setError(null);

        try {
            const db = getFirestore(app);
            const commentRef = doc(db, 'comments', comment.id);
            await deleteDoc(commentRef);
            setCommentsList(commentsList.filter((c) => c.id !== comment.id));
            console.log('Comment deleted successfully!');
        } catch (error) {
            console.error('Error deleting comment:', error);
            setError('Failed to delete comment.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
            if (user) {
                const userDoc = doc(db, 'users', user.uid);
                const userSnapshot = await getDoc(userDoc);
                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();
                    const role = userData.role;
                    setIsAdmin(role === 'admin');
                } else {
                    console.error('User document not found:', user.uid);
                }
            }
        });
        return () => unsubscribe();
    }, []);

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
                                        <Input
                                            placeholder="Name"
                                            className="my-2"
                                            value={commentDetails.commenterName}
                                            onChange={(e) => setCommentDetails({ ...commentDetails, commenterName: e.target.value })}
                                        />
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
                {isLoading ? (
                    <p>Loading comments...</p>
                ) : (
                    commentsList.map((comment) => (
                        <Card key={comment.id} className="p-1 mt-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
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
                                </Linkify>
                            </CardBody>
                            <CardFooter>
                                {isAdmin && (
                                    <Button color="danger" onClick={() => handleDelete(comment)}>
                                        Delete
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentSection;
